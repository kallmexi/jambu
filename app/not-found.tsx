// app/not-found.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, ChevronLeft } from 'lucide-react';
import FloatingParticles from '@/components/FloatingParticles';
import { useTheme } from '@/components/ThemeProvider';

export default function NotFound() {
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
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
      <FloatingParticles />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-2xl aspect-video mb-8 z-10"
      >
        <Image
          src="/assets/gif/404.gif"
          alt="404 Not Found"
          fill
          className="object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          unoptimized
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="z-10"
      >
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-black/10 dark:bg-white/10" />
          <span className="text-xs font-black uppercase tracking-[0.5em] opacity-40">Error 404</span>
          <div className="h-[1px] w-12 bg-black/10 dark:bg-white/10" />
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase leading-none">
          Halaman Tidak <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-black/40 to-black dark:from-white dark:via-white/40 dark:to-white">Ditemukan</span>
        </h1>
        
        <p className="text-lg opacity-40 font-light mb-12 max-w-md mx-auto leading-relaxed">
          Ups! Sepertinya Anda tersesat di awan. Halaman yang Anda cari telah berpindah atau tidak pernah ada.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-black text-white dark:bg-white dark:text-black rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 shadow-2xl hover:shadow-black/20 dark:hover:shadow-white/20 transition-all"
            >
              <Home className="w-4 h-4" />
              Kembali ke Beranda
            </motion.button>
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="px-10 py-5 border border-black/10 dark:border-white/10 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-black/5 dark:hover:bg-white/5 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            Kembali
          </button>
        </div>
      </motion.div>

      <div className="fixed inset-0 grid-bg pointer-events-none z-[-1] opacity-5" />
      <div className="fixed bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
    </div>
  );
}