// app/layout.tsx (update)
import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Cormorant_Garamond } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
});
<head>
  <link rel="manifest" href="/manifest.json" />
</head>
export const metadata: Metadata = {
  title: 'XYCLOUD | Rhamadan',
  description: 'Experience high-performance gaming on any device with XYCLOUD Cloud Remote Desktop.',
  openGraph: {
    title: 'XYCLOUD - Rhamadan',
    description: 'Main di mana saja, tanpa lag. Ubah perangkat apa pun menjadi rig gaming kelas atas.',
    url: 'https://xyclanding.vercel.app',
    siteName: 'XYCLOUD',
    images: [
      {
        url: 'https://xyclanding.vercel.app/assets/images/og-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'XYCLOUD Banner',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XYCLOUD - Cloud Gaming Platform',
    description: 'Main di mana saja, tanpa lag.',
    images: ['https://xyclanding.vercel.app/assets/images/og-banner.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${cormorant.variable}`}>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}