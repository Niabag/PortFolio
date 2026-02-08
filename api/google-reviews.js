// Vercel Serverless Function — Récupère les avis Google Places
// Variables d'environnement requises dans Vercel Dashboard :
//   GOOGLE_PLACES_API_KEY = ta clé API Google Cloud (avec Places API activée)
//   GOOGLE_PLACE_ID = l'ID de ton établissement Google Business

let cachedData = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 3600000; // 1 heure

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.siteonweb.fr');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return res.status(500).json({ error: 'Google API not configured', reviews: [] });
  }

  // Retourner le cache si encore valide
  if (cachedData && Date.now() - cacheTimestamp < CACHE_DURATION) {
    return res.status(200).json(cachedData);
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&language=fr&reviews_sort=newest&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK' || !data.result) {
      return res.status(500).json({ error: 'Google API error', reviews: [] });
    }

    const allReviews = data.result.reviews || [];

    // Filtrer uniquement les avis 4 et 5 étoiles, garder les 3 plus récents
    const topReviews = allReviews
      .filter(review => review.rating >= 4)
      .slice(0, 3)
      .map(review => ({
        name: review.author_name,
        rating: review.rating,
        text: review.text,
        timeAgo: review.relative_time_description,
        profilePhoto: review.profile_photo_url || null
      }));

    const result = {
      reviews: topReviews,
      averageRating: data.result.rating || 5,
      totalReviews: data.result.user_ratings_total || 0
    };

    // Mettre en cache
    cachedData = result;
    cacheTimestamp = Date.now();

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=7200');
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch reviews', reviews: [] });
  }
}
