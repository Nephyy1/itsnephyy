"use client";

import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";

export default function QuickActions() {
  const { t } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-md mx-auto px-4 mb-10 flex flex-col gap-4"
    >
      <motion.a
        variants={item}
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="group relative flex items-center justify-center gap-3 w-full py-4 px-6 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 animate-pulse-slow"
      >
        <MessageCircle className="w-5 h-5 fill-white/20" />
        <span>{t.orderWa}</span>
      </motion.a>

      <motion.a
        variants={item}
        href="https://t.me/username"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="group relative flex items-center justify-center gap-3 w-full py-4 px-6 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 animate-pulse-slow"
      >
        <Send className="w-5 h-5 fill-white/20" />
        <span>{t.orderTele}</span>
      </motion.a>
    </motion.section>
  );
}
