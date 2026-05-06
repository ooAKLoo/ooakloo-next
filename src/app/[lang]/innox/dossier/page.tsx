/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from 'next/image';
import { InnoxTocSidebar, type TocItem } from '@/components/InnoxTocSidebar';
import {
  HardDrive,
  BookOpen,
  Compass,
  Users,
  Target,
  Lightbulb,
  MessageCircle,
  ShieldAlert,
  Cpu,
  Cloud,
  Smartphone,
  Coffee,
  Mountain,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';

const ACCENT = '#2563EB';
const ACCENT_LIGHT = '#EFF6FF';

type Tone = 'accent' | 'amber' | 'emerald' | 'rose' | 'neutral';
const TONE: Record<Tone, { color: string; bg: string }> = {
  accent: { color: ACCENT, bg: ACCENT_LIGHT },
  amber: { color: '#B45309', bg: '#FEF3C7' },
  emerald: { color: '#047857', bg: '#ECFDF5' },
  rose: { color: '#BE123C', bg: '#FFE4E6' },
  neutral: { color: '#374151', bg: '#F3F4F6' },
};

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

const TOC: TocItem[] = [
  { id: 'elevator', num: '01', title: '项目一句话定位' },
  { id: 'full-pitch', num: '02', title: '完整版项目陈述' },
  { id: 'market', num: '03', title: '市场分析' },
  { id: 'scoring', num: '04', title: '100 / 100 / 80 评分模型' },
  { id: 'strategy', num: '05', title: '抢占市场策略' },
  { id: 'users', num: '06', title: '用户画像 · 使用场景' },
  { id: 'vision', num: '07', title: '产品想象力延展' },
  { id: 'team', num: '08', title: '团队 · 工程进展' },
  { id: 'qa', num: '09', title: '常见问题' },
  { id: 'risks', num: '10', title: '风险与缓解' },
  { id: 'vision-end', num: '★', title: '愿景' },
];

const Card = ({
  id,
  children,
  delay = 0,
  dark = false,
  className = '',
}: {
  id?: string;
  children: React.ReactNode;
  delay?: number;
  dark?: boolean;
  className?: string;
}) => (
  <section
    id={id}
    className={`rounded-3xl p-8 md:p-12 reveal ${dark ? '' : 'bg-white'} ${className}`}
    style={
      {
        backgroundColor: dark ? '#1f2937' : undefined,
        '--reveal-delay': `${delay}s`,
        scrollMarginTop: '24px',
      } as React.CSSProperties
    }
  >
    {children}
  </section>
);

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

const SubTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-[16px] font-semibold text-neutral-800 mt-6 mb-3">{children}</h3>
);

const Strong = ({ children }: { children: React.ReactNode }) => (
  <span className="font-medium text-neutral-800">{children}</span>
);

