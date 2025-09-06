'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Recipe } from '@/types/recipe';
import { storage } from '@/lib/storage';
import { useAuth } from '@/contexts/AuthContext';
import LoginForm from '@/components/LoginForm';
import StepsTimeline from '@/components/StepsTimeline';

export default function RecipeDetail() {
  const params = useParams();
  const router = useRouter();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const { user, isLoading: authLoading } = useAuth();

  useEffect(() => {
    if (params.id && typeof params.id === 'string') {
      const foundRecipe = storage.recipes.getById(params.id);
      setRecipe(foundRecipe);
    }
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Recette non trouvée</h1>
          <button
            onClick={() => router.push('/')}
            className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md"
          >
            Retour à l&apos;accueil
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => router.back()}
        className="mb-6 flex items-center text-primary-600 hover:text-primary-700 font-medium"
      >
        ← Retour
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6 md:p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{recipe.title}</h1>
            <p className="text-gray-600 mb-4">{recipe.description}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="font-medium">Par {recipe.author}</span>
              <span>•</span>
              <span>{formatDate(recipe.createdAt)}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">{recipe.prepTime}</div>
              <div className="text-sm text-gray-600">min de préparation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">{recipe.cookTime}</div>
              <div className="text-sm text-gray-600">min de cuisson</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">{recipe.servings}</div>
              <div className="text-sm text-gray-600">personnes</div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-1 h-6 bg-primary-500 rounded-full"></div>
                Ingrédients
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {recipe.ingredients.map((ingredient) => (
                    <div key={ingredient.id} className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                      <span className="text-gray-700 font-medium">{ingredient.name}</span>
                      <span className="font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full text-sm">
                        {ingredient.quantity} {ingredient.unit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-1 h-6 bg-primary-500 rounded-full"></div>
                Étapes de préparation
              </h2>
              <StepsTimeline steps={recipe.steps} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}