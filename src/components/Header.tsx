'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import type { Messages } from '@/messages';

const emojis = ['◡̈', '^_^', '^o^', '^ω^', '∩_∩', '>▽<'];

interface HeaderProps {
  lang: Locale;
  messages: Messages;
}

export default function Header({ lang, messages }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [emoji, setEmoji] = useState(emojis[0]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      const contentHeight = docHeight - winHeight;
      const scrollRatio = contentHeight > 0 ? offset / contentHeight : 0;
      const emojiIndex = Math.min(Math.floor(scrollRatio * emojis.length), emojis.length - 1);

      setIsScrolled(offset > 80);
      setEmoji(emojis[emojiIndex]);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const isActiveLink = (path: string) => pathname === path;
  const otherLang = lang === 'en' ? 'cn' : 'en';
  const switchLangPath = pathname.replace(`/${lang}`, `/${otherLang}`);

  const navLinks = [
    { href: `/${lang}`, label: messages.cases },
    { href: `/${lang}/about`, label: messages.about },
    { href: `/${lang}/contact`, label: messages.contact },
  ];

  return (
    <>
      <header
        className={`
          flex overflow-hidden sticky top-0 z-50 items-center justify-between px-8 lg:px-12
          transition-all duration-300
          ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-white'}
        `}
        style={{ height: '64px' }}
      >
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center">
            <Image
              src="/assets/logo.svg"
              alt="Logo"
              width={100}
              height={28}
              className="h-6 md:h-7 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative px-5 py-2 text-sm font-normal tracking-wide
                  transition-all duration-300
                  ${isActiveLink(link.href) ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}
                  after:content-[''] after:absolute after:bottom-0 after:left-5 after:right-5
                  after:h-[2px] after:bg-gray-900 after:origin-center
                  after:transition-transform after:duration-300 after:ease-out
                  ${isActiveLink(link.href) ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}
                `}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Link
              href={switchLangPath}
              className="flex items-center space-x-1.5 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 transition-all duration-300 rounded-lg hover:bg-gray-50"
            >
              <span className="font-medium">{lang === 'en' ? '中' : 'EN'}</span>
            </Link>

            <div className="hidden md:block text-black text-base select-none">
              {emoji}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 md:hidden transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-lg font-medium">{lang === 'cn' ? '菜单' : 'Menu'}</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-3 text-base rounded-lg transition-colors duration-200 ${isActiveLink(link.href) ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
          <Link
            href={switchLangPath}
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-base text-gray-600 hover:text-gray-900 transition-all duration-200 rounded-lg hover:bg-gray-50"
          >
            <span className="font-medium">{lang === 'en' ? '切换到中文' : 'Switch to English'}</span>
          </Link>
          <div className="text-center mt-4 text-black text-lg select-none">{emoji}</div>
        </div>
      </div>
    </>
  );
}
