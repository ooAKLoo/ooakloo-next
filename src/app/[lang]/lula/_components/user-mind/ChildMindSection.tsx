/* eslint-disable react/no-unescaped-entities */
import { Calendar, Sparkles, ThumbsDown } from 'lucide-react';
import { ACCENT, Card, SectionLabel, SectionTitle, TONE } from '../../_shared';
import { ABANDON_REASONS, USAGE_PHASES } from '../../_data';

export function ChildMindSection() {
  return (
    <>
{/* 用户心智 · 孩子侧 */}
        <Card id="child-mind" delay={0.25}>
          <SectionLabel>07 · 用户心智 · 使用者(孩子)</SectionLabel>
          <SectionTitle>
            <Calendar className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
            21 天使用曲线：30–40% 在第三周就被抛弃
          </SectionTitle>

          {/* 4 阶段 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {USAGE_PHASES.map((p, i) => {
              const t = TONE[p.tone];
              return (
                <div
                  key={p.range}
                  className="rounded-2xl p-4 border border-neutral-200 bg-white relative overflow-hidden"
                >
                  <div
                    className="text-[11px] font-bold tracking-wider mb-1"
                    style={{ color: t.color }}
                  >
                    阶段 {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="text-base font-semibold text-neutral-900 mb-1">
                    {p.label}
                  </div>
                  <div className="text-[12px] font-medium text-neutral-500 mb-2">
                    {p.range}
                  </div>
                  <div className="text-sm text-neutral-700 leading-relaxed">{p.desc}</div>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ backgroundColor: t.color }}
                  />
                </div>
              );
            })}
          </div>

          {/* TOP5 抛弃原因 */}
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50/60 p-5 mb-5">
            <div className="flex items-center gap-2 mb-4">
              <ThumbsDown className="w-4 h-4" style={{ color: '#BE123C' }} />
              <div className="font-semibold text-neutral-900">家长吐槽 TOP5(抛弃直接原因)</div>
            </div>
            <div className="space-y-2.5">
              {ABANDON_REASONS.map((r) => (
                <div key={r.reason} className="flex items-center gap-3 text-sm">
                  <div className="w-14 text-right font-bold" style={{ color: '#BE123C' }}>
                    {r.pct}
                  </div>
                  <div className="flex-1 h-1.5 rounded-full bg-neutral-200 overflow-hidden max-w-[160px]">
                    <div
                      className="h-full rounded-full"
                      style={{ width: r.pct, backgroundColor: '#FB7185' }}
                    />
                  </div>
                  <div className="flex-[2] text-neutral-700 leading-snug">{r.reason}</div>
                </div>
              ))}
            </div>
          </div>

          {/* FoloToy 留存秘诀 */}
          <div
            className="rounded-2xl p-5 text-sm leading-relaxed"
            style={{ backgroundColor: '#ECFDF5', color: '#065F46' }}
          >
            <div className="font-semibold mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              FoloToy 把次月留存做到大几十的三个秘诀(行业稀缺好数据)
            </div>
            <div className="space-y-1.5">
              <div>① 团队管理层每人家里都有小朋友——做玩具设计时真懂受众。</div>
              <div>② 玩具会主动说"来陪陪我""和我聊天"——双向召唤是反喜新厌旧的关键。</div>
              <div>③ 聊天记录不向家长开放——避免孩子产生"被监控"的隔阂。</div>
            </div>
            <div className="mt-3 pt-3 border-t border-emerald-200/60 text-[12px]">
              单次对话 17–20 分钟、次月留存大几十、复购 20%+；定位上"陪伴 ∶ 教育 = 7 ∶ 3"——
              这一条和 BubblePal 的"成长报告"是反着的，我们要选边。
            </div>
          </div>
        </Card>
    </>
  );
}
