import { Code2, Bot, Phone, ArrowRight, MessageSquare } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 flex items-center justify-center font-sans">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[auto]">
        
        <div className="col-span-1 md:col-span-4 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
              Nephyy Store
            </h1>
            <p className="text-slate-400 text-lg">Solusi Digital & Otomatisasi Cepat</p>
          </div>
          <a href="https://wa.me/6280000000000" target="_blank" rel="noreferrer" className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold py-3 px-6 rounded-full flex items-center gap-2 transition-all">
            <MessageSquare size={20} />
            Hubungi Admin
          </a>
        </div>

        <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-6 group hover:border-cyan-500/50 transition-all">
          <div className="bg-blue-500/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-blue-400">
            <Bot size={24} />
          </div>
          <h2 className="text-2xl font-bold mb-2">Jasa Bot Telegram & WA</h2>
          <p className="text-slate-400 mb-6">Otomatisasi bisnis dengan bot custom. Anti-banned, fitur lengkap sesuai kebutuhan spesifik Anda.</p>
          <a href="https://wa.me/6280000000000?text=Halo%20mau%20tanya%20jasa%20bot" target="_blank" rel="noreferrer" className="text-cyan-400 flex items-center gap-2 group-hover:gap-3 transition-all w-fit">
            Pesan Sekarang <ArrowRight size={16} />
          </a>
        </div>

        <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-6 group hover:border-emerald-500/50 transition-all">
          <div className="bg-emerald-500/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-emerald-400">
            <Code2 size={24} />
          </div>
          <h2 className="text-2xl font-bold mb-2">Jasa Pembuatan Website</h2>
          <p className="text-slate-400 mb-6">Landing page, toko online, atau aplikasi web custom. Desain modern, responsif, dan teroptimasi.</p>
          <a href="https://wa.me/6280000000000?text=Halo%20mau%20tanya%20jasa%20web" target="_blank" rel="noreferrer" className="text-emerald-400 flex items-center gap-2 group-hover:gap-3 transition-all w-fit">
            Konsultasi Web <ArrowRight size={16} />
          </a>
        </div>

        <div className="col-span-1 md:col-span-4 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-500/10 w-12 h-12 rounded-2xl flex items-center justify-center text-purple-400">
              <Phone size={24} />
            </div>
            <h2 className="text-2xl font-bold">Pricelist Nomor Kosong (OTP)</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="https://wa.me/6280000000000?text=Order%20Nokos%20WA" target="_blank" rel="noreferrer" className="bg-slate-900/50 hover:bg-slate-900 p-4 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 flex justify-between items-center transition-all cursor-pointer">
              <span className="font-medium">WhatsApp (ID)</span>
              <span className="text-cyan-400 font-bold">Rp 5.000</span>
            </a>
            <a href="https://wa.me/6280000000000?text=Order%20Nokos%20Telegram" target="_blank" rel="noreferrer" className="bg-slate-900/50 hover:bg-slate-900 p-4 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 flex justify-between items-center transition-all cursor-pointer">
              <span className="font-medium">Telegram (US)</span>
              <span className="text-cyan-400 font-bold">Rp 3.000</span>
            </a>
            <a href="https://wa.me/6280000000000?text=Order%20Nokos%20IG" target="_blank" rel="noreferrer" className="bg-slate-900/50 hover:bg-slate-900 p-4 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 flex justify-between items-center transition-all cursor-pointer">
              <span className="font-medium">Instagram/Google</span>
              <span className="text-cyan-400 font-bold">Rp 2.000</span>
            </a>
          </div>
        </div>

      </div>
    </main>
  )
}
