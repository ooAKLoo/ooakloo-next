'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/i18n';

const DOCS: { href: (lang: Locale) => string; label: string; hint: string }[] = [
  { href: (lang) => `/${lang}/innox`, label: 'Landing', hint: '一页落地概览' },
  { href: (lang) => `/${lang}/innox/pitch`, label: 'Pitch', hint: '完整路演叙事' },
  { href: (lang) => `/${lang}/innox/dossier`, label: 'Dossier', hint: '完整项目档案' },
];

export default function InnoxDock() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const clicksRef = useRef<number[]>([]);
  const pathname = usePathname();

  const handleTriggerClick = () => {
    if (open) {
      setOpen(false);
      clicksRef.current = [];
      return;
    }
    const now = Date.now();
    clicksRef.current = [...clicksRef.current, now].filter((t) => now - t <= 1200);
    if (clicksRef.current.length >= 5) {
      setOpen(true);
      clicksRef.current = [];
    }
  };

  const segs = pathname.split('/');
  const lang: Locale = segs[1] === 'cn' ? 'cn' : 'en';

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <span ref={ref} className="relative inline-flex items-center align-middle">
      <button
        type="button"
        aria-label="|"
        onClick={handleTriggerClick}
        className="text-gray-300 select-none cursor-default"
      >
        |
      </button>
      {open && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 min-w-[200px] rounded-xl bg-white shadow-xl ring-1 ring-gray-200/70 py-2 text-left">
          <div className="px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
            InnoX
          </div>
          {DOCS.map((d) => (
            <Link
              key={d.label}
              href={d.href(lang)}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-2 px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium">{d.label}</span>
              <span className="text-[11px] text-gray-400">{d.hint}</span>
            </Link>
          ))}
        </div>
      )}
    </span>
  );
}
