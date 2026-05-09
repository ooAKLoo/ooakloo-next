/* eslint-disable react/no-unescaped-entities */
import { AlertTriangle, Users } from 'lucide-react';
import { ACCENT, Card, SectionLabel, SectionTitle, TONE } from '../../_shared';
import { ANXIETY_WINDOWS, ANTI_PERSONAS, PERSONAS, USE_SCENES, USER_CIRCLES } from '../../_data';

export function PersonasSection() {
  return (
    <>
{/* 用户画像 · 三类家庭 + 焦虑爆发期窗口 */}
        <Card id="personas" delay={0.28}>
          <SectionLabel>08 · 用户画像 · 三类家庭 + 焦虑爆发期</SectionLabel>
          <SectionTitle>
            <Users className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
            不是"产后激素妈妈"，是"焦虑爆发期妈妈"
          </SectionTitle>

          {/* 概念辨析 · 焦虑爆发期 vs 产后激素 */}
          <div
            className="rounded-2xl p-5 mb-7"
            style={{ backgroundColor: '#FEF2F2', color: '#7F1D1D' }}
          >
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4" />
              <div className="text-[11px] font-bold uppercase tracking-[0.25em]">
                概念辨析 · 别把这两类妈妈搞混了
              </div>
            </div>
            <div className="text-sm leading-relaxed mb-3">
              "产后激素期妈妈"(0–2 岁)<b>不是我们的目标用户</b>——宝宝不会说话、玩具核心交互对他们没意义；
              她们的消费焦点是奶粉/纸尿裤这类"生存必需品"，AI 玩具不在清单里。
              <b>真正的高转化窗口是"焦虑爆发期妈妈"</b>——当孩子站在两个心理拐点上，妈妈的消费决策最冲动、最愿意为情感和教育付费。
            </div>
            <div className="grid md:grid-cols-2 gap-3 mt-4">
              {ANXIETY_WINDOWS.map((w) => (
                <div
                  key={w.label}
                  className="rounded-xl p-4 bg-white/60"
                >
                  <div className="flex items-baseline gap-2 mb-1.5">
                    <span className="text-[11px] font-bold tracking-wider opacity-80">
                      {w.label}
                    </span>
                    <span className="text-base font-bold">{w.age}</span>
                  </div>
                  <div className="text-[12px] leading-relaxed">{w.trigger}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 三层人群圈层 */}
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ color: ACCENT }}
          >
            目标盘子 · 三层嵌套人群(总盘 ~1 亿家庭)
          </div>
          <div className="grid md:grid-cols-3 gap-3 mb-7">
            {USER_CIRCLES.map((c) => {
              const t = TONE[c.tone];
              return (
                <div
                  key={c.letter}
                  className="rounded-2xl border border-neutral-200 p-5 bg-white relative overflow-hidden"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ backgroundColor: t.color }}
                  />
                  <div className="flex items-baseline gap-2 mb-2">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ backgroundColor: t.bg, color: t.color }}
                    >
                      {c.letter}
                    </div>
                    <div className="font-semibold text-neutral-900">{c.label}</div>
                  </div>
                  <div className="text-base font-bold mb-2" style={{ color: t.color }}>
                    {c.scale}
                  </div>
                  <div className="text-[12px] text-neutral-600 leading-relaxed mb-3">
                    {c.desc}
                  </div>
                  <div className="text-[12px] font-medium leading-relaxed mb-2" style={{ color: t.color }}>
                    {c.strategy}
                  </div>
                  <span
                    className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold"
                    style={{ backgroundColor: t.bg, color: t.color }}
                  >
                    {c.budget}
                  </span>
                </div>
              );
            })}
          </div>

          {/* 三大画像深度卡 */}
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ color: ACCENT }}
          >
            三大核心画像 · 用产品语言落地
          </div>
          <div className="space-y-3 mb-7">
            {PERSONAS.map((p) => {
              const t = TONE[p.tone];
              return (
                <div
                  key={p.name}
                  className="rounded-2xl border-2 p-5"
                  style={{ borderColor: t.color, backgroundColor: t.bg }}
                >
                  <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                    <div>
                      <div className="text-xl font-bold mb-1" style={{ color: t.color }}>
                        {p.name}
                      </div>
                      <div className="text-sm font-medium text-neutral-700">{p.role}</div>
                    </div>
                    <span
                      className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold text-white"
                      style={{ backgroundColor: t.color }}
                    >
                      {p.weight}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-x-6 gap-y-2 text-[12px] mb-3" style={{ color: t.color }}>
                    {[
                      ['年龄/学历', p.age],
                      ['坐标', p.city],
                      ['孩子', p.child],
                      ['收入', p.income],
                      ['常用 App', p.apps],
                    ].map(([k, v]) => (
                      <div key={k} className="flex gap-2">
                        <span className="opacity-60 shrink-0 w-16">{k}</span>
                        <span className="flex-1 leading-relaxed font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                  <div
                    className="text-sm leading-relaxed mb-2 italic pl-3 border-l-2"
                    style={{ color: t.color, borderColor: t.color }}
                  >
                    {p.quote}
                  </div>
                  <div className="text-[12px] mb-2" style={{ color: t.color }}>
                    <b>痛点：</b>
                    {p.pain}
                  </div>
                  <div className="text-[12px] mb-3" style={{ color: t.color }}>
                    <b>决策路径：</b>
                    {p.decision}
                  </div>
                  <div
                    className="text-[12px] font-semibold leading-relaxed pt-3 border-t"
                    style={{ color: t.color, borderColor: t.color, opacity: 0.95 }}
                  >
                    → {p.oneLiner}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 6 大核心使用场景 */}
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ color: ACCENT }}
          >
            从画像抽取的 6 大核心使用场景
          </div>
          <div className="overflow-x-auto -mx-6 md:-mx-10 px-6 md:px-10 mb-7">
            <table className="w-full text-sm border-separate border-spacing-y-1.5 min-w-[800px]">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-wider text-neutral-500">
                  <th className="font-semibold pb-2 pr-3 w-12">#</th>
                  <th className="font-semibold pb-2 pr-3 w-44">场景</th>
                  <th className="font-semibold pb-2 pr-3 w-32">时间</th>
                  <th className="font-semibold pb-2 pr-3 w-44">适配画像</th>
                  <th className="font-semibold pb-2">说明</th>
                </tr>
              </thead>
              <tbody>
                {USE_SCENES.map((s) => (
                  <tr key={s.num} className="bg-neutral-50/60 align-top">
                    <td className="rounded-l-xl py-3 pl-3 pr-3 font-bold tabular-nums" style={{ color: ACCENT }}>
                      {s.num}
                    </td>
                    <td className="py-3 pr-3 font-semibold text-neutral-900">{s.name}</td>
                    <td className="py-3 pr-3 text-neutral-700">{s.time}</td>
                    <td className="py-3 pr-3 text-neutral-700">{s.who}</td>
                    <td className="rounded-r-xl py-3 pr-3 text-neutral-700 leading-relaxed">
                      {s.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 反画像 */}
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ color: '#BE123C' }}
          >
            反画像 · 谁不是我们的用户(资源不投)
          </div>
          <div className="grid md:grid-cols-2 gap-3 mb-7">
            {ANTI_PERSONAS.map((a) => (
              <div
                key={a.who}
                className="rounded-2xl border border-neutral-200 p-4"
                style={{ backgroundColor: '#FEF2F2' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[14px] font-bold" style={{ color: '#BE123C' }}>
                    ✕
                  </span>
                  <div className="text-sm font-semibold" style={{ color: '#7F1D1D' }}>
                    {a.who}
                  </div>
                </div>
                <div className="text-[12px] leading-relaxed mb-2" style={{ color: '#7F1D1D' }}>
                  {a.why}
                </div>
                <div className="text-[11px]" style={{ color: '#7F1D1D', opacity: 0.7 }}>
                  → 他们应该买：{a.shouldBuy}
                </div>
              </div>
            ))}
          </div>

          {/* 资源分配条 */}
          <div
            className="rounded-2xl p-5"
            style={{ backgroundColor: '#1F2937' }}
          >
            <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-blue-300 mb-3">
              ★ 资源分配 · 60 / 30 / 10 / 0
            </div>
            <div className="flex h-10 rounded-lg overflow-hidden mb-4">
              <div className="bg-blue-500 flex items-center justify-center text-white text-xs font-bold" style={{ width: '60%' }}>
                王芳 · 主战场 60%
              </div>
              <div className="bg-violet-500 flex items-center justify-center text-white text-xs font-bold" style={{ width: '30%' }}>
                留守 30%
              </div>
              <div className="bg-amber-500 flex items-center justify-center text-white text-xs font-bold" style={{ width: '10%' }}>
                陈晓 10%
              </div>
            </div>
            <div className="text-sm text-neutral-300 leading-relaxed">
              不要被"市场看起来很大"诱惑去做四不像产品——<b className="text-white">反画像投 0</b>。
              MVP 必须把 60% 投到主战场画像(王芳)，30% 投到情感杀器(留守家庭)，剩 10% 给 V2 扩张目标(陈晓)预留接口。
            </div>
          </div>
        </Card>
    </>
  );
}
