import React, { createContext, useState, useEffect, ReactNode } from 'react';

export type Language = 
  | 'English'
  | 'Hindi'
  | 'Kazakhstan'
  | 'Chinese'
  | 'Spanish'
  | 'Thailand'
  | 'Russian'
  | 'Japanese'
  | 'French'
  | 'Portugese'
  | 'Italian'
  | 'Arabic'
  | 'Tagalog'
  | 'Vietnamese'
  | 'Indonesian';

export const AVAILABLE_LANGUAGES: Language[] = [
  'English',
  'Hindi',
  'Kazakhstan',
  'Chinese',
  'Spanish',
  'Thailand',
  'Russian',
  'Japanese',
  'French',
  'Portugese',
  'Italian',
  'Arabic',
  'Tagalog',
  'Vietnamese',
  'Indonesian',
];

interface LanguageContextType {
  currentLanguage: Language;
  availableLanguages: Language[];
  setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'swift-energy-language';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    // Load from localStorage on mount
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && AVAILABLE_LANGUAGES.includes(stored as Language)) {
        return stored as Language;
      }
    } catch (error) {
      console.error('Failed to load language from localStorage:', error);
    }
    return 'English';
  });

  useEffect(() => {
    // Persist to localStorage whenever language changes
    try {
      localStorage.setItem(STORAGE_KEY, currentLanguage);
    } catch (error) {
      console.error('Failed to save language to localStorage:', error);
    }
  }, [currentLanguage]);

  const setLanguage = (language: Language) => {
    if (AVAILABLE_LANGUAGES.includes(language)) {
      setCurrentLanguage(language);
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        availableLanguages: AVAILABLE_LANGUAGES,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
