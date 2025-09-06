"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { Recipe, RecipeFormData, Ingredient } from "@/types/recipe";
import { storage, generateId } from "@/lib/storage";
import ImageUpload from "@/components/ImageUpload";
import LoginForm from "@/components/LoginForm";

export default function CreateRecipe() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  const [formData, setFormData] = useState<RecipeFormData>({
    title: "",
    description: "",
    image: null,
    ingredients: [{ name: "", quantity: 0, unit: "" }],
    steps: [{ stepNumber: 1, instruction: "" }],
    prepTime: 0,
    cookTime: 0,
    servings: 1,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!user) {
    return <LoginForm />;
  }

  const addIngredient = () => {
    setFormData((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, { name: "", quantity: 0, unit: "" }],
    }));
  };

  const removeIngredient = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index),
    }));
  };

  const updateIngredient = (
    index: number,
    field: keyof Omit<Ingredient, "id">,
    value: string | number
  ) => {
    setFormData((prev) => ({
      ...prev,
      ingredients: prev.ingredients.map((ingredient, i) =>
        i === index ? { ...ingredient, [field]: value } : ingredient
      ),
    }));
  };

  const addStep = () => {
    setFormData((prev) => ({
      ...prev,
      steps: [
        ...prev.steps,
        { stepNumber: prev.steps.length + 1, instruction: "" },
      ],
    }));
  };

  const removeStep = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      steps: prev.steps
        .filter((_, i) => i !== index)
        .map((step, i) => ({ ...step, stepNumber: i + 1 })),
    }));
  };

  const updateStep = (index: number, instruction: string) => {
    setFormData((prev) => ({
      ...prev,
      steps: prev.steps.map((step, i) =>
        i === index ? { ...step, instruction } : step
      ),
    }));
  };

  const convertImageToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let imageUrl =
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop&auto=format&q=80";

      if (formData.image) {
        imageUrl = await convertImageToBase64(formData.image);
      }

      const recipe: Recipe = {
        id: generateId(),
        title: formData.title,
        description: formData.description,
        image: imageUrl,
        author: user.username,
        createdAt: new Date().toISOString(),
        prepTime: formData.prepTime,
        cookTime: formData.cookTime,
        servings: formData.servings,
        ingredients: formData.ingredients
          .filter(
            (ing) => ing.name.trim() && ing.quantity > 0 && ing.unit.trim()
          )
          .map((ing) => ({ ...ing, id: generateId() })),
        steps: formData.steps
          .filter((step) => step.instruction.trim())
          .map((step, index) => ({
            ...step,
            id: generateId(),
            stepNumber: index + 1,
          })),
      };

      storage.recipes.save(recipe);
      router.push("/");
    } catch (error) {
      console.error("Erreur lors de la sauvegarde:", error);
      alert("Une erreur est survenue lors de la sauvegarde de la recette.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = () => {
    return (
      formData.title.trim() &&
      formData.description.trim() &&
      formData.prepTime > 0 &&
      formData.cookTime >= 0 &&
      formData.servings > 0 &&
      formData.ingredients.some(
        (ing) => ing.name.trim() && ing.quantity > 0 && ing.unit.trim()
      ) &&
      formData.steps.some((step) => step.instruction.trim())
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Créer une nouvelle recette
        </h1>
        <p className="text-gray-600">
          Partagez votre recette favorite avec la communauté
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Informations générales
          </h2>

          <div className="grid grid-cols-1 gap-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Titre de la recette *
              </label>
              <input
                type="text"
                id="title"
                required
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, title: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Ex: Spaghetti à la carbonara"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Description *
              </label>
              <textarea
                id="description"
                required
                rows={3}
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Décrivez brièvement votre recette..."
              />
            </div>

            <ImageUpload
              onImageChange={(file) =>
                setFormData((prev) => ({ ...prev, image: file }))
              }
            />

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="prepTime"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Temps de préparation (min) *
                </label>
                <input
                  type="number"
                  id="prepTime"
                  required
                  min="1"
                  value={formData.prepTime || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      prepTime: parseInt(e.target.value) || 0,
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label
                  htmlFor="cookTime"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Temps de cuisson (min)
                </label>
                <input
                  type="number"
                  id="cookTime"
                  min="0"
                  value={formData.cookTime || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      cookTime: parseInt(e.target.value) || 0,
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label
                  htmlFor="servings"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nombre de portions *
                </label>
                <input
                  type="number"
                  id="servings"
                  required
                  min="1"
                  value={formData.servings || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      servings: parseInt(e.target.value) || 1,
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Ingrédients
          </h2>

          <div className="space-y-4">
            {formData.ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end"
              >
                <div className="md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom de l&apos;ingrédient
                  </label>
                  <input
                    type="text"
                    value={ingredient.name}
                    onChange={(e) =>
                      updateIngredient(index, "name", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Ex: Spaghetti"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantité
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    value={ingredient.quantity || ""}
                    onChange={(e) =>
                      updateIngredient(
                        index,
                        "quantity",
                        parseFloat(e.target.value) || 0
                      )
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div className="md:col-span-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Unité
                  </label>
                  <input
                    type="text"
                    value={ingredient.unit}
                    onChange={(e) =>
                      updateIngredient(index, "unit", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="g, ml, pièces..."
                  />
                </div>
                <div className="md:col-span-1">
                  {formData.ingredients.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeIngredient(index)}
                      className="w-full px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={addIngredient}
            className="mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md text-sm font-medium"
          >
            + Ajouter un ingrédient
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Étapes de préparation
          </h2>

          <div className="space-y-4">
            {formData.steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold text-sm mt-2">
                  {index + 1}
                </div>
                <div className="flex-grow">
                  <textarea
                    rows={3}
                    value={step.instruction}
                    onChange={(e) => updateStep(index, e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder={`Étape ${
                      index + 1
                    } : Décrivez cette étape en détail...`}
                  />
                </div>
                {formData.steps.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeStep(index)}
                    className="flex-shrink-0 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md mt-2"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={addStep}
            className="mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md text-sm font-medium"
          >
            + Ajouter une étape
          </button>
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 font-medium"
          >
            Annuler
          </button>
          <button
            type="submit"
            disabled={!isFormValid() || isSubmitting}
            className="px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-md font-medium"
          >
            {isSubmitting ? "Publication..." : "Publier la recette"}
          </button>
        </div>
      </form>
    </div>
  );
}
