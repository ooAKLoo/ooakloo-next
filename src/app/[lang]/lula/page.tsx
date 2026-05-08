/* eslint-disable react/no-unescaped-entities */
import { InnoxTocSidebar, type TocGroup } from '@/components/InnoxTocSidebar';
import { LulaZoomImage } from '@/components/LulaZoomImage';
import {
  Sparkles,
  Package,
  Smartphone,
  AlertTriangle,
  Layers,
  Link as LinkIcon,
  Cpu,
  Volume2,
  BookOpen,
  Clock,
  Users,
  Brain,
  Heart,
  Crown,
  MonitorOff,
  HandCoins,
  ShieldCheck,
  Calendar,
  ThumbsDown,
  Target,
  Award,
  Compass,
  Baby,
  Wifi,
  type LucideIcon,
} from 'lucide-react';

const ACCENT = '#2563EB';
const ACCENT_LIGHT = '#EFF6FF';

type Tone = 'accent' | 'amber' | 'emerald' | 'rose' | 'neutral' | 'violet';
const TONE: Record<Tone, { color: string; bg: string }> = {
  accent: { color: ACCENT, bg: ACCENT_LIGHT },
  amber: { color: '#B45309', bg: '#FEF3C7' },
  emerald: { color: '#047857', bg: '#ECFDF5' },
  rose: { color: '#BE123C', bg: '#FFE4E6' },
  neutral: { color: '#374151', bg: '#F3F4F6' },
  violet: { color: '#6D28D9', bg: '#F5F3FF' },
};

const Chip = ({ tone, children }: { tone: Tone; children: React.ReactNode }) => {
  const t = TONE[tone];
  return (
    <span
      className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap"
      style={{ backgroundColor: t.bg, color: t.color }}
    >
      {children}
    </span>
  );
};

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
    className={`rounded-3xl p-6 md:p-10 reveal ${dark ? '' : 'bg-white'} ${className}`}
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

type Tier = '第一梯队 · AI 原生爆款' | '第二梯队 · 故事机/早教机' | '第三梯队 · IP 联名';

interface Competitor {
  img: string;
  name: string;
  brand?: string;
  link?: string;
  price: string;
  sales: string;
  salesNote?: string;
  design: string;
  tier: Tier;
  tags?: string[];
}

const COMPETITORS: Competitor[] = [
  {
    img: '/lula/competitors/bubblepal.jpg',
    name: 'BubblePal / CocoMate',
    brand: '跃然创新 Haivivi',
    link: 'https://global.haivivi.com/products/bubblepal-ai-companion-toy',
    price: '海外 $129 / 国内 399–499 元',
    sales: '累计超 20 万台',
    salesNote: '首月销量破万',
    design: '挂件嵌入式 AI 核心，把任意毛绒玩具"复活"；多角色、长期记忆、无屏、家长后台成长报告',
    tier: '第一梯队 · AI 原生爆款',
    tags: ['挂件', '大模型对话', '家长后台'],
  },
  {
    img: '/lula/competitors/folotoy.png',
    name: 'FoloToy AI 仙人掌 / MagicBox',
    brand: 'FoloToy',
    link: 'https://store.folotoy.com/products/folotoy-ai-cactus',
    price: '$79–99 / 国内 200–500 元',
    sales: '2024.11 出货 2 万台',
    salesNote: '2025 目标 30–50 万台',
    design: 'AI 魔盒模组，可装进不同玩具；按键说话、跳舞互动、多语言、低成本通用机芯',
    tier: '第一梯队 · AI 原生爆款',
    tags: ['通用机芯', '多语言', '潮玩'],
  },
  {
    img: '/lula/competitors/kedou.png',
    name: '可豆陪陪 友爱兔 / 好奇熊',
    brand: '贝陪科技',
    price: '单只 ≈399 元 / 礼盒 ≈549 元',
    sales: '上线两周天猫 AI 玩具 TOP3',
    salesNote: '超 3000 人加购',
    design: '毛绒本体 + 会眨眼"超能眼镜" + NFC 启智卡；免按压唤醒、连续对话、家长小程序',
    tier: '第一梯队 · AI 原生爆款',
    tags: ['NFC 卡牌', '毛绒玩偶', '免唤醒'],
  },
  {
    img: '/lula/competitors/xiaozhi.png',
    name: '小智 AI 对话机器人 S3 Ultra',
    brand: '顺趣 / 小智',
    price: '截图价 229 元；首发到手约 119 元',
    sales: '电商截图热品',
    salesNote: '豆包 / DeepSeek 大模型卖点明确',
    design: '百元档 AI 对话硬件；支持角色自定义、对话打断、音乐播放和声音定制，适合做低价位对照样本',
    tier: '第一梯队 · AI 原生爆款',
    tags: ['百元档', '豆包', 'DeepSeek'],
  },
  {
    img: '/lula/competitors/honor-baoao.png',
    name: '荣耀巴博 Bao-ao AI 公仔',
    brand: '荣耀生态',
    price: '截图价 459 元',
    sales: '电商截图热品',
    salesNote: '主打官方品质和送礼心智',
    design: '泰迪熊形态的 AI 公仔，卖点集中在益智陪伴、安抚对话和大厂背书；更像“品牌信任 + 毛绒陪伴”的组合',
    tier: '第三梯队 · IP 联名',
    tags: ['大厂背书', '送礼', '毛绒'],
  },
  {
    img: '/lula/competitors/folotoy-panda.png',
    name: 'FOLOTOY 智能毛绒玩具 熊猫 / 泰迪熊',
    brand: 'FoloToy',
    price: '截图价 315 元',
    sales: '电商截图热品',
    salesNote: '3–12 岁早教陪伴定位',
    design: '把 FoloToy 的 AI 模组放进更亲和的毛绒本体；能讲故事、对话互动，价格压在 300 元级',
    tier: '第一梯队 · AI 原生爆款',
    tags: ['毛绒', '早教', '300 元级'],
  },
  {
    img: '/lula/competitors/tomcat.jpg',
    name: '汤姆猫 AI 童伴机器人',
    brand: '汤姆猫 (300459)',
    price: '1499 / 1699 / 1999 元',
    sales: '开售 3 天京东淘宝 300+ 件',
    salesNote: '2025 月销量涨超 3 倍',
    design: '强 IP 溢价；灵动双眼、表情、120° 转头、情绪识别、主动聊天、中英互动',
    tier: '第三梯队 · IP 联名',
    tags: ['IP', '高溢价', '情绪识别'],
  },
  {
    img: '/lula/competitors/fuzozo.png',
    name: '芙崽 Fuzozo / 华为智慧憨憨',
    brand: '华为生态',
    price: '399 元',
    sales: '芙崽月销超 2 万',
    salesNote: '渠道预订超 10 万；智慧憨憨上线即缺货',
    design: 'Z 世代情绪陪伴：触摸/摇晃/语音多模态、日记记忆、社群与潮玩属性强',
    tier: '第一梯队 · AI 原生爆款',
    tags: ['情绪陪伴', '多模态', '潮玩'],
  },
  {
    img: '/lula/competitors/babycare-westie.png',
    name: 'babycare AI 智能西高地服饰款玩具',
    brand: 'babycare',
    price: '截图价 699 元；到手约 649 元起',
    sales: '电商截图显示 700+ 人付款',
    salesNote: '西高地小狗造型，适用对象很广',
    design: '母婴品牌切入 AI 玩具；小狗毛绒外观 + 会聊会陪玩 + 服饰配件，把“玩具”做成高客单礼物',
    tier: '第二梯队 · 故事机/早教机',
    tags: ['母婴品牌', '小狗', '高客单'],
  },
  {
    img: '/lula/competitors/mitu.jpg',
    name: '小米米兔故事机',
    brand: 'Xiaomi',
    link: 'https://www.mi.com/mitu',
    price: '≈199 元',
    sales: '销量曾过百万',
    salesNote: '覆盖 2000 万家庭',
    design: '百元价位、微信远程语音、海量故事、智能语音点播、耐摔安全材质',
    tier: '第二梯队 · 故事机/早教机',
    tags: ['百元', '方言', '下沉'],
  },
  {
    img: '/lula/competitors/alilo-f6s.png',
    name: '火火兔 F6S-AI / 新生儿礼盒',
    brand: '火火兔',
    price: '常见 100–500 元；F6S 截图价约 387 元',
    sales: '官方称服务 3000 万+ 家庭',
    salesNote: '覆盖 300+ 城市、海外 40+ 国家；截图显示 6000+ 人付款',
    design: '经典早教故事机升级 AI 形态；0–6 岁内容、儿歌、国学、哄睡、英语磨耳朵，礼盒和防摔包强化送礼场景',
    tier: '第二梯队 · 故事机/早教机',
    tags: ['下沉之王', 'AI 早教', '礼盒'],
  },
  {
    img: '/lula/competitors/yeehoo-owl.png',
    name: 'YEEHOO 英氏复读歪头鸭',
    brand: '英氏 YeeHoo',
    price: '截图价 258 元',
    sales: '电商截图显示 8000+ 人付款',
    salesNote: '主打复读学舌、摇头唱歌、早教启蒙',
    design: '传统毛绒早教玩具的“低 AI”对照样本：价格不高、卖相强、功能直接，证明家长仍愿为可爱与启蒙付费',
    tier: '第二梯队 · 故事机/早教机',
    tags: ['复读', '毛绒', '早教启蒙'],
  },
  {
    img: '/lula/competitors/alphaegg.jpg',
    name: '阿尔法蛋智能故事机 Z1',
    brand: '科大讯飞 · 淘云科技',
    price: '约 179–399 元',
    sales: '具体销量未公开',
    design: '讯飞语音能力；5 分钟录 10 段，用爸妈声音讲故事——留守/异地陪伴杀器',
    tier: '第二梯队 · 故事机/早教机',
    tags: ['声音克隆', '讯飞 ASR', '父母音'],
  },
  {
    img: '/lula/competitors/niutingting.png',
    name: '牛听听',
    brand: '小寻 · benewtech',
    price: '小水牛 ≈599 / 读书牛 ≈1400–1500 元',
    sales: '具体销量未公开',
    design: '"熏听"体系、定时播放、音频内容库、绘本/英语/国学；家长零学习成本',
    tier: '第二梯队 · 故事机/早教机',
    tags: ['熏听', '艾宾浩斯曲线', '自动播放'],
  },
  {
    img: '/lula/competitors/luka.png',
    name: '物灵 Luka 绘本阅读机器人',
    brand: 'Ling',
    price: 'Luka Basic 约 799 元',
    sales: '具体销量未公开',
    design: '摄像头识别绘本并朗读；亲子阅读 / 绘本启蒙；比故事机更偏"看书场景"',
    tier: '第二梯队 · 故事机/早教机',
    tags: ['绘本识别', '摄像头', '亲子阅读'],
  },
  {
    img: '/lula/competitors/kaishu.png',
    name: '凯叔讲故事 有声硬件',
    brand: '凯叔讲故事',
    price: '故事机 99–699 元',
    sales: '6000 万+ 用户',
    salesNote: '30000+ 内容、145 亿+ 播放',
    design: '内容/IP 驱动，不靠 AI 原生能力；分龄内容、国学/历史/名著音频体系',
    tier: '第二梯队 · 故事机/早教机',
    tags: ['IP 内容', '分龄', '音频'],
  },
];

const TIER_TONE: Record<Tier, Tone> = {
  '第一梯队 · AI 原生爆款': 'accent',
  '第二梯队 · 故事机/早教机': 'emerald',
  '第三梯队 · IP 联名': 'violet',
};

const MIIT_TOY_SAFETY_NEWS_URL =
  'https://wap.miit.gov.cn/xwfb/xwfbh/bxwfbh/art/2025/art_ceef45b5aab04aeaa03d7d91888d9807.html';
const MAGIC_MIRROR_AI_TOY_REPORT_URL = 'https://www.fxbaogao.com/detail/5223236';
const LEADLEO_AI_TOY_REPORT_URL = 'https://www.fxbaogao.com/detail/5040687';

interface Stat {
  value: string;
  unit?: string;
  label: string;
  note?: string;
  sourceUrl?: string;
}

const MARKET_STATS: Stat[] = [
  {
    value: '246',
    unit: '亿元',
    label: '2024 中国 AI 玩具市场规模',
    note: '工信部发布会公开口径',
    sourceUrl: MIIT_TOY_SAFETY_NEWS_URL,
  },
  {
    value: '290',
    unit: '亿元',
    label: '2025 预计中国 AI 玩具市场',
    note: '工信部发布会公开口径',
    sourceUrl: MIIT_TOY_SAFETY_NEWS_URL,
  },
  {
    value: '978.5',
    unit: '亿元',
    label: '2024 国内玩具零售总额',
    note: '工信部发布会公开口径',
    sourceUrl: MIIT_TOY_SAFETY_NEWS_URL,
  },
  {
    value: '1000',
    unit: '亿元+',
    label: '2025 国内玩具零售总额预计',
    note: '工信部发布会公开口径',
    sourceUrl: MIIT_TOY_SAFETY_NEWS_URL,
  },
  {
    value: '558.3',
    unit: '亿元',
    label: '2024 潮流收藏玩具及周边',
    note: '工信部发布会公开口径',
    sourceUrl: MIIT_TOY_SAFETY_NEWS_URL,
  },
];

interface MarketSegment {
  dimension: string;
  metric: string;
  note: string;
  source: string;
  sourceUrl: string;
  tone: Tone;
}

