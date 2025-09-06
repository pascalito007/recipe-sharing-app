'use client';

import { Recipe, User } from '@/types/recipe';

const RECIPES_KEY = 'recipe_sharing_recipes';
const CURRENT_USER_KEY = 'recipe_sharing_current_user';

export const storage = {
  recipes: {
    getAll(): Recipe[] {
      if (typeof window === 'undefined') return [];
      try {
        const data = localStorage.getItem(RECIPES_KEY);
        return data ? JSON.parse(data) : [];
      } catch {
        return [];
      }
    },

    save(recipe: Recipe): void {
      if (typeof window === 'undefined') return;
      try {
        const recipes = this.getAll();
        const existingIndex = recipes.findIndex(r => r.id === recipe.id);
        
        if (existingIndex >= 0) {
          recipes[existingIndex] = recipe;
        } else {
          recipes.push(recipe);
        }
        
        localStorage.setItem(RECIPES_KEY, JSON.stringify(recipes));
      } catch (error) {
        console.error('Error saving recipe:', error);
      }
    },

    getById(id: string): Recipe | null {
      return this.getAll().find(r => r.id === id) || null;
    },

    delete(id: string): void {
      if (typeof window === 'undefined') return;
      try {
        const recipes = this.getAll().filter(r => r.id !== id);
        localStorage.setItem(RECIPES_KEY, JSON.stringify(recipes));
      } catch (error) {
        console.error('Error deleting recipe:', error);
      }
    }
  },

  user: {
    getCurrent(): User | null {
      if (typeof window === 'undefined') return null;
      try {
        const data = localStorage.getItem(CURRENT_USER_KEY);
        return data ? JSON.parse(data) : null;
      } catch {
        return null;
      }
    },

    setCurrent(user: User): void {
      if (typeof window === 'undefined') return;
      try {
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
      } catch (error) {
        console.error('Error saving user:', error);
      }
    },

    logout(): void {
      if (typeof window === 'undefined') return;
      localStorage.removeItem(CURRENT_USER_KEY);
    }
  }
};

export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};