# RecettesApp - Application de partage de recettes

Une application moderne de partage de recettes construite avec Next.js 15, TypeScript et Tailwind CSS.

## 🚀 Fonctionnalités

- **Page publique** : Affichage de toutes les recettes avec cartes (image, titre, auteur, date)
- **Page de détail** : Vue complète d'une recette avec ingrédients et étapes
- **Authentification simple** : Connexion avec nom d'utilisateur et email
- **Création de recettes** : Interface complète pour créer et publier de nouvelles recettes
- **Upload d'images** : Support du glisser-déposer pour les images de recettes
- **Stockage local** : Données sauvegardées dans localStorage (pour les tests)

## 🛠️ Technologies utilisées

- **Next.js 15** avec App Router
- **TypeScript** pour la sécurité des types
- **Tailwind CSS** pour le style
- **React Context** pour la gestion d'état
- **localStorage** pour la persistance des données

## 📦 Installation et démarrage

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement
npm run dev

# Build de production
npm run build

# Démarrage du serveur de production
npm start

# Vérification des types TypeScript
npm run type-check

# Linting
npm run lint
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000).

## 🏗️ Structure du projet

```
src/
├── app/                    # Pages Next.js (App Router)
│   ├── create/            # Page de création de recettes
│   ├── recipe/[id]/       # Page de détail d'une recette
│   ├── api/placeholder/   # API pour images placeholder
│   ├── layout.tsx         # Layout principal
│   └── page.tsx          # Page d'accueil
├── components/            # Composants React réutilisables
│   ├── Header.tsx         # En-tête avec navigation
│   ├── LoginForm.tsx      # Formulaire de connexion
│   ├── RecipeCard.tsx     # Carte de recette
│   └── ImageUpload.tsx    # Composant d'upload d'image
├── contexts/              # Contextes React
│   └── AuthContext.tsx    # Gestion de l'authentification
├── lib/                   # Utilitaires et helpers
│   ├── storage.ts         # Gestion du localStorage
│   └── sampleData.ts      # Données d'exemple
└── types/                 # Types TypeScript
    └── recipe.ts          # Types pour les recettes
```

## 🎯 Utilisation

### Première connexion
1. Ouvrez l'application dans votre navigateur
2. Entrez un nom d'utilisateur et un email pour vous connecter
3. Explorez les recettes d'exemple incluses

### Créer une recette
1. Cliquez sur "Créer une recette" dans l'en-tête
2. Remplissez le formulaire avec :
   - Titre et description
   - Image (optionnel, glisser-déposer supporté)
   - Temps de préparation et de cuisson
   - Nombre de portions
   - Liste d'ingrédients
   - Étapes de préparation
3. Cliquez sur "Publier la recette"

### Voir une recette
- Cliquez sur n'importe quelle carte de recette pour voir les détails complets

## 📝 Fonctionnalités techniques

- **Responsive design** : Interface adaptée mobile et desktop
- **TypeScript strict** : Typage complet pour une meilleure maintenabilité
- **Gestion d'état contextuelle** : React Context pour l'authentification
- **Validation de formulaire** : Validation côté client des données
- **Images optimisées** : Utilisation de Next.js Image component
- **Stockage local** : Persistance des données avec localStorage
- **Loading states** : États de chargement pour une meilleure UX

## 🔮 Évolutions futures possibles

- Intégration d'une base de données (PostgreSQL, MongoDB)
- Authentification avancée (JWT, OAuth)
- Recherche et filtres de recettes
- Système de favoris et de notes
- Partage social
- API REST pour la gestion des recettes
- Tests unitaires et e2e

## 📄 License

Ce projet est sous licence MIT.
