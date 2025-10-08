# 🐛 Debug - Page blanche en production

## Étapes de débogage

### 1. Tester le build en local

```bash
# Nettoyez d'abord
rm -rf dist node_modules
npm install

# Buildez le projet
npm run build

# Testez le build en local
npm run preview
```

Si le preview fonctionne, le problème vient de Vercel. Si ça ne fonctionne pas, le problème vient du build.

### 2. Vérifier les erreurs dans la console du navigateur

1. Allez sur votre site en production
2. Appuyez sur **F12** pour ouvrir les DevTools
3. Allez dans l'onglet **Console**
4. Cherchez des erreurs en rouge

**Erreurs communes** :
- ❌ `Failed to load module` → Problème de chemins
- ❌ `Uncaught SyntaxError` → Erreur de syntaxe JavaScript
- ❌ `Cannot find module` → Dépendance manquante
- ❌ `404 Not Found` → Fichier introuvable

### 3. Vérifier l'onglet Network

1. Dans DevTools, allez dans **Network**
2. Rechargez la page (**Ctrl+R**)
3. Vérifiez quels fichiers sont chargés
4. Cherchez des fichiers en **rouge** (404) ou **jaune** (avertissements)

### 4. Vérifier les logs Vercel

1. Allez sur https://vercel.com/dashboard
2. Sélectionnez votre projet
3. Cliquez sur le dernier déploiement
4. Vérifiez les logs de build

**Cherchez ces erreurs** :
- Build failed
- Module not found
- Compilation errors

### 5. Vérifier que les fichiers sont buildés

Après `npm run build`, vérifiez que ces fichiers existent dans `dist/` :

```
dist/
  ├── index.html
  ├── service.html
  ├── assets/
  │   ├── index-[hash].js
  │   ├── service-main-[hash].js
  │   └── ... (autres fichiers)
```

## Solutions courantes

### Problème : Plugin React manquant

```bash
npm install --save-dev @vitejs/plugin-react
```

### Problème : Chemins incorrects

Vérifiez que `vite.config.js` a :
```js
base: '/'  // PAS './'
```

### Problème : Build échoue

```bash
# Réinstallez les dépendances
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Problème : Cache Vercel

1. Allez dans Vercel Dashboard
2. Cliquez sur votre projet
3. Settings → General
4. Scroll vers le bas → "Clear Build Cache & Redeploy"

## Changements récents effectués

✅ `vite.config.js` : 
- Changé `base: './'` → `base: '/'`
- Ajouté `import react from '@vitejs/plugin-react'`
- Ajouté `react()` dans les plugins

✅ `vercel.json` :
- Ajouté `buildCommand` et `outputDirectory`

## Commandes de déploiement

```bash
# 1. Vérifiez que tout fonctionne en local
npm run dev
# Testez http://localhost:5173

# 2. Buildez et testez
npm run build
npm run preview
# Testez http://localhost:4173

# 3. Si tout fonctionne, déployez
git add .
git commit -m "Fix: Production build configuration"
git push

# 4. Attendez 2-3 minutes
# 5. Videz le cache du navigateur (Ctrl+Shift+R)
# 6. Testez votre site
```

## Si rien ne marche

Partagez-moi :
1. Le message d'erreur dans la console du navigateur (screenshot)
2. Les logs de build Vercel
3. Le résultat de `npm run build` en local
