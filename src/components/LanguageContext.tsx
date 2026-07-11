"use client";

import React, { createContext, useContext, useState } from "react";

type Language = "ID" | "EN";

type Translations = {
  bio: string;
  orderWa: string;
  orderTele: string;
  priceListTitle: string;
  cat1Title: string;
  cat1Item: string;
  cat1Price: string;
  cat1Desc: string;
  cat2Title: string;
  cat2Item: string;
  comingSoon: string;
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
    bio: "Pusat Pembuatan Bot WA & Telegram Terpercaya.",
    orderWa: "Order via WhatsApp",
    orderTele: "Order via Telegram",
    priceListTitle: "Daftar Harga & Layanan",
    cat1Title: "Pembuatan Bot",
    cat1Item: "Starterpack Pembuatan Bot",
    cat1Price: "Rp 50.000",
    cat1Desc: "Paket dasar pembuatan bot, fitur esensial, cocok untuk pemula.",
    cat2Title: "Nokos OTP",
    cat2Item: "Nokos Telegram & WhatsApp",
    comingSoon: "Segera Hadir",
    paymentTitle: "Metode Pembayaran",
    localPay: "QR Payment (QRIS / e-Wallets)",
    viewQr: "Lihat QRIS",
    intlPay: "TON Coin (The Open Network)",
    copyAddr: "Salin Alamat",
    copied: "Tersalin!",
    close: "Tutup",
    qrTitle: "Pindai untuk Membayar",
    footerHours: "⚡ Buka Setiap Hari",
    rights: "Hak cipta dilindungi undang-undang.",
  },
  EN: {
    bio: "Trusted WA & Telegram Bot Development Hub.",
    orderWa: "Order via WhatsApp",
    orderTele: "Order via Telegram",
    priceListTitle: "Price List & Services",
    cat1Title: "Bot Development",
    cat1Item: "Bot Development Starterpack",
    cat1Price: "50k IDR",
    cat1Desc: "Basic bot development package, essential features, perfect for beginners.",
    cat2Title: "Virtual Numbers",
    cat2Item: "Telegram & WhatsApp Nokos",
    comingSoon: "Coming Soon",
    paymentTitle: "Payment Methods",
    localPay: "QR Payment (QRIS / e-Wallets)",
    viewQr: "View QRIS",
    intlPay: "TON Coin (The Open Network)",
    copyAddr: "Copy Address",
    copied: "Copied!",
    close: "Close",
    qrTitle: "Scan to Pay",
    footerHours: "⚡ Open Daily",
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
