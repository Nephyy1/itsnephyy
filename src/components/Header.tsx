"use client";

import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import { Sparkles, Terminal } from "lucide-react";

export default function Header() {
  const { t } = useLanguage();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center mt-16 mb-12 px-4 max-w-3xl mx-auto"
    >
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100/80 border border-violet-200 text-violet-800 text-xs font-bold mb-6 shadow-sm">
        <span>{t.badge}</span>
      </div>

      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-violet-500/20">
          <Terminal className="w-6 h-6" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Nephyy Store
        </h1>
        <Sparkles className="w-6 h-6 text-yellow-500 fill-yellow-400 animate-bounce hidden sm:block" />
      </div>

      <p className="text-slate-600 font-medium text-base md:text-lg max-w-xl leading-relaxed">
        {t.bio}
      </p>
    </motion.header>
  );
}
