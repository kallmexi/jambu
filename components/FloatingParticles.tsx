'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from '@/components/ThemeProvider';

const particles = [
  { size: 4, top: '10%', left: '20%', duration: 15, delay: 0 },
  { size: 6, top: '30%', left: '80%', duration: 18, delay: 2 },
  { size: 3, top: '50%', left: '10%', duration: 12, delay: 4 },
  { size: 5, top: '70%', left: '90%', duration: 20, delay: 1 },
  { size: 4, top: '20%', left: '50%', duration: 16, delay: 3 },
  { size: 7, top: '80%', left: '30%', duration: 22, delay: 5 },
  { size: 3, top: '40%', left: '40%', duration: 14, delay: 2 },
  { size: 5, top: '60%', left: '70%', duration: 19, delay: 0 },
  { size: 4, top: '15%', left: '85%', duration: 17, delay: 4 },
  { size: 6, top: '85%', left: '15%', duration: 21, delay: 1 },
];

export default function FloatingParticles() {
  const { theme } = useTheme();

  const getParticleColor = () => {
    if (theme === 'ramadan') return 'text-[#f3e5ab]';
    return 'text-black dark:text-white';
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.1, 0.3, 0.1],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          style={{
            position: 'absolute',
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            backgroundColor: 'currentColor',
          }}
          className={`${getParticleColor()} opacity-20 blur-[1px]`}
        />
      ))}
    </div>
  );
}