import type { CSSProperties } from 'react';

export function ProductDivider({
  label = '下篇 · 产品落地',
  delay = 0.42,
  variant = 'main',
}: {
  label?: string;
  delay?: number;
  variant?: 'main' | 'sub';
}) {
  const isSub = variant === 'sub';
  return (
    <div
      className={`reveal flex items-center gap-4 ${isSub ? 'py-4' : 'py-8'}`}
      style={{ '--reveal-delay': `${delay}s` } as CSSProperties}
    >
      <div className={`flex-1 h-px ${isSub ? 'bg-neutral-200' : 'bg-neutral-300'}`} />
      <div
        className={`font-bold uppercase tracking-[0.3em] ${
          isSub ? 'text-[10px] text-neutral-400' : 'text-[11px] text-neutral-500'
        }`}
      >
        {label}
      </div>
      <div className={`flex-1 h-px ${isSub ? 'bg-neutral-200' : 'bg-neutral-300'}`} />
    </div>
  );
}
