import type { Metadata } from 'next';
import DiffPuckLanding from './DiffPuckLanding';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const isChinese = lang === 'cn';

  return {
    title: isChinese ? 'DiffPuck｜把代码上下文拖给任何 AI' : 'DiffPuck | Hand code context to any AI',
    description: isChinese
      ? 'DiffPuck 是一款本地优先、只读 Git 的 macOS 代码上下文交接工具。'
      : 'DiffPuck is a local-first, read-only code context handoff for macOS.',
  };
}

export default async function DiffPuckPage({ params }: PageProps) {
  const { lang } = await params;
  return <DiffPuckLanding lang={lang === 'cn' ? 'cn' : 'en'} />;
}
