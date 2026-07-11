"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet, QrCode, Copy, Check, X } from "lucide-react";

const TON_WALLET_ADDRESS = "EQD__________________________________________";

export default function PaymentMethods() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(TON_WALLET_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="w-full max-w-md mx-auto px-4 mb-16"
      >
        <div className="glass-card rounded-2xl p-6 relative overflow-hidden border-violet-200/60">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center text-violet-600">
              <Wallet className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">{t.paymentTitle}</h2>
          </div>

          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-white/50 border border-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Indonesia</span>
                <p className="font-semibold text-slate-700 text-sm mt-0.5">{t.localPay}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowQrModal(true)}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-violet-600 text-white font-medium text-xs shadow-md shadow-violet-500/20 hover:bg-violet-700 transition-colors shrink-0"
              >
                <QrCode className="w-4 h-4" />
                <span>{t.viewQr}</span>
              </motion.button>
            </div>

            <div className="p-4 rounded-xl bg-white/50 border border-white flex flex-col gap-3 shadow-sm">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">International</span>
                <p className="font-semibold text-slate-700 text-sm mt-0.5">{t.intlPay}</p>
              </div>
              
              <div className="flex items-center justify-between gap-2 bg-slate-100/80 p-2.5 rounded-lg border border-slate-200/60">
                <code className="text-xs text-slate-600 font-mono truncate select-all block w-full">
                  {TON_WALLET_ADDRESS}
                </code>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={copyToClipboard}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium text-xs transition-all shrink-0 ${
                    copied 
                      ? "bg-emerald-500 text-white" 
                      : "bg-white text-slate-700 shadow-sm hover:bg-slate-50 border border-slate-200"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>{t.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>{t.copyAddr}</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <AnimatePresence>
        {showQrModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-slate-100 flex flex-col items-center text-center relative"
            >
              <button
                onClick={() => setShowQrModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <h3 className="font-bold text-lg text-slate-800 mb-1">{t.qrTitle}</h3>
              <p className="text-xs text-slate-500 mb-6">QRIS Semua Pembayaran</p>

              <div className="w-56 h-56 bg-slate-100 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center mb-6 shadow-inner relative overflow-hidden group">
                <QrCode className="w-32 h-32 text-slate-400" />
                <div className="absolute inset-0 bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity font-semibold text-xs text-slate-600">
                  [ QRIS Image Placeholder ]
                </div>
              </div>

              <button
                onClick={() => setShowQrModal(false)}
                className="w-full py-2.5 rounded-xl bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-colors shadow-md"
              >
                {t.close}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
