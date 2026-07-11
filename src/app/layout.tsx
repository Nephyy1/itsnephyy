import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jakarta"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair"
});

export const metadata = {
  title: "Nephyy Store | Digital & Bot Solutions",
  description: "Professional WhatsApp & Telegram bot development services and Website Creation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${jakarta.variable} ${playfair.variable}`}>
      <body className="min-h-screen font-sans bg-white text-slate-800 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
