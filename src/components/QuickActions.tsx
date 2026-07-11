"use client";

import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import { Headphones } from "lucide-react";
import { WhatsAppIcon, TelegramIcon } from "./BrandIcons";

export default function QuickActions() {
  const { t } = useLanguage();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="w-full max-w-4xl mx-auto px-4 mb-16"
    >
      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 md:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex items-center gap-5 text-center md:text-left z-10">
          <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 mx-auto md:mx-0 backdrop-blur-md">
            <Headphones className="w-7 h-7 text-violet-400 animate-pulse" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold tracking-tight">{t.consultTitle}</h3>
            <p className="text-slate-400 text-xs md:text-sm mt-1 max-w-md">{t.consultSub}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto shrink-0 z-10">
          <a
            href="https://wa.me/6281533331355"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 md:flex-initial flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#1ea952] text-white font-bold text-xs md:text-sm transition-all shadow-lg shadow-[#25D366]/20"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>{t.orderWa}</span>
          </a>
          <a
            href="https://t.me/zxeexoxee"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 md:flex-initial flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#2AABEE] hover:bg-[#2289bf] text-white font-bold text-xs md:text-sm transition-all shadow-lg shadow-[#2AABEE]/20"
          >
            <TelegramIcon className="w-4 h-4" />
            <span>{t.orderTele}</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
