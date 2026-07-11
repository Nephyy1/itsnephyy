"use client";

import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import { Store } from "lucide-react";

export default function Header() {
  const { t } = useLanguage();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center mt-20 mb-16 px-4 max-w-2xl mx-auto"
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-semibold mb-8 shadow-sm"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-slate-800 animate-pulse"></span>
        <span>{t.badge}</span>
      </motion.div>

      <div className="flex flex-col items-center justify-center gap-6 mb-6">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-slate-200"
        >
          <Store className="w-7 h-7 text-slate-800" />
        </motion.div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
          Nephyy <span className="text-slate-400 font-light">Store</span>
        </h1>
      </div>

      <p className="text-slate-500 font-normal text-base md:text-lg max-w-lg leading-relaxed mt-2">
        {t.bio}
      </p>
    </motion.header>
  );
}
