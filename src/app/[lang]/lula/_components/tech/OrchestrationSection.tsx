/* eslint-disable react/no-unescaped-entities */
import { Wifi, Layers, Clock } from 'lucide-react';
import { ACCENT, ACCENT_LIGHT, Card, SectionLabel, SectionTitle } from '../../_shared';

const GATEWAY_ITEMS = [
  'WSS over 443 主链路 + MQTT/UDP 备份',
  '设备指纹 + JWT 鉴权(30 天滚动)',
  '华北 / 华东 / 华南三区接入,就近入网 RTT < 60ms',
  'OTA 灰度 + 版本回滚 + 参数热更新',
  '心跳 / 重连 / 断线续传 / 限流',
];

const ORCH_ITEMS = [
  '流式 ASR → LLM → TTS 三段并行 pipeline',
  'VAD 判定句尾(300–500ms 静音,儿童放宽到 700ms)',
  '打断:孩子开口 → 立刻停 TTS + 清队列 + 转录',
  '上下文窗:8 轮对话 + 长期记忆摘要(昵称 / 喜好 / 学过的内容)',
  '人格路由:讲故事 / 教拼音 / 答疑 / 哄睡 / 安抚',
];

interface LatencyRow {
  stage: string;
  target: string;
  who: string;
  note: string;
}

const LATENCY_BUDGET: LatencyRow[] = [
  { stage: '端侧 VAD 检测说话开始', target: '< 50 ms', who: '设备端', note: 'ESP-SR 内置 VAD,能量阈值 + 频谱判定' },
  { stage: '音频上行(40ms 切片)', target: '30–80 ms', who: '网络', note: '大陆同区 BGP,目标单程 RTT < 60ms' },
  { stage: '流式 ASR 出首字', target: '200–400 ms', who: '火山 ASR', note: '边说边出字,不等用户说完' },
  { stage: 'VAD 判定句尾', target: '300–700 ms', who: '编排层', note: '儿童语速慢,静音阈值放宽避免打断孩子' },
  { stage: 'LLM 首 token', target: '200–600 ms', who: '豆包 1.5-pro', note: '流式 SSE,prompt 缓存命中可降到 < 300ms' },
  { stage: 'TTS 首包合成', target: '200–500 ms', who: '火山 TTS', note: '收到首句即开始合成,不等 LLM 完整输出' },
  { stage: '音频下行 + 播放缓冲', target: '60–120 ms', who: '网络 + 设备', note: 'Opus 解码 + 200ms 抖动缓冲' },
  { stage: '总体感(说完 → 听到回应)', target: '900–1500 ms', who: '整链路', note: '目标 ≤ 1.2s;超过 2s 儿童体验就掉' },
];

interface StateNode {
  state: string;
  desc: string;
  next: string;
  led: string;
}

const CONVERSATION_STATES: StateNode[] = [
  { state: 'IDLE', desc: '低功耗待机,只跑唤醒模型,待机功耗 < 50mW', next: '→ WAKE(唤醒词)/ → CALL(主动召唤)', led: '熄灭' },
  { state: 'WAKE', desc: '听到"小布小布",提示音 + LED 亮,开始录音上行', next: '→ LISTEN', led: '蓝色快闪 200ms' },
  { state: 'LISTEN', desc: '录音上行 40ms 切片,流式 ASR 实时出字', next: '→ THINK(VAD 句尾)/ ← LISTEN(继续)', led: '蓝色呼吸' },
  { state: 'THINK', desc: 'LLM 流式生成,首 token 即触发 TTS', next: '→ SPEAK(首包到达)', led: '紫色呼吸' },
  { state: 'SPEAK', desc: 'TTS 边合成边播,可被孩子打断', next: '→ LISTEN(说完 / 被打断)/ → IDLE(超时)', led: '绿色稳定' },
  { state: 'INTERRUPT', desc: '孩子开口 → 立刻停播 + 清音频队列 + 重新转录', next: '→ LISTEN(300ms 内)', led: '蓝色快闪' },
  { state: 'CALL', desc: '主动召唤:连续 5 分钟安静且检测到孩子在场 → 主动开口', next: '→ SPEAK(无需唤醒)', led: '黄色呼吸' },
  { state: 'OFFLINE', desc: '断网或服务降级,切换本地故事 / 儿歌 / FAQ 库', next: '→ IDLE(恢复后)', led: '黄色稳定' },
];

