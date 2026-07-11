import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Nephyy Store | Digital Services & Developer Tools",
  description: "Layanan pembuatan bot Telegram/WhatsApp, virtual number OTP instan, dan pembuatan website modern berkinerja tinggi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <body className={plusJakartaSans.className}>
        {children}
      </body>
    </html>
  );
}
