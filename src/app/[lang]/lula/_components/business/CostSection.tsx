import {
  Calculator,
  Cloud,
  Cpu,
  ExternalLink,
  Factory,
  Hammer,
  Package,
  RotateCcw,
  Route,
  Server,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import { ACCENT, ACCENT_LIGHT, Card, SectionLabel, SectionTitle } from '../../_shared';
import { FlowChart, type FlowPhase } from '../shared/flow-chart';

const summaryCards = [
  {
    label: '硬件 BOM · 试产',
    value: '¥54.74 / 台',
    hint: '硬件工程师按实际选型估算；电子料 + PCB 加工 + SMT，不含毛绒 / 包装 / 认证',
    Icon: Factory,
  },
  {
    label: '硬件 BOM · 量产',
    value: '¥47.33 / 台',
    hint: '量起来后去掉 CH343P (USB-Serial) 与 AHT20 (温湿度)；其余继承相同 BOM',
    Icon: Package,
  },
  {
    label: '云端变量成本',
    value: '¥0.04–0.06 / 分钟',
    hint: '豆包 ASR + 豆包 TTS + Doubao-Seed 文本；TTS 是主成本',
    Icon: Cloud,
  },
  {
    label: '订阅价格战底线',
    value: '¥6–9 / 月',
    hint: '无限畅聊不成立；¥39/年必须带公平使用上限',
    Icon: Calculator,
  },
];

interface BomRow {
  module: string;
  ref: string;
  model: string;
  qty: string;
  unit: string;
  trial: number;
  mass: number;
  trialOnly?: boolean;
}

const hardwareCosts: BomRow[] = [
  { module: '主控', ref: 'U4', model: 'ESP32-S3R8 / QFN-56', qty: '1', unit: '13.77', trial: 13.77, mass: 13.77 },
  { module: 'Flash', ref: 'U6', model: 'W25Q128JVPIQ / 128Mbit', qty: '1', unit: '3.11', trial: 3.11, mass: 3.11 },
  { module: 'USB 转串口', ref: 'U3', model: 'CH343P', qty: '1', unit: '4.94', trial: 4.94, mass: 0, trialOnly: true },
  { module: '音频 Codec', ref: 'U7', model: 'ES8311', qty: '1', unit: '1.75', trial: 1.75, mass: 1.75 },
  { module: '音频功放', ref: 'U8', model: 'NS4150B', qty: '1', unit: '0.48', trial: 0.48, mass: 0.48 },
  { module: '温湿度传感器', ref: 'U5', model: 'AHT20', qty: '1', unit: '2.47', trial: 2.47, mass: 0, trialOnly: true },
  { module: '3.3V Buck', ref: 'U1', model: 'TLV62569DBVR', qty: '1', unit: '0.50', trial: 0.50, mass: 0.50 },
  { module: 'ESP32 LDO', ref: 'U2', model: 'ME6230C33M5G', qty: '1', unit: '0.37', trial: 0.37, mass: 0.37 },
  { module: 'LED 升压驱动', ref: 'U9', model: 'SY7200AABC', qty: '1', unit: '0.53', trial: 0.53, mass: 0.53 },
  { module: '麦克风', ref: 'MIC1', model: 'AP2718AT', qty: '1', unit: '0.49', trial: 0.49, mass: 0.49 },
  { module: 'PMOS', ref: 'Q3, Q4', model: 'AO3401A', qty: '2', unit: '0.21', trial: 0.42, mass: 0.42 },
  { module: 'NPN 三极管', ref: 'Q1, Q2', model: 'S8050', qty: '2', unit: '0.04', trial: 0.08, mass: 0.08 },
  { module: '肖特基二极管', ref: 'D2', model: 'DSS34', qty: '1', unit: '0.21', trial: 0.21, mass: 0.21 },
  { module: '二极管 / 保护器件', ref: 'D1', model: '—', qty: '1', unit: '0.20', trial: 0.20, mass: 0.20 },
  { module: '晶振', ref: 'X1', model: '40MHz', qty: '1', unit: '0.50', trial: 0.50, mass: 0.50 },
  { module: '按键', ref: 'KEY1, KEY2', model: '轻触按键', qty: '2', unit: '0.08', trial: 0.16, mass: 0.16 },
  { module: 'FPC 座', ref: 'FPC1, FPC2', model: 'FPC 连接器', qty: '2', unit: '0.35', trial: 0.70, mass: 0.70 },
  { module: '连接器', ref: 'CN1, CN2', model: '线座 / 端子', qty: '2', unit: '0.30', trial: 0.60, mass: 0.60 },
  { module: '天线 / 匹配', ref: 'ANT1, L2, L3, C10–C12', model: '射频前端 1 组', qty: '1 组', unit: '0.80', trial: 0.80, mass: 0.80 },
  { module: '电感', ref: 'L1, L8', model: '2.2µH / 22µH', qty: '4', unit: '0.35', trial: 1.40, mass: 1.40 },
  { module: '磁珠 / 小电感', ref: 'L4–L7', model: '音频电源滤波', qty: '10', unit: '0.05', trial: 0.50, mass: 0.50 },
  { module: '电阻', ref: 'R1～R25 部分位号', model: '约 23 颗', qty: '~23', unit: '~0.005', trial: 0.12, mass: 0.12 },
  { module: '电容', ref: 'C1～C46 部分位号', model: '约 34 颗', qty: '~34', unit: '~0.03', trial: 1.02, mass: 1.02 },
  { module: '灯板', ref: '—', model: '—', qty: '1', unit: '—', trial: 0, mass: 0 },
  { module: '扬声器', ref: '—', model: '3525BOX-4Ω 3W-2P 1.25', qty: '1', unit: '2.62', trial: 2.62, mass: 2.62 },
  { module: '电池', ref: '—', model: '103665 / 1800mAh', qty: '1', unit: '8.00', trial: 8.00, mass: 8.00 },
  { module: 'PCB 加工', ref: '—', model: '—', qty: '1', unit: '5.00', trial: 5, mass: 5 },
  { module: 'SMT 贴片', ref: '—', model: '—', qty: '1', unit: '4.00', trial: 4, mass: 4 },
];

const HARDWARE_TRIAL_TOTAL = 54.74;
const HARDWARE_MASS_TOTAL = 47.33;

interface FulfillmentRow {
  category: string;
  range: string;
  low: number;
  high: number;
  basis: string;
  emphasis?: boolean;
}

const fulfillmentCosts: FulfillmentRow[] = [
  {
    category: '毛绒外壳',
    range: '¥6–12',
    low: 6,
    high: 12,
    basis:
      '25cm 一体毛绒,1k+ 起订约 ¥10–12,10k+ 量起来到 ¥6–8。中国大陆产业链下这一段相对刚性,大小差异不大;刺绣 / 可换洗外衣 / 复杂配件会推到上沿。',
  },
  {
    category: '电子仓 / 内构',
    range: '¥2–5',
    low: 2,
    high: 5,
    basis:
      '优先用公模电子盒 + 布套开孔,量产摊销后 ¥2–3 / 台;若做防拆胶囊或固定支架小注塑,+¥1–2 / 台。',
  },
  {
    category: '包装 / 吊牌 / 说明书',
    range: '¥3–6',
    low: 3,
    high: 6,
    basis:
      '彩盒 + 防伪 + 说明书 + 安全 / 年龄贴标 + 吊牌。下沉渠道不宜过度礼盒化,礼盒级会推到上沿。',
  },
  {
    category: '组装 / 老化 / 跌落抽检 / 良率损耗',
    range: '¥3–6',
    low: 3,
    high: 6,
    basis:
      '按 ~3% 良率折算 + 整机老化 + 跌落抽检治具摊销。电子玩具 + 毛绒一体结构良率敏感,口径保守一点。',
  },
  {
    category: '物流 · 干线 + 末端 + 偏远补贴',
    range: '¥4–7',
    low: 4,
    high: 7,
    basis:
      '500–800g 含彩盒重量,普快直发 ¥4–5 / 单;偏远地区或全国包邮承诺再 +¥1–2 / 单。',
  },
  {
    category: '退货 + 售后 + 准备金 · 按 25% 退货率折算',
    range: '¥14–22',
    low: 14,
    high: 22,
    basis:
      '抖音 / 拼多多儿童玩具综合退货率行业普遍 20–28%(其中"仅退款" 5–10%)。单台分摊:来回邮费 ¥8–12 + 检测翻新人工 ¥3–5 + 不可二次销售损耗按整机成本 10% 摊。下沉渠道这一项不能省。',
    emphasis: true,
  },
];

const FULFILLMENT_LOW = fulfillmentCosts.reduce((s, r) => s + r.low, 0);
const FULFILLMENT_HIGH = fulfillmentCosts.reduce((s, r) => s + r.high, 0);
const UNIT_MASS_LOW = HARDWARE_MASS_TOTAL + FULFILLMENT_LOW;
const UNIT_MASS_HIGH = HARDWARE_MASS_TOTAL + FULFILLMENT_HIGH;
const UNIT_TRIAL_LOW = HARDWARE_TRIAL_TOTAL + FULFILLMENT_LOW;
const UNIT_TRIAL_HIGH = HARDWARE_TRIAL_TOTAL + FULFILLMENT_HIGH;

const cloudCosts = [
  {
    layer: 'ASR',
    unit: '豆包流式语音识别模型2.0：后付费 ¥1 / 小时',
    cost: '¥0.03–0.07 / 10 分钟互动',
    note: '按 VAD 后儿童有效说话 2–4 分钟计',
  },
  {
    layer: 'LLM',
    unit: 'Doubao-Seed-1.6 0–32K 档：输入 ¥0.8 / 百万 tokens，输出 ¥8 / 百万 tokens',
    cost: '约 ¥0.01–0.03 / 10 分钟互动',
    note: '短对话里不是主成本；上下文摘要和 cache 可继续压',
  },
  {
    layer: 'TTS',
    unit: '豆包语音合成模型2.0：后付费 ¥3 / 万字符，资源包可降到 ¥2.1–2.8 / 万字符',
    cost: '¥0.24–0.48 / 10 分钟互动',
    note: '真正烧钱的是合成出来给孩子听的字数',
  },
  {
    layer: '业务云',
    unit: '设备长连接、日志、内容审核、对象存储、短信 / 微信通知',
    cost: '¥0.02–0.08 / 10 分钟互动',
    note: '上线后按设备维度打点，不能只看模型账单',
  },
];

interface ServerCostRow {
  category: string;
  spec: string;
  mvp: string;
  scale: string;
  mvpLow: number;
  mvpHigh: number;
  scaleLow: number;
  scaleHigh: number;
  basis: string;
}

const serverCosts: ServerCostRow[] = [
  {
    category: '应用服务器 · API / 设备长连接',
    spec: '4 核 8G ECS × 2–4 (MVP) → × 8–16 (50k 量产);中国大陆单 region',
    mvp: '¥600–1.2k',
    scale: '¥3k–6k',
    mvpLow: 600,
    mvpHigh: 1200,
    scaleLow: 3000,
    scaleHigh: 6000,
    basis: '设备 MQTT / WebSocket 长连接、家长 App API、内容下发;无需 GPU,也不做多 region 灾备。',
  },
  {
    category: '关系数据库 · RDS MySQL',
    spec: '4 核 8G + 100GB SSD (MVP) → 8 核 32G + 1TB SSD (量产),主备双机',
    mvp: '¥800–1.5k',
    scale: '¥3k–6k',
    mvpLow: 800,
    mvpHigh: 1500,
    scaleLow: 3000,
    scaleHigh: 6000,
    basis: '存储是大头:用户账户 / 订阅 / 设备 / 聊天文本(30 天滚动 + 摘要长期保留)。儿童原始音频不入库,只留文本摘要。',
  },
  {
    category: '缓存 · Redis',
    spec: '2GB 单节点 (MVP) → 8–16GB 集群 (量产)',
    mvp: '¥200–400',
    scale: '¥800–2k',
    mvpLow: 200,
    mvpHigh: 400,
    scaleLow: 800,
    scaleHigh: 2000,
    basis: '会话状态、语义缓存、热内容包、TTS 文本去重 hash;直接降低豆包账单。',
  },
  {
    category: '对象存储 + CDN',
    spec: 'OSS 500GB (MVP) → 5TB (量产);CDN 按流量',
    mvp: '¥300–600',
    scale: '¥2k–4k',
    mvpLow: 300,
    mvpHigh: 600,
    scaleLow: 2000,
    scaleHigh: 4000,
    basis: 'TTS 音频缓存、父母音克隆样本、IP 内容包、设备日志冷归档;CDN 把内容包分发到全国设备。',
  },
  {
    category: '负载均衡 / 日志 / 监控 / 安全',
    spec: 'SLB + 日志服务 + 云监控 + WAF',
    mvp: '¥300–800',
    scale: '¥1.5k–3.5k',
    mvpLow: 300,
    mvpHigh: 800,
    scaleLow: 1500,
    scaleHigh: 3500,
    basis: '单 region SLB 即可;日志做 30 天热 + 半年冷;WAF 防爬虫和儿童端注入。',
  },
  {
    category: '内容审核 / 短信通知',
    spec: '阿里 / 火山内容审核 API + 短信网关',
    mvp: '¥200–500',
    scale: '¥1k–3k',
    mvpLow: 200,
    mvpHigh: 500,
    scaleLow: 1000,
    scaleHigh: 3000,
    basis: '儿童输出审核每条 ¥0.001–0.003;家长端登录 / 异常告警短信。这块半固定半按量,量产规模下按月度基线锁。',
  },
];

const SERVER_MVP_LOW = serverCosts.reduce((s, r) => s + r.mvpLow, 0);
const SERVER_MVP_HIGH = serverCosts.reduce((s, r) => s + r.mvpHigh, 0);
const SERVER_SCALE_LOW = serverCosts.reduce((s, r) => s + r.scaleLow, 0);
const SERVER_SCALE_HIGH = serverCosts.reduce((s, r) => s + r.scaleHigh, 0);

const fmtMoney = (n: number) =>
  n >= 10000 ? `¥${(n / 10000).toFixed(1)}w` : n >= 1000 ? `¥${(n / 1000).toFixed(1)}k` : `¥${n}`;

const subscriptionFloors = [
  {
    plan: '硬件内含首年',
    floor: '预留 ¥30–45 / 台',
    rule: '硬件售价里必须先扣掉首年云成本；¥149 起售价能打，但不能把首年做成无限畅聊。',
  },
  {
    plan: '¥39 / 年',
    floor: '只能做轻量续费',
    rule: '可给 600–800 分钟 / 年公平使用额度，超出降级为离线故事或提示升级。',
  },
  {
    plan: '¥9.9 / 月',
    floor: '月付价格战下限',
    rule: '适合公开营销；按 300–500 分钟 / 月设计，留出支付通道、退款和客服损耗。',
  },
  {
    plan: '¥19.9 / 月',
    floor: '频繁用户安全档',
    rule: '给 1000 分钟 / 月 + 优先音色 / 父母音，避免少数重度用户吃掉全年毛利。',
  },
];

const nreItems = [
  {
    title: '毛绒打版 / 样衣',
    cost: '¥2k–15k',
    detail: '不需要传统硬件那种高额外观开模；主要是纸样、刺绣程序、布料打样和 2–3 轮样品修改。',
  },
  {
    title: 'PCBA EVT / DVT',
    cost: '¥20k–60k',
    detail: '10–100 套电子板、治具、音频腔体试错、功耗和射频调试。',
  },
  {
    title: '小塑胶件 / 电子仓',
    cost: '¥0–50k',
    detail: '用现成电子盒可接近 0；若自研防拆胶囊、充电底座或固定支架，才需要小注塑模。',
  },
  {
    title: '认证 / 合规',
    cost: '¥50k–120k',
    detail: '电子玩具大概率落入 CCC；同时准备 SRRC、GB 6675 / GB 19865、电池 UN38.3 / MSDS、隐私合规。',
  },
  {
    title: '软件 MVP',
    cost: '人力 8–12 周',
    detail: '设备配网、家长后台、云端编排、成本打点、内容安全、支付订阅；外包现金价通常会明显高于自研人力。',
  },
];

const roadmap: FlowPhase[] = [
  {
    id: 'm0-m1',
    phase: 'M0–M1',
    span: '0–2 个月',
    status: 'done',
    tracks: [
      { label: '硬件', description: 'ESP32-S3 + 单麦 + I2S 喇叭跑通；同步向 3 家 PCBA / 电池 / 毛绒厂 RFQ。' },
      { label: '软件', description: '豆包 ASR / TTS / LLM 全部同区接入，先做每轮 tokens、字符数、音频秒数账单打点。' },
      { label: '毛绒 / 外壳', description: '毛绒草图 → 纸样 → 第一版样衣；不做高额外观模。' },
    ],
    milestone: '10 台手板 + 成本模型 v1。',
  },
  {
    id: 'm2-m3',
    phase: 'M2–M3',
    span: '2–4 个月',
    status: 'doing',
    tracks: [
      { label: '硬件', description: 'EVT 30–50 台；锁定电池、喇叭音腔、跌落结构和充电方式。' },
      { label: '软件', description: '家长端 MVP、内容白名单、离线故事、云端公平使用额度策略。' },
      { label: '毛绒 / 外壳', description: '第二轮样衣 + 可拆洗结构 + 电子仓固定方式。' },
    ],
    milestone: '100 户内测前的可靠性版本。',
  },
  {
    id: 'm4-m5',
    phase: 'M4–M5',
    span: '4–6 个月',
    status: 'pending',
    tracks: [
      { label: '硬件', description: 'DVT 100–300 台；开小治具，准备认证送检样机。' },
      { label: '软件', description: '订阅 / 内购 / 设备日志 / 售后后台；按真实账单回填订阅底价。' },
      { label: '毛绒 / 外壳', description: '定版毛绒、吊牌、包装和安全标签。' },
    ],
    milestone: '认证资料包 + 小批试产报价。',
  },
  {
    id: 'm6-m7',
    phase: 'M6–M7',
    span: '6–8 个月',
    status: 'pending',
    tracks: [
      { label: '硬件', description: 'PVT 500–1000 台；量产节拍、老化测试、返修流程跑通。' },
      { label: '软件', description: '灰度上线，县代理和直播渠道分批放量。' },
      { label: '毛绒 / 外壳', description: '首批 IP 外衣 / 换装件只做软商品，不加电子复杂度。' },
    ],
    milestone: '可正式售卖的第一版。',
  },
];

const sources = [
  {
    label: 'LCSC · ESP32-S3-WROOM-1-N8R8',
    href: 'https://www.lcsc.com/product-detail/C2913201.html',
    note: '1300+ $3.409',
  },
  {
    label: 'LCSC · MEMS 麦克风',
    href: 'https://www.lcsc.com/product-detail/C51928215.html',
    note: '1000+ $0.2892',
  },
  {
    label: 'LCSC · MAX98357AEWL 功放',
    href: 'https://www.lcsc.com/product-detail/C2682619.html',
    note: '1000+ $0.2362',
  },
  {
    label: 'ElectroPeak · 8Ω 1W 喇叭',
    href: 'https://electropeak.com/8-ohm-1w-40mm-diameter-speaker',
    note: '10k+ $0.287',
  },
  {
    label: 'Made-in-China · 603040 800mAh 电池',
    href: 'https://www.made-in-china.com/price/prodetail_Lithium-Battery_uCSxlmZHEyVI.html',
    note: '1000+ $1.28',
  },
  {
    label: '火山引擎 · 豆包语音计费',
    href: 'https://www.volcengine.com/docs/6561/1359370?lang=zh',
    note: 'ASR / TTS 官方价',
  },
  {
    label: '火山引擎开发者社区 · Doubao-Seed-1.6 价格',
    href: 'https://developer.volcengine.com/articles/7517188354925199414',
    note: '0–32K 价格锚点',
  },
  {
    label: 'Made-in-China · 定制毛绒',
    href: 'https://www.made-in-china.com/price/prodetail_Stuffed-Animal-Toy_LfKRVmjSCXcz.html',
    note: '量产 / 样品价',
  },
  {
    label: 'SGS 中国 · 玩具 CCC',
    href: 'https://www.sgsgroup.com.cn/zh-cn/services/china-ccc-toy-certification',
    note: '电子玩具合规范围',
  },
];

export function CostSection() {
  return (
    <Card id="cost" delay={0.56}>
      <SectionLabel>26 · 成本估算 / 落地账</SectionLabel>
      <SectionTitle>
        <Calculator className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
        先按真价格把硬件、云端和订阅底线算清楚
      </SectionTitle>

      <div className="rounded-2xl p-5 mb-6" style={{ backgroundColor: ACCENT_LIGHT }}>
        <div className="text-sm leading-relaxed" style={{ color: ACCENT }}>
          硬件物料用我们硬件工程师按真实选型估算的 BOM：试产 ¥54.74、量产 ¥47.33（仅电子料 + PCB 加工 + SMT，不含毛绒外壳、包装、认证）。
          云服务挂火山公开价。量产前再用 3 家供应商 RFQ 和火山真实账单复核。
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-3 mb-7">
        {summaryCards.map(({ label, value, hint, Icon }) => (
          <div key={label} className="rounded-2xl border border-neutral-200 p-4 bg-white">
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
              >
                <Icon className="w-4 h-4" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">{label}</div>
            </div>
            <div className="text-xl font-bold text-neutral-900 leading-tight mb-2">{value}</div>
            <div className="text-[12px] text-neutral-500 leading-relaxed">{hint}</div>
          </div>
        ))}
      </div>

      <CostBlock
        icon={<Cpu className="w-4 h-4" />}
        kicker="硬件 BOM · 工程师实测口径"
        title="ESP32-S3R8 + ES8311 + NS4150B 这套电子料：试产 ¥54.74，量产 ¥47.33"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[920px] border-separate border-spacing-0 text-left">
            <thead>
              <tr className="text-[11px] uppercase tracking-wider text-neutral-500">
                <th className="py-2 pr-4 font-semibold">模块</th>
                <th className="py-2 pr-4 font-semibold">位号</th>
                <th className="py-2 pr-4 font-semibold">型号</th>
                <th className="py-2 pr-4 font-semibold whitespace-nowrap">数量</th>
                <th className="py-2 pr-4 font-semibold text-right whitespace-nowrap">单价 (¥)</th>
                <th className="py-2 pr-4 font-semibold text-right whitespace-nowrap">试产小计 (¥)</th>
                <th className="py-2 font-semibold text-right whitespace-nowrap">量产小计 (¥)</th>
              </tr>
            </thead>
            <tbody>
              {hardwareCosts.map((row, idx) => (
                <tr key={`${row.module}-${idx}`} className="border-t border-neutral-100">
                  <td className="py-2.5 pr-4 text-sm font-semibold text-neutral-900 align-top whitespace-nowrap">{row.module}</td>
                  <td className="py-2.5 pr-4 text-[12px] text-neutral-600 align-top whitespace-nowrap">{row.ref}</td>
                  <td className="py-2.5 pr-4 text-[12px] text-neutral-700 leading-relaxed align-top">{row.model}</td>
                  <td className="py-2.5 pr-4 text-[12px] text-neutral-600 align-top whitespace-nowrap">{row.qty}</td>
                  <td className="py-2.5 pr-4 text-[12px] text-neutral-700 align-top text-right whitespace-nowrap tabular-nums">{row.unit}</td>
                  <td className="py-2.5 pr-4 text-sm font-semibold text-neutral-900 align-top text-right whitespace-nowrap tabular-nums">
                    {row.trial > 0 ? row.trial.toFixed(2) : '—'}
                  </td>
                  <td className="py-2.5 text-sm font-semibold align-top text-right whitespace-nowrap tabular-nums" style={{ color: row.trialOnly ? '#A3A3A3' : undefined }}>
                    {row.trialOnly ? '不上量产' : row.mass > 0 ? row.mass.toFixed(2) : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-neutral-300">
                <td colSpan={5} className="py-3 pr-4 text-sm font-bold text-neutral-900 text-right">总计 / 台 (¥)</td>
                <td className="py-3 pr-4 text-base font-bold text-neutral-900 text-right tabular-nums">{HARDWARE_TRIAL_TOTAL.toFixed(2)}</td>
                <td className="py-3 text-base font-bold text-right tabular-nums" style={{ color: ACCENT }}>{HARDWARE_MASS_TOTAL.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="text-[12px] text-neutral-500 leading-relaxed mt-3">
          量产小计的"不上量产"两项：USB 转串口 CH343P 仅在试产/调试板上保留，量产板用 GPIO + 测试点；
          AHT20 温湿度也仅试产留点位，量产是否保留视实际功能取舍。其余物料按相同 BOM 继承。
        </div>
      </CostBlock>

      <CostBlock
        icon={<Truck className="w-4 h-4" />}
        kicker="非电子成本 · 毛绒 / 物流 / 退货折算"
        title="下沉渠道退货率高,售后准备金必须先按 25% 装进单台成本"
      >
        <div className="rounded-2xl p-4 mb-5" style={{ backgroundColor: '#FEF3C7' }}>
          <div className="flex items-start gap-2">
            <RotateCcw className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#B45309' }} />
            <div className="text-[12px] leading-relaxed" style={{ color: '#92400E' }}>
              <b>口径保守原则</b>:抖音 / 拼多多儿童玩具综合退货率行业普遍 20–28%(其中"仅退款" 5–10%),
              单台必须先按 25% 退货率折算售后准备金,不能等出问题再补。
              毛绒本体在大陆产业链下相对刚性,口径锁在 ¥6–12,造型差异不会大幅推高;
              真正会被拉爆的是物流 + 售后这两段。
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-separate border-spacing-0 text-left">
            <thead>
              <tr className="text-[11px] uppercase tracking-wider text-neutral-500">
                <th className="py-2 pr-4 font-semibold">类目</th>
                <th className="py-2 pr-4 font-semibold text-right whitespace-nowrap">单台估算 (¥)</th>
                <th className="py-2 font-semibold">保守口径依据</th>
              </tr>
            </thead>
            <tbody>
              {fulfillmentCosts.map((row) => (
                <tr key={row.category} className="border-t border-neutral-100">
                  <td className="py-3 pr-4 text-sm font-semibold text-neutral-900 align-top">{row.category}</td>
                  <td
                    className="py-3 pr-4 text-sm font-bold align-top text-right whitespace-nowrap tabular-nums"
                    style={{ color: row.emphasis ? ACCENT : '#171717' }}
                  >
                    {row.range}
                  </td>
                  <td className="py-3 text-[12px] text-neutral-600 leading-relaxed align-top">{row.basis}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-neutral-300">
                <td className="py-3 pr-4 text-sm font-bold text-neutral-900">非电子合计 / 台</td>
                <td className="py-3 pr-4 text-base font-bold text-right tabular-nums" style={{ color: ACCENT }}>
                  ¥{FULFILLMENT_LOW}–{FULFILLMENT_HIGH}
                </td>
                <td className="py-3 text-[12px] text-neutral-500 leading-relaxed">
                  毛绒 + 电子仓 + 包装 + 组装老化 + 物流 + 退货售后准备金;不含一次性 NRE。
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="grid md:grid-cols-2 gap-3 mt-5">
          <div className="rounded-2xl border-2 p-5 bg-white" style={{ borderColor: ACCENT }}>
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] mb-2" style={{ color: ACCENT }}>
              整机出厂 · 50k 量产保守口径
            </div>
            <div className="text-2xl font-bold text-neutral-900 mb-1 tabular-nums">
              ¥{UNIT_MASS_LOW.toFixed(0)}–{UNIT_MASS_HIGH.toFixed(0)} / 台
            </div>
            <div className="text-[12px] text-neutral-600 leading-relaxed">
              硬件 BOM ¥{HARDWARE_MASS_TOTAL.toFixed(2)} + 非电子 ¥{FULFILLMENT_LOW}–{FULFILLMENT_HIGH}。
              已把 25% 退货率与下沉渠道物流补贴折进单台。
            </div>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-5 bg-neutral-50">
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] mb-2 text-neutral-500">
              整机出厂 · 5k 试产保守口径
            </div>
            <div className="text-2xl font-bold text-neutral-900 mb-1 tabular-nums">
              ¥{UNIT_TRIAL_LOW.toFixed(0)}–{UNIT_TRIAL_HIGH.toFixed(0)} / 台
            </div>
            <div className="text-[12px] text-neutral-600 leading-relaxed">
              硬件 BOM ¥{HARDWARE_TRIAL_TOTAL.toFixed(2)} + 非电子 ¥{FULFILLMENT_LOW}–{FULFILLMENT_HIGH}。
              试产阶段 CH343P / AHT20 仍在板上,毛绒和包装也还没拿到量产价。
            </div>
          </div>
        </div>
      </CostBlock>

      <CostBlock
        icon={<Cloud className="w-4 h-4" />}
        kicker="云端成本 · 豆包全链路"
        title="延时上尽量不跨厂商，成本上真正要管住的是 TTS 字数"
      >
        <div className="grid md:grid-cols-2 gap-3">
          {cloudCosts.map((row) => (
            <div key={row.layer} className="rounded-2xl border border-neutral-200 p-4">
              <div className="flex items-baseline justify-between gap-3 mb-2">
                <div className="text-sm font-bold text-neutral-900">{row.layer}</div>
                <div className="text-sm font-bold" style={{ color: ACCENT }}>{row.cost}</div>
              </div>
              <div className="text-[12px] text-neutral-600 leading-relaxed mb-2">{row.unit}</div>
              <div className="text-[12px] text-neutral-500 leading-relaxed">{row.note}</div>
            </div>
          ))}
        </div>
        <div className="rounded-2xl bg-neutral-900 p-5 mt-4">
          <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-blue-300 mb-3">
            订阅测算 · 用大多数轻用户补少数重用户
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              { label: '轻用户 70%', value: '20 分钟 / 月', cost: '约 ¥0.8' },
              { label: '普通用户 25%', value: '100 分钟 / 月', cost: '约 ¥4.1' },
              { label: '重用户 5%', value: '600 分钟 / 月', cost: '约 ¥24.6' },
            ].map((m) => (
              <div key={m.label} className="rounded-xl bg-white/5 border border-white/10 p-4">
                <div className="text-[11px] font-bold tracking-wider text-blue-300 mb-1">{m.label}</div>
                <div className="text-sm font-semibold text-white mb-1">{m.value}</div>
                <div className="text-[12px] text-neutral-400">{m.cost}</div>
              </div>
            ))}
          </div>
          <div className="text-[12px] text-neutral-300 leading-relaxed mt-4">
            按这个分布，模型 + 语音变量成本约 ¥2.8 / 付费用户 / 月；加业务云、支付损耗、客服和退款后，
            真实底线更接近 ¥3.5–5.5 / 月。重用户占比超过 10% 时，¥39/年会被击穿。
          </div>
        </div>
      </CostBlock>

      <CostBlock
        icon={<Server className="w-4 h-4" />}
        kicker="服务端固定成本 · 与使用量无关的月租"
        title="中国大陆单 region 部署、无 GPU、存储是大头;量起来后单台月租可压到 ¥0.3–0.5"
      >
        <div className="rounded-2xl p-4 mb-5" style={{ backgroundColor: ACCENT_LIGHT }}>
          <div className="text-[12px] leading-relaxed" style={{ color: ACCENT }}>
            产品只服务中国大陆,<b>不做多 region 灾备 / 不上 GPU 推理</b>(模型推理走火山引擎,已在变量成本里)。
            服务端真正的大头是<b>存储和数据库</b>:用户账户、订阅、设备、聊天文本、TTS 音频缓存、内容包。
            下面区分 <b>MVP(1k–5k 台)</b> 与 <b>量产(50k 台)</b> 两档月成本;不含上面已经按使用量计的 ASR / LLM / TTS。
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[860px] border-separate border-spacing-0 text-left">
            <thead>
              <tr className="text-[11px] uppercase tracking-wider text-neutral-500">
                <th className="py-2 pr-4 font-semibold">类目</th>
                <th className="py-2 pr-4 font-semibold">规格</th>
                <th className="py-2 pr-4 font-semibold text-right whitespace-nowrap">MVP 月成本</th>
                <th className="py-2 pr-4 font-semibold text-right whitespace-nowrap">50k 量产月成本</th>
                <th className="py-2 font-semibold">依据</th>
              </tr>
            </thead>
            <tbody>
              {serverCosts.map((row) => (
                <tr key={row.category} className="border-t border-neutral-100">
                  <td className="py-3 pr-4 text-sm font-semibold text-neutral-900 align-top">{row.category}</td>
                  <td className="py-3 pr-4 text-[12px] text-neutral-700 leading-relaxed align-top">{row.spec}</td>
                  <td className="py-3 pr-4 text-sm font-semibold text-neutral-900 align-top text-right whitespace-nowrap tabular-nums">{row.mvp}</td>
                  <td className="py-3 pr-4 text-sm font-bold align-top text-right whitespace-nowrap tabular-nums" style={{ color: ACCENT }}>{row.scale}</td>
                  <td className="py-3 text-[12px] text-neutral-600 leading-relaxed align-top">{row.basis}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-neutral-300">
                <td colSpan={2} className="py-3 pr-4 text-sm font-bold text-neutral-900 text-right">合计 / 月</td>
                <td className="py-3 pr-4 text-base font-bold text-neutral-900 text-right tabular-nums">
                  {fmtMoney(SERVER_MVP_LOW)}–{fmtMoney(SERVER_MVP_HIGH)}
                </td>
                <td className="py-3 pr-4 text-base font-bold text-right tabular-nums" style={{ color: ACCENT }}>
                  {fmtMoney(SERVER_SCALE_LOW)}–{fmtMoney(SERVER_SCALE_HIGH)}
                </td>
                <td className="py-3 text-[12px] text-neutral-500 leading-relaxed">
                  与设备数大致弱相关;真正按用量走的 ASR / LLM / TTS 见上方变量成本表。
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="grid md:grid-cols-2 gap-3 mt-5">
          <div className="rounded-2xl border border-neutral-200 p-5 bg-neutral-50">
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] mb-2 text-neutral-500">
              MVP 阶段 · 1k–5k 台在线
            </div>
            <div className="text-2xl font-bold text-neutral-900 mb-1 tabular-nums">
              {fmtMoney(SERVER_MVP_LOW)}–{fmtMoney(SERVER_MVP_HIGH)} / 月
            </div>
            <div className="text-[12px] text-neutral-600 leading-relaxed">
              按 3k 台中位数算,约 <b className="text-neutral-900 tabular-nums">¥{((SERVER_MVP_LOW + SERVER_MVP_HIGH) / 2 / 3000).toFixed(2)}–{((SERVER_MVP_HIGH) / 3000).toFixed(2)} / 台 / 月</b>;
              小规模时分摊高,但绝对值 ¥2.4k–5k 完全可控。
            </div>
          </div>
          <div className="rounded-2xl border-2 p-5 bg-white" style={{ borderColor: ACCENT }}>
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] mb-2" style={{ color: ACCENT }}>
              量产规模 · 50k 台在线
            </div>
            <div className="text-2xl font-bold text-neutral-900 mb-1 tabular-nums">
              {fmtMoney(SERVER_SCALE_LOW)}–{fmtMoney(SERVER_SCALE_HIGH)} / 月
            </div>
            <div className="text-[12px] text-neutral-600 leading-relaxed">
              按 50k 台分摊,约 <b className="text-neutral-900 tabular-nums">¥{(SERVER_SCALE_LOW / 50000).toFixed(2)}–{(SERVER_SCALE_HIGH / 50000).toFixed(2)} / 台 / 月</b>;
              叠加在 ASR / LLM / TTS 变量成本上,基本不动订阅底价大盘。
            </div>
          </div>
        </div>
      </CostBlock>

      <CostBlock
        icon={<ShieldCheck className="w-4 h-4" />}
        kicker="订阅底价 · 打价格战前先定边界"
        title="可以便宜，但不能承诺无限量"
      >
        <div className="grid md:grid-cols-2 gap-3">
          {subscriptionFloors.map((row) => (
            <div key={row.plan} className="rounded-2xl border border-neutral-200 p-4">
              <div className="flex items-baseline justify-between gap-3 mb-2">
                <div className="text-sm font-bold text-neutral-900">{row.plan}</div>
                <div className="text-sm font-bold" style={{ color: ACCENT }}>{row.floor}</div>
              </div>
              <div className="text-[12px] text-neutral-600 leading-relaxed">{row.rule}</div>
            </div>
          ))}
        </div>
      </CostBlock>

      <CostBlock
        icon={<Hammer className="w-4 h-4" />}
        kicker="一次性投入 · 开模和认证"
        title="毛绒不是高额开模，真正的固定成本在电子仓、认证和试产"
      >
        <div className="grid md:grid-cols-5 gap-3">
          {nreItems.map((item) => (
            <div key={item.title} className="rounded-2xl border border-neutral-200 p-4">
              <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2">{item.title}</div>
              <div className="text-base font-bold text-neutral-900 mb-2">{item.cost}</div>
              <div className="text-[12px] text-neutral-600 leading-relaxed">{item.detail}</div>
            </div>
          ))}
        </div>
        <div className="rounded-2xl p-4 mt-4" style={{ backgroundColor: '#FEF3C7' }}>
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] mb-2" style={{ color: '#B45309' }}>
            外观 / Layout 边界
          </div>
          <div className="text-[12px] leading-relaxed" style={{ color: '#92400E' }}>
            毛绒侧需要纸样、刺绣文件、布料和电子仓位置设计；电子侧需要 PCB layout、天线净空、音腔和充电结构。
            如果采购现成毛绒 + 电子吊牌，3–5 周可出小批；原创毛绒一体机更接近 6–8 周。
            不建议直接仿制竞品或未授权 IP，省下的打版费会被侵权风险放大。
          </div>
        </div>
      </CostBlock>

      <CostBlock
        icon={<Route className="w-4 h-4" />}
        kicker="并行 Roadmap · 软件 / 硬件 / 毛绒一起跑"
        title="不要等外壳定版才做软件，也不要等软件好了才问工厂价格"
      >
        <FlowChart phases={roadmap} caption="三条轨道并行跑，里程碑收口对齐" />
      </CostBlock>

      <div className="rounded-2xl border border-neutral-200 p-5 bg-neutral-50">
        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-500 mb-3">
          公开来源 · 用于价格锚定
        </div>
        <div className="grid md:grid-cols-3 gap-2">
          {sources.map((source) => (
            <a
              key={source.href}
              href={source.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white border border-neutral-200 p-3 hover:border-blue-200 transition-colors"
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <div className="text-[12px] font-semibold text-neutral-900 leading-snug">{source.label}</div>
                <ExternalLink className="w-3.5 h-3.5 shrink-0 text-neutral-400" />
              </div>
              <div className="text-[11px] text-neutral-500 leading-relaxed">{source.note}</div>
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
}

function CostBlock({
  icon,
  kicker,
  title,
  children,
}: {
  icon: React.ReactNode;
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-7 last:mb-0">
      <div className="flex items-center gap-2 mb-2">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
        >
          {icon}
        </div>
        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-500">{kicker}</div>
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-neutral-900 leading-tight mb-4">{title}</h3>
      {children}
    </div>
  );
}

