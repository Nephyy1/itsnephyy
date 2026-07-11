"use client";

import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import { Bot, Smartphone, CheckCircle2, Lock, MessageCircle, Send, LayoutTemplate, Sparkles } from "lucide-react";

export default function PriceList() {
  const { t } = useLanguage();

  return (
    <section className="w-full max-w-6xl mx-auto px-4 mb-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
          {t.priceListTitle}
        </h2>
        <p className="text-slate-500 text-sm md:text-base mt-2 max-w-lg mx-auto">
          {t.priceListSub}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden bg-white/70 backdrop-blur-md border border-violet-100 shadow-xl shadow-violet-900/5 hover:shadow-2xl transition-all duration-300 group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-500/10 to-transparent rounded-bl-full pointer-events-none" />
          
          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center text-violet-600 group-hover:scale-110 transition-transform">
                <Bot className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-violet-600 text-white shadow-md shadow-violet-500/20 uppercase tracking-wide">
                {t.cat1Title}
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-1">{t.cat1Item}</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-2xl font-extrabold text-violet-600">{t.cat1Price}</span>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {t.cat1Desc}
            </p>

            <div className="space-y-3 mb-8 pt-5 border-t border-slate-100">
              <div className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{t.feat1}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{t.feat2}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{t.feat3}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-violet-700 font-bold bg-violet-50 p-2 rounded-lg border border-violet-100">
                <Sparkles className="w-4 h-4 text-violet-500 shrink-0" />
                <span>{t.feat4}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Nephyy%20Store,%20saya%20tertarik%20dengan%20Starterpack%20Bot."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>WhatsApp</span>
            </a>
            <a
              href="https://t.me/username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-xs transition-all shadow-md active:scale-95"
            >
              <Send className="w-4 h-4 fill-white/20" />
              <span>Telegram</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden bg-white/70 backdrop-blur-md border border-sky-100 shadow-xl shadow-sky-900/5 hover:shadow-2xl transition-all duration-300 group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-500/10 to-transparent rounded-bl-full pointer-events-none" />
          
          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 flex items-center justify-center text-sky-600 group-hover:scale-110 transition-transform">
                <LayoutTemplate className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-sky-600 text-white shadow-md shadow-sky-500/20 uppercase tracking-wide">
                {t.cat3Title}
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-1">{t.cat3Item}</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-2xl font-extrabold text-sky-600">{t.cat3Price}</span>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {t.cat3Desc}
            </p>

            <div className="space-y-3 mb-8 pt-5 border-t border-slate-100">
              <div className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{t.cat3Feat1}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{t.cat3Feat2}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{t.cat3Feat3}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Nephyy%20Store,%20saya%20tertarik%20dengan%20Jasa%20Pembuatan%20Website."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>WhatsApp</span>
            </a>
            <a
              href="https://t.me/username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-xs transition-all shadow-md active:scale-95"
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
          className="rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden bg-white/40 backdrop-blur-sm border border-dashed border-slate-300 opacity-80"
        >
          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-slate-200 flex items-center justify-center text-slate-500">
                <Smartphone className="w-6 h-6" />
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-slate-200 text-slate-600 border border-slate-300">
                <Lock className="w-3 h-3" />
                {t.comingSoon}
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-700 mb-1">{t.cat2Item}</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-2xl font-extrabold text-slate-400">---</span>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              {t.cat2Desc}
            </p>
          </div>

          <div className="pt-5 border-t border-slate-200/60 mt-auto">
            <button
              disabled
              className="w-full py-3 rounded-xl bg-slate-200 text-slate-400 font-bold text-xs uppercase tracking-wider cursor-not-allowed"
            >
              {t.comingSoon}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}             
