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
      <body className="min-h-screen font-sans bg-[#FAFAFA] text-slate-900 overflow-x-hidden selection:bg-slate-300 selection:text-black relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>
        {children}
      </body>
    </html>
  );
}
