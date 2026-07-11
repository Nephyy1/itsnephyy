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
      className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 font-semibold text-xs text-slate-700"
    >
      <Globe className="w-3.5 h-3.5 text-slate-700" />
      <span>{lang}</span>
      <span className="text-[10px] text-slate-300">|</span>
      <span className="text-[10px] text-slate-400">{lang === "ID" ? "EN" : "ID"}</span>
    </motion.button>
  );
}
