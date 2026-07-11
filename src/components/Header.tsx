"use client";

import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import { Sparkles, Store } from "lucide-react";

export default function Header() {
  const { t } = useLanguage();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center mt-16 mb-12 px-4 max-w-3xl mx-auto relative"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15)_0%,rgba(0,0,0,0)_60%)] -z-10 pointer-events-none"></div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-violet-200/60 text-violet-800 text-xs font-bold mb-10 shadow-[0_4px_20px_-4px_rgba(139,92,246,0.25)]"
      >
        <Sparkles className="w-4 h-4 text-violet-600" />
        <span>{t.badge}</span>
      </motion.div>

      <div className="flex flex-col items-center justify-center gap-7 mb-6">
        <motion.div 
          whileHover={{ scale: 1.05, rotate: -2 }}
          className="relative group cursor-pointer"
        >
          <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-sky-400 rounded-2xl blur-md opacity-40 group-hover:opacity-75 transition duration-500 animate-pulse-slow"></div>
          <div className="relative w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-xl border border-white/80">
            <Store className="w-10 h-10 text-violet-600" />
          </div>
        </motion.div>
        
        <div className="relative">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-800 drop-shadow-sm">
            Nephyy <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-indigo-500 to-sky-500">Store</span>
          </h1>
        </div>
      </div>

      <p className="text-slate-500 font-medium text-base md:text-lg max-w-lg leading-relaxed mt-3">
        {t.bio}
      </p>
    </motion.header>
  );
}
