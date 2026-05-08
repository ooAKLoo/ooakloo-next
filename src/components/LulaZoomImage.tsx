/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export function LulaZoomImage({ src, alt, className }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const overlay = (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/85 p-4 md:p-8 cursor-zoom-out animate-[lula-fade_0.18s_ease-out]"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(false);
        }}
        aria-label="关闭"
        className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <X className="h-5 w-5" />
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] max-w-[92vw] cursor-default rounded-lg object-contain shadow-2xl"
      />
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/10 text-white text-[11px] tracking-wider">
        点击空白处或按 Esc 关闭
      </div>
      <style>{`
        @keyframes lula-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`查看大图：${alt}`}
        className="block h-full w-full cursor-zoom-in p-0 m-0 border-0 bg-transparent"
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={className ?? 'h-full w-full object-cover'}
        />
      </button>
      {open && typeof document !== 'undefined'
        ? createPortal(overlay, document.body)
        : null}
    </>
  );
}
