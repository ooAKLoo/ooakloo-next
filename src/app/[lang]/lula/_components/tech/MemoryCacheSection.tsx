/* eslint-disable react/no-unescaped-entities */
import { Database, Sparkles, GitBranch, Lock, ListChecks, MessageSquare, Code } from 'lucide-react';
import { ACCENT, ACCENT_LIGHT, Card, SectionLabel, SectionTitle } from '../../_shared';

// ---- color tokens ----
const CTX = '#0E7490'; // Context (cyan-700)
const CTX_LIGHT = '#ECFEFF';
const CTX_BORDER = '#0E749022';

const MEM = '#6D28D9'; // Memory (violet-700)
const MEM_LIGHT = '#F5F3FF';
const MEM_DEEP = '#4C1D95';
const MEM_BORDER = '#6D28D922';

const CACHE = '#B45309'; // Cache (amber-700)
const CACHE_LIGHT = '#FEF3C7';
const CACHE_DEEP = '#78350F';
const CACHE_BORDER = '#B4530922';

// ============================================================
// SVG 1 · 三者职责边界 · Component / Responsibility Diagram
// ============================================================
const ResponsibilityDiagram = () => (
  <svg viewBox="0 0 1200 380" className="w-full h-auto" style={{ minWidth: 760 }} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="rb-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
      </marker>
      <marker id="rb-arr-cache" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#B45309" />
      </marker>
    </defs>

    {/* 入口 query */}
    <rect x="20" y="170" width="120" height="56" rx="10" fill="#F1F5F9" stroke="#475569" strokeWidth="1.5" />
    <text x="80" y="195" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">本轮 query</text>
    <text x="80" y="212" textAnchor="middle" fontSize="10" fill="#475569">ASR 出文</text>

    {/* CACHE 圆角矩形 (跨用户 / 无个性化) */}
    <g>
      <rect x="180" y="40" width="280" height="120" rx="14" fill={CACHE_LIGHT} stroke={CACHE} strokeWidth="1.8" />
      <text x="320" y="62" textAnchor="middle" fontSize="12" fontWeight="700" fill={CACHE}>SEMANTIC CACHE</text>
      <text x="320" y="78" textAnchor="middle" fontSize="10" fill={CACHE}>跨用户 · 无个性化 · 严格分区</text>
      <line x1="195" y1="88" x2="445" y2="88" stroke={CACHE} strokeOpacity="0.3" />
      <text x="320" y="104" textAnchor="middle" fontSize="10" fill={CACHE_DEEP}>+ lookup(query, partition) → CachedAnswer?</text>
      <text x="320" y="120" textAnchor="middle" fontSize="10" fill={CACHE_DEEP}>+ write(query, answer, audio_url, partition)</text>
      <text x="320" y="138" textAnchor="middle" fontSize="10" fill={CACHE_DEEP}>+ invalidate(content_version)</text>
      <text x="320" y="154" textAnchor="middle" fontSize="9" fill={CACHE} opacity="0.7">~ 输出可绕过 Context+LLM 直返 audio_url</text>
    </g>

    {/* MEMORY */}
    <g>
      <rect x="180" y="240" width="280" height="120" rx="14" fill={MEM_LIGHT} stroke={MEM} strokeWidth="1.8" />
      <text x="320" y="262" textAnchor="middle" fontSize="12" fontWeight="700" fill={MEM}>AGENT MEMORY</text>
      <text x="320" y="278" textAnchor="middle" fontSize="10" fill={MEM}>跨会话 · 个性化 · 隐私敏感</text>
      <line x1="195" y1="288" x2="445" y2="288" stroke={MEM} strokeOpacity="0.3" />
      <text x="320" y="304" textAnchor="middle" fontSize="10" fill={MEM_DEEP}>+ search(child_id, query) → ProfileSlice</text>
      <text x="320" y="320" textAnchor="middle" fontSize="10" fill={MEM_DEEP}>+ write_session(child_id, summary)</text>
      <text x="320" y="338" textAnchor="middle" fontSize="10" fill={MEM_DEEP}>+ delete_fact(child_id, fact_id)</text>
      <text x="320" y="354" textAnchor="middle" fontSize="9" fill={MEM} opacity="0.7">~ 输出永远必须经过 Context 才进 LLM</text>
    </g>

    {/* CONTEXT (中央) */}
    <g>
      <rect x="540" y="140" width="240" height="120" rx="14" fill={CTX_LIGHT} stroke={CTX} strokeWidth="2" />
      <text x="660" y="162" textAnchor="middle" fontSize="12" fontWeight="700" fill={CTX}>CONTEXT BUILDER</text>
      <text x="660" y="178" textAnchor="middle" fontSize="10" fill={CTX}>瞬时 · 装配产物 · 不持久</text>
      <line x1="555" y1="188" x2="765" y2="188" stroke={CTX} strokeOpacity="0.3" />
      <text x="660" y="204" textAnchor="middle" fontSize="10" fill={CTX}>+ build(child_id, query, age) → Prompt</text>
      <text x="660" y="222" textAnchor="middle" fontSize="10" fill={CTX} opacity="0.85">~ 1500–2000 token / turn</text>
      <text x="660" y="240" textAnchor="middle" fontSize="9" fill={CTX} opacity="0.7">前 470 token 走豆包 prefix cache</text>
    </g>

    {/* LLM */}
    <rect x="850" y="140" width="160" height="60" rx="10" fill={CACHE_LIGHT} stroke={CACHE} strokeWidth="1.5" />
    <text x="930" y="165" textAnchor="middle" fontSize="11" fontWeight="700" fill={CACHE_DEEP}>豆包 LLM</text>
    <text x="930" y="183" textAnchor="middle" fontSize="10" fill={CACHE}>流式 · 首 token 200–600ms</text>

    {/* TTS */}
    <rect x="850" y="220" width="160" height="60" rx="10" fill="#ECFDF5" stroke="#047857" strokeWidth="1.5" />
    <text x="930" y="245" textAnchor="middle" fontSize="11" fontWeight="700" fill="#065F46">TTS 流式</text>
    <text x="930" y="263" textAnchor="middle" fontSize="10" fill="#047857">边合成边播</text>

    {/* 设备 */}
    <rect x="1060" y="180" width="120" height="60" rx="10" fill="#F1F5F9" stroke="#475569" strokeWidth="1.5" />
    <text x="1120" y="205" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">设备播放</text>
    <text x="1120" y="222" textAnchor="middle" fontSize="10" fill="#475569">~300–600ms</text>

    {/* 数据流 */}
    {/* query → cache lookup */}
    <path d="M 140 195 Q 160 130 180 100" stroke="#475569" strokeWidth="1.8" fill="none" markerEnd="url(#rb-arr)" />
    <text x="100" y="145" fontSize="9" fill="#475569">先查</text>
    {/* query → memory search (when miss) */}
    <path d="M 140 205 Q 160 270 180 295" stroke="#475569" strokeWidth="1.8" fill="none" markerEnd="url(#rb-arr)" />
    <text x="100" y="265" fontSize="9" fill="#475569">未命中再查</text>
    {/* memory → context */}
    <path d="M 460 295 Q 500 270 540 215" stroke={MEM} strokeWidth="1.8" fill="none" markerEnd="url(#rb-arr)" />
    <text x="478" y="262" fontSize="9" fill={MEM} fontWeight="600">profile slice</text>
    {/* context → llm */}
    <path d="M 780 180 L 850 165" stroke={CTX} strokeWidth="2" fill="none" markerEnd="url(#rb-arr)" />
    <text x="790" y="160" fontSize="9" fill={CTX} fontWeight="600">prompt</text>
    {/* llm → tts */}
    <path d="M 930 200 L 930 220" stroke={CACHE} strokeWidth="1.8" fill="none" markerEnd="url(#rb-arr)" />
    {/* tts → device */}
    <path d="M 1010 250 L 1060 220" stroke="#047857" strokeWidth="1.8" fill="none" markerEnd="url(#rb-arr)" />
    {/* cache → device (绕过 LLM) */}
    <path d="M 460 100 Q 700 60 1100 180" stroke={CACHE} strokeWidth="2" fill="none" markerEnd="url(#rb-arr-cache)" strokeDasharray="6 3" />
    <text x="700" y="56" fontSize="10" fill={CACHE} fontWeight="700">命中即出 audio_url · 跳过 Context + LLM + TTS</text>

    {/* 异步回灌 */}
    <path d="M 930 280 Q 700 360 460 320" stroke="#94A3B8" strokeWidth="1.2" fill="none" markerEnd="url(#rb-arr)" strokeDasharray="3 2" />
    <text x="640" y="358" fontSize="9" fill="#64748B">异步:写 Memory.session_summary</text>
    <path d="M 930 200 Q 600 100 460 90" stroke="#94A3B8" strokeWidth="1.2" fill="none" markerEnd="url(#rb-arr)" strokeDasharray="3 2" />
    <text x="540" y="115" fontSize="9" fill="#64748B">异步:写 Cache.qa_cache</text>
  </svg>
);

