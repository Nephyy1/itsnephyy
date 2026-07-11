"use client";

import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="w-full text-center pb-12 px-4 flex flex-col items-center gap-4"
    >
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-white/80 shadow-sm backdrop-blur-sm text-xs font-semibold text-slate-600">
        <span>{t.footerHours}</span>
      </div>

      <p className="text-xs text-slate-400 font-medium">
        &copy; {currentYear} Nephyy Store. {t.rights}
      </p>
    </motion.footer>
  );
}
