/* eslint-disable react/no-unescaped-entities */
import {
  BadgeCheck,
  BellRing,
  Clock,
  Heart,
  Languages,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  Users,
  WifiOff,
  type LucideIcon,
} from 'lucide-react';
import { ACCENT, ACCENT_LIGHT, Card, SectionLabel, SectionTitle } from '../../_shared';

interface FeatureCard {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface NamingOption {
  name: string;
  english: string;
  role: string;
  note: string;
  image: string;
}

const FEATURES: FeatureCard[] = [
  {
    icon: MessageCircle,
    title: '一句话语音对话',
    desc: '唤醒后边说边出声,从孩子说完到第一声回应 ≤ 1.2 s,可中途打断不啰嗦。',
  },
  {
    icon: Users,
    title: '分龄人格 · 三档',
    desc: '3-4 / 5-6 / 7-8 岁三套独立 prompt,语速、句长、教学方式按月龄切换。',
  },
  {
    icon: Languages,
    title: '方言陪伴',
    desc: '粤 / 川 / 闽南 / 潮汕 一方言一 SKU,让奶奶辈和孩子都能听得懂。',
  },
  {
    icon: Heart,
    title: '父母声音克隆',
    desc: '5 分钟录音生成专属音色,留守儿童也能每天听到爸妈讲故事。',
  },
  {
    icon: Sparkles,
    title: 'IP 内容包',
    desc: '喜羊羊学拼音 / 熊出没哄饭 / 奥特曼讲故事 / 小猪佩奇儿歌,App 内购一次买断。',
  },
  {
    icon: BellRing,
    title: '主动召唤(不打扰)',
    desc: '安静 5 分钟 + 检测到孩子在场 → 玩具开口说"想听你讲今天最好玩的事"。',
  },
  {
    icon: WifiOff,
    title: '离线兜底',
    desc: '内置 30 个故事 / 儿歌 / 哄睡音频,断网仍是个能讲故事的故事机。',
  },
  {
    icon: Smartphone,
    title: '家长后台',
    desc: '今日聊了什么、内容包内购、远程留言、防沉迷管控——温情非监控感。',
  },
  {
    icon: ShieldCheck,
    title: '四层儿童安全',
    desc: '输入 / 模型 / 输出 / 审计四层串联,儿童白名单 + 长度分龄限制。',
  },
  {
    icon: Clock,
    title: '熏听 + 定时自动播放',
    desc: '家长零学习成本——按时段自动播放儿歌 / 故事 / 古诗,起床、午睡、哄睡都不用每次手动点(抄牛听听)。',
  },
  {
    icon: TrendingUp,
    title: '成长洞察 + 分龄推荐',
    desc: '家长 App 给本周对话洞察 + 0-3 / 3-6 / 6-7 三档科学分级内容推荐(抄 BubblePal + 凯叔 + 洪恩)。',
  },
];

const NAMING_OPTIONS: NamingOption[] = [
  {
    name: '噜啦',
    english: 'Lula',
    role: '当前主推 / 项目代号',
    note: '发音轻、儿童感强,和当前页面资产一致;适合先作为对外品牌候选。',
    image: '/lula/naming/lula.png',
  },
  {
    name: '露娜',
    english: 'Luna',
    role: '偏礼物 / 女性化',
    note: '更柔和、更像陪伴型角色;但 Luna 通用度高,后续必须重点查商标和同名产品。',
    image: '/lula/naming/luna-purple.png',
  },
  {
    name: '卢纳',
    english: 'Luna',
    role: '备选音译',
    note: '比“露娜”更中性,但亲和力弱一点;适合保留,不建议第一优先级。',
    image: '/lula/naming/luna-green.png',
  },
  {
    name: '哇布',
    english: 'Wabu / Waboo',
    role: '企业英文名联动',
    note: '识别度最高,更像原创品牌;如果公司英文体系能对齐,可作为强差异化候选。',
    image: '/lula/naming/wabu.png',
  },
  {
    name: '丢丢',
    english: 'Diudiu',
    role: '角色名 / 玩偶名',
    note: '很亲近、好叫,但“丢”有丢失/丢掉的负面联想;更适合做单个角色而不是公司级品牌。',
    image: '/lula/naming/diudiu.png',
  },
];

export const ProductOverviewSection = () => (
  <Card id="product-overview" delay={0.44}>
    <SectionLabel>12 · 产品功能总览</SectionLabel>
    <SectionTitle>
      Lula 大致功能 · 一图看完
    </SectionTitle>
    <p className="text-sm text-neutral-600 leading-relaxed mb-6">
      下面 11 张卡片是 Lula 对家长的全部承诺——后续 13–17 节按"形态 / 对话 / 安全 / 内容 / 家长端"
      五个维度<b className="text-neutral-900">逐一展开产品侧细节</b>;18–22 节再讲技术怎么落;23–26 节讲商业 / 推广 / 路线。
    </p>

    <div className="rounded-2xl border border-blue-100 p-5 mb-6" style={{ backgroundColor: ACCENT_LIGHT }}>
      <div className="flex items-center gap-2 mb-3">
        <BadgeCheck className="w-4 h-4" style={{ color: ACCENT }} />
        <div className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>
          产品命名备选
        </div>
      </div>
      <div className="grid md:grid-cols-5 gap-3">
        {NAMING_OPTIONS.map((n) => (
          <div
            key={n.name}
            className="relative overflow-hidden rounded-xl bg-white border border-blue-100 p-4"
          >
            <img
              src={n.image}
              alt=""
              aria-hidden
              className="pointer-events-none select-none absolute -right-6 -bottom-4 w-32 opacity-25"
            />
            <div className="relative">
              <div className="text-lg font-bold text-neutral-900 leading-tight">{n.name}</div>
              <div className="text-[12px] font-semibold mb-2" style={{ color: ACCENT }}>
                {n.english}
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                {n.role}
              </div>
              <div className="text-[12px] text-neutral-600 leading-relaxed">{n.note}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-[12px] text-neutral-600 leading-relaxed mt-3">
        决策顺序:先做商标/域名/同名电商检索,再做 20 组家长口播和 20 组儿童唤醒词误识别测试。
        “小布”暂时只作为演示唤醒词占位,不等于最终品牌名。
      </div>
    </div>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
      {FEATURES.map((f) => {
        const Icon = f.icon;
        return (
          <div
            key={f.title}
            className="rounded-2xl border border-neutral-200 bg-white p-5"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
              style={{ backgroundColor: ACCENT_LIGHT }}
            >
              <Icon className="w-5 h-5" style={{ color: ACCENT }} />
            </div>
            <div className="text-base font-bold text-neutral-900 mb-1.5 leading-snug">
              {f.title}
            </div>
            <div className="text-[12px] text-neutral-600 leading-relaxed">
              {f.desc}
            </div>
          </div>
        );
      })}
    </div>
  </Card>
);
