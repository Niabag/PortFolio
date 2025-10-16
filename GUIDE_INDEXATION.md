# Guide d'amélioration de l'indexation - SiteOnWeb

## Problème actuel
- **8 pages indexées** sur Google Search Console
- **30 pages au total** (6 pages principales + 24 articles de blog)

## ✅ Actions réalisées

### 1. Création du sitemap.xml
- ✅ Fichier `sitemap.xml` créé à la racine
- ✅ Contient toutes les 30 pages du site
- ✅ Priorisation correcte des pages

### 2. Création du robots.txt
- ✅ Fichier `robots.txt` créé à la racine
- ✅ Indique le sitemap à Google
- ✅ Bloque les fichiers non pertinents

### 3. Ajout de données structurées JSON-LD
- ✅ Script `add-structured-data.cjs` créé
- ✅ Données structurées ajoutées à `blog/checklist-seo.html`

## 🔄 Actions à compléter

### 1. Exécuter le script de données structurées
```bash
node add-structured-data.cjs
```
Ce script ajoutera automatiquement les données structurées Schema.org (BlogPosting) à tous les articles de blog.

### 2. Déployer les fichiers
Une fois les modifications effectuées, déployer sur Vercel :
```bash
git add .
git commit -m "feat: amélioration SEO - sitemap, robots.txt et données structurées"
git push
```

### 3. Soumettre le sitemap à Google Search Console

1. Aller sur [Google Search Console](https://search.google.com/search-console)
2. Sélectionner votre propriété `siteonweb.fr`
3. Menu **Sitemaps** (dans la barre latérale)
4. Ajouter un nouveau sitemap : `https://www.siteonweb.fr/sitemap.xml`
5. Cliquer sur **Envoyer**

### 4. Demander l'indexation des pages importantes

Dans Google Search Console, pour chaque page importante :
1. Aller dans **Inspection de l'URL**
2. Entrer l'URL de la page (ex: `https://www.siteonweb.fr/blog/checklist-seo.html`)
3. Cliquer sur **Demander l'indexation**

Pages prioritaires à indexer :
- `/` (page d'accueil)
- `/blog.html`
- `/blog/checklist-seo.html`
- `/blog/wordpress-vs-react.html`
- `/blog/cout-site-ecommerce.html`
- `/blog/site-responsive.html`

### 5. Améliorer le maillage interne

Ajouter des liens entre les articles de blog pour aider Google à découvrir toutes les pages.

#### Option A : Section "Articles recommandés"
Ajouter à la fin de chaque article une section avec 3-4 articles liés.

#### Option B : Liens contextuels
Dans le contenu des articles, ajouter des liens vers d'autres articles pertinents.

## 📊 Résultats attendus

### Court terme (1-2 semaines)
- Google crawle le sitemap
- Début d'indexation des nouvelles pages
- Passage de 8 à ~15-20 pages indexées

### Moyen terme (1 mois)
- 25-30 pages indexées
- Amélioration du classement sur les mots-clés ciblés

### Long terme (2-3 mois)
- Toutes les pages indexées
- Augmentation du trafic organique
- Meilleur positionnement dans les résultats de recherche

## 🛠️ Optimisations supplémentaires recommandées

### 1. Améliorer la vitesse de chargement
- Optimiser les images (WebP)
- Minifier CSS/JS
- Utiliser un CDN

### 2. Créer du contenu régulièrement
- Publier 1-2 nouveaux articles par mois
- Mettre à jour les articles existants

### 3. Obtenir des backlinks
- Partager les articles sur les réseaux sociaux
- Faire des guest posts sur d'autres blogs
- S'inscrire dans des annuaires de qualité

### 4. Optimiser les métadonnées
- Vérifier que chaque page a un titre unique
- Vérifier que chaque page a une meta description unique
- Optimiser les balises H1, H2, H3

## 📝 Checklist de déploiement

- [ ] Exécuter `node add-structured-data.cjs`
- [ ] Vérifier que les données structurées sont ajoutées aux articles
- [ ] Commit et push sur GitHub
- [ ] Vérifier le déploiement sur Vercel
- [ ] Tester l'accès à `https://www.siteonweb.fr/sitemap.xml`
- [ ] Tester l'accès à `https://www.siteonweb.fr/robots.txt`
- [ ] Soumettre le sitemap dans Google Search Console
- [ ] Demander l'indexation des pages prioritaires
- [ ] Suivre l'évolution dans Google Search Console (1-2 semaines)

## 📞 Support

Si vous avez des questions ou besoin d'aide :
- Vérifier la [documentation Google Search Console](https://support.google.com/webmasters)
- Utiliser l'outil [Rich Results Test](https://search.google.com/test/rich-results) pour vérifier les données structurées
