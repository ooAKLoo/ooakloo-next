/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from 'next/image';
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
  Crown,
  UserCheck,
  UserPlus,
  Eye,
  Lock,
  Globe,
  Layers,
  type LucideIcon,
} from 'lucide-react';

const ACCENT = '#2563EB';
const ACCENT_LIGHT = '#EFF6FF';
const ACCENT_DEEP = '#1D4ED8';

type Tone = 'accent' | 'amber' | 'emerald' | 'rose' | 'neutral';
const TONE: Record<Tone, { color: string; bg: string }> = {
  accent: { color: ACCENT, bg: ACCENT_LIGHT },
  amber: { color: '#B45309', bg: '#FEF3C7' },
  emerald: { color: '#047857', bg: '#ECFDF5' },
  rose: { color: '#BE123C', bg: '#FFE4E6' },
  neutral: { color: '#374151', bg: '#F3F4F6' },
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

const TOC_GROUPS: TocGroup[] = [
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
];

const FREQ_TONE: Record<string, Tone> = {
  高频: 'emerald',
  中频: 'accent',
  低频: 'amber',
  偶发: 'neutral',
};

const NET_TONE: Record<string, Tone> = {
  强网: 'emerald',
  弱网: 'amber',
  '弱/无网': 'amber',
  无网: 'rose',
};

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

const Pill = ({
  icon: Icon,
  children,
  tone = 'accent',
}: {
  icon?: LucideIcon;
  children: React.ReactNode;
  tone?: Tone;
}) => {
  const t = TONE[tone];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold"
      style={{ backgroundColor: t.bg, color: t.color }}
    >
      {Icon && <Icon size={12} />}
      {children}
    </span>
  );
};

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

/* ---------------- 页面 ---------------- */

