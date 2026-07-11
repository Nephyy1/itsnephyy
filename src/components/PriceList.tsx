"use client";

import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import { Bot, Smartphone, CheckCircle2, Lock, MessageCircle, Send } from "lucide-react";

export default function PriceList() {
  const { t } = useLanguage();

  return (
    <section className="w-full max-w-5xl mx-auto px-4 mb-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
          {t.priceListTitle}
        </h2>
        <p className="text-slate-500 text-sm md:text-base mt-2 max-w-lg mx-auto">
          {t.priceListSub}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden border-violet-200/60 shadow-xl hover:shadow-2xl transition-all duration-300 group bg-white/80"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-500/10 to-transparent rounded-bl-full pointer-events-none" />
          
          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center text-violet-600 group-hover:scale-110 transition-transform">
                <Bot className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-violet-600 text-white shadow-md shadow-violet-500/20 uppercase tracking-wide">
                {t.cat1Title}
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">{t.cat1Item}</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-3xl font-extrabold text-violet-600">{t.cat1Price}</span>
              <span className="text-xs font-semibold text-slate-400">/ project</span>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {t.cat1Desc}
            </p>

            <div className="space-y-3 mb-8 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{t.feat1}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{t.feat2}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{t.feat3}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Nephyy%20Store,%20saya%20tertarik%20dengan%20Starterpack%20Bot%20Development."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs transition-all shadow-md shadow-emerald-500/20 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>WhatsApp</span>
            </a>
            <a
              href="https://t.me/username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-xs transition-all shadow-md shadow-sky-500/20 active:scale-95"
            >
              <Send className="w-4 h-4 fill-white/20" />
              <span>Telegram</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden border-dashed border-slate-300 bg-white/40 opacity-80"
        >
          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-slate-200 flex items-center justify-center text-slate-500">
                <Smartphone className="w-6 h-6" />
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
                <Lock className="w-3 h-3" />
                {t.comingSoon}
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-700 mb-2">{t.cat2Item}</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-3xl font-extrabold text-slate-400">---</span>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              {t.cat2Desc}
            </p>
          </div>

          <div className="pt-6 border-t border-slate-200/60">
            <button
              disabled
              className="w-full py-3.5 rounded-xl bg-slate-200 text-slate-400 font-bold text-xs uppercase tracking-wider cursor-not-allowed"
            >
              {t.comingSoon}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
