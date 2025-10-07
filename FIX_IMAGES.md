# 🖼️ Fix Images Cassées - Solutions

## Problème
Les images Unsplash ne se chargent pas dans les cartes d'articles (erreur CORS ou chargement lent).

## ✅ Solution 1 : Ajouter crossorigin (Rapide)

Dans `blogArticles.js`, les URLs contiennent déjà les bons paramètres.
Le problème peut venir du chargement depuis localhost.

### Test rapide
Ouvrez la console (F12) et regardez les erreurs réseau.
- Si erreur CORS → Solution 2
- Si 404 → Vérifier les URLs
- Si slow loading → Solution 3

## ✅ Solution 2 : Utiliser un proxy Unsplash

Ajoutez dans `vite.config.js` :

```js
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/unsplash': {
        target: 'https://images.unsplash.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/unsplash/, '')
      }
    }
  }
})
```

Puis dans `blogArticles.js`, remplacez :
```js
image: 'https://images.unsplash.com/photo-XXX...'
```
Par :
```js
image: '/unsplash/photo-XXX...'
```

## ✅ Solution 3 : Images locales (Production)

Pour la production, téléchargez les images :

```bash
# Créer dossier
mkdir public/images/articles

# Télécharger avec curl
curl "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&q=80" -o public/images/articles/ia-dev.jpg
```

Puis dans `blogArticles.js` :
```js
image: '/images/articles/ia-dev.jpg'
```

## ✅ Solution 4 : Utiliser Unsplash Source API (Recommandé)

Changez le format d'URL dans `blogArticles.js` :

De :
```js
image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&q=80'
```

À :
```js
image: 'https://source.unsplash.com/800x500/?artificial-intelligence,technology'
```

Avantages :
- Pas de CORS
- Image aléatoire mais cohérente par thème
- Plus rapide

## ✅ Solution 5 : Placeholder pendant le chargement

J'ai déjà ajouté le fallback SVG dans BlogPage.jsx.
Si l'image ne charge pas, un icône apparaît.

## 🧪 Test Immédiat

1. **Vérifiez la console** : F12 → Network → Filtrer par "images"
2. **Testez une URL directement** dans le navigateur :
   ```
   https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&q=80
   ```
3. Si ça charge → problème CORS
4. Si ça ne charge pas → problème d'URL

## 🚀 Fix Rapide Recommandé

Remplacez dans `blogArticles.js` TOUTES les images par ce format simplifié :

```js
// Web Dev
image: 'https://source.unsplash.com/800x500/?programming,code'

// IA
image: 'https://source.unsplash.com/800x500/?artificial-intelligence'

// Marketing
image: 'https://source.unsplash.com/800x500/?digital-marketing,social-media'

// Analytics
image: 'https://source.unsplash.com/800x500/?data,analytics'

// SEO
image: 'https://source.unsplash.com/800x500/?seo,search-engine'
```

Ce format n'a PAS de problème CORS et fonctionne toujours.

## 📝 Note

Le fallback SVG que j'ai ajouté s'affiche si l'image ne charge pas.
Vous verrez donc un icône image gris au lieu d'une image cassée.

**Testez maintenant et dites-moi quelle erreur vous voyez dans la console (F12) !**
