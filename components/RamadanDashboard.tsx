// components/RamadanDashboard.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Star, Clock, Quote, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTheme } from '@/components/ThemeProvider';

const HADITHS = [
  { text: "Puasa adalah perisai, maka janganlah berkata-kata kotor dan janganlah berbuat jahil.", source: "HR. Bukhari & Muslim" },
  { text: "Barangsiapa yang berpuasa Ramadhan karena iman dan mengharap pahala, maka diampuni dosa-dosanya yang telah lalu.", source: "HR. Bukhari & Muslim" },
  { text: "Bau mulut orang yang berpuasa lebih harum di sisi Allah daripada aroma minyak kasturi.", source: "HR. Bukhari" },
  { text: "Sedekah yang paling utama adalah sedekah di bulan Ramadhan.", source: "HR. Tirmidzi" },
  { text: "Banyak orang yang berpuasa namun tidak mendapatkan apa-apa dari puasanya kecuali lapar dan dahaga.", source: "HR. Ibnu Majah" },
  { text: "Sahurlah kalian, karena sesungguhnya dalam sahur itu terdapat keberkahan.", source: "HR. Bukhari & Muslim" },
  { text: "Tiga doa yang tidak tertolak: doa orang yang berpuasa hingga berbuka, doa pemimpin yang adil, dan doa orang yang dizalimi.", source: "HR. Tirmidzi" }
];

interface PrayerTime {
  name: string;
  time: string;
}

interface RamadanDashboardProps {
  prayerTimes: PrayerTime[];
}

