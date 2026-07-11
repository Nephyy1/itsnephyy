import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      <body className="min-h-screen font-sans relative overflow-x-hidden selection:bg-violet-200 selection:text-violet-900 text-slate-800">
        <div className="fixed inset-0 z-[-1] h-full w-full bg-slate-50 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="absolute left-0 right-0 top-[-10%] -z-10 m-auto h-[310px] w-[310px] rounded-full bg-violet-500 opacity-20 blur-[100px]"></div>
          <div className="absolute right-[-5%] top-[20%] -z-10 h-[250px] w-[250px] rounded-full bg-sky-400 opacity-20 blur-[100px]"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
