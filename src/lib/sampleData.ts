import { Recipe } from '@/types/recipe';

export const sampleRecipes: Recipe[] = [
  {
    id: 'recipe-1',
    title: 'Spaghetti à la Carbonara',
    description: 'Un classique de la cuisine italienne avec des œufs, du parmesan et du guanciale.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=600&h=400&fit=crop&auto=format&q=80',
    author: 'Chef Marco',
    createdAt: '2024-01-15',
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    ingredients: [
      { id: '1', name: 'Spaghetti', quantity: 400, unit: 'g' },
      { id: '2', name: 'Œufs', quantity: 4, unit: 'pièces' },
      { id: '3', name: 'Parmesan râpé', quantity: 100, unit: 'g' },
      { id: '4', name: 'Guanciale', quantity: 150, unit: 'g' },
      { id: '5', name: 'Poivre noir', quantity: 1, unit: 'c. à c.' }
    ],
    steps: [
      { id: '1', stepNumber: 1, instruction: 'Faire cuire les spaghetti dans une grande casserole d\'eau bouillante salée.' },
      { id: '2', stepNumber: 2, instruction: 'Couper le guanciale en petits dés et le faire dorer dans une poêle.' },
      { id: '3', stepNumber: 3, instruction: 'Battre les œufs avec le parmesan et le poivre dans un bol.' },
      { id: '4', stepNumber: 4, instruction: 'Égoutter les pâtes et les mélanger avec le guanciale hors du feu.' },
      { id: '5', stepNumber: 5, instruction: 'Ajouter le mélange œuf-parmesan et mélanger rapidement. Servir immédiatement.' }
    ]
  },
  {
    id: 'recipe-2',
    title: 'Tarte Tatin aux Pommes',
    description: 'Dessert français traditionnel avec des pommes caramélisées et une pâte feuilletée.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=400&fit=crop&auto=format&q=80',
    author: 'Pâtissière Sophie',
    createdAt: '2024-01-20',
    prepTime: 30,
    cookTime: 45,
    servings: 8,
    ingredients: [
      { id: '1', name: 'Pommes', quantity: 8, unit: 'pièces' },
      { id: '2', name: 'Sucre', quantity: 150, unit: 'g' },
      { id: '3', name: 'Beurre', quantity: 50, unit: 'g' },
      { id: '4', name: 'Pâte feuilletée', quantity: 1, unit: 'rouleau' },
      { id: '5', name: 'Vanille', quantity: 1, unit: 'gousse' }
    ],
    steps: [
      { id: '1', stepNumber: 1, instruction: 'Éplucher et couper les pommes en quartiers.' },
      { id: '2', stepNumber: 2, instruction: 'Faire un caramel avec le sucre dans un moule à tarte.' },
      { id: '3', stepNumber: 3, instruction: 'Ajouter le beurre et la vanille au caramel.' },
      { id: '4', stepNumber: 4, instruction: 'Disposer les quartiers de pommes sur le caramel.' },
      { id: '5', stepNumber: 5, instruction: 'Recouvrir de pâte feuilletée et cuire 45 min à 180°C.' },
      { id: '6', stepNumber: 6, instruction: 'Démouler à chaud en retournant la tarte.' }
    ]
  }
];

export function initializeSampleData() {
  if (typeof window === 'undefined') return;
  
  const existingRecipes = localStorage.getItem('recipe_sharing_recipes');
  if (!existingRecipes || JSON.parse(existingRecipes).length === 0) {
    localStorage.setItem('recipe_sharing_recipes', JSON.stringify(sampleRecipes));
  }
}