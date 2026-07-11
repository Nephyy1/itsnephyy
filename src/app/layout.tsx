import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta"
});

export const metadata = {
  title: "Nephyy Store | Linktree & Price List",
  description: "Trusted WA & Telegram Bot Development Hub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={jakarta.variable}>
      <body className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-violet-100 animate-gradient-x font-sans">
        {children}
      </body>
    </html>
  );
}
