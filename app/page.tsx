"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  MessageSquare,
  Cpu,
  Smartphone,
  ShieldCheck,
  Key,
  Globe,
  Layout,
  Code,
  Zap,
  DollarSign,
  Layers,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Menu,
  X,
  Send,
  QrCode,
  Coins,
  Star,
  Gift,
  Copy,
  Check
} from "lucide-react";

export default function NephyyStoreLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const services = [
    {
      title: "Jasa Pembuatan Bot Telegram & WhatsApp",
      description:
        "Custom automation bots, auto-responder, integrasi API, dan payment gateway. Sangat cocok untuk otomatisasi bisnis, Customer Service, dan sistem notifikasi.",
      price: "Mulai Rp 50.000",
      badge: "Bonus Hosting 3GB",
      badgeColor: "bg-gradient-to-r from-amber-500 to-orange-500 text-white",
      icons: [Bot, MessageSquare, Cpu],
      features: [
        "Gratis Bonus Hosting 3GB (1 Bulan)",
        "Custom Auto-Responder & Workflow",
        "Integrasi API & Payment Gateway",
        "Deploy Server 24/7 Non-stop",
      ],
      contactText: "Halo Nephyy Store, saya tertarik pesan Bot (Mulai 50rb + Bonus Hosting 3GB).",
    },
    {
      title: "Jual Nomor Kosong / Virtual OTP",
      description:
        "Instant virtual numbers untuk verifikasi OTP cepat, WhatsApp, Telegram, dan registrasi aplikasi global. Otomatis, aman, dan siap pakai.",
      price: "Mulai Rp 3.000",
      badge: "Instant Delivery",
      badgeColor: "bg-gradient-to-r from-emerald-500 to-teal-500 text-white",
      icons: [Smartphone, ShieldCheck, Key],
      features: [
        "Pilihan Negara Lengkap",
        "Garansi Kode OTP Masuk",
        "Proses Otomatis & Cepat",
        "Support Telegram, WA, & App Lain",
      ],
      contactText: "Halo Nephyy Store, saya ingin beli Nomor Kosong / Virtual OTP.",
    },
    {
      title: "Jasa Pembuatan Website Modern",
      description:
        "Pembuatan Landing Page, Online Store (E-Commerce), hingga Company Profile. Harga menyesuaikan dengan tingkat kerumitan fitur dan kategori website.",
      price: "Sesuai Kerumitan",
      badge: "Custom Development",
      badgeColor: "bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white",
      icons: [Globe, Layout, Code],
      features: [
        "Kategori: Store, Landing Page, Profile, dll",
        "Desain Modern, Responsive & Fast Load",
        "Tech Stack Terkini (Next.js / React)",
        "Catatan: Belum Termasuk Hosting & Domain",
      ],
      contactText: "Halo Nephyy Store, saya ingin konsultasi pembuatan Website Modern.",
    },
  ];

  const whyUs = [
    {
      icon: Zap,
      title: "Pengerjaan Cepat",
      description: "Proses otomatis dan tim efisien memastikan layanan Anda aktif dalam hitungan menit hingga hari.",
    },
    {
      icon: DollarSign,
      title: "Harga Kompetitif",
      description: "Solusi digital berkualitas tinggi dengan harga yang masuk akal dan transparan tanpa biaya tersembunyi.",
    },
    {
      icon: Layers,
      title: "Modern & Responsif",
      description: "Menggunakan standar teknologi terbaru untuk menjamin performa cepat, aman, dan estetika visual premium.",
    },
    {
      icon: Headphones,
      title: "Garansi & Support",
      description: "Dukungan teknis responsif serta garansi layanan untuk memastikan bisnis Anda berjalan tanpa kendala.",
    },
  ];

  const handleTelegramContact = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://t.me/zxeexoxee?text=${encodedMessage}`, "_blank");
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("UQCYToGsIma1Zj49KEgGfB9l5a7yBoaC9f1nDlt7GMNLlDdA");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 text-slate-900 font-sans relative selection:bg-indigo-500 selection:text-white">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-[-10%] md:left-0 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-[20%] right-[-10%] md:right-0 w-[600px] h-[600px] bg-violet-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-[30%] w-[550px] h-[550px] bg-blue-500/15 rounded-full blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-white/40 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 bg-clip-text text-transparent">
              Nephyy<span className="text-indigo-600">.</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
            <a href="#why-us" className="hover:text-indigo-600 transition-colors">Why Us</a>
            <a href="#payment" className="hover:text-indigo-600 transition-colors">Pembayaran</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleTelegramContact("Halo Nephyy Store, saya ingin konsultasi layanan.")}
              className="px-6 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Order via Telegram</span>
            </motion.button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/60 border border-white/40 text-slate-700"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute w-full bg-white/95 backdrop-blur-2xl border-b border-white/40 px-6 py-6 flex flex-col gap-4 shadow-xl z-50"
          >
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-700 hover:text-indigo-600">Services</a>
            <a href="#why-us" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-700 hover:text-indigo-600">Why Us</a>
            <a href="#payment" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-700 hover:text-indigo-600">Pembayaran</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-700 hover:text-indigo-600">Contact</a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleTelegramContact("Halo Nephyy Store, saya ingin konsultasi layanan.");
              }}
              className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 shadow-md flex items-center justify-center gap-2 mt-2"
            >
              <Send className="w-4 h-4" />
              <span>Order via Telegram</span>
            </button>
          </motion.div>
        )}
      </header>

      <main className="flex-grow w-full">
        <section className="relative pt-16 pb-24 md:pt-28 md:pb-36">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="lg:col-span-7 flex flex-col items-start text-left"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/60 shadow-sm mb-6">
                  <span className="w-2 h-2 rounded-full bg-indigo-600 animate-ping" />
                  <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                    Next-Gen Digital & Developer Assets
                  </span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
                  Empowering Your Digital Evolution with{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    Modern Solutions.
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed mb-8">
                  Nephyy Store menyediakan layanan otomatisasi bot pintar mulai dari 50Rb, nomor virtual OTP instan, hingga pembuatan website berskala tinggi dengan arsitektur modern untuk bisnis dan developer.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href="#services"
                    className="px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all text-center flex items-center justify-center gap-2"
                  >
                    <span>Lihat Layanan</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleTelegramContact("Halo Nephyy Store, saya ingin Konsultasi Gratis terlebih dahulu.")}
                    className="px-8 py-4 rounded-2xl font-bold text-slate-800 bg-white/70 backdrop-blur-xl border border-white/60 shadow-lg hover:bg-white/90 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5 text-indigo-600" />
                    <span>Konsultasi Telegram</span>
                  </motion.button>
                </div>
              </motion.div>

              <div className="lg:col-span-5 relative min-h-[400px] sm:min-h-[460px] flex items-center justify-center">
                <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -12, 0], rotateZ: [0, 1, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute z-20 top-4 left-0 sm:-left-6 p-5 rounded-2xl bg-white/80 backdrop-blur-2xl border border-white/60 shadow-2xl flex items-center gap-4 w-[240px] sm:w-64"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 flex-shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">99.9% Uptime</h4>
                      <p className="text-xs text-slate-500">24/7 Bot Active & Stable</p>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 15, 0], rotateZ: [0, -2, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute z-30 bottom-8 right-0 sm:-right-8 p-5 rounded-2xl bg-white/80 backdrop-blur-2xl border border-white/60 shadow-2xl flex items-center gap-4 w-[240px] sm:w-64"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 flex-shrink-0">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Fast Delivery</h4>
                      <p className="text-xs text-slate-500">Instant OTP & Deployment</p>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-violet-600/20 border border-white/50 backdrop-blur-3xl shadow-inner flex flex-col items-center justify-center p-8 text-center relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent pointer-events-none" />
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-2xl shadow-indigo-500/40 mb-4 z-10">
                      <Code className="w-8 h-8 sm:w-10 sm:h-10" />
                    </div>
                    <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 z-10">Nephyy Tech</span>
                    <span className="text-[10px] sm:text-xs font-semibold text-indigo-600 uppercase tracking-widest mt-1 z-10">
                      Modern Stack Platform
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">Our Core Services</h2>
              <h3 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                Produk & Layanan Digital Unggulan
              </h3>
              <p className="text-base sm:text-lg text-slate-600 mt-4">
                Dirancang dengan presisi untuk mendukung skalabilitas bisnis, efisiensi waktu, dan kebutuhan pengembangan aplikasi modern Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/60 p-8 shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        {service.icons.map((Icon, idx) => (
                          <div
                            key={idx}
                            className="w-10 h-10 rounded-xl bg-white/90 border border-white/80 shadow-md flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300"
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                        ))}
                      </div>
                      <span className={`text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full shadow-sm ${service.badgeColor}`}>
                        {service.badge}
                      </span>
                    </div>

                    <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.description}</p>

                    <div className="space-y-3 pt-6 border-t border-slate-200/60 mb-8">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="mb-6">
                      <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">Investasi</span>
                      <span className="text-2xl font-black text-slate-900">{service.price}</span>
                    </div>

                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleTelegramContact(service.contactText)}
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-slate-900 to-slate-800 hover:from-blue-600 hover:via-indigo-600 hover:to-violet-600 shadow-lg shadow-slate-900/10 hover:shadow-indigo-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Pesan via Telegram</span>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">Why Choose Us</h2>
              <h3 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                Mengapa Memilih Nephyy Store?
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUs.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className="p-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl flex flex-col items-start hover:bg-white/90 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/20 mb-6">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="payment" className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">Payment Methods</h2>
              <h3 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Metode Pembayaran
              </h3>
              <p className="text-base sm:text-lg text-slate-600">
                Transasksi aman, fleksibel, dan mendukung era digital modern.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="md:col-span-5 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/60 p-8 shadow-xl flex flex-col items-center justify-center text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg mb-6">
                  <QrCode className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">QRIS Payment</h4>
                <p className="text-sm text-slate-600 mb-6">Scan kode QR di bawah menggunakan e-Wallet atau Mobile Banking Anda.</p>
                
                <div className="p-3 bg-white rounded-2xl border border-slate-100 shadow-sm inline-block">
                  <img 
                    src="/img/qris.jpg" 
                    alt="QRIS Nephyy Store" 
                    className="w-56 h-56 object-cover rounded-xl border border-slate-100"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <p className="text-xs font-semibold text-slate-400 mt-3 uppercase tracking-widest">Image: /img/qris.jpg</p>
                </div>
              </motion.div>

              <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="sm:col-span-2 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-xl text-white relative overflow-hidden flex flex-col justify-center"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                      <Coins className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Cryptocurrency (TON / Gram)</h4>
                      <p className="text-slate-400 text-sm">Transfer otomatis ke wallet kami.</p>
                    </div>
                  </div>
                  <div className="bg-slate-950/50 border border-slate-700/50 rounded-xl p-4 flex items-center justify-between gap-4 relative z-10">
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-mono text-slate-300 truncate select-all block w-full">
                        UQCYToGsIma1Zj49KEgGfB9l5a7yBoaC9f1nDlt7GMNLlDdA
                      </span>
                    </div>
                    <button 
                      onClick={handleCopyAddress}
                      className="p-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors flex-shrink-0"
                      title="Copy Address"
                    >
                      {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4 text-white" />}
                    </button>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/60 p-8 shadow-xl flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center shadow-lg mb-4">
                    <Star className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Telegram Star</h4>
                  <p className="text-xs text-slate-600">Bayar menggunakan saldo Telegram Star Anda dengan instan.</p>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/60 p-8 shadow-xl flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-pink-600 text-white flex items-center justify-center shadow-lg mb-4">
                    <Gift className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Telegram Gift / NFT</h4>
                  <p className="text-xs text-slate-600">Kirim Telegram Gift atau NFT eksklusif sebagai metode transaksi.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-8 sm:p-14 text-white shadow-2xl relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="max-w-xl text-center md:text-left z-10">
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                  Siap Memulai Proyek Digital Anda?
                </h3>
                <p className="text-indigo-100 text-base sm:text-lg leading-relaxed">
                  Konsultasikan kebutuhan bot, website, atau infrastruktur nomor virtual Anda bersama tim ahli kami melalui Telegram sekarang juga.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleTelegramContact("Halo Nephyy Store, saya ingin konsultasi proyek baru.")}
                className="px-8 py-4 rounded-2xl font-bold text-indigo-900 bg-white shadow-xl hover:bg-slate-50 transition-all flex items-center gap-3 flex-shrink-0 z-10"
              >
                <Send className="w-5 h-5" />
                <span>Hubungi @zxeexoxee</span>
              </motion.button>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-slate-50/80 backdrop-blur-lg border-t border-slate-200/60 pt-16 pb-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-slate-200 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center text-white shadow-md">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="font-extrabold text-xl tracking-tight text-slate-900">
                  Nephyy<span className="text-indigo-600">.</span> Store
                </span>
              </div>
              <p className="text-sm text-slate-500 max-w-sm">
                Premium Digital Services, Automation Bots, Virtual Numbers & Modern Web Development.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-600">
              <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
              <a href="#why-us" className="hover:text-indigo-600 transition-colors">Why Us</a>
              <a href="#payment" className="hover:text-indigo-600 transition-colors">Pembayaran</a>
              <a 
                href="https://t.me/zxeexoxee" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-indigo-600 transition-colors flex items-center gap-1"
              >
                <Send className="w-3 h-3" /> Telegram Support
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center">
            <p>&copy; {new Date().getFullYear()} Nephyy Store. All rights reserved.</p>
            <p>Designed & Engineered with Next.js, React, and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
