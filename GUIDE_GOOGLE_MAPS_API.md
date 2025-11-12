# 🗺️ Guide : Sécuriser votre clé Google Maps API

## ⚠️ URGENT - Clé API exposée publiquement

Une clé Google Maps API a été détectée dans votre code source public depuis le 7 octobre.
Cette clé doit être révoquée et remplacée IMMÉDIATEMENT.

---

## 📋 Étapes à suivre (dans l'ordre)

### 1️⃣ Révoquer l'ancienne clé API

1. Allez sur : https://console.cloud.google.com/google/maps-apis/credentials
2. Connectez-vous avec votre compte Google
3. Trouvez la clé : `AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`
4. Cliquez sur les trois points (⋮) à droite
5. Sélectionnez **"Supprimer"** ou **"Désactiver"**
6. Confirmez la suppression

⚠️ **Important** : Cette clé est publique depuis 3 mois, elle DOIT être révoquée !

---

### 2️⃣ Créer une nouvelle clé API restreinte

#### A. Créer la clé

1. Dans la même console : https://console.cloud.google.com/google/maps-apis/credentials
2. Cliquez sur **"+ CREATE CREDENTIALS"**
3. Sélectionnez **"API key"**
4. Une nouvelle clé sera générée (ex: `AIza...`)
5. **COPIEZ IMMÉDIATEMENT** cette clé quelque part de sûr

#### B. Restreindre la clé (CRITIQUE pour la sécurité)

1. Cliquez sur **"RESTRICT KEY"** ou éditez la clé créée
2. Donnez-lui un nom : `SiteOnWeb - Maps Embed API`

**Application restrictions :**
- Type : Sélectionnez **"HTTP referrers (web sites)"**
- Website restrictions → Ajouter :
  ```
  https://www.siteonweb.fr/*
  https://siteonweb.fr/*
  http://localhost:*
  http://127.0.0.1:*
  ```

**API restrictions :**
- Sélectionnez **"Restrict key"**
- Cochez UNIQUEMENT : **"Maps Embed API"**
- Décochez toutes les autres API

3. Cliquez sur **"SAVE"**

---

### 3️⃣ Configurer Vercel avec la nouvelle clé

1. Allez sur : https://vercel.com/dashboard
2. Sélectionnez votre projet **"Portfolio"** ou **"SiteOnWeb"**
3. Allez dans **Settings** → **Environment Variables**
4. Cliquez sur **"Add New"**

Ajoutez la variable :
- **Name** : `VITE_GOOGLE_MAPS_API_KEY`
- **Value** : `[Votre nouvelle clé API]`
- **Environments** : Cochez les 3 :
  - ✅ Production
  - ✅ Preview
  - ✅ Development

5. Cliquez sur **"Save"**

#### Redéployer le projet

Après avoir ajouté la variable :
1. Allez dans **Deployments**
2. Trouvez le dernier déploiement
3. Cliquez sur les trois points (⋮) → **"Redeploy"**
4. Attendez 1-2 minutes que le déploiement se termine

---

### 4️⃣ Mettre à jour votre fichier .env local

Sur votre ordinateur :

1. Ouvrez le fichier `.env` à la racine du projet
2. Remplacez l'ancienne clé par la nouvelle :

```env
# Google Maps API Key
VITE_GOOGLE_MAPS_API_KEY=VOTRE_NOUVELLE_CLE_ICI
```

3. Sauvegardez le fichier

---

## ✅ Vérifications après configuration

### Test 1 : Vérifier en local
```bash
npm run dev
```
Allez sur http://localhost:5173/ et vérifiez que la carte Google Maps s'affiche.

### Test 2 : Vérifier en production
Allez sur https://www.siteonweb.fr/ et vérifiez la section "Où sommes-nous situés ?"

### Test 3 : Vérifier les restrictions
Dans Google Cloud Console :
1. Allez sur votre clé API
2. Vérifiez dans "Metrics" que les requêtes proviennent uniquement de siteonweb.fr

---

## 🔒 Bonnes pratiques de sécurité

### ✅ À FAIRE :
- ✅ Toujours restreindre vos clés API
- ✅ Utiliser des variables d'environnement
- ✅ Ne JAMAIS commiter le fichier `.env` (déjà dans .gitignore)
- ✅ Créer des clés différentes pour dev/prod si possible
- ✅ Monitorer l'utilisation dans Google Cloud Console

### ❌ À NE JAMAIS FAIRE :
- ❌ Hardcoder des clés API dans le code
- ❌ Commiter des clés dans Git
- ❌ Partager des clés par email/Slack
- ❌ Utiliser des clés sans restrictions
- ❌ Réutiliser la même clé pour plusieurs projets

---

## 📊 Monitoring (recommandé)

1. Allez sur : https://console.cloud.google.com/google/maps-apis/metrics
2. Surveillez :
   - Nombre de requêtes par jour
   - Erreurs (401 = clé invalide, 403 = restriction)
   - Coût estimé

---

## 🆘 En cas de problème

### Problème : La carte ne s'affiche pas
**Solution** :
1. Vérifiez que Maps Embed API est activée dans Google Cloud
2. Vérifiez que le domaine est bien dans les restrictions
3. Regardez la console navigateur (F12) pour voir les erreurs

### Problème : Erreur 403 (Forbidden)
**Solution** :
1. Vérifiez les restrictions HTTP referrers
2. Ajoutez `https://www.siteonweb.fr/*` ET `https://siteonweb.fr/*`

### Problème : Erreur 401 (Unauthorized)
**Solution** :
1. La clé est invalide ou désactivée
2. Recréez une nouvelle clé
3. Mettez à jour Vercel et .env

---

## 📝 Résumé des fichiers modifiés

### Fichiers de configuration
- ✅ `.env` : Contient la clé (ne PAS commiter)
- ✅ `.env.example` : Template pour les autres développeurs
- ✅ `.gitignore` : Ignore le fichier .env
- ✅ `src/components/Location.jsx` : Utilise la variable d'environnement

### Code modifié
```javascript
// AVANT (❌ DANGEREUX)
const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=...`

// APRÈS (✅ SÉCURISÉ)
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=...`
```

---

## ⏱️ Temps estimé : 10-15 minutes

C'est fait ? Parfait ! Votre site est maintenant sécurisé. 🎉

---

**Date de création** : 12 novembre 2025  
**Dernière mise à jour** : 12 novembre 2025