const SequenceDiagram = () => (
  <svg viewBox="0 0 1200 720" className="w-full h-auto" style={{ minWidth: 760 }} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="sq-up" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563EB" />
      </marker>
      <marker id="sq-dn" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#94A3B8" />
      </marker>
      <marker id="sq-ct" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#6D28D9" />
      </marker>
    </defs>

    {[
      { x: 80, label: '孩子', color: '#B45309', bg: '#FEF3C7' },
      { x: 240, label: 'ESP32-S3', color: '#047857', bg: '#ECFDF5' },
      { x: 400, label: '接入网关', color: '#2563EB', bg: '#EFF6FF' },
      { x: 560, label: '实时编排', color: '#6D28D9', bg: '#F5F3FF' },
      { x: 740, label: '火山 ASR', color: '#B45309', bg: '#FEF3C7' },
      { x: 920, label: '豆包 LLM', color: '#B45309', bg: '#FEF3C7' },
      { x: 1100, label: '火山 TTS', color: '#B45309', bg: '#FEF3C7' },
    ].map((a) => (
      <g key={a.label}>
        <rect x={a.x - 55} y="20" width="110" height="36" rx="6" fill={a.bg} stroke={a.color} strokeWidth="1.5" />
        <text x={a.x} y="43" textAnchor="middle" fontSize="11" fontWeight="700" fill={a.color}>{a.label}</text>
        <line x1={a.x} y1="56" x2={a.x} y2="690" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
      </g>
    ))}

    <text x="20" y="80" fontSize="10" fontWeight="700" fill="#525252">t</text>
    {[
      { y: 110, t: '0' },
      { y: 175, t: '说话中' },
      { y: 245, t: '0 ms' },
      { y: 305, t: '300' },
      { y: 365, t: '500' },
      { y: 425, t: '700' },
      { y: 495, t: '1000' },
      { y: 555, t: '1200' },
      { y: 615, t: '1400' },
    ].map((m) => (
      <text key={m.y} x="20" y={m.y + 4} fontSize="9" fill="#94A3B8">{m.t}</text>
    ))}

    <rect x="60" y="80" width="1100" height="130" fill="#FEF9E7" opacity="0.5" />
    <text x="1130" y="98" fontSize="10" fill="#B45309" fontWeight="700">Phase A · 流式 ASR 同步进行</text>

    <path d="M 95 110 L 230 110" stroke="#2563EB" strokeWidth="2" fill="none" markerEnd="url(#sq-up)" />
    <text x="105" y="103" fontSize="10" fill="#2563EB" fontWeight="600">"为什么天是蓝的?"</text>

    <rect x="232" y="120" width="16" height="60" fill="#047857" opacity="0.15" />
    <text x="252" y="138" fontSize="9" fill="#047857">VAD 检测说话开始</text>
    <text x="252" y="152" fontSize="9" fill="#047857">AEC + Opus 40ms 帧</text>

    <path d="M 248 145 L 395 145" stroke="#2563EB" strokeWidth="1.5" fill="none" markerEnd="url(#sq-up)" />
    <path d="M 405 158 L 555 158" stroke="#2563EB" strokeWidth="1.5" fill="none" markerEnd="url(#sq-up)" />
    <path d="M 565 170 L 735 170" stroke="#2563EB" strokeWidth="1.5" fill="none" markerEnd="url(#sq-up)" />
    <text x="412" y="153" fontSize="9" fill="#2563EB">音频帧流(每 40ms)</text>

    <path d="M 735 195 L 565 195" stroke="#6D28D9" strokeWidth="1.5" fill="none" markerEnd="url(#sq-ct)" strokeDasharray="3 2" />
    <text x="595" y="190" fontSize="9" fill="#6D28D9">流式文字 "为什么…"</text>

    <line x1="60" y1="230" x2="1160" y2="230" stroke="#BE123C" strokeWidth="1" strokeDasharray="5 3" />
    <text x="1130" y="226" fontSize="10" fill="#BE123C" fontWeight="700" textAnchor="end">孩子说完最后一字 · t=0 ms</text>

    <rect x="60" y="230" width="1100" height="430" fill="#EFF6FF" opacity="0.35" />
    <text x="1130" y="248" fontSize="10" fill="#2563EB" fontWeight="700">Phase B · 1.2 秒内出声</text>

    <rect x="552" y="265" width="16" height="40" fill="#6D28D9" opacity="0.15" />
    <text x="575" y="282" fontSize="9" fill="#6D28D9">VAD 判定句尾</text>
    <text x="575" y="296" fontSize="9" fill="#6D28D9" opacity="0.7">300–500ms 静音</text>

    <path d="M 735 310 L 565 310" stroke="#6D28D9" strokeWidth="1.5" fill="none" markerEnd="url(#sq-ct)" strokeDasharray="3 2" />
    <text x="600" y="305" fontSize="9" fill="#6D28D9">final:"为什么天是蓝的?"</text>

    <path d="M 565 350 L 915 350" stroke="#6D28D9" strokeWidth="1.5" fill="none" markerEnd="url(#sq-ct)" />
    <text x="700" y="345" fontSize="9" fill="#6D28D9">system + history + user · 5-6 岁人格</text>

    <rect x="912" y="360" width="16" height="65" fill="#B45309" opacity="0.2" />
    <text x="935" y="382" fontSize="9" fill="#B45309">LLM 推理</text>
    <text x="935" y="396" fontSize="9" fill="#B45309" opacity="0.7">200–600ms</text>

    <path d="M 915 430 L 565 430" stroke="#6D28D9" strokeWidth="1.5" fill="none" markerEnd="url(#sq-ct)" strokeDasharray="3 2" />
    <text x="600" y="425" fontSize="9" fill="#6D28D9">流式 token "你猜呢…"</text>

    <path d="M 565 470 L 1095 470" stroke="#6D28D9" strokeWidth="1.5" fill="none" markerEnd="url(#sq-ct)" />
    <text x="700" y="465" fontSize="9" fill="#6D28D9">首句送 TTS(不等 LLM 完整输出)</text>

    <rect x="1092" y="480" width="16" height="50" fill="#B45309" opacity="0.2" />
    <text x="1010" y="500" fontSize="9" fill="#B45309" textAnchor="end">TTS 合成</text>
    <text x="1010" y="514" fontSize="9" fill="#B45309" opacity="0.7" textAnchor="end">200–500ms</text>

    <path d="M 1095 540 L 565 540" stroke="#94A3B8" strokeWidth="1.5" fill="none" markerEnd="url(#sq-dn)" strokeDasharray="4 3" />
    <text x="700" y="535" fontSize="9" fill="#525252">首音频包 (Opus)</text>
    <path d="M 555 555 L 405 555" stroke="#94A3B8" strokeWidth="1.5" fill="none" markerEnd="url(#sq-dn)" strokeDasharray="4 3" />
    <path d="M 395 568 L 245 568" stroke="#94A3B8" strokeWidth="1.5" fill="none" markerEnd="url(#sq-dn)" strokeDasharray="4 3" />
    <path d="M 230 580 L 95 580" stroke="#94A3B8" strokeWidth="1.5" fill="none" markerEnd="url(#sq-dn)" strokeDasharray="4 3" />
    <text x="100" y="575" fontSize="10" fill="#047857" fontWeight="600">扬声器播放</text>

    <line x1="62" y1="600" x2="62" y2="660" stroke="#BE123C" strokeWidth="1.5" />
    <line x1="58" y1="600" x2="66" y2="600" stroke="#BE123C" strokeWidth="1.5" />
    <line x1="58" y1="660" x2="66" y2="660" stroke="#BE123C" strokeWidth="1.5" />
    <text x="100" y="635" fontSize="11" fill="#BE123C" fontWeight="700">总体感 ≤ 1.2 s</text>
    <text x="100" y="652" fontSize="9" fill="#BE123C">从孩子说完到听到第一声回应</text>

    <rect x="700" y="600" width="430" height="60" rx="6" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1" />
    <text x="715" y="620" fontSize="10" fontWeight="700" fill="#BE123C">⚠ 打断分支:Phase B 任意时刻孩子开口</text>
    <text x="715" y="636" fontSize="9" fill="#BE123C">→ 编排立即停 TTS · 清下行队列 · 重置 ASR · 回 LISTEN</text>
    <text x="715" y="650" fontSize="9" fill="#BE123C">触发延时 &lt; 300 ms(高于此孩子会觉得"它没听到我")</text>
  </svg>
);

