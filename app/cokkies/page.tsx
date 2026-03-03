'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Cookie, ArrowLeft, Home } from 'lucide-react';
import FloatingParticles from '@/components/FloatingParticles';

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] p-6 md:p-20 overflow-hidden relative">
      <FloatingParticles />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link href="/">
            <button className="group flex items-center gap-2 text-xs font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-all">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Beranda
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col md:flex-row md:items-end gap-6 mb-16">
            <div className="w-20 h-20 bg-black dark:bg-white rounded-[2rem] flex items-center justify-center shadow-2xl">
              <Cookie className="w-10 h-10 text-white dark:text-black" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2 opacity-40">
                <div className="h-[1px] w-8 bg-current" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Cookie Policy</span>
              </div>
              <h1 className="font-display text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">Kebijakan <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-black/20 to-black dark:from-white/20 dark:to-white">Cookies</span></h1>
            </div>
          </div>

          <div className="grid gap-12 text-sm md:text-base">
            <div className="glass rounded-[3rem] p-8 md:p-16 space-y-12 border border-black/5 dark:border-white/5 shadow-2xl backdrop-blur-3xl bg-white/50 dark:bg-black/50">
              <section className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-[10px] font-black">01</span>
                  <h2 className="text-2xl font-black uppercase tracking-tight">Apa itu Cookies?</h2>
                </div>
                <p className="opacity-70 font-light leading-relaxed">
                  Cookies adalah file teks kecil yang disimpan di perangkat Anda saat Anda mengunjungi situs web. Mereka digunakan secara luas untuk membuat situs web berfungsi, atau berfungsi lebih efisien, serta untuk memberikan informasi kepada pemilik situs. Di XYCLOUD, kami menggunakan cookies untuk meningkatkan pengalaman pengguna, mengingat preferensi Anda, dan menganalisis cara Anda menggunakan layanan kami.
                </p>
              </section>

              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent" />

              <section className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-[10px] font-black">02</span>
                  <h2 className="text-2xl font-black uppercase tracking-tight">Jenis Cookies yang Kami Gunakan</h2>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold">A. Cookies Esensial</h3>
                  <p className="opacity-70 font-light leading-relaxed">
                    Cookies ini sangat penting bagi Anda untuk dapat menjelajahi situs web dan menggunakan fitur-fiturnya, seperti mengakses area aman di situs web. Tanpa cookies ini, layanan yang Anda minta, seperti keranjang belanja atau e-billing, tidak dapat disediakan.
                  </p>
                  <h3 className="text-lg font-bold">B. Cookies Performa</h3>
                  <p className="opacity-70 font-light leading-relaxed">
                    Cookies ini mengumpulkan informasi tentang bagaimana pengunjung menggunakan situs web, misalnya halaman mana yang paling sering dikunjungi pengunjung, dan jika mereka mendapatkan pesan kesalahan dari halaman web. Cookies ini tidak mengumpulkan informasi yang mengidentifikasi pengunjung. Semua informasi yang dikumpulkan cookies ini bersifat agregat dan oleh karena itu anonim.
                  </p>
                  <h3 className="text-lg font-bold">C. Cookies Fungsional</h3>
                  <p className="opacity-70 font-light leading-relaxed">
                    Cookies ini memungkinkan situs web untuk mengingat pilihan yang Anda buat (seperti nama pengguna, bahasa, atau wilayah tempat Anda berada) dan memberikan fitur yang lebih personal dan ditingkatkan. Misalnya, situs web mungkin dapat memberi Anda laporan cuaca lokal atau berita lalu lintas dengan menyimpan data wilayah tempat Anda berada saat ini dalam cookie.
                  </p>
                </div>
              </section>

              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent" />

              <section className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-[10px] font-black">03</span>
                  <h2 className="text-2xl font-black uppercase tracking-tight">Mengelola Cookies</h2>
                </div>
                <p className="opacity-70 font-light leading-relaxed">
                  Anda dapat mengontrol dan/atau menghapus cookies sesuai keinginan Anda – untuk detailnya, lihat aboutcookies.org. Anda dapat menghapus semua cookies yang sudah ada di komputer Anda dan Anda dapat mengatur sebagian besar browser untuk mencegahnya ditempatkan. Namun, jika Anda melakukan ini, Anda mungkin harus menyesuaikan beberapa preferensi secara manual setiap kali Anda mengunjungi situs dan beberapa layanan serta fungsi mungkin tidak berfungsi.
                </p>
              </section>

              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent" />

              <section className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-[10px] font-black">04</span>
                  <h2 className="text-2xl font-black uppercase tracking-tight">Pembaruan Kebijakan</h2>
                </div>
                <p className="opacity-70 font-light leading-relaxed">
                  Kami dapat memperbarui Kebijakan Cookies ini dari waktu ke waktu untuk mencerminkan, misalnya, perubahan pada cookies yang kami gunakan atau untuk alasan operasional, hukum, atau peraturan lainnya. Oleh karena itu, harap kunjungi kembali Kebijakan Cookies ini secara berkala untuk tetap terinformasi tentang penggunaan cookies dan teknologi terkait kami.
                </p>
              </section>
            </div>
            
            <div className="text-center opacity-20 text-[10px] font-black uppercase tracking-[0.5em] py-12">
              Terakhir Diperbarui: 3 Maret 2026 • Tim Hukum XYCLOUD
            </div>
          </div>
        </motion.div>
      </div>
      <div className="fixed inset-0 grid-bg pointer-events-none z-[-1] opacity-5" />
      <div className="fixed top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
    </div>
  );
}
