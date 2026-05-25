import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import '@/styles/globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://justicepartners.com'),
  title: {
    default: 'Justice & Partners LLP — Trusted Legal Counsel',
    template: '%s | Justice & Partners LLP',
  },
  description:
    'Justice & Partners LLP provides experienced legal representation in corporate law, civil litigation, real estate, family law, intellectual property, and more. Over 25 years of results.',
  keywords: ['law firm', 'attorney', 'legal counsel', 'litigation', 'corporate law', 'New York'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Justice & Partners LLP',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: 'Justice & Partners LLP' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main id="main-content" className="pt-20">
          {children}
        </main>
        <Footer />

        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LegalService',
              name: 'Justice & Partners LLP',
              url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://justicepartners.com',
              logo: '/images/logo.svg',
              telephone: '+1-555-000-1234',
              email: 'info@justicepartners.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Legal Avenue, Suite 800',
                addressLocality: 'New York',
                addressRegion: 'NY',
                postalCode: '10001',
                addressCountry: 'US',
              },
              sameAs: [
                'https://linkedin.com/company/justice-partners',
                'https://twitter.com/justicepartners',
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
