import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = 'https://ooakloo.com';
const siteName = 'ooakloo';
const siteTitle = 'ooakloo - Creativity & Design';
const siteDescription = 'Merging technology and art to create products that touch hearts. We provide innovative software solutions, design services, and creative digital experiences.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | ooakloo',
  },
  description: siteDescription,
  keywords: [
    'ooakloo',
    'software development',
    'design services',
    'creative software',
    'UI/UX design',
    'web development',
    'mobile apps',
    'technology',
    'art',
    'digital products',
  ],
  authors: [{ name: 'ooakloo Team', url: siteUrl }],
  creator: 'ooakloo',
  publisher: 'ooakloo',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'zh_CN',
    url: siteUrl,
    siteName: siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ooakloo - Creativity & Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/og-image.png'],
    creator: '@ooakloo',
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'en': '/en',
      'zh-CN': '/cn',
    },
  },
  category: 'technology',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="antialiased">{children}</body>
    </html>
  );
}
