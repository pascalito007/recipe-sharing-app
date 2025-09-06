import { Recipe } from "@/types/recipe";

export const sampleRecipes: Recipe[] = [
  {
    id: "recipe-2",
    title: "Tarte Tatin aux Pommes",
    description:
      "Dessert français traditionnel avec des pommes caramélisées et une pâte feuilletée.",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=400&fit=crop&auto=format&q=80",
    author: "Pâtissière Sophie",
    createdAt: "2024-01-20",
    prepTime: 30,
    cookTime: 45,
    servings: 8,
    ingredients: [
      { id: "1", name: "Pommes", quantity: 8, unit: "pièces" },
      { id: "2", name: "Sucre", quantity: 150, unit: "g" },
      { id: "3", name: "Beurre", quantity: 50, unit: "g" },
      { id: "4", name: "Pâte feuilletée", quantity: 1, unit: "rouleau" },
      { id: "5", name: "Vanille", quantity: 1, unit: "gousse" },
    ],
    steps: [
      {
        id: "1",
        stepNumber: 1,
        instruction: "Éplucher et couper les pommes en quartiers.",
      },
      {
        id: "2",
        stepNumber: 2,
        instruction: "Faire un caramel avec le sucre dans un moule à tarte.",
      },
      {
        id: "3",
        stepNumber: 3,
        instruction: "Ajouter le beurre et la vanille au caramel.",
      },
      {
        id: "4",
        stepNumber: 4,
        instruction: "Disposer les quartiers de pommes sur le caramel.",
      },
      {
        id: "5",
        stepNumber: 5,
        instruction: "Recouvrir de pâte feuilletée et cuire 45 min à 180°C.",
      },
      {
        id: "6",
        stepNumber: 6,
        instruction: "Démouler à chaud en retournant la tarte.",
      },
    ],
  },
  {
    id: "recipe-3",
    title: "Ratatouille Provençale",
    description:
      "Délicieuse recette de légumes du soleil mijotés avec des herbes de Provence.",
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop&auto=format&q=80",
    author: "Grand-mère Simone",
    createdAt: "2024-01-25",
    prepTime: 20,
    cookTime: 40,
    servings: 6,
    ingredients: [
      { id: "1", name: "Aubergines", quantity: 2, unit: "pièces" },
      { id: "2", name: "Courgettes", quantity: 2, unit: "pièces" },
      { id: "3", name: "Tomates", quantity: 4, unit: "pièces" },
      { id: "4", name: "Poivrons", quantity: 2, unit: "pièces" },
      { id: "5", name: "Oignon", quantity: 1, unit: "pièce" },
      { id: "6", name: "Ail", quantity: 4, unit: "gousses" },
      { id: "7", name: "Herbes de Provence", quantity: 2, unit: "c. à s." },
    ],
    steps: [
      {
        id: "1",
        stepNumber: 1,
        instruction: "Couper tous les légumes en dés de taille uniforme.",
      },
      {
        id: "2",
        stepNumber: 2,
        instruction: "Faire revenir l'oignon et l'ail dans l'huile d'olive.",
      },
      {
        id: "3",
        stepNumber: 3,
        instruction: "Ajouter les aubergines et courgettes, cuire 10 minutes.",
      },
      {
        id: "4",
        stepNumber: 4,
        instruction: "Incorporer les tomates et poivrons.",
      },
      {
        id: "5",
        stepNumber: 5,
        instruction:
          "Assaisonner avec les herbes et laisser mijoter 30 minutes.",
      },
    ],
  },
  {
    id: "recipe-4",
    title: "Coq au Vin",
    description:
      "Plat traditionnel français de poulet mijoté au vin rouge avec des champignons.",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=600&h=400&fit=crop&auto=format&q=80",
    author: "Chef Auguste",
    createdAt: "2024-02-01",
    prepTime: 25,
    cookTime: 90,
    servings: 6,
    ingredients: [
      { id: "1", name: "Poulet fermier", quantity: 1, unit: "entier" },
      { id: "2", name: "Vin rouge", quantity: 750, unit: "ml" },
      { id: "3", name: "Lardons", quantity: 200, unit: "g" },
      { id: "4", name: "Champignons de Paris", quantity: 300, unit: "g" },
      { id: "5", name: "Oignons grelots", quantity: 12, unit: "pièces" },
      { id: "6", name: "Bouquet garni", quantity: 1, unit: "pièce" },
      { id: "7", name: "Beurre", quantity: 50, unit: "g" },
    ],
    steps: [
      {
        id: "1",
        stepNumber: 1,
        instruction: "Découper le poulet en morceaux et les faire dorer.",
      },
      {
        id: "2",
        stepNumber: 2,
        instruction: "Faire revenir les lardons et les oignons grelots.",
      },
      {
        id: "3",
        stepNumber: 3,
        instruction: "Flamber avec le vin rouge et laisser réduire.",
      },
      {
        id: "4",
        stepNumber: 4,
        instruction: "Ajouter le bouquet garni et laisser mijoter 1h.",
      },
      {
        id: "5",
        stepNumber: 5,
        instruction: "Incorporer les champignons et cuire 20 minutes.",
      },
      {
        id: "6",
        stepNumber: 6,
        instruction: "Lier la sauce avec le beurre manié avant de servir.",
      },
    ],
  },

  {
    id: "recipe-6",
    title: "Crème Brûlée à la Vanille",
    description:
      "Dessert français emblématique avec sa crème onctueuse et son caramel croquant.",
    image:
      "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&h=400&fit=crop&auto=format&q=80",
    author: "Pâtissier Paul",
    createdAt: "2024-02-10",
    prepTime: 20,
    cookTime: 50,
    servings: 6,
    ingredients: [
      { id: "1", name: "Crème liquide", quantity: 500, unit: "ml" },
      { id: "2", name: "Jaunes d'œufs", quantity: 6, unit: "pièces" },
      { id: "3", name: "Sucre", quantity: 100, unit: "g" },
      { id: "4", name: "Vanille", quantity: 1, unit: "gousse" },
      { id: "5", name: "Sucre roux", quantity: 6, unit: "c. à s." },
    ],
    steps: [
      {
        id: "1",
        stepNumber: 1,
        instruction: "Infuser la crème avec la gousse de vanille fendue.",
      },
      {
        id: "2",
        stepNumber: 2,
        instruction:
          "Battre les jaunes d'œufs avec le sucre jusqu'à blanchiment.",
      },
      {
        id: "3",
        stepNumber: 3,
        instruction: "Verser la crème chaude sur les jaunes en mélangeant.",
      },
      {
        id: "4",
        stepNumber: 4,
        instruction: "Filtrer et répartir dans des ramequins.",
      },
      {
        id: "5",
        stepNumber: 5,
        instruction: "Cuire au bain-marie 40 minutes à 160°C.",
      },
      {
        id: "6",
        stepNumber: 6,
        instruction:
          "Laisser refroidir puis saupoudrer de sucre roux et caraméliser.",
      },
    ],
  },
  {
    id: "recipe-7",
    title: "Risotto aux Champignons",
    description:
      "Risotto crémeux aux champignons de saison avec du parmesan et du vin blanc.",
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&h=400&fit=crop&auto=format&q=80",
    author: "Chef Isabella",
    createdAt: "2024-02-15",
    prepTime: 15,
    cookTime: 35,
    servings: 4,
    ingredients: [
      { id: "1", name: "Riz Arborio", quantity: 320, unit: "g" },
      { id: "2", name: "Champignons mélangés", quantity: 400, unit: "g" },
      { id: "3", name: "Bouillon de légumes", quantity: 1, unit: "litre" },
      { id: "4", name: "Vin blanc sec", quantity: 150, unit: "ml" },
      { id: "5", name: "Parmesan", quantity: 80, unit: "g" },
      { id: "6", name: "Échalotes", quantity: 2, unit: "pièces" },
      { id: "7", name: "Beurre", quantity: 40, unit: "g" },
    ],
    steps: [
      {
        id: "1",
        stepNumber: 1,
        instruction: "Faire chauffer le bouillon et le maintenir au chaud.",
      },
      {
        id: "2",
        stepNumber: 2,
        instruction: "Faire revenir les champignons et réserver.",
      },
      {
        id: "3",
        stepNumber: 3,
        instruction: "Nacrer le riz avec les échalotes hachées.",
      },
      {
        id: "4",
        stepNumber: 4,
        instruction: "Déglacer avec le vin blanc et laisser évaporer.",
      },
      {
        id: "5",
        stepNumber: 5,
        instruction: "Ajouter le bouillon louche par louche en remuant.",
      },
      {
        id: "6",
        stepNumber: 6,
        instruction: "Incorporer les champignons, beurre et parmesan.",
      },
    ],
  },
  {
    id: "recipe-8",
    title: "Tajine d'Agneau aux Abricots",
    description:
      "Plat marocain parfumé à la cannelle et au gingembre, avec des abricots secs.",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop&auto=format&q=80",
    author: "Chef Fatima",
    createdAt: "2024-02-20",
    prepTime: 30,
    cookTime: 120,
    servings: 6,
    ingredients: [
      { id: "1", name: "Épaule d'agneau", quantity: 1, unit: "kg" },
      { id: "2", name: "Abricots secs", quantity: 200, unit: "g" },
      { id: "3", name: "Oignons", quantity: 2, unit: "pièces" },
      { id: "4", name: "Cannelle", quantity: 1, unit: "bâton" },
      { id: "5", name: "Gingembre frais", quantity: 30, unit: "g" },
      { id: "6", name: "Miel", quantity: 2, unit: "c. à s." },
      { id: "7", name: "Amandes effilées", quantity: 50, unit: "g" },
    ],
    steps: [
      {
        id: "1",
        stepNumber: 1,
        instruction: "Couper l'agneau en gros morceaux et les faire dorer.",
      },
      {
        id: "2",
        stepNumber: 2,
        instruction: "Ajouter les oignons émincés et les épices.",
      },
      {
        id: "3",
        stepNumber: 3,
        instruction: "Couvrir d'eau et laisser mijoter 1h30.",
      },
      {
        id: "4",
        stepNumber: 4,
        instruction: "Incorporer les abricots et le miel.",
      },
      {
        id: "5",
        stepNumber: 5,
        instruction: "Poursuivre la cuisson 30 minutes.",
      },
      {
        id: "6",
        stepNumber: 6,
        instruction: "Garnir d'amandes grillées avant de servir.",
      },
    ],
  },
];

export function initializeSampleData() {
  if (typeof window === "undefined") return;

  // Force update to ensure we have the latest recipes with working images
  localStorage.setItem("recipe_sharing_recipes", JSON.stringify(sampleRecipes));
}
