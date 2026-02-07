import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'AlgoWave Labs | Next-Gen Software Solutions',
  description:
    'Engineering autonomous digital infrastructures, AI-Integrated SaaS, and Real-time ERPs with zero-latency logic.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030303] text-white`}
      >
        <div>
          {' '}
          <Navbar />
          {/* main-er pt-20 optimized Navbar-er padding-er sathe match korbe */}
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
