# 🐛 Debug - Page blanche sur "En savoir plus"

## Étapes de débogage

### 1. Ouvrir la console du navigateur

1. **Appuyez sur F12** (ou clic droit → Inspecter)
2. Allez dans l'onglet **Console**
3. **Cliquez sur "En savoir plus"** sur un service
4. **Regardez les erreurs en rouge** dans la console

### 2. Erreurs communes et solutions

#### Erreur : `Failed to fetch dynamically imported module`
**Cause** : Cache du navigateur ou fichiers manquants
**Solution** :
```bash
# Videz le cache du navigateur
Ctrl + Shift + R (ou Cmd + Shift + R sur Mac)

# Ou redémarrez le serveur
Ctrl + C
npm run dev
```

#### Erreur : `Cannot read properties of undefined`
**Cause** : Données manquantes dans translations
**Solution** : Vérifiez que tous les services ont bien les propriétés requises

#### Erreur : `SyntaxError: Unexpected token`
**Cause** : Erreur de syntaxe JavaScript
**Solution** : Regardez le fichier et la ligne indiqués dans l'erreur

### 3. Tester en local

```bash
# 1. Arrêtez le serveur (Ctrl+C)

# 2. Nettoyez
rm -rf node_modules dist .vite
npm install

# 3. Redémarrez
npm run dev

# 4. Testez l'URL directe
http://localhost:5173/services/creation-de-sites-web
```

### 4. Vérifier les fichiers

#### Vérifier que service.html existe
```bash
ls service.html
```

#### Vérifier que service-main.jsx existe
```bash
ls src/service-main.jsx
```

#### Vérifier que ServiceDetailPage.jsx existe
```bash
ls src/components/ServiceDetailPage.jsx
```

## 🔍 Informations à me fournir

Si la page blanche persiste, envoyez-moi :

1. **Screenshot de la console** (F12 → onglet Console) avec les erreurs
2. **L'URL exacte** où vous avez la page blanche
3. **Le message d'erreur exact** (copier-coller)

## 🧪 Test rapide

Testez ces URLs directement dans votre navigateur :

```
http://localhost:5173/
http://localhost:5173/service.html?slug=creation-de-sites-web
http://localhost:5173/services/creation-de-sites-web
```

**Quelle URL fonctionne ?** Cela m'aidera à identifier le problème.

## ⚠️ Problèmes possibles

### 1. Le serveur n'est pas démarré
```bash
npm run dev
```

### 2. Port déjà utilisé
```bash
# Si le port 5173 est utilisé, Vite utilisera 5174
# Vérifiez le message dans le terminal
```

### 3. Erreur de build
```bash
npm run build
# Regardez s'il y a des erreurs
```

## 🎯 Solution rapide

Si rien ne fonctionne, essayez cette séquence :

```bash
# 1. Stop tout
Ctrl + C

# 2. Nettoyage complet
rm -rf node_modules dist .vite package-lock.json

# 3. Réinstallation
npm install

# 4. Redémarrage
npm run dev
```

Attendez que le serveur affiche :
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
```

Puis testez : `http://localhost:5173/`
