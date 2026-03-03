// components/NotificationButton.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { Bell } from 'lucide-react';
import { motion } from 'motion/react';

interface PrayerTime {
  name: string;
  time: string;
}

interface NotificationButtonProps {
  prayerTimes: PrayerTime[];
}

export default function NotificationButton({ prayerTimes }: NotificationButtonProps) {
  const [permission, setPermission] = useState<NotificationPermission>('default');

  useEffect(() => {
    if ('Notification' in window) {
      setPermission(Notification.permission);
    }
  }, []);

  const requestPermission = async () => {
    if (!('Notification' in window)) {
      alert('Browser tidak mendukung notifikasi');
      return;
    }
    const result = await Notification.requestPermission();
    setPermission(result);
    if (result === 'granted') {
      scheduleNotifications();
    }
  };

  const scheduleNotifications = () => {
    // Jadwalkan notifikasi 5 menit sebelum waktu imsak dan maghrib
    const targetPrayers = prayerTimes.filter(p => p.name === 'Imsak' || p.name === 'Maghrib');
    targetPrayers.forEach(prayer => {
      const [hour, minute] = prayer.time.split(':').map(Number);
      const now = new Date();
      const scheduled = new Date(now);
      scheduled.setHours(hour, minute - 5, 0); // 5 menit sebelum

      if (scheduled < now) {
        scheduled.setDate(scheduled.getDate() + 1);
      }

      const timeout = scheduled.getTime() - now.getTime();
      setTimeout(() => {
        new Notification(`XYCLOUD - ${prayer.name}`, {
          body: `Waktu ${prayer.name === 'Imsak' ? 'Imsak' : 'Berbuka'} akan tiba dalam 5 menit.`,
          icon: '/assets/images/logo.webp',
        });
      }, timeout);
    });
  };

  if (permission === 'granted') {
    return null; // Notifikasi sudah aktif
  }

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      onClick={requestPermission}
      className="fixed bottom-24 right-8 z-50 glass w-12 h-12 rounded-full flex items-center justify-center border-[#f3e5ab]/20 shadow-xl hover:bg-[#f3e5ab]/10 transition-colors"
      title="Aktifkan notifikasi waktu sholat"
    >
      <Bell className="w-5 h-5 text-[#f3e5ab]" />
    </motion.button>
  );
}