const StateMachineDiagram = () => (
  <svg viewBox="0 0 1100 480" className="w-full h-auto" style={{ minWidth: 720 }} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="st-main" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563EB" />
      </marker>
      <marker id="st-int" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#BE123C" />
      </marker>
      <marker id="st-alt" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#B45309" />
      </marker>
      <marker id="st-off" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#525252" />
      </marker>
    </defs>

    {[
      { x: 110, y: 240, label: 'IDLE', sub: '低功耗待机', led: '熄灭' },
      { x: 290, y: 240, label: 'WAKE', sub: '听到唤醒词', led: '蓝色快闪' },
      { x: 470, y: 240, label: 'LISTEN', sub: '录音 + 流式 ASR', led: '蓝色呼吸' },
      { x: 660, y: 240, label: 'THINK', sub: 'LLM 流式生成', led: '紫色呼吸' },
      { x: 850, y: 240, label: 'SPEAK', sub: 'TTS 流式播放', led: '绿色稳定' },
    ].map((s) => (
      <g key={s.label}>
        <ellipse cx={s.x} cy={s.y} rx="62" ry="42" fill="#EFF6FF" stroke="#2563EB" strokeWidth="2" />
        <text x={s.x} y={s.y - 8} textAnchor="middle" fontSize="13" fontWeight="700" fill="#2563EB">{s.label}</text>
        <text x={s.x} y={s.y + 8} textAnchor="middle" fontSize="9" fill="#2563EB" opacity="0.8">{s.sub}</text>
        <text x={s.x} y={s.y + 22} textAnchor="middle" fontSize="9" fill="#525252">LED: {s.led}</text>
      </g>
    ))}

    <path d="M 172 240 L 228 240" stroke="#2563EB" strokeWidth="2" fill="none" markerEnd="url(#st-main)" />
    <text x="200" y="232" textAnchor="middle" fontSize="9" fill="#2563EB" fontWeight="600">唤醒词</text>

    <path d="M 352 240 L 408 240" stroke="#2563EB" strokeWidth="2" fill="none" markerEnd="url(#st-main)" />
    <text x="380" y="232" textAnchor="middle" fontSize="9" fill="#2563EB" fontWeight="600">提示音</text>

    <path d="M 532 240 L 598 240" stroke="#2563EB" strokeWidth="2" fill="none" markerEnd="url(#st-main)" />
    <text x="565" y="232" textAnchor="middle" fontSize="9" fill="#2563EB" fontWeight="600">VAD 句尾</text>

    <path d="M 722 240 L 788 240" stroke="#2563EB" strokeWidth="2" fill="none" markerEnd="url(#st-main)" />
    <text x="755" y="232" textAnchor="middle" fontSize="9" fill="#2563EB" fontWeight="600">首 token</text>

    <path d="M 450 200 Q 430 160 470 160 Q 510 160 490 200" stroke="#2563EB" strokeWidth="1.5" fill="none" markerEnd="url(#st-main)" />
    <text x="470" y="148" textAnchor="middle" fontSize="9" fill="#2563EB">继续说</text>

    <path d="M 850 282 Q 850 350 660 350 Q 470 350 470 282" stroke="#2563EB" strokeWidth="1.5" fill="none" markerEnd="url(#st-main)" />
    <text x="660" y="365" textAnchor="middle" fontSize="9" fill="#2563EB" fontWeight="600">说完 · 进下一轮</text>

    <path d="M 850 198 Q 850 100 110 100 Q 110 100 110 198" stroke="#2563EB" strokeWidth="1.2" fill="none" markerEnd="url(#st-main)" strokeDasharray="4 3" />
    <text x="480" y="92" textAnchor="middle" fontSize="9" fill="#2563EB">30s 无对话 → IDLE 超时</text>

    <ellipse cx="990" cy="100" rx="55" ry="36" fill="#FEF3C7" stroke="#B45309" strokeWidth="2" />
    <text x="990" y="96" textAnchor="middle" fontSize="12" fontWeight="700" fill="#B45309">CALL</text>
    <text x="990" y="112" textAnchor="middle" fontSize="9" fill="#B45309">主动召唤</text>

    <path d="M 130 200 Q 200 60 935 90" stroke="#B45309" strokeWidth="1.5" fill="none" markerEnd="url(#st-alt)" strokeDasharray="3 2" />
    <text x="540" y="58" textAnchor="middle" fontSize="9" fill="#B45309" fontWeight="600">5 分钟安静 + 检测到孩子在场</text>

    <path d="M 990 136 Q 990 180 880 210" stroke="#B45309" strokeWidth="1.5" fill="none" markerEnd="url(#st-alt)" />
    <text x="945" y="172" textAnchor="middle" fontSize="9" fill="#B45309" fontWeight="600">无需唤醒,直接说</text>

    <ellipse cx="660" cy="400" rx="65" ry="38" fill="#FFE4E6" stroke="#BE123C" strokeWidth="2" />
    <text x="660" y="396" textAnchor="middle" fontSize="12" fontWeight="700" fill="#BE123C">INTERRUPT</text>
    <text x="660" y="412" textAnchor="middle" fontSize="9" fill="#BE123C">打断 · 清队列</text>

    <path d="M 808 270 Q 740 340 720 365" stroke="#BE123C" strokeWidth="2" fill="none" markerEnd="url(#st-int)" />
    <text x="790" y="320" fontSize="9" fill="#BE123C" fontWeight="700">孩子开口</text>

    <path d="M 597 388 Q 500 380 470 282" stroke="#BE123C" strokeWidth="2" fill="none" markerEnd="url(#st-int)" />
    <text x="510" y="338" fontSize="9" fill="#BE123C" fontWeight="700">&lt; 300ms 回 LISTEN</text>

    <ellipse cx="290" cy="400" rx="60" ry="36" fill="#F3F4F6" stroke="#525252" strokeWidth="2" />
    <text x="290" y="396" textAnchor="middle" fontSize="12" fontWeight="700" fill="#525252">OFFLINE</text>
    <text x="290" y="412" textAnchor="middle" fontSize="9" fill="#525252">本地兜底</text>

    <path d="M 110 282 Q 110 350 235 395" stroke="#525252" strokeWidth="1.2" fill="none" markerEnd="url(#st-off)" strokeDasharray="4 3" />
    <text x="135" y="345" fontSize="9" fill="#525252">断网 / 服务降级</text>

    <path d="M 245 378 Q 150 340 105 282" stroke="#525252" strokeWidth="1.2" fill="none" markerEnd="url(#st-off)" strokeDasharray="4 3" />
    <text x="80" y="350" fontSize="9" fill="#525252" textAnchor="start">恢复</text>

    <g transform="translate(20, 460)">
      <text x="0" y="0" fontSize="11" fontWeight="700" fill="#525252">图例</text>
      <line x1="38" y1="-3" x2="78" y2="-3" stroke="#2563EB" strokeWidth="2" />
      <text x="86" y="0" fontSize="10" fill="#525252">主管线</text>
      <line x1="138" y1="-3" x2="178" y2="-3" stroke="#BE123C" strokeWidth="2" />
      <text x="186" y="0" fontSize="10" fill="#525252">打断分支</text>
      <line x1="248" y1="-3" x2="288" y2="-3" stroke="#B45309" strokeWidth="1.5" strokeDasharray="3 2" />
      <text x="296" y="0" fontSize="10" fill="#525252">主动召唤</text>
      <line x1="358" y1="-3" x2="398" y2="-3" stroke="#525252" strokeWidth="1.2" strokeDasharray="4 3" />
      <text x="406" y="0" fontSize="10" fill="#525252">离线降级</text>
    </g>
  </svg>
);