const MARKET_SEGMENTS: MarketSegment[] = [
  {
    dimension: '国内线上 AI 玩具',
    metric: '2025.1–10 销售额 5.2 亿 / 销量 122.5 万件',
    note: '销售额同比 +394.9%，销量同比 +960.5%，线上渗透率升至 3.8%；说明线上还小，但增长非常快。',
    source: '魔镜洞察',
    sourceUrl: MAGIC_MIRROR_AI_TOY_REPORT_URL,
    tone: 'accent',
  },
  {
    dimension: '渠道',
    metric: '抖音渠道同比 +4391.3%',
    note: 'AI 玩具的交互效果需要被演示，短视频和直播比货架电商更容易完成品类教育。',
    source: '魔镜洞察',
    sourceUrl: MAGIC_MIRROR_AI_TOY_REPORT_URL,
    tone: 'rose',
  },
  {
    dimension: '品类增速',
    metric: 'AI 潮玩 +798.7% / AI 教辅益智 +473.7%',
    note: '毛绒类型潮玩份额从 7.0% 升至 15.7%；高端具身机器人份额从 60%+ 降至 38%。',
    source: '魔镜洞察',
    sourceUrl: MAGIC_MIRROR_AI_TOY_REPORT_URL,
    tone: 'violet',
  },
  {
    dimension: '价格段迁移',
    metric: '2024 高端主导 → 2025 千元以下主流',
    note: '2024 年 3000 元以上价格段占 54.0%；随着 AI 模组和供应链降本，中低端产品开始放量。',
    source: '魔镜洞察',
    sourceUrl: MAGIC_MIRROR_AI_TOY_REPORT_URL,
    tone: 'emerald',
  },
  {
    dimension: '细分均价',
    metric: 'AI 潮玩 428.7 元 / 教辅 404.9 元 / 机器人 4359.5 元',
    note: 'Lula 若打 ¥100–150，需要证明低于当前主流均价后仍能保证交互、内容和售后。',
    source: '魔镜洞察',
    sourceUrl: MAGIC_MIRROR_AI_TOY_REPORT_URL,
    tone: 'amber',
  },
  {
    dimension: '竞争集中度',
    metric: 'TOP10 品牌占 62.8%',
    note: '头部集中度已经不低，但腰尾部新品牌仍在快速涌入；窗口期存在，淘汰也会很快。',
    source: '魔镜洞察',
    sourceUrl: MAGIC_MIRROR_AI_TOY_REPORT_URL,
    tone: 'neutral',
  },
  {
    dimension: '长期上限',
    metric: '2030 中国 AI 玩具预计 797.8 亿',
    note: '头豹研究院预测口径，用于观察 2025–2030 年的中长期增长空间。',
    source: '头豹研究院',
    sourceUrl: LEADLEO_AI_TOY_REPORT_URL,
    tone: 'accent',
  },
  {
    dimension: '全球参照',
    metric: '2023 全球 AI 玩具 125 亿美元 → 2030 250 亿美元',
    note: '全球销售额预测，2030 年渗透率接近 20%；用于判断中国 AI 玩具出海空间。',
    source: '魔镜洞察',
    sourceUrl: MAGIC_MIRROR_AI_TOY_REPORT_URL,
    tone: 'violet',
  },
];

interface PriceBand {
  range: string;
  status: '已被占' | '真空段' | '已挤满';
  who: string;
  note: string;
}

const PRICE_BANDS: PriceBand[] = [
  {
    range: '< 100 元',
    status: '已被占',
    who: '开源小智 + 华强北白牌',
    note: '几十元成本攒一台；没品牌、没售后、没内容',
  },
  {
    range: '¥100–150',
    status: '真空段',
    who: '——目前没有玩家——',
    note: '"有 IP / 有品牌 / 有售后 / 50%+ 毛利"的真空。这就是 Lula 的位置',
  },
  {
    range: '300–800 元',
    status: '已挤满',
    who: 'BubblePal 399 / CocoMate 799 / 芙崽 399 / 智能憨憨',
    note: '头部都在这里厮杀，主打一二线尝鲜家长',
  },
];

interface OppRisk {
  title: string;
  why: string;
}

const OPPORTUNITIES: OppRisk[] = [
  {
    title: '¥100–150 价格真空',
    why: '头部全在 300–800 元厮杀，<100 元被开源小智 / 华强北白牌占着——中间这一段没有"有 IP、有售后、有品牌"的玩家',
  },
  {
    title: '银发陪伴已被验证',
    why: '京东京造"唠唠鹦"100 多元跑通方言+养生+紧急呼救——证明这不是 PPT 概念，是真实付费场景',
  },
  {
    title: '留守儿童刚需',
    why: '县城 / 乡镇大量"爷奶带娃、父母在外打工"，"会聊天的奥特曼"是情感代偿——比一线"AI 育儿助手"更刚性',
  },
  {
    title: '方言 + 弱网兜底',
    why: '头部都在北上广深，普通话团队、满格 WiFi——他们做不好的两件事，正是下沉用户的体验底线',
  },
  {
    title: '渠道路径清晰',
    why: '拼多多 + 抖音 / 快手是线上主战场；奥飞、火火兔已在做社区团购和母婴店下沉，路被踩通了',
  },
  {
    title: '老 IP 撬动决策',
    why: '县城妈妈认的是奥特曼 / 喜羊羊 / 熊出没——20 年沉淀的形象比 Labubu 这种潮 IP 有效得多',
  },
];

const RISKS: OppRisk[] = [
  {
    title: '退货率 30–40%',
    why: '头部都没解决的伤口；下沉用户价格敏感、容忍度低，七天无理由会让退货更糟，直接打穿现金流',
  },
  {
    title: '技术门槛归零',
    why: '开源小智 + DeepSeek / 豆包免费 API + 乐鑫 ESP32，几十块就能攒一台；剩下能拼的只剩品牌、渠道、成本',
  },
  {
    title: '12–18 个月窗口',
    why: '行业人士预测今年多出几百家竞争者——要么这段时间打出区域品牌，要么被传统玩具厂或大厂收割',
  },
  {
    title: '订阅模式劝退',
    why: 'BubblePal 99 元/年续费才能继续聊——下沉用户直接判定为骗局；反过来"一次买断"是杀手锏',
  },
  {
    title: '巨头下场',
    why: '字节豆包、京东 JoyInside、华为小艺、奥飞、火火兔都在做——供应链 / IP / 渠道结构性优势压顶',
  },
  {
    title: '留存数据不堪',
    why: '两周新鲜感过去后活跃度断崖式下跌，没人敢公布 DAU / MAU——复购故事讲不通，单台硬件必须能直接挣钱',
  },
];

interface MarketingTemplate {
  label: string;
  content: string;
}

interface MarketingScene {
  num: string;
  channel: string;
  desc: string;
  templates: MarketingTemplate[];
}

const CORE_MESSAGE = {
  oneLine: '会听话的 AI 朋友，陪孩子从 3 岁聊到 8 岁——¥39 起，终身免费，没有屏幕。',
  pillars: [
    '没有屏幕，不伤眼——比手机强多了',
    '听得懂方言、听得懂小孩话——3 岁也会用',
    '终身免费，买了就用，不收续费',
  ],
  hook: '能学爸爸妈妈的声音——你不在家的时候，它替你陪孩子。',
  trust: '接入豆包 / DeepSeek 大模型 · 食品级硅胶 · 365 天换新 · 全国包邮',
  banned: ['多模态', '长上下文', 'Agent', '生成式', 'AI Native', '深度学习'],
};

const MARKETING_SCENES: MarketingScene[] = [
  {
    num: '01',
    channel: '电商主图 / 详情页',
    desc: '拼多多 + 抖音商城为主；每张图一个核心信息，文字越大越好',
    templates: [
      { label: '主图 1 · 击穿心智', content: '"¥39 起 / 终身免费 / 没有屏幕"——三行字盖住产品图一半。配图：孩子抱玩具，妈妈在旁边笑' },
      { label: '主图 2 · 声音克隆', content: '"会喊妈妈的 AI 朋友"——配妈妈对着手机录音的画面' },
      { label: '主图 3 · 方言', content: '"听得懂四川话 / 河南话 / 东北话"——下面列方言图标，命中本地用户' },
      { label: '主图 4 · 免唤醒', content: '"3 岁孩子也会用，直接喊它名字就行"——突出免按键交互' },
      { label: '主图 5 · 售后', content: '"365 天坏了换新，不修不退"——下沉市场最关心的钩子' },
      { label: '详情页 · 痛点共鸣三连', content: '担心孩子玩手机毁眼睛？/ 工作忙没时间陪孩子？/ 想给孩子用 AI 又怕交不完的会员费？' },
      { label: '详情页 · 信任背书', content: '豆包 / DeepSeek 大模型 · FDA/SGS 双认证食品级硅胶 · 365 天换新 · 全国包邮 · 7 天无理由' },
    ],
  },
  {
    num: '02',
    channel: '抖音口播脚本(15–30s)',
    desc: '前 3 秒必须留人；口语 + 钩子 + 冲突感',
    templates: [
      {
        label: 'A · 留守儿童情感款 30s',
        content: '妈妈在工厂看视频里孩子哭 → 奶奶："宝宝又哭了，说想妈妈" → 妈妈打开 App 录一段话 → 玩具用妈妈声音说"宝宝乖，妈妈就在这呢" → 孩子笑着抱玩具睡了。字幕：学会妈妈声音的 AI 朋友 · ¥39 起 · 终身免费',
      },
      {
        label: 'B · 对比手机款 15s',
        content: '"你家孩子还在抢手机看？我家娃自从有了这个，再也不要手机了。" 展示玩具→"没屏幕、能聊天、会讲故事、听得懂老家话。¥39 起买了终身免费用，我都后悔没早买。"',
      },
      {
        label: 'C · 省心妈妈款 20s',
        content: '"做饭的时候孩子缠着我？以前我崩溃，现在我笑。" 玩具："宝宝，我们来背首古诗好不好？" "它能聊天、能讲故事、能哄睡，我做饭的 30 分钟它全包了。"',
      },
    ],
  },
  {
    num: '03',
    channel: '产品包装文案',
    desc: '县城母婴店 / 文具店货架；包装是"沉默销售员"，3 秒讲清楚',
    templates: [
      { label: '正面主视觉', content: '小布 · 会听话的 AI 朋友 · ¥39 起 · 终身免费 · 没有屏幕' },
      { label: '侧面三卖点', content: '🎙️ 学会爸爸妈妈的声音 · 🗣️ 听得懂方言 + 小孩话 · 📚 接入豆包大模型，和大人用的 AI 是一家' },
      { label: '背面详情', content: '适用 3-8 岁 / 食品级硅胶 + ABS / FDA·SGS 双认证 / 续航 8 小时 / 内置 500 故事 + 200 儿歌 + 1000 十万个为什么 / 365 天换新 / 终身免费 AI 对话不收续费' },
    ],
  },
  {
    num: '04',
    channel: '县域地推 / 母婴店导购',
    desc: '乡镇母婴店 / 幼儿园门口 / 商场儿童区；县代理大姐主战场',
    templates: [
      { label: '开场 30s', content: '"姐，你家孩子几岁啦？——我这有个会说话的 AI 玩具，跟你家孩子聊一聊，他要是不喜欢咱不买。"' },
      { label: '演示阶段', content: '不要先讲产品，直接让玩具问孩子："你叫什么名字呀？最喜欢吃什么？我给你讲个故事好不好？"——孩子一笑，单子基本成了' },
      { label: '疑问 · 伤眼吗', content: '"它没屏幕，完全不发光，跟玩偶一样，只是会说话。"' },
      { label: '疑问 · 听得懂吗', content: '"专门训练过小孩说话的口音，不像那些智能音箱。咱试试就知道了——[让孩子说话]"' },
      { label: '疑问 · 续费吗', content: '"我们这个不一样。¥39 起买了就是你的，终身免费用 AI 聊天，不收任何续费。包装上都写着呢。"' },
      { label: '疑问 · 坏了怎么办', content: '"一年内坏了直接换新机，不修不退，微信扫码就办。"' },
    ],
  },
  {
    num: '05',
    channel: '微信群裂变 · 县代理',
    desc: '县代理大姐建本地家长群；老带新机制是命门——和 11 避战章节的 ★ 护城河咬合',
    templates: [
      { label: '入群福利', content: '入群送试用 IP 外衣体验券 / 父母声音录制引导(¥0 但有获取门槛)' },
      { label: '老带新返现', content: '推荐成功送一套 IP 外衣 / 内容包；自动生成成长卡片带二维码，朋友圈一键转发' },
      { label: '群内活动', content: '节日方言儿歌赛 / 周末线下亲子聚会 / 晒娃返现 / 县代理大姐每周直播答疑' },
      { label: '一键炫耀卡片', content: '孩子学会一首古诗后，小程序自动生成精美卡片，底部带二维码——既是炫耀也是拉新' },
    ],
  },
];

interface AnxietyWindow {
  label: string;
  age: string;
  trigger: string;
}

const ANXIETY_WINDOWS: AnxietyWindow[] = [
  {
    label: '窗口 A',
    age: '2.5–3 岁',
    trigger: '幼儿园前焦虑——第一次面对"我要把孩子交给社会"，第一次担心"我家孩子会不会比别人差"，第一次被幼儿园老师 / 家长群"卷"到',
  },
  {
    label: '窗口 B',
    age: '5–6 岁',
    trigger: '幼小衔接焦虑——拼音 / 识字 / 英语 / 数学要不要提前学，"再不学就晚了"的压迫感最强；家长群疯狂讨论"学习机 / 网课 / AI"',
  },
];

interface UserCircle {
  letter: string;
  label: string;
  scale: string;
  desc: string;
  strategy: string;
  budget: string;
  tone: Tone;
}

const USER_CIRCLES: UserCircle[] = [
  {
    letter: 'A',
    label: '县城/乡镇 普通工薪',
    scale: '~5,000 万家庭',
    desc: '县城公务员 / 教师 / 小生意人 / 打工夫妻；爸妈双方在身边或同城',
    strategy: '主战场——付费稳、传播效率高、复购最有潜力',
    budget: '60% 资源',
    tone: 'accent',
  },
  {
    letter: 'B',
    label: '留守儿童家庭',
    scale: '~3,000 万家庭',
    desc: '父母在外务工(45.6% 双方都外出)，爷奶带娃，平均 59 岁、小学文化为主',
    strategy: '情感杀器——声音克隆 + 远程留言为这群人设计',
    budget: '30% 资源',
    tone: 'violet',
  },
  {
    letter: 'C',
    label: '三四线 中产 / 准中产',
    scale: '~2,000 万家庭',
    desc: '事业单位中层 / 银行 / 医院；有钱有闲焦虑足；女儿幼小衔接',
    strategy: '扩张目标——V2 阶段客单 ¥399–499 上探',
    budget: '10% 资源',
    tone: 'amber',
  },
];

interface Persona {
  name: string;
  role: string;
  age: string;
  city: string;
  child: string;
  income: string;
  apps: string;
  pain: string;
  decision: string;
  quote: string;
  oneLiner: string;
  weight: string;
  tone: Tone;
}

