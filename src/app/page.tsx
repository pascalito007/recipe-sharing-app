"use client";

import { useEffect, useState } from "react";
import { Recipe } from "@/types/recipe";
import { storage } from "@/lib/storage";
import { initializeSampleData } from "@/lib/sampleData";
import RecipeCard from "@/components/RecipeCard";
import { useAuth } from "@/contexts/AuthContext";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const { user, isLoading: authLoading } = useAuth();

  useEffect(() => {
    initializeSampleData();
    const allRecipes = storage.recipes.getAll();
    setRecipes(allRecipes);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Découvrez nos recettes
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              {" "}
              délicieuses recettes
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explorez une collection de recettes partagées par notre communauté
            de passionnés de cuisine.
          </p>
          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
              <span>{recipes.length} recettes disponibles</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
              <span>Nouvelles recettes chaque jour</span>
            </div>
          </div>
        </div>

        {recipes.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🍳</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Aucune recette pour le moment
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Soyez le premier à partager une délicieuse recette avec notre
              communauté !
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mx-auto"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
