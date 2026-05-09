/* eslint-disable react/no-unescaped-entities */
import { AlertTriangle, Baby, Compass, Layers, Sparkles } from 'lucide-react';
import { ACCENT, ACCENT_LIGHT, Card, Chip, SectionLabel, SectionTitle } from '../../_shared';

export function FoundationSection() {
  return (
    <>
{/* 概念定义 */}
        <Card id="foundation" delay={0.04}>
          <SectionLabel>01 · 概念定义</SectionLabel>
          <SectionTitle>
            <Compass className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
            什么是"启蒙教育"——目的 / 内容 / 形式 / 年龄段
          </SectionTitle>
          <p className="text-sm text-neutral-600 leading-relaxed mb-6">
            "启蒙"不是教知识，是<b className="text-neutral-800">"开蒙"</b>——开启认知、习惯与情感的最初阶段。
            它的本质是为日后学习和生活打地基，更看重<b className="text-neutral-800">"养成"而非"教会"</b>。
            这是我们做产品的根本边界——做不成学习机，但要做好"陪养成"。
          </p>

          <div className="grid md:grid-cols-2 gap-3 mb-5">
            {/* A · 目的 */}
            <div className="rounded-2xl border border-neutral-200 p-5 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                >
                  <Compass className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold tracking-wider text-neutral-400">
                    A · 目的
                  </div>
                  <div className="font-semibold text-neutral-900">看重"养成"，不看重"教会"</div>
                </div>
              </div>
              <div className="text-sm text-neutral-700 leading-relaxed">
                唤起好奇心与求知欲；养成生活习惯与行为规范；发展语言表达；建立安全感和人际信任；
                塑造分享、诚实、尊重他人等初步道德观。
              </div>
            </div>

            {/* B · 内容 */}
            <div className="rounded-2xl border border-neutral-200 p-5 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                >
                  <Layers className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold tracking-wider text-neutral-400">
                    B · 内容
                  </div>
                  <div className="font-semibold text-neutral-900">五大领域 + 中式德育蒙学</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-2.5">
                <Chip tone="accent">语言(听说/识字/阅读兴趣)</Chip>
                <Chip tone="accent">认知(数概念/形状/颜色)</Chip>
                <Chip tone="accent">社会性(交往/规则/情绪)</Chip>
                <Chip tone="accent">艺术(音乐/绘画/律动)</Chip>
                <Chip tone="accent">健康运动(精细动作)</Chip>
              </div>
              <div className="text-[12px] text-neutral-600 leading-relaxed">
                中国传统额外有<b>德育蒙学</b>——《三字经》《弟子规》一类的伦理与文化常识。
              </div>
            </div>

            {/* C · 形式 */}
            <div className="rounded-2xl border border-neutral-200 p-5 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                >
                  <Sparkles className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold tracking-wider text-neutral-400">
                    C · 形式
                  </div>
                  <div className="font-semibold text-neutral-900">寓教于乐，"在生活中学"</div>
                </div>
              </div>
              <div className="text-sm text-neutral-700 leading-relaxed mb-2.5">
                游戏、故事、儿歌、绘本、动手操作、亲子互动为主，避免灌输式教学。
              </div>
              <div className="flex flex-wrap gap-1.5">
                <Chip tone="emerald">家庭对话与示范</Chip>
                <Chip tone="emerald">绘本共读</Chip>
                <Chip tone="emerald">角色扮演</Chip>
                <Chip tone="emerald">户外探索</Chip>
                <Chip tone="emerald">手工 / 音乐</Chip>
                <Chip tone="emerald">幼儿园集体活动</Chip>
              </div>
            </div>

            {/* D · 年龄段 */}
            <div className="rounded-2xl border border-neutral-200 p-5 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                >
                  <Baby className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold tracking-wider text-neutral-400">
                    D · 年龄段
                  </div>
                  <div className="font-semibold text-neutral-900">广义 0–6 岁，含 6–7 幼小衔接</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex gap-3 text-sm">
                  <div className="w-16 shrink-0 font-semibold" style={{ color: ACCENT }}>
                    0–3 岁
                  </div>
                  <div className="text-neutral-700 leading-relaxed">
                    早期启蒙(婴幼儿期)：亲子互动、感官刺激、语言输入；多在家庭进行
                  </div>
                </div>
                <div className="flex gap-3 text-sm">
                  <div className="w-16 shrink-0 font-semibold" style={{ color: ACCENT }}>
                    3–6 岁
                  </div>
                  <div className="text-neutral-700 leading-relaxed">
                    学前启蒙：对应幼儿园，开始较系统的集体教育活动
                  </div>
                </div>
                <div className="flex gap-3 text-sm">
                  <div className="w-16 shrink-0 font-semibold" style={{ color: ACCENT }}>
                    6–7 岁
                  </div>
                  <div className="text-neutral-700 leading-relaxed">
                    幼小衔接：作为过渡阶段，选择性纳入
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 红线 callout — 把定义和我们的产品边界绑在一起 */}
          <div
            className="rounded-2xl p-5 text-sm leading-relaxed"
            style={{ backgroundColor: '#FEF2F2', color: '#7F1D1D' }}
          >
            <div className="font-semibold mb-1 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> 核心红线 · 直接决定我们的产品边界
            </div>
            启蒙 ≠ "提前学小学知识"。过早强调读写算训练，反而压抑兴趣和探究欲，与启蒙本意相违。
            <b>健康的启蒙是让孩子"想学、会玩、有规矩、有感情"</b>——这正好对上 Lula 的定位：
            我们做的不是学习机(K12 赛道)，而是 3–8 岁孩子的"AI 朋友 + 启蒙伙伴"。
          </div>
        </Card>
    </>
  );
}
