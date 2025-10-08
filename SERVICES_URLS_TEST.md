# URLs de Services - Test

## URLs disponibles

Les URLs suivantes devraient fonctionner :

1. **Stratégie digitale** : `/services/strategie-digitale`
2. **Création de sites web** : `/services/creation-de-sites-web`
3. **Référencement & Performance** : `/services/referencement-performance`
4. **Marketing & Réseaux sociaux** : `/services/marketing-reseaux-sociaux`
5. **Communication & Branding** : `/services/communication-branding`
6. **Analyse & Optimisation** : `/services/analyse-optimisation`

## Comment tester en local

1. Arrêtez le serveur de développement s'il est en cours
2. Exécutez : `npm run dev`
3. Testez une URL comme : `http://localhost:5173/services/strategie-digitale`

## Comment déployer sur Vercel

1. Commit les changements : `git add . && git commit -m "Fix service URLs routing"`
2. Push : `git push`
3. Attendez le déploiement Vercel (automatique si configuré)
4. Testez une URL comme : `https://siteonweb.fr/services/strategie-digitale`

## Changements effectués

### 1. vite.config.js
- Ajout d'un middleware de rewrite pour gérer les URLs `/services/:slug` en local
- Les URLs `/services/xxx` sont maintenant automatiquement redirigées vers `/service.html?slug=xxx`

### 2. vercel.json
- Déplacé `/services` et `/services/` vers les redirects (au lieu de rewrites)
- Gardé uniquement le rewrite pour `/services/:slug`
- Simplifié la configuration

### 3. 404.html
- Supprimé le script JavaScript de redirection
- Amélioré le design de la page 404
- Ajouté plus de liens utiles

## Si ça ne marche toujours pas

1. Vérifiez que le build fonctionne : `npm run build`
2. Testez le preview : `npm run preview`
3. Vérifiez la console du navigateur pour les erreurs
4. Sur Vercel, vérifiez les logs de déploiement
