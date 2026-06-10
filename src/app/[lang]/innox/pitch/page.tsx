/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { InnoxTocSidebar, type TocGroup } from '@/components/InnoxTocSidebar';
import {
  HardDrive,
  Cloud,
  Cpu,
  Sparkles,
  Users,
  CheckCircle2,
  Circle,
  Loader,
  Wrench,
  TrendingUp,
  Coffee,
  Mountain,
  Smartphone,
  ShieldCheck,
  ChevronDown,
  BatteryFull,
  Layers,
  type LucideIcon,
} from 'lucide-react';

const ACCENT = '#2563EB';
const ACCENT_LIGHT = '#EFF6FF';
const ACCENT_DEEP = '#1D4ED8';

type Locale = 'en' | 'cn';

type Tone = 'accent' | 'amber' | 'emerald' | 'rose' | 'neutral';
const TONE: Record<Tone, { color: string; bg: string }> = {
  accent: { color: ACCENT, bg: ACCENT_LIGHT },
  amber: { color: '#B45309', bg: '#FEF3C7' },
  emerald: { color: '#047857', bg: '#ECFDF5' },
  rose: { color: '#BE123C', bg: '#FFE4E6' },
  neutral: { color: '#374151', bg: '#F3F4F6' },
};

type FreqKey = 'high' | 'mid' | 'low' | 'occasional';
type NetKey = 'strong' | 'weak' | 'weakOrNone' | 'none';

const FREQ_TONE: Record<FreqKey, Tone> = {
  high: 'emerald',
  mid: 'accent',
  low: 'amber',
  occasional: 'neutral',
};

const NET_TONE: Record<NetKey, Tone> = {
  strong: 'emerald',
  weak: 'amber',
  weakOrNone: 'amber',
  none: 'rose',
};

const FREQ_LABEL: Record<Locale, Record<FreqKey, string>> = {
  cn: { high: '高频', mid: '中频', low: '低频', occasional: '偶发' },
  en: { high: 'High', mid: 'Mid', low: 'Low', occasional: 'Occasional' },
};

const NET_LABEL: Record<Locale, Record<NetKey, string>> = {
  cn: { strong: '强网', weak: '弱网', weakOrNone: '弱/无网', none: '无网' },
  en: { strong: 'Strong', weak: 'Weak', weakOrNone: 'Weak / none', none: 'No net' },
};

/* ---------------- 通用组件 ---------------- */

const Card = ({
  id,
  children,
  className = '',
  delay = 0,
  dark = false,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  dark?: boolean;
}) => (
  <section
    id={id}
    className={`rounded-3xl p-8 md:p-12 reveal ${dark ? '' : 'bg-white'} ${className}`}
    style={
      {
        backgroundColor: dark ? '#1f2937' : undefined,
        '--reveal-delay': `${delay}s`,
      } as React.CSSProperties
    }
  >
    {children}
  </section>
);

const Chip = ({ tone, children }: { tone: Tone; children: React.ReactNode }) => {
  const t = TONE[tone];
  return (
    <span
      className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold"
      style={{ backgroundColor: t.bg, color: t.color }}
    >
      {children}
    </span>
  );
};

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div
    className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3"
    style={{ color: ACCENT }}
  >
    {children}
  </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl md:text-3xl font-semibold text-neutral-800 mb-6 leading-tight">
    {children}
  </h2>
);

const Prose = ({ children }: { children: React.ReactNode }) => (
  <div className="text-[15px] leading-relaxed text-neutral-600 space-y-4">{children}</div>
);

const Strong = ({ children }: { children: React.ReactNode }) => (
  <span className="font-medium text-neutral-800">{children}</span>
);

