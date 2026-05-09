/* eslint-disable react/no-unescaped-entities */
import { Sparkles } from 'lucide-react';
import { Card } from '../../_shared';

export function HeroSection() {
  return (
    <>
{/* HERO */}
        <Card delay={0} dark className="text-white">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] mb-4 text-blue-300">
            <Sparkles className="w-3.5 h-3.5" />
            Lula · 儿童 AI 启蒙玩具市场调研
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-5">
            把市面上最好的<span className="text-blue-300">叠加</span>，<br className="hidden md:block" />
            做大厂"<span className="text-blue-300">不屑</span>"做的事
          </h1>
          <p className="text-base md:text-lg text-neutral-300 max-w-3xl leading-relaxed">
            下沉市场 + AI 启蒙 + FOMO 是这一代家长的真实情绪。我们的命题：切入 ¥149–249 价格段(¥149 入门款贴 ¥100–150 真空带)，
            BOM ~95 元、硬件买断 + 含 1 年云服务，靠老 IP + 方言 + 县代理运营打穿县城和乡镇。
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['¥149–249 价位', '硬件买断 + 含 1 年云服务', '无屏', '方言 + 父母音', 'IP 联名', '县代理运营', '家长成长报告'].map((k) => (
              <span
                key={k}
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-white/10 text-blue-100 border border-white/15"
              >
                {k}
              </span>
            ))}
          </div>
        </Card>
    </>
  );
}
