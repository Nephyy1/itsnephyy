"use client";

import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import { Sparkles, Bot } from "lucide-react";

export default function Header() {
  const { t } = useLanguage();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center mt-12 mb-8 px-4"
    >
      <div className="relative mb-4 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-sky-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        <div className="relative w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-2xl border-2 border-white">
          <Bot className="w-12 h-12 text-violet-600" />
        </div>
      </div>

      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex items-center gap-2"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-violet-700 via-indigo-600 to-sky-600 bg-clip-text text-transparent tracking-tight">
          Nephyy Store
        </h1>
        <Sparkles className="w-6 h-6 text-yellow-500 fill-yellow-400 animate-bounce" />
      </motion.div>

      <p className="mt-2 text-slate-600 font-medium max-w-sm md:max-w-md text-sm md:text-base">
        {t.bio}
      </p>
    </motion.header>
  );
}
