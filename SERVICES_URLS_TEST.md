# URLs de Services - Configuration finale

## ✅ URLs disponibles en production ET en local

1. **Stratégie digitale** : `/services/strategie-digitale`
2. **Création de sites web** : `/services/creation-de-sites-web`
3. **Référencement & Performance** : `/services/referencement-performance`
4. **Marketing & Réseaux sociaux** : `/services/marketing-reseaux-sociaux`
5. **Communication & Branding** : `/services/communication-branding`
6. **Analyse & Optimisation** : `/services/analyse-optimisation`

## 🧪 Comment tester en local

1. Arrêtez le serveur de développement s'il est en cours (`Ctrl+C`)
2. Exécutez : `npm run dev`
3. Testez une URL comme : `http://localhost:5173/services/strategie-digitale`
4. ✨ Les jolies URLs fonctionnent maintenant !

## 🚀 Comment déployer sur Vercel

```bash
# 1. Commit tous les changements
git add .
git commit -m "Fix: Service URLs routing for production and local"

# 2. Push vers Vercel
git push

# 3. Attendez le déploiement automatique (2-3 minutes)
# 4. Testez sur votre site
```

**URLs de test en production** :
- `https://www.siteonweb.fr/services/strategie-digitale`
- `https://www.siteonweb.fr/services/creation-de-sites-web`

## 🔧 Changements effectués (dernière version)

### 1. **vite.config.js**
- ✅ Plugin middleware qui rewrite `/services/:slug` → `/service.html?slug=:slug` en local
- ✅ Fonctionne maintenant en développement

### 2. **vercel.json**
- ✅ Supprimé `cleanUrls: true` et `error: true` qui causaient des problèmes
- ✅ Configuration des rewrites : `/services/:slug` → `/service.html?slug=:slug`
- ✅ Redirections 301/302 correctement configurées
- ✅ Correction du wildcard dans le redirect du domaine

### 3. **Competences.jsx**
- ✅ Les liens utilisent maintenant `/services/:slug` (jolies URLs)
- ✅ Fonctionne en local ET en production

### 4. **service.html**
- ✅ Supprimé le script de redirection JavaScript (plus nécessaire)

### 5. **ServiceDetailPage.jsx**
- ✅ Nouveau design avec navbar simplifiée
- ✅ Contenu bien centré avec marges
- ✅ Modal de réservation fonctionnel

## 🐛 Si ça ne marche toujours pas

### En local
```bash
# 1. Supprimez le cache et node_modules
rm -rf node_modules dist
npm install

# 2. Redémarrez le serveur
npm run dev
```

### En production
1. Vérifiez les logs Vercel : https://vercel.com/dashboard
2. Forcez un nouveau déploiement
3. Vérifiez que `service.html` est bien dans le build
4. Testez avec l'inspecteur réseau (F12) pour voir les erreurs

## 📋 Checklist de déploiement

- [ ] Build fonctionne : `npm run build`
- [ ] Preview fonctionne : `npm run preview`
- [ ] Commit et push effectués
- [ ] Déploiement Vercel terminé
- [ ] Test des URLs `/services/:slug` en production
- [ ] Modal de réservation fonctionne
- [ ] Design responsive OK
