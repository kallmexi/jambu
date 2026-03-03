// app/terms/page.tsx (update - gunakan useTheme)
'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import FloatingParticles from '@/components/FloatingParticles';
import { useTheme } from '@/components/ThemeProvider';

export default function TermsPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme, mounted]);

  if (!mounted) {
    return null;
  }

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
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 bg-black dark:bg-white rounded-[2rem] flex items-center justify-center shadow-2xl"
            >
              <CheckCircle className="w-10 h-10 text-white dark:text-black" />
            </motion.div>
            <div>
              <div className="flex items-center gap-3 mb-2 opacity-40">
                <div className="h-[1px] w-8 bg-current" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Perjanjian Hukum</span>
              </div>
              <h1 className="font-display text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">Syarat & <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-black/20 to-black dark:from-white/20 dark:to-white">Ketentuan</span></h1>
            </div>
          </div>

          <div className="grid gap-12 text-sm md:text-base">
            <div className="glass rounded-[3rem] p-8 md:p-16 space-y-12 border border-black/5 dark:border-white/5 shadow-2xl backdrop-blur-3xl bg-white/50 dark:bg-black/50">
              <section className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-[10px] font-black">01</span>
                  <h2 className="text-2xl font-black uppercase tracking-tight">Penerimaan Ketentuan</h2>
                </div>
                <p className="opacity-70 font-light leading-relaxed">
                  Dengan mengakses atau menggunakan layanan XYCLOUD, Anda setuju untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak menyetujui semua ketentuan ini, Anda tidak diperbolehkan menggunakan layanan kami. Perjanjian ini merupakan kontrak hukum yang mengikat antara Anda dan XYCLOUD terkait penggunaan platform cloud gaming kami. Kami berhak untuk memperbarui atau mengubah ketentuan ini kapan saja tanpa pemberitahuan sebelumnya, dan penggunaan berkelanjutan Anda atas layanan setelah perubahan tersebut merupakan penerimaan Anda terhadap ketentuan baru tersebut.
                </p>
                <p className="opacity-70 font-light leading-relaxed">
                  Penting bagi Anda untuk memahami bahwa layanan kami bergantung pada ketersediaan infrastruktur teknologi dan konektivitas internet. Dengan menggunakan XYCLOUD, Anda mengakui bahwa performa layanan dapat bervariasi berdasarkan faktor-faktor di luar kendali kami, termasuk namun tidak terbatas pada kualitas penyedia layanan internet Anda dan spesifikasi perangkat keras yang Anda gunakan.
                </p>
              </section>

              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent" />

              <section className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-[10px] font-black">02</span>
                  <h2 className="text-2xl font-black uppercase tracking-tight">Deskripsi Layanan</h2>
                </div>
                <p className="opacity-70 font-light leading-relaxed">
                  XYCLOUD menyediakan layanan cloud gaming yang memungkinkan pengguna untuk melakukan streaming game dari server kami ke perangkat mereka. Layanan ini mencakup akses ke infrastruktur komputasi berperforma tinggi, penyimpanan data game, dan antarmuka pengguna untuk manajemen perpustakaan game. Kami terus berupaya untuk meningkatkan katalog game kami dan fitur-fitur platform, namun kami tidak menjamin ketersediaan judul game tertentu secara permanen.
                </p>
                <p className="opacity-70 font-light leading-relaxed">
                  Kami berhak untuk memodifikasi, menangguhkan, atau menghentikan bagian mana pun dari layanan kami kapan saja, baik secara sementara maupun permanen, dengan atau tanpa pemberitahuan. Ini termasuk pemeliharaan rutin server, pembaruan perangkat lunak, atau penyesuaian infrastruktur untuk meningkatkan kualitas layanan bagi seluruh pengguna.
                </p>
              </section>

              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent" />

              <section className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-[10px] font-black">03</span>
                  <h2 className="text-2xl font-black uppercase tracking-tight">Akun Pengguna dan Keamanan</h2>
                </div>
                <p className="opacity-70 font-light leading-relaxed">
                  Untuk menggunakan fitur tertentu dari layanan kami, Anda harus membuat akun pengguna. Anda bertanggung jawab untuk menjaga kerahasiaan informasi akun Anda, termasuk kata sandi Anda, dan untuk semua aktivitas yang terjadi di bawah akun Anda. Anda setuju untuk segera memberi tahu XYCLOUD tentang penggunaan akun Anda yang tidak sah atau pelanggaran keamanan lainnya.
                </p>
                <p className="opacity-70 font-light leading-relaxed">
                  Anda harus memberikan informasi yang akurat, lengkap, dan terbaru saat membuat akun. Kegagalan untuk melakukannya merupakan pelanggaran terhadap ketentuan ini, yang dapat mengakibatkan penghentian segera akun Anda di layanan kami. Kami berhak menolak pendaftaran akun atau membatalkan akun yang ada sesuai dengan kebijakan internal kami, terutama jika ditemukan adanya indikasi penyalahgunaan atau pelanggaran ketentuan.
                </p>
              </section>

              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent" />

              <section className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-[10px] font-black">04</span>
                  <h2 className="text-2xl font-black uppercase tracking-tight">Perilaku yang Dilarang</h2>
                </div>
                <p className="opacity-70 font-light leading-relaxed">
                  Anda setuju untuk tidak menggunakan layanan kami untuk tujuan ilegal atau yang dilarang oleh ketentuan ini. Aktivitas yang dilarang termasuk namun tidak terbatas pada:
                </p>
                <ul className="list-disc list-inside space-y-2 opacity-70 font-light ml-4">
                  <li>Melakukan reverse engineering, dekompilasi, atau mencoba mengekstrak kode sumber dari platform kami.</li>
                  <li>Menggunakan skrip otomatis, bot, atau alat serupa untuk mengganggu operasional layanan.</li>
                  <li>Membagikan akun Anda dengan orang lain atau menjual akses akun kepada pihak ketiga.</li>
                  <li>Mengunggah atau mengirimkan konten yang melanggar hak kekayaan intelektual orang lain.</li>
                  <li>Melakukan tindakan yang membebani infrastruktur server kami secara tidak wajar.</li>
                  <li>Menggunakan layanan untuk menambang mata uang kripto (cryptocurrency mining) atau aktivitas komputasi intensif non-gaming lainnya.</li>
                </ul>
              </section>

              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent" />

              <section className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-[10px] font-black">05</span>
                  <h2 className="text-2xl font-black uppercase tracking-tight">Pembayaran dan Langganan</h2>
                </div>
                <p className="opacity-70 font-light leading-relaxed">
                  Beberapa bagian dari layanan kami ditawarkan berdasarkan langganan berbayar. Anda akan ditagih di muka secara berkala sesuai dengan paket yang Anda pilih. Langganan Anda akan diperpanjang secara otomatis kecuali Anda membatalkannya sebelum tanggal perpanjangan. Semua pembayaran tidak dapat dikembalikan kecuali diwajibkan oleh hukum yang berlaku.
                </p>
                <p className="opacity-70 font-light leading-relaxed">
                  Kami berhak untuk mengubah biaya langganan kami kapan saja. Setiap perubahan harga akan berlaku pada akhir siklus penagihan saat ini. Kami akan memberikan pemberitahuan yang wajar tentang perubahan harga tersebut agar Anda memiliki kesempatan untuk membatalkan langganan Anda sebelum perubahan berlaku.
                </p>
              </section>

              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent" />

              <section className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-[10px] font-black">06</span>
                  <h2 className="text-2xl font-black uppercase tracking-tight">Batasan Tanggung Jawab</h2>
                </div>
                <p className="opacity-70 font-light leading-relaxed">
                  Sejauh diizinkan oleh hukum yang berlaku, XYCLOUD tidak akan bertanggung jawab atas kerusakan tidak langsung, insidental, khusus, konsekuensial, atau punitif, termasuk namun tidak terbatas pada hilangnya keuntungan, data, penggunaan, atau kerugian tidak berwujud lainnya, yang dihasilkan dari akses Anda ke atau penggunaan atau ketidakmampuan untuk mengakses atau menggunakan layanan.
                </p>
                <p className="opacity-70 font-light leading-relaxed">
                  Kami tidak memberikan jaminan bahwa layanan akan memenuhi kebutuhan Anda, tidak terganggu, tepat waktu, aman, atau bebas dari kesalahan. Anda memahami bahwa penggunaan layanan adalah atas risiko Anda sendiri dan bahwa layanan disediakan "sebagaimana adanya" dan "sebagaimana tersedia".
                </p>
              </section>

              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent" />

              <section className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-[10px] font-black">07</span>
                  <h2 className="text-2xl font-black uppercase tracking-tight">Hukum yang Mengatur</h2>
                </div>
                <p className="opacity-70 font-light leading-relaxed">
                  Syarat dan Ketentuan ini akan diatur dan ditafsirkan sesuai dengan hukum Republik Indonesia, tanpa memperhatikan pertentangan prinsip-prinsip hukumnya. Setiap perselisihan yang timbul dari atau terkait dengan ketentuan ini akan diselesaikan secara eksklusif di pengadilan yang berwenang di wilayah hukum Indonesia.
                </p>
              </section>

              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent" />

              <section className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-[10px] font-black">08</span>
                  <h2 className="text-2xl font-black uppercase tracking-tight">Kontak</h2>
                </div>
                <p className="opacity-70 font-light leading-relaxed">
                  Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami melalui email di <span className="font-black text-black dark:text-white underline underline-offset-4">legal@xycloud.com</span>. Kami akan berusaha menanggapi pertanyaan Anda dalam waktu yang wajar.
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
      <div className="fixed top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
    </div>
  );
}