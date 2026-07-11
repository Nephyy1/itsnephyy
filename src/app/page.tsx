"use client";

import { LanguageProvider } from "@/components/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import Header from "@/components/Header";
import QuickActions from "@/components/QuickActions";
import PriceList from "@/components/PriceList";
import PaymentMethods from "@/components/PaymentMethods";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="relative min-h-screen flex flex-col justify-between overflow-x-hidden">
        <LanguageToggle />
        <div className="flex-1 flex flex-col justify-center max-w-screen-md mx-auto w-full pt-8">
          <Header />
          <QuickActions />
          <PriceList />
          <PaymentMethods />
        </div>
        <Footer />
      </main>
    </LanguageProvider>
  );
}
