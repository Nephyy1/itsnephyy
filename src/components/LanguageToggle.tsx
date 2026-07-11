"use client";

import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLang}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full glass-card border-violet-200/50 shadow-lg hover:shadow-violet-500/10 transition-all duration-300 font-semibold text-sm text-slate-700 bg-white/80"
    >
      <Globe className="w-4 h-4 text-violet-600 animate-spin-slow" />
      <span>{lang}</span>
      <span className="text-xs text-slate-400">|</span>
      <span className="text-xs text-slate-400">{lang === "ID" ? "EN" : "ID"}</span>
    </motion.button>
  );
}