// ============================================================
// SVG 2 · Memory UML Class Diagram
// ============================================================
const MemoryClassDiagram = () => (
  <svg viewBox="0 0 1200 480" className="w-full h-auto" style={{ minWidth: 760 }} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="cd-rel" viewBox="0 0 12 12" refX="11" refY="6" markerWidth="9" markerHeight="9" orient="auto">
        <path d="M 0 0 L 12 6 L 0 12 z" fill="none" stroke={MEM} strokeWidth="1.2" />
      </marker>
    </defs>

    {/* ChildProfile (中央) */}
    <g>
      <rect x="460" y="40" width="280" height="180" rx="6" fill="white" stroke={MEM} strokeWidth="2" />
      <rect x="460" y="40" width="280" height="26" rx="6" fill={MEM} />
      <text x="600" y="58" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">ChildProfile · 主表</text>
      <text x="475" y="84" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ child_id : uuid (PK)</text>
      <text x="475" y="100" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ nickname : str</text>
      <text x="475" y="116" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ birthday : date</text>
      <text x="475" y="132" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ age_bucket : enum(3-4|5-6|7-8)</text>
      <text x="475" y="148" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ dialect : enum(普|粤|川|闽…)</text>
      <text x="475" y="164" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ ip_pref : str[ ]</text>
      <text x="475" y="180" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ taboo_words : str[ ]</text>
      <text x="475" y="196" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ parent_voice_id : uuid?</text>
      <text x="475" y="212" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ summary_cache_text : text  ← 每日重生成</text>
    </g>

    {/* SessionSummary */}
    <g>
      <rect x="40" y="280" width="280" height="158" rx="6" fill="white" stroke={MEM} strokeWidth="1.5" />
      <rect x="40" y="280" width="280" height="24" rx="6" fill={MEM} fillOpacity="0.85" />
      <text x="180" y="297" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">SessionSummary</text>
      <text x="55" y="322" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ session_id : uuid (PK)</text>
      <text x="55" y="338" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ child_id : uuid (FK)</text>
      <text x="55" y="354" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ started_at : ts</text>
      <text x="55" y="370" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ duration_s : int</text>
      <text x="55" y="386" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ topic : str</text>
      <text x="55" y="402" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ summary_text : text (≤ 200 字)</text>
      <text x="55" y="418" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ embedding : vector(1024)</text>
      <text x="55" y="434" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ mood : enum(happy|sad|anxious…)</text>
    </g>

    {/* InteractionFact */}
    <g>
      <rect x="360" y="280" width="280" height="158" rx="6" fill="white" stroke={MEM} strokeWidth="1.5" />
      <rect x="360" y="280" width="280" height="24" rx="6" fill={MEM} fillOpacity="0.85" />
      <text x="500" y="297" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">InteractionFact · 事实条目</text>
      <text x="375" y="322" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ fact_id : uuid (PK)</text>
      <text x="375" y="338" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ child_id : uuid (FK)</text>
      <text x="375" y="354" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ fact_text : str (e.g. "喜欢奥特曼")</text>
      <text x="375" y="370" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ fact_type : enum(prefer|family|fear…)</text>
      <text x="375" y="386" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ embedding : vector(1024)</text>
      <text x="375" y="402" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ source_session : uuid (FK)</text>
      <text x="375" y="418" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ confidence : float</text>
      <text x="375" y="434" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM} opacity="0.7">{'// 家长 App 可见 + 可一键删'}</text>
    </g>

    {/* LearnedItem */}
    <g>
      <rect x="680" y="280" width="240" height="158" rx="6" fill="white" stroke={MEM} strokeWidth="1.5" />
      <rect x="680" y="280" width="240" height="24" rx="6" fill={MEM} fillOpacity="0.85" />
      <text x="800" y="297" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">LearnedItem</text>
      <text x="695" y="322" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ item_id : uuid (PK)</text>
      <text x="695" y="338" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ child_id : uuid (FK)</text>
      <text x="695" y="354" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ kind : enum(拼音|汉字|古诗|英语)</text>
      <text x="695" y="370" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ content : str (e.g. "床前明月光")</text>
      <text x="695" y="386" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ mastery : float (0.0–1.0)</text>
      <text x="695" y="402" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ first_seen_at : ts</text>
      <text x="695" y="418" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ last_seen_at : ts</text>
      <text x="695" y="434" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM} opacity="0.7">{'// 周报取这个表'}</text>
    </g>

    {/* EmotionLog */}
    <g>
      <rect x="940" y="280" width="240" height="158" rx="6" fill="white" stroke={MEM} strokeWidth="1.5" />
      <rect x="940" y="280" width="240" height="24" rx="6" fill={MEM} fillOpacity="0.85" />
      <text x="1060" y="297" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">EmotionLog</text>
      <text x="955" y="322" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ log_id : uuid (PK)</text>
      <text x="955" y="338" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ child_id : uuid (FK)</text>
      <text x="955" y="354" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ ts : ts</text>
      <text x="955" y="370" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ emotion : enum</text>
      <text x="955" y="386" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ trigger_tag : str</text>
      <text x="955" y="402" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM_DEEP}>+ confidence : float</text>
      <text x="955" y="418" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM} opacity="0.7">{'// 不存上下文原文'}</text>
      <text x="955" y="434" fontSize="10" fontFamily="ui-monospace, monospace" fill={MEM} opacity="0.7">{'// 只打点 + tag'}</text>
    </g>

    {/* 关系连线 */}
    <line x1="600" y1="220" x2="180" y2="280" stroke={MEM} strokeWidth="1.5" markerEnd="url(#cd-rel)" />
    <text x="320" y="248" fontSize="10" fill={MEM} fontWeight="600">1 — *</text>
    <line x1="600" y1="220" x2="500" y2="280" stroke={MEM} strokeWidth="1.5" markerEnd="url(#cd-rel)" />
    <text x="540" y="252" fontSize="10" fill={MEM} fontWeight="600">1 — *</text>
    <line x1="600" y1="220" x2="800" y2="280" stroke={MEM} strokeWidth="1.5" markerEnd="url(#cd-rel)" />
    <text x="690" y="252" fontSize="10" fill={MEM} fontWeight="600">1 — *</text>
    <line x1="600" y1="220" x2="1060" y2="280" stroke={MEM} strokeWidth="1.5" markerEnd="url(#cd-rel)" />
    <text x="850" y="248" fontSize="10" fill={MEM} fontWeight="600">1 — *</text>

    {/* SessionSummary → InteractionFact source */}
    <line x1="320" y1="370" x2="360" y2="370" stroke={MEM} strokeWidth="1" strokeDasharray="3 2" markerEnd="url(#cd-rel)" />
    <text x="335" y="362" fontSize="9" fill={MEM} fontStyle="italic">source</text>

    {/* 短期 buffer 标注:不在 schema 里 */}
    <g>
      <rect x="40" y="40" width="380" height="80" rx="10" fill="#FAFAFA" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4 3" />
      <text x="55" y="62" fontSize="11" fontWeight="700" fill="#475569">⚠ 短期 buffer 不在此图</text>
      <text x="55" y="80" fontSize="10" fill="#475569">8 轮对话窗 = Redis Sorted Set,严格说属于 Context Builder</text>
      <text x="55" y="96" fontSize="10" fill="#475569">的输入,不是 Memory schema 的一部分。狭义口径下</text>
      <text x="55" y="112" fontSize="10" fill="#475569">Memory 只指上图 4 张表 + ChildProfile。</text>
    </g>
  </svg>
);

