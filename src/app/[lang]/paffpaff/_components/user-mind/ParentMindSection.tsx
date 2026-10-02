import { Users } from 'lucide-react';
import { ACCENT, Card, SectionLabel, SectionTitle, TONE } from '../../_shared';
import { PARENT_DRIVERS, TWO_USER_ROWS } from '../../_data';

export function ParentMindSection() {
  return (
    <>
{/* 用户心智 · 家长侧 */}
        <Card id="parent-mind" delay={0.22}>
          <SectionLabel>06 · 用户心智 · 决策者(家长)</SectionLabel>
          <SectionTitle>
            <Users className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
            一个产品两套心智，家长脑子里有 6 个驱动力
          </SectionTitle>

          {/* 双用户对照 */}
          <div className="rounded-2xl border border-neutral-200 overflow-hidden mb-6">
            <div className="grid grid-cols-3 bg-neutral-100 text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
              <div className="px-4 py-2.5">维度</div>
              <div className="px-4 py-2.5">决策者(掏钱的)</div>
              <div className="px-4 py-2.5">使用者(玩的)</div>
            </div>
            {TWO_USER_ROWS.map((row, i) => (
              <div
                key={row.dim}
                className={`grid grid-cols-3 text-sm ${i % 2 ? 'bg-neutral-50/60' : 'bg-white'}`}
              >
                <div className="px-4 py-3 font-medium text-neutral-700">{row.dim}</div>
                <div className="px-4 py-3 text-neutral-700 leading-relaxed">{row.parent}</div>
                <div className="px-4 py-3 text-neutral-700 leading-relaxed">{row.child}</div>
              </div>
            ))}
          </div>

          <p className="text-sm text-neutral-600 leading-relaxed mb-5">
            京东数据：36–45 岁人群贡献 51% 成交额，88.3% 的 AI 玩具是送给孩子的，3–6 岁占 41.3%。
            把这个主力人群从一二线挪到县城——下沉市场的画像是 30–40 岁妈妈、孩子 3–8 岁、刷抖音、用拼多多。
          </p>

          {/* 6 驱动力 */}
          <div className="grid md:grid-cols-2 gap-3">
            {PARENT_DRIVERS.map((d) => {
              const Icon = d.icon;
              const t = TONE[d.tone];
              return (
                <div
                  key={d.title}
                  className="rounded-2xl border border-neutral-200 p-5 bg-white"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: t.bg, color: t.color }}
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-neutral-900 leading-snug">
                        {d.title}
                      </div>
                      <div className="text-[12px] text-neutral-500 mt-0.5 italic">
                        {d.oneLiner}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-neutral-700 leading-relaxed mb-2">
                    {d.insight}
                  </div>
                  <div className="text-[12px] text-neutral-500 leading-relaxed border-l-2 border-neutral-200 pl-3">
                    {d.evidence}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
    </>
  );
}
