import { AlertTriangle, Sparkles } from 'lucide-react';
import { ACCENT, ACCENT_LIGHT, Card, SectionLabel, SectionTitle, TONE } from '../../_shared';
import { LEADLEO_AI_TOY_REPORT_URL, MAGIC_MIRROR_AI_TOY_REPORT_URL, MARKET_SEGMENTS, MARKET_STATS, MIIT_TOY_SAFETY_NEWS_URL, OPPORTUNITIES, PRICE_BANDS, RISKS } from '../../_data';

export function MarketSection() {
  return (
    <>
{/* 大盘 */}
        <Card id="market" delay={0.05}>
          <SectionLabel>02 · 大盘数据</SectionLabel>
          <SectionTitle>
            246 亿 → 290 亿，真正要看的是
            <span style={{ color: ACCENT }}>线上增速、价格迁移和品类结构</span>
          </SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {MARKET_STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-neutral-200 bg-white p-4 hover:border-neutral-300 transition-colors"
              >
                <div className="flex items-baseline gap-1 mb-1">
                  <div className="text-2xl md:text-3xl font-semibold text-neutral-900">
                    {s.value}
                  </div>
                  {s.unit && (
                    <div className="text-xs font-medium text-neutral-500">{s.unit}</div>
                  )}
                </div>
                <div className="text-[12px] font-medium text-neutral-700 leading-snug mb-1">
                  {s.label}
                </div>
                {s.note && s.sourceUrl && (
                  <a
                    href={s.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-neutral-500 leading-snug hover:underline"
                  >
                    {s.note}
                  </a>
                )}
                {s.note && !s.sourceUrl && (
                  <div className="text-[11px] text-neutral-500 leading-snug">
                    {s.note}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 细分数据 */}
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.25em] mt-8 mb-3"
            style={{ color: ACCENT }}
          >
            细分口径 · 哪些数据更能帮助判断
          </div>
          <div className="grid md:grid-cols-2 gap-3 mb-8">
            {MARKET_SEGMENTS.map((s) => {
              const t = TONE[s.tone];
              return (
                <div
                  key={s.dimension}
                  className="rounded-2xl border border-neutral-200 p-5 bg-white"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="text-[11px] font-bold tracking-wider text-neutral-400 mb-1">
                        {s.dimension}
                      </div>
                      <div className="font-semibold text-neutral-900 leading-snug">
                        {s.metric}
                      </div>
                    </div>
                    <a
                      href={s.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap"
                      style={{ backgroundColor: t.bg, color: t.color }}
                    >
                      {s.source}
                    </a>
                  </div>
                  <div className="text-[12px] text-neutral-600 leading-relaxed">
                    {s.note}
                  </div>
                </div>
              );
            })}
          </div>
          {/* 价格地形图 */}
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.25em] mt-8 mb-3"
            style={{ color: ACCENT }}
          >
            价格段地形图 · 谁在哪个段位
          </div>
          <div className="grid md:grid-cols-3 gap-3 mb-8">
            {PRICE_BANDS.map((b) => {
              const isGap = b.status === '真空段';
              return (
                <div
                  key={b.range}
                  className={`rounded-2xl p-5 ${
                    isGap ? 'border-2' : 'border border-neutral-200 bg-white'
                  }`}
                  style={
                    isGap
                      ? { backgroundColor: ACCENT_LIGHT, borderColor: ACCENT }
                      : undefined
                  }
                >
                  <div
                    className="flex items-center justify-between mb-2"
                  >
                    <div
                      className="text-base font-bold"
                      style={{ color: isGap ? ACCENT : '#171717' }}
                    >
                      {b.range}
                    </div>
                    <span
                      className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold"
                      style={
                        isGap
                          ? { backgroundColor: ACCENT, color: '#fff' }
                          : { backgroundColor: '#F3F4F6', color: '#525252' }
                      }
                    >
                      {b.status}
                    </span>
                  </div>
                  <div
                    className="text-sm font-semibold mb-1.5 leading-snug"
                    style={{ color: isGap ? ACCENT : '#171717' }}
                  >
                    {b.who}
                  </div>
                  <div
                    className="text-[12px] leading-relaxed"
                    style={{ color: isGap ? ACCENT : '#525252' }}
                  >
                    {b.note}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 机遇 vs 风险 */}
          <div className="grid md:grid-cols-2 gap-3 mb-6">
            <div
              className="rounded-2xl p-5"
              style={{ backgroundColor: '#ECFDF5' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4" style={{ color: '#047857' }} />
                <div
                  className="text-[11px] font-bold uppercase tracking-[0.25em]"
                  style={{ color: '#047857' }}
                >
                  6 个机遇
                </div>
              </div>
              <div className="space-y-3.5">
                {OPPORTUNITIES.map((o, i) => (
                  <div key={o.title}>
                    <div
                      className="text-sm font-semibold mb-1 leading-snug"
                      style={{ color: '#065F46' }}
                    >
                      <span className="opacity-50 mr-1.5 tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {o.title}
                    </div>
                    <div
                      className="text-[12px] leading-relaxed"
                      style={{ color: '#065F46', opacity: 0.85 }}
                    >
                      {o.why}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl p-5"
              style={{ backgroundColor: '#FEF2F2' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-4 h-4" style={{ color: '#BE123C' }} />
                <div
                  className="text-[11px] font-bold uppercase tracking-[0.25em]"
                  style={{ color: '#BE123C' }}
                >
                  6 个风险
                </div>
              </div>
              <div className="space-y-3.5">
                {RISKS.map((r, i) => (
                  <div key={r.title}>
                    <div
                      className="text-sm font-semibold mb-1 leading-snug"
                      style={{ color: '#7F1D1D' }}
                    >
                      <span className="opacity-50 mr-1.5 tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {r.title}
                    </div>
                    <div
                      className="text-[12px] leading-relaxed"
                      style={{ color: '#7F1D1D', opacity: 0.85 }}
                    >
                      {r.why}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 一句话判断 */}
          <div
            className="rounded-2xl p-5 md:p-6"
            style={{ backgroundColor: '#1F2937' }}
          >
            <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-blue-300 mb-2">
              一句话判断
            </div>
            <div className="text-sm md:text-base text-neutral-100 leading-relaxed">
              这是<b className="text-blue-300">窗口期机会</b>，不是
              <b className="text-rose-300">长期赛道</b>——
              12–18 个月内用<b className="text-blue-300">「¥149 入门 + 老 IP + 方言 + 硬件买断 + 含 1 年云服务」</b>
              组合拳，在某个区域(华南 / 华东三四线)打出家长口碑。
              否则就是给传统玩具厂当试错炮灰。
            </div>
          </div>
          <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
            数据来源：
            <a
              href={MIIT_TOY_SAFETY_NEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:underline"
            >
              工信部《玩具安全》系列强制性国家标准修订发布会
            </a>
            、
            <a
              href={MAGIC_MIRROR_AI_TOY_REPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:underline"
            >
              魔镜洞察《2025 年 AI 玩具市场机会洞察》
            </a>
            、
            <a
              href={LEADLEO_AI_TOY_REPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:underline"
            >
              头豹研究院《2025 年中国 AI 玩具行业概览》
            </a>
            。主市场规模采用工信部发布会公开口径，细分渠道、品类、价格和长期空间采用机构报告口径。
          </p>
        </Card>
    </>
  );
}
