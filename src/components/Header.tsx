"use client";

import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import { Store, ArrowRight } from "lucide-react";

export default function Header() {
  const { t } = useLanguage();

  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center text-center mt-20 mb-16 px-4 max-w-2xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15 }}
        className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 text-slate-600 text-xs font-medium mb-8 shadow-sm hover:border-slate-300 transition-all cursor-default"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>{t.badge}</span>
        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
      </motion.div>

      <div className="flex flex-col items-center gap-5 mb-6">
        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg shadow-slate-200/50 border border-slate-100"
        >
          <Store className="w-7 h-7 text-sky-600 stroke-[1.75]" />
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
          Nephyy <span className="text-sky-600 font-bold">Store.</span>
        </h1>
      </div>

      <p className="text-slate-500 font-normal text-sm md:text-base max-w-md leading-relaxed mt-1">
        {t.bio}
      </p>
    </motion.header>
  );
}
