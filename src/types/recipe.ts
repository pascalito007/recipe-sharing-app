export interface Recipe {
  id: string;
  title: string;
  description?: string;
  image: string;
  author: string;
  createdAt: string;
  ingredients: Ingredient[];
  steps: Step[];
  prepTime: number;
  cookTime: number;
  servings: number;
}

export interface Ingredient {
  id: string;
  name: string;
  quantity: number;
  unit: string;
}

export interface Step {
  id: string;
  stepNumber: number;
  instruction: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
}

export interface RecipeFormData {
  title: string;
  description: string;
  image: File | null;
  ingredients: Omit<Ingredient, 'id'>[];
  steps: Omit<Step, 'id'>[];
  prepTime: number;
  cookTime: number;
  servings: number;
}