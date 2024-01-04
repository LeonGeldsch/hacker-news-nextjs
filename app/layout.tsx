import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ItemsPerPageSelect from '@/components/ItemsPerPageSelect';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hacker News',
  description: 'Custom Hacker News frontend made with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="flex min-h-screen flex-col items-center gap-10 bg-background px-4 pb-10 text-foreground lg:px-24 lg:pb-24">
            <Navbar />
            {children}
            <ItemsPerPageSelect />
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
