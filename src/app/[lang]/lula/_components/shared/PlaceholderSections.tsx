import { LulaZoomImage } from '@/components/LulaZoomImage';
import { ACCENT, Card } from '../../_shared';
import { PLACEHOLDERS } from '../../_data';

export function PlaceholderSections({
  ids,
  delayBase = 0.5,
}: {
  ids: string[];
  delayBase?: number;
}) {
  const items = ids
    .map((id) => PLACEHOLDERS.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      {items.map((p, i) => (
        <Card key={p.id} id={p.id} delay={delayBase + i * 0.03}>
          <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
            <div
              className="text-[11px] font-semibold uppercase tracking-[0.25em]"
              style={{ color: ACCENT }}
            >
              {p.num} · {p.label}
            </div>
            <span
              className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold"
              style={{ backgroundColor: '#FEF3C7', color: '#B45309' }}
            >
              WIP · 待补
            </span>
          </div>
          <h2
            className={`text-2xl md:text-3xl font-semibold mb-5 leading-tight ${
              p.images ? 'text-neutral-900' : 'text-neutral-400'
            }`}
          >
            {p.title}
          </h2>
          {p.images && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">
              {p.images.map((img) => (
                <div
                  key={img.src}
                  className="aspect-square rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200"
                >
                  <LulaZoomImage
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          )}
          <div className="rounded-2xl border border-dashed border-neutral-300 p-5 bg-neutral-50/60">
            <div className="text-[11px] font-semibold text-neutral-500 mb-3 tracking-[0.2em] uppercase">
              框架 · 待填充
            </div>
            <ul className="space-y-2">
              {p.bullets.map((b, idx) => (
                <li
                  key={idx}
                  className="flex gap-2.5 text-sm text-neutral-600 leading-relaxed"
                >
                  <span className="text-neutral-400 shrink-0">·</span>
                  <span>
                    <BulletText text={b} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      ))}
    </>
  );
}

function BulletText({ text }: { text: string }) {
  const marker = '详见 24 成本估算';

  if (!text.includes(marker)) {
    return <>{text}</>;
  }

  const [before, after] = text.split(marker);

  return (
    <>
      {before}
      <a
        href="#cost"
        className="font-semibold text-blue-600 underline underline-offset-2 hover:text-blue-700"
      >
        {marker}
      </a>
      {after}
    </>
  );
}
