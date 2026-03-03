'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { Home } from 'lucide-react';
import FloatingParticles from '@/components/FloatingParticles';
import { useTheme } from '@/components/ThemeProvider';

export default function MaintenancePage() {
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
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] flex flex-col items-center justify-center p-6 text-center overflow-hidden relative">
      <FloatingParticles />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mb-12"
      >
        <div className="relative w-32 h-32 mx-auto mb-8">
          <Image
            src="/assets/gif/maintenance.gif"
            alt="Maintenance"
            fill
            className="object-contain"
            unoptimized
          />
        </div>
        
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-black/10 dark:bg-white/10" />
          <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">Maintenance Mode</span>
          <div className="h-[1px] w-12 bg-black/10 dark:bg-white/10" />
        </div>
        
        <h1 className="font-display text-5xl md:text-8xl font-black tracking-tighter mb-6 uppercase leading-none">
          Sedang Dalam <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-black/20 to-black dark:from-white/20 dark:to-white">Pemeliharaan</span>
        </h1>
        
        <p className="text-lg opacity-40 font-light mb-12 max-w-md mx-auto leading-relaxed">
          Kami sedang melakukan pembaruan sistem untuk memberikan pengalaman cloud gaming yang lebih baik. Kami akan segera kembali!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-black text-white dark:bg-white dark:text-black rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 shadow-2xl"
            >
              <Home className="w-4 h-4" />
              Kembali ke Beranda
            </motion.button>
          </Link>
        </div>
      </motion.div>

      <div className="fixed inset-0 grid-bg pointer-events-none z-[-1] opacity-5" />
      <div className="fixed bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
    </div>
  );
}