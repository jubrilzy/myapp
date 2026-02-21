import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'StoreBuilder SaaS',
  description: 'MVP storefront builder skeleton',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
