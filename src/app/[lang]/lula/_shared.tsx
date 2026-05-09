// Shared design tokens and primitive components for the Lula research page.
// Used by page.tsx and section components under ./_components.

export const ACCENT = '#2563EB';
export const ACCENT_LIGHT = '#EFF6FF';

export type Tone = 'accent' | 'amber' | 'emerald' | 'rose' | 'neutral' | 'violet';

export const TONE: Record<Tone, { color: string; bg: string }> = {
  accent: { color: ACCENT, bg: ACCENT_LIGHT },
  amber: { color: '#B45309', bg: '#FEF3C7' },
  emerald: { color: '#047857', bg: '#ECFDF5' },
  rose: { color: '#BE123C', bg: '#FFE4E6' },
  neutral: { color: '#374151', bg: '#F3F4F6' },
  violet: { color: '#6D28D9', bg: '#F5F3FF' },
};

export const Chip = ({ tone, children }: { tone: Tone; children: React.ReactNode }) => {
  const t = TONE[tone];
  return (
    <span
      className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap"
      style={{ backgroundColor: t.bg, color: t.color }}
    >
      {children}
    </span>
  );
};

export const Card = ({
  id,
  children,
  delay = 0,
  dark = false,
  className = '',
}: {
  id?: string;
  children: React.ReactNode;
  delay?: number;
  dark?: boolean;
  className?: string;
}) => (
  <section
    id={id}
    className={`rounded-3xl p-6 md:p-10 reveal ${dark ? '' : 'bg-white'} ${className}`}
    style={
      {
        backgroundColor: dark ? '#1f2937' : undefined,
        '--reveal-delay': `${delay}s`,
        scrollMarginTop: '24px',
      } as React.CSSProperties
    }
  >
    {children}
  </section>
);

export const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div
    className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3"
    style={{ color: ACCENT }}
  >
    {children}
  </div>
);

export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl md:text-3xl font-semibold text-neutral-800 mb-6 leading-tight">
    {children}
  </h2>
);
