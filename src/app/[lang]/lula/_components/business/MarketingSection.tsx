/* eslint-disable react/no-unescaped-entities */
import { AlertTriangle, Smartphone } from 'lucide-react';
import { ACCENT, ACCENT_LIGHT, Card, SectionLabel, SectionTitle } from '../../_shared';
import { CORE_MESSAGE, MARKETING_SCENES } from '../../_data';

export function MarketingSection() {
  return (
    <>
{/* 营销话术 · 文案模板(真内容,非占位) */}
        <Card id="marketing" delay={0.56}>
          <SectionLabel>27 · 营销话术 / 文案模板</SectionLabel>
          <SectionTitle>
            <Smartphone className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
            产品做什么 = 营销说什么——内里是同一件事
          </SectionTitle>
          <p className="text-sm text-neutral-600 leading-relaxed mb-6">
            把家长心智(06)+ 三大画像(08)翻译成下沉家长能听懂的话。下面五个场景的模板都可以直接拿去改，
            产品名先用<b className="text-neutral-900">"小布"</b>占位。
          </p>

          {/* 核心信息架构 */}
          <div
            className="rounded-2xl p-5 mb-7"
            style={{ backgroundColor: ACCENT_LIGHT }}
          >
            <div
              className="text-[11px] font-bold uppercase tracking-[0.25em] mb-3"
              style={{ color: ACCENT }}
            >
              核心信息架构 · 所有内容的根
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-[11px] font-semibold mb-1" style={{ color: ACCENT, opacity: 0.7 }}>
                  一句话定位
                </div>
                <div className="text-base font-bold leading-snug" style={{ color: ACCENT }}>
                  {CORE_MESSAGE.oneLine}
                </div>
              </div>
              <div>
                <div className="text-[11px] font-semibold mb-1.5" style={{ color: ACCENT, opacity: 0.7 }}>
                  三大主卖点
                </div>
                <ul className="space-y-1">
                  {CORE_MESSAGE.pillars.map((p, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm leading-relaxed"
                      style={{ color: ACCENT }}
                    >
                      <span className="font-bold shrink-0">{`①②③`[i]}</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-[11px] font-semibold mb-1" style={{ color: ACCENT, opacity: 0.7 }}>
                  情感钩子
                </div>
                <div className="text-sm leading-relaxed italic" style={{ color: ACCENT }}>
                  {CORE_MESSAGE.hook}
                </div>
              </div>
              <div>
                <div className="text-[11px] font-semibold mb-1" style={{ color: ACCENT, opacity: 0.7 }}>
                  信任背书
                </div>
                <div className="text-sm leading-relaxed" style={{ color: ACCENT }}>
                  {CORE_MESSAGE.trust}
                </div>
              </div>
            </div>
          </div>

          {/* 禁用词 */}
          <div
            className="rounded-2xl p-4 mb-7 flex items-start gap-3"
            style={{ backgroundColor: '#FEF2F2' }}
          >
            <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#BE123C' }} />
            <div className="flex-1">
              <div
                className="text-[11px] font-bold uppercase tracking-[0.2em] mb-2"
                style={{ color: '#BE123C' }}
              >
                禁用词 · 全部不要出现
              </div>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {CORE_MESSAGE.banned.map((w) => (
                  <span
                    key={w}
                    className="inline-flex items-center rounded px-2 py-0.5 text-[12px] font-medium line-through"
                    style={{ backgroundColor: 'white', color: '#7F1D1D' }}
                  >
                    {w}
                  </span>
                ))}
              </div>
              <div className="text-[12px] leading-relaxed" style={{ color: '#7F1D1D' }}>
                下沉用户听不懂这些词，反而觉得不靠谱——一律换成"会说话""能聊天""学得快"的人话。
              </div>
            </div>
          </div>

          {/* 5 个场景模板 */}
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ color: ACCENT }}
          >
            5 个场景模板 · 直接抄改即可
          </div>
          <div className="space-y-3">
            {MARKETING_SCENES.map((s) => (
              <div
                key={s.num}
                className="rounded-2xl border border-neutral-200 p-5 bg-white"
              >
                <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold tabular-nums shrink-0"
                    style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                  >
                    {s.num}
                  </div>
                  <div className="font-semibold text-neutral-900 leading-snug">
                    {s.channel}
                  </div>
                </div>
                <div className="text-[12px] text-neutral-500 leading-relaxed mb-4 ml-11">
                  {s.desc}
                </div>
                <div className="space-y-2 ml-11">
                  {s.templates.map((t, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl p-3 bg-neutral-50/60 border border-neutral-100"
                    >
                      <div className="text-[11px] font-semibold mb-1" style={{ color: ACCENT }}>
                        {t.label}
                      </div>
                      <div className="text-[13px] text-neutral-700 leading-relaxed">
                        {t.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
    </>
  );
}