const PERSONAS: Persona[] = [
  {
    name: '王芳',
    role: '县城宝妈',
    age: '32 岁 / 大专',
    city: '河南某县城自购房',
    child: '5 岁儿子幼儿园中班',
    income: '家庭月入 ¥6,000–12,000',
    apps: '微信 / 抖音 / 拼多多 / 小红书',
    pain: '一天累成狗孩子还粘人；他爸天天打游戏陪都是我陪；想不输人但讨厌被骗',
    decision: '抖音种草 → 妈妈群熟人验证 → 拼多多 / 抖音商城下单(7 天可退)',
    quote: '"我没文化辅导他作业讲不清楚，要是有个东西能教他就好了。"',
    oneLiner: '想做"好妈妈"但累得想撂挑子，会被"省心 + 不伤眼 + 终身免费"打动，但只在熟人验证后才下单',
    weight: '★★★ 主战场',
    tone: 'accent',
  },
  {
    name: '刘秀英 + 李丽',
    role: '留守家庭(奶奶 + 在外妈妈)',
    age: '奶奶 62 / 妈妈 30',
    city: '四川县下乡镇 ↔ 东莞',
    child: '4 岁孙子小宝',
    income: '妈妈夫妻月入 ¥8,000–12,000，寄回 3,000–4,000',
    apps: '奶奶千元安卓只用微信视频；妈妈 OPPO + 抖音 / 1688 / 拼多多',
    pain: '妈妈愧疚想"在场"；奶奶不会用电子产品；小宝想妈妈说不出来',
    decision: '抖音被"妈妈声音哄睡"打中 → 老乡群验证"奶奶能用" → 直接寄回老家',
    quote: '"我在外打工挣钱给孩子，但孩子根本不认识我。每次视频他都哭。"',
    oneLiner: '一对被距离割开的母子——妈妈愿意为"声音的在场"付任何价钱，奶奶不会用任何复杂的东西',
    weight: '★★★ 情感杀器',
    tone: 'violet',
  },
  {
    name: '陈晓',
    role: '三四线虎妈',
    age: '34 岁 / 本科',
    city: '江苏南通自购房',
    child: '6 岁女儿幼小衔接',
    income: '家庭年入 ¥25–40 万',
    apps: '小红书 / 微信 / 抖音 / 京东',
    pain: '怕产品太"低龄向"显得不专业；要看到学习效果；担心错过 AI 时代',
    decision: '小红书测评 + 教育博主 → 京东 / 天猫下单 → 同时给孩子用学习机',
    quote: '"AI 玩具能不能让孩子开口说英语？"',
    oneLiner: '能为"教育价值"花钱的三线虎妈，买之前看测评、买之后看效果——V2 阶段才发力',
    weight: '★ V2 扩张',
    tone: 'amber',
  },
];

interface UseScene {
  num: string;
  name: string;
  time: string;
  who: string;
  desc: string;
}

const USE_SCENES: UseScene[] = [
  {
    num: '01',
    name: '做饭时的"哄娃神器"',
    time: '17:00–18:30',
    who: '王芳 / 奶奶 / 陈晓',
    desc: '★ 出现频次最高的核心 daily use case；传统解法是给手机看动画片',
  },
  {
    num: '02',
    name: '睡前故事',
    time: '21:00 前后',
    who: '王芳 / 奶奶★★★ / 陈晓',
    desc: '★★★ 留守家庭核杀器；孩子要听故事才肯睡，奶奶完全讲不了',
  },
  {
    num: '03',
    name: '留守儿童"妈妈替身"',
    time: '全天散布',
    who: '奶奶★★★',
    desc: '★★★ 行业里没人专门做的差异化；妈妈克隆声音 + 远程留言',
  },
  {
    num: '04',
    name: '哭闹安抚',
    time: '每周 2–3 次',
    who: '王芳 / 奶奶',
    desc: '检测到哭声 / 关键词，自动切换安抚模式；情绪兜底',
  },
  {
    num: '05',
    name: '学龄前启蒙',
    time: '20–40 分钟/天',
    who: '王芳 / 陈晓★★★',
    desc: '古诗 / 儿歌 / 十万个为什么 / 英语 / 拼音 / 数学——家长付费的"理性理由"',
  },
  {
    num: '06',
    name: '祖辈带娃的省力工具',
    time: '工作日全天',
    who: '奶奶★★★',
    desc: '零操作：孩子直接喊就能聊；行业普遍忽视的"老人友好"维度',
  },
];

interface AntiPersona {
  who: string;
  why: string;
  shouldBuy: string;
}

const ANTI_PERSONAS: AntiPersona[] = [
  {
    who: '一线城市精英妈妈',
    why: '"¥39–69 终身免费"在她们眼里像便宜货',
    shouldBuy: 'BubblePal / 汤姆猫 / 乐森机器人',
  },
  {
    who: 'Z 世代 / 单身潮玩',
    why: '"启蒙 / 教育"对他们没意义',
    shouldBuy: '芙崽 Fuzozo / 显眼包',
  },
  {
    who: '海淀 / 顺义鸡娃虎妈',
    why: '在她们眼里这是"低龄玩具"，不如学而思 1对1',
    shouldBuy: '学习机 / 网课 / 1对1',
  },
  {
    who: '0–2 岁宝宝家庭',
    why: '宝宝不会说话，玩具核心交互(对话)用不上',
    shouldBuy: '传统早教机 / 绘本 / 亲子陪伴',
  },
];

interface BigCoNotDo {
  title: string;
  desc: string;
}

const THREE_REASONS: BigCoNotDo[] = [
  {
    title: '数据看不见',
    desc: '一个细分场景一年 5000 万 GMV——对独立创业者是命，对字节是凑不齐 OKR 的零头，产品经理不会立项',
  },
  {
    title: '品牌不能贴',
    desc: '京东自营 / 华为 / 字节豆包的 logo 印上去要担社会责任和审美包袱，土味设计先被法务和品牌部毙掉',
  },
  {
    title: '渠道下不去',
    desc: '大厂用天猫旗舰店、京东自营、抖音蓝 V 矩阵；县城母婴店、大集庙会、学校门口文具店——销售总监招不到下得去的人',
  },
];

interface LowPath {
  num: string;
  title: string;
  desc: string;
  examples: string[];
  whyMoat: string;
}

const LOW_PATHS: LowPath[] = [
  {
    num: '01',
    title: '方言垂直 · 一种方言一个 SKU',
    desc: '不要做"支持 8 种方言"，做"潮汕话讲故事熊"、"四川话识字猫"、"粤语启蒙鸭"。每个方言版本是独立 SKU、独立直播间、独立分销',
    examples: [
      '潮汕话讲故事熊 / 闽南话儿歌兔',
      '四川话识字猫 / 粤语启蒙鸭',
      '豫语讲故事熊 / 东北话哄睡公主',
    ],
    whyMoat: '潮汕话母语 2500 万人——做不出大厂"集团重点产品"的千万 DAU KPI，立项不过',
  },
  {
    num: '02',
    title: '场景极窄 · 不要"陪伴"，要"哄饭神器"',
    desc: '把"陪伴启蒙"这种 PPT 友好话改成具体到一线销售员都能复述的儿童场景',
    examples: [
      '哄饭机：不张嘴讲故事，张嘴吃饭就奖励',
      '写作业陪伴：小狗坐桌上，写一题表扬一句',
      '接送陪聊：挂书包侧，放学路上听故事',
      '哄睡神器：睡前 30 分钟方言儿歌自动播放',
    ],
    whyMoat: '"哄饭"两个字进不了字节豆包的 PRD 文档；这种细分写不出"通用 AI 助手"的 narrative',
  },
  {
    num: '03',
    title: '命名土味 · 功能直白 + 老 IP 借力',
    desc: '不要 BubblePal / CocoMate / 芙崽 这种英文 + 二次元名字。直白功能 + 老 IP 才是下沉语言',
    examples: [
      '❌ "BubblePal" / "芙崽" / "智能憨憨"',
      '✅ 讲故事熊 / 哄饭小狗 / 学拼音猫 / 接娃小老虎',
      '✅ 奥特曼讲故事机 / 喜羊羊学拼音 / 熊出没哄饭神器',
    ],
    whyMoat: '"哄饭小狗"四个字会让京东京造的品牌部集体辞职——这就是壁垒',
  },
  {
    num: '04',
    title: '价格 ¥39 / 49 / 69 · 单台 BOM ≤ 25 元',
    desc: '不要在 100 元以上玩。小智方案 + 简陋外壳能压到 25 元 BOM；零售 39–69 元，单台净赚 8–15 元，靠走量打穿心智',
    examples: [
      '主机一次买断、终身能聊——直接干掉 BubblePal 99 元/年的订阅',
      'IP 配件包收钱：换装 / 皮肤 / 节日特别版，99 元送 5 个皮肤',
      '硬件功能本体永远不锁',
    ],
    whyMoat: '大厂硬件最低毛利门槛 35%+ 且 SKU 出货 50 万台起——39 元零售价过不了财务',
  },
  {
    num: '05',
    title: '包装义乌风 + 渠道大厂去不了的地方',
    desc: '土味包装在抖音直播间转化率反而更高。线上线下双管齐下，全部避开大厂主战场',
    examples: [
      '包装：大红 + 大字 + 90 年代电子表风格(不要 MUJI 风)',
      '线上：拼多多 + 视频号 + 快手(不碰天猫京东)',
      '线下：县城大集 / 庙会玩具摊 / 学校门口文具店 / 县城母婴连锁',
    ],
    whyMoat: '县城代理一家家跑——大厂销售总监招不到这种人',
  },
];

interface NetDeadEnd {
  num: string;
  title: string;
  desc: string;
}

const NET_DEAD_ENDS: NetDeadEnd[] = [
  {
    num: '01',
    title: '儿童手表不开放热点',
    desc: '小天才 / 华为 / 米兔只支持作为 WiFi 客户端，不支持热点共享。续航撑不住、儿童套餐运营商不允许共享给第三方、"教育白名单"监管认证过不了',
  },
  {
    num: '02',
    title: '蓝牙 PAN 没开放',
    desc: '理论上能用蓝牙 PAN 共享网络，但主流国产儿童手表蓝牙只开放给"耳机 / 面对面交友"，PAN profile 全部关闭',
  },
  {
    num: '03',
    title: '流量与延迟都不够',
    desc: '儿童手表套餐 1–3GB/月，AI 持续语音对话每天 100MB+，一周就把套餐耗完。即使能开热点，体验也不可用',
  },
  {
    num: '04',
    title: '上学路上 / 学校里有争议',
    desc: '玩具一旦"任何地方都能联网"，会被带去学校——老师反感、同学打扰、家长投诉，反而变成负面口碑源头',
  },
];

interface ArchLayer {
  scope: 'cloud' | 'edge';
  label: string;
  hint: string;
  features: string[];
}

const NET_ARCHITECTURE: ArchLayer[] = [
  {
    scope: 'cloud',
    label: '云端 · 联网时增强',
    hint: '锦上添花',
    features: [
      '大模型自由对话',
      '声音克隆训练',
      '远程留言 / 微信叫醒玩具',
      '内容更新 / 卡包下发',
    ],
  },
  {
    scope: 'edge',
    label: '端侧 · 断网也能用',
    hint: '产品命门',
    features: [
      '唤醒词识别(本地)',
      '内置 500 故事 + 200 首儿歌',
      '完整内置故事/儿歌/古诗音频库(全本地)',
      '已下载的父母声音故事 ★ 关键',
      '1000 条预设 FAQ 简单问答',
    ],
  },
];

interface NetPhase {
  stage: string;
  network: string;
  price: string;
  pitch: string;
  tone: 'mvp' | 'next' | 'never';
}

const NET_PHASES: NetPhase[] = [
  {
    stage: 'MVP · 首发',
    network: 'WiFi + 离线缓存',
    price: '¥199–299',
    pitch: '"断网也能讲故事"',
    tone: 'mvp',
  },
  {
    stage: 'V2 · 6 个月后',
    network: 'WiFi / 4G 双 SKU',
    price: '¥299 / 499',
    pitch: '"出门也能用"(可选)',
    tone: 'next',
  },
  {
    stage: '永远不做',
    network: '依赖儿童手表热点',
    price: '—',
    pitch: '技术不可行 + 用户认知错位',
    tone: 'never',
  },
];

interface SoftwareCat {
  type: string;
  apps: string;
  takeaway: string;
}

interface SoftApp {
  name: string;
  brand?: string;
  img: string;
  screen: string;
  screenShape?: 'phone' | 'wide';
  region: 'CN' | 'INTL';
  age: string;
  price: string;
  highlight: string;
  takeaway: string;
  tags?: string[];
}

