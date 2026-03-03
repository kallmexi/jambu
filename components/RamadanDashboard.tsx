'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Star, Clock, Quote } from 'lucide-react';

const HADITHS = [
  { text: "Puasa adalah perisai, maka janganlah berkata-kata kotor dan janganlah berbuat jahil.", source: "HR. Bukhari & Muslim" },
  { text: "Barangsiapa yang berpuasa Ramadhan karena iman dan mengharap pahala, maka diampuni dosa-dosanya yang telah lalu.", source: "HR. Bukhari & Muslim" },
  { text: "Bau mulut orang yang berpuasa lebih harum di sisi Allah daripada aroma minyak kasturi.", source: "HR. Bukhari" },
  { text: "Sedekah yang paling utama adalah sedekah di bulan Ramadhan.", source: "HR. Tirmidzi" },
  { text: "Banyak orang yang berpuasa namun tidak mendapatkan apa-apa dari puasanya kecuali lapar dan dahaga.", source: "HR. Ibnu Majah" },
  { text: "Sahurlah kalian, karena sesungguhnya dalam sahur itu terdapat keberkahan.", source: "HR. Bukhari & Muslim" },
  { text: "Tiga doa yang tidak tertolak: doa orang yang berpuasa hingga berbuka, doa pemimpin yang adil, dan doa orang yang dizalimi.", source: "HR. Tirmidzi" }
];

export default function RamadanDashboard() {
  const [time, setTime] = useState(new Date());
  const [hadithIndex, setHadithIndex] = useState(0);

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

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('id-ID', { hour12: false });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <div className="fixed bottom-8 left-8 z-[60] hidden xl:block">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="glass rounded-[2rem] p-6 border-[#f3e5ab]/20 shadow-2xl w-80 backdrop-blur-2xl font-serif"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#f3e5ab]/10 rounded-xl flex items-center justify-center">
              <Moon className="w-5 h-5 text-[#f3e5ab]" />
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-[#f3e5ab]/60 font-sans">Ramadan 1447H</div>
              <div className="text-xs font-bold text-[#f3e5ab]">XYCLOUD Special</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-black text-[#f3e5ab] font-mono leading-none">{formatTime(time)}</div>
            <div className="text-[8px] font-bold uppercase tracking-tighter text-[#f3e5ab]/40 mt-1 font-sans">Waktu Lokal</div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-black/20 rounded-2xl border border-[#f3e5ab]/5">
            <div className="flex items-center gap-2 mb-3 opacity-40">
              <Clock className="w-3 h-3 text-[#f3e5ab]" />
              <span className="text-[8px] font-black uppercase tracking-widest text-[#f3e5ab] font-sans">Jadwal Imsakiyah</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Imsak', time: '04:32' },
                { label: 'Subuh', time: '04:42' },
                { label: 'Dzuhur', time: '12:05' },
                { label: 'Ashar', time: '15:12' },
                { label: 'Maghrib', time: '18:08' },
                { label: 'Isya', time: '19:17' }
              ].map((p, i) => (
                <div key={i} className="flex justify-between items-center p-2 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[9px] font-bold text-[#f3e5ab]/60 font-sans uppercase">{p.label}</span>
                  <span className="text-[10px] font-black text-[#f3e5ab] font-mono">{p.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-black/20 rounded-2xl border border-[#f3e5ab]/5">
            <div className="flex items-center gap-2 mb-2 opacity-40">
              <Quote className="w-3 h-3 text-[#f3e5ab]" />
              <span className="text-[8px] font-black uppercase tracking-widest text-[#f3e5ab] font-sans">Hadist Hari Ini</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={hadithIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-2"
              >
                <p className="text-[11px] leading-relaxed text-[#f3e5ab]/80 italic">
                  "{HADITHS[hadithIndex].text}"
                </p>
                <p className="text-[9px] font-bold text-[#f3e5ab]/40 text-right font-sans">
                  — {HADITHS[hadithIndex].source}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3 text-[#f3e5ab]/40" />
              <span className="text-[9px] font-bold text-[#f3e5ab]/40 font-sans">{formatDate(time)}</span>
            </div>
            <div className="flex gap-1">
              {[1,2,3].map(i => (
                <Star key={i} className={`w-2 h-2 ${i === 1 ? 'text-[#f3e5ab]' : 'text-[#f3e5ab]/20'}`} fill="currentColor" />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
