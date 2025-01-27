import Footer from '@/components/footer';
import Header from '@/components/header';
import { getImageUrl } from '@/lib/utils';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';

const rubik = Rubik({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Magistrala',
  description: 'Connect and Visualize your Devices',
  icons: {
    icon: [
      {
        url: getImageUrl('favicon.png'),
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={rubik.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
