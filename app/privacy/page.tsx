// app/privacy/page.tsx (update - gunakan useTheme)
'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Shield, ArrowLeft } from 'lucide-react';
import FloatingParticles from '@/components/FloatingParticles';
import { useTheme } from '@/components/ThemeProvider';

export default function PrivacyPage() {
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
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-20 h-20 bg-black dark:bg-white rounded-[2rem] flex items-center justify-center shadow-2xl"
            >
              <Shield className="w-10 h-10 text-white dark:text-black" />
            </motion.div>
            <div>
              <div className="flex items-center gap-3 mb-2 opacity-40">
                <div className="h-[1px] w-8 bg-current" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Dokumen Hukum</span>
              </div>
              <h1 className="font-display text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">Kebijakan <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-black/20 to-black dark:from-white/20 dark:to-white">Privasi</span></h1>
            </div>
          </div>

          <div className="grid gap-12 text-sm md:text-base">
            <div className="glass rounded-[3rem] p-8 md:p-16 space-y-12 border border-black/5 dark:border-white/5 shadow-2xl backdrop-blur-3xl bg-white/50 dark:bg-black/50">
              <section className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-[10px] font-black">01</span>
                  <h2 className="text-2xl font-black uppercase tracking-tight">Pendahuluan</h2>
                </div>
                <p className="opacity-70 font-light leading-relaxed">
                  Selamat datang di XYCLOUD. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. Kebijakan Privasi ini dirancang untuk membantu Anda memahami bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi Anda saat Anda menggunakan layanan cloud gaming kami. Dengan menggunakan layanan kami, Anda menyetujui praktik yang dijelaskan dalam kebijakan ini. Kami menyarankan Anda untuk membaca dokumen ini secara menyeluruh untuk memahami komitmen kami terhadap keamanan data Anda.
                </p>
                <p className="opacity-70 font-light leading-relaxed">
                  XYCLOUD beroperasi sebagai platform streaming game global yang membutuhkan pemrosesan data tertentu untuk memberikan pengalaman bermain yang optimal dengan latensi rendah. Kami memastikan bahwa setiap data yang kami kumpulkan diproses sesuai dengan standar perlindungan data internasional, termasuk GDPR dan regulasi lokal yang berlaku di Indonesia. Kepercayaan Anda adalah prioritas utama kami, dan kami berupaya keras untuk menjaga transparansi dalam setiap langkah operasional kami.
                </p>
              </section>

              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent" />

              <section className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-[10px] font-black">02</span>
                  <h2 className="text-2xl font-black uppercase tracking-tight">Informasi yang Kami Kumpulkan</h2>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold">A. Informasi yang Anda Berikan Secara Langsung</h3>
                  <p className="opacity-70 font-light leading-relaxed">
                    Saat Anda mendaftar akun di XYCLOUD, kami mengumpulkan informasi identitas dasar seperti nama lengkap, alamat email, dan nomor telepon. Jika Anda berlangganan layanan berbayar, kami juga mengumpulkan informasi pembayaran yang diproses secara aman melalui mitra pembayaran pihak ketiga kami. Kami tidak menyimpan detail kartu kredit lengkap di server kami untuk alasan keamanan.
                  </p>
                  <h3 className="text-lg font-bold">B. Informasi yang Dikumpulkan Secara Otomatis</h3>
                  <p className="opacity-70 font-light leading-relaxed">
                    Saat Anda mengakses layanan kami, server kami secara otomatis mencatat informasi teknis tertentu. Ini termasuk alamat IP Anda, jenis perangkat, sistem operasi, resolusi layar, dan data performa jaringan. Informasi ini sangat penting bagi kami untuk mengoptimalkan aliran streaming video dan memastikan bahwa pengaturan game disesuaikan dengan kemampuan perangkat Anda.
                  </p>
                  <h3 className="text-lg font-bold">C. Data Penggunaan dan Gameplay</h3>
                  <p className="opacity-70 font-light leading-relaxed">
                    Kami mengumpulkan data tentang interaksi Anda dengan platform kami, termasuk judul game yang dimainkan, durasi sesi, pencapaian dalam game, dan preferensi kontrol. Data ini digunakan untuk memberikan rekomendasi yang dipersonalisasi dan untuk meningkatkan katalog game kami berdasarkan popularitas dan masukan pengguna.
                  </p>
                </div>
              </section>

              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent" />

              <section className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-[10px] font-black">03</span>
                  <h2 className="text-2xl font-black uppercase tracking-tight">Penggunaan Informasi</h2>
                </div>
                <p className="opacity-70 font-light leading-relaxed">
                  Tujuan utama kami dalam mengumpulkan informasi adalah untuk menyediakan dan meningkatkan layanan kami. Kami menggunakan data Anda untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 opacity-70 font-light ml-4">
                  <li>Mengelola akun Anda dan memberikan dukungan teknis yang diperlukan.</li>
                  <li>Mengoptimalkan latensi dan kualitas visual streaming berdasarkan lokasi geografis Anda.</li>
                  <li>Memproses transaksi pembayaran dan mengirimkan konfirmasi langganan.</li>
                  <li>Mengirimkan pembaruan layanan, peringatan keamanan, dan pesan administratif.</li>
                  <li>Mendeteksi, menyelidiki, dan mencegah aktivitas penipuan atau ilegal.</li>
                  <li>Melakukan analisis internal untuk memahami tren penggunaan dan meningkatkan fitur platform.</li>
                </ul>
              </section>

              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent" />

              <section className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-[10px] font-black">04</span>
                  <h2 className="text-2xl font-black uppercase tracking-tight">Keamanan Data</h2>
                </div>
                <p className="opacity-70 font-light leading-relaxed">
                  Keamanan data Anda adalah prioritas tertinggi bagi XYCLOUD. Kami menerapkan berbagai langkah keamanan teknis dan organisasi untuk melindungi informasi pribadi Anda dari akses yang tidak sah, pengungkapan, perubahan, atau penghancuran. Ini termasuk enkripsi data saat transit (menggunakan SSL/TLS) dan enkripsi data saat istirahat di server kami.
                </p>
                <p className="opacity-70 font-light leading-relaxed">
                  Meskipun kami berupaya keras untuk menggunakan cara yang dapat diterima secara komersial untuk melindungi informasi pribadi Anda, kami tidak dapat menjamin keamanan mutlaknya. Tidak ada metode transmisi melalui Internet atau metode penyimpanan elektronik yang 100% aman. Oleh karena itu, kami mendorong Anda untuk menggunakan kata sandi yang kuat dan tidak membagikan detail akun Anda kepada siapa pun.
                </p>
              </section>

              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent" />

              <section className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-[10px] font-black">05</span>
                  <h2 className="text-2xl font-black uppercase tracking-tight">Berbagi Informasi dengan Pihak Ketiga</h2>
                </div>
                <p className="opacity-70 font-light leading-relaxed">
                  Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak ketiga. Kami hanya membagikan data Anda dalam situasi terbatas berikut:
                </p>
                <ul className="list-disc list-inside space-y-2 opacity-70 font-light ml-4">
                  <li>Dengan penyedia layanan tepercaya yang membantu kami mengoperasikan platform (misalnya, penyedia infrastruktur cloud, pemroses pembayaran).</li>
                  <li>Untuk mematuhi kewajiban hukum, perintah pengadilan, atau permintaan pemerintah yang sah.</li>
                  <li>Untuk melindungi hak, properti, atau keamanan XYCLOUD, pengguna kami, atau publik.</li>
                  <li>Dalam konteks merger, akuisisi, atau penjualan aset perusahaan, di mana data pengguna mungkin menjadi salah satu aset yang dialihkan.</li>
                </ul>
              </section>

              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent" />

              <section className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-[10px] font-black">06</span>
                  <h2 className="text-2xl font-black uppercase tracking-tight">Hak dan Pilihan Anda</h2>
                </div>
                <p className="opacity-70 font-light leading-relaxed">
                  Anda memiliki hak tertentu terkait dengan informasi pribadi Anda. Anda dapat mengakses, memperbarui, atau menghapus informasi akun Anda kapan saja melalui pengaturan profil Anda. Jika Anda ingin menarik persetujuan Anda untuk pemrosesan data tertentu, Anda dapat menghubungi tim dukungan kami. Harap dicatat bahwa penarikan persetujuan mungkin membatasi kemampuan Anda untuk menggunakan fitur-fitur tertentu dari layanan kami.
                </p>
              </section>

              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent" />

              <section className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-[10px] font-black">07</span>
                  <h2 className="text-2xl font-black uppercase tracking-tight">Pembaruan Kebijakan</h2>
                </div>
                <p className="opacity-70 font-light leading-relaxed">
                  Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan dalam praktik kami atau untuk alasan operasional, hukum, atau peraturan lainnya. Kami akan memberi tahu Anda tentang perubahan signifikan dengan memposting kebijakan baru di halaman ini dan memperbarui tanggal "Terakhir Diperbarui" di bagian bawah. Kami mendorong Anda untuk meninjau kebijakan ini secara berkala agar tetap terinformasi tentang bagaimana kami melindungi informasi Anda.
                </p>
              </section>

              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent" />

              <section className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-[10px] font-black">08</span>
                  <h2 className="text-2xl font-black uppercase tracking-tight">Hubungi Kami</h2>
                </div>
                <p className="opacity-70 font-light leading-relaxed">
                  Jika Anda memiliki pertanyaan, kekhawatiran, atau permintaan terkait dengan Kebijakan Privasi ini atau penanganan data pribadi Anda oleh XYCLOUD, silakan hubungi petugas perlindungan data kami melalui email di <span className="font-black text-black dark:text-white underline underline-offset-4">privacy@xycloud.com</span>. Kami akan berusaha menanggapi permintaan Anda sesegera mungkin.
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