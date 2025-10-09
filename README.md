# SiteOnWeb - Portfolio

Site web professionnel développé avec React et Vite.

## Technologies

- React 18
- Vite
- TailwindCSS
- React Router
- Web3Forms (formulaires de contact)

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## Build

```bash
npm run build
```

Les fichiers de production seront dans le dossier `dist/`

## Preview

```bash
npm run preview
```

## Structure du projet

```
src/
├── components/        # Composants React
├── data/             # Données et traductions
├── hooks/            # Hooks personnalisés
├── pages/            # Pages du site
└── index.css         # Styles globaux
```

## Variables d'environnement

Créer un fichier `.env` avec :

```
VITE_WEB3FORMS_ACCESS_KEY=votre_clé_ici
```

## Déploiement

Le site est optimisé pour Vercel. Push sur main pour déployer automatiquement.

## Licence

© 2024 SiteOnWeb. Tous droits réservés.
