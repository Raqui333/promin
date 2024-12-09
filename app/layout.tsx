import type { Metadata } from 'next';
import Navbar from '@/app/components/Header/Header';
import './globals.scss';

export const metadata: Metadata = {
  title: {
    template: '%s | MySite',
    default: 'MySite',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