const SOFTWARE_APPS: SoftApp[] = [
  {
    name: '斑马 App',
    brand: '猿辅导',
    img: '/lula/software/zebra.jpg',
    screen: '/lula/software/screens/zebra.png',
    region: 'CN',
    age: '2–8 岁',
    price: '系统课 2000–3500 元',
    highlight: '英语 / 思维 / 语文一体化；AI 互动课 + 辅导老师双轮；大量配套教具(点读笔、卡、绘本)',
    takeaway: '免费工具引流 → 系统课变现 → 多品类延长 LTV，是国内启蒙赛道标杆路径',
    tags: ['多学科', '辅导老师', '教具'],
  },
  {
    name: '叽里呱啦',
    brand: '台湾团队 · 2014',
    img: '/lula/software/jiliguala.jpg',
    screen: '/lula/software/screens/jiliguala.jpg',
    region: 'CN',
    age: '0–8 岁',
    price: '中低价位',
    highlight: '0-2 岁萌芽路线 + 2-8 岁 L0–L6 七级体系；自然拼读独立模块；原创真人音视频',
    takeaway: '抄它的 7 级分龄结构和"价格友好打下沉"的策略',
    tags: ['英语', '7 级分龄', '下沉强'],
  },
  {
    name: '瓜瓜龙',
    brand: '字节跳动',
    img: '/lula/software/guagualong.png',
    screen: '/lula/software/screens/guagualong.jpg',
    region: 'CN',
    age: '2–8 岁',
    price: '系统课 2000+',
    highlight: 'K0/K1/K2 三阶段；每节 15 分钟；正课 → 绘本 → 复习 → 趣味四节循环；思维对标 CCSS',
    takeaway: '抄它的"周课节奏"——固定四类课形周内闭环，孩子有期待',
    tags: ['流量打法', 'K0-K2', '15 分钟'],
  },
  {
    name: '洪恩识字 / 英语',
    brand: '完美世界',
    img: '/lula/software/hongen.jpg',
    screen: '/lula/software/screens/hongen.jpg',
    region: 'CN',
    age: '3–8 岁',
    price: '198–998 元',
    highlight: '游戏公司基因 → 重游戏化；5 节一周期(单词→儿歌→绘本→口语)；识字 1300 字',
    takeaway: '抄"五节循环 + 游戏皮肤奖励"，但小心被家长批"游戏成分过重"',
    tags: ['游戏化', '识字', '完美世界'],
  },
  {
    name: '叫叫 AI 启蒙与应用',
    brand: '叫叫 · 2025 新品',
    img: '/lula/software/jiaojiao.jpg',
    screen: '/lula/software/screens/jiaojiao.jpg',
    region: 'CN',
    age: '5–9 岁',
    price: '未公开',
    highlight: '行业首款"完整世界观 + 角色扮演" AI 启蒙课；不是用 AI 教孩子，而是教孩子用 AI',
    takeaway: '2026 最值得抄的方向——把"和 AI 协作"本身做成课程内容',
    tags: ['新趋势', '世界观', '教孩子用 AI'],
  },
  {
    name: '小猴 AI 课',
    brand: '好未来',
    img: '/lula/software/xiaohou.jpg',
    screen: '/lula/software/screens/xiaohou.png',
    region: 'CN',
    age: '3–8 岁',
    price: '系统课 2000+',
    highlight: '好未来旗下 AI 启蒙课；语数英覆盖；学而思教研体系背书',
    takeaway: '抄"教研体系包装"——"学而思出品"是中国家长的强信任符号',
    tags: ['学而思系', '教研背书'],
  },
  {
    name: '凯叔讲故事',
    brand: '凯叔',
    img: '/lula/software/kaishu.jpg',
    screen: '/lula/software/screens/kaishu.jpg',
    region: 'CN',
    age: '0–12 岁',
    price: '免费 + 内购',
    highlight: '6000 万用户 / 8000+ 故事 / 145 亿播放；按年龄智能推荐；强 IP 驱动',
    takeaway: '抄"分龄推荐 + 哄睡场景"，配合我们硬件的熏听功能',
    tags: ['音频', 'IP', '6000 万用户'],
  },
  {
    name: 'ABCmouse / 开心鼠',
    brand: '腾讯引进 · 美国老牌',
    img: '/lula/software/abcmouse.jpg',
    screen: '/lula/software/screens/abcmouse.jpg',
    region: 'CN',
    age: '2–8 岁',
    price: '约 1500–2500 元',
    highlight: '10000+ 活动；语言艺术 / 数学 / 科学 / 艺术全学科；结构化课程路径',
    takeaway: '抄它的"全学科课程图谱"——把启蒙变成一张闯关地图',
    tags: ['全学科', '结构化'],
  },
  {
    name: 'Khan Academy Kids',
    brand: 'Khan Academy',
    img: '/lula/software/khan-kids.jpg',
    screen: '/lula/software/screens/khan-kids.jpg',
    region: 'INTL',
    age: '2–8 岁',
    price: '完全免费 / 无广告',
    highlight: '斯坦福合作研发；AI 自适应路径(ABC ✓ 但形状 ✗ 自动调内容)；RCT 验证早期识字提升',
    takeaway: '抄"自适应内容路径"——根据表现实时改下一题，不是固定课表',
    tags: ['免费', 'AI 自适应', 'RCT'],
  },
  {
    name: 'Duolingo ABC',
    brand: 'Duolingo',
    img: '/lula/software/duolingo-abc.jpg',
    screen: '/lula/software/screens/duolingo-abc.jpg',
    region: 'INTL',
    age: '3–8 岁',
    price: '免费',
    highlight: 'AI 实时调难度 + 即时反馈；字母 / 自然拼读 / 高频词 / 词汇；bite-size 微课',
    takeaway: '抄"bite-size 微课 + streak 激励"——绑定每日打开习惯',
    tags: ['微课', 'streak', '免费'],
  },
  {
    name: 'Khanmigo',
    brand: 'Khan Academy',
    img: '/lula/software/khanmigo.png',
    screen: '/lula/software/screens/khanmigo.webp',
    screenShape: 'wide',
    region: 'INTL',
    age: '8 岁+',
    price: '订阅制',
    highlight: '苏格拉底式 AI 1v1 辅导——不直接给答案，引导思考',
    takeaway: '硬件大年龄段的升级范本：从"陪聊"进化到"启发式辅导"',
    tags: ['苏格拉底式', '一对一'],
  },
  {
    name: 'Osmo',
    brand: 'Osmo',
    img: '/lula/software/osmo.jpg',
    screen: '/lula/software/screens/osmo.jpg',
    region: 'INTL',
    age: '3–10 岁',
    price: '套装 ¥800–2000',
    highlight: '实体玩具 + iPad 视觉识别；"看得见摸得着"的混合学习',
    takeaway: '"实体教具 + 屏幕"混合形态值得借鉴；但实体识别系统(NFC/AR)生产链复杂，我们刻意不做',
    tags: ['软硬结合', '实体卡', 'AR 识别'],
  },
];

interface SoftMethod {
  icon: LucideIcon;
  title: string;
  desc: string;
  source: string;
}

const SOFT_METHODS: SoftMethod[] = [
  {
    icon: Target,
    title: '分龄分阶段',
    desc: '0-2 启蒙 / 2-4 兴趣 / 4-6 系统 / 6-8 应用；K0-K2 或 L0-L6 是行业通用切片',
    source: '叽里呱啦 7 级 / 瓜瓜龙 K0-K2',
  },
  {
    icon: Award,
    title: '游戏化四要素',
    desc: '收集 / 养成 / 交互 / 探索；落地成闯关、星星、勋章、皮肤、连续打卡 streak',
    source: '洪恩识字 / Duolingo ABC',
  },
  {
    icon: BookOpen,
    title: 'IP 世界观',
    desc: '"剑桥小镇"30 秒动画把孩子拉进故事；用英雄主义代入感驱动闯关动机',
    source: '叫叫 / 瓜瓜龙 / 斑马',
  },
  {
    icon: Heart,
    title: '即时反馈 + 情感化',
    desc: '答对 = 烟花 / 掌声；答错 = "再试一次"，从不出现"错"字',
    source: '通用',
  },
  {
    icon: Clock,
    title: '短时高频',
    desc: '每节 10–15 分钟匹配幼儿注意力曲线；周节奏闭环(正-绘本-复习-趣味)',
    source: '瓜瓜龙 / Lingokids',
  },
  {
    icon: Users,
    title: '服务即内容',
    desc: '学习报告 + 微信群辅导老师 + 家长社群裂变；"教育是人之于内容的生意"',
    source: '中国独门',
  },
];

const SOFTWARE_CATS: SoftwareCat[] = [
  {
    type: '程序式互动 · 游戏化学习',
    apps: '小伴龙、宝宝巴士奇妙屋、叫叫',
    takeaway: '抄"任务驱动 + 奖励反馈"循环——把学习包装成闯关，找魔法字卡 / 找丢失的声音',
  },
  {
    type: '内容式音频陪伴',
    apps: '凯叔讲故事',
    takeaway: '8000+ 故事、按年龄智能推荐、6000 万用户、145 亿播放——抄分龄推荐 + 哄睡场景',
  },
  {
    type: '学科启蒙 · 识字 / 拼音 / 数学 / 英语',
    apps: '洪恩、斑马 AI 学、叽里呱啦',
    takeaway: '抄"分级体系 + 短时高频"——洪恩识字 1300 字、动画儿歌、科学分龄；几分钟一课',
  },
  {
    type: '大模型对话 · 新势力',
    apps: '豆包、智谱清言、Kimi',
    takeaway: '大人在用，小孩没人教——这就是机会点：用一个玩具把"和 AI 聊天"可视化、儿童化',
  },
];

interface Pain {
  icon: LucideIcon;
  title: string;
  desc: string;
  fix: string;
}

const PAIN_POINTS: Pain[] = [
  {
    icon: AlertTriangle,
    title: '儿童 ASR 识别率不够',
    desc: '孩子发音不清、表达不完整，通用大模型容易误判，指令体验差',
    fix: '专门训练儿童语音 ASR，或加白名单意图层兜底',
  },
  {
    icon: Clock,
    title: '兴趣只有几周',
    desc: '单一聊天玩腻很快，AI 玩具与生活类电子产品在"可持续使用性"上有本质差异',
    fix: '必须有任务 / IP 换装 / 节日内容包 / 主动召唤等多重钩子，持续供料',
  },
  {
    icon: Volume2,
    title: '输出太长、太慢',
    desc: '孩子注意力等不了；模型动辄一段几十秒，不如直接关掉',
    fix: '强制短回复 prompt + 流式播报 + 中断恢复',
  },
  {
    icon: AlertTriangle,
    title: '内容安全',
    desc: 'AI 大模型生成内容是否适合儿童，是头部品牌共同的红线议题',
    fix: '儿童专属过滤层 + 黑词库 + 家长可审计的对话日志',
  },
];

interface ParentDriver {
  icon: LucideIcon;
  tone: Tone;
  title: string;
  oneLiner: string;
  insight: string;
  evidence: string;
}

const PARENT_DRIVERS: ParentDriver[] = [
  {
    icon: Brain,
    tone: 'rose',
    title: 'FOMO 教育焦虑',
    oneLiner: '"不能让孩子输在 AI 时代"',
    insight: '70% 家长选玩具最看重教育价值；县域家长最怕的不是"学得慢"，而是"没人管"',
    evidence: '下沉的话术不该是"AI 赋能学习"，而是"会哄孩子的 AI 老师，大人忙的时候顶上"',
  },
  {
    icon: MonitorOff,
    tone: 'accent',
    title: '无屏幕情结',
    oneLiner: '"不能再让他刷手机了"',
    insight: '78% 家长把"避免屏幕依赖"列为首要购买动机；2025.1 销量环比 +600%',
    evidence: '85/90 后父母眼中，AI 玩具是"无屏幕教育神器"——县城父母对此尤其偏执',
  },
  {
    icon: Heart,
    tone: 'violet',
    title: '陪伴代偿',
    oneLiner: '"我没时间陪，机器替我陪"',
    insight: '60%+ 家长担忧孩子社交不足；下沉市场叠加留守儿童 / 父母外出务工，代偿需求更强',
    evidence: 'BubblePal 卖点不是"老师"而是"朋友"——卖的不是玩具，是赎罪券',
  },
  {
    icon: Crown,
    tone: 'amber',
    title: '面子身份信号',
    oneLiner: '"别人家娃有，我家也得有"',
    insight: '县城家长对"AI"两个字带光环——你不需解释多模态，只需让产品看起来像 AI',
    evidence: '"AI 智习室"在县城高客单的逻辑：营销下沉 ≠ 技术下沉',
  },
  {
    icon: HandCoins,
    tone: 'emerald',
    title: '价格 + 安全双锚',
    oneLiner: '"便宜但靠谱"',
    insight: '300 元以下区间销量最大；安全感来自大牌背书 + 售后 + 内容三重钩子',
    evidence: '99–199 元是贝灵 / babycare / 洪恩 / 米兔 / 乐乐鱼共同的胜区',
  },
  {
    icon: ShieldCheck,
    tone: 'neutral',
    title: '订阅强排斥',
    oneLiner: '"二次收费 = 被骗"',
    insight: '58.8% 家长吐槽"解锁需持续付费"；订阅制在下沉市场是死刑',
    evidence: 'BubblePal 卖爆下沉的关键："终身会员"四个字',
  },
];

const TWO_USER_ROWS: { dim: string; parent: string; child: string }[] = [
  { dim: '是谁', parent: '家长（主力 36–45 岁妈妈，其次 25–35 岁）', child: '3–8 岁孩子（主流 3–6 岁）' },
  { dim: '关心什么', parent: '教育价值、安全、面子、性价比', child: '好不好玩、好不好看、有没有回应' },
  { dim: '决定权', parent: '100% 决定买不买', child: '100% 决定用不用' },
  { dim: '心智时间线', parent: '决策时刻 + 后悔时刻', child: '第 1 周高潮 + 第 3 周抛弃' },
];

interface UsagePhase {
  range: string;
  label: string;
  desc: string;
  tone: Tone;
}

const USAGE_PHASES: UsagePhase[] = [
  { range: '第 1–7 天', label: '神奇期', desc: '"它会说话！它认识我！"高强度互动，每天玩几小时', tone: 'accent' },
  { range: '第 8–14 天', label: '试探期', desc: '"它会唱歌吗？它能干嘛？"开始试探边界', tone: 'emerald' },
  { range: '第 15–21 天', label: '幻灭期', desc: '"它怎么老说一样的话"——发现复读、听不懂', tone: 'amber' },
  { range: '第 22 天+', label: '抛弃期', desc: '扔进玩具堆；行业退货率 30–40%', tone: 'rose' },
];

interface AbandonReason {
  pct: string;
  reason: string;
}

const ABANDON_REASONS: AbandonReason[] = [
  { pct: '58.8%', reason: '解锁功能要持续付费（家长视角）' },
  { pct: '50.8%', reason: '机械复读、像复读机、丢失灵魂' },
  { pct: '49.2%', reason: '脑回路清奇、聊天对不上频道' },
  { pct: '44.7%', reason: '功能单一（只会读诗不会唱歌）' },
  { pct: '43.0%', reason: '安静时突然语出惊人' },
];

interface Stack {
  icon: LucideIcon;
  src: string;
  layer: string;
  title: string;
}

const STACK: Stack[] = [
  { icon: Package, src: 'BubblePal', layer: '形态', title: '挂件 → 改成毛绒一体机，下沉家长一眼看懂' },
  { icon: Volume2, src: '米兔', layer: '语言', title: '方言交互 — 2000 万家庭已经验证过的下沉刚需' },
  { icon: Cpu, src: '阿尔法蛋', layer: '声纹', title: '5 分钟录音克隆父母声音 — 留守儿童情感杀器' },
  { icon: Heart, src: 'FoloToy', layer: '留存', title: '玩具主动说"来陪陪我" — 双向召唤是反第三周抛弃的关键' },
  { icon: BookOpen, src: '牛听听', layer: '使用', title: '熏听 + 定时自动播放 — 家长零学习成本' },
  { icon: Smartphone, src: 'BubblePal + 凯叔 + 洪恩', layer: '软件', title: '家长成长洞察 + 分龄推荐 + 科学分级' },
];