const Prose = ({ children }: { children: React.ReactNode }) => (
  <div className="text-[15px] leading-relaxed text-neutral-600 space-y-4">{children}</div>
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

const QA = ({ q, a }: { q: string; a: React.ReactNode }) => (
  <div className="bg-neutral-50 rounded-2xl p-5 mb-3">
    <div className="flex items-start gap-3 mb-3">
      <span
        className="shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-[11px] font-bold"
        style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
      >
        Q
      </span>
      <div className="text-[14px] font-medium text-neutral-800 leading-relaxed">{q}</div>
    </div>
    <div className="flex items-start gap-3">
      <span
        className="shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-[11px] font-bold"
        style={{ backgroundColor: '#F3F4F6', color: '#6B7280' }}
      >
        A
      </span>
      <div className="text-[13px] leading-relaxed text-neutral-600 space-y-2 flex-1">{a}</div>
    </div>
  </div>
);

const TocItem = ({
  num,
  title,
  href,
}: {
  num: string;
  title: string;
  href: string;
}) => (
  <a
    href={href}
    className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors"
  >
    <span className="text-[10px] font-semibold tracking-wider" style={{ color: ACCENT }}>
      {num}
    </span>
    <span className="text-[13px] font-medium text-neutral-700 flex-1">{title}</span>
    <ArrowRight
      size={14}
      className="text-neutral-400 group-hover:text-neutral-600 transition-colors"
    />
  </a>
);

export default function InnoxDossierPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] py-10 md:py-16 px-4 md:px-6">
      <InnoxTocSidebar items={TOC} />
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Hero */}
        <Card delay={0.05} className="md:p-14">
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <Pill icon={BookOpen}>项目档案</Pill>
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
                随行云盘 · 项目档案
              </h1>
              <p className="text-[15px] md:text-[17px] text-neutral-400 mt-2 font-medium">
                ooakloo · Portable AI Storage Drive
              </p>
            </div>
          </div>

          <p className="text-[16px] md:text-[18px] leading-relaxed text-neutral-600 max-w-3xl">
            一份完整的项目档案 —— 涵盖项目陈述、市场分析、用户洞察、常见问题、风险评估,呈现随行云盘从动机到落地的全维度思考。
          </p>
        </Card>

        {/* 目录 */}
        <Card delay={0.1}>
          <SectionLabel>目录</SectionLabel>
          <SectionTitle>从哪里开始读。</SectionTitle>
          <div className="grid md:grid-cols-2 gap-2">
            <TocItem num="01" title="项目一句话定位" href="#elevator" />
            <TocItem num="02" title="完整版项目陈述" href="#full-pitch" />
            <TocItem num="03" title="市场分析 · 三块盘子" href="#market" />
            <TocItem num="04" title="100 / 100 / 80 评分模型" href="#scoring" />
            <TocItem num="05" title="抢占市场策略" href="#strategy" />
            <TocItem num="06" title="用户画像深度拆解" href="#users" />
            <TocItem num="07" title="产品想象力延展" href="#vision" />
            <TocItem num="08" title="团队 · 工程进展" href="#team" />
            <TocItem num="09" title="常见问题" href="#qa" />
            <TocItem num="10" title="风险与缓解" href="#risks" />
          </div>
        </Card>

        {/* 01 · Elevator */}
        <Card id="elevator" delay={0.15}>
          <SectionLabel>01 · 项目一句话定位</SectionLabel>
          <SectionTitle>"消费端的随身云。"</SectionTitle>
          <Prose>
            <p>
              <Strong>一句话版本:</Strong>{' '}
              我们做一台便携式 AI 个人存储设备 ——
              它把传统硬盘的便携、NAS 的私有、云盘的智能化体验融为一体。
            </p>
            <p>
              <Strong>三句话版本:</Strong>{' '}
              当下消费者只剩三种存储方案:云盘要长期付费且隐私堪忧;NAS 玩机门槛高且不便携;移动硬盘有线、文件夹原始、体验割裂。我们的产品是这三者的超集——把
              NAS 的复杂砍掉、把云盘的订阅砍掉、把移动硬盘的有线砍掉。
              软件已完成,硬件迭代中,真实用户已在咖啡馆下了意向订单。
            </p>
          </Prose>
        </Card>

        {/* 02 · 完整 Pitch */}
        <Card id="full-pitch" delay={0.2}>
          <SectionLabel>02 · 完整版项目陈述</SectionLabel>
          <SectionTitle>从市场结构到产品判断的完整论述。</SectionTitle>

          <SubTitle>市场:存量中有结构性增量</SubTitle>
          <Prose>
            <p>
              SSD 化和 NAS 化是两股明确的增长浪潮。结合硬盘市场行业报告:消费端目前全球
              <Strong>800–1200 亿人民币</Strong>区间,国内大概占一半。增长目前主要由固态 SSD 拉动,近几年估算的复合年增长率约
              <Strong>6.7%</Strong>(数据来源:艾瑞 / IDC / 信通院)。
            </p>
          </Prose>

          <SubTitle>盘子 · 我们对标的不是单一品类</SubTitle>
          <Prose>
            <p>
              我们对标的不是单一品类,而是<Strong>消费端个人数据存储这个总市场</Strong>。产品是结合了目前主流的三个存储方案,所以看三块市场:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <Strong>NAS 市场</Strong> —— 结合海外用户数据对比,国内增长空间较大,约
                <Strong>25% 年增长率</Strong>。
              </li>
              <li>
                <Strong>传统硬盘</Strong> —— 目前确实是存量阶段。
              </li>
              <li>
                <Strong>云存储</Strong> —— 主流厂商面向 B 端 / G 端;C 端看夸克网盘今年的推广投放力度,巨头之间也在争抢存量。海外 iCloud 结合华尔街 / CIRP / Trefis 数据,
                单项服务营收<Strong>约 $104 亿(24 年估算)</Strong>,付费用户<Strong>约 7 亿</Strong>。
              </li>
            </ul>
          </Prose>

          <SubTitle>凭什么是我们 · 时间窗口</SubTitle>
          <Prose>
            <p>
              砍掉了 NAS 的玩机复杂度、砍掉了云盘的订阅模式、砍掉了移动硬盘的有线依赖。这三件事任何一个头部玩家去做,都会伤到自己的主业 —— 绿联、群晖做这个会冲击它的
              NAS,百度网盘做这个会冲击它的订阅现金流。<Strong>这就是我们的时间窗口。</Strong>
            </p>
            <p>
              我们对自己的诚实评估:
              <Strong>对移动硬盘 100 分,对 NAS 100 分,对云盘 80 分</Strong>。云盘短期单 TB 成本更低,但拉长生命周期总支出我们更低,叠加"本地优先 + 隐私"是结构性优势。
            </p>
          </Prose>

          <SubTitle>抢占市场策略 · 三个细分品类</SubTitle>
          <Prose>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <Strong>移动硬盘:</Strong> 我们的产品和移动硬盘同时放在货架上,用户除了价格要素,没有继续选传统硬盘的理由 —— 我们是它的完整超集。
              </li>
              <li>
                <Strong>NAS 市场:</Strong> 我们做大了这个市场。NAS 的玩机门槛和不便携把很多用户挡在外面;我们砍掉这些门槛,同时针对观影、音乐、图片三种主要媒体形式优化交互,把小白用户拉进来。
              </li>
              <li>
                <Strong>云盘:</Strong> 软件层面,云盘其实就是 NAS 的低门槛形态。当我们的软件体验和云盘一致,就相当于给用户额外多了一个"私有化、随时可访问"的选择,即使在无互联网环境下也可用。当我们的软件体验
                <Strong>超过</Strong>云盘,我们就开始侵蚀云的市场。云盘的消费端唯一护城河是成本优势 —— 这块配合"一次买断 vs 长期订阅"的话题,以及大家对云盘审查隐私的担忧,很大程度也可以吃下。
              </li>
            </ol>
          </Prose>

          <SubTitle>"频次低 vs 需求低" · 反驳常见质疑</SubTitle>
          <Prose>
            <p>
              打开身边人的移动硬盘,会看到一个共同现象:存进去的数据,大部分长期不再被访问。
            </p>
            <p>
              但<Strong>因果链其实是反过来的</Strong>。正因为传统硬盘体验太糟 —— 整理耗精力、查看要插线、文件夹原始、阅读体验差 —— 用户才<Strong>只敢把"不重要、低频"的数据塞进去</Strong>。
              是糟糕的产品体验筛走了高频需求,而不是用户没有高频需求。所以
              <Strong>"低频访问"是行为的结果,不是需求的本质</Strong>。
            </p>
            <p>
              至于大容量手机的趋势 ——
              恰恰证明了用户愿意为"数据随身且易访问"付费。手机厂商的解题方案是
              <Strong>设备绑定 + 孤岛存储</Strong>;我们是从用户需求本身出发,做<Strong>跨设备、可被中心化管理</Strong>的方案。
            </p>
            <p>
              换 iPhone 同步数据基本几个小时起步 —— 这是外贸商人、自媒体博主、女性大容量手机用户的另一类隐痛。
              他们现在的替代方案是 iCloud 2TB、NAS、或硬着头皮用移动硬盘,每种都有明确的不满。我们做的是把这部分人从现有方案里拉出来。
            </p>
          </Prose>

          <SubTitle>存储涨价 · 反倒在放大我们的价值</SubTitle>
          <Prose>
            <p>
              另一个常被问到的问题:"存储涨价这么凶,你们的成本和定价怎么扛?"
            </p>
            <p>
              <Strong>短期看,供给端有缓冲。</Strong>存储是周期性产品,制造商通常签长期合同 —— 一两代产品里价格不会大幅波动。但下一轮合约到期,只能要么自压利润、要么涨价。当前其他主流硬件配件已经在涨价,用户已经在"肉痛"。
            </p>
            <p>
              <Strong>更关键的是用户侧。</Strong>两年前一块固态内存条 400 元,现在 1400 元 —— 再加两条的钱,已经够买我们这一台设备。过去存储便宜时,用户的应对是"加内存条"、"换 1T iPhone";但 1T 手机用一两年就跟着设备一起报废,大部分容量是"扔在那儿"的。
              <Strong>大量存储其实是被浪费、被孤岛化的。</Strong>
            </p>
            <p>
              我们做的是把分散在每台设备里的存储<Strong>中心化复用</Strong> —— 帮用户少买、少浪费。这不只是省钱,本质上是一件
              <Strong>存储的环保</Strong>:让每一份 SSD 都被尽可能用满,而不是每台设备都堆 1T,然后扔在那儿。
            </p>
          </Prose>

          <SubTitle>"消失的附近" · 产品想象力来源</SubTitle>
          <Prose>
            <p>
              起点是切身的不便:在国外读书时插硬盘看国内剧,iPad
              没电只能拔下来充。我用手头的树莓派 Zero 2W 一周做了第一代 ——
              基于 UPnP,让手机、电脑同时看不同电影。
              回国后这个具体问题"消失"了,我一度以为是伪需求。
            </p>
            <p>
              直到看到项飙老师"消失的附近"的概念后,我意识到这个东西可以很好地承载
              <Strong>周围亲密社交场内的信息</Strong>。同时,用户对硬盘文件访问有未说出的隐痛 —— 就像"iPad 买前生产力,买后爱奇艺",大部分人存的无外乎视频、音频、图片、文本,这些应该有
              <Strong>苹果相册式、QQ 音乐式、B 站式</Strong>的现代体验。
            </p>
          </Prose>

          <SubTitle>拓扑视角 · 平面与三维</SubTitle>
          <Prose>
            <p>
              从主流存储产品形态考虑:
              <Strong>无论是等边三角形的几何中心,还是四面体的顶点,Wi-Fi 硬盘都是对其他三者的最好替代</Strong>。
              比 NAS 便携、比云盘私有不需要长期付费、比传统硬盘多了无线。这个品类迟早会有,我们先有,就占领了用户在这个赛道的心智。
            </p>
          </Prose>

          <SubTitle>苹果数据视角 · 大存储用户群体真实存在</SubTitle>
          <Prose>
            <p>
              结合苹果的产品节奏:对市场规模小的产品(iPad mini、小尺寸 iPhone),它更新频次少甚至停产。
              但<Strong>大存储版本</Strong>从 iPhone 15 起每代都做。我们理解,这意味着大存储用户群体真实且体量够大。
            </p>
          </Prose>

          <SubTitle>结语</SubTitle>
          <Prose>
            <p>
              综上,这个产品很有想象力,我们希望有机会和您合作。团队当前在量产上的资金问题是一方面,
              另外对于制造流程,之前参观贵公司产线、听您访谈,知道其中有很多坑,而影石在这方面的经验很宝贵。感谢拨冗。
            </p>
          </Prose>
        </Card>

        {/* 03 · 市场 */}
        <Card id="market" delay={0.25}>
          <SectionLabel>03 · 市场分析 · 数据汇总</SectionLabel>
          <SectionTitle>三块盘子 · 用三段口径交叉验证。</SectionTitle>

          <div className="overflow-x-auto -mx-2 px-2">
            <table className="w-full text-[13px] border-collapse">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-wider text-neutral-400 border-b border-neutral-200">
                  <th className="py-3 pr-4 font-medium">市场</th>
                  <th className="py-3 pr-4 font-medium">规模 / 增长</th>
                  <th className="py-3 pr-4 font-medium">数据来源</th>
                  <th className="py-3 font-medium">我们的解读</th>
                </tr>
              </thead>
              <tbody className="text-neutral-600">
                <tr className="border-b border-neutral-100">
                  <td className="py-3 pr-4 font-medium text-neutral-800">消费端总市场</td>
                  <td className="py-3 pr-4">800–1200 亿人民币(全球)<br />国内 ≈ 一半</td>
                  <td className="py-3 pr-4 text-[12px] text-neutral-500">艾瑞 · IDC · 信通院</td>
                  <td className="py-3 leading-relaxed">SSD 拉动总盘子,CAGR ≈ 6.7%。</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 pr-4 font-medium text-neutral-800">NAS</td>
                  <td className="py-3 pr-4">国内年增长率 ≈ 25%</td>
                  <td className="py-3 pr-4 text-[12px] text-neutral-500">海外渗透率对照</td>
                  <td className="py-3 leading-relaxed">门槛是天花板,我们做大它。</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 pr-4 font-medium text-neutral-800">移动硬盘</td>
                  <td className="py-3 pr-4">存量阶段</td>
                  <td className="py-3 pr-4 text-[12px] text-neutral-500">行业惯识</td>
                  <td className="py-3 leading-relaxed">完全可被超集替代,只剩价格变量。</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-neutral-800">个人云(海外)</td>
                  <td className="py-3 pr-4">iCloud ≈ $104 亿 / 年<br />付费用户 ≈ 7 亿</td>
                  <td className="py-3 pr-4 text-[12px] text-neutral-500">华尔街 · CIRP · Trefis</td>
                  <td className="py-3 leading-relaxed">证明个人付费意愿;我们靠隐私 + 一次买断分流。</td>
                </tr>
              </tbody>
            </table>
          </div>

        </Card>

        {/* 04 · Scoring */}
        <Card id="scoring" delay={0.3}>
          <SectionLabel>04 · 100 / 100 / 80 评分模型</SectionLabel>
          <SectionTitle>我们对三类对手的诚实评估。</SectionTitle>
          <Prose>
            <p>
              评分基于"能否完整覆盖该品类的核心价值",同时主动指出我们的短板:
            </p>
          </Prose>

          <div className="space-y-4 mt-6">
            {[
              {
                target: 'vs 移动硬盘',
                score: 100,
                edge: '形态超集 —— 无线 + 多端互访 + 现代交互。除价格外,用户没有继续选传统硬盘的理由。',
                gap: '价格目前贵于纯硬盘 SKU,但提供的价值不在一个维度。',
              },
              {
                target: 'vs NAS',
                score: 100,
                edge: '把 NAS 的玩机门槛、不便携砍掉,针对观影 / 音乐 / 图片做交互优化。',
                gap: '极客用户仍会偏好群晖的可玩性 —— 这部分用户不是我们的目标。',
              },
              {
                target: 'vs 云盘',
                score: 80,
                edge: '隐私 + 本地优先 + 一次买断;无互联网环境也可用。',
                gap: '单 TB 短期支出云更便宜;我们用"长期总支出 + 隐私"叙事覆盖。',
              },
            ].map((row, i) => (
              <div key={i} className="bg-neutral-50 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[14px] font-semibold text-neutral-800">{row.target}</div>
                  <div
                    className="text-[18px] font-semibold tabular-nums"
                    style={{ color: ACCENT }}
                  >
                    {row.score}
                  </div>
                </div>
                <div className="h-2 bg-neutral-200 rounded-full overflow-hidden mb-3">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${row.score}%`, backgroundColor: ACCENT }}
                  />
                </div>
                <p className="text-[13px] leading-relaxed text-neutral-600 mb-1">
                  <Strong>优势:</Strong> {row.edge}
                </p>
                <p className="text-[13px] leading-relaxed text-neutral-500">
                  <Strong>诚实短板:</Strong> {row.gap}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* 05 · Strategy */}
        <Card id="strategy" delay={0.35}>
          <SectionLabel>05 · 抢占市场策略</SectionLabel>
          <SectionTitle>对三个细分品类,用三种打法。</SectionTitle>

          <div className="space-y-4">
            <div className="bg-neutral-50 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <HardDrive size={16} style={{ color: ACCENT }} />
                <h3 className="text-[14px] font-semibold text-neutral-800">移动硬盘市场 · 替代</h3>
              </div>
              <p className="text-[13px] leading-relaxed text-neutral-600">
                我们的产品和移动硬盘同时放在货架上,用户除了价格要素,
                <Strong>没有在使用传统硬盘的可能</Strong>—— 完全超集覆盖该品类。
              </p>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Cpu size={16} style={{ color: ACCENT }} />
                <h3 className="text-[14px] font-semibold text-neutral-800">NAS 市场 · 做大</h3>
              </div>
              <p className="text-[13px] leading-relaxed text-neutral-600">
                NAS 玩机门槛高、不便携,把很大一批用户挡在外面。我们砍掉这些部分,同时针对观影、音乐、图片三个主要媒体形式进一步优化交互,把小白用户从"想用但不敢上手"带进来。
              </p>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Cloud size={16} style={{ color: ACCENT }} />
                <h3 className="text-[14px] font-semibold text-neutral-800">云盘市场 · 侵蚀</h3>
              </div>
              <p className="text-[13px] leading-relaxed text-neutral-600">
                软件层面,云盘其实就是把 NAS 的很多门槛砍掉的形式。当我们和云盘体验一致,就相当于给用户额外多了一个"私有化、随时可访问"的选择 —— 即使无互联网。当我们的软件体验<Strong>超过</Strong>云盘,我们开始侵蚀云的市场。云的消费端唯一护城河是成本优势 —— 这一块配合"一次买断 vs 长期订阅"的话题,以及对云盘隐私审查的担忧,很大程度也可以吃下。
              </p>
            </div>
          </div>
        </Card>

        {/* 06 · Users · 使用场景 */}
        <Card id="users" delay={0.4}>
          <SectionLabel>06 · 用户画像 · 使用场景</SectionLabel>
          <SectionTitle>我们看到的不是一个群体,是几种"未被解决的隐痛",和具体的频次 × 网络场景。</SectionTitle>

          <SubTitle>① 用户画像 · 谁在为隐痛付费</SubTitle>

          {[
            {
              name: '外贸 / 跨境业务者',
              pain: '换设备频繁、跨地域、需要随身大量物料和往来文件;iCloud 受限,云盘上传慢,移动硬盘要插线。',
              fit: '本地优先 + 跨端可访问 + 一次买断,正好命中。',
            },
            {
              name: '自媒体博主 / 内容创作者',
              pain: '原片素材体量大,云盘上传慢且贵;NAS 太重,出门不便携;现有方案体验割裂。',
              fit: '便携 + 高吞吐近场同步 + 现代媒体浏览交互。',
            },
            {
              name: '大容量手机用户(尤以女性用户)',
              pain: '换机时数据迁移几小时;手机厂商解题是"设备绑定 + 容量堆叠",但他们要的是"数据可中心化、可随身"。',
              fit: '把数据从设备孤岛中解放出来,跨终端一致访问。',
            },
            {
              name: '咖啡馆 / 主理人 / 小空间运营者',
              pain: '想给客人提供音乐 / 视频 / 电子书等氛围内容,但缺一个稳定、私域、不依赖外网的承载方式。',
              fit: 'Public 模式 —— 把店内变成"近场私域小乌托邦"。',
            },
            {
              name: '独立开发者 / 多端协作者',
              pain: '跨端工具数据同步常被云锁住;近场 + 私有 + 自有协议的同步层缺失。',
              fit: '可作为开发者眼中的"近场数据中枢"。',
            },
          ].map((u, i) => (
            <div key={i} className="bg-neutral-50 rounded-2xl p-5 mt-3 first:mt-3">
              <div className="text-[14px] font-semibold text-neutral-800 mb-1">{u.name}</div>
              <p className="text-[13px] leading-relaxed text-neutral-600 mb-1">
                <Strong>隐痛:</Strong> {u.pain}
              </p>
              <p className="text-[13px] leading-relaxed text-neutral-600">
                <Strong>命中点:</Strong> {u.fit}
              </p>
            </div>
          ))}

          <SubTitle>② 使用场景 · 频次 × 网络</SubTitle>
          <Prose>
            <p>
              同一台设备,在不同<Strong>频次 × 网络</Strong>条件下承载完全不同的价值。这里挑出最典型的六个 —— 它们的共同点是
              <Strong>网络靠不住、设备多、内容重</Strong>:
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

          <Prose>
            <p className="mt-6">
              <Strong>关键判断:</Strong> 云盘 / 云相册天然不适配"网络靠不住"的场景;NAS 不便携;移动硬盘交互又退到 1995。"近场私域 + 现代体验"是这些场景里
              <Strong>唯一能站住</Strong>的形态。
            </p>
          </Prose>
        </Card>

        {/* 07 · Vision */}
        <Card id="vision" delay={0.45}>
          <SectionLabel>07 · 产品想象力延展</SectionLabel>
          <SectionTitle>"随身云"的语义边界,远不止备份。</SectionTitle>

          <div className="grid md:grid-cols-3 gap-3 mt-2">
            {[
              {
                icon: Coffee,
                title: '咖啡馆 · public 模式',
                body: '主理人把音乐、视频、电子书放上设备;客人接入店内私域,不依赖外网。把"消失的附近"重建。',
              },
              {
                icon: Mountain,
                title: '户外 · 旅途共享',
                body: '一人随身,iOS / 安卓 / 电脑都能无损取到当天原图与视频,绕开微信压缩与同步等待。',
              },
              {
                icon: Smartphone,
                title: '独立开发 · 跨端同步',
                body: '为跨端工具提供稳定、私有的近场同步层 —— 开发者社群里的真实需求。',
              },
            ].map((it, i) => {
              const Icon = it.icon;
              return (
                <div key={i} className="bg-neutral-50 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon size={16} style={{ color: ACCENT }} />
                    <div className="text-[13px] font-semibold text-neutral-800">{it.title}</div>
                  </div>
                  <p className="text-[12px] leading-relaxed text-neutral-600">{it.body}</p>
                </div>
              );
            })}
          </div>
        </Card>

        {/* 08 · 团队 + 工程 */}
        <Card id="team" delay={0.5}>
          <SectionLabel>08 · 团队 · 工程进展</SectionLabel>
          <SectionTitle>2 个人,移动 / 嵌入 / 硬件 / 产品全栈覆盖。</SectionTitle>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-neutral-50 rounded-2xl p-6">
              <div className="flex items-baseline gap-3 mb-3">
                <h3 className="text-[18px] font-semibold text-neutral-800">杨东举</h3>
                <span className="text-[12px] text-neutral-400">CEO · 移动 / 产品</span>
              </div>
              <p className="text-[14px] leading-relaxed text-neutral-600">
                曾就职于华为、字节跳动、大疆。具备移动应用开发、产品设计、用户体验、软件架构、软硬件交互场景的经验。本项目负责整体产品定义、客户端、用户洞察。
              </p>
            </div>
            <div className="bg-neutral-50 rounded-2xl p-6">
              <div className="flex items-baseline gap-3 mb-3">
                <h3 className="text-[18px] font-semibold text-neutral-800">李浩</h3>
                <span className="text-[12px] text-neutral-400">嵌入式 / 硬件</span>
              </div>
              <p className="text-[14px] leading-relaxed text-neutral-600">
                前大疆嵌入式工程师,专注于固件与板级系统开发。本项目中负责嵌入式系统、自研 PCB、电源与无线方案、硬件可行性。
              </p>
            </div>
          </div>

          <SubTitle>工程现场</SubTitle>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
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

          <SubTitle>当前阶段</SubTitle>
          <Prose>
            <p>
              <Strong>软件:</Strong> iOS、macOS 客户端核心完成,设备连接、文件管理、媒体播放主流程跑通,处于体验打磨阶段。
            </p>
            <p>
              <Strong>硬件:</Strong> 自研 PCB 多版迭代,目前在做底层性能调优(无线吞吐、功耗、稳定性)。
            </p>
            <p>
              <Strong>验证:</Strong> 在咖啡馆等真实场景做小规模访谈,部分访谈直接转化为意向订单,初步证明问题真实且有人愿意付费。
            </p>
          </Prose>
        </Card>

        {/* 09 · Q&A */}
        <Card id="qa" delay={0.55}>
          <SectionLabel>09 · 常见问题</SectionLabel>
          <SectionTitle>对项目的几个典型疑问 —— 我们的回答。</SectionTitle>
          <Prose>
            <p>
              下文按团队、产品商业、思维方法、创业者素质、与 InnoX 的契合度五个维度,回应对项目最常见的提问。
            </p>
          </Prose>

          {/* A · 团队 */}
          <div className="mt-8">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: TONE.rose.bg, color: TONE.rose.color }}
              >
                <Users size={14} />
              </span>
              <h3 className="text-[15px] font-semibold text-neutral-800">A · 团队类</h3>
            </div>
            <QA
              q="你们是怎么走到一起的?认识多久了?"
              a={
                <>
                  <p>
                    我们是大疆同事,在嵌入式 + 移动应用交互这块项目上有过实际协作。这次是在我提出"消费端随身云"这个方向后,
                    一起把树莓派原型推到自研 PCB,所以是<Strong>"先有信任,再有项目"</Strong>。
                  </p>
                </>
              }
            />
            <QA
              q="谁是 CEO?为什么是 ta?"
              a={
                <p>
                  CEO 是杨东举:产品定义、用户洞察、对外沟通由他主导;技术可行性由李浩把关。决策边界清晰,不互相越线。
                </p>
              }
            />
            <QA
              q="遇到重大分歧怎么解决?能举一个真实例子吗?"
              a={
                <>
                  <p>
                    最近的一次:在<Strong>是否引入云端可选备份</Strong>上有分歧 —— 我倾向纯本地优先;李浩担心数据安全要给用户兜底。
                  </p>
                  <p>
                    我们的处理方式是 ——
                    <Strong>不靠"谁说了算"决定,而是把分歧拆成可验证的子问题</Strong>:
                    用户调研里,有多少比例真的担心丢失?如果我们做"用户主动开关 + 加密"的可选项,会不会和"本地优先"叙事冲突?
                    最后定的是<Strong>纯本地 v1 + 后续可选加密上传</Strong>—— 是分歧后的合并方案,不是简单妥协。
                  </p>
                </>
              }
            />
            <QA
              q="股权和长期投入承诺谈过了吗?"
              a={
                <p>
                  谈过,且签过文档。两人都全职 all in,没有兼职。股权按角色 + 投入时间分配,有创始人权益锁定条款。
                </p>
              }
            />
            <QA
              q="如果某个核心成员中途退出,项目怎么继续?"
              a={
                <p>
                  这是真实风险,我们不回避。缓解方案:
                  <Strong>模块化分工 + 文档前置</Strong>(嵌入式 / 客户端 / 硬件设计都有可交接的文档);
                  同时核心 IP 在公司主体而非个人。一旦发生,我们会先稳住产品节奏,再在 InnoX / 大疆系朋友圈补人。
                </p>
              }
            />
          </div>

          {/* B · 产品 / 商业 */}
          <div className="mt-10">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: TONE.accent.bg, color: TONE.accent.color }}
              >
                <Target size={14} />
              </span>
              <h3 className="text-[15px] font-semibold text-neutral-800">B · 产品 / 商业类</h3>
            </div>
            <QA
              q="一句话讲清你们做什么、为谁解决什么问题。"
              a={
                <p>
                  我们做一台便携式 AI 个人存储设备,为"在多设备间生活、重视隐私、不愿长期订阅云盘"的消费者,提供
                  <Strong>像硬盘一样便携、像本地一样私有、像云盘一样智能</Strong>的随身存储。
                </p>
              }
            />
            <QA
              q="这个问题是怎么被你们发现的?"
              a={
                <>
                  <p>
                    起点是亲身痛点(国外读书插硬盘看剧不便)→ 树莓派原型 → 一度怀疑是伪需求 → 看到项飙
                    "消失的附近"概念后回到这个方向 → 通过咖啡馆访谈反复验证。
                  </p>
                  <p>
                    我们刻意不回避"曾经怀疑"这个过程,因为这才是真实的 problem discovery —— 不是直接想到一个聪明点子。
                  </p>
                </>
              }
            />
            <QA
              q="做过哪些用户调研?有反直觉的发现?"
              a={
                <>
                  <p>
                    主要在咖啡馆、朋友圈做面谈,不依赖问卷。
                  </p>
                  <p>
                    反直觉的发现:用户对"频次"完全不在乎 —— 他们在乎的是
                    <Strong>"想用的时候能不能秒访问、不用插线、不用再整理"</Strong>。这逆转了我们最初的市场顾虑("频次太低没人买"),让我们意识到要打的是体验,不是频次。
                  </p>
                </>
              }
            />
            <QA
              q="目标用户现在用什么替代方案?为什么不够好?"
              a={
                <p>
                  iCloud 2TB(隐私顾虑 + 长期订阅)、NAS(门槛 + 不便携)、移动硬盘(有线 + 体验割裂)。每种都有明确不满 —— 我们的差异化在于<Strong>同时弥补三处</Strong>。
                </p>
              }
            />
            <QA
              q="护城河怎么建?"
              a={
                <>
                  <p>
                    短期:<Strong>软件交互 + 跨端体验</Strong>—— 这是巨头不愿做、传统硬盘厂商做不出来的部分。
                  </p>
                  <p>长期:用户的<Strong>数据沉淀 + 跨设备习惯</Strong>—— 一旦数据迁入,迁出成本天然变高。</p>
                </>
              }
            />
            <QA
              q="商业模式?"
              a={
                <p>
                  硬件<Strong>一次买断</Strong>;后续可能引入 Pro 软件订阅(高级 AI 检索 / 多设备组网),不靠云存储租金。配合"一次买断 vs 长期订阅"叙事,是对云盘的差异化定位。
                </p>
              }
            />
            <QA
              q="TAM / SAM / SOM 怎么估?"
              a={
                <>
                  <p>
                    <Strong>TAM:</Strong> 消费端总市场 800–1200 亿 RMB;
                    <Strong>SAM:</Strong> 国内 + 跨境消费用户中重视便携 / 隐私 / 体验的群体,初步估算量级在百亿;
                    <Strong>SOM:</Strong> 我们 12–18 个月的目标是个位数万级用户、千万级营收量级,验证 Product–Market Fit。
                  </p>
                </>
              }
            />
          </div>

          {/* C · 思维方法 */}
          <div className="mt-10">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: TONE.amber.bg, color: TONE.amber.color }}
              >
                <Lightbulb size={14} />
              </span>
              <h3 className="text-[15px] font-semibold text-neutral-800">C · 思维方法类</h3>
            </div>
            <QA
              q="用过设计思维 / 双钻模型吗?"
              a={
                <p>
                  熟悉,但我们不是从框架出发倒推产品。我们是从亲身痛点开始,反复在
                  <Strong>"发散问题理解 → 收敛产品定义 → 发散场景延展 → 收敛 SKU"</Strong>之间循环 —— 这正好是双钻的实操。
                </p>
              }
            />
            <QA
              q="产品方向迭代过几次?为什么改?"
              a={
                <p>
                  三次:树莓派 UPnP 看片器(过窄)→ 通用近场云(过宽,缺锚点)→ 聚焦"消费端随身云"(锁定隐痛 + 用户画像)。每次改是因为前一版要么场景太窄、要么人群太散。
                </p>
              }
            />
            <QA
              q='怎么区分"我觉得用户需要"和"用户真的需要"?'
              a={
                <p>
                  用<Strong>真实付费意愿</Strong>区分。访谈里说"我会买"不算数 —— 我们看的是"是否当场愿意预订 / 转账意向金"。这个标准比问卷严苛得多,但避免了自我感动。
                </p>
              }
            />
            <QA
              q="如果调研发现核心假设是错的,你们怎么办?"
              a={
                <>
                  <p>先看是哪一层错了:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>体验层错 → 调交互 / 改 SKU;</li>
                    <li>品类错位 → 改硬件形态(比如做更靠近"无线 SSD"的形态);</li>
                    <li>市场不存在 → 退到工具向(开放给独立开发者作为近场同步层)。</li>
                  </ul>
                </>
              }
            />
          </div>

          {/* D · 创业者素质 */}
          <div className="mt-10">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: TONE.emerald.bg, color: TONE.emerald.color }}
              >
                <Compass size={14} />
              </span>
              <h3 className="text-[15px] font-semibold text-neutral-800">D · 创业者素质类</h3>
            </div>
            <QA
              q="为什么是你们做这件事?why you / why now?"
              a={
                <>
                  <p>
                    why you:我们有<Strong>软硬全栈</Strong>组合(华为 / 字节 / 大疆),既能讲产品也能落实硬件。
                  </p>
                  <p>
                    why now:大容量手机和 SSD 的趋势放大了"数据随身"需求,而巨头因为利益冲突不会下场,这是结构性窗口。
                  </p>
                </>
              }
            />
            <QA
              q="为什么放弃大厂 offer 做这个?"
              a={
                <p>
                  不是为了创业而创业。我自己长期被这个问题困扰,做过原型,也观察到身边人在用各种凑合方案。我希望
                  <Strong>解决一个我自己愿意每天面对的问题</Strong>。
                </p>
              }
            />
            <QA
              q="最大的挑战 / 担心是什么?"
              a={
                <p>
                  <Strong>制造和小批量爬坡</Strong>。这恰恰是我们想从 InnoX 拿到的资源 —— 你们体系里有云鲸、正浩、LiberLive 的工程化经验,这是我们最缺的部分。
                </p>
              }
            />
            <QA
              q="之前失败过的项目?"
              a={
                <p>
                  树莓派原型那一版 —— 看似 work,但没有量产想象力,因为我把它定义成"看片器"。学到的是
                  <Strong>不要把工程 demo 直接当作产品定义</Strong>,demo 是为了验证物理可行性,品类边界要由用户洞察决定。
                </p>
              }
            />
            <QA
              q="三年没结果还会坚持吗?"
              a={
                <p>
                  我们对 SKU 和细分场景会持续调整,但对"近场私域 / 数据随身"这个底层判断有信心。
                  即便走到第三年还没大规模起量,我们也会继续在这个赛道做下去 —— 因为问题不会消失。
                </p>
              }
            />
          </div>

          {/* E · InnoX 匹配度 */}
          <div className="mt-10">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: TONE.neutral.bg, color: TONE.neutral.color }}
              >
                <MessageCircle size={14} />
              </span>
              <h3 className="text-[15px] font-semibold text-neutral-800">E · 与 InnoX 的匹配度</h3>
            </div>
            <QA
              q="为什么选择 InnoX?"
              a={
                <p>
                  云鲸、正浩、LiberLive、海柔、御水飞行 —— 都是消费 / 工业硬件起家,且在工程化和供应链上由 InnoX 长期辅导。我们的品类和他们更接近,<Strong>不是软件孵化器能解决的</Strong>。
                </p>
              }
            />
            <QA
              q="希望从 Summer Camp / Bootcamp 拿到什么?"
              a={
                <ul className="list-disc pl-5 space-y-1">
                  <li>制造 / 供应链导师 —— 我们最大的缺口</li>
                  <li>消费电子产品定义 + 工业设计的过来人意见</li>
                  <li>同伴网络 —— 同期硬件创业团队的互助</li>
                  <li>从原型到小批量的工程化资源</li>
                </ul>
              }
            />
            <QA
              q="暑期能否全程全身心投入?"
              a={<p>能,无任何兼职 / 学业冲突。</p>}
            />
            <QA
              q="进入 InnoX 后,12 个月内你们想做到什么里程碑?"
              a={
                <ul className="list-disc pl-5 space-y-1">
                  <li>3 个月:工程样机收敛,完成可量产 BOM 评审</li>
                  <li>6 个月:小批量(数百台量级)制造完成</li>
                  <li>12 个月:早期用户复购数据 + 内容场景验证</li>
                </ul>
              }
            />
          </div>
        </Card>

        {/* 10 · 风险 */}
        <Card id="risks" delay={0.6}>
          <SectionLabel>10 · 风险与缓解</SectionLabel>
          <SectionTitle>我们识别到的主要风险与对应方案。</SectionTitle>
          <Prose>
            <p>以下是项目面临的主要风险及缓解路径:</p>
          </Prose>

          {[
            {
              icon: ShieldAlert,
              tone: 'rose' as Tone,
              title: '小批量制造爬坡',
              detail: '从打板到量产,中间存在大量隐性坑。',
              mitigate: '正在寻找 InnoX / 大疆系制造导师;BOM 选型期就引入工程审核。',
            },
            {
              icon: ShieldAlert,
              tone: 'amber' as Tone,
              title: '巨头入场 / 模仿',
              detail: '一旦类目验证,头部厂商可能下场。',
              mitigate: '软件 + 跨端体验是非线性壁垒;早期用户的数据沉淀 + 习惯,是更深一层的护城河。',
            },
            {
              icon: ShieldAlert,
              tone: 'amber' as Tone,
              title: '用户教育成本',
              detail: '"消费端随身云"是新品类,需要解释。',
              mitigate: '初期不强行造词,先用"无线硬盘 + 好用 App"建立认知,再逐步扩展场景叙事。',
            },
            {
              icon: ShieldAlert,
              tone: 'neutral' as Tone,
              title: '团队抗压 / 单点故障',
              detail: '2 人团队,任一人出问题影响大。',
              mitigate: '模块化分工 + 文档前置;核心 IP 归属公司主体;朋友圈备选人选已知。',
            },
          ].map((r, i) => {
            const Icon = r.icon;
            const t = TONE[r.tone];
            return (
              <div key={i} className="bg-neutral-50 rounded-2xl p-5 mt-3 first:mt-6">
                <div className="flex items-start gap-3">
                  <span
                    className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: t.bg, color: t.color }}
                  >
                    <Icon size={15} />
                  </span>
                  <div>
                    <div className="text-[14px] font-semibold text-neutral-800 mb-1">{r.title}</div>
                    <p className="text-[13px] leading-relaxed text-neutral-600 mb-1">
                      <Strong>风险:</Strong> {r.detail}
                    </p>
                    <p className="text-[13px] leading-relaxed text-neutral-600">
                      <Strong>缓解:</Strong> {r.mitigate}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Card>

        {/* Vision */}
        <Card id="vision-end" dark delay={0.65} className="text-center md:p-14">
          <div
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold mb-6"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#A5B4FC' }}
          >
            <BookOpen size={12} />
            随行云盘的下一步
          </div>
          <p className="text-2xl md:text-3xl font-semibold text-white leading-snug max-w-3xl mx-auto">
            让个人数据回到用户身边 —— 更
            <span style={{ color: '#93C5FD' }}>私密</span>、更
            <span style={{ color: '#93C5FD' }}>智能</span>、更
            <span style={{ color: '#93C5FD' }}>便携</span>,也更易用。
          </p>
        </Card>

        <div className="text-center text-[12px] text-neutral-400 pt-4 pb-8">
          随行云盘 · ooakloo · Project Dossier
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