// ============================================================
// SVG 3 · Cache 命中流程图
// ============================================================
const CacheHitFlowDiagram = () => (
  <svg viewBox="0 0 1200 320" className="w-full h-auto" style={{ minWidth: 760 }} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="cf-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={CACHE} />
      </marker>
      <marker id="cf-arr2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#94A3B8" />
      </marker>
      <marker id="cf-arr-hit" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#047857" />
      </marker>
    </defs>

    {/* query → normalize */}
    <rect x="20" y="130" width="120" height="60" rx="10" fill="#F1F5F9" stroke="#475569" strokeWidth="1.5" />
    <text x="80" y="155" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">query</text>
    <text x="80" y="173" textAnchor="middle" fontSize="10" fill="#475569">ASR 出文</text>

    <rect x="170" y="130" width="140" height="60" rx="10" fill="#FFF7ED" stroke="#C2410C" strokeWidth="1.5" />
    <text x="240" y="153" textAnchor="middle" fontSize="11" fontWeight="700" fill="#9A3412">① normalize</text>
    <text x="240" y="170" textAnchor="middle" fontSize="9" fill="#C2410C">去停 / 儿化 / 同义</text>
    <text x="240" y="184" textAnchor="middle" fontSize="9" fill="#C2410C">+ partition_key 拼装</text>

    {/* L0 端侧 */}
    <rect x="345" y="40" width="160" height="56" rx="10" fill="#ECFDF5" stroke="#047857" strokeWidth="1.5" />
    <text x="425" y="62" textAnchor="middle" fontSize="11" fontWeight="700" fill="#065F46">② L0 · 端侧</text>
    <text x="425" y="80" textAnchor="middle" fontSize="9" fill="#047857">FAQ / 儿歌 / 故事关键词</text>

    {/* L1 边缘 KV */}
    <rect x="345" y="130" width="160" height="60" rx="10" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1.5" />
    <text x="425" y="153" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1D4ED8">③ L1 · Redis</text>
    <text x="425" y="170" textAnchor="middle" fontSize="9" fill="#2563EB">SHA1 精确 · 30–60 ms</text>
    <text x="425" y="184" textAnchor="middle" fontSize="9" fill="#2563EB">同 partition 内</text>

    {/* L2 语义 */}
    <rect x="345" y="220" width="160" height="60" rx="10" fill="#F5F3FF" stroke="#6D28D9" strokeWidth="1.5" />
    <text x="425" y="243" textAnchor="middle" fontSize="11" fontWeight="700" fill="#5B21B6">④ L2 · pgvector</text>
    <text x="425" y="260" textAnchor="middle" fontSize="9" fill="#6D28D9">BGE cos ≥ 0.92</text>
    <text x="425" y="274" textAnchor="middle" fontSize="9" fill="#6D28D9">filter safety + pii + ver</text>

    {/* 命中即出 */}
    <rect x="540" y="130" width="190" height="60" rx="10" fill="#ECFDF5" stroke="#047857" strokeWidth="2" />
    <text x="635" y="153" textAnchor="middle" fontSize="11" fontWeight="700" fill="#065F46">命中 → audio_url</text>
    <text x="635" y="170" textAnchor="middle" fontSize="9" fill="#047857">直返预合成 TTS</text>
    <text x="635" y="184" textAnchor="middle" fontSize="9" fill="#047857">首字 ~300 ms</text>

    {/* miss → 落 LLM */}
    <rect x="540" y="220" width="190" height="60" rx="10" fill={CACHE_LIGHT} stroke={CACHE} strokeWidth="1.5" />
    <text x="635" y="243" textAnchor="middle" fontSize="11" fontWeight="700" fill={CACHE_DEEP}>未命中 · 落主链路</text>
    <text x="635" y="260" textAnchor="middle" fontSize="9" fill={CACHE}>→ Memory + Context + LLM</text>
    <text x="635" y="274" textAnchor="middle" fontSize="9" fill={CACHE}>(Part IV 时序图)</text>

    {/* 异步回灌 */}
    <rect x="780" y="220" width="190" height="60" rx="10" fill="#FAFAFA" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="4 3" />
    <text x="875" y="243" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">⑥ 异步回灌</text>
    <text x="875" y="260" textAnchor="middle" fontSize="9" fill="#475569">过 15 节安全审核</text>
    <text x="875" y="274" textAnchor="middle" fontSize="9" fill="#475569">+ 预合成 TTS 入库</text>

    {/* 设备播放 */}
    <rect x="780" y="130" width="190" height="60" rx="10" fill="#F1F5F9" stroke="#475569" strokeWidth="1.5" />
    <text x="875" y="155" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">⑤ 设备播放</text>
    <text x="875" y="173" textAnchor="middle" fontSize="9" fill="#475569">边下边播</text>

    {/* 硬过滤 (右上) */}
    <g>
      <rect x="1010" y="40" width="170" height="100" rx="10" fill="#FFE4E6" stroke="#BE123C" strokeWidth="1.5" />
      <text x="1095" y="62" textAnchor="middle" fontSize="11" fontWeight="700" fill="#9F1239">命中前置硬过滤</text>
      <text x="1020" y="82" fontSize="9" fill="#BE123C">· partition 必须严格相等</text>
      <text x="1020" y="98" fontSize="9" fill="#BE123C">· safety_passed = true</text>
      <text x="1020" y="114" fontSize="9" fill="#BE123C">· contains_pii = false</text>
      <text x="1020" y="130" fontSize="9" fill="#BE123C">· content_version 当前</text>
    </g>

    {/* 流程线 */}
    <path d="M 140 160 L 170 160" stroke="#475569" strokeWidth="1.8" fill="none" markerEnd="url(#cf-arr2)" />
    <path d="M 310 145 Q 325 95 345 70" stroke={CACHE} strokeWidth="1.8" fill="none" markerEnd="url(#cf-arr)" />
    <path d="M 310 160 L 345 160" stroke={CACHE} strokeWidth="1.8" fill="none" markerEnd="url(#cf-arr)" />
    <path d="M 310 175 Q 325 220 345 245" stroke={CACHE} strokeWidth="1.8" fill="none" markerEnd="url(#cf-arr)" />

    <path d="M 505 70 Q 522 100 540 145" stroke="#047857" strokeWidth="1.5" fill="none" markerEnd="url(#cf-arr-hit)" />
    <path d="M 505 160 L 540 160" stroke="#047857" strokeWidth="2" fill="none" markerEnd="url(#cf-arr-hit)" />
    <path d="M 505 245 Q 525 220 540 195" stroke="#047857" strokeWidth="1.5" fill="none" markerEnd="url(#cf-arr-hit)" />
    <text x="510" y="138" fontSize="9" fill="#047857" fontWeight="600">命中</text>

    <path d="M 505 250 L 540 250" stroke="#94A3B8" strokeWidth="1.5" fill="none" markerEnd="url(#cf-arr2)" />
    <text x="510" y="240" fontSize="9" fill="#475569">未命中 ↓</text>
    <path d="M 730 160 L 780 160" stroke="#047857" strokeWidth="2" fill="none" markerEnd="url(#cf-arr-hit)" />
    <path d="M 730 250 L 780 250" stroke={CACHE} strokeWidth="1.8" fill="none" markerEnd="url(#cf-arr)" />
    <path d="M 875 220 Q 875 200 875 190" stroke="#94A3B8" strokeWidth="1.2" fill="none" strokeDasharray="3 2" markerEnd="url(#cf-arr2)" />
  </svg>
);

