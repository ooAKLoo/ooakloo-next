/* eslint-disable react/no-unescaped-entities */
import { Wifi } from 'lucide-react';
import { ACCENT, ACCENT_LIGHT, Card, SectionLabel, SectionTitle } from '../../_shared';
import { NET_ARCHITECTURE, NET_DEAD_ENDS, NET_PHASES } from '../../_data';

export function NetworkSection() {
  return (
    <>
{/* 联网策略 · 居家为主 / 离线兜底 */}
        <Card id="network" delay={0.4}>
          <SectionLabel>12 · 联网策略 · 居家为主 / 离线兜底</SectionLabel>
          <SectionTitle>
            <Wifi className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
            不要为弱网场景过度设计——主场景仍然在家里
          </SectionTitle>

          {/* 核心论点 callout */}
          <div
            className="rounded-2xl p-5 mb-6"
            style={{ backgroundColor: ACCENT_LIGHT }}
          >
            <div
              className="text-[11px] font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: ACCENT }}
            >
              核心论点 · 三句话讲完
            </div>
            <ul className="space-y-2 text-sm leading-relaxed" style={{ color: ACCENT }}>
              <li className="flex gap-2.5">
                <span className="shrink-0 font-bold">①</span>
                <span>
                  <b>主流方案还是居家环境</b>——BubblePal、FoloToy 走 2.4G WiFi；
                  CocoMate 奥特曼礼盒即使开始用免费流量权益降低配网门槛，真实高频场景仍是睡前、做饭时、奶奶带娃。
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="shrink-0 font-bold">②</span>
                <span>
                  <b>下沉市场 WiFi 已经是标配</b>——农村宽带渗透率 70%+、县城 90%+。
                  "家里没 WiFi"已经不是真实场景。
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="shrink-0 font-bold">③</span>
                <span>
                  <b>"全场景联网"反而是负担</b>——一旦玩具能在任何地方联网，
                  就会被带去学校 / 上学路上，引发老师反感、同学打扰、家长投诉，变成负面口碑源头。
                </span>
              </li>
            </ul>
          </div>

          {/* 一个被否决的诱惑路径 · 儿童手表热点 */}
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ color: ACCENT }}
          >
            一个看似可行、实际堵死的诱惑 · 儿童手表热点
          </div>
          <p className="text-sm text-neutral-600 leading-relaxed mb-4">
            "用小天才/华为儿童手表的 SIM 流量当 AI 玩具的网"——推理链对了一半，但漏了几个关键现实:
          </p>
          <div className="grid md:grid-cols-2 gap-3 mb-7">
            {NET_DEAD_ENDS.map((d) => (
              <div
                key={d.num}
                className="rounded-2xl border border-neutral-200 p-5 bg-neutral-50/40"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-[11px] font-bold tracking-wider"
                    style={{ color: '#BE123C' }}
                  >
                    × {d.num}
                  </span>
                  <div className="text-sm font-semibold text-neutral-900 leading-snug">
                    {d.title}
                  </div>
                </div>
                <div className="text-[12px] text-neutral-600 leading-relaxed">
                  {d.desc}
                </div>
              </div>
            ))}
          </div>

          {/* 我们的选择 · 双层架构 */}
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ color: ACCENT }}
          >
            我们的选择 · WiFi + 离线兜底(双层架构)
          </div>
          <div className="rounded-2xl border-2 border-neutral-200 overflow-hidden mb-7">
            {NET_ARCHITECTURE.map((layer, i) => {
              const isCloud = layer.scope === 'cloud';
              return (
                <div
                  key={layer.scope}
                  className={`p-5 ${i === 0 ? 'border-b-2 border-dashed border-neutral-300' : ''}`}
                  style={{
                    backgroundColor: isCloud ? '#F0F9FF' : ACCENT_LIGHT,
                  }}
                >
                  <div className="flex items-baseline gap-3 mb-3">
                    <div
                      className="text-base font-bold"
                      style={{ color: isCloud ? '#075985' : ACCENT }}
                    >
                      {layer.label}
                    </div>
                    <div
                      className="text-[11px] font-medium"
                      style={{ color: isCloud ? '#0369A1' : ACCENT, opacity: 0.7 }}
                    >
                      — {layer.hint}
                    </div>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
                    {layer.features.map((f) => (
                      <li
                        key={f}
                        className="flex gap-2 text-sm leading-relaxed"
                        style={{ color: isCloud ? '#075985' : ACCENT }}
                      >
                        <span className="opacity-60">·</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* 阶段化路线 */}
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ color: ACCENT }}
          >
            阶段化路线 · MVP / V2 / 永远不做
          </div>
          <div className="grid md:grid-cols-3 gap-3 mb-7">
            {NET_PHASES.map((p) => {
              const isMvp = p.tone === 'mvp';
              const isNever = p.tone === 'never';
              return (
                <div
                  key={p.stage}
                  className={`rounded-2xl p-5 ${
                    isMvp ? 'border-2' : 'border border-neutral-200 bg-white'
                  } ${isNever ? 'opacity-70' : ''}`}
                  style={
                    isMvp
                      ? { backgroundColor: ACCENT_LIGHT, borderColor: ACCENT }
                      : undefined
                  }
                >
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className="text-[11px] font-bold tracking-wider"
                      style={{ color: isMvp ? ACCENT : isNever ? '#BE123C' : '#525252' }}
                    >
                      {p.stage}
                    </div>
                    {isMvp && (
                      <span
                        className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold text-white"
                        style={{ backgroundColor: ACCENT }}
                      >
                        我们做这个
                      </span>
                    )}
                    {isNever && (
                      <span
                        className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold"
                        style={{ backgroundColor: '#FFE4E6', color: '#BE123C' }}
                      >
                        ✕ 不做
                      </span>
                    )}
                  </div>
                  <div
                    className="text-base font-semibold mb-1.5 leading-snug"
                    style={{ color: isMvp ? ACCENT : '#171717' }}
                  >
                    {p.network}
                  </div>
                  <div className="text-[12px] mb-2 text-neutral-500">{p.price}</div>
                  <div
                    className="text-[12px] leading-relaxed"
                    style={{ color: isMvp ? ACCENT : '#525252' }}
                  >
                    {p.pitch}
                  </div>
                </div>
              );
            })}
          </div>

          {/* PRD 硬指标 · 收尾 */}
          <div
            className="rounded-2xl p-5"
            style={{ backgroundColor: '#1F2937' }}
          >
            <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-blue-300 mb-2">
              PRD 硬指标 · 写进 MVP 必达项
            </div>
            <div className="text-base md:text-lg font-semibold text-white mb-2 leading-snug">
              离线可用率 ≥ 70%
            </div>
            <div className="text-sm text-neutral-300 leading-relaxed">
              这一条比任何花哨的功能都重要——它是产品能不能在县城用户家里活下来的命门。
              "断网时玩具仍能讲故事 / 唱儿歌 / 刷卡触发"是产品交付的硬约束，不是 nice-to-have。
            </div>
          </div>
        </Card>
    </>
  );
}
