/* eslint-disable react/no-unescaped-entities */
import { Cpu, Wifi, Layers, Brain, Database, Sparkles, type LucideIcon } from 'lucide-react';
import { ACCENT, ACCENT_LIGHT, Card, SectionLabel, SectionTitle } from '../../_shared';

interface TechLayerSummary {
  num: string;
  name: string;
  role: string;
  ref: string;
  icon: LucideIcon;
  bg: string;
  color: string;
}

const TECH_LAYERS: TechLayerSummary[] = [
  {
    num: 'L1',
    name: '设备端 · ESP32-S3',
    role: '声音采集 / 唤醒 / 离线兜底',
    ref: '详见 19 节',
    icon: Cpu,
    bg: '#ECFDF5',
    color: '#047857',
  },
  {
    num: 'L2',
    name: '接入网关 · 大陆三区',
    role: '长连接 / 鉴权 / 路由 / OTA',
    ref: '详见 20 节',
    icon: Wifi,
    bg: ACCENT_LIGHT,
    color: ACCENT,
  },
  {
    num: 'L3',
    name: '实时编排 · Stateful Session',
    role: '对话状态机 / 打断 / 上下文 / 人格',
    ref: '详见 20 节',
    icon: Layers,
    bg: '#F5F3FF',
    color: '#6D28D9',
  },
  {
    num: 'L4',
    name: '模型层 · 火山引擎',
    role: 'ASR / LLM / TTS 已开通',
    ref: '详见 21 节',
    icon: Brain,
    bg: '#FEF3C7',
    color: '#B45309',
  },
];

