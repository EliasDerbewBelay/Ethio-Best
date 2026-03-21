"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// --- Types ---
interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: React.ReactNode;
}

// --- SVG Flags ---
const EthiopiaFlag = () => (
  <svg viewBox="0 0 600 300" className="w-5 h-3.5 rounded-sm shadow-sm">
    <rect width="600" height="100" fill="#009e49" />
    <rect y="100" width="600" height="100" fill="#fdec00" />
    <rect y="200" width="600" height="100" fill="#ef3340" />
    <circle cx="300" cy="150" r="45" fill="#0039a6" />
    <path
      d="M300 115l9.5 29.5h31l-25 18 9.5 29.5-25-18-25 18 9.5-29.5-25-18h31z"
      fill="#fdec00"
    />
  </svg>
);

const UKFlag = () => (
  <svg viewBox="0 0 60 30" className="w-5 h-3.5 rounded-sm shadow-sm">
    <clipPath id="s">
      <path d="M0,0 v30 h60 v-30 z" />
    </clipPath>
    <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
    <path
      d="M0,0 L60,30 M60,0 L0,30"
      clipPath="url(#s)"
      stroke="#C8102E"
      strokeWidth="4"
    />
    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
  </svg>
);

const FranceFlag = () => (
  <svg viewBox="0 0 3 2" className="w-5 h-3.5 rounded-sm shadow-sm">
    <rect width="1" height="2" fill="#002395" />
    <rect x="1" width="1" height="2" fill="#fff" />
    <rect x="2" width="1" height="2" fill="#ED2939" />
  </svg>
);

const SaudiFlag = () => (
  <svg viewBox="0 0 3 2" className="w-5 h-3.5 rounded-sm shadow-sm">
    <rect width="3" height="2" fill="#006C35" />
    <path d="M0.5 1.2h1.6l-0.2 -0.2h-1.2l-0.2 0.2z" fill="#fff" />
    <text
      x="1.5"
      y="0.8"
      fontSize="0.4"
      textAnchor="middle"
      fill="#fff"
      fontFamily="serif"
    >
      🇸🇦
    </text>
  </svg>
);

// --- Languages Config ---
const LANGUAGES: Language[] = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: <UKFlag />,
  },
  {
    code: "am",
    name: "Amharic",
    nativeName: "አማርኛ",
    flag: <EthiopiaFlag />,
  },
  {
    code: "om",
    name: "Afaan Oromo",
    nativeName: "Afaan Oromo",
    flag: <EthiopiaFlag />,
  },
  {
    code: "ti",
    name: "Tigrinya",
    nativeName: "ትግርኛ",
    flag: <EthiopiaFlag />,
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    flag: <FranceFlag />,
  },
  {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    flag: <SaudiFlag />,
  },
];

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Language>(LANGUAGES[0]);
  const [isClient, setIsClient] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);

    const addGoogleTranslateScript = () => {
      if (document.getElementById("google-translate-script")) return;

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        if (!window.google || !window.google.translate) return;
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "am,om,ti,en,fr,ar",
            autoDisplay: false,
          },
          "google_translate_element",
        );
      };
    };

    addGoogleTranslateScript();

    // Check for existing cookie and update state
    const currentCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("googtrans="));
    if (currentCookie) {
      const langCode = currentCookie.split("/").pop();
      const match = LANGUAGES.find((l) => l.code === langCode);
      if (match) setSelectedLang(match);
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setSelectedLang(lang);
    setIsOpen(false);

    // 1. Set the cookie (Standard Google Translate cookie format)
    const cookieDomain = window.location.hostname.includes("localhost")
      ? ""
      : `domain=.${window.location.hostname};`;
    document.cookie = `googtrans=/en/${lang.code};${cookieDomain}path=/;`;
    document.cookie = `googtrans=/en/${lang.code};path=/;`;

    // 2. Trigger the hidden combo box if it exists
    const translateSelect = document.querySelector(
      ".goog-te-combo",
    ) as HTMLSelectElement;
    if (translateSelect) {
      translateSelect.value = lang.code;
      translateSelect.dispatchEvent(new Event("change"));
    } else {
      // 3. Fallback: Reload the page to apply the cookie
      window.location.reload();
    }
  };

  // Prevent hydration mismatch by not rendering the widget container on server
  if (!isClient) {
    return (
      <div className="w-10 h-8 bg-white/5 rounded-full animate-pulse" />
    );
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Hidden container for Google Translate widget */}
      <div id="google_translate_element" className="fixed top-0 left-0 -z-50 opacity-0 pointer-events-none" />

      {/* Selector Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all active:scale-95 group shadow-sm"
      >
        <span className="flex-shrink-0">{selectedLang.flag}</span>
        <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider text-white">
          {selectedLang.code}
        </span>
        <ChevronDown
          size={14}
          className={`text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[100]"
          >
            <div className="py-2">
              <div className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-50 mb-1">
                Select Language
              </div>
              <div className="max-h-72 overflow-y-auto scrollbar-hide">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all hover:bg-amber-50 group ${
                      selectedLang.code === lang.code
                        ? "bg-amber-50/50 text-amber-600 font-bold"
                        : "text-gray-700"
                    }`}
                  >
                    <span className="flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                      {lang.flag}
                    </span>
                    <div className="flex flex-col items-start overflow-hidden">
                      <span className="leading-tight truncate w-full">
                        {lang.nativeName}
                      </span>
                      <span className="text-[10px] text-gray-400 font-normal">
                        {lang.name}
                      </span>
                    </div>
                    {selectedLang.code === lang.code && (
                      <motion.div 
                        layoutId="active-dot"
                        className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-500" 
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .goog-te-banner-frame,
        .goog-te-banner,
        .goog-te-balloon-frame,
        #goog-gt-tt,
        .goog-te-balloon,
        .skiptranslate {
          display: none !important;
        }
        .goog-text-highlight {
          background: none !important;
          box-shadow: none !important;
        }
        body {
          top: 0 !important;
          position: static !important;
        }
        #google_translate_element {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

// Global type declaration for Google Translate
declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default LanguageSelector;
