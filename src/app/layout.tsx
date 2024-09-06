import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Providers } from '@/lib/providers'; // Importer le composant Providers

const inter = Inter({ subsets: ['latin'] });

const title = 'Yanis Nasri | Web Developer From Nimes, France.';
const description =
  'Un développeur spécialisé dans le développement web (React.js et Node.js), originaire de Nîmes, France.';
const url = 'https://yanisnasri.dev';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.PORT || 'http://localhost:3000'),
  title,
  description,
  keywords: [
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
  ],
  creator: 'Yanis Nasri',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    url: process.env.PORT || 'http://localhost:3000',
    title,
    description,
    siteName: title,
    images: [
      {
        url: '/images/yanisBanner.png',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-gray text-gray-600 antialiased`}>
        <Providers>  {/* Utilisation du composant Providers */}
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}


