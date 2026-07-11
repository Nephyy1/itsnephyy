import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta"
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
    <html lang="id" className={jakarta.variable}>
      <body className="min-h-screen font-sans relative overflow-x-hidden selection:bg-slate-200 selection:text-slate-900 text-slate-800 bg-slate-50">
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        {children}
      </body>
    </html>
  );
}
