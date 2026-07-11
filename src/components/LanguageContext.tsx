"use client";

import React, { createContext, useContext, useState } from "react";

type Language = "ID" | "EN";

type Translations = {
  badge: string;
  bio: string;
  priceListTitle: string;
  priceListSub: string;
  cat1Title: string;
  cat1Item: string;
  cat1Price: string;
  cat1Desc: string;
  feat1: string;
  feat2: string;
  feat3: string;
  orderNowWa: string;
  orderNowTele: string;
  cat2Title: string;
  cat2Item: string;
  cat2Desc: string;
  comingSoon: string;
  consultTitle: string;
  consultSub: string;
  orderWa: string;
  orderTele: string;
  paymentTitle: string;
  localPay: string;
  viewQr: string;
  intlPay: string;
  copyAddr: string;
  copied: string;
  close: string;
  qrTitle: string;
  footerHours: string;
  rights: string;
};

const dictionary: Record<Language, Translations> = {
  ID: {
    badge: "✨ Pusat Layanan Digital & Bot",
    bio: "Solusi pengembangan bot WhatsApp & Telegram profesional untuk otomatisasi bisnis dan kebutuhan digital Anda.",
    priceListTitle: "Katalog Layanan",
    priceListSub: "Pilih paket pembuatan bot atau produk digital sesuai kebutuhan Anda",
    cat1Title: "Pembuatan Bot",
    cat1Item: "Starterpack Bot Development",
    cat1Price: "Rp 50.000",
    cat1Desc: "Paket pembuatan bot esensial dengan stabilitas tinggi, sangat cocok untuk pemula maupun operasional bisnis.",
    feat1: "Integrasi API WhatsApp / Telegram",
    feat2: "Sistem Respons Otomatis & Cepat",
    feat3: "Mendukung Kustomisasi Fitur Dasar",
    orderNowWa: "Pesan via WhatsApp",
    orderNowTele: "Pesan via Telegram",
    cat2Title: "Nomor Virtual",
    cat2Item: "Nokos Telegram & WhatsApp",
    cat2Desc: "Nomor virtual sekali pakai untuk aktivasi OTP dengan tingkat keberhasilan tinggi dan privasi terjaga.",
    comingSoon: "Segera Hadir",
    consultTitle: "Butuh Bot Kustom atau Fitur Khusus?",
    consultSub: "Diskusikan ide dan kebutuhan spesifik proyek Anda langsung bersama tim developer kami.",
    orderWa: "Chat WhatsApp",
    orderTele: "Chat Telegram",
    paymentTitle: "Metode Pembayaran",
    localPay: "QR Payment (QRIS / e-Wallets)",
    viewQr: "Lihat QRIS",
    intlPay: "TON Coin (The Open Network)",
    copyAddr: "Salin Alamat",
    copied: "Tersalin!",
    close: "Tutup",
    qrTitle: "Pindai untuk Membayar",
    footerHours: "⚡ Layanan Aktif Setiap Hari",
    rights: "Hak cipta dilindungi undang-undang.",
  },
  EN: {
    badge: "✨ Digital & Bot Solutions Hub",
    bio: "Professional WhatsApp & Telegram bot development services for automating your business and digital needs.",
    priceListTitle: "Service Catalog",
    priceListSub: "Choose a bot development package or digital product that fits your scale",
    cat1Title: "Bot Development",
    cat1Item: "Bot Development Starterpack",
    cat1Price: "50k IDR",
    cat1Desc: "Essential bot development package engineered for high stability, perfect for beginners and business operations.",
    feat1: "WhatsApp / Telegram API Integration",
    feat2: "Fast & Automated Response System",
    feat3: "Supports Basic Feature Customization",
    orderNowWa: "Order via WhatsApp",
    orderNowTele: "Order via Telegram",
    cat2Title: "Virtual Numbers",
    cat2Item: "Telegram & WhatsApp Nokos",
    cat2Desc: "Disposable virtual numbers for OTP verification with high success rates and guaranteed privacy.",
    comingSoon: "Coming Soon",
    consultTitle: "Need a Custom Bot or Advanced Features?",
    consultSub: "Discuss your project ideas and specific technical requirements directly with our development team.",
    orderWa: "Chat WhatsApp",
    orderTele: "Chat Telegram",
    paymentTitle: "Payment Methods",
    localPay: "QR Payment (QRIS / e-Wallets)",
    viewQr: "View QRIS",
    intlPay: "TON Coin (The Open Network)",
    copyAddr: "Copy Address",
    copied: "Copied!",
    close: "Close",
    qrTitle: "Scan to Pay",
    footerHours: "⚡ Open Daily for Service",
    rights: "All rights reserved.",
  },
};

const LanguageContext = createContext<{
  lang: Language;
  toggleLang: () => void;
  t: Translations;
}>({
  lang: "ID",
  toggleLang: () => {},
  t: dictionary.ID,
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Language>("ID");

  const toggleLang = () => {
    setLang((prev) => (prev === "ID" ? "EN" : "ID"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: dictionary[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
