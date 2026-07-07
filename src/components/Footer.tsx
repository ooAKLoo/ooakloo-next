'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import type { Messages } from '@/messages';
import InnoxDock from './InnoxDock';

const socialLinks = [
  { name: 'TikTok', icon: '/assets/icons/tiktok.webp', url: 'https://www.tiktok.com/@user5757841605063' },
  { name: 'YouTube', icon: '/assets/icons/youtube.webp', url: 'https://www.youtube.com/channel/UCRCjs622BRMHknf4Cg0czTw' },
  { name: 'Xiaohongshu', icon: '/assets/icons/xiaohongshu.webp', url: 'https://www.xiaohongshu.com/user/profile/5e4125ff00000000010064fd' },
  { name: 'Bilibili', icon: '/assets/icons/bilibili.webp', url: 'https://space.bilibili.com/22541325/video' },
  { name: 'GitHub', icon: '/assets/icons/github.webp', url: 'https://github.com/ooAKLoo' },
];

interface FooterProps {
  messages: Messages;
}

export default function Footer({ messages }: FooterProps) {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const isStandaloneCustomerPage = /^\/[^/]+\/customer(?:\/|$)/.test(pathname);
  const hideDetails = /^\/[^/]+\/lula(?:\/|$)/.test(pathname);

  if (isStandaloneCustomerPage) {
    return null;
  }

  return (
    <footer className="w-full bg-white">
      {!hideDetails && (
        <div className="border-t border-gray-100">
          <div className="container mx-auto px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:items-start">
              {/* Contact Info */}
              <div className="md:justify-self-start">
                <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-6">
                  {messages.contactInfo}
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:hello@wojeeo.com"
                    className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors group"
                  >
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <span className="text-sm">hello@wojeeo.com</span>
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="md:justify-self-center">
                <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-6">
                  {messages.address}
                </h3>
                <div className="flex items-start gap-3 text-gray-600">
                  <svg className="w-4 h-4 text-gray-400 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="text-sm">{messages.addressText}</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="md:justify-self-end">
                <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-6">
                  {messages.followUs}
                </h3>
                <div className="flex flex-wrap gap-1">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 group"
                    >
                      <Image
                        src={social.icon}
                        alt={social.name}
                        width={20}
                        height={20}
                        className="opacity-60 group-hover:opacity-100 transition-opacity duration-200"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Copyright */}
      <div className="bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-gray-500 text-center">
            <span>{messages.footerCopyright.replace('{year}', String(year))}</span>
            <InnoxDock />
            <a
              href="https://ooakloo.github.io/knowledge-reader/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition-colors"
            >
              {messages.knowledgeReader}
            </a>
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition-colors"
            >
              青ICP备 2024001895号-2
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
