import type { Metadata } from 'next';
import CustomerLanding from './CustomerLanding';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Rova 若行 · 随身携带的随行云';
  const description =
    '照片、视频、文件不用上传云端，也不用插线。手机、iPad、电脑连上 Rova 若行，就能随时访问、备份和播放个人资料。';

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: ['Rova 若行', '若行', '随行云', '私人云', '个人云存储', '近场共享', '本地存储'],
    authors: [{ name: 'Rova 若行团队' }],
    creator: 'Rova 若行',
    publisher: 'Rova 若行',
    alternates: {
      canonical: '/cn/customer',
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: '/cn/customer',
      siteName: 'Rova 若行',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
}

export default function CustomerPage() {
  return <CustomerLanding />;
}
