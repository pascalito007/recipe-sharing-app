'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from '@/types/recipe';
import { storage, generateId } from '@/lib/storage';

interface AuthContextType {
  user: User | null;
  login: (username: string, email: string) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const currentUser = storage.user.getCurrent();
    setUser(currentUser);
    setIsLoading(false);
  }, []);

  const login = (username: string, email: string) => {
    const newUser: User = {
      id: generateId(),
      username,
      email,
    };
    storage.user.setCurrent(newUser);
    setUser(newUser);
  };

  const logout = () => {
    storage.user.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}