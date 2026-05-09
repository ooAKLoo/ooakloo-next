import { Layers } from 'lucide-react';
import { ACCENT, ACCENT_LIGHT, Card, Chip, SectionLabel, SectionTitle } from '../../_shared';
import { STACK } from '../../_data';

export function StackSection() {
  return (
    <>
{/* 战略：叠加 */}
        <Card id="stack" delay={0.35}>
          <SectionLabel>10 · 叠加</SectionLabel>
          <SectionTitle>
            <Layers className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
            把市面上最好的全抄一遍，6 件事
          </SectionTitle>
          <div className="grid md:grid-cols-2 gap-3">
            {STACK.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.layer}
                  className="rounded-2xl border border-neutral-200 p-5 flex items-start gap-4"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                        {String(i + 1).padStart(2, '0')} · {s.layer}
                      </div>
                      <Chip tone="emerald">抄 {s.src}</Chip>
                    </div>
                    <div className="text-sm text-neutral-800 leading-relaxed">{s.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
    </>
  );
}
