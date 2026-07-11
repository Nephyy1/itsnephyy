"use client";

import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

export default function Header() {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 pt-10 mb-28 relative">
      <nav className="flex items-center justify-between mb-20 md:mb-32 relative z-20">
        <h1 className="font-serif text-3xl md:text-4xl font-bold italic tracking-tight text-[#1A1A1A]">
          Nephyy.
        </h1>
        
        <div className="hidden md:flex items-center gap-10 text-[11px] font-medium text-slate-500 uppercase tracking-[0.15em]">
          <a href="#" className="hover:text-slate-900 transition-colors">Shop</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Services</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Lookbook</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-slate-800 hover:text-black transition-colors">
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      <header className="relative flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%] w-[320px] h-[320px] md:w-[550px] md:h-[550px] bg-[#F6F6F6] rounded-full -z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 w-full flex justify-center md:justify-end z-10"
        >
          <div className="w-72 h-[380px] md:w-[340px] md:h-[460px] bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-8 flex flex-col items-center justify-center border border-slate-50 relative overflow-hidden group">
            <div className="absolute inset-0 bg-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <svg viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="w-32 h-32 md:w-40 md:h-40 transform group-hover:scale-105 transition-transform duration-700">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            
            <div className="mt-12 text-center relative z-10">
              <p className="font-serif italic text-xl text-slate-800">Digital Craft.</p>
              <div className="w-10 h-[1px] bg-slate-300 mx-auto mt-5"></div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 z-10 text-center md:text-left pt-10 md:pt-0"
        >
          <h2 className="font-serif text-5xl md:text-[5.5rem] font-medium text-[#1A1A1A] leading-[1.1] mb-6">
            Premium Bot <br /> Collection
          </h2>
          <p className="text-slate-500 font-sans text-sm md:text-base max-w-sm mx-auto md:mx-0 mb-10 leading-relaxed">
            {t.bio}
          </p>
          <button className="bg-[#1A1A1A] text-white px-10 py-4 font-sans text-xs tracking-[0.2em] uppercase hover:bg-black transition-colors">
            Shop Now
          </button>
        </motion.div>
      </header>
    </div>
  );
}