const TOC_GROUPS: TocGroup[] = [
  {
    label: '概念基础',
    hint: '上篇 · 前置',
    items: [
      { id: 'foundation', num: '01', title: '概念定义 · 什么是启蒙教育' },
    ],
  },
  {
    label: '市场调研',
    hint: '上篇 · 调研',
    items: [
      { id: 'market', num: '02', title: '大盘数据' },
      { id: 'competitors', num: '03', title: '硬件 · 竞品 16 款' },
      { id: 'software', num: '04', title: '软件 · 竞品 12 款' },
      { id: 'methodology', num: '05', title: '软件 · 共性方法论' },
    ],
  },
  {
    label: '用户心智',
    hint: '上篇 · 调研',
    items: [
      { id: 'parent-mind', num: '06', title: '家长侧 · 6 个驱动力' },
      { id: 'child-mind', num: '07', title: '孩子侧 · 21 天曲线' },
      { id: 'personas', num: '08', title: '用户画像 · 三类家庭' },
    ],
  },
  {
    label: '战略框架',
    hint: '调研 → 落地',
    items: [
      { id: 'pain', num: '09', title: '必须解决的硬伤' },
      { id: 'stack', num: '10', title: '叠加 · 抄什么' },
      { id: 'moat', num: '11', title: '避战 · 做大厂做不了的' },
      { id: 'network', num: '12', title: '联网策略 · 居家为主' },
      { id: 'link', num: '13', title: '串联 · 商业闭环' },
    ],
  },
  {
    label: '产品落地',
    hint: '下篇 · 待补',
    items: [
      { id: 'form-factor', num: '14', title: '产品形态 / 硬件方案' },
      { id: 'content', num: '15', title: '内容体系 · IP + 方言' },
      { id: 'parent-app', num: '16', title: '软件 / 家长后台' },
      { id: 'business', num: '17', title: '商业模式 / 定价 SKU' },
      { id: 'marketing', num: '18', title: '营销话术 / 文案模板' },
      { id: 'roadmap', num: '19', title: '路线图与里程碑' },
      { id: 'team-risk', num: '20', title: '团队 · 风险 · 下一步' },
    ],
  },
];

interface PlaceholderSection {
  id: string;
  num: string;
  label: string;
  title: string;
  bullets: string[];
}

const PLACEHOLDERS: PlaceholderSection[] = [
  {
    id: 'form-factor',
    num: '14',
    label: '产品形态 / 硬件方案',
    title: 'Lula v1 长什么样',
    bullets: [
      '外观与材质：毛绒 + IP 形象一体机 / 形态 / 尺寸 / 颜色 / 安全认证',
      '硬件 BOM ≤ 25 元：MCU(乐鑫 ESP32)、麦克风阵列、扬声器、电池、WiFi 模组',
      '续航与功耗：典型场景下的使用时长与充电方式',
      '可扩展配件：可换洗外衣 / 颈带 / 充电底座(义乌代工，无电子模组)',
    ],
  },
  {
    id: 'content',
    num: '15',
    label: '内容体系 · IP + 方言 + 父母音',
    title: '不靠卡牌，靠语音指令路由',
    bullets: [
      '内容分类：英语启蒙 / 古诗词 / 故事 / 儿歌 / 父母声音故事',
      '调用方式：语音指令直达——"讲个奥特曼故事" / "教我拼音"，不靠任何实体识别',
      '分发：基础内容内置出厂；高级内容包通过 App 内购 → 一次买断终身可用',
      '分龄：0-3 / 3-6 / 6-7 三档独立内容包',
      'IP 联名：喜羊羊学拼音 / 熊出没哄饭 / 奥特曼讲故事 / 小猪佩奇儿歌',
      '更新节奏：月度内容包 + 节日特别版(春节 / 六一 / 中秋等)',
    ],
  },
  {
    id: 'parent-app',
    num: '16',
    label: '软件 / 家长后台',
    title: '家长 App 的边界',
    bullets: [
      '成长报告：今天孩子问了什么有趣的问题——温情正向，避免监控感',
      '软商品商城：IP 联名外衣 / 换装皮肤 / 内容包 / 高级方言包',
      '父母音录制 / 声音克隆引导',
      '远程留言 / 微信叫醒玩具',
      '使用时长管控 / 防沉迷',
      '县代理入口：本地微信群、附近用户活动、上门服务预约',
    ],
  },
  {
    id: 'business',
    num: '17',
    label: '商业模式 / 定价 SKU',
    title: '硬件几乎不赚钱，靠软商品和内容包持续变现',
    bullets: [
      'SKU 1 · 主机：¥39 / 49 / 69(IP 形态分级)，一次买断终身能聊',
      'SKU 2 · 实体软商品：IP 联名外衣 / 换装套件 ¥19.9–49.9(义乌代工，无电子)',
      'SKU 3 · App 内购内容包：高级方言包 / 节日内容 / 父母声音定制 ¥9.9–99',
      '渠道：拼多多 + 抖音直播 + 视频号 / 快手；县城母婴店 + 学校门口文具店；县代理大姐网络',
      '单位经济：主机净赚 ¥8–15/台，靠走量；持续收入靠软商品和内容包',
    ],
  },
  {
    id: 'roadmap',
    num: '19',
    label: '路线图与里程碑',
    title: '12 个月节奏',
    bullets: [
      'M0–M3：原型 + 儿童 ASR 基线 + 第一版方言模型(粤/川/闽南/潮汕中选 1–2)',
      'M4–M6：BOM 锁定 ≤ 25 元 + 模具开发 + 内测 100 户家庭',
      'M7–M9：小批量量产 + 抖音种子直播 + 1–2 个县代理试点',
      'M10–M12：正式开售 + 第一波 IP 联名外衣 + 县代理网络铺到 10 个县',
    ],
  },
  {
    id: 'team-risk',
    num: '20',
    label: '团队 · 风险 · 下一步',
    title: '我们 / 不确定 / 接下来要做',
    bullets: [
      '团队结构：硬件 / 算法 / 内容 / 运营 / BD',
      '关键风险：儿童 ASR 准确率 / 内容审核合规 / 第三周抛弃曲线',
      '下一步动作：列出未来 4 周必须做的事——打样 / 调研 / BD / 渠道试水',
      '资金需求：天使轮 vs 启动资金的判断',
    ],
  },
];

