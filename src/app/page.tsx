"use client";

import { LanguageProvider } from "@/components/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import Header from "@/components/Header";
import PriceList from "@/components/PriceList";
import QuickActions from "@/components/QuickActions";
import PaymentMethods from "@/components/PaymentMethods";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="relative min-h-screen flex flex-col justify-between overflow-x-hidden">
        <LanguageToggle />
        <div className="flex-1 flex flex-col items-center justify-center w-full pt-4 pb-12">
          <Header />
          <PriceList />
          <QuickActions />
          <PaymentMethods />
        </div>
        <Footer />
      </main>
    </LanguageProvider>
  );
}
