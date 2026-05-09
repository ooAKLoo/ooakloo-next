/* eslint-disable react/no-unescaped-entities */
import { ShieldCheck } from 'lucide-react';
import { ACCENT, ACCENT_LIGHT, Card, SectionLabel, SectionTitle } from '../../_shared';
import { LOW_PATHS, THREE_REASONS } from '../../_data';

export function MoatSection() {
  return (
    <>
{/* 避战 · 做大厂"不屑"的事 */}
        <Card id="moat" delay={0.38}>
          <SectionLabel>11 · 避战 · 做大厂"不屑"的事</SectionLabel>
          <SectionTitle>
            <ShieldCheck className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
            把"做 low"当成壁垒——大厂的弱点就是我们的护城河
          </SectionTitle>
          <p className="text-sm text-neutral-600 leading-relaxed mb-6">
            大厂(字节、京东、华为、奥飞)<b className="text-neutral-800">"不能"做某些事</b>，
            本质只有三个原因：数据看不见 / 品牌不能贴 / 渠道下不去。我们要在这三件事上
            <b className="text-neutral-800">反向用力</b>——目标小、品牌土、渠道脏。
          </p>

          {/* 大厂三不 */}
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ color: ACCENT }}
          >
            大厂三不 · 为什么大厂做不了下沉
          </div>
          <div className="grid md:grid-cols-3 gap-3 mb-8">
            {THREE_REASONS.map((r, i) => (
              <div
                key={r.title}
                className="rounded-2xl border border-neutral-200 p-5 bg-white"
              >
                <div
                  className="text-[11px] font-bold tracking-wider mb-1.5 text-neutral-400"
                >
                  原因 {String(i + 1).padStart(2, '0')}
                </div>
                <div className="text-base font-semibold text-neutral-900 mb-2">
                  {r.title}
                </div>
                <div className="text-[12px] text-neutral-600 leading-relaxed">
                  {r.desc}
                </div>
              </div>
            ))}
          </div>

          {/* 5 条具体路径 */}
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ color: ACCENT }}
          >
            5 条具体打法 · 已按"儿童启蒙"过滤
          </div>
          <div className="space-y-3 mb-7">
            {LOW_PATHS.map((p) => (
              <div
                key={p.num}
                className="rounded-2xl border border-neutral-200 p-5 bg-white"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm tabular-nums"
                    style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                  >
                    {p.num}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-neutral-900 mb-1.5 leading-snug">
                      {p.title}
                    </div>
                    <div className="text-sm text-neutral-700 leading-relaxed mb-3">
                      {p.desc}
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.examples.map((ex) => (
                        <span
                          key={ex}
                          className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium bg-neutral-100 text-neutral-700"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                    <div
                      className="text-[12px] leading-relaxed border-l-2 pl-3"
                      style={{ borderColor: '#E5E7EB', color: '#525252' }}
                    >
                      <b className="text-neutral-700">大厂为什么做不了：</b>
                      {p.whyMoat}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ★ 真正的护城河 · 重人工本地化运营 */}
          <div
            className="rounded-2xl p-6 mb-7"
            style={{ backgroundColor: '#1F2937' }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-yellow-300 text-base">★</span>
              <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-yellow-300">
                真正的护城河 · 重人工本地化运营
              </div>
            </div>
            <div className="text-base md:text-lg font-semibold text-white mb-3 leading-snug">
              县级代理大姐 + 本地微信群 + 节日线下聚会
            </div>
            <div className="text-sm text-neutral-300 leading-relaxed mb-4">
              大厂的运营是 SaaS 化、自动化、KPI 标准化的；下沉市场的运营是反过来的——
              <b className="text-white">重人工、本地化、不可标准化</b>。这种模式独立创业者扛得住，大厂扛不住。
              这是上面 5 条里最重的一条，也是真正能形成长期壁垒的一条。
            </div>
            <ul className="space-y-2 text-sm text-neutral-200">
              {[
                '每个县找一个"代理大姐"，建本地家长微信群',
                '用户买了不会用——大姐上门或视频教学',
                '老人家里 WiFi 出问题——大姐远程帮忙处理',
                '节日组织本地用户线下亲子聚会、方言儿歌赛',
              ].map((line) => (
                <li key={line} className="flex gap-2.5 leading-relaxed">
                  <span className="text-yellow-300 shrink-0">·</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t border-white/10 text-[12px] text-neutral-400 leading-relaxed">
              <b className="text-neutral-200">大厂做不了：</b>
              京东县级代理体系是为 3C 家电铺的；铺一张"会上门哄孩子哄老人的大姐网络"，
              对 KAM 一年要管 1 亿盘子的人力结构来说，账算不过来。
            </div>
          </div>

        </Card>
    </>
  );
}
