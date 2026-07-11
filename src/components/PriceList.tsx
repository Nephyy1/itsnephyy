"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Code2, Smartphone, Lock } from "lucide-react";

export default function PriceList() {
  const { t } = useLanguage();
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="w-full max-w-md mx-auto px-4 mb-10"
    >
      <h2 className="text-xl font-bold text-slate-800 mb-4 px-1 flex items-center gap-2">
        <span className="w-2 h-6 bg-violet-600 rounded-full inline-block"></span>
        {t.priceListTitle}
      </h2>

      <div className="flex flex-col gap-4">
        <div className="glass-card rounded-2xl overflow-hidden transition-all duration-300">
          <div className="bg-violet-500/10 px-5 py-2.5 border-b border-violet-100 flex items-center gap-2 text-violet-900 font-semibold text-xs uppercase tracking-wider">
            <Code2 className="w-4 h-4 text-violet-600" />
            <span>{t.cat1Title}</span>
          </div>
          
          <div 
            onClick={() => toggleAccordion(1)}
            className="p-5 flex items-center justify-between cursor-pointer hover:bg-white/50 transition-colors"
          >
            <div>
              <h3 className="font-bold text-slate-800 text-base">{t.cat1Item}</h3>
              <p className="text-violet-600 font-extrabold text-sm mt-1">{t.cat1Price}</p>
            </div>
            <motion.div
              animate={{ rotate: openAccordion === 1 ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-8 h-8 rounded-full bg-violet-50 flex items-center justify-center text-violet-600"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </div>

          <AnimatePresence>
            {openAccordion === 1 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 pt-1 text-sm text-slate-600 border-t border-slate-100/60 bg-white/30">
                  {t.cat1Desc}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="glass-card rounded-2xl overflow-hidden opacity-75 grayscale-[30%] select-none border-dashed border-slate-300">
          <div className="bg-slate-500/10 px-5 py-2.5 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-700 font-semibold text-xs uppercase tracking-wider">
              <Smartphone className="w-4 h-4 text-slate-500" />
              <span>{t.cat2Title}</span>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300 shadow-sm animate-pulse">
              <Lock className="w-2.5 h-2.5" />
              {t.comingSoon}
            </span>
          </div>

          <div className="p-5 flex items-center justify-between cursor-not-allowed">
            <div>
              <h3 className="font-bold text-slate-600 text-base">{t.cat2Item}</h3>
              <p className="text-slate-400 font-medium text-xs mt-1">---</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
