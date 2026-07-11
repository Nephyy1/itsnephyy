import { Code2, Bot, Phone, ArrowRight, MessageSquare, Zap } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-mesh p-4 md:p-8 flex items-center justify-center font-sans relative">
      
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[auto] relative z-10">
        
        <div className="col-span-1 md:col-span-4 glass-card-3d rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 transform hover:scale-[1.01] transition-transform duration-500">
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-cyan-500 mb-4 drop-shadow-lg">
              Nephyy Store
            </h1>
            <p className="text-slate-300 text-xl md:text-2xl font-medium tracking-wide">
              Elevate Your Digital Experience
            </p>
          </div>
          <a href="https://wa.me/6280000000000" target="_blank" rel="noreferrer" className="btn-3d text-white font-bold py-4 px-8 rounded-full flex items-center gap-3 transition-all duration-300">
            <MessageSquare size={24} />
            Hubungi Admin
          </a>
        </div>

        <div className="col-span-1 md:col-span-2 glass-card-3d rounded-3xl p-8 group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px] group-hover:bg-blue-500/40 transition-colors"></div>
          
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-blue-400 to-indigo-600 shadow-[0_10px_20px_-10px_rgba(99,102,241,0.8)] border border-white/20 text-white transform group-hover:rotate-12 transition-transform duration-500">
            <Bot size={32} />
          </div>
          <h2 className="text-3xl font-bold mb-3 text-white drop-shadow-md">Bot Telegram & WA</h2>
          <p className="text-slate-400 mb-8 text-lg leading-relaxed">
            Sistem otomatisasi cerdas untuk bisnis Anda. Performa tinggi, anti-banned, dan fitur custom sesuai permintaan.
          </p>
          <a href="https://wa.me/6280000000000?text=Halo" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
            Order Bot Sekarang <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        <div className="col-span-1 md:col-span-2 glass-card-3d rounded-3xl p-8 group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-[50px] group-hover:bg-emerald-500/40 transition-colors"></div>

          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-emerald-400 to-teal-600 shadow-[0_10px_20px_-10px_rgba(16,185,129,0.8)] border border-white/20 text-white transform group-hover:-rotate-12 transition-transform duration-500">
            <Code2 size={32} />
          </div>
          <h2 className="text-3xl font-bold mb-3 text-white drop-shadow-md">Pembuatan Website</h2>
          <p className="text-slate-400 mb-8 text-lg leading-relaxed">
            Hadirkan identitas digital yang memukau. Kami merancang UI/UX interaktif dan performa web yang sangat cepat.
          </p>
          <a href="https://wa.me/6280000000000?text=Halo" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-emerald-400 font-semibold group-hover:text-emerald-300 transition-colors">
            Konsultasi Web <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        <div className="col-span-1 md:col-span-4 glass-card-3d rounded-3xl p-8 relative overflow-hidden">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-orange-400 to-pink-600 shadow-[0_8px_16px_-8px_rgba(236,72,153,0.8)] border border-white/20 text-white">
              <Zap size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white drop-shadow-md">Insta-OTP / Nokos</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="https://wa.me/6280000000000" target="_blank" rel="noreferrer" className="group relative bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-white/10 hover:border-cyan-400/50 flex justify-between items-center transition-all duration-300 shadow-inner hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.3)] hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="font-semibold text-lg text-slate-200">WhatsApp (ID)</span>
              <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-4 py-1.5 rounded-lg font-bold">Rp 5.000</span>
            </a>

            <a href="https://wa.me/6280000000000" target="_blank" rel="noreferrer" className="group relative bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-white/10 hover:border-cyan-400/50 flex justify-between items-center transition-all duration-300 shadow-inner hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.3)] hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="font-semibold text-lg text-slate-200">Telegram (US)</span>
              <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-4 py-1.5 rounded-lg font-bold">Rp 3.000</span>
            </a>

            <a href="https://wa.me/6280000000000" target="_blank" rel="noreferrer" className="group relative bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-white/10 hover:border-cyan-400/50 flex justify-between items-center transition-all duration-300 shadow-inner hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.3)] hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="font-semibold text-lg text-slate-200">IG / Google</span>
              <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-4 py-1.5 rounded-lg font-bold">Rp 2.000</span>
            </a>
          </div>
        </div>

      </div>
    </main>
  )
}
