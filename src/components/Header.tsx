"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">🍳</span>
              </div>
              RecettesApp
            </Link>
          </div>

          <nav className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-lg text-sm font-medium transition-colors relative group"
            >
              Accueil
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></div>
            </Link>

            {user ? (
              <>
                <Link
                  href="/create"
                  className="bg-black  text-white px-6 py-2.5 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 border border-primary-600"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Créer une recette
                </Link>
                <div className="flex items-center space-x-4 border-l border-gray-200 pl-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-semibold text-sm">
                        {user.username.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-gray-700 text-sm font-medium">
                      Salut, {user.username}!
                    </span>
                  </div>
                  <button
                    onClick={logout}
                    className="text-gray-500 hover:text-red-600 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Déconnexion
                  </button>
                </div>
              </>
            ) : (
              <Link
                href="/login"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 border border-primary-600 hover:border-primary-700"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Se connecter
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