// ============================================================
// SVG 4 · 端到端时序图(精简,聚焦 3 组件协同)
// ============================================================
const EndToEndSequenceDiagram = () => (
  <svg viewBox="0 0 1200 520" className="w-full h-auto" style={{ minWidth: 800 }} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="se-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
      </marker>
      <marker id="se-arr-h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#047857" />
      </marker>
      <marker id="se-arr-async" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#94A3B8" />
      </marker>
    </defs>

    {/* lifeline headers */}
    {[
      { x: 80, label: '设备', color: '#047857', bg: '#ECFDF5' },
      { x: 240, label: '编排层 L3', color: '#475569', bg: '#F1F5F9' },
      { x: 400, label: 'Cache', color: CACHE, bg: CACHE_LIGHT },
      { x: 560, label: 'Memory', color: MEM, bg: MEM_LIGHT },
      { x: 720, label: 'Context', color: CTX, bg: CTX_LIGHT },
      { x: 880, label: 'LLM', color: '#B45309', bg: CACHE_LIGHT },
      { x: 1040, label: 'TTS', color: '#047857', bg: '#ECFDF5' },
    ].map((a) => (
      <g key={a.label}>
        <rect x={a.x - 50} y="20" width="100" height="32" rx="8" fill={a.bg} stroke={a.color} strokeWidth="1.5" />
        <text x={a.x} y="40" textAnchor="middle" fontSize="11" fontWeight="700" fill={a.color}>{a.label}</text>
        <line x1={a.x} y1="52" x2={a.x} y2="500" stroke={a.color} strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
      </g>
    ))}

    {/* —— 命中分支(35%)—— 顶部 */}
    <text x="20" y="80" fontSize="10" fontWeight="700" fill="#047857">命中分支 · ~35% 流量</text>

    <line x1="80" y1="95" x2="240" y2="95" stroke="#475569" strokeWidth="1.5" markerEnd="url(#se-arr)" />
    <text x="100" y="88" fontSize="9" fill="#334155">ASR 流式出文</text>
    <line x1="240" y1="115" x2="400" y2="115" stroke="#475569" strokeWidth="1.5" markerEnd="url(#se-arr)" />
    <text x="260" y="108" fontSize="9" fill="#334155">lookup(query, partition)</text>

    {/* 内部命中 */}
    <rect x="386" y="125" width="28" height="50" fill={CACHE_LIGHT} stroke={CACHE} strokeWidth="1" />
    <text x="420" y="140" fontSize="9" fill={CACHE_DEEP}>L1 SHA1 ↓</text>
    <text x="420" y="154" fontSize="9" fill={CACHE_DEEP}>L2 cosine ≥ 0.92</text>
    <text x="420" y="168" fontSize="9" fill={CACHE_DEEP}>safety + pii + ver</text>

    <line x1="400" y1="190" x2="240" y2="190" stroke="#047857" strokeWidth="1.8" markerEnd="url(#se-arr-h)" />
    <text x="260" y="183" fontSize="9" fill="#047857" fontWeight="600">{'{ text, audio_url }'}</text>
    <line x1="240" y1="210" x2="80" y2="210" stroke="#047857" strokeWidth="1.8" markerEnd="url(#se-arr-h)" />
    <text x="100" y="203" fontSize="9" fill="#047857" fontWeight="600">audio_url(直返,跳过 Memory + Context + LLM + TTS)</text>

    {/* 分隔线 */}
    <line x1="20" y1="240" x2="1180" y2="240" stroke="#CBD5E1" strokeDasharray="6 4" />

    {/* —— 未命中分支(65%)—— */}
    <text x="20" y="265" fontSize="10" fontWeight="700" fill={CACHE_DEEP}>未命中分支 · ~65% 流量(走完整链路)</text>

    <line x1="80" y1="280" x2="240" y2="280" stroke="#475569" strokeWidth="1.5" markerEnd="url(#se-arr)" />
    <text x="100" y="273" fontSize="9" fill="#334155">ASR 流式出文</text>

    <line x1="240" y1="298" x2="400" y2="298" stroke="#475569" strokeWidth="1.5" markerEnd="url(#se-arr)" />
    <text x="260" y="291" fontSize="9" fill="#334155">lookup → null</text>

    <line x1="240" y1="318" x2="560" y2="318" stroke="#475569" strokeWidth="1.5" markerEnd="url(#se-arr)" />
    <text x="270" y="311" fontSize="9" fill={MEM}>search(child_id, query) [并发]</text>

    <line x1="560" y1="338" x2="240" y2="338" stroke={MEM} strokeWidth="1.5" markerEnd="url(#se-arr)" />
    <text x="280" y="331" fontSize="9" fill={MEM} fontWeight="600">ProfileSlice {'{ summary_text(150t), facts[], emotion_hint }'}</text>

    <line x1="240" y1="358" x2="720" y2="358" stroke="#475569" strokeWidth="1.5" markerEnd="url(#se-arr)" />
    <text x="280" y="351" fontSize="9" fill={CTX}>build(child_id, query, profile, recent_8)</text>

    <line x1="720" y1="378" x2="240" y2="378" stroke={CTX} strokeWidth="1.5" markerEnd="url(#se-arr)" />
    <text x="280" y="371" fontSize="9" fill={CTX} fontWeight="600">final_prompt(~1800t · 前 470t prefix-cached)</text>

    <line x1="240" y1="398" x2="880" y2="398" stroke="#475569" strokeWidth="1.5" markerEnd="url(#se-arr)" />
    <text x="280" y="391" fontSize="9" fill={CACHE_DEEP}>LLM 流式 SSE</text>

    <line x1="880" y1="418" x2="1040" y2="418" stroke="#475569" strokeWidth="1.5" markerEnd="url(#se-arr)" />
    <text x="900" y="411" fontSize="9" fill="#047857">边出 token 边推 TTS</text>

    <line x1="1040" y1="438" x2="80" y2="438" stroke="#475569" strokeWidth="1.5" markerEnd="url(#se-arr)" />
    <text x="120" y="431" fontSize="9" fill="#047857" fontWeight="600">流式 audio frame</text>

    {/* 异步回灌 */}
    <line x1="240" y1="468" x2="400" y2="468" stroke="#94A3B8" strokeWidth="1.2" strokeDasharray="3 2" markerEnd="url(#se-arr-async)" />
    <text x="260" y="461" fontSize="9" fill="#64748B">异步:Cache.write(audio 预合成 + 入库)</text>

    <line x1="240" y1="488" x2="560" y2="488" stroke="#94A3B8" strokeWidth="1.2" strokeDasharray="3 2" markerEnd="url(#se-arr-async)" />
    <text x="270" y="481" fontSize="9" fill="#64748B">异步:Memory.write_session(豆包 lite 抽取)</text>
  </svg>
);

// ============================================================
// 数据
// ============================================================
interface PromptSlice {
  slice: string;
  source: string;
  tokens: string;
  cached: boolean;
  example: string;
}

const PROMPT_SLICES: PromptSlice[] = [
  { slice: '系统人格(基础)', source: '静态 · 全孩共享', tokens: '~200', cached: true, example: '"你是 Lula,温柔陪伴 3-8 岁孩子的伙伴…"' },
  { slice: '分龄人格(详见 14)', source: '按 age_bucket 切片', tokens: '~150', cached: true, example: '5-6:句长 ≤ 14 字,优先比喻,引导提问 1 次/3 轮' },
  { slice: '安全四层硬约束(详见 15)', source: '静态 · 黑名单 + 重写', tokens: '~120', cached: true, example: '"涉及死亡/暴力/医疗 → 走重写路径"' },
  { slice: '该孩子画像摘要', source: '动态 · MemoryService.search', tokens: '~150', cached: false, example: '"5 岁男孩,昵称小米,粤语,爱奥特曼+恐龙;曾问爷爷去世→走安抚分支"' },
  { slice: '最近 8 轮对话', source: '动态 · Redis sorted set', tokens: '~600–1200', cached: false, example: '前 8 轮原文,含孩子打断 / 澄清' },
  { slice: '当前 query', source: '本轮 ASR 输出', tokens: '~20–80', cached: false, example: '"那恐龙是怎么死掉的呀"' },
];

interface CacheTier {
  tier: string;
  store: string;
  match: string;
  latency: string;
  bg: string;
  color: string;
}
const CACHE_TIERS: CacheTier[] = [
  { tier: 'L0 · 端侧', store: 'ESP32-S3 NOR + SD', match: '内置 80 FAQ + 200 儿歌 + 50 故事 · 关键词路由', latency: '~200 ms · 离线兜底', bg: '#ECFDF5', color: '#047857' },
  { tier: 'L1 · 边缘 KV', store: 'Redis · 三区', match: 'normalize(query) → SHA1 精确 · 同 partition', latency: '~30–60 ms', bg: '#EFF6FF', color: '#2563EB' },
  { tier: 'L2 · 语义命中', store: 'pgvector · ivfflat / hnsw', match: 'BGE-large(1024d) cos ≥ 0.92 · 同 partition + filter', latency: '~80–150 ms', bg: '#F5F3FF', color: '#6D28D9' },
];

interface MvpRow {
  phase: string;
  ctx: string;
  mem: string;
  cache: string;
}
const MVP_PHASES: MvpRow[] = [
  { phase: 'M2 · 内测', ctx: '8 轮 buffer + 静态 prompt(无画像)', mem: '不上', cache: 'L0 + L1 精确命中(预热 1000 条)' },
  { phase: 'M4 · DVT', ctx: '+ 画像摘要注入(150 token)', mem: 'mem0 SDK + ChildProfile + SessionSummary 异步抽取', cache: '+ 预合成 TTS audio_url' },
  { phase: 'M6 · PVT', ctx: 'prefix cache 优化稳定', mem: '+ InteractionFact 去重 + LearnedItem + 周报 cron', cache: '+ L2 语义命中(目标 25%+)' },
  { phase: 'V1.5 后', ctx: '动态预算 · 分龄人格 A/B', mem: '+ EmotionLog 趋势 + 跨主题 facts(评估 Letta)', cache: '+ 内容引擎版本失效 + 多 partition 共享分析' },
];

// ============================================================
// 小工具组件
// ============================================================
const PartHeader = ({ icon: Icon, color, kicker, title, sub }: { icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; color: string; kicker: string; title: string; sub: string }) => (
  <div className="flex items-start gap-3 mb-4 pt-3" style={{ borderTop: `2px solid ${color}33` }}>
    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'white', border: `1.5px solid ${color}` }}>
      <Icon className="w-5 h-5" style={{ color }} />
    </div>
    <div>
      <div className="text-[10px] font-bold tracking-[0.25em] mb-0.5" style={{ color, opacity: 0.7 }}>{kicker}</div>
      <div className="text-lg font-bold leading-tight" style={{ color }}>{title}</div>
      <div className="text-[12px] mt-1 text-neutral-600">{sub}</div>
    </div>
  </div>
);

const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-2xl p-4 my-3 font-mono text-[11px] leading-[1.7] overflow-x-auto whitespace-pre" style={{ backgroundColor: '#1F2937', color: '#F9FAFB' }}>
    {children}
  </div>
);