const StatCard = ({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) => (
  <div className="bg-neutral-50 rounded-2xl p-5">
    <div className="text-[10px] font-medium uppercase tracking-wider text-neutral-400 mb-2">
      {label}
    </div>
    <div className="text-[22px] md:text-[24px] font-semibold text-neutral-800 leading-tight">
      {value}
    </div>
    {hint && <div className="text-[12px] text-neutral-500 mt-1.5 leading-relaxed">{hint}</div>}
  </div>
);

const CompetitorRow = ({
  label,
  note,
  highlight = false,
}: {
  label: string;
  note: string;
  highlight?: boolean;
}) => (
  <div className="flex items-start gap-4 py-3">
    <div
      className="w-24 shrink-0 text-[13px] font-semibold"
      style={{ color: highlight ? ACCENT : '#404040' }}
    >
      {label}
    </div>
    <div className="flex-1 text-[13px] text-neutral-600 leading-relaxed">{note}</div>
  </div>
);

/* ---------------- TOC ---------------- */

const TOC_GROUPS: Record<Locale, TocGroup[]> = {
  cn: [
    {
      label: '认知',
      hint: '问题怎么被看到',
      items: [
        { id: 'overview', num: '00', title: '项目概要' },
        { id: 'insight', num: '01', title: 'Insight · 怎么发现的' },
        { id: 'topology', num: '02', title: '拓扑视角 · 品类必然性' },
      ],
    },
    {
      label: '市场',
      hint: '为什么是现在',
      items: [
        { id: 'market', num: '03', title: '市场 · 不是单一品类' },
        { id: 'audience', num: '04', title: '用户 · 场景' },
        { id: 'window', num: '05', title: '时间窗口' },
        { id: 'scoring', num: '06', title: '对预期市场的真实评估' },
      ],
    },
    {
      label: '产品',
      hint: '我们做什么、为什么是我们',
      items: [
        { id: 'objections', num: '07', title: '常被问到的几个问题' },
        { id: 'solution', num: '08', title: '解决方案' },
        { id: 'architecture', num: '08+', title: '产品架构详解(可展开)' },
      ],
    },
    {
      label: '执行',
      hint: '人 / 阶段 / 计划',
      items: [
        { id: 'team', num: '09', title: '团队' },
        { id: 'stage', num: '10', title: '当前阶段' },
        { id: 'roadmap', num: '11', title: 'Roadmap & 资源' },
      ],
    },
    {
      label: '愿景',
      items: [{ id: 'vision-pitch', num: '★', title: '愿景' }],
    },
  ],
  en: [
    {
      label: 'Insight',
      hint: 'How we see the problem',
      items: [
        { id: 'overview', num: '00', title: 'Project at a glance' },
        { id: 'insight', num: '01', title: 'Insight · How we found it' },
        { id: 'topology', num: '02', title: 'Topology · Why this category is inevitable' },
      ],
    },
    {
      label: 'Market',
      hint: 'Why now',
      items: [
        { id: 'market', num: '03', title: 'Market · Not a single category' },
        { id: 'audience', num: '04', title: 'Audience · Scenarios' },
        { id: 'window', num: '05', title: 'Window of opportunity' },
        { id: 'scoring', num: '06', title: 'Honest market scoring' },
      ],
    },
    {
      label: 'Product',
      hint: 'What we build, why it is us',
      items: [
        { id: 'objections', num: '07', title: 'Common objections' },
        { id: 'solution', num: '08', title: 'Solution' },
        { id: 'architecture', num: '08+', title: 'Architecture deep-dive (expandable)' },
      ],
    },
    {
      label: 'Execution',
      hint: 'Team / stage / plan',
      items: [
        { id: 'team', num: '09', title: 'Team' },
        { id: 'stage', num: '10', title: 'Current stage' },
        { id: 'roadmap', num: '11', title: 'Roadmap & ask' },
      ],
    },
    {
      label: 'Vision',
      items: [{ id: 'vision-pitch', num: '★', title: 'Vision' }],
    },
  ],
};

/* ---------------- 内容 · cn / en ---------------- */

type Persona = { name: string; pain: string; fit: string };
type Scenario = { name: string; freq: FreqKey; net: NetKey; body: string };
type MatrixRow = {
  key: string;
  cloud: number;
  nas: number;
  hdd: number;
  ovita: number;
  note: string;
};
type RoadmapStatus = 'completed' | 'in-progress' | 'next';
type RoadmapItem = { stage: string; t: string; s: string; b: string; status: RoadmapStatus };
type ImageItem = { src: string; caption: string };

interface Content {
  hero: {
    title: string;
    subtitle: string;
    desc: React.ReactNode;
    stats: { label: string; value: string; hint: string }[];
  };
  overview: { label: string; title: string; body: React.ReactNode };
  insight: { label: string; body: React.ReactNode };
  topology: {
    label: string;
    title: string;
    body: React.ReactNode;
    topoAlt: string;
    topoCaption: string;
    threeWaysTitle: string;
    threeWaysBody: React.ReactNode;
    matrixIntro: string;
    matrixHighlight: string;
    matrixDimColumn: string;
    matrixCols: { cloud: string; nas: string; hdd: string; ovita: string };
    rows: MatrixRow[];
    matrixFooterLeft: string;
    matrixFooterOthers: string;
    matrixFooterOurs: string;
    conclusion: React.ReactNode;
    closing: React.ReactNode;
  };
  market: {
    label: string;
    body: React.ReactNode;
    cards: { title: string; value: string; hint: string }[];
    sources: string;
  };
  audience: {
    label: string;
    title: string;
    personasHeading: string;
    personasIntro: string;
    personas: Persona[];
    painLabel: string;
    fitLabel: string;
    scenariosHeading: string;
    scenariosIntro: React.ReactNode;
    scenarios: Scenario[];
    keynote: React.ReactNode;
  };
  window: {
    label: string;
    title: string;
    intro: React.ReactNode;
    cards: { title: string; body: string }[];
    closing: React.ReactNode;
  };
  scoring: {
    label: string;
    intro: React.ReactNode;
    rows: { label: string; note: string; highlight: boolean }[];
    moat: React.ReactNode;
  };
  objections: {
    label: string;
    q1Title: string;
    q1: React.ReactNode;
    q2Title: string;
    q2: React.ReactNode;
    signalsLabel: string;
    signalATitle: string;
    signalABody: React.ReactNode;
    signalAImages: ImageItem[];
    signalBTitle: string;
    signalBBody: React.ReactNode;
    signalBImages: ImageItem[];
    q3Title: string;
    q3: React.ReactNode;
  };
  solution: {
    label: string;
    title: string;
    intro: React.ReactNode;
    cards: { icon: LucideIcon; title: string; body: React.ReactNode }[];
  };
  architecture: {
    sectionLabel: string;
    title: string;
    intro: React.ReactNode;
    section1Tag: string;
    section1Heading: string;
    section1Intro: React.ReactNode;
    section1Cards: { icon: LucideIcon; title: string; body: string }[];
    section2Tag: string;
    section2Heading: string;
    section2Body: React.ReactNode;
    svgAria: string;
    svgDeviceSub: string;
    svgCallouts: {
      insider: { title: string; sub: string; line1: string; line2: string };
      friend: { title: string; sub: string; line1: string };
      stranger: { title: string; sub: string; line1: string };
      pubBadge: string;
      pubLine1: string;
      pubLine2: string;
      privBadge: string;
      privLine1: string;
      privLine2: string;
      legendIdentity: string;
      legendContent: string;
      legendCaption: string;
    };
    designIntuition: React.ReactNode;
  };
  team: {
    label: string;
    title: string;
    members: { name: string; role: string; bio: string }[];
    fieldHeading: string;
    photos: ImageItem[];
  };
  stage: {
    label: string;
    title: string;
    body: React.ReactNode;
  };
  roadmap: {
    label: string;
    title: string;
    items: RoadmapItem[];
    askTitle: string;
    askItems: string[];
  };
  vision: {
    badge: string;
    body: React.ReactNode;
  };
  footer: string;
}

const CONTENT: Record<Locale, Content> = {
  cn: {
    hero: {
      title: '随行云盘',
      subtitle: 'Portable AI Storage Drive · ooakloo',
      desc: (
        <>
          一台<Strong>面向消费者的便携式 AI 个人存储设备</Strong>—— 它把传统硬盘的便携、NAS
          的私有化、云盘的智能化交互融为一体,让数据成为可以随身、可被自然访问的"近场私域"。
        </>
      ),
      stats: [
        { label: '团队', value: '2 人', hint: '移动 / 嵌入式 + 硬件' },
        { label: '软件', value: '完成', hint: 'iOS / macOS 客户端' },
        { label: '硬件', value: '迭代中', hint: '工程师改版 · 原理图调整' },
      ],
    },
    overview: {
      label: '00 · 项目概要',
      title: '消费端的随身云。',
      body: (
        <>
          <p>
            当下消费者只剩三种存储方案:云盘、NAS、移动硬盘。云盘隐私差且要长期付费;NAS
            门槛高且不便携;移动硬盘有线、文件夹原始、体验割裂。
          </p>
          <p>
            随行云盘是这三者的<Strong>超集</Strong>—— 一台像移动硬盘一样便携、像
            NAS 一样私有、像云盘一样有现代交互的设备。砍掉 NAS 的玩机门槛、砍掉云盘的订阅模式、砍掉移动硬盘的有线依赖。
          </p>
        </>
      ),
    },
    insight: {
      label: '01 · Insight · 我们怎么发现这个问题',
      body: (
        <>
          <p>
            起点是在国外读书时插硬盘看国内剧,iPad 没电只能拔下来充,体验很差。我用手头的树莓派 Zero 2W 一周做了第一代——基于
            UPnP,让手机、电脑同时看不同电影。
          </p>
          <p>
            回国后这个具体问题"消失"了,我一度以为是伪需求。直到看到项飙老师"消失的附近"的概念,
            我才意识到 ——
            <Strong>用户对存储的需求主要就发生在附近、在近场</Strong>,而当前并没有这样形态的产品。
          </p>
        </>
      ),
    },
    topology: {
      label: '02 · 拓扑视角 · 为什么这个品类迟早会出现',
      title: '三角形的中心 · 四面体的顶点。',
      body: (
        <p>
          我们用一个简单的几何视角理解市场:把现有三种存储形态作为顶点,云、NAS、移动硬盘,
          <Strong>等边三角形的几何中心,正是 Wi-Fi 硬盘</Strong>—— 它对其他三者都是更好的替代:
          比 NAS 便携,比云盘私有不需要长期付费,比传统硬盘多了无线和现代交互。
        </p>
      ),
      topoAlt: '等边三角形与四面体存储拓扑图',
      topoCaption: '左:平面三种存储形态 + 中心点(Wi-Fi 硬盘) ｜ 右:升维到四面体后,Wi-Fi 硬盘成为顶点',
      threeWaysTitle: '三种现有方案,各缺一块。',
      threeWaysBody: (
        <p>
          几何视角是抽象的 —— 我们把它落到 5 个维度上逐项打分:云盘、NAS、移动硬盘各自占据消费者的一块需求,但
          <Strong>没有任何一种同时满足"私有 + 便携 + 智能 + 长期低成本"</Strong>。
        </p>
      ),
      matrixIntro: '五维评估 · 横轴 = 评分(满格 = 3)· 纵轴 = 维度',
      matrixHighlight: '随身云列高亮',
      matrixDimColumn: '维度',
      matrixCols: { cloud: '云盘', nas: 'NAS', hdd: '硬盘', ovita: '随身云' },
      rows: [
        { key: '隐私性', cloud: 1, nas: 3, hdd: 3, ovita: 3, note: '云盘有审查风险;后三者数据在本地' },
        { key: '便携性', cloud: 3, nas: 1, hdd: 2, ovita: 3, note: 'NAS 体积大、要插电;移动硬盘要线' },
        { key: '智能化交互', cloud: 2, nas: 1, hdd: 0, ovita: 3, note: 'NAS 要折腾,硬盘是 1995 年的文件夹' },
        { key: '长期成本', cloud: 1, nas: 2, hdd: 3, ovita: 3, note: '云盘订阅累加;一次买断长期更省' },
        { key: '无线 / 续航', cloud: 3, nas: 1, hdd: 1, ovita: 3, note: '只有"随身云"做到无线 + 自带电池' },
      ],
      matrixFooterLeft: '评分越靠右越优 · 满格 = 3 分',
      matrixFooterOthers: '其他三方',
      matrixFooterOurs: '随身云',
      conclusion: (
        <>
          <Strong>结论:</Strong>{' '}
          <span style={{ color: ACCENT_DEEP }}>
            随身云不是"再做一台硬盘",而是把三角形里被遗漏的<Strong>那个中心点</Strong>
            实化成产品 —— 同时落地到智能、便携、续航三条主线。
          </span>
        </>
      ),
      closing: (
        <p className="mt-6">
          这个品类<Strong>迟早会出现</Strong>。我们不一定是唯一的玩家,但我们想做<Strong>最早占领这个心智的一家</Strong>。
        </p>
      ),
    },
    market: {
      label: '03 · 市场 · 我们对标的不是单一品类',
      body: (
        <p>
          我们对标的不是单一品类,而是<Strong>消费端个人数据存储这个总市场</Strong>。产品同时覆盖三个存储方案,所以也要看三块市场。
        </p>
      ),
      cards: [
        { title: 'NAS 市场', value: '≈ 25%', hint: '国内年增长率 · 对比海外渗透率仍有较大空间' },
        { title: '消费存储总量', value: '800–1200 亿', hint: '全球消费端规模(人民币),国内约占一半 · SSD CAGR ≈ 6.7%' },
        { title: '个人云(海外参考)', value: '$104 亿', hint: 'iCloud 24 年估算服务营收 · 付费用户 ≈ 7 亿' },
      ],
      sources: '数据来源:艾瑞 / IDC / 信通院 / 华尔街 / CIRP / Trefis。我们用三段口径交叉验证,而非凭单一报告下结论。',
    },
    audience: {
      label: '04 · 用户 · 场景 · 谁在用,什么时候用',
      title: '不是泛泛的"消费用户" —— 几类有明确隐痛的人,在具体的频次与网络场景里。',
      personasHeading: '① 用户画像 · 谁在为隐痛付费',
      personasIntro: '不是面向全体消费者,而是几类对现有方案明确不满、且已经在掏钱凑合的人:',
      personas: [
        {
          name: '外贸 / 跨境业务者',
          pain: '换设备频繁、跨地域、随身大量物料与往来文件;iCloud 受限,云盘上传慢,移动硬盘要插线。',
          fit: '本地优先 + 跨端可访问 + 一次买断,无地域限制。',
        },
        {
          name: '自媒体 / 内容创作者',
          pain: '原片素材体量大,云盘贵且慢;NAS 太重不便携;现有方案体验割裂。',
          fit: '便携 + 高吞吐近场同步 + 现代媒体浏览交互。',
        },
        {
          name: '大容量手机用户(尤以女性)',
          pain: '换机时数据迁移几小时;手机厂商解题是"设备绑定 + 容量堆叠",但他们要的是"数据可中心化、可随身"。',
          fit: '把数据从设备孤岛中解放出来,跨终端一致访问。',
        },
        {
          name: '咖啡馆 / 主理人',
          pain: '想给客人提供音乐 / 视频 / 电子书等氛围内容,但缺一个稳定、私域、不依赖外网的承载方式。',
          fit: 'public 模式 —— 把店内变成"近场私域小乌托邦"。',
        },
        {
          name: '独立开发者 / 多端协作者',
          pain: '跨端工具数据同步常被云锁住;近场 + 私有 + 自有协议的同步层缺失。',
          fit: '可作为开发者眼中的"近场数据中枢"。',
        },
      ],
      painLabel: '隐痛:',
      fitLabel: '命中:',
      scenariosHeading: '② 使用场景 · 频次 × 网络',
      scenariosIntro: (
        <p>
          同一台设备,在不同<Strong>频次 × 网络</Strong>条件下承载完全不同的价值。我们挑出最典型的六个:
        </p>
      ),
      scenarios: [
        { name: '通勤', freq: 'high', net: 'weak', body: '上下班路上看视频、听播客、翻图书;本地随取,不靠运营商。' },
        { name: '居家日常', freq: 'high', net: 'strong', body: '客厅看电影、卧室翻图片;同一份数据跨设备一致访问。' },
        { name: '出差 / 旅行', freq: 'mid', net: 'weakOrNone', body: '酒店看片、机场倒换设备,不靠云盘上传等待。' },
        { name: '户外拍摄', freq: 'low', net: 'none', body: '野外原图 / 原视频转储,绕开微信压缩与上传等待。' },
        { name: '咖啡馆 public', freq: 'mid', net: 'weak', body: '主理人发布店内私域内容,客人就近接入取用。' },
        { name: '聚会 / 旅途共享', freq: 'occasional', net: 'none', body: '一人随身,众人同步原图;iOS / 安卓 / 电脑均可。' },
      ],
      keynote: (
        <>
          <Strong>关键:</Strong>{' '}
          <span style={{ color: ACCENT_DEEP }}>
            这些场景的共同点是 ——{' '}
            <Strong>网络靠不住、设备多、内容重</Strong>。云盘 / 云相册天然不适配,NAS 不便携,移动硬盘交互又退到 1995。"近场私域 + 现代体验"是这些场景里唯一能站住的形态。
          </span>
        </>
      ),
    },
    window: {
      label: '05 · 时间窗口 · 为什么是现在、为什么是我们',
      title: '巨头不能做这件事 —— 因为会伤到自己的主业。',
      intro: (
        <p>
          这不是一个新点子被巨头忽略的故事,而是一个典型的<Strong>创新者困境</Strong> —— 巨头不是没看到,是动不了:
        </p>
      ),
      cards: [
        {
          title: '绿联 / 群晖',
          body: '做这件事会冲击它的 NAS 业务 —— 它们的客单价、配置层级、用户教育成本都建立在"复杂"之上。',
        },
        {
          title: '百度网盘 / 夸克',
          body: '做这件事会冲击订阅现金流 —— 一次买断、本地优先,本质上是和它们的商业模式作对。',
        },
        {
          title: '三星 / 西数 / 闪迪',
          body: '有硬件能力但软件 / 交互基因弱 —— 它们做的是更快的硬盘,不是更好的"数据伴侣"。',
        },
      ],
      closing: (
        <p className="mt-6">
          <Strong>这就是我们的窗口。</Strong>不是我们比巨头聪明,而是这件事天然不属于他们的"边界"。早做的人,先占住"消费端随身云"的心智。
        </p>
      ),
    },
    scoring: {
      label: '06 · 对预期市场的真实评估',
      intro: (
        <p>
          对移动硬盘和 NAS,我们是<Strong>形态与体验上的超集</Strong>;对云盘,短期单 TB 成本不占优,但拉长生命周期,叠加"本地优先 + 隐私",我们仍是结构性更优的选择。
        </p>
      ),
      rows: [
        {
          label: 'vs 移动硬盘',
          highlight: true,
          note: '形态超集:无线 + 多端互访 + 现代交互。除价格外,用户没有继续选传统硬盘的理由。',
        },
        {
          label: 'vs NAS',
          highlight: true,
          note: '把 NAS 的玩机门槛、不便携砍掉,针对观影/音乐/图片做交互优化 —— 把被挡在外面的小白用户接进来。',
        },
        {
          label: 'vs 云盘',
          highlight: false,
          note: "单 TB 短期支出云更便宜;但拉长生命周期,一次买断的总支出更低,叠加'本地优先 + 隐私'是结构性优势。",
        },
      ],
      moat: (
        <>
          <Strong>云盘的护城河只剩成本。</Strong>当我们的软件体验追平甚至超过云盘,叠加"一次买断 vs
          长期订阅"的话题,以及大家对云盘隐私审查的担忧,我们能持续侵蚀这块市场。
        </>
      ),
    },
    objections: {
      label: '07 · 常被问到的几个问题',
      q1Title: '① 关于"访问频次低"这件事,我们的另一种理解',
      q1: (
        <>
          <p>打开身边人的移动硬盘,会看到一个共同现象:存进去的数据,大部分长期不再被访问。</p>
          <p>
            我们倾向于<Strong>反过来看这件事</Strong> —— 正因为传统硬盘的体验偏门槛(整理耗精力、查看要插线、文件夹原始、阅读体验差),用户才<Strong>更愿意只把"不重要、低频"的数据塞进去</Strong>。是产品体验在筛走高频需求,而不是用户没有高频需求。所谓"低频访问",更像是行为的结果,而不是需求的本质。
          </p>
        </>
      ),
      q2Title: '② 大容量手机出现之后,我们看到的反而是机会',
      q2: (
        <>
          <p>一个常被聊到的问题:"手机内存越来越大,你们这个产品不是更尴尬了吗?"</p>
          <p>
            我们的看法略有不同 —— 手机厂商把容量从 128G 一路堆到 1T,本身已经说明
            <Strong>用户愿意为"数据随身且易访问"付费</Strong>。只是他们选的解法是
            <Strong>设备绑定 + 孤岛存储</Strong>;我们想从需求本身出发,做<Strong>跨设备、可被中心化管理</Strong>的另一种选项。
          </p>
          <p>
            比如换 iPhone 时数据迁移要几个小时,这是外贸商人、自媒体博主、女性用户经常被忽略的一个隐痛 ——
            苹果给的是它思路下的方案,不一定是用户最想要的方案。
          </p>
          <p>
            <Strong>另一个佐证来自苹果。</Strong>作为全球对消费电子市场理解最深、用户数据最完整的公司,苹果的产品取舍本身就是一份市场信号 ——
            对小尺寸 iPhone、iPad mini 这类小市场产品,它更新很慢甚至停产;但从 iPhone 15
            起,每代都做大存储版本。能让苹果每代都不放弃的群体,意味着大存储用户真实存在,且体量足够大。
          </p>
        </>
      ),
      signalsLabel: '公开内容里的市场信号',
      signalATitle: '信号 A · KOL 换机:两小时还没同步完',
      signalABody: (
        <>
          主流自媒体博主每年都换最新款大容量 iPhone,"换机数据同步"是公开吐槽的高频隐痛。以 B 站
          <Strong>艾叔 Albert</Strong>的 iPhone 17 开箱为例 —— 截图中两台手机同步从
          <Strong>18:43</Strong> 开始,到 <Strong>20:43</Strong> 仍在传输,两小时还没结束。这正是我们想用
          <Strong>"去中心化随身云"</Strong>承接的场景:数据不再绑死在某一台设备里。
        </>
      ),
      signalAImages: [
        { src: '/innox/research/kol-sync-1843.png', caption: '18:43 · 同步刚开始' },
        { src: '/innox/research/kol-sync-2043.png', caption: '20:43 · 两小时后仍在同步' },
      ],
      signalBTitle: '信号 B · iPhone 照片备份内容的播放量与评论',
      signalBBody: (
        <>
          B 站搜索"iPhone 照片备份"、"实况 Live 照片备份",可以看到大量博主选题集中在
          <Strong>苹果照片 / Live 照片备份</Strong> —— 单条视频动辄数十万到百万播放,证明这块需求人群基数大、关注度高。评论区里
          <Strong>Google Photos / Drive</Strong> 是高频替代方案,但对中国大陆用户而言,这条路径本质上有
          <Strong>翻墙、付费、网络稳定性</Strong>等障碍 —— 这正是我们要承接的空缺。
        </>
      ),
      signalBImages: [
        { src: '/innox/research/bilibili-search-results.png', caption: 'B 站"iPhone 照片备份"相关选题 · 单条 12 万–138 万级播放' },
        { src: '/innox/research/bilibili-backup-views.png', caption: '黄杨 ME · 备份方案视频 · 评论区高频讨论 Google Photos / iCloud 替代' },
      ],
      q3Title: '③ 存储涨价,对我们意味着什么',
      q3: (
        <>
          <p>另一个常被聊到的问题:"存储涨价这么凶,你们的成本和定价怎么扛?"</p>
          <p>
            <Strong>短期看,供给端还有缓冲。</Strong>存储是周期性产品,制造商通常签长期合同 —— 一两代产品里价格不会大幅波动。等下一轮合约到期,行业只能要么自压利润、要么涨价。当前其他主流硬件配件已经在涨价,用户也已经在"肉痛"。
          </p>
          <p>
            <Strong>更值得看的是用户侧。</Strong>两年前一块固态内存条 400 元,现在 1400 元 —— 再加两条的钱,已经够买我们这一台设备。过去存储便宜时,用户的应对是"加内存条"、"换 1T iPhone";但 1T 手机用一两年就跟着设备一起报废,大部分容量其实是"扔在那儿"的。<Strong>大量存储其实是被浪费、被孤岛化的。</Strong>
          </p>
          <p>
            我们想做的事,是把分散在每台设备里的存储<Strong>中心化复用</Strong> —— 帮用户少买、少浪费。这不只是省钱,本质上也是一种
            <Strong>存储的环保</Strong>:让每一份 SSD 都被尽可能用满,而不是每台设备都堆 1T 再扔在那儿。
          </p>
        </>
      ),
    },
    solution: {
      label: '08 · 解决方案 · 不止"无线硬盘"',
      title: '"随身云" —— 一个承载近场私域的设备。',
      intro: (
        <>
          <p>
            形态上看,我们是"便携无线硬盘";但内部我们用<Strong>"随身云"</Strong>定义产品 —— 它不是又一个外设,而是用户身边的<Strong>近场数据中枢</Strong>。
          </p>
          <p>除了个人备份的基础场景,它能承载的场景还有:</p>
        </>
      ),
      cards: [
        {
          icon: Coffee,
          title: '咖啡馆 · public 模式',
          body: '主理人放上自选音乐、视频、电子书,顾客接入店内私域,不依赖外网,把"附近"重新建立起来。',
        },
        {
          icon: Mountain,
          title: '户外 · 旅途共享',
          body: '只要一人随身携带,iOS / 安卓 / 电脑都能无损拿到当天原图与视频,绕开微信压缩与同步等待。',
        },
        {
          icon: Smartphone,
          title: '独立开发 · 跨端同步',
          body: (
            <>
              AI 之后独立开发者激增,工具一旦涉及数据,多端同步几乎只能"绑死 iOS"或被远端云锁住 —— 而远端云本身是<Strong>缺少近场载体的妥协</Strong>。我们提供一层<Strong>近场同步 SDK</Strong>,让工具类 App 不必上云就能在用户身边的多设备间同步。
            </>
          ),
        },
      ],
    },
    architecture: {
      sectionLabel: '08+ · 产品架构详解 · 默认收起 · 点击展开',
      title: '深一层:三大演进要求 · 权限拓扑。',
      intro: (
        <>
          这一节把前面几页的主张拆到产品本身 —— 我们在
          <Strong>满足消费电子的什么演进趋势</Strong>,以及设备背后的
          <Strong>权限分层拓扑</Strong>是怎么组织的。
        </>
      ),
      section1Tag: 'section 1',
      section1Heading: '消费电子的三个演进方向。',
      section1Intro: (
        <p>
          过去十年消费电子产品的迭代主线,本质上都在三个维度上前进:
          <Strong>智能化、便携、续航</Strong>。手机如此,耳机如此,可穿戴也如此 ——
          唯独"个人数据存储"这一品类,几乎停留在十年前。
        </p>
      ),
      section1Cards: [
        {
          icon: Sparkles,
          title: '智能化',
          body: '数据需要被理解、被搜索、被推荐,而不只是被存储。从相册识图、自动整理,到 AI 摘要、对话式取用,"交互"已经是新存储的核心。',
        },
        {
          icon: Smartphone,
          title: '便携',
          body: '跟人走,而不是固定在某个角落。手机、AirPods、Apple Watch 把"随身"写进了 DNA,存储设备没有理由继续插线、躺在书桌上。',
        },
        {
          icon: BatteryFull,
          title: '续航',
          body: '低功耗、长时间在线。一台真正"随身"的设备,续航是底盘 —— 否则就是另一个充电焦虑的来源。',
        },
      ],
      section2Tag: 'section 2',
      section2Heading: '权限分层拓扑:同心圆三层 —— 自己人 · 朋友 · 陌生人。',
      section2Body: (
        <>
          <p>
            我们把权限想成<Strong>一圈圈向外扩散</Strong>:最里是
            <Strong>自己人</Strong> —— Owner 是设备主人,Member 是同主人的
            <Strong>多台从设备</Strong>(iPad / 安卓 / 电脑),解决"用户不只一台设备"这件事;再外一层是
            <Strong>朋友</Strong> Participant,凭邀请码进来,看自己加入的圈;最外是
            <Strong>陌生人</Strong> Guest,只能看公开内容。
          </p>
          <p>
            在"身份"之外,还有一条<Strong>独立的维度 —— 圈类型</Strong>:同一台设备同时承载
            <Strong>Public 圈</Strong>(覆盖三层)和<Strong>Private 圈</Strong>(只覆盖内两层),Owner 一键就能切换对外暴露范围。
          </p>
        </>
      ),
      svgAria: 'oVita 权限分层拓扑:三层同心圆身份 + Public/Private 内容圈两条独立维度',
      svgDeviceSub: '设备',
      svgCallouts: {
        insider: { title: '自己人', sub: 'Owner · Member', line1: '主人 + 配对从设备', line2: 'iPad · 安卓 · 电脑' },
        friend: { title: '朋友', sub: 'Participant', line1: '凭邀请码加入 Private 圈' },
        stranger: { title: '陌生人', sub: 'Guest', line1: '只看 Public 圈' },
        pubBadge: 'PUBLIC 圈',
        pubLine1: '覆盖 1 + 2 + 3',
        pubLine2: '任何身份可见',
        privBadge: 'PRIVATE 圈',
        privLine1: '覆盖 1 + 2 · 不含 3',
        privLine2: '邀请制内容空间',
        legendIdentity: '维度一 · 身份 · 同心圆 ① ② ③',
        legendContent: '维度二 · 内容 · Public / Private 圈',
        legendCaption: '两条维度互相独立',
      },
      designIntuition: (
        <>
          <Strong>设计直觉:</Strong> 三层同心圆决定<Strong>谁能看</Strong>(自己人 → 朋友 → 陌生人);Public / Private 决定
          <Strong>看到什么</Strong>。两件事互不绑定 —— 同一台设备同时承载"咖啡馆 public 模式"和"家庭私人备份"两个心智,Owner 一键就能切换对外暴露范围。
        </>
      ),
    },
    team: {
      label: '09 · 团队',
      title: '2 个人,把移动 / 嵌入 / 硬件 / 产品全栈覆盖。',
      members: [
        {
          name: '杨东举',
          role: '移动端 · 产品 · CEO',
          bio: '曾就职于华为、字节跳动、大疆。具备移动应用开发、产品设计、用户体验、软件架构、软硬件交互场景的经验。负责整体产品定义、客户端、用户洞察。',
        },
        {
          name: '李浩',
          role: '嵌入式 · 硬件',
          bio: '前大疆嵌入式工程师,专注于固件与板级系统开发。本项目中负责嵌入式系统、自研 PCB、电源与无线方案、硬件可行性。',
        },
      ],
      fieldHeading: '工程现场:',
      photos: [
        { src: '/innox/workstation.webp', caption: 'iOS / macOS 客户端开发现场' },
        { src: '/innox/engineer-at-work.webp', caption: '嵌入式调试 · 固件烧写' },
        { src: '/innox/custom-pcb.webp', caption: '自研 PCB 板' },
        { src: '/innox/prototype-sbc.webp', caption: '早期 SBC 原型' },
      ],
    },
    stage: {
      label: '10 · 当前阶段',
      title: '软件完成 · 硬件迭代 · 真实付费已发生。',
      body: (
        <>
          <p>软件侧:iOS、macOS 客户端核心完成,设备连接、文件管理、媒体播放主流程全部跑通,处于体验打磨阶段。</p>
          <p>硬件侧:PCB 开始原理图设计。</p>
          <p>嵌入式侧:目前在做底层性能调优(长续航、高稳定、快启动、快传输)。</p>
          <p>
            <Strong>验证侧:</Strong>我们没有闭门造车,而是直接在咖啡馆、朋友圈等真实场景做小规模访谈,部分访谈直接转化为<Strong>意向订单</Strong>—— 这给了我们最初的信心:问题真实存在,且有人愿意付费。
          </p>
        </>
      ),
    },
    roadmap: {
      label: '11 · Roadmap & 我们想从 InnoX 拿到什么',
      title: '从原型 → 小批量,最难的是制造与供应链。',
      items: [
        { stage: '阶段 1', t: '软件 v1 体验闭环', s: '已完成', b: '客户端核心流程 + 内测反馈接入。', status: 'completed' },
        { stage: '阶段 2', t: '硬件性能调优', s: '进行中', b: '无线吞吐 / 功耗 / 散热 / 稳定性。', status: 'in-progress' },
        { stage: '阶段 3', t: '工程样机收敛', s: '下一步', b: '完整可工作样机,准备小批量。', status: 'next' },
        { stage: '阶段 4', t: '小批量制造 · 早期用户', s: '下一步', b: '需要供应链与制造经验支持。', status: 'next' },
      ],
      askTitle: '我们希望从 InnoX 拿到的:',
      askItems: [
        '制造 / 供应链导师 —— 我们最大的缺口',
        '消费电子产品定义 / 工业设计的过来人意见',
        '同伴网络 —— 同样在做硬件创业的团队互助',
        '从原型到小批量的工程化资源支持',
      ],
    },
    vision: {
      badge: '愿景',
      body: (
        <>
          让个人数据回到用户身边 —— 更
          <span style={{ color: '#93C5FD' }}>私密</span>、更
          <span style={{ color: '#93C5FD' }}>智能</span>、更
          <span style={{ color: '#93C5FD' }}>便携</span>,也更易用。
        </>
      ),
    },
    footer: '随行云盘 · ooakloo · InnoX 暑期营项目陈述',
  },

  en: {
    hero: {
      title: 'Portable AI Storage Drive',
      subtitle: '随行云盘 · ooakloo',
      desc: (
        <>
          A <Strong>portable AI personal storage device for consumers</Strong> — combining the
          portability of an external drive, the privacy of NAS, and the modern interaction of cloud
          storage, so your data becomes a "near-field private space" that travels with you.
        </>
      ),
      stats: [
        { label: 'Team', value: '2 people', hint: 'Mobile / firmware + hardware' },
        { label: 'Software', value: 'Done', hint: 'iOS / macOS clients shipped' },
        { label: 'Hardware', value: 'In iteration', hint: 'Schematic redesign in progress' },
      ],
    },
    overview: {
      label: '00 · Project at a glance',
      title: "The consumer's pocket cloud.",
      body: (
        <>
          <p>
            Consumers today have only three storage choices: cloud drives, NAS, and external
            drives. Cloud drives are weak on privacy and require ongoing fees; NAS has a steep
            learning curve and isn't portable; external drives are wired, with primitive folders
            and a fragmented experience.
          </p>
          <p>
            Our portable AI drive is a <Strong>superset</Strong> of all three — as portable as an
            external drive, as private as a NAS, and as polished as a cloud app. We strip away the
            NAS learning curve, the cloud subscription, and the cable.
          </p>
        </>
      ),
    },
    insight: {
      label: '01 · Insight · How we found this problem',
      body: (
        <>
          <p>
            It started while studying abroad. I'd plug a hard drive into my iPad to watch
            shows from home, and when the iPad ran out of battery I had to unplug to charge —
            a terrible experience. With a Raspberry Pi Zero 2W on hand I built the first
            prototype in a week — UPnP-based, letting a phone and laptop play different
            movies in parallel.
          </p>
          <p>
            Once I came back, this specific pain "disappeared" and I briefly thought it was a
            fake demand. Then I came across Xiang Biao's idea of "the disappearance of the
            nearby" and realized —
            <Strong> users' storage needs mostly happen nearby, in the near-field</Strong>,
            and there is no product shaped for that today.
          </p>
        </>
      ),
    },
    topology: {
      label: '02 · Topology · Why this category is inevitable',
      title: 'The center of a triangle. The apex of a tetrahedron.',
      body: (
        <p>
          A simple geometric lens on the market: place today's three storage forms — cloud, NAS,
          external drive — at the vertices of an equilateral triangle.
          <Strong> The geometric center is exactly the Wi-Fi drive</Strong> — strictly better than
          any of the three: more portable than NAS, more private than cloud (no subscription),
          and wireless with a modern UI vs. traditional drives.
        </p>
      ),
      topoAlt: 'Equilateral triangle and tetrahedron storage topology',
      topoCaption:
        'Left: three storage forms on a plane + the center point (Wi-Fi drive). Right: lift to a tetrahedron and the Wi-Fi drive becomes the apex.',
      threeWaysTitle: 'Each existing solution misses something.',
      threeWaysBody: (
        <p>
          The geometric view is abstract — we score it on five concrete dimensions. Cloud, NAS, and
          external drive each cover one slice of consumer demand, but
          <Strong> none simultaneously delivers "private + portable + smart + low long-term cost"</Strong>.
        </p>
      ),
      matrixIntro: 'Five-axis assessment · X = score (full = 3) · Y = dimension',
      matrixHighlight: 'Pocket-cloud column highlighted',
      matrixDimColumn: 'Dimension',
      matrixCols: { cloud: 'Cloud', nas: 'NAS', hdd: 'External', ovita: 'Pocket cloud' },
      rows: [
        { key: 'Privacy', cloud: 1, nas: 3, hdd: 3, ovita: 3, note: 'Cloud has audit risk; the other three keep data local' },
        { key: 'Portability', cloud: 3, nas: 1, hdd: 2, ovita: 3, note: 'NAS is bulky and plugged in; external drives need cables' },
        { key: 'Smart UX', cloud: 2, nas: 1, hdd: 0, ovita: 3, note: 'NAS requires fiddling, drives are 1995-era folders' },
        { key: 'Long-term cost', cloud: 1, nas: 2, hdd: 3, ovita: 3, note: 'Cloud subscriptions stack; one-time buy wins long-term' },
        { key: 'Wireless / battery', cloud: 3, nas: 1, hdd: 1, ovita: 3, note: 'Only the pocket cloud is wireless and self-powered' },
      ],
      matrixFooterLeft: 'Higher = better · Full bar = 3',
      matrixFooterOthers: 'Other three',
      matrixFooterOurs: 'Pocket cloud',
      conclusion: (
        <>
          <Strong>Bottom line:</Strong>{' '}
          <span style={{ color: ACCENT_DEEP }}>
            The pocket cloud isn't "yet another drive" — it makes real
            <Strong> the missing center of the triangle</Strong>, landing on three product
            lines simultaneously: smart, portable, long battery.
          </span>
        </>
      ),
      closing: (
        <p className="mt-6">
          This category <Strong>will exist sooner or later</Strong>. We won't necessarily be the
          only player, but we want to be <Strong>the first to own that mindshare</Strong>.
        </p>
      ),
    },
    market: {
      label: "03 · Market · We don't benchmark a single category",
      body: (
        <p>
          We don't benchmark against a single category, but against
          <Strong> the entire consumer personal-data-storage market</Strong>. The product spans all
          three storage solutions, so we look at all three markets.
        </p>
      ),
      cards: [
        { title: 'NAS market', value: '≈ 25%', hint: 'Domestic YoY growth · meaningful headroom vs. overseas penetration' },
        { title: 'Consumer storage TAM', value: '¥80–120B', hint: 'Global consumer scale (RMB), domestic ≈ half · SSD CAGR ≈ 6.7%' },
        { title: 'Personal cloud (overseas)', value: '$10.4B', hint: 'iCloud 2024 estimated services revenue · ≈ 700M paid users' },
      ],
      sources:
        'Sources: iResearch / IDC / CAICT / Wall Street / CIRP / Trefis. We cross-validate from three angles rather than relying on a single report.',
    },
    audience: {
      label: '04 · Audience · Who uses it, and when',
      title:
        'Not "the consumer" in the abstract — specific people with specific pains, in specific frequency-and-network contexts.',
      personasHeading: "① Personas · Who's already paying for a workaround",
      personasIntro:
        'Not the general consumer — five groups clearly dissatisfied with the current options and already paying to make do:',
      personas: [
        {
          name: 'Cross-border / international traders',
          pain: 'Frequent device changes, cross-region work, lots of materials and correspondence to carry; iCloud is constrained, cloud uploads are slow, external drives need cables.',
          fit: 'Local-first + cross-device access + one-time purchase, no regional restrictions.',
        },
        {
          name: 'Creators / influencers',
          pain: 'Heavy raw footage; cloud is expensive and slow; NAS is too heavy to carry; current setups feel fragmented.',
          fit: 'Portable + high-throughput near-field sync + modern media browsing.',
        },
        {
          name: 'High-storage phone users (esp. women)',
          pain: 'Hours-long data migration when changing phones; phone makers solve it via "device lock-in + capacity stacking", but the real need is "centralized, take-anywhere data".',
          fit: 'Free data from device silos; consistent access across terminals.',
        },
        {
          name: 'Café owners / small-space operators',
          pain: 'Want to offer guests music / video / e-books in-store, but lack a stable, private, internet-independent way to host it.',
          fit: 'Public mode — turn the venue into a "near-field private utopia".',
        },
        {
          name: 'Indie developers / multi-device collaborators',
          pain: 'Cross-device tool sync is frequently locked into the cloud; a near-field, private, protocol-owned sync layer is missing.',
          fit: 'Acts as a "near-field data hub" for developers.',
        },
      ],
      painLabel: 'Pain:',
      fitLabel: 'Fit:',
      scenariosHeading: '② Scenarios · Frequency × Network',
      scenariosIntro: (
        <p>
          The same device delivers very different value across
          <Strong> frequency × network</Strong> conditions. Six representative ones:
        </p>
      ),
      scenarios: [
        { name: 'Commute', freq: 'high', net: 'weak', body: 'Watch video, listen to podcasts, browse books on the way to work — local, no carrier dependence.' },
        { name: 'Daily home', freq: 'high', net: 'strong', body: 'Movies in the living room, photos in the bedroom — same data, consistent across devices.' },
        { name: 'Travel / business', freq: 'mid', net: 'weakOrNone', body: 'Watch in the hotel, swap devices at the airport — no waiting on cloud uploads.' },
        { name: 'Field shooting', freq: 'low', net: 'none', body: 'Offload raw stills and video on location — bypass WeChat compression and upload waits.' },
        { name: 'Café public', freq: 'mid', net: 'weak', body: 'Owner publishes in-store private content; guests connect locally to consume it.' },
        { name: 'Gathering / on-the-go sharing', freq: 'occasional', net: 'none', body: 'One person carries it, everyone gets the originals — iOS / Android / desktop.' },
      ],
      keynote: (
        <>
          <Strong>Key point:</Strong>{' '}
          <span style={{ color: ACCENT_DEEP }}>
            What these scenarios share is —
            <Strong> unreliable network, multiple devices, heavy content</Strong>. Cloud / cloud
            photo libraries don't fit, NAS isn't portable, and external drives have a 1995-era
            UX. "Near-field private + modern experience" is the only form that holds up here.
          </span>
        </>
      ),
    },
    window: {
      label: '05 · Window · Why now, why us',
      title: "Incumbents can't do this — it would hurt their core business.",
      intro: (
        <p>
          This isn't a new idea overlooked by giants. It's a textbook
          <Strong> innovator's dilemma</Strong> — they see it, but can't move:
        </p>
      ),
      cards: [
        {
          title: 'UGreen / Synology',
          body: 'Doing this hurts their NAS business — their pricing, tiering and education costs are all built on "complexity".',
        },
        {
          title: 'Baidu Drive / Quark',
          body: 'Doing this hurts subscription cash flow — one-time purchase + local-first directly contradicts their model.',
        },
        {
          title: 'Samsung / WD / SanDisk',
          body: "Hardware capability, weak software / UX DNA — they ship faster drives, not better 'data companions'.",
        },
      ],
      closing: (
        <p className="mt-6">
          <Strong>That's our window.</Strong> Not that we're smarter than the giants, but that this
          falls outside their natural boundaries. Whoever moves first owns the "consumer pocket cloud"
          mindshare.
        </p>
      ),
    },
    scoring: {
      label: '06 · Honest assessment of the expected market',
      intro: (
        <p>
          Against external drives and NAS we are a <Strong>superset in form and experience</Strong>.
          Against cloud, our short-term per-TB cost isn't lower — but over the lifecycle, with
          local-first + privacy stacked on top, we're still the structurally better choice.
        </p>
      ),
      rows: [
        {
          label: 'vs External drive',
          highlight: true,
          note: 'Form-factor superset: wireless + cross-device access + modern UX. Aside from price, no reason left to keep buying traditional drives.',
        },
        {
          label: 'vs NAS',
          highlight: true,
          note: 'Strip away the learning curve and lack of portability; UX-tune for video / music / photos — bring in the casual users NAS keeps out.',
        },
        {
          label: 'vs Cloud',
          highlight: false,
          note: 'Cloud is cheaper per TB short-term; over a longer horizon, one-time purchase is lower total cost, with local-first + privacy as structural advantages.',
        },
      ],
      moat: (
        <>
          <Strong>The cloud moat is just cost.</Strong> Once our software experience matches or
          surpasses cloud, "one-time vs. subscription" framing plus the privacy concern lets us
          continue to chip away at this market.
        </>
      ),
    },
    objections: {
      label: '07 · Common objections',
      q1Title: '① Another way to read "low access frequency"',
      q1: (
        <>
          <p>
            Open up most people's external drives and you'll find the same pattern: most of what's
            stored rarely gets accessed again.
          </p>
          <p>
            We tend to <Strong>read this in reverse</Strong>. Because the traditional drive
            experience is high-friction (organizing takes effort, viewing needs a cable, raw
            folders, poor reading UX), users
            <Strong> only put "unimportant, low-frequency" data in there</Strong>. Bad UX is
            filtering out the high-frequency demand — not the absence of high-frequency demand.
            "Low-frequency access" is a behavioral consequence, not the nature of the need.
          </p>
        </>
      ),
      q2Title: '② Big-storage phones — we see opportunity, not threat',
      q2: (
        <>
          <p>
            A common challenge: "Phone storage keeps getting bigger — doesn't that make your
            product more awkward?"
          </p>
          <p>
            We see it differently — phone makers pushing capacity from 128GB up to 1TB is itself
            evidence that <Strong>users will pay for "data on me, easy to access"</Strong>. Their
            answer is <Strong>device lock-in + siloed storage</Strong>; we want to start from the
            need itself and offer a <Strong>cross-device, centrally manageable</Strong> alternative.
          </p>
          <p>
            For example, switching iPhones takes hours of data migration — a frequently overlooked
            pain for cross-border traders, creators, and high-storage phone users. Apple's solution
            isn't necessarily what users want; it's what fits Apple's framing.
          </p>
          <p>
            <Strong>Apple itself is corroborating evidence.</Strong> As the company with the
            deepest read on consumer electronics and the most complete user-data signals, its
            product choices are themselves market signals — slow updates or discontinuation for
            small-segment products like the small-screen iPhone or iPad mini, but a high-capacity
            variant for every iPhone since the 15. A segment Apple keeps shipping for, generation
            after generation, is real and large enough to matter.
          </p>
        </>
      ),
      signalsLabel: 'Public-content signals from the market',
      signalATitle: 'Signal A · KOL phone migration: still syncing after two hours',
      signalABody: (
        <>
          Mainstream creators upgrade to the latest large-capacity iPhone every year, and
          "switching-day data sync" is a publicly aired pain point. Take Bilibili creator
          <Strong> Albert (艾叔)</Strong>'s iPhone 17 unboxing: in the screenshots, sync between
          two phones starts at <Strong>18:43</Strong> and is still in progress at
          <Strong> 20:43</Strong> — two hours, still going. This is exactly the scenario we want
          our <Strong>"decentralized pocket cloud"</Strong> to absorb: data no longer chained to
          a single device.
        </>
      ),
      signalAImages: [
        { src: '/innox/research/kol-sync-1843.png', caption: '18:43 · sync just started' },
        { src: '/innox/research/kol-sync-2043.png', caption: '20:43 · still syncing two hours later' },
      ],
      signalBTitle: 'Signal B · Views & comments on iPhone-photo-backup content',
      signalBBody: (
        <>
          Searching Bilibili for "iPhone photo backup" or "Live Photo backup" shows a flood of
          creators around <Strong>Apple photo / Live Photo backup</Strong> — individual videos
          regularly reach hundreds of thousands to millions of views, evidence that the audience
          is large and the topic is hot. Comments frequently bring up
          <Strong> Google Photos / Drive</Strong> as alternatives, but for users in mainland
          China that path has structural barriers — <Strong>VPN, payment, network reliability</Strong>.
          That's exactly the gap we plan to fill.
        </>
      ),
      signalBImages: [
        { src: '/innox/research/bilibili-search-results.png', caption: 'Bilibili "iPhone photo backup" search · individual videos at 120K–1.38M views' },
        { src: '/innox/research/bilibili-backup-views.png', caption: 'Huangyang ME · backup tutorial · comments frequently discuss Google Photos / iCloud alternatives' },
      ],
      q3Title: '③ Storage prices going up — what does that mean for us',
      q3: (
        <>
          <p>
            Another frequent question: "Storage is getting more expensive — how do you handle
            cost and pricing?"
          </p>
          <p>
            <Strong>Short-term, supply-side has a cushion.</Strong> Storage is a cyclical
            commodity, and manufacturers usually sign long-term contracts — prices won't swing
            wildly within a generation or two. When the next round of contracts expire, the
            industry will either eat the margin or raise prices. Other mainstream hardware
            accessories are already raising prices, and users can already feel it.
          </p>
          <p>
            <Strong>The user side is more telling.</Strong> Two years ago an SSD module was
            ¥400; now it's ¥1,400 — two more sticks costs the same as our entire device. When
            storage was cheap, users responded with "add another stick" or "buy a 1TB iPhone";
            but a 1TB phone gets retired with the device in a year or two, and most of that
            capacity ends up <Strong>idle and siloed</Strong>.
          </p>
          <p>
            What we want to do is <Strong>centrally reuse</Strong> the storage scattered across
            each device — buying less, wasting less. Not just savings — it's also a kind of
            <Strong> storage sustainability</Strong>: every SSD gets used to capacity, instead
            of every device hoarding a 1TB chip and letting most of it sit idle.
          </p>
        </>
      ),
    },
    solution: {
      label: '08 · Solution · More than a "wireless drive"',
      title: 'A "pocket cloud" — a device that hosts your near-field private space.',
      intro: (
        <>
          <p>
            On the surface we're a "portable wireless drive"; internally we frame the product
            as a <Strong>"pocket cloud"</Strong> — not just another peripheral, but a
            <Strong> near-field data hub</Strong> at your side.
          </p>
          <p>Beyond personal backup, the device unlocks scenarios like:</p>
        </>
      ),
      cards: [
        {
          icon: Coffee,
          title: 'Café · public mode',
          body: 'Owners drop in their music, video, e-books; guests connect to the in-store private space, internet-independent, rebuilding the "nearby".',
        },
        {
          icon: Mountain,
          title: 'Outdoor · trip sharing',
          body: 'One person carries it; iOS / Android / desktop all pick up the day\'s originals losslessly — no WeChat compression, no upload waiting.',
        },
        {
          icon: Smartphone,
          title: 'Indie dev · cross-device sync',
          body: (
            <>
              Indie devs are exploding post-AI. Once a tool touches data, multi-device sync
              tends to mean either "iOS lock-in" or being chained to remote cloud — and remote
              cloud itself is a <Strong>compromise born from missing a near-field carrier</Strong>.
              We provide a <Strong>near-field sync SDK</Strong> so tool-class apps can sync
              across the user's devices without going to the cloud.
            </>
          ),
        },
      ],
    },
    architecture: {
      sectionLabel: '08+ · Architecture deep-dive · collapsed by default · click to expand',
      title: 'One layer deeper: three evolution drivers · permission topology.',
      intro: (
        <>
          This section maps the prior pages into the product itself — what
          <Strong> consumer-electronics evolution trends we satisfy</Strong>, and how the
          <Strong> permission topology</Strong> behind the device is organized.
        </>
      ),
      section1Tag: 'section 1',
      section1Heading: 'Three evolution directions of consumer electronics.',
      section1Intro: (
        <p>
          Over the past decade the iteration arc of consumer electronics has been on three
          axes: <Strong>smart, portable, long-lived</Strong>. Phones, earbuds, wearables — all
          on the same trajectory. "Personal data storage" is the one category that essentially
          stayed in the previous decade.
        </p>
      ),
      section1Cards: [
        {
          icon: Sparkles,
          title: 'Smart',
          body: 'Data needs to be understood, searched, recommended — not just stored. From photo recognition and auto-organization to AI summaries and conversational retrieval, "interaction" is the core of the new storage.',
        },
        {
          icon: Smartphone,
          title: 'Portable',
          body: 'Travels with the user, not anchored in one corner. Phones, AirPods, Apple Watch wrote "carry-anywhere" into their DNA — there\'s no reason storage should still need a cable on a desk.',
        },
        {
          icon: BatteryFull,
          title: 'Long battery',
          body: 'Low power, always-on. Battery life is the foundation of a truly carry-anywhere device — or it just becomes another source of charging anxiety.',
        },
      ],
      section2Tag: 'section 2',
      section2Heading: 'Permission topology: three concentric rings — insiders · friends · strangers.',
      section2Body: (
        <>
          <p>
            We model permissions as <Strong>rings rippling outward</Strong>. Innermost are
            <Strong> insiders</Strong> — Owner is the device's primary, Member is the same
            owner's <Strong>secondary devices</Strong> (iPad / Android / desktop), addressing the
            "users have more than one device" reality. Outside that are
            <Strong> friends</Strong> (Participants), who join via invite code and see the circles
            they joined. Outermost are <Strong>strangers</Strong> (Guests), who see only public
            content.
          </p>
          <p>
            On top of identity sits an <Strong>independent dimension — circle type</Strong>: the
            same device can host both a <Strong>Public circle</Strong> (covers all three rings)
            and a <Strong>Private circle</Strong> (only the inner two), and the Owner can flip
            outside exposure with one tap.
          </p>
        </>
      ),
      svgAria: 'oVita permission topology: three-ring identity + Public/Private content circles as two independent dimensions',
      svgDeviceSub: 'Device',
      svgCallouts: {
        insider: { title: 'Insider', sub: 'Owner · Member', line1: 'Owner + paired secondaries', line2: 'iPad · Android · Desktop' },
        friend: { title: 'Friend', sub: 'Participant', line1: 'Joins Private circle via invite' },
        stranger: { title: 'Stranger', sub: 'Guest', line1: 'Sees Public circle only' },
        pubBadge: 'PUBLIC',
        pubLine1: 'Covers 1 + 2 + 3',
        pubLine2: 'Visible to anyone',
        privBadge: 'PRIVATE',
        privLine1: 'Covers 1 + 2 · not 3',
        privLine2: 'Invite-only space',
        legendIdentity: 'Axis 1 · Identity · concentric rings ① ② ③',
        legendContent: 'Axis 2 · Content · Public / Private circles',
        legendCaption: 'Two axes are independent',
      },
      designIntuition: (
        <>
          <Strong>Design intuition:</Strong> the three rings decide
          <Strong> who can see</Strong> (insider → friend → stranger); Public / Private decide
          <Strong> what they see</Strong>. The two are independent — the same device can host
          "café public mode" and "family private backup" simultaneously, and the Owner can
          switch outside exposure with one tap.
        </>
      ),
    },
    team: {
      label: '09 · Team',
      title: 'Two people. Mobile / firmware / hardware / product — full coverage.',
      members: [
        {
          name: 'Yang Dongju',
          role: 'Mobile · Product · CEO',
          bio: 'Previously at Huawei, ByteDance, DJI. Mobile development, product design, UX, software architecture, and software-hardware interaction. Owns product definition, the client, and user insight.',
        },
        {
          name: 'Li Hao',
          role: 'Firmware · Hardware',
          bio: 'Former DJI firmware engineer focused on firmware and board-level systems. Owns the embedded system, in-house PCB, power and wireless design, and hardware feasibility.',
        },
      ],
      fieldHeading: 'Engineering on the ground:',
      photos: [
        { src: '/innox/workstation.webp', caption: 'iOS / macOS client development' },
        { src: '/innox/engineer-at-work.webp', caption: 'Firmware debugging · flashing' },
        { src: '/innox/custom-pcb.webp', caption: 'In-house PCB' },
        { src: '/innox/prototype-sbc.webp', caption: 'Early SBC prototype' },
      ],
    },
    stage: {
      label: '10 · Current stage',
      title: 'Software shipped · hardware iterating · real paying intent already exists.',
      body: (
        <>
          <p>
            Software: iOS and macOS clients are core-complete — device pairing, file management,
            and media playback main flows all work end-to-end. Currently in polish.
          </p>
          <p>Hardware: PCB schematic design has begun.</p>
          <p>Firmware: low-level performance tuning (long battery, high stability, fast startup, fast transfer).</p>
          <p>
            <Strong>Validation:</Strong> we haven't been working in a vacuum — we've been doing
            small-group interviews in cafés and within our personal networks. Some of those
            interviews converted directly into <Strong>letters of intent</Strong>, giving us
            initial confidence that the problem is real and people will pay.
          </p>
        </>
      ),
    },
    roadmap: {
      label: '11 · Roadmap & what we want from InnoX',
      title: 'Prototype → small batch — the hardest part is manufacturing and supply chain.',
      items: [
        { stage: 'Stage 1', t: 'Software v1 experience loop', s: 'Done', b: 'Core client flows + closed-beta feedback loop.', status: 'completed' },
        { stage: 'Stage 2', t: 'Hardware tuning', s: 'In progress', b: 'Wireless throughput / power / thermals / stability.', status: 'in-progress' },
        { stage: 'Stage 3', t: 'Engineering sample convergence', s: 'Next', b: 'A complete working sample, ready for small batches.', status: 'next' },
        { stage: 'Stage 4', t: 'Small-batch + early users', s: 'Next', b: 'Needs supply-chain and manufacturing experience.', status: 'next' },
      ],
      askTitle: 'What we hope to get from InnoX:',
      askItems: [
        'Manufacturing / supply-chain mentors — our biggest gap',
        'Veteran input on consumer-electronics product definition / industrial design',
        'A peer network — other hardware founders to compare notes with',
        'Engineering resources to bridge prototype → small batch',
      ],
    },
    vision: {
      badge: 'Vision',
      body: (
        <>
          Bring personal data back to where the user is — more
          <span style={{ color: '#93C5FD' }}> private</span>, more
          <span style={{ color: '#93C5FD' }}> intelligent</span>, more
          <span style={{ color: '#93C5FD' }}> portable</span>, and easier to use.
        </>
      ),
    },
    footer: 'Portable AI Storage Drive · ooakloo · InnoX Summer Camp pitch',
  },
};

/* ---------------- 页面 ---------------- */

export default function InnoxPitchPage() {
  const params = useParams();
  const langParam = (params?.lang as string | undefined) || 'cn';
  const lang: Locale = langParam === 'en' ? 'en' : 'cn';
  const t = CONTENT[lang];

  return (
    <div className="min-h-screen bg-[#f8f8f8] py-10 md:py-16 px-4 md:px-6">
      <InnoxTocSidebar groups={TOC_GROUPS[lang]} />
      <div className="mx-auto max-w-4xl space-y-6">
        {/* 顶部:标识 + 主标题 */}
        <Card delay={0.05} className="md:p-14">
          <div className="flex items-start gap-5 mb-6">
            <div
              className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
            >
              <HardDrive size={26} />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold text-neutral-800 leading-tight tracking-tight">
                {t.hero.title}
              </h1>
              <p className="text-[15px] md:text-[17px] text-neutral-400 mt-2 font-medium">
                {t.hero.subtitle}
              </p>
            </div>
          </div>

          <p className="text-[16px] md:text-[18px] leading-relaxed text-neutral-600 max-w-3xl">
            {t.hero.desc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-10">
            {t.hero.stats.map((s) => (
              <StatCard key={s.label} label={s.label} value={s.value} hint={s.hint} />
            ))}
          </div>
        </Card>

        {/* 一分钟 Pitch */}
        <Card id="overview" delay={0.1}>
          <SectionLabel>{t.overview.label}</SectionLabel>
          <SectionTitle>{t.overview.title}</SectionTitle>
          <Prose>{t.overview.body}</Prose>
        </Card>

        {/* 01 · Insight */}
        <Card id="insight" delay={0.15}>
          <SectionLabel>{t.insight.label}</SectionLabel>
          <Prose>{t.insight.body}</Prose>
        </Card>

        {/* 02 · 几何拓扑 */}
        <Card id="topology" delay={0.2}>
          <SectionLabel>{t.topology.label}</SectionLabel>
          <SectionTitle>{t.topology.title}</SectionTitle>
          <Prose>{t.topology.body}</Prose>

          <div className="bg-neutral-50 rounded-2xl p-6 md:p-8 mt-6">
            <div className="aspect-[681/400] w-full max-w-3xl mx-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/innox/topology.svg"
                alt={t.topology.topoAlt}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-[12px] text-neutral-500 text-center mt-3 leading-relaxed">
              {t.topology.topoCaption}
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-xl md:text-[22px] font-semibold text-neutral-800 mb-3 leading-tight">
              {t.topology.threeWaysTitle}
            </h3>
            <Prose>{t.topology.threeWaysBody}</Prose>

            {/* 评分表 */}
            <div className="bg-neutral-50 rounded-2xl p-5 md:p-6 mt-3 overflow-x-auto">
              <div className="flex items-baseline justify-between mb-4 px-1">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                  {t.topology.matrixIntro}
                </div>
                <div
                  className="text-[10px] font-semibold uppercase tracking-wider"
                  style={{ color: ACCENT }}
                >
                  {t.topology.matrixHighlight}
                </div>
              </div>
              <table
                className="w-full border-collapse"
                style={{ minWidth: '560px', tableLayout: 'fixed' }}
              >
                <colgroup>
                  <col style={{ width: '24%' }} />
                  <col style={{ width: '19%' }} />
                  <col style={{ width: '19%' }} />
                  <col style={{ width: '19%' }} />
                  <col style={{ width: '19%', backgroundColor: ACCENT_LIGHT }} />
                </colgroup>
                <thead>
                  <tr className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400">
                    <th className="text-left pb-3 pr-3 font-semibold">
                      {t.topology.matrixDimColumn}
                    </th>
                    <th className="pb-3 px-2 font-semibold">
                      <div className="flex items-center justify-center gap-1.5">
                        <Cloud size={12} />
                        {t.topology.matrixCols.cloud}
                      </div>
                    </th>
                    <th className="pb-3 px-2 font-semibold">
                      <div className="flex items-center justify-center gap-1.5">
                        <Cpu size={12} />
                        {t.topology.matrixCols.nas}
                      </div>
                    </th>
                    <th className="pb-3 px-2 font-semibold">
                      <div className="flex items-center justify-center gap-1.5">
                        <HardDrive size={12} />
                        {t.topology.matrixCols.hdd}
                      </div>
                    </th>
                    <th className="pb-3 px-2 font-semibold" style={{ color: ACCENT }}>
                      <div className="flex items-center justify-center gap-1.5">
                        <Sparkles size={12} />
                        {t.topology.matrixCols.ovita}
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {t.topology.rows.map((d, i) => (
                    <tr key={d.key} className={i > 0 ? 'border-t border-neutral-200/60' : ''}>
                      <td className="py-3.5 pr-3 align-middle">
                        <div className="text-[13px] font-medium text-neutral-700">{d.key}</div>
                        <div className="text-[11px] text-neutral-400 mt-0.5 leading-tight">
                          {d.note}
                        </div>
                      </td>
                      {[
                        { v: d.cloud, accent: false },
                        { v: d.nas, accent: false },
                        { v: d.hdd, accent: false },
                        { v: d.ovita, accent: true },
                      ].map((cell, idx) => (
                        <td key={idx} className="py-3.5 px-2 align-middle">
                          <div className="flex items-center gap-2">
                            <div
                              className="relative h-2 flex-1 rounded-full"
                              style={{ backgroundColor: '#E5E7EB' }}
                            >
                              <div
                                className="absolute left-0 top-0 h-full rounded-full transition-all"
                                style={{
                                  width: `${(cell.v / 3) * 100}%`,
                                  backgroundColor: cell.accent ? ACCENT : '#9CA3AF',
                                }}
                              />
                            </div>
                            <span
                              className="text-[11px] font-semibold tabular-nums shrink-0 w-3 text-right"
                              style={{ color: cell.accent ? ACCENT : '#6B7280' }}
                            >
                              {cell.v}
                            </span>
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex items-center justify-between mt-4 px-1 text-[10.5px] text-neutral-400">
                <span>{t.topology.matrixFooterLeft}</span>
                <span className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <span
                      className="inline-block w-3 h-1.5 rounded-full"
                      style={{ backgroundColor: '#9CA3AF' }}
                    />
                    {t.topology.matrixFooterOthers}
                  </span>
                  <span className="flex items-center gap-1.5 font-semibold" style={{ color: ACCENT }}>
                    <span
                      className="inline-block w-3 h-1.5 rounded-full"
                      style={{ backgroundColor: ACCENT }}
                    />
                    {t.topology.matrixFooterOurs}
                  </span>
                </span>
              </div>
            </div>

            <div
              className="rounded-2xl p-5 mt-4 flex items-start gap-3"
              style={{ backgroundColor: ACCENT_LIGHT }}
            >
              <Layers size={18} style={{ color: ACCENT }} className="shrink-0 mt-0.5" />
              <p className="text-[13px] leading-relaxed" style={{ color: ACCENT_DEEP }}>
                {t.topology.conclusion}
              </p>
            </div>
          </div>

          <Prose>{t.topology.closing}</Prose>
        </Card>

        {/* 03 · 市场盘子 */}
        <Card id="market" delay={0.25}>
          <SectionLabel>{t.market.label}</SectionLabel>
          <Prose>{t.market.body}</Prose>

          <div className="grid md:grid-cols-3 gap-3 mt-6">
            {t.market.cards.map((c, i) => {
              const Icon = [Cpu, HardDrive, Cloud][i];
              return (
                <div key={c.title} className="bg-neutral-50 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon size={16} style={{ color: ACCENT }} />
                    <div className="text-[13px] font-semibold text-neutral-800">{c.title}</div>
                  </div>
                  <div className="text-[20px] font-semibold text-neutral-800 mb-1">{c.value}</div>
                  <div className="text-[12px] text-neutral-500 leading-relaxed">{c.hint}</div>
                </div>
              );
            })}
          </div>

          <div
            className="rounded-2xl p-5 mt-4 flex items-start gap-3"
            style={{ backgroundColor: '#F9FAFB' }}
          >
            <TrendingUp size={18} className="shrink-0 mt-0.5 text-neutral-500" />
            <p className="text-[13px] leading-relaxed text-neutral-600">{t.market.sources}</p>
          </div>
        </Card>

        {/* 04 · 用户 · 场景 */}
        <Card id="audience" delay={0.275}>
          <SectionLabel>{t.audience.label}</SectionLabel>
          <SectionTitle>{t.audience.title}</SectionTitle>

          <h3 className="text-[17px] font-semibold text-neutral-800 leading-snug mt-2 mb-3">
            {t.audience.personasHeading}
          </h3>
          <Prose>
            <p>{t.audience.personasIntro}</p>
          </Prose>
          <div className="grid md:grid-cols-2 gap-3 mt-4">
            {t.audience.personas.map((u, i) => (
              <div key={i} className="bg-neutral-50 rounded-2xl p-5">
                <div className="text-[13px] font-semibold text-neutral-800 mb-2">{u.name}</div>
                <p className="text-[12px] leading-relaxed text-neutral-600 mb-1.5">
                  <span className="font-medium text-neutral-700">{t.audience.painLabel}</span>{' '}
                  {u.pain}
                </p>
                <p className="text-[12px] leading-relaxed text-neutral-600">
                  <span className="font-medium text-neutral-700">{t.audience.fitLabel}</span>{' '}
                  {u.fit}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-[17px] font-semibold text-neutral-800 leading-snug mt-10 mb-3">
            {t.audience.scenariosHeading}
          </h3>
          <Prose>{t.audience.scenariosIntro}</Prose>
          <div className="grid md:grid-cols-3 gap-3 mt-4">
            {t.audience.scenarios.map((s, i) => (
              <div key={i} className="bg-neutral-50 rounded-2xl p-5">
                <div className="text-[13px] font-semibold text-neutral-800 mb-2">{s.name}</div>
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  <Chip tone={FREQ_TONE[s.freq]}>{FREQ_LABEL[lang][s.freq]}</Chip>
                  <Chip tone={NET_TONE[s.net]}>{NET_LABEL[lang][s.net]}</Chip>
                </div>
                <p className="text-[12px] leading-relaxed text-neutral-600">{s.body}</p>
              </div>
            ))}
          </div>

          <div
            className="rounded-2xl p-5 mt-6 flex items-start gap-3"
            style={{ backgroundColor: ACCENT_LIGHT }}
          >
            <Layers size={18} style={{ color: ACCENT }} className="shrink-0 mt-0.5" />
            <p className="text-[14px] leading-relaxed" style={{ color: ACCENT_DEEP }}>
              {t.audience.keynote}
            </p>
          </div>
        </Card>

        {/* 05 · 时间窗口 */}
        <Card id="window" delay={0.3}>
          <SectionLabel>{t.window.label}</SectionLabel>
          <SectionTitle>{t.window.title}</SectionTitle>
          <Prose>{t.window.intro}</Prose>

          <div className="grid md:grid-cols-3 gap-3 mt-6">
            {t.window.cards.map((c) => (
              <div key={c.title} className="bg-neutral-50 rounded-2xl p-5">
                <div className="text-[13px] font-semibold text-neutral-800 mb-2">{c.title}</div>
                <p className="text-[13px] leading-relaxed text-neutral-600">{c.body}</p>
              </div>
            ))}
          </div>

          <Prose>{t.window.closing}</Prose>
        </Card>

        {/* 06 · 评估 */}
        <Card id="scoring" delay={0.35}>
          <SectionLabel>{t.scoring.label}</SectionLabel>
          <Prose>{t.scoring.intro}</Prose>

          <div className="bg-neutral-50 rounded-2xl p-6 mt-6 divide-y divide-neutral-200">
            {t.scoring.rows.map((r) => (
              <CompetitorRow
                key={r.label}
                label={r.label}
                note={r.note}
                highlight={r.highlight}
              />
            ))}
          </div>

          <div
            className="rounded-2xl p-5 mt-6 flex items-start gap-3"
            style={{ backgroundColor: ACCENT_LIGHT }}
          >
            <ShieldCheck size={18} style={{ color: ACCENT }} className="shrink-0 mt-0.5" />
            <p className="text-[14px] leading-relaxed" style={{ color: ACCENT_DEEP }}>
              {t.scoring.moat}
            </p>
          </div>
        </Card>

        {/* 07 · Objections */}
        <Card id="objections" delay={0.4}>
          <SectionLabel>{t.objections.label}</SectionLabel>

          <h3 className="text-[17px] font-semibold text-neutral-800 leading-snug mt-2 mb-3">
            {t.objections.q1Title}
          </h3>
          <Prose>{t.objections.q1}</Prose>

          <h3 className="text-[17px] font-semibold text-neutral-800 leading-snug mt-10 mb-3">
            {t.objections.q2Title}
          </h3>
          <Prose>{t.objections.q2}</Prose>

          {/* 市场信号 */}
          <div className="mt-8 space-y-3">
            <div
              className="text-[12px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: ACCENT }}
            >
              {t.objections.signalsLabel}
            </div>

            <div className="bg-neutral-50 rounded-2xl p-5">
              <div className="text-[14px] font-semibold text-neutral-800 mb-1.5">
                {t.objections.signalATitle}
              </div>
              <p className="text-[13px] leading-relaxed text-neutral-600 mb-3">
                {t.objections.signalABody}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {t.objections.signalAImages.map((img) => (
                  <figure
                    key={img.src}
                    className="bg-white rounded-xl overflow-hidden border border-neutral-200/60"
                  >
                    <div className="relative aspect-[9/16]">
                      <Image
                        src={img.src}
                        alt={img.caption}
                        fill
                        sizes="(max-width: 768px) 50vw, 240px"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="text-[11px] text-neutral-500 px-3 py-2 leading-relaxed">
                      {img.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-5">
              <div className="text-[14px] font-semibold text-neutral-800 mb-1.5">
                {t.objections.signalBTitle}
              </div>
              <p className="text-[13px] leading-relaxed text-neutral-600 mb-3">
                {t.objections.signalBBody}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {t.objections.signalBImages.map((img) => (
                  <figure key={img.src} className="bg-neutral-900 rounded-xl overflow-hidden">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={img.src}
                        alt={img.caption}
                        fill
                        sizes="(max-width: 768px) 100vw, 360px"
                        className="object-contain"
                      />
                    </div>
                    <figcaption className="text-[11px] text-neutral-500 px-3 py-2 leading-relaxed bg-white">
                      {img.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>

          <h3 className="text-[17px] font-semibold text-neutral-800 leading-snug mt-10 mb-3">
            {t.objections.q3Title}
          </h3>
          <Prose>{t.objections.q3}</Prose>
        </Card>

        {/* 08 · Solution */}
        <Card id="solution" delay={0.45}>
          <SectionLabel>{t.solution.label}</SectionLabel>
          <SectionTitle>{t.solution.title}</SectionTitle>
          <Prose>{t.solution.intro}</Prose>

          <div className="grid md:grid-cols-3 gap-3 mt-6">
            {t.solution.cards.map((c) => (
              <div key={c.title} className="bg-neutral-50 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <c.icon size={16} style={{ color: ACCENT }} />
                  <div className="text-[13px] font-semibold text-neutral-800">{c.title}</div>
                </div>
                <p className="text-[13px] leading-relaxed text-neutral-600">{c.body}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* 08+ · 架构详解 */}
        <details
          id="architecture"
          className="reveal rounded-3xl bg-white overflow-hidden group"
          style={{ '--reveal-delay': '0.48s' } as React.CSSProperties}
        >
          <summary className="cursor-pointer list-none p-8 md:p-12 select-none [&::-webkit-details-marker]:hidden">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <SectionLabel>{t.architecture.sectionLabel}</SectionLabel>
                <h2 className="text-2xl md:text-3xl font-semibold text-neutral-800 mb-3 leading-tight">
                  {t.architecture.title}
                </h2>
                <p className="text-[14px] leading-relaxed text-neutral-500">
                  {t.architecture.intro}
                </p>
              </div>
              <div
                className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-open:rotate-180"
                style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
              >
                <ChevronDown size={18} />
              </div>
            </div>
          </summary>

          <div className="px-8 md:px-12 pb-10 md:pb-14 border-t border-neutral-100">
            {/* === 1. 三大演进方向 === */}
            <div className="pt-10 md:pt-12">
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400 mb-2">
                {t.architecture.section1Tag}
              </div>
              <h3 className="text-xl md:text-[22px] font-semibold text-neutral-800 mb-3 leading-tight">
                {t.architecture.section1Heading}
              </h3>
              <Prose>{t.architecture.section1Intro}</Prose>
              <div className="grid md:grid-cols-3 gap-3 mt-6">
                {t.architecture.section1Cards.map((p) => (
                  <div key={p.title} className="bg-neutral-50 rounded-2xl p-5">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                      style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                    >
                      <p.icon size={18} />
                    </div>
                    <div className="text-[14px] font-semibold text-neutral-800 mb-1.5">
                      {p.title}
                    </div>
                    <p className="text-[12.5px] leading-relaxed text-neutral-600">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* === 2. 权限拓扑 === */}
            <div className="pt-12 md:pt-14">
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400 mb-2">
                {t.architecture.section2Tag}
              </div>
              <h3 className="text-xl md:text-[22px] font-semibold text-neutral-800 mb-3 leading-tight">
                {t.architecture.section2Heading}
              </h3>
              <Prose>{t.architecture.section2Body}</Prose>

              {/* SVG */}
              <div className="rounded-2xl mt-6 p-6 md:p-10 bg-neutral-50 border border-neutral-200">
                <svg
                  viewBox="0 0 720 520"
                  className="w-full max-w-[700px] mx-auto block"
                  role="img"
                  aria-label={t.architecture.svgAria}
                  style={{
                    fontFamily:
                      'system-ui, -apple-system, "Segoe UI", "PingFang SC", "Hiragino Sans GB", sans-serif',
                  }}
                >
                  {/* 同心圆 */}
                  <circle cx="240" cy="260" r="215" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
                  <circle cx="240" cy="260" r="148" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1" />
                  <circle cx="240" cy="260" r="88" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.2" />

                  {/* 中心设备 */}
                  <circle cx="240" cy="260" r="44" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.2" />
                  <text
                    x="240"
                    y="256"
                    textAnchor="middle"
                    fill="#0F172A"
                    fontSize="13.5"
                    fontWeight="600"
                    style={{ letterSpacing: '0.04em' }}
                  >
                    oVita
                  </text>
                  <text x="240" y="273" textAnchor="middle" fill="#64748B" fontSize="10">
                    {t.architecture.svgDeviceSub}
                  </text>

                  {/* Callout 1 · 自己人 */}
                  <line x1="308.0" y1="212.4" x2="316.2" y2="206.7" stroke="#94A3B8" strokeWidth="1.6" strokeLinecap="round" />
                  <polyline points="316.2,206.7 430,108 462,108" fill="none" stroke="#CBD5E1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="473" cy="108" r="12" fill="#2563EB" />
                  <text x="473" y="112.5" textAnchor="middle" fill="white" fontSize="12.5" fontWeight="700">1</text>
                  <text x="494" y="100" fontSize="14" fontWeight="600" fill="#0F172A">
                    {t.architecture.svgCallouts.insider.title}
                  </text>
                  <text x="494" y="118" fontSize="12" fill="#475569" fontWeight="500">
                    {t.architecture.svgCallouts.insider.sub}
                  </text>
                  <text x="494" y="135" fontSize="11" fill="#64748B">
                    {t.architecture.svgCallouts.insider.line1}
                  </text>
                  <text x="494" y="150" fontSize="11" fill="#64748B">
                    {t.architecture.svgCallouts.insider.line2}
                  </text>

                  {/* Callout 2 · 朋友 */}
                  <line x1="382.4" y1="272.5" x2="392.4" y2="273.4" stroke="#94A3B8" strokeWidth="1.6" strokeLinecap="round" />
                  <polyline points="392.4,273.4 448,250 462,250" fill="none" stroke="#CBD5E1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="473" cy="250" r="12" fill="#F59E0B" />
                  <text x="473" y="254.5" textAnchor="middle" fill="white" fontSize="12.5" fontWeight="700">2</text>
                  <text x="494" y="242" fontSize="14" fontWeight="600" fill="#0F172A">
                    {t.architecture.svgCallouts.friend.title}
                  </text>
                  <text x="494" y="260" fontSize="12" fill="#475569" fontWeight="500">
                    {t.architecture.svgCallouts.friend.sub}
                  </text>
                  <text x="494" y="277" fontSize="11" fill="#64748B">
                    {t.architecture.svgCallouts.friend.line1}
                  </text>

                  {/* Callout 3 · 陌生人 */}
                  <line x1="421.9" y1="365.0" x2="430.5" y2="370.0" stroke="#94A3B8" strokeWidth="1.6" strokeLinecap="round" />
                  <polyline points="430.5,370 448,400 462,400" fill="none" stroke="#CBD5E1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="473" cy="400" r="12" fill="#94A3B8" />
                  <text x="473" y="404.5" textAnchor="middle" fill="white" fontSize="12.5" fontWeight="700">3</text>
                  <text x="494" y="392" fontSize="14" fontWeight="600" fill="#0F172A">
                    {t.architecture.svgCallouts.stranger.title}
                  </text>
                  <text x="494" y="410" fontSize="12" fill="#475569" fontWeight="500">
                    {t.architecture.svgCallouts.stranger.sub}
                  </text>
                  <text x="494" y="427" fontSize="11" fill="#64748B">
                    {t.architecture.svgCallouts.stranger.line1}
                  </text>

                  {/* Callout 4 · Public */}
                  <line x1="42.6" y1="188.2" x2="33.2" y2="184.8" stroke="#94A3B8" strokeWidth="1.6" strokeLinecap="round" />
                  <polyline points="33.2,184.8 28,140 28,118" fill="none" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="14" y="92" width="80" height="22" rx="5" fill="#2563EB" />
                  <text x="54" y="107" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" style={{ letterSpacing: '0.1em' }}>
                    {t.architecture.svgCallouts.pubBadge}
                  </text>
                  <text x="14" y="132" fontSize="11" fontWeight="600" fill="#1E40AF">
                    {t.architecture.svgCallouts.pubLine1}
                  </text>
                  <text x="14" y="148" fontSize="10.5" fill="#64748B">
                    {t.architecture.svgCallouts.pubLine2}
                  </text>

                  {/* Callout 5 · Private */}
                  <line x1="101.9" y1="297.0" x2="92.2" y2="299.6" stroke="#94A3B8" strokeWidth="1.6" strokeLinecap="round" />
                  <polyline points="92.2,299.6 50,360 28,392" fill="none" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="14" y="396" width="86" height="22" rx="5" fill="white" stroke="#2563EB" strokeWidth="1.5" />
                  <text x="57" y="411" textAnchor="middle" fill="#1E40AF" fontSize="11" fontWeight="700" style={{ letterSpacing: '0.1em' }}>
                    {t.architecture.svgCallouts.privBadge}
                  </text>
                  <text x="14" y="436" fontSize="11" fontWeight="600" fill="#1E40AF">
                    {t.architecture.svgCallouts.privLine1}
                  </text>
                  <text x="14" y="452" fontSize="10.5" fill="#64748B">
                    {t.architecture.svgCallouts.privLine2}
                  </text>

                  {/* 底部图例 */}
                  <line x1="60" y1="495" x2="660" y2="495" stroke="#E5E7EB" strokeWidth="1" />
                  <g transform="translate(140, 511)">
                    <circle cx="0" cy="0" r="4" fill="#2563EB" />
                    <text x="10" y="3.5" fontSize="10.5" fill="#475569" fontWeight="500">
                      {t.architecture.svgCallouts.legendIdentity}
                    </text>
                  </g>
                  <g transform="translate(370, 511)">
                    <rect x="-4" y="-4" width="8" height="8" rx="1.5" fill="#2563EB" />
                    <text x="10" y="3.5" fontSize="10.5" fill="#475569" fontWeight="500">
                      {t.architecture.svgCallouts.legendContent}
                    </text>
                  </g>
                  <g transform="translate(560, 511)">
                    <text x="0" y="3.5" fontSize="10" fill="#9CA3AF" style={{ letterSpacing: '0.15em' }}>
                      {t.architecture.svgCallouts.legendCaption}
                    </text>
                  </g>
                </svg>
              </div>

              <div
                className="rounded-2xl p-5 mt-3 flex items-start gap-3"
                style={{ backgroundColor: '#F9FAFB' }}
              >
                <ShieldCheck size={18} className="shrink-0 mt-0.5 text-neutral-500" />
                <p className="text-[13px] leading-relaxed text-neutral-600">
                  {t.architecture.designIntuition}
                </p>
              </div>
            </div>
          </div>
        </details>

        {/* 09 · 团队 */}
        <Card id="team" delay={0.5}>
          <SectionLabel>{t.team.label}</SectionLabel>
          <SectionTitle>{t.team.title}</SectionTitle>

          <div className="grid md:grid-cols-2 gap-4">
            {t.team.members.map((m) => (
              <div key={m.name} className="bg-neutral-50 rounded-2xl p-6">
                <div className="flex items-baseline gap-3 mb-3">
                  <h3 className="text-[18px] font-semibold text-neutral-800">{m.name}</h3>
                  <span className="text-[12px] text-neutral-400">{m.role}</span>
                </div>
                <p className="text-[14px] leading-relaxed text-neutral-600">{m.bio}</p>
              </div>
            ))}
          </div>

          <Prose>
            <p className="mt-6">{t.team.fieldHeading}</p>
          </Prose>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            {t.team.photos.map((img) => (
              <figure key={img.src} className="bg-neutral-50 rounded-2xl overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src={img.src}
                    alt={img.caption}
                    fill
                    sizes="(max-width: 768px) 50vw, 200px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="text-[11px] text-neutral-500 px-3 py-2 leading-relaxed">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Card>

        {/* 10 · 当前阶段 */}
        <Card id="stage" delay={0.55}>
          <SectionLabel>{t.stage.label}</SectionLabel>
          <SectionTitle>{t.stage.title}</SectionTitle>
          <Prose>{t.stage.body}</Prose>
        </Card>

        {/* 11 · Roadmap */}
        <Card id="roadmap" delay={0.6}>
          <SectionLabel>{t.roadmap.label}</SectionLabel>
          <SectionTitle>{t.roadmap.title}</SectionTitle>

          <div className="grid md:grid-cols-2 gap-3">
            {t.roadmap.items.map((it, i) => {
              const meta = {
                completed: { Icon: CheckCircle2, color: '#059669', bg: '#ECFDF5' },
                'in-progress': { Icon: Loader, color: '#D97706', bg: '#FFFBEB' },
                next: { Icon: Circle, color: '#6B7280', bg: '#F3F4F6' },
              }[it.status];
              const { Icon, color, bg } = meta;
              return (
                <div key={i} className="bg-neutral-50 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                      {it.stage}
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold"
                      style={{ backgroundColor: bg, color }}
                    >
                      <Icon size={11} />
                      {it.s}
                    </span>
                  </div>
                  <h3 className="text-[14px] font-semibold text-neutral-800 mb-1">{it.t}</h3>
                  <p className="text-[12px] leading-relaxed text-neutral-600">{it.b}</p>
                </div>
              );
            })}
          </div>

          <div
            className="rounded-2xl p-5 mt-6 flex items-start gap-3"
            style={{ backgroundColor: ACCENT_LIGHT }}
          >
            <Wrench size={18} style={{ color: ACCENT }} className="shrink-0 mt-0.5" />
            <div>
              <p
                className="text-[14px] leading-relaxed font-semibold mb-2"
                style={{ color: ACCENT_DEEP }}
              >
                {t.roadmap.askTitle}
              </p>
              <ul
                className="text-[13px] leading-relaxed space-y-1 list-disc pl-4"
                style={{ color: ACCENT_DEEP }}
              >
                {t.roadmap.askItems.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        {/* Vision */}
        <Card id="vision-pitch" dark delay={0.75} className="text-center md:p-14">
          <div
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold mb-6"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#A5B4FC' }}
          >
            <Users size={12} />
            {t.vision.badge}
          </div>
          <p className="text-2xl md:text-3xl font-semibold text-white leading-snug max-w-3xl mx-auto">
            {t.vision.body}
          </p>
        </Card>

        <div className="text-center text-[12px] text-neutral-400 pt-4 pb-8">{t.footer}</div>
      </div>

      <style jsx global>{`
        @keyframes innox-reveal {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .reveal {
          opacity: 0;
          animation: innox-reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: var(--reveal-delay, 0s);
        }
        section[id] {
          scroll-margin-top: 96px;
        }
      `}</style>
    </div>
  );
}
