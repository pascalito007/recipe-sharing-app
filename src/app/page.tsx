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
        {/* Hero Section avec background amélioré */}
        <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 rounded-3xl mb-16 shadow-lg">
          {/* Éléments décoratifs en arrière-plan */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 bg-orange-400 rounded-full blur-xl"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-400 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 left-32 w-24 h-24 bg-red-400 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-18 h-18 bg-orange-300 rounded-full blur-xl"></div>
          </div>
          
          <div className="relative px-6 py-10 text-center">
            {/* Badge trending */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full mb-4 shadow-sm border border-orange-200">
              <span className="text-lg">🔥</span>
              <span className="text-xs font-medium text-orange-700">Tendance culinaire</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">Découvrez nos</span>
              <br />
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                délicieuses recettes
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
              Une collection <span className="font-semibold text-orange-600">exclusive</span> de recettes 
              partagées par notre communauté de chefs passionnés 
              <span className="inline-block ml-2">👨‍🍳</span>
            </p>
            
            {/* Stats avec icônes */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <div className="text-lg">📚</div>
                <div className="text-left">
                  <div className="font-bold text-lg text-gray-900">{recipes.length}</div>
                  <div className="text-xs text-gray-600">Recettes</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <div className="text-lg">⭐</div>
                <div className="text-left">
                  <div className="font-bold text-lg text-gray-900">4.8</div>
                  <div className="text-xs text-gray-600">Note</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <div className="text-lg">🌟</div>
                <div className="text-left">
                  <div className="font-bold text-lg text-gray-900">Nouveau</div>
                  <div className="text-xs text-gray-600">Chaque jour</div>
                </div>
              </div>
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