const SystemArchitectureDiagram = () => (
  <svg viewBox="0 0 1200 460" className="w-full h-auto" style={{ minWidth: 720 }} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="ar-up" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563EB" />
      </marker>
      <marker id="ar-dn" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#94A3B8" />
      </marker>
      <marker id="ar-ct" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#6D28D9" />
      </marker>
      <marker id="ar-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#BE123C" />
      </marker>
    </defs>

    {/* 孩子 */}
    <circle cx="50" cy="200" r="22" fill="#FEF3C7" stroke="#B45309" strokeWidth="1.5" />
    <text x="50" y="207" textAnchor="middle" fontSize="20">{'\u{1F476}'}</text>
    <text x="50" y="245" textAnchor="middle" fontSize="11" fill="#525252" fontWeight="600">孩子</text>

    {/* L1 设备端 */}
    <rect x="100" y="140" width="180" height="120" rx="10" fill="#ECFDF5" stroke="#047857" strokeWidth="1.5" />
    <text x="190" y="162" textAnchor="middle" fontSize="11" fontWeight="700" fill="#047857">L1 · 设备端</text>
    <text x="190" y="180" textAnchor="middle" fontSize="11" fill="#047857" fontWeight="600">ESP32-S3</text>
    <line x1="115" y1="192" x2="265" y2="192" stroke="#047857" strokeOpacity="0.25" />
    <text x="190" y="210" textAnchor="middle" fontSize="10" fill="#047857">VAD · AEC · Opus</text>
    <text x="190" y="226" textAnchor="middle" fontSize="10" fill="#047857">端侧唤醒 / 离线兜底</text>
    <text x="190" y="242" textAnchor="middle" fontSize="10" fill="#047857" opacity="0.7">单麦 + I2S 喇叭</text>

    {/* L2 接入网关 */}
    <rect x="320" y="140" width="160" height="120" rx="10" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1.5" />
    <text x="400" y="162" textAnchor="middle" fontSize="11" fontWeight="700" fill="#2563EB">L2 · 接入网关</text>
    <text x="400" y="180" textAnchor="middle" fontSize="11" fill="#2563EB" fontWeight="600">大陆三区</text>
    <line x1="335" y1="192" x2="465" y2="192" stroke="#2563EB" strokeOpacity="0.25" />
    <text x="400" y="210" textAnchor="middle" fontSize="10" fill="#2563EB">WSS:443 / MQTT/UDP</text>
    <text x="400" y="226" textAnchor="middle" fontSize="10" fill="#2563EB">JWT 鉴权</text>
    <text x="400" y="242" textAnchor="middle" fontSize="10" fill="#2563EB" opacity="0.7">OTA / 心跳 / 限流</text>

    {/* L3 实时编排 */}
    <rect x="520" y="140" width="180" height="120" rx="10" fill="#F5F3FF" stroke="#6D28D9" strokeWidth="1.5" />
    <text x="610" y="162" textAnchor="middle" fontSize="11" fontWeight="700" fill="#6D28D9">L3 · 实时编排</text>
    <text x="610" y="180" textAnchor="middle" fontSize="11" fill="#6D28D9" fontWeight="600">Stateful Session</text>
    <line x1="535" y1="192" x2="685" y2="192" stroke="#6D28D9" strokeOpacity="0.25" />
    <text x="610" y="210" textAnchor="middle" fontSize="10" fill="#6D28D9">状态机 / 打断 / 上下文</text>
    <text x="610" y="226" textAnchor="middle" fontSize="10" fill="#6D28D9">人格路由 (3 档分龄)</text>
    <text x="610" y="242" textAnchor="middle" fontSize="10" fill="#6D28D9" opacity="0.7">流式 ASR↔LLM↔TTS</text>

    {/* L4 火山引擎组 dashed group */}
    <rect x="740" y="60" width="220" height="320" rx="14" fill="none" stroke="#B45309" strokeWidth="1" strokeDasharray="4 3" opacity="0.45" />
    <text x="850" y="50" textAnchor="middle" fontSize="11" fontWeight="700" fill="#B45309">L4 · 火山引擎 · 同区内网</text>

    <rect x="760" y="80" width="180" height="80" rx="8" fill="#FEF3C7" stroke="#B45309" strokeWidth="1.5" />
    <text x="850" y="103" textAnchor="middle" fontSize="11" fontWeight="700" fill="#B45309">流式 ASR</text>
    <text x="850" y="123" textAnchor="middle" fontSize="10" fill="#B45309">边说边出字</text>
    <text x="850" y="142" textAnchor="middle" fontSize="10" fill="#B45309" opacity="0.7">首字 200–400 ms</text>

    <rect x="760" y="180" width="180" height="80" rx="8" fill="#FEF3C7" stroke="#B45309" strokeWidth="1.5" />
    <text x="850" y="203" textAnchor="middle" fontSize="11" fontWeight="700" fill="#B45309">豆包 1.5-pro</text>
    <text x="850" y="223" textAnchor="middle" fontSize="10" fill="#B45309">流式 SSE</text>
    <text x="850" y="242" textAnchor="middle" fontSize="10" fill="#B45309" opacity="0.7">首 token 200–600 ms</text>

    <rect x="760" y="280" width="180" height="80" rx="8" fill="#FEF3C7" stroke="#B45309" strokeWidth="1.5" />
    <text x="850" y="303" textAnchor="middle" fontSize="11" fontWeight="700" fill="#B45309">流式 TTS</text>
    <text x="850" y="323" textAnchor="middle" fontSize="10" fill="#B45309">儿童音色 + 方言</text>
    <text x="850" y="342" textAnchor="middle" fontSize="10" fill="#B45309" opacity="0.7">首包 200–500 ms</text>

    {/* 安全(产品侧 17) */}
    <rect x="980" y="180" width="180" height="80" rx="8" fill="#FFE4E6" stroke="#BE123C" strokeWidth="1.5" />
    <text x="1070" y="203" textAnchor="middle" fontSize="11" fontWeight="700" fill="#BE123C">安全 4 层(详见 15)</text>
    <text x="1070" y="223" textAnchor="middle" fontSize="10" fill="#BE123C">输入 / 模型 / 输出 / 审计</text>
    <text x="1070" y="242" textAnchor="middle" fontSize="10" fill="#BE123C" opacity="0.7">儿童白名单 + 重写</text>

    {/* 内容引擎(产品侧 18) */}
    <rect x="320" y="300" width="160" height="60" rx="8" fill="#FFF7ED" stroke="#C2410C" strokeWidth="1.5" />
    <text x="400" y="322" textAnchor="middle" fontSize="11" fontWeight="700" fill="#C2410C">内容引擎(详见 16)</text>
    <text x="400" y="342" textAnchor="middle" fontSize="10" fill="#C2410C">分龄 / IP / 方言 / 父母音</text>

    {/* 家长后台(产品侧 19) */}
    <rect x="100" y="300" width="180" height="60" rx="8" fill="#F3F4F6" stroke="#374151" strokeWidth="1.5" />
    <text x="190" y="322" textAnchor="middle" fontSize="11" fontWeight="700" fill="#374151">家长后台(详见 17)</text>
    <text x="190" y="342" textAnchor="middle" fontSize="10" fill="#374151">报告 / 内购 / 管控</text>

    {/* 上行音频流 (蓝实线) */}
    <path d="M 72 195 L 100 185" stroke="#2563EB" strokeWidth="2" fill="none" markerEnd="url(#ar-up)" />
    <path d="M 280 185 L 320 185" stroke="#2563EB" strokeWidth="2" fill="none" markerEnd="url(#ar-up)" />
    <text x="287" y="178" fontSize="9" fill="#2563EB" fontWeight="600">Opus↑</text>
    <path d="M 480 185 L 520 185" stroke="#2563EB" strokeWidth="2" fill="none" markerEnd="url(#ar-up)" />
    <path d="M 700 175 Q 728 130 760 117" stroke="#2563EB" strokeWidth="2" fill="none" markerEnd="url(#ar-up)" />
    <text x="712" y="135" fontSize="9" fill="#2563EB" fontWeight="600">音频帧</text>

    <path d="M 760 130 Q 728 158 700 195" stroke="#6D28D9" strokeWidth="1.5" fill="none" markerEnd="url(#ar-ct)" strokeDasharray="3 2" />
    <text x="708" y="158" fontSize="9" fill="#6D28D9">流式文字</text>
    <path d="M 700 215 L 760 220" stroke="#6D28D9" strokeWidth="1.5" fill="none" markerEnd="url(#ar-ct)" />
    <text x="710" y="212" fontSize="9" fill="#6D28D9">prompt</text>
    <path d="M 760 240 L 700 232" stroke="#6D28D9" strokeWidth="1.5" fill="none" markerEnd="url(#ar-ct)" strokeDasharray="3 2" />
    <text x="708" y="252" fontSize="9" fill="#6D28D9">tokens</text>
    <path d="M 700 250 Q 728 290 760 315" stroke="#6D28D9" strokeWidth="1.5" fill="none" markerEnd="url(#ar-ct)" />
    <text x="713" y="285" fontSize="9" fill="#6D28D9">句子</text>

    <path d="M 760 330 Q 728 290 700 260" stroke="#94A3B8" strokeWidth="2" fill="none" markerEnd="url(#ar-dn)" strokeDasharray="4 3" />
    <path d="M 520 215 L 480 215" stroke="#94A3B8" strokeWidth="2" fill="none" markerEnd="url(#ar-dn)" strokeDasharray="4 3" />
    <text x="487" y="232" fontSize="9" fill="#94A3B8" fontWeight="600">Opus↓</text>
    <path d="M 320 215 L 280 215" stroke="#94A3B8" strokeWidth="2" fill="none" markerEnd="url(#ar-dn)" strokeDasharray="4 3" />
    <path d="M 100 215 L 72 225" stroke="#94A3B8" strokeWidth="2" fill="none" markerEnd="url(#ar-dn)" strokeDasharray="4 3" />

    <path d="M 940 220 L 980 220" stroke="#BE123C" strokeWidth="1.5" fill="none" markerEnd="url(#ar-rs)" />
    <path d="M 980 235 L 940 245" stroke="#BE123C" strokeWidth="1.5" fill="none" markerEnd="url(#ar-rs)" strokeDasharray="3 2" />
    <text x="945" y="212" fontSize="9" fill="#BE123C">每轮过滤</text>

    <path d="M 560 260 L 470 300" stroke="#C2410C" strokeWidth="1.5" fill="none" markerEnd="url(#ar-dn)" />
    <path d="M 540 260 Q 380 285 280 305" stroke="#374151" strokeWidth="1.5" fill="none" markerEnd="url(#ar-dn)" strokeDasharray="3 2" />
    <text x="380" y="285" fontSize="9" fill="#374151">异步日志/事件</text>

    <g transform="translate(20, 410)">
      <text x="0" y="0" fontSize="11" fontWeight="700" fill="#525252">图例</text>
      <line x1="38" y1="-3" x2="78" y2="-3" stroke="#2563EB" strokeWidth="2" />
      <text x="86" y="0" fontSize="10" fill="#525252">音频上行</text>
      <line x1="148" y1="-3" x2="188" y2="-3" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 3" />
      <text x="196" y="0" fontSize="10" fill="#525252">音频下行</text>
      <line x1="258" y1="-3" x2="298" y2="-3" stroke="#6D28D9" strokeWidth="1.5" />
      <text x="306" y="0" fontSize="10" fill="#525252">控制 / 数据</text>
      <line x1="378" y1="-3" x2="418" y2="-3" stroke="#6D28D9" strokeWidth="1.5" strokeDasharray="3 2" />
      <text x="426" y="0" fontSize="10" fill="#525252">流式回传</text>
      <line x1="498" y1="-3" x2="538" y2="-3" stroke="#BE123C" strokeWidth="1.5" />
      <text x="546" y="0" fontSize="10" fill="#525252">安全调用</text>
      <line x1="618" y1="-3" x2="658" y2="-3" stroke="#374151" strokeWidth="1.5" strokeDasharray="3 2" />
      <text x="666" y="0" fontSize="10" fill="#525252">异步事件</text>
    </g>
  </svg>
);

