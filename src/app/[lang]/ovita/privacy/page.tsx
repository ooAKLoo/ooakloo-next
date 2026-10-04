import type { Metadata } from 'next';
import sections from './policy.json';

export const metadata: Metadata = {
  title: 'oVita 隐私政策 | OOAKLOO',
  description: 'oVita 的本地资料、公开分享、诊断共享、可选云端智能及隐私控制说明。',
};

export default function OvitaPrivacyPage() {
  return (
    <article lang="zh-CN" className="mx-auto max-w-3xl px-6 py-16 text-neutral-800">
      <h1 className="text-3xl font-semibold">oVita 隐私政策</h1>
      <p className="mt-4 text-sm text-neutral-500">生效及更新日期：2026 年 10 月 4 日</p>
      <p className="mt-6 leading-8">适用于 oVita iOS、iPadOS、macOS 应用及相关配套服务。</p>
      {sections.map((section) => (
        <section key={section.title} className="mt-10">
          <h2 className="text-xl font-semibold">{section.title}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 leading-8">{paragraph}</p>)}
        </section>
      ))}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">联系与第三方政策</h2>
        <ul className="mt-4 space-y-3 text-blue-700 underline">
          <li><a href="mailto:hello@wojeeo.com">隐私请求：hello@wojeeo.com</a></li>
          <li><a href="/cn/contact">联系与技术支持</a></li>
          <li><a href="https://www.volcengine.com/docs/6256/64902">火山引擎隐私政策</a></li>
          <li><a href="https://help.aliyun.com/zh/document_detail/2705225.html">阿里云隐私政策</a></li>
        </ul>
      </section>
    </article>
  );
}
