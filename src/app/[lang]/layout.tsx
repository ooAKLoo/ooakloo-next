import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import { getMessages } from '@/messages';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const { lang } = await params;

  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  const messages = getMessages(lang as Locale);

  return (
    <div className="min-h-screen flex flex-col">
      <Header lang={lang as Locale} messages={messages} />
      <main className="flex-1">{children}</main>
      <Footer messages={messages} />
    </div>
  );
}