const OssRow = ({ tone, name, license, decision, decisionTone, why }: { tone: string; name: string; license: string; decision: string; decisionTone: 'use' | 'fork' | 'skip'; why: string }) => {
  const tagBg = decisionTone === 'use' ? '#ECFDF5' : decisionTone === 'fork' ? '#FEF3C7' : '#F3F4F6';
  const tagColor = decisionTone === 'use' ? '#047857' : decisionTone === 'fork' ? '#B45309' : '#525252';
  return (
    <tr style={{ backgroundColor: 'white' }}>
      <td className="px-3 py-2.5 align-top font-bold whitespace-nowrap" style={{ color: tone }}>{name}<div className="text-[10px] font-normal opacity-70">{license}</div></td>
      <td className="px-3 py-2.5 align-top whitespace-nowrap">
        <span className="text-[11px] font-bold rounded-full px-2 py-0.5" style={{ backgroundColor: tagBg, color: tagColor }}>{decision}</span>
      </td>
      <td className="px-3 py-2.5 align-top text-[12px] text-neutral-700 leading-relaxed">{why}</td>
    </tr>
  );
};

// ============================================================
// 主组件
// ============================================================
export const MemoryCacheSection = () => (
  <Card id="memory-cache" delay={0.6}>
    <SectionLabel>20B · Context / Memory / Cache · 三层职责,一套基建</SectionLabel>
    <SectionTitle>
      <Database className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
      把 prompt 拼装、孩子画像、问答缓存彻底分开做——边界清晰才好测、好换、好省钱
    </SectionTitle>

    {/* 概念区分:为什么三件事必须先讲清楚 */}
    <div className="rounded-2xl p-5 mb-7" style={{ backgroundColor: ACCENT_LIGHT }}>
      <div className="text-[11px] font-bold tracking-[0.25em] uppercase mb-2" style={{ color: ACCENT }}>
        术语口径 · 为什么要先把"memory"这个词拆掉
      </div>
      <p className="text-sm leading-relaxed mb-3" style={{ color: ACCENT }}>
        业界(LangChain / mem0 / Letta)常把短期对话窗也叫 memory,但更严谨的工程化口径(Anthropic / Cognition infra 系)
        把<b>装配产物</b>(Context)和<b>持久化 store</b>(Memory)分开。我们采用后者,
        理由是<b>责任边界更清</b>——孩子说"昵称错了"是 Memory 的 bug;问"为什么天是蓝的"答错是 Cache 的 bug;
        前后矛盾或越界是 Context 装配的 bug,<b>排查可以直接定位到组件而不是混在一起</b>。
      </p>
      <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#2563EB22' }}>
        <table className="w-full text-[12px]" style={{ minWidth: 720 }}>
          <thead>
            <tr style={{ backgroundColor: '#DBEAFE' }}>
              <th className="text-left px-3 py-2 font-bold whitespace-nowrap" style={{ color: ACCENT }}>对象</th>
              <th className="text-left px-3 py-2 font-bold" style={{ color: ACCENT }}>是什么</th>
              <th className="text-left px-3 py-2 font-bold" style={{ color: ACCENT }}>不是什么</th>
              <th className="text-left px-3 py-2 font-bold whitespace-nowrap" style={{ color: ACCENT }}>生命周期</th>
              <th className="text-left px-3 py-2 font-bold whitespace-nowrap" style={{ color: ACCENT }}>跨用户?</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: 'white' }}>
              <td className="px-3 py-2.5 align-top font-bold" style={{ color: CTX }}>Context</td>
              <td className="px-3 py-2.5 align-top text-neutral-700">每轮 LLM 调用塞进 prompt 的 token——装配产物</td>
              <td className="px-3 py-2.5 align-top text-neutral-600">不是存储;不持久化任何字段</td>
              <td className="px-3 py-2.5 align-top text-neutral-700">单次调用,瞬时</td>
              <td className="px-3 py-2.5 align-top text-neutral-700">仅本孩</td>
            </tr>
            <tr style={{ backgroundColor: '#FAFAFA' }}>
              <td className="px-3 py-2.5 align-top font-bold" style={{ color: MEM }}>Memory</td>
              <td className="px-3 py-2.5 align-top text-neutral-700">"这个孩子是谁"的持久化 store——画像 / 摘要 / 学习项 / 情绪</td>
              <td className="px-3 py-2.5 align-top text-neutral-600">不是 Q→A 缓存;只存关于孩子的事实</td>
              <td className="px-3 py-2.5 align-top text-neutral-700">随账号生命周期</td>
              <td className="px-3 py-2.5 align-top text-neutral-700">仅本孩,家长可读+可删</td>
            </tr>
            <tr style={{ backgroundColor: 'white' }}>
              <td className="px-3 py-2.5 align-top font-bold" style={{ color: CACHE }}>Semantic Cache</td>
              <td className="px-3 py-2.5 align-top text-neutral-700">通用 query→answer KV(预合成 audio)</td>
              <td className="px-3 py-2.5 align-top text-neutral-600">不个性化;不存任何 PII</td>
              <td className="px-3 py-2.5 align-top text-neutral-700">按 content_version 失效</td>
              <td className="px-3 py-2.5 align-top text-neutral-700">同 (age, dialect, persona) 内共享</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-[12px] mt-3 leading-relaxed" style={{ color: ACCENT }}>
        <b>关键关系:</b>每轮 Memory 与 Cache 都向 Context 输入;Context 装配后才进 LLM。
        <b>Cache 命中可以绕过 Context + LLM 直返 audio_url</b>(省钱核心),
        <b>Memory 永远不绕过</b>——它的输出必须进 prompt 才能起作用。
      </div>
    </div>

    {/* SVG 1 · 责任边界 */}
    <div className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: ACCENT }}>
      Component Diagram · 三者职责边界 + 数据流向
    </div>
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 mb-8 overflow-x-auto">
      <ResponsibilityDiagram />
    </div>

    {/* ============================== Part I · CONTEXT ============================== */}
    <PartHeader
      icon={MessageSquare}
      color={CTX}
      kicker="PART I · CONTEXT"
      title="每轮 prompt 怎么搭——瞬时,不存,只装配"
      sub="Context Builder 是一个无状态的纯函数:吃 child_id + query,吐 final prompt + token 预算。它不持有任何数据,所有数据从 Memory 和 Redis 短期 buffer 拿。"
    />

    {/* A · API */}
    <div className="text-[11px] font-semibold mb-1.5 tracking-wider" style={{ color: CTX }}>A · ContextBuilder · 公共 API(无状态)</div>
    <CodeBlock>{`class ContextBuilder:
    """瞬时装配器 · 无任何持久状态"""

    def build(
        child_id: str,
        query: str,
        age_bucket: AgeBucket,
        dialect: Dialect,
    ) -> tuple[Prompt, TokenBudget]:
        # 1. 静态片段(都进豆包 prefix cache · 1/10 价)
        head = SYSTEM_BASE + AGE_PERSONA[age_bucket] + SAFETY_RULES   # ~470 t

        # 2. 动态片段
        profile = MemoryService.search(child_id, query, top_k=3)     # ProfileSlice ~150 t
        recent  = ConversationBuffer.last_n(child_id, n=8)            # ~600–1200 t

        prompt = head + profile.summary_text + recent + query
        return prompt, count_tokens(prompt)`}</CodeBlock>

    {/* B · 拼装表 */}
    <div className="text-[11px] font-semibold mt-5 mb-2 tracking-wider" style={{ color: CTX }}>B · 每轮 prompt 拼装(token 预算 ~1500–2000)</div>
    <p className="text-[12px] text-neutral-600 leading-relaxed mb-3">
      <b>核心技巧</b>:把<b>静态片段排在 prompt 的最前面</b>(~470 token),让豆包 1.5-pro 的 prompt prefix cache 命中,
      input token 价格按 1/10 计费;动态片段(画像 + 8 轮 + query)放在尾部,每轮重算。
      这样既拿到了"千人千面"的个性化,又拿到了 prefix cache 的成本红利。
    </p>
    <div className="overflow-x-auto rounded-2xl border mb-4" style={{ borderColor: CTX_BORDER }}>
      <table className="w-full text-[12px]" style={{ minWidth: 720 }}>
        <thead>
          <tr style={{ backgroundColor: CTX_LIGHT }}>
            <th className="text-left px-3 py-2.5 font-bold whitespace-nowrap" style={{ color: CTX }}>序</th>
            <th className="text-left px-3 py-2.5 font-bold whitespace-nowrap" style={{ color: CTX }}>片段</th>
            <th className="text-left px-3 py-2.5 font-bold whitespace-nowrap" style={{ color: CTX }}>来源</th>
            <th className="text-left px-3 py-2.5 font-bold whitespace-nowrap" style={{ color: CTX }}>token</th>
            <th className="text-left px-3 py-2.5 font-bold whitespace-nowrap" style={{ color: CTX }}>prefix cache</th>
            <th className="text-left px-3 py-2.5 font-bold" style={{ color: CTX }}>示例</th>
          </tr>
        </thead>
        <tbody>
          {PROMPT_SLICES.map((s, i) => (
            <tr key={s.slice} style={{ backgroundColor: i % 2 ? 'white' : '#FAFAFA' }}>
              <td className="px-3 py-2 font-semibold align-top text-neutral-500">{i + 1}</td>
              <td className="px-3 py-2 align-top font-semibold" style={{ color: CTX }}>{s.slice}</td>
              <td className="px-3 py-2 align-top text-neutral-700">{s.source}</td>
              <td className="px-3 py-2 align-top text-neutral-700 font-mono text-[11px]">{s.tokens}</td>
              <td className="px-3 py-2 align-top">
                {s.cached
                  ? <span className="text-[11px] font-semibold rounded-full px-2 py-0.5" style={{ color: '#047857', backgroundColor: '#ECFDF5' }}>命中(1/10 价)</span>
                  : <span className="text-[11px] font-semibold rounded-full px-2 py-0.5" style={{ color: '#9A3412', backgroundColor: '#FFEDD5' }}>动态(原价)</span>}
              </td>
              <td className="px-3 py-2 align-top text-neutral-600 italic">{s.example}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* C · 开源决策 */}
    <div className="text-[11px] font-semibold mt-5 mb-2 tracking-wider" style={{ color: CTX }}>C · 开源决策 · Context 这层不需要框架</div>
    <div className="overflow-x-auto rounded-2xl border mb-8" style={{ borderColor: CTX_BORDER }}>
      <table className="w-full text-[12px]" style={{ minWidth: 720 }}>
        <thead>
          <tr style={{ backgroundColor: CTX_LIGHT }}>
            <th className="text-left px-3 py-2.5 font-bold whitespace-nowrap" style={{ color: CTX }}>候选</th>
            <th className="text-left px-3 py-2.5 font-bold whitespace-nowrap" style={{ color: CTX }}>决策</th>
            <th className="text-left px-3 py-2.5 font-bold" style={{ color: CTX }}>为什么</th>
          </tr>
        </thead>
        <tbody>
          <OssRow tone={CTX} name="LangChain PromptTemplate" license="MIT" decision="不用" decisionTone="skip" why="为了模板化拼装引入全家桶不值;它的 chain 抽象会让我们的 prefix-cache 优化(必须严格控制 prompt 顺序)变得脆弱。" />
          <OssRow tone={CTX} name="LlamaIndex PromptSynthesizer" license="MIT" decision="不用" decisionTone="skip" why="同上;且 LlamaIndex 偏 RAG 检索场景,我们这里是固定 schema 拼装。" />
          <OssRow tone={CTX} name="自研 ~150 行 Python" license="—" decision="直接用" decisionTone="use" why="模板化拼装 = f-string + 几个常量。可控、可测、可在单元测试里精确断言 token 数和 prefix 字节序——这点对成本很关键。" />
        </tbody>
      </table>
    </div>

    {/* ============================== Part II · MEMORY ============================== */}
    <PartHeader
      icon={Database}
      color={MEM}
      kicker="PART II · MEMORY"
      title="这个孩子是谁——跨会话持久化,个性化,隐私敏感"
      sub="Memory 是孩子画像的 store · 包含 ChildProfile 主表 + 4 张副表 · 写入靠异步抽取 · 读出给 Context 拼 prompt 用 · 永远不绕过 Context 直接进 LLM。"
    />

    {/* A · UML class diagram */}
    <div className="text-[11px] font-semibold mb-2 tracking-wider" style={{ color: MEM }}>A · UML 类图 · 5 张表的实体关系</div>
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 mb-5 overflow-x-auto">
      <MemoryClassDiagram />
    </div>

    {/* B · MemoryService API */}
    <div className="text-[11px] font-semibold mt-2 mb-2 tracking-wider" style={{ color: MEM }}>B · MemoryService · 公共 API</div>
    <CodeBlock>{`class MemoryService:
    """跨会话画像 store · 仅暴露这 5 个方法,Context 层禁止绕过它读 DB"""

    # —— 读 ——
    def search(child_id: str, query: str, top_k: int = 3) -> ProfileSlice:
        """组装"画像摘要"喂给 Context · 用 query embedding 召回相关 facts"""

    def get_profile(child_id: str) -> ChildProfile:
        """家长 App 后台展示用 · 不进 Context"""

    # —— 写(全部异步,主链路不阻塞)——
    def write_session(child_id: str, summary: SessionSummary) -> None:
        """会话边界检测后,豆包 lite 异步抽取 + 写入"""

    def update_facts(child_id: str, facts: list[Fact]) -> None:
        """从 SessionSummary 派生事实,做去重 + 冲突合并(沿用 mem0 算法)"""

    # —— 删(家长 App 暴露)——
    def delete_fact(child_id: str, fact_id: str) -> None:
        """合规要求 · 一键删除某条事实(PIPL / 儿童条例)"""`}</CodeBlock>

    {/* C · ProfileSlice 结构 */}
    <div className="text-[11px] font-semibold mt-5 mb-2 tracking-wider" style={{ color: MEM }}>C · ProfileSlice · 喂给 Context 的"画像摘要"长什么样(150 token 上限)</div>
    <CodeBlock>{`# 由 MemoryService.search 在每轮调用时实时拼装
{
  "summary_text": "5 岁男孩,昵称小米,粤语为主;爱奥特曼+恐龙;
                   3 周前问过去世的爷爷 2 次→走安抚分支;本周午睡前情绪偏焦虑",
  "facts": [
    {"type": "prefer", "text": "喜欢奥特曼", "confidence": 0.9},
    {"type": "family", "text": "爷爷已去世", "confidence": 1.0, "is_taboo": true}
  ],
  "emotion_hint": "anxious_pre_nap",
  "token_count": 142
}`}</CodeBlock>
    <p className="text-[11px] text-neutral-500 leading-relaxed mb-5">
      <b>实现要点</b>:summary_text 是<b>豆包 lite 每天 02:00 cron 重新生成一次</b>,缓存到 Redis 当日热取(命中即返,不阻塞)。
      facts 是按 query embedding 实时召回 top-3。这种"日级摘要 + 轮级 facts"的两段拼装,既稳定又能体现新动向。
    </p>

    {/* D · 异步抽取管线 */}
    <div className="text-[11px] font-semibold mt-2 mb-2 tracking-wider" style={{ color: MEM }}>D · 异步抽取管线 · 全部不阻塞主链路</div>
    <div className="grid md:grid-cols-3 gap-3 mb-5">
      <div className="rounded-2xl p-4 border" style={{ backgroundColor: MEM_LIGHT, borderColor: MEM_BORDER }}>
        <div className="text-[11px] font-bold mb-1.5" style={{ color: MEM }}>① 会话边界</div>
        <ul className="text-[12px] space-y-1 leading-relaxed" style={{ color: MEM_DEEP }}>
          <li>• 静音 ≥ 20s</li>
          <li>• 设备熄灯 / app 关</li>
          <li>• 手动"换个话题"</li>
        </ul>
      </div>
      <div className="rounded-2xl p-4 border" style={{ backgroundColor: MEM_LIGHT, borderColor: MEM_BORDER }}>
        <div className="text-[11px] font-bold mb-1.5" style={{ color: MEM }}>② 抽取(豆包 lite)</div>
        <ul className="text-[12px] space-y-1 leading-relaxed" style={{ color: MEM_DEEP }}>
          <li>• 学到什么 → LearnedItem</li>
          <li>• 关心什么 → InteractionFact</li>
          <li>• 情绪信号 → EmotionLog</li>
          <li>• 固定 JSON schema 输出</li>
        </ul>
      </div>
      <div className="rounded-2xl p-4 border" style={{ backgroundColor: MEM_LIGHT, borderColor: MEM_BORDER }}>
        <div className="text-[11px] font-bold mb-1.5" style={{ color: MEM }}>③ 写回 + 周报</div>
        <ul className="text-[12px] space-y-1 leading-relaxed" style={{ color: MEM_DEEP }}>
          <li>• 事实去重(沿用 mem0)</li>
          <li>• 02:00 cron 重生 summary</li>
          <li>• 周日 02:00 cron 出周报草稿(详见 17)</li>
        </ul>
      </div>
    </div>

    {/* E · 隐私边界 */}
    <div className="rounded-2xl p-5 mb-5 border flex flex-col md:flex-row gap-4" style={{ backgroundColor: '#FFE4E6', borderColor: '#BE123C33' }}>
      <Lock className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#BE123C' }} />
      <div className="text-[12px] leading-relaxed" style={{ color: '#9F1239' }}>
        <div className="font-bold mb-2" style={{ color: '#BE123C' }}>E · 隐私边界 · 与产品承诺合一</div>
        <ul className="space-y-1.5">
          <li>• <b>不存原始对话文本</b>到画像层——只存抽象事实("喜欢奥特曼"),不存"昨天 19:32 说妈妈又凶我了"。原始转写仅在短期 8 轮 buffer 内。</li>
          <li>• <b>家长 App 可读 + 一键删</b>(<code className="font-mono text-[11px]">delete_fact()</code> 直接暴露)——PIPL / 儿童条例硬要求,也是父母信任的关键。</li>
          <li>• <b>忌讳词触发安抚分支但不进 facts</b>——孩子提到去世亲人 / 校园暴力,标 mention(详见 15),具体上下文不进 InteractionFact。</li>
          <li>• <b>设备端不存任何画像</b>——离线兜底只能放 L0 静态内容,设备丢了不泄露孩子隐私。</li>
        </ul>
      </div>
    </div>

    {/* F · 开源决策 */}
    <div className="text-[11px] font-semibold mt-2 mb-2 tracking-wider flex items-center gap-2" style={{ color: MEM }}>
      <GitBranch className="w-4 h-4" /> F · 开源决策 · Memory 这层用什么
    </div>
    <div className="overflow-x-auto rounded-2xl border mb-8" style={{ borderColor: MEM_BORDER }}>
      <table className="w-full text-[12px]" style={{ minWidth: 720 }}>
        <thead>
          <tr style={{ backgroundColor: MEM_LIGHT }}>
            <th className="text-left px-3 py-2.5 font-bold whitespace-nowrap" style={{ color: MEM }}>候选</th>
            <th className="text-left px-3 py-2.5 font-bold whitespace-nowrap" style={{ color: MEM }}>决策</th>
            <th className="text-left px-3 py-2.5 font-bold" style={{ color: MEM }}>为什么</th>
          </tr>
        </thead>
        <tbody>
          <OssRow tone={MEM} name="mem0" license="Apache-2.0 · github.com/mem0ai/mem0" decision="直接用 SDK" decisionTone="use" why="它在事实抽取 prompt 模板和事实去重/冲突合并上做得最成熟。我们直接 pip install + 调它的 add()/search() —— 但底层 store 配成自己的 Postgres + pgvector(不用其默认 Qdrant/Chroma),这样和 ChildProfile 同库,事务一致。" />
          <OssRow tone={MEM} name="Letta(原 MemGPT)" license="Apache-2.0" decision="不用现在" decisionTone="skip" why="它的 working / archival memory 概念框架值得借鉴,但带一整套 server + agent runtime,太重(我们要 1.2s 端到端预算)。V1.5 后评估其 archival 部分。" />
          <OssRow tone={MEM} name="Zep / Graphiti" license="Apache-2.0" decision="不用现在" decisionTone="skip" why={'temporal knowledge graph 的能力(处理"上次说讨厌青菜,现在说喜欢"这种漂移)很有意思,但 v1 用不上。放 V2 路线图。'} />
          <OssRow tone={MEM} name="PostgreSQL + pgvector" license="PostgreSQL License · 开源" decision="直接用" decisionTone="use" why="ChildProfile + SessionSummary + InteractionFact + LearnedItem + EmotionLog 全部一库,embedding 列用 pgvector ivfflat 索引。运维一套 PG 比单独跑 Qdrant/Milvus 简单一个量级。" />
          <OssRow tone={MEM} name="BGE-large-zh-v1.5" license="MIT · 智源" decision="直接用" decisionTone="use" why="中文 embedding 当前最佳开源之一,1024d。本地推理 / 火山方舟均可。本身免费。" />
        </tbody>
      </table>
    </div>

    {/* ============================== Part III · CACHE ============================== */}
    <PartHeader
      icon={Sparkles}
      color={CACHE}
      kicker="PART III · SEMANTIC CACHE"
      title="通用问答的命中加速器——跨用户共享,严格分区,与孩子无关"
      sub="3-8 岁问句集中度极高(Top 200 ~35% 流量) · 命中即跳过 Memory + Context + LLM,直返预合成 audio_url · 这是 ¥39/年订阅(详见 23)能跑通的核心变量。"
    />

    {/* A · qa_cache schema */}
    <div className="text-[11px] font-semibold mb-2 tracking-wider" style={{ color: CACHE }}>A · qa_cache · 数据 schema</div>
    <CodeBlock>{`qa_cache {
    id                uuid pk
    query_normalized  text         -- 标准化后(去停 / 儿化 / 同义)
    query_embedding   vector(1024) -- BGE-large-zh
    partition_key     (age_bucket, dialect, persona)  -- 强制不跨

    answer_text       text
    audio_url         s3://...     -- 入库时即预合成 TTS,命中直返
    safety_passed     bool         -- 必须 true 才能命中(过 15 节)
    contains_pii      bool         -- true 永不命中

    hit_count / last_hit_at / created_at / expires_at
    content_version   int          -- 内容引擎(18)版本变即批量失效
}`}</CodeBlock>

    {/* B · CacheService API */}
    <div className="text-[11px] font-semibold mt-5 mb-2 tracking-wider" style={{ color: CACHE }}>B · CacheService · 公共 API</div>
    <CodeBlock>{`class CacheService:
    """通用 Q→A KV · 严格分区 · 不存任何 PII"""

    def lookup(query: str, partition: PartitionKey) -> Optional[CachedAnswer]:
        """同 partition 内才返;失败返 None,主链路继续"""

    def write(query: str, answer: str, audio_url: str, partition: PartitionKey) -> None:
        """异步 · 必须先过 15 节安全审核 + 预合成 TTS 才入库"""

    def invalidate(content_version: int) -> int:
        """内容引擎(18)版本变 → 批量失效该版本所有命中"""

    # 类型
    PartitionKey  = (age_bucket: AgeBucket, dialect: Dialect, persona: Persona)
    CachedAnswer  = (text: str, audio_url: str, hit_count: int)`}</CodeBlock>

    {/* C · 命中评分伪代码 */}
    <div className="text-[11px] font-semibold mt-5 mb-2 tracking-wider flex items-center gap-2" style={{ color: CACHE }}>
      <Code className="w-4 h-4" /> C · lookup() 内部实现伪代码 · 命中评分 + 硬过滤
    </div>
    <CodeBlock>{`def lookup(query: str, partition: PartitionKey) -> Optional[CachedAnswer]:
    norm = normalize(query)  # 去停 / 儿化 / 同义词

    # —— L1 · SHA1 精确(30–60 ms,~12–18% 命中)——
    key = f"qa:{partition.hash()}:{sha1(norm)}"
    if hit := redis.get(key):
        return hit  # 直接返,不查 L2

    # —— L2 · 语义命中(80–150 ms,~10–18% 命中)——
    emb = bge_large_zh.embed(norm)
    candidates = pgvector.search(
        table       = "qa_cache",
        embedding   = emb,
        filter      = {
            "partition_key":   partition,           # 严格相等,绝不跨龄/跨方言
            "safety_passed":   True,                # 过了 15 节四层
            "contains_pii":    False,               # PII 一票否决
            "content_version": CURRENT_CONTENT_VER  # 16 节当前版本
        },
        limit       = 3,
        order_by    = "hit_count DESC"  # LRU + 热度优先
    )
    if candidates and candidates[0].cosine >= 0.92:
        return candidates[0]
    return None  # 未命中,主链路继续`}</CodeBlock>

    {/* D · 三级缓存表 */}
    <div className="text-[11px] font-semibold mt-5 mb-2 tracking-wider" style={{ color: CACHE }}>D · 三级缓存 · 命中规则与延时</div>
    <div className="overflow-x-auto rounded-2xl border mb-5" style={{ borderColor: CACHE_BORDER }}>
      <table className="w-full text-[12px]" style={{ minWidth: 720 }}>
        <thead>
          <tr style={{ backgroundColor: CACHE_LIGHT }}>
            <th className="text-left px-3 py-2.5 font-bold whitespace-nowrap" style={{ color: CACHE }}>层级</th>
            <th className="text-left px-3 py-2.5 font-bold whitespace-nowrap" style={{ color: CACHE }}>存储</th>
            <th className="text-left px-3 py-2.5 font-bold" style={{ color: CACHE }}>命中规则</th>
            <th className="text-left px-3 py-2.5 font-bold whitespace-nowrap" style={{ color: CACHE }}>延时</th>
          </tr>
        </thead>
        <tbody>
          {CACHE_TIERS.map((c, i) => (
            <tr key={c.tier} style={{ backgroundColor: i % 2 ? 'white' : '#FAFAFA' }}>
              <td className="px-3 py-2.5 font-semibold align-top" style={{ color: c.color }}>{c.tier}</td>
              <td className="px-3 py-2.5 align-top text-neutral-700">{c.store}</td>
              <td className="px-3 py-2.5 align-top text-neutral-700">{c.match}</td>
              <td className="px-3 py-2.5 align-top text-neutral-700 font-mono text-[11px]">{c.latency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* E · SVG 命中流程图 */}
    <div className="text-[11px] font-semibold mt-5 mb-2 tracking-wider" style={{ color: CACHE }}>E · 命中流程图 · 标准化 → L1 → L2 → 落主链路</div>
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 mb-5 overflow-x-auto">
      <CacheHitFlowDiagram />
    </div>

    {/* F · 预热 + 失效 */}
    <div className="text-[11px] font-semibold mt-2 mb-2 tracking-wider" style={{ color: CACHE }}>F · 预热 + 失效 · 第一天就有 30% 命中率,不靠用户养</div>
    <div className="grid md:grid-cols-2 gap-3 mb-6">
      <div className="rounded-2xl p-4 border" style={{ backgroundColor: CACHE_LIGHT, borderColor: CACHE_BORDER }}>
        <div className="text-[12px] font-bold mb-2" style={{ color: CACHE }}>冷启动预热</div>
        <ul className="text-[12px] space-y-1 leading-relaxed" style={{ color: CACHE_DEEP }}>
          <li>• 上线前批量打 5000 条高频问(《十万个为什么》题库 + 内容引擎 18 预设 + 友商 App 公开样本)</li>
          <li>• 经 15 节四层审核 + 预合成 TTS → 灌入 qa_cache</li>
          <li>• 首日命中率 ~30%,不需要用户先"养"</li>
        </ul>
      </div>
      <div className="rounded-2xl p-4 border" style={{ backgroundColor: CACHE_LIGHT, borderColor: CACHE_BORDER }}>
        <div className="text-[12px] font-bold mb-2" style={{ color: CACHE }}>每日运营 cron(02:00)</div>
        <ul className="text-[12px] space-y-1 leading-relaxed" style={{ color: CACHE_DEEP }}>
          <li>• 分析昨日 miss top 100 → 离线生成 + 安全审核 + 入缓存</li>
          <li>• LRU 清理 90 天未命中条目</li>
          <li>• 内容引擎(18)版本变 → invalidate(content_version)</li>
          <li>• 安全规则(17)升级 → 全表 safety_passed 重审</li>
        </ul>
      </div>
    </div>

    {/* G · 开源决策 */}
    <div className="text-[11px] font-semibold mt-2 mb-2 tracking-wider flex items-center gap-2" style={{ color: CACHE }}>
      <GitBranch className="w-4 h-4" /> G · 开源决策 · Cache 这层用什么
    </div>
    <div className="overflow-x-auto rounded-2xl border mb-8" style={{ borderColor: CACHE_BORDER }}>
      <table className="w-full text-[12px]" style={{ minWidth: 720 }}>
        <thead>
          <tr style={{ backgroundColor: CACHE_LIGHT }}>
            <th className="text-left px-3 py-2.5 font-bold whitespace-nowrap" style={{ color: CACHE }}>候选</th>
            <th className="text-left px-3 py-2.5 font-bold whitespace-nowrap" style={{ color: CACHE }}>决策</th>
            <th className="text-left px-3 py-2.5 font-bold" style={{ color: CACHE }}>为什么</th>
          </tr>
        </thead>
        <tbody>
          <OssRow tone={CACHE} name="GPTCache" license="MIT · github.com/zilliztech/GPTCache" decision="改造用" decisionTone="fork" why="用其 SimilarityEvaluation + Cache Manager 接口骨架(它在 LLM 缓存语义化这块做得最早最完整);把它的默认 store 替换为 pgvector,加上 partition_key + safety_passed + contains_pii + content_version 四个硬过滤(原版没有)。" />
          <OssRow tone={CACHE} name="Redis(L1 精确)" license="BSD · 开源" decision="直接用" decisionTone="use" why="L1 SHA1 精确命中 · 三区部署(华北/华东/华南)· 毫秒级返回。无任何改动。" />
          <OssRow tone={CACHE} name="pgvector(L2 语义)" license="PostgreSQL License" decision="直接用" decisionTone="use" why="L2 语义命中,与 Memory 同库同事务。不用 Qdrant/Milvus 就是因为运维统一。" />
          <OssRow tone={CACHE} name="LangChain Cache" license="MIT" decision="不用" decisionTone="skip" why="接口风格不合,且引入 LangChain 全家桶不值 · 与 GPTCache 在同一个层级,GPTCache 更聚焦。" />
        </tbody>
      </table>
    </div>

    {/* ============================== Part IV · 协同 ============================== */}
    <PartHeader
      icon={Code}
      color={ACCENT}
      kicker="PART IV · 三者协同"
      title="端到端时序图 · 命中分支 + 未命中分支"
      sub="把上面三段串起来 · ~35% 走命中分支(快 + 省钱)· ~65% 走完整链路(Memory → Context → LLM)。"
    />
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 mb-7 overflow-x-auto">
      <EndToEndSequenceDiagram />
    </div>

    {/* ============================== Part V · 单位经济 ============================== */}
    <div className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: ACCENT }}>
      Part V · 单位经济测算 · 这套基建怎么影响 ¥39/年订阅(详见 23 / 24)
    </div>
    <div className="overflow-x-auto rounded-2xl border mb-7" style={{ borderColor: '#E5E5E5' }}>
      <table className="w-full text-[12px]" style={{ minWidth: 720 }}>
        <thead>
          <tr className="bg-neutral-100">
            <th className="text-left px-3 py-2.5 font-bold whitespace-nowrap text-neutral-700">假设</th>
            <th className="text-left px-3 py-2.5 font-bold text-neutral-700">不做缓存 / 记忆</th>
            <th className="text-left px-3 py-2.5 font-bold text-neutral-700">做了之后(Cache 命中 ~35% + Context prefix cache)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="px-3 py-2 align-top text-neutral-700">月对话轮次 / 孩</td><td className="px-3 py-2 align-top text-neutral-700">~3000 轮</td><td className="px-3 py-2 align-top text-neutral-700">~3000 轮(口径不变)</td></tr>
          <tr style={{ backgroundColor: '#FAFAFA' }}><td className="px-3 py-2 align-top text-neutral-700">Cache 命中(L0+L1+L2)</td><td className="px-3 py-2 align-top text-neutral-700">0%</td><td className="px-3 py-2 align-top font-semibold" style={{ color: ACCENT }}>~35%(首年保守)</td></tr>
          <tr><td className="px-3 py-2 align-top text-neutral-700">命中条:成本</td><td className="px-3 py-2 align-top text-neutral-700">—</td><td className="px-3 py-2 align-top text-neutral-700">仅 audio 拉取(~LLM+TTS 的 1/12)</td></tr>
          <tr style={{ backgroundColor: '#FAFAFA' }}><td className="px-3 py-2 align-top text-neutral-700">未命中条:输入 token</td><td className="px-3 py-2 align-top text-neutral-700">~2500 / 轮</td><td className="px-3 py-2 align-top text-neutral-700">~1800 / 轮 · 前 470 走 prefix cache(1/10 价)</td></tr>
          <tr><td className="px-3 py-2 align-top font-semibold text-neutral-800">综合月 token 成本 / 孩</td><td className="px-3 py-2 align-top text-neutral-800">基线 1.0×</td><td className="px-3 py-2 align-top font-bold" style={{ color: ACCENT }}>~0.30–0.40× (详细推算见 26)</td></tr>
        </tbody>
      </table>
    </div>

    {/* ============================== Part VI · MVP 取舍 ============================== */}
    <div className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3 flex items-center gap-2" style={{ color: ACCENT }}>
      <ListChecks className="w-4 h-4" /> Part VI · MVP 取舍 · 三段各自不同节奏(对齐 22 节)
    </div>
    <div className="overflow-x-auto rounded-2xl border mb-3" style={{ borderColor: '#E5E5E5' }}>
      <table className="w-full text-[12px]" style={{ minWidth: 760 }}>
        <thead>
          <tr className="bg-neutral-100">
            <th className="text-left px-3 py-2.5 font-bold whitespace-nowrap text-neutral-700">阶段</th>
            <th className="text-left px-3 py-2.5 font-bold whitespace-nowrap" style={{ color: CTX }}>Context</th>
            <th className="text-left px-3 py-2.5 font-bold whitespace-nowrap" style={{ color: MEM }}>Memory</th>
            <th className="text-left px-3 py-2.5 font-bold whitespace-nowrap" style={{ color: CACHE }}>Cache</th>
          </tr>
        </thead>
        <tbody>
          {MVP_PHASES.map((m, i) => (
            <tr key={m.phase} style={{ backgroundColor: i === 0 ? ACCENT_LIGHT : i % 2 ? 'white' : '#FAFAFA' }}>
              <td className="px-3 py-2.5 align-top font-bold" style={{ color: ACCENT }}>{m.phase}</td>
              <td className="px-3 py-2.5 align-top text-neutral-700">{m.ctx}</td>
              <td className="px-3 py-2.5 align-top text-neutral-700">{m.mem}</td>
              <td className="px-3 py-2.5 align-top text-neutral-700">{m.cache}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p className="text-[11px] text-neutral-500 leading-relaxed">
      <b>原则</b>:越靠后的能力越依赖数据积累。M2 没有真实对话,语义命中没意义,先精确命中(L1)即可;
      M4 有 200+ 户内测数据后,才值得训摘要 prompt;
      M6 有 1000+ 户后,语义命中阈值才有得调。
    </p>
  </Card>
);
