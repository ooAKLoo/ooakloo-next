import { Brain } from 'lucide-react';
import { ACCENT, Card, SectionLabel, SectionTitle } from '../../_shared';

const MODEL_ITEMS = [
  '火山流式 ASR(APP_ID 已配置 · 中文 + 儿童口音优化)',
  '豆包大模型(Doubao-1.5-pro)流式输出,首 token 200–600ms',
  '火山流式 TTS · 儿童音色 + 方言(粤 / 川 / 闽)+ 父母声克隆',
  '抽象适配层:可平替讯飞 / 阿里 Qwen / DeepSeek',
  '降级链路:豆包 → DeepSeek → 本地 FAQ(断网)',
];

const VENDOR_STACK = [
  { layer: 'ASR', vendor: '火山流式 ASR', detail: 'WebSocket 双向流;中文 + 儿童口音;APP_ID 已配置' },
  { layer: 'LLM', vendor: '豆包 1.5-pro', detail: '流式 SSE;首 token 200–600ms;OpenAI 兼容接口' },
  { layer: 'TTS', vendor: '火山流式 TTS', detail: '儿童音色 + 方言;首包 200–500ms;支持声音克隆' },
];

export const ModelLayerSection = () => (
  <Card id="model-layer" delay={0.64}>
    <SectionLabel>23 · 模型层 · 火山引擎全链路</SectionLabel>
    <SectionTitle>
      <Brain className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: '#B45309' }} />
      ASR / LLM / TTS 三件事——一家供应商 + 一个适配层
    </SectionTitle>

    <p className="text-sm text-neutral-600 leading-relaxed mb-7">
      模型层是<b className="text-neutral-900">花钱最多 + 锁死风险最大</b>的一段。先用火山一家把账单 / 监控 / SLA 一站打通,
      再加一层<b className="text-neutral-900">抽象适配</b>,后续切讯飞 / 阿里 Qwen / DeepSeek 不用改业务代码。
    </p>

    {/* L4 火山引擎 */}
    <div className="rounded-2xl p-5 border mb-7" style={{ backgroundColor: '#FEF3C7', borderColor: '#B4530933' }}>
      <div className="flex items-baseline gap-2 mb-3 flex-wrap">
        <div className="text-[10px] font-bold tracking-wider" style={{ color: '#B45309', opacity: 0.6 }}>L4</div>
        <div className="text-base font-bold leading-snug" style={{ color: '#B45309' }}>模型适配 · 火山引擎</div>
        <div className="text-[12px]" style={{ color: '#B45309', opacity: 0.7 }}>— ASR / LLM / TTS 已开通</div>
      </div>
      <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
        {MODEL_ITEMS.map((it) => (
          <li key={it} className="flex gap-2 text-[13px] leading-relaxed" style={{ color: '#B45309' }}>
            <span className="opacity-50 shrink-0">·</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* 推荐技术栈 · 暗色卡 */}
    <div className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: ACCENT }}>
      推荐技术栈 · 火山引擎全链路(已开通)
    </div>
    <div className="rounded-2xl bg-neutral-900 p-5">
      <div className="text-[11px] font-bold uppercase tracking-wider text-blue-300 mb-3">
        已确认的供应商组合
      </div>
      <div className="grid md:grid-cols-3 gap-3 mb-4">
        {VENDOR_STACK.map((x) => (
          <div key={x.layer} className="rounded-xl bg-white/5 border border-white/10 p-4">
            <div className="text-[11px] font-bold tracking-wider text-blue-300 mb-1">{x.layer}</div>
            <div className="text-sm font-semibold text-white mb-1.5">{x.vendor}</div>
            <div className="text-[12px] text-neutral-400 leading-relaxed">{x.detail}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-blue-500/10 border border-blue-400/20 p-4">
        <div className="text-[11px] font-bold uppercase tracking-wider text-blue-300 mb-1.5">
          为什么选火山一家
        </div>
        <div className="text-[13px] text-blue-100 leading-relaxed">
          <b className="text-white">同账号同区域 = 链路最短</b>——三个服务跑在同一个数据中心,
          内网互调免去公网 RTT;账单 / 监控 / SLA 一站搞定;后续切讯飞 / 阿里 / DeepSeek 通过适配层平替,不锁死。
        </div>
      </div>
    </div>
  </Card>
);