export default function InnoxPitchPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] py-10 md:py-16 px-4 md:px-6">
      <InnoxTocSidebar groups={TOC_GROUPS} />
      <div className="mx-auto max-w-4xl space-y-6">
        {/* 顶部:标识 + 主标题 */}
        <Card delay={0.05} className="md:p-14">
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <Pill icon={Sparkles}>InnoX 暑期营 · 项目陈述</Pill>
          </div>

          <div className="flex items-start gap-5 mb-6">
            <div
              className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
            >
              <HardDrive size={26} />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold text-neutral-800 leading-tight tracking-tight">
                随行云盘
              </h1>
              <p className="text-[15px] md:text-[17px] text-neutral-400 mt-2 font-medium">
                Portable AI Storage Drive · ooakloo
              </p>
            </div>
          </div>

          <p className="text-[16px] md:text-[18px] leading-relaxed text-neutral-600 max-w-3xl">
            一台<Strong>面向消费者的便携式 AI 个人存储设备</Strong>—— 它把传统硬盘的便携、NAS
            的私有化、云盘的智能化交互融为一体,让数据成为可以随身、可被自然访问的"近场私域"。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-10">
            <StatCard label="团队" value="2 人" hint="移动 / 嵌入式 + 硬件" />
            <StatCard label="软件" value="完成" hint="iOS / macOS 客户端" />
            <StatCard label="硬件" value="迭代中" hint="工程师改版 · 原理图调整" />
          </div>
        </Card>

        {/* 一分钟 Pitch */}
        <Card id="overview" delay={0.1}>
          <SectionLabel>00 · 项目概要</SectionLabel>
          <SectionTitle>消费端的随身云。</SectionTitle>
          <Prose>
            <p>
              当下消费者只剩三种存储方案:云盘、NAS、移动硬盘。云盘隐私差且要长期付费;NAS
              门槛高且不便携;移动硬盘有线、文件夹原始、体验割裂。
            </p>
            <p>
              随行云盘是这三者的<Strong>超集</Strong>—— 一台像移动硬盘一样便携、像
              NAS 一样私有、像云盘一样有现代交互的设备。砍掉 NAS 的玩机门槛、砍掉云盘的订阅模式、砍掉移动硬盘的有线依赖。
            </p>
          </Prose>
        </Card>

        {/* 01 · Insight */}
        <Card id="insight" delay={0.15}>
          <SectionLabel>01 · Insight · 我们怎么发现这个问题</SectionLabel>
          <Prose>
            <p>
              起点是在国外读书时插硬盘看国内剧,iPad 没电只能拔下来充,体验很差。我用手头的树莓派 Zero 2W 一周做了第一代——基于
              UPnP,让手机、电脑同时看不同电影。
            </p>
            <p>
              回国后这个具体问题"消失"了,我一度以为是伪需求。直到看到项飙老师"消失的附近"的概念,
              我才意识到 ——
              <Strong>用户对存储的需求主要就发生在附近、在近场</Strong>,而当前并没有这样形态的产品。
            </p>
          </Prose>
        </Card>

        {/* 02 · 几何拓扑 */}
        <Card id="topology" delay={0.2}>
          <SectionLabel>02 · 拓扑视角 · 为什么这个品类迟早会出现</SectionLabel>
          <SectionTitle>三角形的中心 · 四面体的顶点。</SectionTitle>
          <Prose>
            <p>
              我们用一个简单的几何视角理解市场:把现有三种存储形态作为顶点,云、NAS、移动硬盘,
              <Strong>等边三角形的几何中心,正是 Wi-Fi 硬盘</Strong>—— 它对其他三者都是更好的替代:
              比 NAS 便携,比云盘私有不需要长期付费,比传统硬盘多了无线和现代交互。
            </p>
          </Prose>

          <div className="bg-neutral-50 rounded-2xl p-6 md:p-8 mt-6">
            <div className="aspect-[681/400] w-full max-w-3xl mx-auto">
              {/* 静态 SVG;颜色来自源文件内的 rgb fallback */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/innox/topology.svg"
                alt="等边三角形与四面体存储拓扑图"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-[12px] text-neutral-500 text-center mt-3 leading-relaxed">
              左:平面三种存储形态 + 中心点(Wi-Fi 硬盘) ｜ 右:升维到四面体后,Wi-Fi 硬盘成为顶点
            </p>
          </div>

          <Prose>
            <p className="mt-6">
              这个品类<Strong>迟早会出现</Strong>。我们不一定是唯一的玩家,但我们想做<Strong>最早占领这个心智的一家</Strong>。
            </p>
          </Prose>
        </Card>

        {/* 03 · 市场盘子 */}
        <Card id="market" delay={0.25}>
          <SectionLabel>03 · 市场 · 我们对标的不是单一品类</SectionLabel>
          <Prose>
            <p>
              我们对标的不是单一品类,而是<Strong>消费端个人数据存储这个总市场</Strong>。产品同时覆盖三个存储方案,所以也要看三块市场。
            </p>
          </Prose>

          <div className="grid md:grid-cols-3 gap-3 mt-6">
            <div className="bg-neutral-50 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Cpu size={16} style={{ color: ACCENT }} />
                <div className="text-[13px] font-semibold text-neutral-800">NAS 市场</div>
              </div>
              <div className="text-[20px] font-semibold text-neutral-800 mb-1">≈ 25%</div>
              <div className="text-[12px] text-neutral-500 leading-relaxed">
                国内年增长率 · 对比海外渗透率仍有较大空间
              </div>
            </div>
            <div className="bg-neutral-50 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <HardDrive size={16} style={{ color: ACCENT }} />
                <div className="text-[13px] font-semibold text-neutral-800">消费存储总量</div>
              </div>
              <div className="text-[20px] font-semibold text-neutral-800 mb-1">800–1200 亿</div>
              <div className="text-[12px] text-neutral-500 leading-relaxed">
                全球消费端规模(人民币),国内约占一半 · SSD CAGR ≈ 6.7%
              </div>
            </div>
            <div className="bg-neutral-50 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Cloud size={16} style={{ color: ACCENT }} />
                <div className="text-[13px] font-semibold text-neutral-800">个人云(海外参考)</div>
              </div>
              <div className="text-[20px] font-semibold text-neutral-800 mb-1">$104 亿</div>
              <div className="text-[12px] text-neutral-500 leading-relaxed">
                iCloud 24 年估算服务营收 · 付费用户 ≈ 7 亿
              </div>
            </div>
          </div>

          <div
            className="rounded-2xl p-5 mt-4 flex items-start gap-3"
            style={{ backgroundColor: '#F9FAFB' }}
          >
            <TrendingUp size={18} className="shrink-0 mt-0.5 text-neutral-500" />
            <p className="text-[13px] leading-relaxed text-neutral-600">
              数据来源:艾瑞 / IDC / 信通院 / 华尔街 / CIRP / Trefis。我们用三段口径交叉验证,而非凭单一报告下结论。
            </p>
          </div>
        </Card>

        {/* 04 · 用户 · 场景 */}
        <Card id="audience" delay={0.275}>
          <SectionLabel>04 · 用户 · 场景 · 谁在用,什么时候用</SectionLabel>
          <SectionTitle>不是泛泛的"消费用户" —— 几类有明确隐痛的人,在具体的频次与网络场景里。</SectionTitle>

          <h3 className="text-[17px] font-semibold text-neutral-800 leading-snug mt-2 mb-3">
            ① 用户画像 · 谁在为隐痛付费
          </h3>
          <Prose>
            <p>不是面向全体消费者,而是几类对现有方案明确不满、且已经在掏钱凑合的人:</p>
          </Prose>
          <div className="grid md:grid-cols-2 gap-3 mt-4">
            {[
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
            ].map((u, i) => (
              <div key={i} className="bg-neutral-50 rounded-2xl p-5">
                <div className="text-[13px] font-semibold text-neutral-800 mb-2">{u.name}</div>
                <p className="text-[12px] leading-relaxed text-neutral-600 mb-1.5">
                  <span className="font-medium text-neutral-700">隐痛:</span> {u.pain}
                </p>
                <p className="text-[12px] leading-relaxed text-neutral-600">
                  <span className="font-medium text-neutral-700">命中:</span> {u.fit}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-[17px] font-semibold text-neutral-800 leading-snug mt-10 mb-3">
            ② 使用场景 · 频次 × 网络
          </h3>
          <Prose>
            <p>
              同一台设备,在不同<Strong>频次 × 网络</Strong>条件下承载完全不同的价值。我们挑出最典型的六个:
            </p>
          </Prose>
          <div className="grid md:grid-cols-3 gap-3 mt-4">
            {[
              {
                name: '通勤',
                freq: '高频',
                net: '弱网',
                body: '上下班路上看视频、听播客、翻图书;本地随取,不靠运营商。',
              },
              {
                name: '居家日常',
                freq: '高频',
                net: '强网',
                body: '客厅看电影、卧室翻图片;同一份数据跨设备一致访问。',
              },
              {
                name: '出差 / 旅行',
                freq: '中频',
                net: '弱/无网',
                body: '酒店看片、机场倒换设备,不靠云盘上传等待。',
              },
              {
                name: '户外拍摄',
                freq: '低频',
                net: '无网',
                body: '野外原图 / 原视频转储,绕开微信压缩与上传等待。',
              },
              {
                name: '咖啡馆 public',
                freq: '中频',
                net: '弱网',
                body: '主理人发布店内私域内容,客人就近接入取用。',
              },
              {
                name: '聚会 / 旅途共享',
                freq: '偶发',
                net: '无网',
                body: '一人随身,众人同步原图;iOS / 安卓 / 电脑均可。',
              },
            ].map((s, i) => (
              <div key={i} className="bg-neutral-50 rounded-2xl p-5">
                <div className="text-[13px] font-semibold text-neutral-800 mb-2">{s.name}</div>
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  <Chip tone={FREQ_TONE[s.freq]}>{s.freq}</Chip>
                  <Chip tone={NET_TONE[s.net]}>{s.net}</Chip>
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
              <Strong>关键:</Strong>{' '}
              <span style={{ color: ACCENT_DEEP }}>
                这些场景的共同点是 ——{' '}
                <Strong>网络靠不住、设备多、内容重</Strong>。云盘 / 云相册天然不适配,NAS 不便携,移动硬盘交互又退到 1995。"近场私域 + 现代体验"是这些场景里唯一能站住的形态。
              </span>
            </p>
          </div>
        </Card>

        {/* 05 · 时间窗口 */}
        <Card id="window" delay={0.3}>
          <SectionLabel>05 · 时间窗口 · 为什么是现在、为什么是我们</SectionLabel>
          <SectionTitle>巨头不能做这件事 —— 因为会伤到自己的主业。</SectionTitle>
          <Prose>
            <p>
              这不是一个新点子被巨头忽略的故事,而是一个<Strong>结构性的时间窗口</Strong>:
            </p>
          </Prose>

          <div className="grid md:grid-cols-3 gap-3 mt-6">
            <div className="bg-neutral-50 rounded-2xl p-5">
              <div className="text-[13px] font-semibold text-neutral-800 mb-2">绿联 / 群晖</div>
              <p className="text-[13px] leading-relaxed text-neutral-600">
                做这件事会冲击它的 NAS 业务 —— 它们的客单价、配置层级、用户教育成本都建立在"复杂"之上。
              </p>
            </div>
            <div className="bg-neutral-50 rounded-2xl p-5">
              <div className="text-[13px] font-semibold text-neutral-800 mb-2">百度网盘 / 夸克</div>
              <p className="text-[13px] leading-relaxed text-neutral-600">
                做这件事会冲击订阅现金流 —— 一次买断、本地优先,本质上是和它们的商业模式作对。
              </p>
            </div>
            <div className="bg-neutral-50 rounded-2xl p-5">
              <div className="text-[13px] font-semibold text-neutral-800 mb-2">三星 / 西数 / 闪迪</div>
              <p className="text-[13px] leading-relaxed text-neutral-600">
                有硬件能力但软件 / 交互基因弱 —— 它们做的是更快的硬盘,不是更好的"数据伴侣"。
              </p>
            </div>
          </div>

          <Prose>
            <p className="mt-6">
              <Strong>这就是我们的窗口。</Strong>不是我们比巨头聪明,而是这件事天然不属于他们的"边界"。早做的人,先占住"消费端随身云"的心智。
            </p>
          </Prose>
        </Card>

        {/* 06 · 对预期市场的真实评估 */}
        <Card id="scoring" delay={0.35}>
          <SectionLabel>06 · 对预期市场的真实评估</SectionLabel>
          <Prose>
            <p>
              对移动硬盘和 NAS,我们是<Strong>形态与体验上的超集</Strong>;对云盘,短期单 TB 成本不占优,但拉长生命周期,叠加"本地优先 + 隐私",我们仍是结构性更优的选择。
            </p>
          </Prose>

          <div className="bg-neutral-50 rounded-2xl p-6 mt-6 divide-y divide-neutral-200">
            <CompetitorRow
              label="vs 移动硬盘"
              highlight
              note="形态超集:无线 + 多端互访 + 现代交互。除价格外,用户没有继续选传统硬盘的理由。"
            />
            <CompetitorRow
              label="vs NAS"
              highlight
              note="把 NAS 的玩机门槛、不便携砍掉,针对观影/音乐/图片做交互优化 —— 把被挡在外面的小白用户接进来。"
            />
            <CompetitorRow
              label="vs 云盘"
              note="单 TB 短期支出云更便宜;但拉长生命周期,一次买断的总支出更低,叠加'本地优先 + 隐私'是结构性优势。"
            />
          </div>

          <div
            className="rounded-2xl p-5 mt-6 flex items-start gap-3"
            style={{ backgroundColor: ACCENT_LIGHT }}
          >
            <ShieldCheck size={18} style={{ color: ACCENT }} className="shrink-0 mt-0.5" />
            <p className="text-[14px] leading-relaxed" style={{ color: ACCENT_DEEP }}>
              <Strong>云盘的护城河只剩成本。</Strong>当我们的软件体验追平甚至超过云盘,叠加"一次买断 vs
              长期订阅"的话题,以及大家对云盘隐私审查的担忧,我们能持续侵蚀这块市场。
            </p>
          </div>
        </Card>

        {/* 07 · 常被问到的几个问题 */}
        <Card id="objections" delay={0.4}>
          <SectionLabel>07 · 常被问到的几个问题</SectionLabel>

          <h3 className="text-[17px] font-semibold text-neutral-800 leading-snug mt-2 mb-3">
            ① 关于"访问频次低"这件事,我们的另一种理解
          </h3>
          <Prose>
            <p>
              打开身边人的移动硬盘,会看到一个共同现象:存进去的数据,大部分长期不再被访问。
            </p>
            <p>
              我们倾向于<Strong>反过来看这件事</Strong> —— 正因为传统硬盘的体验偏门槛(整理耗精力、查看要插线、文件夹原始、阅读体验差),用户才<Strong>更愿意只把"不重要、低频"的数据塞进去</Strong>。是产品体验在筛走高频需求,而不是用户没有高频需求。所谓"低频访问",更像是行为的结果,而不是需求的本质。
            </p>
          </Prose>

          <h3 className="text-[17px] font-semibold text-neutral-800 leading-snug mt-10 mb-3">
            ② 大容量手机出现之后,我们看到的反而是机会
          </h3>
          <Prose>
            <p>
              一个常被聊到的问题:"手机内存越来越大,你们这个产品不是更尴尬了吗?"
            </p>
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
              <Strong>另一个佐证:</Strong>苹果对小尺寸 iPhone、iPad mini 这类小市场产品更新很慢甚至停产,但从
              iPhone 15 起,每代都做大存储版本 —— 这说明大存储用户群体真实存在且体量够大。
            </p>
          </Prose>

          <h3 className="text-[17px] font-semibold text-neutral-800 leading-snug mt-10 mb-3">
            ③ 存储涨价,对我们意味着什么
          </h3>
          <Prose>
            <p>
              另一个常被聊到的问题:"存储涨价这么凶,你们的成本和定价怎么扛?"
            </p>
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
          </Prose>
        </Card>

        {/* 07 · 解决方案 + 想象力 */}
        <Card id="solution" delay={0.45}>
          <SectionLabel>08 · 解决方案 · 不止"无线硬盘"</SectionLabel>
          <SectionTitle>"随身云" —— 一个承载近场私域的设备。</SectionTitle>
          <Prose>
            <p>
              形态上看,我们是"便携无线硬盘";但内部我们用<Strong>"随身云"</Strong>定义产品 —— 它不是又一个外设,而是用户身边的<Strong>近场数据中枢</Strong>。
            </p>
            <p>除了个人备份的基础场景,它能承载的场景还有:</p>
          </Prose>

          <div className="grid md:grid-cols-3 gap-3 mt-6">
            <div className="bg-neutral-50 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Coffee size={16} style={{ color: ACCENT }} />
                <div className="text-[13px] font-semibold text-neutral-800">咖啡馆 · public 模式</div>
              </div>
              <p className="text-[13px] leading-relaxed text-neutral-600">
                主理人放上自选音乐、视频、电子书,顾客接入店内私域,不依赖外网,把"附近"重新建立起来。
              </p>
            </div>
            <div className="bg-neutral-50 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Mountain size={16} style={{ color: ACCENT }} />
                <div className="text-[13px] font-semibold text-neutral-800">户外 · 旅途共享</div>
              </div>
              <p className="text-[13px] leading-relaxed text-neutral-600">
                只要一人随身携带,iOS / 安卓 / 电脑都能无损拿到当天原图与视频,绕开微信压缩与同步等待。
              </p>
            </div>
            <div className="bg-neutral-50 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Smartphone size={16} style={{ color: ACCENT }} />
                <div className="text-[13px] font-semibold text-neutral-800">独立开发 · 跨端同步</div>
              </div>
              <p className="text-[13px] leading-relaxed text-neutral-600">
                AI 之后独立开发者激增,工具一旦涉及数据,多端同步几乎只能"绑死 iOS"或被远端云锁住 —— 而远端云本身是<Strong>缺少近场载体的妥协</Strong>。我们提供一层<Strong>近场同步 SDK</Strong>,让工具类 App 不必上云就能在用户身边的多设备间同步。
              </p>
            </div>
          </div>
        </Card>

        {/* 07+ · 产品架构详解(默认收起) */}
        <details
          id="architecture"
          className="reveal rounded-3xl bg-white overflow-hidden group"
          style={{ '--reveal-delay': '0.48s' } as React.CSSProperties}
        >
          <summary className="cursor-pointer list-none p-8 md:p-12 select-none [&::-webkit-details-marker]:hidden">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <SectionLabel>08+ · 产品架构详解 · 默认收起 · 点击展开</SectionLabel>
                <h2 className="text-2xl md:text-3xl font-semibold text-neutral-800 mb-3 leading-tight">
                  深一层:三大演进要求 · 三方短板 · 权限拓扑。
                </h2>
                <p className="text-[14px] leading-relaxed text-neutral-500">
                  这一节把前面几页的主张拆到产品本身 —— 我们在
                  <Strong>满足消费电子的什么演进趋势</Strong>、为什么
                  <Strong>三种现有方案各自缺一角</Strong>,以及设备背后的
                  <Strong>权限分层拓扑</Strong>是怎么组织的。
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
            {/* === 1. 消费电子三大演进方向 === */}
            <div className="pt-10 md:pt-12">
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400 mb-2">
                section 1
              </div>
              <h3 className="text-xl md:text-[22px] font-semibold text-neutral-800 mb-3 leading-tight">
                消费电子的三个演进方向。
              </h3>
              <Prose>
                <p>
                  过去十年消费电子产品的迭代主线,本质上都在三个维度上前进:
                  <Strong>智能化、便携、续航</Strong>。手机如此,耳机如此,可穿戴也如此 ——
                  唯独"个人数据存储"这一品类,几乎停留在十年前。
                </p>
              </Prose>
              <div className="grid md:grid-cols-3 gap-3 mt-6">
                {[
                  {
                    icon: Sparkles,
                    title: '智能化',
                    body:
                      '数据需要被理解、被搜索、被推荐,而不只是被存储。从相册识图、自动整理,到 AI 摘要、对话式取用,"交互"已经是新存储的核心。',
                  },
                  {
                    icon: Smartphone,
                    title: '便携',
                    body:
                      '跟人走,而不是固定在某个角落。手机、AirPods、Apple Watch 把"随身"写进了 DNA,存储设备没有理由继续插线、躺在书桌上。',
                  },
                  {
                    icon: BatteryFull,
                    title: '续航',
                    body:
                      '低功耗、长时间在线。一台真正"随身"的设备,续航是底盘 —— 否则就是另一个充电焦虑的来源。',
                  },
                ].map((p) => (
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

            {/* === 2. 三方短板对比 === */}
            <div className="pt-12 md:pt-14">
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400 mb-2">
                section 2
              </div>
              <h3 className="text-xl md:text-[22px] font-semibold text-neutral-800 mb-3 leading-tight">
                三种现有方案,各缺一块。
              </h3>
              <Prose>
                <p>
                  把三种现有方案放在同一张图上 —— 云盘、NAS、移动硬盘 —— 它们各自占据了消费者的部分需求,但
                  <Strong>没有任何一种同时满足"私有 + 便携 + 智能 + 长期低成本"</Strong>。
                </p>
              </Prose>

              {/* 评分表:横向条形图 · X 轴=评分 (0-3) · Y 轴=维度 */}
              <div className="bg-neutral-50 rounded-2xl p-5 md:p-6 mt-3 overflow-x-auto">
                <div className="flex items-baseline justify-between mb-4 px-1">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                    五维评估 · 横轴 = 评分(满格 = 3)· 纵轴 = 维度
                  </div>
                  <div
                    className="text-[10px] font-semibold uppercase tracking-wider"
                    style={{ color: ACCENT }}
                  >
                    随身云列高亮
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
                      <th className="text-left pb-3 pr-3 font-semibold">维度</th>
                      <th className="pb-3 px-2 font-semibold">
                        <div className="flex items-center justify-center gap-1.5">
                          <Cloud size={12} />
                          云盘
                        </div>
                      </th>
                      <th className="pb-3 px-2 font-semibold">
                        <div className="flex items-center justify-center gap-1.5">
                          <Cpu size={12} />
                          NAS
                        </div>
                      </th>
                      <th className="pb-3 px-2 font-semibold">
                        <div className="flex items-center justify-center gap-1.5">
                          <HardDrive size={12} />
                          硬盘
                        </div>
                      </th>
                      <th
                        className="pb-3 px-2 font-semibold"
                        style={{ color: ACCENT }}
                      >
                        <div className="flex items-center justify-center gap-1.5">
                          <Sparkles size={12} />
                          随身云
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        key: '隐私性',
                        cloud: 1,
                        nas: 3,
                        hdd: 3,
                        ovita: 3,
                        note: '云盘有审查风险;后三者数据在本地',
                      },
                      {
                        key: '便携性',
                        cloud: 3,
                        nas: 1,
                        hdd: 2,
                        ovita: 3,
                        note: 'NAS 体积大、要插电;移动硬盘要线',
                      },
                      {
                        key: '智能化交互',
                        cloud: 2,
                        nas: 1,
                        hdd: 0,
                        ovita: 3,
                        note: 'NAS 要折腾,硬盘是 1995 年的文件夹',
                      },
                      {
                        key: '长期成本',
                        cloud: 1,
                        nas: 2,
                        hdd: 3,
                        ovita: 3,
                        note: '云盘订阅累加;一次买断长期更省',
                      },
                      {
                        key: '无线 / 续航',
                        cloud: 3,
                        nas: 1,
                        hdd: 1,
                        ovita: 3,
                        note: '只有"随身云"做到无线 + 自带电池',
                      },
                    ].map((d, i) => (
                      <tr
                        key={d.key}
                        className={i > 0 ? 'border-t border-neutral-200/60' : ''}
                      >
                        <td className="py-3.5 pr-3 align-middle">
                          <div className="text-[13px] font-medium text-neutral-700">
                            {d.key}
                          </div>
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
                                style={{
                                  color: cell.accent ? ACCENT : '#6B7280',
                                }}
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
                  <span>评分越靠右越优 · 满格 = 3 分</span>
                  <span className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5">
                      <span
                        className="inline-block w-3 h-1.5 rounded-full"
                        style={{ backgroundColor: '#9CA3AF' }}
                      />
                      其他三方
                    </span>
                    <span
                      className="flex items-center gap-1.5 font-semibold"
                      style={{ color: ACCENT }}
                    >
                      <span
                        className="inline-block w-3 h-1.5 rounded-full"
                        style={{ backgroundColor: ACCENT }}
                      />
                      随身云
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
                  <Strong>结论:</Strong>{' '}
                  <span style={{ color: ACCENT_DEEP }}>
                    随身云不是"再做一台硬盘",而是把三角形里被遗漏的<Strong>那个中心点</Strong>
                    实化成产品 —— 同时落地到智能、便携、续航三条主线。
                  </span>
                </p>
              </div>
            </div>

            {/* === 3. 权限分层拓扑 === */}
            <div className="pt-12 md:pt-14">
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400 mb-2">
                section 3
              </div>
              <h3 className="text-xl md:text-[22px] font-semibold text-neutral-800 mb-3 leading-tight">
                权限分层拓扑:同心圆三层 —— 自己人 · 朋友 · 陌生人。
              </h3>
              <Prose>
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
              </Prose>

              {/* 一张图 · 同心圆 + callout 引线注解 + 圈类型正交 */}
              <div className="rounded-2xl mt-6 p-6 md:p-10 bg-neutral-50 border border-neutral-200">
                <svg
                  viewBox="0 0 720 520"
                  className="w-full max-w-[700px] mx-auto block"
                  role="img"
                  aria-label="oVita 权限分层拓扑:三层同心圆身份 + Public/Private 内容圈两条独立维度"
                  style={{
                    fontFamily:
                      'system-ui, -apple-system, "Segoe UI", "PingFang SC", "Hiragino Sans GB", sans-serif',
                  }}
                >
                  {/* ============ 同心圆主体:三色平涂 · 无渐变 / 无阴影 ============ */}
                  {/* 外圈 · 陌生人:中性灰 */}
                  <circle
                    cx="240"
                    cy="260"
                    r="215"
                    fill="#F1F5F9"
                    stroke="#CBD5E1"
                    strokeWidth="1"
                  />
                  {/* 中圈 · 朋友:暖琥珀 */}
                  <circle
                    cx="240"
                    cy="260"
                    r="148"
                    fill="#FEF3C7"
                    stroke="#F59E0B"
                    strokeWidth="1"
                  />
                  {/* 内圈 · 自己人:品牌蓝 */}
                  <circle
                    cx="240"
                    cy="260"
                    r="88"
                    fill="#DBEAFE"
                    stroke="#2563EB"
                    strokeWidth="1.2"
                  />

                  {/* ============ 核心球 · 设备 · 白底 + 中性描边 ============ */}
                  <circle
                    cx="240"
                    cy="260"
                    r="44"
                    fill="#FFFFFF"
                    stroke="#94A3B8"
                    strokeWidth="1.2"
                  />
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
                  <text
                    x="240"
                    y="273"
                    textAnchor="middle"
                    fill="#64748B"
                    fontSize="10"
                  >
                    设备
                  </text>

                  {/* ========================================== */}
                  {/* Callout 1 · 自己人(右上) */}
                  {/* tick 在内圈 angle=-35° (r=88),tick 内端 r=83、外端 r=93 */}
                  {/* inner: (308.0, 212.4)  outer: (316.2, 206.7) */}
                  {/* ========================================== */}
                  {/* tick(垂直于环的小段) */}
                  <line
                    x1="308.0"
                    y1="212.4"
                    x2="316.2"
                    y2="206.7"
                    stroke="#94A3B8"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  {/* leader · 中性灰 */}
                  <polyline
                    points="316.2,206.7 430,108 462,108"
                    fill="none"
                    stroke="#CBD5E1"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* 编号气泡 · 实心品牌色 */}
                  <circle cx="473" cy="108" r="12" fill="#2563EB" />
                  <text
                    x="473"
                    y="112.5"
                    textAnchor="middle"
                    fill="white"
                    fontSize="12.5"
                    fontWeight="700"
                  >
                    1
                  </text>
                  {/* 标签 */}
                  <text
                    x="494"
                    y="100"
                    fontSize="14"
                    fontWeight="600"
                    fill="#0F172A"
                  >
                    自己人
                  </text>
                  <text
                    x="494"
                    y="118"
                    fontSize="12"
                    fill="#475569"
                    fontWeight="500"
                  >
                    Owner · Member
                  </text>
                  <text x="494" y="135" fontSize="11" fill="#64748B">
                    主人 + 配对从设备
                  </text>
                  <text x="494" y="150" fontSize="11" fill="#64748B">
                    iPad · 安卓 · 电脑
                  </text>

                  {/* ========================================== */}
                  {/* Callout 2 · 朋友(右中) */}
                  {/* tick 在中圈 angle=5° (r=148),tick 内 r=143、外 r=153 */}
                  {/* inner: (382.4, 272.5)  outer: (392.4, 273.4) */}
                  {/* ========================================== */}
                  <line
                    x1="382.4"
                    y1="272.5"
                    x2="392.4"
                    y2="273.4"
                    stroke="#94A3B8"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <polyline
                    points="392.4,273.4 448,250 462,250"
                    fill="none"
                    stroke="#CBD5E1"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="473" cy="250" r="12" fill="#F59E0B" />
                  <text
                    x="473"
                    y="254.5"
                    textAnchor="middle"
                    fill="white"
                    fontSize="12.5"
                    fontWeight="700"
                  >
                    2
                  </text>
                  <text
                    x="494"
                    y="242"
                    fontSize="14"
                    fontWeight="600"
                    fill="#0F172A"
                  >
                    朋友
                  </text>
                  <text
                    x="494"
                    y="260"
                    fontSize="12"
                    fill="#475569"
                    fontWeight="500"
                  >
                    Participant
                  </text>
                  <text x="494" y="277" fontSize="11" fill="#64748B">
                    凭邀请码加入 Private 圈
                  </text>

                  {/* ========================================== */}
                  {/* Callout 3 · 陌生人(右下) */}
                  {/* tick 在外圈 angle=30° (r=215),tick 内 r=210、外 r=220 */}
                  {/* inner: (421.9, 365.0)  outer: (430.5, 370.0) */}
                  {/* ========================================== */}
                  <line
                    x1="421.9"
                    y1="365.0"
                    x2="430.5"
                    y2="370.0"
                    stroke="#94A3B8"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <polyline
                    points="430.5,370 448,400 462,400"
                    fill="none"
                    stroke="#CBD5E1"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="473" cy="400" r="12" fill="#94A3B8" />
                  <text
                    x="473"
                    y="404.5"
                    textAnchor="middle"
                    fill="white"
                    fontSize="12.5"
                    fontWeight="700"
                  >
                    3
                  </text>
                  <text
                    x="494"
                    y="392"
                    fontSize="14"
                    fontWeight="600"
                    fill="#0F172A"
                  >
                    陌生人
                  </text>
                  <text
                    x="494"
                    y="410"
                    fontSize="12"
                    fill="#475569"
                    fontWeight="500"
                  >
                    Guest
                  </text>
                  <text x="494" y="427" fontSize="11" fill="#64748B">
                    只看 Public 圈
                  </text>

                  {/* ========================================== */}
                  {/* Callout 4 · Public 圈(左上)— 锚定外圈 */}
                  {/* angle=200° (r=215);tick 内 r=210、外 r=220 */}
                  {/* inner: (42.6, 188.2)  outer: (33.2, 184.8) */}
                  {/* ========================================== */}
                  <line
                    x1="42.6"
                    y1="188.2"
                    x2="33.2"
                    y2="184.8"
                    stroke="#94A3B8"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <polyline
                    points="33.2,184.8 28,140 28,118"
                    fill="none"
                    stroke="#CBD5E1"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* 内容维度用方形 chip(区别于身份的圆形 badge)*/}
                  <rect x="14" y="92" width="80" height="22" rx="5" fill="#2563EB" />
                  <text
                    x="54"
                    y="107"
                    textAnchor="middle"
                    fill="white"
                    fontSize="11"
                    fontWeight="700"
                    style={{ letterSpacing: '0.1em' }}
                  >
                    PUBLIC 圈
                  </text>
                  <text
                    x="14"
                    y="132"
                    fontSize="11"
                    fontWeight="600"
                    fill="#1E40AF"
                  >
                    覆盖 1 + 2 + 3
                  </text>
                  <text x="14" y="148" fontSize="10.5" fill="#64748B">
                    任何身份可见
                  </text>

                  {/* ========================================== */}
                  {/* Callout 5 · Private 圈(左下)— 锚定中圈 */}
                  {/* angle=165° (r=148);tick 内 r=143、外 r=153 */}
                  {/* inner: (101.9, 297.0)  outer: (92.2, 299.6) */}
                  {/* ========================================== */}
                  <line
                    x1="101.9"
                    y1="297.0"
                    x2="92.2"
                    y2="299.6"
                    stroke="#94A3B8"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <polyline
                    points="92.2,299.6 50,360 28,392"
                    fill="none"
                    stroke="#CBD5E1"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="14"
                    y="396"
                    width="86"
                    height="22"
                    rx="5"
                    fill="white"
                    stroke="#2563EB"
                    strokeWidth="1.5"
                  />
                  <text
                    x="57"
                    y="411"
                    textAnchor="middle"
                    fill="#1E40AF"
                    fontSize="11"
                    fontWeight="700"
                    style={{ letterSpacing: '0.1em' }}
                  >
                    PRIVATE 圈
                  </text>
                  <text
                    x="14"
                    y="436"
                    fontSize="11"
                    fontWeight="600"
                    fill="#1E40AF"
                  >
                    覆盖 1 + 2 · 不含 3
                  </text>
                  <text x="14" y="452" fontSize="10.5" fill="#64748B">
                    邀请制内容空间
                  </text>

                  {/* ============ 底部图例(两轴) ============ */}
                  <line
                    x1="60"
                    y1="495"
                    x2="660"
                    y2="495"
                    stroke="#E5E7EB"
                    strokeWidth="1"
                  />
                  <g transform="translate(140, 511)">
                    <circle cx="0" cy="0" r="4" fill="#2563EB" />
                    <text
                      x="10"
                      y="3.5"
                      fontSize="10.5"
                      fill="#475569"
                      fontWeight="500"
                    >
                      维度一 · 身份 · 同心圆 ① ② ③
                    </text>
                  </g>
                  <g transform="translate(370, 511)">
                    <rect x="-4" y="-4" width="8" height="8" rx="1.5" fill="#2563EB" />
                    <text
                      x="10"
                      y="3.5"
                      fontSize="10.5"
                      fill="#475569"
                      fontWeight="500"
                    >
                      维度二 · 内容 · Public / Private 圈
                    </text>
                  </g>
                  <g transform="translate(560, 511)">
                    <text
                      x="0"
                      y="3.5"
                      fontSize="10"
                      fill="#9CA3AF"
                      style={{ letterSpacing: '0.15em' }}
                    >
                      两条维度互相独立
                    </text>
                  </g>
                </svg>
              </div>

              {/* 设计直觉 callout */}
              <div
                className="rounded-2xl p-5 mt-3 flex items-start gap-3"
                style={{ backgroundColor: '#F9FAFB' }}
              >
                <ShieldCheck size={18} className="shrink-0 mt-0.5 text-neutral-500" />
                <p className="text-[13px] leading-relaxed text-neutral-600">
                  <Strong>设计直觉:</Strong> 三层同心圆决定<Strong>谁能看</Strong>(自己人 → 朋友 → 陌生人);Public / Private 决定
                  <Strong>看到什么</Strong>。两件事互不绑定 —— 同一台设备同时承载"咖啡馆 public 模式"和"家庭私人备份"两个心智,Owner 一键就能切换对外暴露范围。
                </p>
              </div>
            </div>

          </div>
        </details>

        {/* 08 · 团队 */}
        <Card id="team" delay={0.5}>
          <SectionLabel>09 · 团队</SectionLabel>
          <SectionTitle>2 个人,把移动 / 嵌入 / 硬件 / 产品全栈覆盖。</SectionTitle>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-neutral-50 rounded-2xl p-6">
              <div className="flex items-baseline gap-3 mb-3">
                <h3 className="text-[18px] font-semibold text-neutral-800">杨东举</h3>
                <span className="text-[12px] text-neutral-400">移动端 · 产品 · CEO</span>
              </div>
              <p className="text-[14px] leading-relaxed text-neutral-600">
                曾就职于华为、字节跳动、大疆。具备移动应用开发、产品设计、用户体验、软件架构、软硬件交互场景的经验。负责整体产品定义、客户端、用户洞察。
              </p>
            </div>
            <div className="bg-neutral-50 rounded-2xl p-6">
              <div className="flex items-baseline gap-3 mb-3">
                <h3 className="text-[18px] font-semibold text-neutral-800">李浩</h3>
                <span className="text-[12px] text-neutral-400">嵌入式 · 硬件</span>
              </div>
              <p className="text-[14px] leading-relaxed text-neutral-600">
                前大疆嵌入式工程师,专注于固件与板级系统开发。本项目中负责嵌入式系统、自研 PCB、电源与无线方案、硬件可行性。
              </p>
            </div>
          </div>

          <Prose>
            <p className="mt-6">工程现场:</p>
          </Prose>

          {/* 工作照片墙 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            {[
              { src: '/innox/workstation.jpg', caption: 'iOS / macOS 客户端开发现场' },
              { src: '/innox/engineer-at-work.jpg', caption: '嵌入式调试 · 固件烧写' },
              { src: '/innox/custom-pcb.jpg', caption: '自研 PCB 板' },
              { src: '/innox/prototype-sbc.jpg', caption: '早期 SBC 原型' },
            ].map((img) => (
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

        {/* 09 · 当前阶段 */}
        <Card id="stage" delay={0.55}>
          <SectionLabel>10 · 当前阶段</SectionLabel>
          <SectionTitle>软件完成 · 硬件迭代 · 真实付费已发生。</SectionTitle>
          <Prose>
            <p>
              软件侧:iOS、macOS 客户端核心完成,设备连接、文件管理、媒体播放主流程全部跑通,处于体验打磨阶段。
            </p>
            <p>
              硬件侧:PCB 开始原理图设计。
            </p>
            <p>
              嵌入式侧:目前在做底层性能调优(长续航、高稳定、快启动、快传输)。
            </p>
            <p>
              <Strong>验证侧:</Strong>我们没有闭门造车,而是直接在咖啡馆、朋友圈等真实场景做小规模访谈,部分访谈直接转化为<Strong>意向订单</Strong>—— 这给了我们最初的信心:问题真实存在,且有人愿意付费。
            </p>
          </Prose>
        </Card>

        {/* 10 · Roadmap & Ask */}
        <Card id="roadmap" delay={0.6}>
          <SectionLabel>11 · Roadmap & 我们想从 InnoX 拿到什么</SectionLabel>
          <SectionTitle>从原型 → 小批量,最难的是制造与供应链。</SectionTitle>

          <div className="grid md:grid-cols-2 gap-3">
            {[
              {
                t: '软件 v1 体验闭环',
                s: '已完成',
                b: '客户端核心流程 + 内测反馈接入。',
                status: 'completed',
              },
              {
                t: '硬件性能调优',
                s: '进行中',
                b: '无线吞吐 / 功耗 / 散热 / 稳定性。',
                status: 'in-progress',
              },
              {
                t: '工程样机收敛',
                s: '下一步',
                b: '完整可工作样机,准备小批量。',
                status: 'next',
              },
              {
                t: '小批量制造 · 早期用户',
                s: '下一步',
                b: '需要供应链与制造经验支持。',
                status: 'next',
              },
            ].map((it, i) => {
              const meta = {
                completed: { Icon: CheckCircle2, color: '#059669', bg: '#ECFDF5' },
                'in-progress': { Icon: Loader, color: '#D97706', bg: '#FFFBEB' },
                next: { Icon: Circle, color: '#6B7280', bg: '#F3F4F6' },
              }[it.status as 'completed' | 'in-progress' | 'next'];
              const { Icon, color, bg } = meta;
              return (
                <div key={i} className="bg-neutral-50 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                      阶段 {i + 1}
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
                我们希望从 InnoX 拿到的:
              </p>
              <ul
                className="text-[13px] leading-relaxed space-y-1 list-disc pl-4"
                style={{ color: ACCENT_DEEP }}
              >
                <li>制造 / 供应链导师 —— 我们最大的缺口</li>
                <li>消费电子产品定义 / 工业设计的过来人意见</li>
                <li>同伴网络 —— 同样在做硬件创业的团队互助</li>
                <li>从原型到小批量的工程化资源支持</li>
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
            愿景
          </div>
          <p className="text-2xl md:text-3xl font-semibold text-white leading-snug max-w-3xl mx-auto">
            让个人数据回到用户身边 —— 更
            <span style={{ color: '#93C5FD' }}>私密</span>、更
            <span style={{ color: '#93C5FD' }}>智能</span>、更
            <span style={{ color: '#93C5FD' }}>便携</span>,也更易用。
          </p>
        </Card>

        <div className="text-center text-[12px] text-neutral-400 pt-4 pb-8">
          随行云盘 · ooakloo · InnoX 暑期营项目陈述
        </div>
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