export default function RamadanDashboard({ prayerTimes }: RamadanDashboardProps) {
  const { theme } = useTheme();
  const isMobile = useIsMobile();
  const [time, setTime] = useState(new Date());
  const [hadithIndex, setHadithIndex] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);
  const [timeToIftar, setTimeToIftar] = useState('');
  const [timeToImsak, setTimeToImsak] = useState('');

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    const hadithTimer = setInterval(() => {
      setHadithIndex((prev) => (prev + 1) % HADITHS.length);
    }, 10000);
    return () => {
      clearInterval(timer);
      clearInterval(hadithTimer);
    };
  }, []);

  useEffect(() => {
    const calculateCountdowns = () => {
      const now = new Date();

      const imsakTime = prayerTimes.find(p => p.name === 'Imsak')?.time || '04:32';
      const maghribTime = prayerTimes.find(p => p.name === 'Maghrib')?.time || '18:08';

      const imsak = new Date();
      const [ih, im] = imsakTime.split(':').map(Number);
      imsak.setHours(ih, im, 0);
      if (now > imsak) imsak.setDate(imsak.getDate() + 1);
      const diffImsak = imsak.getTime() - now.getTime();
      const hoursI = Math.floor(diffImsak / (1000 * 60 * 60));
      const minutesI = Math.floor((diffImsak % (1000 * 60 * 60)) / (1000 * 60));
      const secondsI = Math.floor((diffImsak % (1000 * 60)) / 1000);
      setTimeToImsak(`${hoursI}:${minutesI.toString().padStart(2, '0')}:${secondsI.toString().padStart(2, '0')}`);

      const maghrib = new Date();
      const [mh, mm] = maghribTime.split(':').map(Number);
      maghrib.setHours(mh, mm, 0);
      if (now > maghrib) maghrib.setDate(maghrib.getDate() + 1);
      const diffMaghrib = maghrib.getTime() - now.getTime();
      const hoursM = Math.floor(diffMaghrib / (1000 * 60 * 60));
      const minutesM = Math.floor((diffMaghrib % (1000 * 60 * 60)) / (1000 * 60));
      const secondsM = Math.floor((diffMaghrib % (1000 * 60)) / 1000);
      setTimeToIftar(`${hoursM}:${minutesM.toString().padStart(2, '0')}:${secondsM.toString().padStart(2, '0')}`);
    };

    calculateCountdowns();
    const interval = setInterval(calculateCountdowns, 1000);
    return () => clearInterval(interval);
  }, [prayerTimes]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('id-ID', { hour12: false });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  };

  if (theme !== 'ramadan') {
    return null;
  }

  if (isMinimized) {
    return (
      <div className={`fixed z-[60] ${isMobile ? 'bottom-4 right-4' : 'bottom-8 left-8'}`}>
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          onClick={() => setIsMinimized(false)}
          className="glass w-12 h-12 rounded-full flex items-center justify-center border-[#f3e5ab]/20 shadow-xl hover:bg-[#f3e5ab]/10 transition-colors"
        >
          <Moon className="w-5 h-5 text-[#f3e5ab]" />
        </motion.button>
      </div>
    );
  }

  return (
    <div className={`fixed z-[60] ${isMobile ? 'bottom-4 right-4 w-64' : 'bottom-8 left-8 w-80'}`}>
      <motion.div 
        initial={{ opacity: 0, x: isMobile ? 50 : -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: isMobile ? 50 : -50 }}
        className={`glass rounded-[2rem] border-[#f3e5ab]/20 shadow-2xl backdrop-blur-2xl font-serif relative ${
          isMobile ? 'p-3' : 'p-6'
        }`}
      >
        <button
          onClick={() => setIsMinimized(true)}
          className="absolute top-2 right-2 text-[#f3e5ab]/60 hover:text-[#f3e5ab] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className={`flex items-center justify-between mb-4 ${isMobile ? 'mb-3' : 'mb-6'}`}>
          <div className="flex items-center gap-2">
            <div className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} bg-[#f3e5ab]/10 rounded-xl flex items-center justify-center`}>
              <Moon className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-[#f3e5ab]`} />
            </div>
            <div>
              <div className={`${isMobile ? 'text-[8px]' : 'text-[10px]'} font-black uppercase tracking-widest text-[#f3e5ab]/60 font-sans`}>
                Ramadan 1447H
              </div>
              <div className={`${isMobile ? 'text-[10px]' : 'text-xs'} font-bold text-[#f3e5ab]`}>
                XYCLOUD Special
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className={`${isMobile ? 'text-sm' : 'text-lg'} font-black text-[#f3e5ab] font-mono leading-none`}>
              {formatTime(time)}
            </div>
            <div className={`${isMobile ? 'text-[6px]' : 'text-[8px]'} font-bold uppercase tracking-tighter text-[#f3e5ab]/40 mt-1 font-sans`}>
              Waktu Lokal
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="p-2 bg-[#f3e5ab]/10 rounded-xl border border-[#f3e5ab]/20 text-center">
            <div className="text-[8px] font-black uppercase tracking-widest text-[#f3e5ab]/60 font-sans mb-1">
              Menuju Imsak
            </div>
            <div className="text-base font-black text-[#f3e5ab] font-mono">
              {timeToImsak}
            </div>
          </div>
          <div className="p-2 bg-[#f3e5ab]/10 rounded-xl border border-[#f3e5ab]/20 text-center">
            <div className="text-[8px] font-black uppercase tracking-widest text-[#f3e5ab]/60 font-sans mb-1">
              Menuju Buka
            </div>
            <div className="text-base font-black text-[#f3e5ab] font-mono">
              {timeToIftar}
            </div>
          </div>
        </div>

        <div className={`space-y-3 ${isMobile ? 'space-y-2' : 'space-y-4'}`}>
          <div className={`${isMobile ? 'p-2' : 'p-4'} bg-black/20 rounded-2xl border border-[#f3e5ab]/5`}>
            <div className="flex items-center gap-2 mb-2 opacity-40">
              <Clock className={`${isMobile ? 'w-2 h-2' : 'w-3 h-3'} text-[#f3e5ab]`} />
              <span className={`${isMobile ? 'text-[7px]' : 'text-[8px]'} font-black uppercase tracking-widest text-[#f3e5ab] font-sans`}>
                Jadwal Imsakiyah
              </span>
            </div>
            <div className="grid grid-cols-2 gap-1">
              {prayerTimes.map((p, i) => (
                <div key={i} className="flex justify-between items-center p-1 rounded-xl bg-white/5 border border-white/5">
                  <span className={`${isMobile ? 'text-[7px]' : 'text-[9px]'} font-bold text-[#f3e5ab]/60 font-sans uppercase`}>
                    {p.name}
                  </span>
                  <span className={`${isMobile ? 'text-[8px]' : 'text-[10px]'} font-black text-[#f3e5ab] font-mono`}>
                    {p.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {!isMobile && (
            <div className="p-4 bg-black/20 rounded-2xl border border-[#f3e5ab]/5">
              <div className="flex items-center gap-2 mb-2 opacity-40">
                <Quote className="w-3 h-3 text-[#f3e5ab]" />
                <span className="text-[8px] font-black uppercase tracking-widest text-[#f3e5ab] font-sans">
                  Hadist Hari Ini
                </span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={hadithIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-2"
                >
                  <p className="text-sm leading-relaxed text-[#f3e5ab] font-sans font-medium">
                    "{HADITHS[hadithIndex].text}"
                  </p>
                  <p className="text-[10px] font-bold text-[#f3e5ab]/60 text-right font-sans">
                    — {HADITHS[hadithIndex].source}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>

        <div className={`flex items-center justify-between mt-3 ${isMobile ? 'mt-2' : 'mt-4'} px-1`}>
          <div className="flex items-center gap-1">
            <Clock className={`${isMobile ? 'w-2 h-2' : 'w-3 h-3'} text-[#f3e5ab]/40`} />
            <span className={`${isMobile ? 'text-[7px]' : 'text-[9px]'} font-bold text-[#f3e5ab]/40 font-sans`}>
              {formatDate(time)}
            </span>
          </div>
          <div className="flex gap-1">
            {[1,2,3].map(i => (
              <Star key={i} className={`${isMobile ? 'w-1 h-1' : 'w-2 h-2'} ${i === 1 ? 'text-[#f3e5ab]' : 'text-[#f3e5ab]/20'}`} fill="currentColor" />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}