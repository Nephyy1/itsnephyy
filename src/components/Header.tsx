"use client";

import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function Header() {
  const { t } = useLanguage();

  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center mt-24 mb-24 px-4 max-w-3xl mx-auto"
    >
      <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-[11px] font-bold mb-10 shadow-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="tracking-widest uppercase">{t.badge}</span>
      </div>

      <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center shadow-xl shadow-slate-900/10 mb-8 border border-slate-800">
        <Terminal className="w-7 h-7 text-white stroke-[1.5]" />
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 mb-6">
        Nephyy Store.
      </h1>

      <p className="text-slate-500 font-medium text-base md:text-lg max-w-lg leading-relaxed">
        {t.bio}
      </p>
    </motion.header>
  );
}
