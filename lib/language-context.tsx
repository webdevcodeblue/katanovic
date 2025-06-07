"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations } from "./translations"

type Language = "hr" | "en" | "de" | "it" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("hr")

  useEffect(() => {
    // Auto-detect language based on IP/location (simplified)
    const detectLanguage = async () => {
      try {
        // In a real app, you would use a geolocation API
        // For now, we'll use browser language as fallback
        const browserLang = navigator.language.toLowerCase()

        if (browserLang.startsWith("hr")) {
          setLanguage("hr")
        } else if (browserLang.startsWith("de")) {
          setLanguage("de")
        } else if (browserLang.startsWith("it")) {
          setLanguage("it")
        } else if (browserLang.startsWith("es")) {
          setLanguage("es")
        } else {
          setLanguage("en") // Default to English for other countries
        }
      } catch (error) {
        setLanguage("en") // Fallback to English
      }
    }

    // Check if language is stored in localStorage
    const storedLanguage = localStorage.getItem("language") as Language
    if (storedLanguage && ["hr", "en", "de", "it", "es"].includes(storedLanguage)) {
      setLanguage(storedLanguage)
    } else {
      detectLanguage()
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.hr[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
