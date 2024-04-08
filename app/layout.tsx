import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import darkTheme from './lib/dark-theme';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  metadataBase: new URL('https://josiasbudaydeveloper-next-14-dashboard-app.vercel.app/'),
  description: 'A Dashboard App where users can create an account (with their credentials or using an OAuth provider), create customers and assign invoices to them. Invoices will be shown at the Dashboard page as a summary. This project is based on the Next Learn Course, the official Next.js 14 tutorial and created by Vercel.',
  openGraph: {
    title: 'Dashboard App, created by Vercel and modified by Josias Buday Developer',
    description: 'A Dashboard App where users can create an account (with their credentials or using an OAuth provider), create customers and assign invoices to them. Invoices will be shown at the Dashboard page as a summary. This project is based on the Next Learn Course, the official Next.js 14 tutorial and created by Vercel.',
    siteName: 'Acme Dashboard',
    locale: 'en_US'
  }
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased ${darkTheme.bg}`}>{children}</body>
    </html>
  );
}