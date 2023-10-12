import './globals.css';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import Sidebar from '@/components/Sidebar';

const font = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Natest Spotify',
  description: 'Listen to music!',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