export default function LulaResearchPage() {
  return (
    <div className="bg-neutral-50 py-10 md:py-16">
      <InnoxTocSidebar groups={TOC_GROUPS} />
      <div className="max-w-6xl mx-auto px-6 space-y-6">
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
            下沉市场 + AI 启蒙 + FOMO 是这一代家长的真实情绪。我们的命题：在 ¥39–69 价位，
            把硬件 BOM 压到 25 元，靠老 IP + 方言 + 县代理运营打穿县城和乡镇。
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['¥39–69 价位', '无屏', '方言 + 父母音', 'IP 联名', '县代理运营', '家长成长报告'].map((k) => (
              <span
                key={k}
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-white/10 text-blue-100 border border-white/15"
              >
                {k}
              </span>
            ))}
          </div>
        </Card>

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

        {/* 大盘 */}
        <Card id="market" delay={0.05}>
          <SectionLabel>02 · 大盘数据</SectionLabel>
          <SectionTitle>
            246 亿 → 290 亿，真正要看的是
            <span style={{ color: ACCENT }}>线上增速、价格迁移和品类结构</span>
          </SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {MARKET_STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-neutral-200 bg-white p-4 hover:border-neutral-300 transition-colors"
              >
                <div className="flex items-baseline gap-1 mb-1">
                  <div className="text-2xl md:text-3xl font-semibold text-neutral-900">
                    {s.value}
                  </div>
                  {s.unit && (
                    <div className="text-xs font-medium text-neutral-500">{s.unit}</div>
                  )}
                </div>
                <div className="text-[12px] font-medium text-neutral-700 leading-snug mb-1">
                  {s.label}
                </div>
                {s.note && s.sourceUrl && (
                  <a
                    href={s.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-neutral-500 leading-snug hover:underline"
                  >
                    {s.note}
                  </a>
                )}
                {s.note && !s.sourceUrl && (
                  <div className="text-[11px] text-neutral-500 leading-snug">
                    {s.note}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 细分数据 */}
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.25em] mt-8 mb-3"
            style={{ color: ACCENT }}
          >
            细分口径 · 哪些数据更能帮助判断
          </div>
          <div className="grid md:grid-cols-2 gap-3 mb-8">
            {MARKET_SEGMENTS.map((s) => {
              const t = TONE[s.tone];
              return (
                <div
                  key={s.dimension}
                  className="rounded-2xl border border-neutral-200 p-5 bg-white"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="text-[11px] font-bold tracking-wider text-neutral-400 mb-1">
                        {s.dimension}
                      </div>
                      <div className="font-semibold text-neutral-900 leading-snug">
                        {s.metric}
                      </div>
                    </div>
                    <a
                      href={s.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap"
                      style={{ backgroundColor: t.bg, color: t.color }}
                    >
                      {s.source}
                    </a>
                  </div>
                  <div className="text-[12px] text-neutral-600 leading-relaxed">
                    {s.note}
                  </div>
                </div>
              );
            })}
          </div>
          {/* 价格地形图 */}
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.25em] mt-8 mb-3"
            style={{ color: ACCENT }}
          >
            价格段地形图 · 谁在哪个段位
          </div>
          <div className="grid md:grid-cols-3 gap-3 mb-8">
            {PRICE_BANDS.map((b) => {
              const isGap = b.status === '真空段';
              return (
                <div
                  key={b.range}
                  className={`rounded-2xl p-5 ${
                    isGap ? 'border-2' : 'border border-neutral-200 bg-white'
                  }`}
                  style={
                    isGap
                      ? { backgroundColor: ACCENT_LIGHT, borderColor: ACCENT }
                      : undefined
                  }
                >
                  <div
                    className="flex items-center justify-between mb-2"
                  >
                    <div
                      className="text-base font-bold"
                      style={{ color: isGap ? ACCENT : '#171717' }}
                    >
                      {b.range}
                    </div>
                    <span
                      className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold"
                      style={
                        isGap
                          ? { backgroundColor: ACCENT, color: '#fff' }
                          : { backgroundColor: '#F3F4F6', color: '#525252' }
                      }
                    >
                      {b.status}
                    </span>
                  </div>
                  <div
                    className="text-sm font-semibold mb-1.5 leading-snug"
                    style={{ color: isGap ? ACCENT : '#171717' }}
                  >
                    {b.who}
                  </div>
                  <div
                    className="text-[12px] leading-relaxed"
                    style={{ color: isGap ? ACCENT : '#525252' }}
                  >
                    {b.note}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 机遇 vs 风险 */}
          <div className="grid md:grid-cols-2 gap-3 mb-6">
            <div
              className="rounded-2xl p-5"
              style={{ backgroundColor: '#ECFDF5' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4" style={{ color: '#047857' }} />
                <div
                  className="text-[11px] font-bold uppercase tracking-[0.25em]"
                  style={{ color: '#047857' }}
                >
                  6 个机遇
                </div>
              </div>
              <div className="space-y-3.5">
                {OPPORTUNITIES.map((o, i) => (
                  <div key={o.title}>
                    <div
                      className="text-sm font-semibold mb-1 leading-snug"
                      style={{ color: '#065F46' }}
                    >
                      <span className="opacity-50 mr-1.5 tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {o.title}
                    </div>
                    <div
                      className="text-[12px] leading-relaxed"
                      style={{ color: '#065F46', opacity: 0.85 }}
                    >
                      {o.why}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl p-5"
              style={{ backgroundColor: '#FEF2F2' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-4 h-4" style={{ color: '#BE123C' }} />
                <div
                  className="text-[11px] font-bold uppercase tracking-[0.25em]"
                  style={{ color: '#BE123C' }}
                >
                  6 个风险
                </div>
              </div>
              <div className="space-y-3.5">
                {RISKS.map((r, i) => (
                  <div key={r.title}>
                    <div
                      className="text-sm font-semibold mb-1 leading-snug"
                      style={{ color: '#7F1D1D' }}
                    >
                      <span className="opacity-50 mr-1.5 tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {r.title}
                    </div>
                    <div
                      className="text-[12px] leading-relaxed"
                      style={{ color: '#7F1D1D', opacity: 0.85 }}
                    >
                      {r.why}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 一句话判断 */}
          <div
            className="rounded-2xl p-5 md:p-6"
            style={{ backgroundColor: '#1F2937' }}
          >
            <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-blue-300 mb-2">
              一句话判断
            </div>
            <div className="text-sm md:text-base text-neutral-100 leading-relaxed">
              这是<b className="text-blue-300">窗口期机会</b>，不是
              <b className="text-rose-300">长期赛道</b>——
              12–18 个月内用<b className="text-blue-300">「¥100–150 + 老 IP + 方言 + 一次买断」</b>
              组合拳，在某个区域(华南 / 华东三四线)打出家长口碑。
              否则就是给传统玩具厂当试错炮灰。
            </div>
          </div>
          <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
            数据来源：
            <a
              href={MIIT_TOY_SAFETY_NEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:underline"
            >
              工信部《玩具安全》系列强制性国家标准修订发布会
            </a>
            、
            <a
              href={MAGIC_MIRROR_AI_TOY_REPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:underline"
            >
              魔镜洞察《2025 年 AI 玩具市场机会洞察》
            </a>
            、
            <a
              href={LEADLEO_AI_TOY_REPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:underline"
            >
              头豹研究院《2025 年中国 AI 玩具行业概览》
            </a>
            。主市场规模采用工信部发布会公开口径，细分渠道、品类、价格和长期空间采用机构报告口径。
          </p>
        </Card>

        {/* 竞品表 */}
        <Card id="competitors" delay={0.1}>
          <SectionLabel>03 · 硬件端 · {COMPETITORS.length} 款竞品</SectionLabel>
          <div className="overflow-x-auto -mx-6 md:-mx-10 px-6 md:px-10 mt-3">
            <table className="w-full text-sm border-separate border-spacing-y-2 min-w-[920px]">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-wider text-neutral-500">
                  <th className="font-semibold pb-2 pr-3 w-24">图片</th>
                  <th className="font-semibold pb-2 pr-3">产品</th>
                  <th className="font-semibold pb-2 pr-3 w-44">参考价格</th>
                  <th className="font-semibold pb-2 pr-3 w-52">公开销量 / 热度</th>
                  <th className="font-semibold pb-2">关键设计</th>
                </tr>
              </thead>
              <tbody>
                {COMPETITORS.map((c) => (
                  <tr
                    key={c.name}
                    className="bg-neutral-50/60 hover:bg-neutral-50 transition-colors align-top"
                  >
                    <td className="rounded-l-xl py-3 pl-3 pr-3">
                      <div className="w-20 h-20 rounded-xl bg-white border border-neutral-200 overflow-hidden flex items-center justify-center">
                        <LulaZoomImage
                          src={c.img}
                          alt={c.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="py-3 pr-3">
                      <div className="flex flex-col gap-1.5">
                        <div className="font-semibold text-neutral-900 leading-snug">
                          {c.link ? (
                            <a
                              href={c.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                              style={{ color: ACCENT }}
                            >
                              {c.name}
                            </a>
                          ) : (
                            c.name
                          )}
                        </div>
                        {c.brand && (
                          <div className="text-xs text-neutral-500">{c.brand}</div>
                        )}
                        <div className="flex flex-wrap gap-1 mt-0.5">
                          <Chip tone={TIER_TONE[c.tier]}>{c.tier}</Chip>
                          {c.tags?.map((t) => (
                            <Chip tone="neutral" key={t}>
                              {t}
                            </Chip>
                          ))}
                        </div>
                      </div>
                    </td>
                    <td className="py-3 pr-3 text-neutral-700">{c.price}</td>
                    <td className="py-3 pr-3">
                      <div className="text-neutral-800 font-medium leading-snug">
                        {c.sales}
                      </div>
                      {c.salesNote && (
                        <div className="text-[12px] text-neutral-500 mt-0.5 leading-snug">
                          {c.salesNote}
                        </div>
                      )}
                    </td>
                    <td className="rounded-r-xl py-3 pr-3 text-neutral-700 leading-relaxed">
                      {c.design}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-xs text-neutral-500 leading-relaxed">
            数据来源：跃然创新 / FoloToy / 贝陪科技 / 汤姆猫等公司披露、媒体报道、电商平台口径、
            用户截图与小红书搜索结果，非审计销量；新增热品按 2026-05-09 截图/搜索结果标注为热度口径。
            部分产品图为防盗链失败或缺少清晰素材时使用占位图。
          </p>
        </Card>

        {/* 软件端 · 竞品 */}
        <Card id="software" delay={0.15}>
          <SectionLabel>04 · 软件端 · {SOFTWARE_APPS.length} 款代表产品</SectionLabel>
          <p className="text-sm text-neutral-600 leading-relaxed mb-5 mt-3">
            赛道按形态分三类：纯 App 互动课(200–1000 元、无老师服务)、视频 AI 课(2000–3500 元、老师社群督促)、
            软硬一体玩具/早教机(无屏陪伴)。国内由互联网巨头主导——猿辅导(斑马)、字节(瓜瓜龙)、
            好未来(小猴)、洪恩、叽里呱啦、叫叫、凯叔；海外以 Khan Kids、Duolingo ABC、ABCmouse、Khanmigo、Osmo 为代表。
          </p>

          {/* 12 款竞品表 */}
          <div className="overflow-x-auto -mx-6 md:-mx-10 px-6 md:px-10 mb-8">
            <table className="w-full text-sm border-separate border-spacing-y-2 min-w-[1040px]">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-wider text-neutral-500">
                  <th className="font-semibold pb-2 pr-3 w-64">产品</th>
                  <th className="font-semibold pb-2 pr-3 w-28">界面</th>
                  <th className="font-semibold pb-2 pr-3 w-20">年龄</th>
                  <th className="font-semibold pb-2 pr-3 w-36">价格</th>
                  <th className="font-semibold pb-2 pr-3">关键设计</th>
                  <th className="font-semibold pb-2 w-72" style={{ color: ACCENT }}>
                    抄什么
                  </th>
                </tr>
              </thead>
              <tbody>
                {SOFTWARE_APPS.map((a) => (
                  <tr
                    key={a.name}
                    className="bg-neutral-50/60 hover:bg-neutral-50 transition-colors align-top"
                  >
                    <td className="rounded-l-xl py-3 pl-3 pr-3">
                      <div className="flex items-start gap-3">
                        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                          <LulaZoomImage
                            src={a.img}
                            alt={`${a.name} 产品图`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex flex-col gap-1.5">
                          <div className="font-semibold text-neutral-900 leading-snug">
                            {a.name}
                          </div>
                          {a.brand && (
                            <div className="text-xs text-neutral-500">{a.brand}</div>
                          )}
                          <div className="flex flex-wrap gap-1 mt-0.5">
                            <Chip tone={a.region === 'CN' ? 'accent' : 'violet'}>
                              {a.region === 'CN' ? '中国' : '海外'}
                            </Chip>
                            {a.tags?.map((t) => (
                              <Chip tone="neutral" key={t}>
                                {t}
                              </Chip>
                            ))}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 pr-3">
                      <div
                        className={`overflow-hidden border border-neutral-200 bg-white shadow-sm ${
                          a.screenShape === 'wide'
                            ? 'h-16 w-24 rounded-xl'
                            : 'h-[92px] w-[54px] rounded-[14px]'
                        }`}
                      >
                        <LulaZoomImage
                          src={a.screen}
                          alt={`${a.name} App 界面`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="py-3 pr-3 text-neutral-700">{a.age}</td>
                    <td className="py-3 pr-3 text-neutral-700">{a.price}</td>
                    <td className="py-3 pr-3 text-neutral-700 leading-relaxed">
                      {a.highlight}
                    </td>
                    <td
                      className="rounded-r-xl py-3 pr-3 leading-relaxed font-medium"
                      style={{ color: ACCENT }}
                    >
                      → {a.takeaway}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="-mt-3 mb-8 text-xs text-neutral-500 leading-relaxed">
            软件图标与界面图主要取自 Apple App Store 公开素材；Khanmigo 取自官网公开界面图；瓜瓜龙使用公开下载页截图兜底。
          </p>

          {/* 4 类抄法 · 产品逻辑维度 */}
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ color: ACCENT }}
          >
            四类抄法 · 产品逻辑维度
          </div>
          <div className="grid md:grid-cols-2 gap-3 mb-6">
            {SOFTWARE_CATS.map((s, i) => (
              <div
                key={s.type}
                className="rounded-2xl border border-neutral-200 p-5 bg-gradient-to-br from-white to-neutral-50"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold"
                    style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                  >
                    {i + 1}
                  </div>
                  <div className="font-semibold text-neutral-900">{s.type}</div>
                </div>
                <div className="text-[12px] text-neutral-500 mb-2">代表产品：{s.apps}</div>
                <div className="text-sm text-neutral-700 leading-relaxed">{s.takeaway}</div>
              </div>
            ))}
          </div>

          {/* 无屏 callout */}
          <div
            className="rounded-2xl p-5 text-sm leading-relaxed"
            style={{ backgroundColor: '#FEF9C3', color: '#713F12' }}
          >
            <div className="font-semibold mb-1 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> 重要观察
            </div>
            FoloToy 调研：父母希望孩子以健康方式接受电子产品，最基本就是<b>没有屏幕</b>。
            儿童端不要单独 App，全部内嵌玩具——"无屏"就是最大的差异化卖点。
          </div>
        </Card>

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

        {/* 用户心智 · 家长侧 */}
        <Card id="parent-mind" delay={0.22}>
          <SectionLabel>06 · 用户心智 · 决策者(家长)</SectionLabel>
          <SectionTitle>
            <Users className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
            一个产品两套心智，家长脑子里有 6 个驱动力
          </SectionTitle>

          {/* 双用户对照 */}
          <div className="rounded-2xl border border-neutral-200 overflow-hidden mb-6">
            <div className="grid grid-cols-3 bg-neutral-100 text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
              <div className="px-4 py-2.5">维度</div>
              <div className="px-4 py-2.5">决策者(掏钱的)</div>
              <div className="px-4 py-2.5">使用者(玩的)</div>
            </div>
            {TWO_USER_ROWS.map((row, i) => (
              <div
                key={row.dim}
                className={`grid grid-cols-3 text-sm ${i % 2 ? 'bg-neutral-50/60' : 'bg-white'}`}
              >
                <div className="px-4 py-3 font-medium text-neutral-700">{row.dim}</div>
                <div className="px-4 py-3 text-neutral-700 leading-relaxed">{row.parent}</div>
                <div className="px-4 py-3 text-neutral-700 leading-relaxed">{row.child}</div>
              </div>
            ))}
          </div>

          <p className="text-sm text-neutral-600 leading-relaxed mb-5">
            京东数据：36–45 岁人群贡献 51% 成交额，88.3% 的 AI 玩具是送给孩子的，3–6 岁占 41.3%。
            把这个主力人群从一二线挪到县城——下沉市场的画像是 30–40 岁妈妈、孩子 3–8 岁、刷抖音、用拼多多。
          </p>

          {/* 6 驱动力 */}
          <div className="grid md:grid-cols-2 gap-3">
            {PARENT_DRIVERS.map((d) => {
              const Icon = d.icon;
              const t = TONE[d.tone];
              return (
                <div
                  key={d.title}
                  className="rounded-2xl border border-neutral-200 p-5 bg-white"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: t.bg, color: t.color }}
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-neutral-900 leading-snug">
                        {d.title}
                      </div>
                      <div className="text-[12px] text-neutral-500 mt-0.5 italic">
                        {d.oneLiner}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-neutral-700 leading-relaxed mb-2">
                    {d.insight}
                  </div>
                  <div className="text-[12px] text-neutral-500 leading-relaxed border-l-2 border-neutral-200 pl-3">
                    {d.evidence}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* 用户心智 · 孩子侧 */}
        <Card id="child-mind" delay={0.25}>
          <SectionLabel>07 · 用户心智 · 使用者(孩子)</SectionLabel>
          <SectionTitle>
            <Calendar className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
            21 天使用曲线：30–40% 在第三周就被抛弃
          </SectionTitle>

          {/* 4 阶段 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {USAGE_PHASES.map((p, i) => {
              const t = TONE[p.tone];
              return (
                <div
                  key={p.range}
                  className="rounded-2xl p-4 border border-neutral-200 bg-white relative overflow-hidden"
                >
                  <div
                    className="text-[11px] font-bold tracking-wider mb-1"
                    style={{ color: t.color }}
                  >
                    阶段 {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="text-base font-semibold text-neutral-900 mb-1">
                    {p.label}
                  </div>
                  <div className="text-[12px] font-medium text-neutral-500 mb-2">
                    {p.range}
                  </div>
                  <div className="text-sm text-neutral-700 leading-relaxed">{p.desc}</div>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ backgroundColor: t.color }}
                  />
                </div>
              );
            })}
          </div>

          {/* TOP5 抛弃原因 */}
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50/60 p-5 mb-5">
            <div className="flex items-center gap-2 mb-4">
              <ThumbsDown className="w-4 h-4" style={{ color: '#BE123C' }} />
              <div className="font-semibold text-neutral-900">家长吐槽 TOP5(抛弃直接原因)</div>
            </div>
            <div className="space-y-2.5">
              {ABANDON_REASONS.map((r) => (
                <div key={r.reason} className="flex items-center gap-3 text-sm">
                  <div className="w-14 text-right font-bold" style={{ color: '#BE123C' }}>
                    {r.pct}
                  </div>
                  <div className="flex-1 h-1.5 rounded-full bg-neutral-200 overflow-hidden max-w-[160px]">
                    <div
                      className="h-full rounded-full"
                      style={{ width: r.pct, backgroundColor: '#FB7185' }}
                    />
                  </div>
                  <div className="flex-[2] text-neutral-700 leading-snug">{r.reason}</div>
                </div>
              ))}
            </div>
          </div>

          {/* FoloToy 留存秘诀 */}
          <div
            className="rounded-2xl p-5 text-sm leading-relaxed"
            style={{ backgroundColor: '#ECFDF5', color: '#065F46' }}
          >
            <div className="font-semibold mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              FoloToy 把次月留存做到大几十的三个秘诀(行业稀缺好数据)
            </div>
            <div className="space-y-1.5">
              <div>① 团队管理层每人家里都有小朋友——做玩具设计时真懂受众。</div>
              <div>② 玩具会主动说"来陪陪我""和我聊天"——双向召唤是反喜新厌旧的关键。</div>
              <div>③ 聊天记录不向家长开放——避免孩子产生"被监控"的隔阂。</div>
            </div>
            <div className="mt-3 pt-3 border-t border-emerald-200/60 text-[12px]">
              单次对话 17–20 分钟、次月留存大几十、复购 20%+；定位上"陪伴 ∶ 教育 = 7 ∶ 3"——
              这一条和 BubblePal 的"成长报告"是反着的，我们要选边。
            </div>
          </div>
        </Card>

        {/* 用户画像 · 三类家庭 + 焦虑爆发期窗口 */}
        <Card id="personas" delay={0.28}>
          <SectionLabel>08 · 用户画像 · 三类家庭 + 焦虑爆发期</SectionLabel>
          <SectionTitle>
            <Users className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
            不是"产后激素妈妈"，是"焦虑爆发期妈妈"
          </SectionTitle>

          {/* 概念辨析 · 焦虑爆发期 vs 产后激素 */}
          <div
            className="rounded-2xl p-5 mb-7"
            style={{ backgroundColor: '#FEF2F2', color: '#7F1D1D' }}
          >
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4" />
              <div className="text-[11px] font-bold uppercase tracking-[0.25em]">
                概念辨析 · 别把这两类妈妈搞混了
              </div>
            </div>
            <div className="text-sm leading-relaxed mb-3">
              "产后激素期妈妈"(0–2 岁)<b>不是我们的目标用户</b>——宝宝不会说话、玩具核心交互对他们没意义；
              她们的消费焦点是奶粉/纸尿裤这类"生存必需品"，AI 玩具不在清单里。
              <b>真正的高转化窗口是"焦虑爆发期妈妈"</b>——当孩子站在两个心理拐点上，妈妈的消费决策最冲动、最愿意为情感和教育付费。
            </div>
            <div className="grid md:grid-cols-2 gap-3 mt-4">
              {ANXIETY_WINDOWS.map((w) => (
                <div
                  key={w.label}
                  className="rounded-xl p-4 bg-white/60"
                >
                  <div className="flex items-baseline gap-2 mb-1.5">
                    <span className="text-[11px] font-bold tracking-wider opacity-80">
                      {w.label}
                    </span>
                    <span className="text-base font-bold">{w.age}</span>
                  </div>
                  <div className="text-[12px] leading-relaxed">{w.trigger}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 三层人群圈层 */}
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ color: ACCENT }}
          >
            目标盘子 · 三层嵌套人群(总盘 ~1 亿家庭)
          </div>
          <div className="grid md:grid-cols-3 gap-3 mb-7">
            {USER_CIRCLES.map((c) => {
              const t = TONE[c.tone];
              return (
                <div
                  key={c.letter}
                  className="rounded-2xl border border-neutral-200 p-5 bg-white relative overflow-hidden"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ backgroundColor: t.color }}
                  />
                  <div className="flex items-baseline gap-2 mb-2">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ backgroundColor: t.bg, color: t.color }}
                    >
                      {c.letter}
                    </div>
                    <div className="font-semibold text-neutral-900">{c.label}</div>
                  </div>
                  <div className="text-base font-bold mb-2" style={{ color: t.color }}>
                    {c.scale}
                  </div>
                  <div className="text-[12px] text-neutral-600 leading-relaxed mb-3">
                    {c.desc}
                  </div>
                  <div className="text-[12px] font-medium leading-relaxed mb-2" style={{ color: t.color }}>
                    {c.strategy}
                  </div>
                  <span
                    className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold"
                    style={{ backgroundColor: t.bg, color: t.color }}
                  >
                    {c.budget}
                  </span>
                </div>
              );
            })}
          </div>

          {/* 三大画像深度卡 */}
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ color: ACCENT }}
          >
            三大核心画像 · 用产品语言落地
          </div>
          <div className="space-y-3 mb-7">
            {PERSONAS.map((p) => {
              const t = TONE[p.tone];
              return (
                <div
                  key={p.name}
                  className="rounded-2xl border-2 p-5"
                  style={{ borderColor: t.color, backgroundColor: t.bg }}
                >
                  <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                    <div>
                      <div className="text-xl font-bold mb-1" style={{ color: t.color }}>
                        {p.name}
                      </div>
                      <div className="text-sm font-medium text-neutral-700">{p.role}</div>
                    </div>
                    <span
                      className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold text-white"
                      style={{ backgroundColor: t.color }}
                    >
                      {p.weight}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-x-6 gap-y-2 text-[12px] mb-3" style={{ color: t.color }}>
                    {[
                      ['年龄/学历', p.age],
                      ['坐标', p.city],
                      ['孩子', p.child],
                      ['收入', p.income],
                      ['常用 App', p.apps],
                    ].map(([k, v]) => (
                      <div key={k} className="flex gap-2">
                        <span className="opacity-60 shrink-0 w-16">{k}</span>
                        <span className="flex-1 leading-relaxed font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                  <div
                    className="text-sm leading-relaxed mb-2 italic pl-3 border-l-2"
                    style={{ color: t.color, borderColor: t.color }}
                  >
                    {p.quote}
                  </div>
                  <div className="text-[12px] mb-2" style={{ color: t.color }}>
                    <b>痛点：</b>
                    {p.pain}
                  </div>
                  <div className="text-[12px] mb-3" style={{ color: t.color }}>
                    <b>决策路径：</b>
                    {p.decision}
                  </div>
                  <div
                    className="text-[12px] font-semibold leading-relaxed pt-3 border-t"
                    style={{ color: t.color, borderColor: t.color, opacity: 0.95 }}
                  >
                    → {p.oneLiner}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 6 大核心使用场景 */}
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ color: ACCENT }}
          >
            从画像抽取的 6 大核心使用场景
          </div>
          <div className="overflow-x-auto -mx-6 md:-mx-10 px-6 md:px-10 mb-7">
            <table className="w-full text-sm border-separate border-spacing-y-1.5 min-w-[800px]">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-wider text-neutral-500">
                  <th className="font-semibold pb-2 pr-3 w-12">#</th>
                  <th className="font-semibold pb-2 pr-3 w-44">场景</th>
                  <th className="font-semibold pb-2 pr-3 w-32">时间</th>
                  <th className="font-semibold pb-2 pr-3 w-44">适配画像</th>
                  <th className="font-semibold pb-2">说明</th>
                </tr>
              </thead>
              <tbody>
                {USE_SCENES.map((s) => (
                  <tr key={s.num} className="bg-neutral-50/60 align-top">
                    <td className="rounded-l-xl py-3 pl-3 pr-3 font-bold tabular-nums" style={{ color: ACCENT }}>
                      {s.num}
                    </td>
                    <td className="py-3 pr-3 font-semibold text-neutral-900">{s.name}</td>
                    <td className="py-3 pr-3 text-neutral-700">{s.time}</td>
                    <td className="py-3 pr-3 text-neutral-700">{s.who}</td>
                    <td className="rounded-r-xl py-3 pr-3 text-neutral-700 leading-relaxed">
                      {s.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 反画像 */}
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ color: '#BE123C' }}
          >
            反画像 · 谁不是我们的用户(资源不投)
          </div>
          <div className="grid md:grid-cols-2 gap-3 mb-7">
            {ANTI_PERSONAS.map((a) => (
              <div
                key={a.who}
                className="rounded-2xl border border-neutral-200 p-4"
                style={{ backgroundColor: '#FEF2F2' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[14px] font-bold" style={{ color: '#BE123C' }}>
                    ✕
                  </span>
                  <div className="text-sm font-semibold" style={{ color: '#7F1D1D' }}>
                    {a.who}
                  </div>
                </div>
                <div className="text-[12px] leading-relaxed mb-2" style={{ color: '#7F1D1D' }}>
                  {a.why}
                </div>
                <div className="text-[11px]" style={{ color: '#7F1D1D', opacity: 0.7 }}>
                  → 他们应该买：{a.shouldBuy}
                </div>
              </div>
            ))}
          </div>

          {/* 资源分配条 */}
          <div
            className="rounded-2xl p-5"
            style={{ backgroundColor: '#1F2937' }}
          >
            <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-blue-300 mb-3">
              ★ 资源分配 · 60 / 30 / 10 / 0
            </div>
            <div className="flex h-10 rounded-lg overflow-hidden mb-4">
              <div className="bg-blue-500 flex items-center justify-center text-white text-xs font-bold" style={{ width: '60%' }}>
                王芳 · 主战场 60%
              </div>
              <div className="bg-violet-500 flex items-center justify-center text-white text-xs font-bold" style={{ width: '30%' }}>
                留守 30%
              </div>
              <div className="bg-amber-500 flex items-center justify-center text-white text-xs font-bold" style={{ width: '10%' }}>
                陈晓 10%
              </div>
            </div>
            <div className="text-sm text-neutral-300 leading-relaxed">
              不要被"市场看起来很大"诱惑去做四不像产品——<b className="text-white">反画像投 0</b>。
              MVP 必须把 60% 投到主战场画像(王芳)，30% 投到情感杀器(留守家庭)，剩 10% 给 V2 扩张目标(陈晓)预留接口。
            </div>
          </div>
        </Card>

        {/* 痛点 */}
        <Card id="pain" delay={0.3}>
          <SectionLabel>09 · 必须解决的硬伤</SectionLabel>
          <SectionTitle>从家长吐槽翻译出的四个工程命题</SectionTitle>
          <div className="grid md:grid-cols-2 gap-3">
            {PAIN_POINTS.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-2xl border border-neutral-200 p-5 bg-white"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#FFE4E6', color: '#BE123C' }}
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900 mb-0.5">{p.title}</div>
                      <div className="text-sm text-neutral-600 leading-relaxed">{p.desc}</div>
                    </div>
                  </div>
                  <div
                    className="text-[12px] font-medium leading-relaxed pl-12"
                    style={{ color: ACCENT }}
                  >
                    → 我们的解法：{p.fix}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* 战略：叠加 */}
        <Card id="stack" delay={0.35}>
          <SectionLabel>10 · 叠加</SectionLabel>
          <SectionTitle>
            <Layers className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
            把市面上最好的全抄一遍，6 件事
          </SectionTitle>
          <div className="grid md:grid-cols-2 gap-3">
            {STACK.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.layer}
                  className="rounded-2xl border border-neutral-200 p-5 flex items-start gap-4"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                        {String(i + 1).padStart(2, '0')} · {s.layer}
                      </div>
                      <Chip tone="emerald">抄 {s.src}</Chip>
                    </div>
                    <div className="text-sm text-neutral-800 leading-relaxed">{s.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* 避战 · 做大厂"不屑"的事 */}
        <Card id="moat" delay={0.38}>
          <SectionLabel>11 · 避战 · 做大厂"不屑"的事</SectionLabel>
          <SectionTitle>
            <ShieldCheck className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
            把"做 low"当成壁垒——大厂的弱点就是我们的护城河
          </SectionTitle>
          <p className="text-sm text-neutral-600 leading-relaxed mb-6">
            大厂(字节、京东、华为、奥飞)<b className="text-neutral-800">"不能"做某些事</b>，
            本质只有三个原因：数据看不见 / 品牌不能贴 / 渠道下不去。我们要在这三件事上
            <b className="text-neutral-800">反向用力</b>——目标小、品牌土、渠道脏。
          </p>

          {/* 大厂三不 */}
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ color: ACCENT }}
          >
            大厂三不 · 为什么大厂做不了下沉
          </div>
          <div className="grid md:grid-cols-3 gap-3 mb-8">
            {THREE_REASONS.map((r, i) => (
              <div
                key={r.title}
                className="rounded-2xl border border-neutral-200 p-5 bg-white"
              >
                <div
                  className="text-[11px] font-bold tracking-wider mb-1.5 text-neutral-400"
                >
                  原因 {String(i + 1).padStart(2, '0')}
                </div>
                <div className="text-base font-semibold text-neutral-900 mb-2">
                  {r.title}
                </div>
                <div className="text-[12px] text-neutral-600 leading-relaxed">
                  {r.desc}
                </div>
              </div>
            ))}
          </div>

          {/* 5 条具体路径 */}
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ color: ACCENT }}
          >
            5 条具体打法 · 已按"儿童启蒙"过滤
          </div>
          <div className="space-y-3 mb-7">
            {LOW_PATHS.map((p) => (
              <div
                key={p.num}
                className="rounded-2xl border border-neutral-200 p-5 bg-white"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm tabular-nums"
                    style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                  >
                    {p.num}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-neutral-900 mb-1.5 leading-snug">
                      {p.title}
                    </div>
                    <div className="text-sm text-neutral-700 leading-relaxed mb-3">
                      {p.desc}
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.examples.map((ex) => (
                        <span
                          key={ex}
                          className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium bg-neutral-100 text-neutral-700"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                    <div
                      className="text-[12px] leading-relaxed border-l-2 pl-3"
                      style={{ borderColor: '#E5E7EB', color: '#525252' }}
                    >
                      <b className="text-neutral-700">大厂为什么做不了：</b>
                      {p.whyMoat}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ★ 真正的护城河 · 重人工本地化运营 */}
          <div
            className="rounded-2xl p-6 mb-7"
            style={{ backgroundColor: '#1F2937' }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-yellow-300 text-base">★</span>
              <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-yellow-300">
                真正的护城河 · 重人工本地化运营
              </div>
            </div>
            <div className="text-base md:text-lg font-semibold text-white mb-3 leading-snug">
              县级代理大姐 + 本地微信群 + 节日线下聚会
            </div>
            <div className="text-sm text-neutral-300 leading-relaxed mb-4">
              大厂的运营是 SaaS 化、自动化、KPI 标准化的；下沉市场的运营是反过来的——
              <b className="text-white">重人工、本地化、不可标准化</b>。这种模式独立创业者扛得住，大厂扛不住。
              这是上面 5 条里最重的一条，也是真正能形成长期壁垒的一条。
            </div>
            <ul className="space-y-2 text-sm text-neutral-200">
              {[
                '每个县找一个"代理大姐"，建本地家长微信群',
                '用户买了不会用——大姐上门或视频教学',
                '老人家里 WiFi 出问题——大姐远程帮忙处理',
                '节日组织本地用户线下亲子聚会、方言儿歌赛',
              ].map((line) => (
                <li key={line} className="flex gap-2.5 leading-relaxed">
                  <span className="text-yellow-300 shrink-0">·</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t border-white/10 text-[12px] text-neutral-400 leading-relaxed">
              <b className="text-neutral-200">大厂做不了：</b>
              京东县级代理体系是为 3C 家电铺的；铺一张"会上门哄孩子哄老人的大姐网络"，
              对 KAM 一年要管 1 亿盘子的人力结构来说，账算不过来。
            </div>
          </div>

        </Card>

        {/* 联网策略 · 居家为主 / 离线兜底 */}
        <Card id="network" delay={0.4}>
          <SectionLabel>12 · 联网策略 · 居家为主 / 离线兜底</SectionLabel>
          <SectionTitle>
            <Wifi className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
            不要为弱网场景过度设计——99% 场景在家 WiFi
          </SectionTitle>

          {/* 核心论点 callout */}
          <div
            className="rounded-2xl p-5 mb-6"
            style={{ backgroundColor: ACCENT_LIGHT }}
          >
            <div
              className="text-[11px] font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: ACCENT }}
            >
              核心论点 · 三句话讲完
            </div>
            <ul className="space-y-2 text-sm leading-relaxed" style={{ color: ACCENT }}>
              <li className="flex gap-2.5">
                <span className="shrink-0 font-bold">①</span>
                <span>
                  <b>主流方案就是居家环境</b>——BubblePal、FoloToy、CocoMate 都是 WiFi-only。
                  AI 玩具的真实使用场景(睡前、做饭时、奶奶带娃)100% 在家庭 WiFi 覆盖范围内。
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="shrink-0 font-bold">②</span>
                <span>
                  <b>下沉市场 WiFi 已经是标配</b>——农村宽带渗透率 70%+、县城 90%+。
                  "家里没 WiFi"已经不是真实场景。
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="shrink-0 font-bold">③</span>
                <span>
                  <b>"全场景联网"反而是负担</b>——一旦玩具能在任何地方联网，
                  就会被带去学校 / 上学路上，引发老师反感、同学打扰、家长投诉，变成负面口碑源头。
                </span>
              </li>
            </ul>
          </div>

          {/* 一个被否决的诱惑路径 · 儿童手表热点 */}
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ color: ACCENT }}
          >
            一个看似可行、实际堵死的诱惑 · 儿童手表热点
          </div>
          <p className="text-sm text-neutral-600 leading-relaxed mb-4">
            "用小天才/华为儿童手表的 SIM 流量当 AI 玩具的网"——推理链对了一半，但漏了几个关键现实:
          </p>
          <div className="grid md:grid-cols-2 gap-3 mb-7">
            {NET_DEAD_ENDS.map((d) => (
              <div
                key={d.num}
                className="rounded-2xl border border-neutral-200 p-5 bg-neutral-50/40"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-[11px] font-bold tracking-wider"
                    style={{ color: '#BE123C' }}
                  >
                    × {d.num}
                  </span>
                  <div className="text-sm font-semibold text-neutral-900 leading-snug">
                    {d.title}
                  </div>
                </div>
                <div className="text-[12px] text-neutral-600 leading-relaxed">
                  {d.desc}
                </div>
              </div>
            ))}
          </div>

          {/* 我们的选择 · 双层架构 */}
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ color: ACCENT }}
          >
            我们的选择 · WiFi + 离线兜底(双层架构)
          </div>
          <div className="rounded-2xl border-2 border-neutral-200 overflow-hidden mb-7">
            {NET_ARCHITECTURE.map((layer, i) => {
              const isCloud = layer.scope === 'cloud';
              return (
                <div
                  key={layer.scope}
                  className={`p-5 ${i === 0 ? 'border-b-2 border-dashed border-neutral-300' : ''}`}
                  style={{
                    backgroundColor: isCloud ? '#F0F9FF' : ACCENT_LIGHT,
                  }}
                >
                  <div className="flex items-baseline gap-3 mb-3">
                    <div
                      className="text-base font-bold"
                      style={{ color: isCloud ? '#075985' : ACCENT }}
                    >
                      {layer.label}
                    </div>
                    <div
                      className="text-[11px] font-medium"
                      style={{ color: isCloud ? '#0369A1' : ACCENT, opacity: 0.7 }}
                    >
                      — {layer.hint}
                    </div>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
                    {layer.features.map((f) => (
                      <li
                        key={f}
                        className="flex gap-2 text-sm leading-relaxed"
                        style={{ color: isCloud ? '#075985' : ACCENT }}
                      >
                        <span className="opacity-60">·</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* 阶段化路线 */}
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ color: ACCENT }}
          >
            阶段化路线 · MVP / V2 / 永远不做
          </div>
          <div className="grid md:grid-cols-3 gap-3 mb-7">
            {NET_PHASES.map((p) => {
              const isMvp = p.tone === 'mvp';
              const isNever = p.tone === 'never';
              return (
                <div
                  key={p.stage}
                  className={`rounded-2xl p-5 ${
                    isMvp ? 'border-2' : 'border border-neutral-200 bg-white'
                  } ${isNever ? 'opacity-70' : ''}`}
                  style={
                    isMvp
                      ? { backgroundColor: ACCENT_LIGHT, borderColor: ACCENT }
                      : undefined
                  }
                >
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className="text-[11px] font-bold tracking-wider"
                      style={{ color: isMvp ? ACCENT : isNever ? '#BE123C' : '#525252' }}
                    >
                      {p.stage}
                    </div>
                    {isMvp && (
                      <span
                        className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold text-white"
                        style={{ backgroundColor: ACCENT }}
                      >
                        我们做这个
                      </span>
                    )}
                    {isNever && (
                      <span
                        className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold"
                        style={{ backgroundColor: '#FFE4E6', color: '#BE123C' }}
                      >
                        ✕ 不做
                      </span>
                    )}
                  </div>
                  <div
                    className="text-base font-semibold mb-1.5 leading-snug"
                    style={{ color: isMvp ? ACCENT : '#171717' }}
                  >
                    {p.network}
                  </div>
                  <div className="text-[12px] mb-2 text-neutral-500">{p.price}</div>
                  <div
                    className="text-[12px] leading-relaxed"
                    style={{ color: isMvp ? ACCENT : '#525252' }}
                  >
                    {p.pitch}
                  </div>
                </div>
              );
            })}
          </div>

          {/* PRD 硬指标 · 收尾 */}
          <div
            className="rounded-2xl p-5"
            style={{ backgroundColor: '#1F2937' }}
          >
            <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-blue-300 mb-2">
              PRD 硬指标 · 写进 MVP 必达项
            </div>
            <div className="text-base md:text-lg font-semibold text-white mb-2 leading-snug">
              离线可用率 ≥ 70%
            </div>
            <div className="text-sm text-neutral-300 leading-relaxed">
              这一条比任何花哨的功能都重要——它是产品能不能在县城用户家里活下来的命门。
              "断网时玩具仍能讲故事 / 唱儿歌 / 刷卡触发"是产品交付的硬约束，不是 nice-to-have。
            </div>
          </div>
        </Card>

        {/* 战略：串联 */}
        <Card id="link" delay={0.44} dark className="text-white">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] mb-3 text-blue-300">
            <LinkIcon className="w-3.5 h-3.5" />
            13 · 串联
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            硬件保本 + <span className="text-blue-300">软商品</span> + <span className="text-blue-300">县代理运营</span> = 商业闭环
          </h2>
          <p className="text-neutral-300 leading-relaxed mb-6 max-w-3xl">
            <b className="text-white">刻意放弃 NFC 卡牌路线</b>——主机带卡槽 + 一卡一内容会大幅增加生产、物流、售后复杂度，
            和我们 ¥39–69 的价格段不兼容。改用更轻的两条腿：App 内购的<b className="text-white">软商品</b>(IP 外衣 / 换装皮肤 / 内容包)
            + 真正护城河的<b className="text-white">县代理大姐网络</b>。
          </p>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              {
                role: '玩具(主机)',
                desc: '一次买断，终身能聊',
                detail: '¥39–69、BOM ≤ 25 元、单台净赚 ¥8–15；含完整内容库；无屏；方言 + 父母音；WiFi + 离线兜底',
              },
              {
                role: '软商品',
                desc: 'App 内购 / 实体配件',
                detail: 'IP 联名外衣(义乌代工，无电子)、换装皮肤、节日特别版、高级方言包、父母声音定制；¥9.9–99',
              },
              {
                role: '县代理',
                desc: '本地大姐网络',
                detail: '微信群分销 + 上门售后 + 节日亲子聚会 + 本地口碑——大厂不可复制的护城河',
              },
            ].map((x) => (
              <div
                key={x.role}
                className="rounded-2xl bg-white/5 border border-white/10 p-5"
              >
                <div className="text-blue-300 text-xs font-semibold uppercase tracking-wider mb-2">
                  {x.role}
                </div>
                <div className="text-base font-semibold text-white mb-2">{x.desc}</div>
                <div className="text-sm text-neutral-300 leading-relaxed">{x.detail}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-blue-500/10 border border-blue-400/20 p-5">
            <div className="text-blue-300 text-[11px] font-bold uppercase tracking-wider mb-2">
              组合公式
            </div>
            <div className="text-sm md:text-base text-blue-100 leading-relaxed">
              米兔的下沉价位 + BubblePal 的 AI 体验 + 阿尔法蛋的声音克隆 +
              牛听听的熏听 + 洪恩的分级内容 + FoloToy 的主动召唤 + <b className="text-white">我们的县代理大姐网络</b> = Lula 第一版
            </div>
          </div>
        </Card>

        {/* 下篇分隔 */}
        <div className="reveal py-8 flex items-center gap-4" style={{ '--reveal-delay': '0.42s' } as React.CSSProperties}>
          <div className="flex-1 h-px bg-neutral-300" />
          <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-500">
            下篇 · 产品落地 · 框架待补
          </div>
          <div className="flex-1 h-px bg-neutral-300" />
        </div>

        {/* 落地章节 · 占位 — 商业模式之前的 4 块 */}
        {PLACEHOLDERS.slice(0, 4).map((p, i) => (
          <Card key={p.id} id={p.id} delay={0.44 + i * 0.03}>
            <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
              <div
                className="text-[11px] font-semibold uppercase tracking-[0.25em]"
                style={{ color: ACCENT }}
              >
                {p.num} · {p.label}
              </div>
              <span
                className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold"
                style={{ backgroundColor: '#FEF3C7', color: '#B45309' }}
              >
                WIP · 待补
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-400 mb-5 leading-tight">
              {p.title}
            </h2>
            <div className="rounded-2xl border border-dashed border-neutral-300 p-5 bg-neutral-50/60">
              <div className="text-[11px] font-semibold text-neutral-500 mb-3 tracking-[0.2em] uppercase">
                框架 · 待填充
              </div>
              <ul className="space-y-2">
                {p.bullets.map((b, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2.5 text-sm text-neutral-600 leading-relaxed"
                  >
                    <span className="text-neutral-400 shrink-0">·</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}

        {/* 营销话术 · 文案模板(真内容,非占位) */}
        <Card id="marketing" delay={0.56}>
          <SectionLabel>18 · 营销话术 / 文案模板</SectionLabel>
          <SectionTitle>
            <Smartphone className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
            产品做什么 = 营销说什么——内里是同一件事
          </SectionTitle>
          <p className="text-sm text-neutral-600 leading-relaxed mb-6">
            把家长心智(06)+ 三大画像(08)翻译成下沉家长能听懂的话。下面五个场景的模板都可以直接拿去改，
            产品名先用<b className="text-neutral-900">"小布"</b>占位。
          </p>

          {/* 核心信息架构 */}
          <div
            className="rounded-2xl p-5 mb-7"
            style={{ backgroundColor: ACCENT_LIGHT }}
          >
            <div
              className="text-[11px] font-bold uppercase tracking-[0.25em] mb-3"
              style={{ color: ACCENT }}
            >
              核心信息架构 · 所有内容的根
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-[11px] font-semibold mb-1" style={{ color: ACCENT, opacity: 0.7 }}>
                  一句话定位
                </div>
                <div className="text-base font-bold leading-snug" style={{ color: ACCENT }}>
                  {CORE_MESSAGE.oneLine}
                </div>
              </div>
              <div>
                <div className="text-[11px] font-semibold mb-1.5" style={{ color: ACCENT, opacity: 0.7 }}>
                  三大主卖点
                </div>
                <ul className="space-y-1">
                  {CORE_MESSAGE.pillars.map((p, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm leading-relaxed"
                      style={{ color: ACCENT }}
                    >
                      <span className="font-bold shrink-0">{`①②③`[i]}</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-[11px] font-semibold mb-1" style={{ color: ACCENT, opacity: 0.7 }}>
                  情感钩子
                </div>
                <div className="text-sm leading-relaxed italic" style={{ color: ACCENT }}>
                  {CORE_MESSAGE.hook}
                </div>
              </div>
              <div>
                <div className="text-[11px] font-semibold mb-1" style={{ color: ACCENT, opacity: 0.7 }}>
                  信任背书
                </div>
                <div className="text-sm leading-relaxed" style={{ color: ACCENT }}>
                  {CORE_MESSAGE.trust}
                </div>
              </div>
            </div>
          </div>

          {/* 禁用词 */}
          <div
            className="rounded-2xl p-4 mb-7 flex items-start gap-3"
            style={{ backgroundColor: '#FEF2F2' }}
          >
            <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#BE123C' }} />
            <div className="flex-1">
              <div
                className="text-[11px] font-bold uppercase tracking-[0.2em] mb-2"
                style={{ color: '#BE123C' }}
              >
                禁用词 · 全部不要出现
              </div>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {CORE_MESSAGE.banned.map((w) => (
                  <span
                    key={w}
                    className="inline-flex items-center rounded px-2 py-0.5 text-[12px] font-medium line-through"
                    style={{ backgroundColor: 'white', color: '#7F1D1D' }}
                  >
                    {w}
                  </span>
                ))}
              </div>
              <div className="text-[12px] leading-relaxed" style={{ color: '#7F1D1D' }}>
                下沉用户听不懂这些词，反而觉得不靠谱——一律换成"会说话""能聊天""学得快"的人话。
              </div>
            </div>
          </div>

          {/* 5 个场景模板 */}
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ color: ACCENT }}
          >
            5 个场景模板 · 直接抄改即可
          </div>
          <div className="space-y-3">
            {MARKETING_SCENES.map((s) => (
              <div
                key={s.num}
                className="rounded-2xl border border-neutral-200 p-5 bg-white"
              >
                <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold tabular-nums shrink-0"
                    style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                  >
                    {s.num}
                  </div>
                  <div className="font-semibold text-neutral-900 leading-snug">
                    {s.channel}
                  </div>
                </div>
                <div className="text-[12px] text-neutral-500 leading-relaxed mb-4 ml-11">
                  {s.desc}
                </div>
                <div className="space-y-2 ml-11">
                  {s.templates.map((t, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl p-3 bg-neutral-50/60 border border-neutral-100"
                    >
                      <div className="text-[11px] font-semibold mb-1" style={{ color: ACCENT }}>
                        {t.label}
                      </div>
                      <div className="text-[13px] text-neutral-700 leading-relaxed">
                        {t.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* 落地章节 · 占位 — 营销之后的剩余 2 块(路线图 + 团队风险) */}
        {PLACEHOLDERS.slice(4).map((p, i) => (
          <Card key={p.id} id={p.id} delay={0.6 + i * 0.03}>
            <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
              <div
                className="text-[11px] font-semibold uppercase tracking-[0.25em]"
                style={{ color: ACCENT }}
              >
                {p.num} · {p.label}
              </div>
              <span
                className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold"
                style={{ backgroundColor: '#FEF3C7', color: '#B45309' }}
              >
                WIP · 待补
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-400 mb-5 leading-tight">
              {p.title}
            </h2>
            <div className="rounded-2xl border border-dashed border-neutral-300 p-5 bg-neutral-50/60">
              <div className="text-[11px] font-semibold text-neutral-500 mb-3 tracking-[0.2em] uppercase">
                框架 · 待填充
              </div>
              <ul className="space-y-2">
                {p.bullets.map((b, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2.5 text-sm text-neutral-600 leading-relaxed"
                  >
                    <span className="text-neutral-400 shrink-0">·</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>

      <style>{`
        @keyframes lula-reveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .reveal {
          opacity: 0;
          animation: lula-reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: var(--reveal-delay, 0s);
        }
        section[id] {
          scroll-margin-top: 96px;
        }
      `}</style>
    </div>
  );
}