export const OrchestrationSection = () => (
  <Card id="orchestration" delay={0.62}>
    <SectionLabel>20 · 接入网关与实时编排</SectionLabel>
    <SectionTitle>
      <Wifi className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
      管子要够稳,状态机要够细——延时全在这里被吃掉
    </SectionTitle>

    <p className="text-sm text-neutral-600 leading-relaxed mb-7">
      "玩具不是单轮一问一答的语音助手"——它要支持<b className="text-neutral-900">中途打断</b>、
      <b className="text-neutral-900">主动召唤</b>、<b className="text-neutral-900">离线兜底</b>。
      这一节把<b className="text-neutral-900">网关</b> + <b className="text-neutral-900">状态机</b> +
      <b className="text-neutral-900">时序</b> + <b className="text-neutral-900">延时预算</b>四件事一次讲完。
    </p>

    {/* L2 接入网关 */}
    <div className="rounded-2xl p-5 border mb-4" style={{ backgroundColor: ACCENT_LIGHT, borderColor: `${ACCENT}33` }}>
      <div className="flex items-baseline gap-2 mb-3 flex-wrap">
        <div className="text-[10px] font-bold tracking-wider" style={{ color: ACCENT, opacity: 0.6 }}>L2</div>
        <div className="text-base font-bold leading-snug" style={{ color: ACCENT }}>接入网关 · 大陆三区</div>
        <div className="text-[12px]" style={{ color: ACCENT, opacity: 0.7 }}>— 长连接 / 鉴权 / 路由 / OTA</div>
      </div>
      <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
        {GATEWAY_ITEMS.map((it) => (
          <li key={it} className="flex gap-2 text-[13px] leading-relaxed" style={{ color: ACCENT }}>
            <span className="opacity-50 shrink-0">·</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* L3 实时编排 */}
    <div className="rounded-2xl p-5 border mb-7" style={{ backgroundColor: '#F5F3FF', borderColor: '#6D28D933' }}>
      <div className="flex items-baseline gap-2 mb-3 flex-wrap">
        <div className="text-[10px] font-bold tracking-wider" style={{ color: '#6D28D9', opacity: 0.6 }}>L3</div>
        <div className="text-base font-bold leading-snug" style={{ color: '#6D28D9' }}>实时编排 · Stateful Session</div>
        <div className="text-[12px]" style={{ color: '#6D28D9', opacity: 0.7 }}>— 对话状态机 / 打断 / 上下文 / 人格</div>
      </div>
      <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
        {ORCH_ITEMS.map((it) => (
          <li key={it} className="flex gap-2 text-[13px] leading-relaxed" style={{ color: '#6D28D9' }}>
            <span className="opacity-50 shrink-0">·</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* 时序图 */}
    <div className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: ACCENT }}>
      <Layers className="inline-block w-3.5 h-3.5 mr-1.5 -mt-0.5" />
      ① 对话时序图 · 一次完整问答
    </div>
    <p className="text-sm text-neutral-600 leading-relaxed mb-4">
      关键不是单链调用,而是<b className="text-neutral-900">流水并行</b>——孩子还在说,ASR 已经在出文字;LLM 还没说完,TTS 已经在合成首句;TTS 还在合成,扬声器已经在播。
    </p>
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 mb-7 overflow-x-auto">
      <SequenceDiagram />
    </div>

    {/* 延时预算 */}
    <div className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: ACCENT }}>
      <Clock className="inline-block w-3.5 h-3.5 mr-1.5 -mt-0.5" />
      ② 延时预算 · 逐段拆解
    </div>
    <p className="text-sm text-neutral-600 leading-relaxed mb-4">
      把"说完到听到回应"≤ 1.2 秒拆到每一段,任何一段超预算都会被监控告警。
    </p>
    <div className="rounded-2xl border border-neutral-200 overflow-hidden mb-7 bg-white">
      <div className="grid grid-cols-12 gap-2 px-5 py-2.5 bg-neutral-50 text-[11px] font-bold uppercase tracking-wider text-neutral-500">
        <div className="col-span-5">阶段</div>
        <div className="col-span-2">预算</div>
        <div className="col-span-2">归属</div>
        <div className="col-span-3">说明</div>
      </div>
      {LATENCY_BUDGET.map((row, i) => {
        const isTotal = i === LATENCY_BUDGET.length - 1;
        return (
          <div
            key={row.stage}
            className="grid grid-cols-12 gap-2 px-5 py-3 text-[13px] border-t border-neutral-100 leading-relaxed"
            style={isTotal ? { backgroundColor: ACCENT_LIGHT, fontWeight: 600 } : undefined}
          >
            <div className="col-span-5" style={isTotal ? { color: ACCENT } : { color: '#171717' }}>{row.stage}</div>
            <div className="col-span-2 font-mono tabular-nums" style={isTotal ? { color: ACCENT } : { color: '#171717' }}>{row.target}</div>
            <div className="col-span-2 text-neutral-500">{row.who}</div>
            <div className="col-span-3 text-neutral-500 text-[12px]">{row.note}</div>
          </div>
        );
      })}
    </div>

    {/* 状态机 */}
    <div className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: ACCENT }}>
      ③ 对话状态机 · 8 态 + 打断 + 主动召唤
    </div>
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 mb-4 overflow-x-auto">
      <StateMachineDiagram />
    </div>
    <div className="rounded-2xl border border-neutral-200 overflow-hidden bg-white">
      <div className="grid grid-cols-12 gap-2 px-5 py-2.5 bg-neutral-50 text-[11px] font-bold uppercase tracking-wider text-neutral-500">
        <div className="col-span-2">状态</div>
        <div className="col-span-5">说明</div>
        <div className="col-span-3">出口</div>
        <div className="col-span-2">LED</div>
      </div>
      {CONVERSATION_STATES.map((s) => (
        <div
          key={s.state}
          className="grid grid-cols-12 gap-2 px-5 py-3 text-[12px] border-t border-neutral-100 leading-relaxed"
        >
          <div className="col-span-2">
            <span
              className="inline-flex items-center rounded px-2 py-0.5 text-[11px] font-mono font-bold"
              style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
            >
              {s.state}
            </span>
          </div>
          <div className="col-span-5 text-neutral-700">{s.desc}</div>
          <div className="col-span-3 text-neutral-500 font-mono text-[11px]">{s.next}</div>
          <div className="col-span-2 text-neutral-500">{s.led}</div>
        </div>
      ))}
    </div>
  </Card>
);
