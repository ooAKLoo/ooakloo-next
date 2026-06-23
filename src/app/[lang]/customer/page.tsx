import type { Metadata } from 'next';
import CustomerLanding from './CustomerLanding';
import { customerCopy } from './_copy';

type Locale = keyof typeof customerCopy;

interface CustomerPageProps {
  params: Promise<{ lang: string }>;
}

function resolveLocale(lang: string): Locale {
  return lang === 'cn' ? 'cn' : 'en';
}

export async function generateMetadata({ params }: CustomerPageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const copy = customerCopy[locale];
  const canonical = `/${locale}/customer`;

  return {
    title: {
      absolute: copy.meta.title,
    },
    description: copy.meta.description,
    keywords: [...copy.meta.keywords],
    authors: [{ name: copy.meta.author }],
    creator: copy.meta.siteName,
    publisher: copy.meta.siteName,
    alternates: {
      canonical,
      languages: {
        en: '/en/customer',
        'zh-CN': '/cn/customer',
      },
    },
    openGraph: {
      title: copy.meta.title,
      description: copy.meta.description,
      type: 'website',
      url: canonical,
      siteName: copy.meta.siteName,
      locale: locale === 'cn' ? 'zh_CN' : 'en_US',
      alternateLocale: locale === 'cn' ? 'en_US' : 'zh_CN',
    },
    twitter: {
      card: 'summary',
      title: copy.meta.title,
      description: copy.meta.description,
    },
  };
}

export default function CustomerPage() {
  return <CustomerLanding />;
}