export const TechOverviewSection = () => (
  <Card id="tech-overview" delay={0.58}>
    <SectionLabel>18 · 技术总览 · 端到端低延时方案</SectionLabel>
    <SectionTitle>
      <Layers className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
      用开源起步,自研收口——把"说完到出声"压到 1.2 秒以内
    </SectionTitle>

    {/* 核心论点 */}
    <div className="rounded-2xl p-5 mb-7" style={{ backgroundColor: ACCENT_LIGHT }}>
      <div className="text-[11px] font-bold tracking-[0.25em] uppercase mb-2" style={{ color: ACCENT }}>
        核心论点 · 三句话讲完
      </div>
      <ul className="space-y-2 text-sm leading-relaxed" style={{ color: ACCENT }}>
        <li className="flex gap-2.5">
          <span className="shrink-0 font-bold">①</span>
          <span>
            <b>不要从零造轮子,但也别直接用开源后端上线</b>——固件用小智 ESP32 / esp_xiaozhi 起步,
            服务端 fork 后必须自己改造,否则延时、安全、合规、成本全都失控。
          </span>
        </li>
        <li className="flex gap-2.5">
          <span className="shrink-0 font-bold">②</span>
          <span>
            <b>低延时不是某个库决定的,是整条链路决定的</b>——VAD / ASR / LLM / TTS / 网络 / 缓冲,
            任何一段 buffer 太大、服务商慢、绕路,都会慢。我们逐段定预算。
          </span>
        </li>
        <li className="flex gap-2.5">
          <span className="shrink-0 font-bold">③</span>
          <span>
            <b>3-8 岁不是"小一号的成人"</b>——分龄人格、教育法、安全四层这些<b>产品侧的硬规则</b>(详见 14 / 15),
            必须翻译成 prompt 和过滤规则,塞进每一次模型调用。
          </span>
        </li>
        <li className="flex gap-2.5">
          <span className="shrink-0 font-bold">④</span>
          <span>
            <b>"越用越懂孩子"和"高频问句不重复花钱"是同一件工程</b>
            ——Agent Memory + Semantic Cache 共用一套 embedding + 向量库,
            既兜起 17 节家长报告的产品承诺,又压住 24 节的 token 账单;
            <b>详细拆解见 22B 节</b>。
          </span>
        </li>
      </ul>
    </div>

    {/* 系统架构图 */}
    <div className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: ACCENT }}>
      系统架构图 · 数据流向
    </div>
    <p className="text-sm text-neutral-600 leading-relaxed mb-4">
      实线 = 音频/数据上行;虚线 = 下行播放;火山三个模型在<b className="text-neutral-900">同一区域内网</b>互调,不走公网。
    </p>
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 mb-7 overflow-x-auto">
      <SystemArchitectureDiagram />
    </div>

    {/* Context / Memory / Cache · 一笔提及,详细拆解放 22B */}
    <div className="rounded-2xl p-5 mb-7 border flex flex-col md:flex-row gap-4 items-start" style={{ backgroundColor: '#F8FAFC', borderColor: '#E2E8F0' }}>
      <div className="flex gap-2 shrink-0">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#ECFEFF' }}>
          <Layers className="w-5 h-5" style={{ color: '#0E7490' }} />
        </div>
        <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#F5F3FF' }}>
          <Database className="w-5 h-5" style={{ color: '#6D28D9' }} />
        </div>
        <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#FEF3C7' }}>
          <Sparkles className="w-5 h-5" style={{ color: '#B45309' }} />
        </div>
      </div>
      <div className="text-[13px] leading-relaxed text-neutral-700">
        <b className="text-neutral-900">在 L3 编排层之外,还有一块横跨整套链路的基建,我们采用业界更严谨的口径,把它拆成三件事:</b>
        <span style={{ color: '#0E7490' }}><b>Context</b></span>(瞬时装配产物 · 每轮 prompt 怎么搭) ·
        <span style={{ color: '#6D28D9' }}><b> Memory</b></span>(跨会话的孩子画像 store · 跑出"AI 越用越懂") ·
        <span style={{ color: '#B45309' }}><b> Semantic Cache</b></span>(通用问答缓存 · 跑出"高频问句不重复花钱")。
        三件事职责清、好测、好换,Cache 命中可绕过 LLM 直返预合成 audio,Memory 永远经 Context 进 prompt。
        <span className="font-semibold" style={{ color: ACCENT }}> → 详见 20B 节(数据模型 / API 签名 / 命中流程伪代码 / 开源决策 / 与 22·MVP 节奏)。</span>
      </div>
    </div>

    {/* L1–L4 概要 */}
    <div className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: ACCENT }}>
      四层骨架 · 各章节入口
    </div>
    <div className="grid sm:grid-cols-2 gap-3">
      {TECH_LAYERS.map((l) => {
        const Icon = l.icon;
        return (
          <div
            key={l.num}
            className="rounded-2xl p-5 border"
            style={{ backgroundColor: l.bg, borderColor: `${l.color}33` }}
          >
            <div className="flex items-start gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: 'white' }}
              >
                <Icon className="w-5 h-5" style={{ color: l.color }} />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-bold tracking-wider mb-0.5" style={{ color: l.color, opacity: 0.6 }}>
                  {l.num}
                </div>
                <div className="text-base font-bold leading-snug mb-1" style={{ color: l.color }}>
                  {l.name}
                </div>
                <div className="text-[12px] mb-1.5" style={{ color: l.color, opacity: 0.8 }}>
                  {l.role}
                </div>
                <div className="text-[11px] font-semibold" style={{ color: l.color, opacity: 0.7 }}>
                  → {l.ref}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </Card>
);
