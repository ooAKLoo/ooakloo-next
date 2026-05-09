/* eslint-disable react/no-unescaped-entities */
import { AlertTriangle, Sparkles, Target } from 'lucide-react';
import { ACCENT, ACCENT_LIGHT, Card, SectionLabel, SectionTitle } from '../../_shared';
import { SOFT_METHODS } from '../../_data';

export function MethodologySection() {
  return (
    <>
{/* 软件端 · 共性方法论 */}
        <Card id="methodology" delay={0.18}>
          <SectionLabel>05 · 共性方法论</SectionLabel>
          <SectionTitle>
            <Target className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
            把 12 款产品横切，6 条共性 + 1 个新方向 + 3 个坑
          </SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {SOFT_METHODS.map((m, i) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.title}
                  className="rounded-2xl border border-neutral-200 p-5 bg-white"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div className="text-[11px] font-bold tracking-wider text-neutral-400">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="font-semibold text-neutral-900 mb-1.5">{m.title}</div>
                  <div className="text-sm text-neutral-700 leading-relaxed mb-2">
                    {m.desc}
                  </div>
                  <div className="text-[12px] text-neutral-500">代表：{m.source}</div>
                </div>
              );
            })}
          </div>

          {/* 趋势 + 坑 双 callout */}
          <div className="grid md:grid-cols-2 gap-3">
            <div
              className="rounded-2xl p-5 text-sm leading-relaxed"
              style={{ backgroundColor: '#ECFDF5', color: '#065F46' }}
            >
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> 2026 年值得抄的演化方向
              </div>
              <div className="space-y-1.5">
                <div>① 从"用 AI 教孩子" → "教孩子用 AI"(叫叫《AI 启蒙》/ Khanmigo)</div>
                <div>② 从"内容订阅" → "陪伴关系"(BubblePal、芙崽、汤姆猫)</div>
                <div>③ 从纯软件 → 软硬结合(Osmo、奇碰、火火兔)</div>
                <div>④ 端侧轻量化大模型——离线也能多轮对话和个性化生成</div>
              </div>
            </div>
            <div
              className="rounded-2xl p-5 text-sm leading-relaxed"
              style={{ backgroundColor: '#FEF2F2', color: '#7F1D1D' }}
            >
              <div className="font-semibold mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" /> 容易踩进去的坑
              </div>
              <div className="space-y-1.5">
                <div>① 同质化严重——课程供给侧没真壁垒，最后只能拼价格 + 营销</div>
                <div>② 师资流水线化——上课流程 / 语气 / 重点三点考核，几乎无创新</div>
                <div>③ 2026 家长从"功能堆砌"转向"教育有效性 + 健康使用边界"，只堆功能会被淘汰</div>
              </div>
            </div>
          </div>
        </Card>
    </>
  );
}
