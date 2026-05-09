import {
  AlertOctagon,
  ArrowRightLeft,
  Ban,
  BarChart3,
  Box,
  Coins,
  Eye,
  Gauge,
  Gift,
  Layers,
  PackageOpen,
  Repeat,
  ScrollText,
  ShieldX,
  ShoppingBag,
  Sparkles,
  Store,
  Tag,
  TrendingDown,
  Users,
  Wallet,
} from 'lucide-react';
import { ACCENT, ACCENT_LIGHT, Card, SectionLabel, SectionTitle } from '../../_shared';

// ---------- 模式 1.0 · 硬件 + 订阅 + 软商品 ----------

interface SkuRow {
  code: string;
  name: string;
  price: string;
  hint: string;
  detail: string;
  Icon: typeof Box;
  emphasis?: boolean;
}

const skus: SkuRow[] = [
  {
    code: 'SKU 1',
    name: '主机 · 毛绒一体机',
    price: '¥149 / 199 / 249',
    hint: '按 IP 形态 / 配色分级；硬件买断 + 含 1 年 AI 对话',
    detail:
      '离线故事 / 儿歌 / 熏听永不锁。售价里必须先扣掉首年云成本 ¥30–45（详见 26 成本估算），不能把首年做成无限畅聊。',
    Icon: Box,
    emphasis: true,
  },
  {
    code: 'SKU 2',
    name: '云服务续费 · AI 对话',
    price: '¥39 / 年 · ¥9.9 / 月 · ¥19.9 / 月',
    hint: '第二年起付费；月付价格战底线 ¥9.9，重度用户进 ¥19.9',
    detail:
      '¥39/年只能做轻量包（600–800 分钟 / 年），超出降级离线故事或提示升级；¥19.9/月给 1000 分钟 + 优先音色 / 父母音，避免少数重度用户吃掉全年毛利。',
    Icon: Repeat,
  },
  {
    code: 'SKU 3',
    name: '实体软商品 · IP 联名',
    price: '¥19.9–49.9 / 件',
    hint: '联名外衣 / 换装套件 / 颈带 / 充电底座（义乌代工，无电子）',
    detail:
      '不增加电子复杂度，纯走软商品逻辑。客单价低、决策轻、回购率高，是家长 App 商城的现金牛 SKU。',
    Icon: ShoppingBag,
  },
  {
    code: 'SKU 4',
    name: 'App 内购 · 内容包',
    price: '¥9.9–99 / 包',
    hint: '高级方言包 / 节日内容 / 父母声音定制 · 一次买断终身可用',
    detail:
      '内容生产边际成本极低，毛利 80%+。父母声音克隆 / 故事人设 / 节日主题（春节 / 六一 / 中秋）做月度内容包持续上新。',
    Icon: Gift,
  },
];

const channels = [
  { name: '拼多多', tag: '硬件主战场', detail: '¥149–199 价格段直发；玩具类目 CCC 必须先拿到。' },
  { name: '抖音直播 / 视频号', tag: '心智 + 转化', detail: '宝妈带货矩阵 + 自播间；县代理大姐做小区团购起量。' },
  { name: '快手', tag: '下沉补量', detail: '单价 ¥99–149 SKU 适配；老铁经济 + 货到付款。' },
  { name: '县城母婴店', tag: '线下心智', detail: '体验 + 教培搭售；县代理铺货，店主分润。' },
  { name: '学校门口文具店', tag: '高频露出', detail: '小学生放学场景；¥149 入门款先打到货架。' },
  { name: '县代理大姐网络', tag: '私域复购', detail: '微信群 + 朋友圈 + 上门售后；软商品 / 续费的主流量来源。' },
];

// ---------- 模式 2.0 · 流量化备选 ----------

interface AnchorRow {
  label: string;
  value: string;
  source: string;
  hint: string;
}

const anchors: AnchorRow[] = [
  {
    label: '母婴抖音 KOL · 单粉估值',
    value: '¥80–120 / 粉',
    source: '行业公开口径（卡思 / 蝉妈妈 / 新榜历年母婴垂类报告）',
    hint: '比泛娱乐号高 3–5 倍；妈妈粉决策权重高、客单价高、复购强。',
  },
  {
    label: '母婴 CPA · 拉新一个真实付费妈妈',
    value: '¥150–300',
    source: '抖音 / 小红书母婴行业投流口径',
    hint: '0–6 岁带娃妈妈是全平台最贵的获客标签之一；早教 / 奶粉 / 营养品长期溢价。',
  },
  {
    label: '我们的标签厚度',
    value: '比纯母婴号还垂',
    source: '已付硬件费 + 0–6 岁 + 真实在用 + 高频触达',
    hint: '理论上单户家长年广告 / CPS 价值上限 ¥80–200，但要拿得到必须靠家长 App，不是玩具本体。',
  },
];

interface PlanBSku {
  layer: string;
  what: string;
  how: string;
  Icon: typeof Tag;
}

const planBSkus: PlanBSku[] = [
  {
    layer: '硬件',
    what: '不亏本卖 · ¥99–129 起',
    how: '毛绒压到 ¥80 内（详见 26 成本估算），硬件不再含 1 年 AI；用更低门槛换装机量。',
    Icon: Tag,
  },
  {
    layer: 'AI 对话',
    what: '免费 · 公平使用上限',
    how: '取消 ¥39/年订阅；600 分钟 / 月封顶（重度用户仍走 ¥19.9 安全档），把订阅墙从大多数家庭移走。',
    Icon: Sparkles,
  },
  {
    layer: '家长 App 商城',
    what: 'CPS 母婴货架',
    how: '联名 IP 衣服 / 绘本 / 早教课 / 奶粉营养品 / 亲子活动；按 GMV 分润 5–15%。',
    Icon: Store,
  },
  {
    layer: '品牌定制内容包',
    what: '联名故事 / 角色',
    how: '品牌方付费定制故事 / 角色 / 节日内容包，进入家长 App 商品库；不在儿童端做硬广。',
    Icon: PackageOpen,
  },
  {
    layer: '私域 + 县代理',
    what: '团购 / 活动',
    how: '县代理大姐微信群组织亲子活动报名、品牌团购、课程拼团；GMV 分润给代理。',
    Icon: Users,
  },
  {
    layer: '聚合数据洞察',
    what: '趋势报告 · 不卖个体',
    how: '母婴行业聚合趋势报告（如"6 月儿歌点播榜""方言教学需求分布"）输出给品牌方；不输出任何个体可识别数据。',
    Icon: BarChart3,
  },
];

const triggers = [
  '硬件首月退货率连续 2 季度 > 18%（说明 ¥149 还是太贵）',
  'AI 续费率连续 2 季度 < 25%（说明订阅墙在劝退）',
  '家长 App MAU / 装机量 > 35% 且月均启动 > 8 次（说明家长侧已经能撑商城）',
  'CPS 试点单户家长年贡献 > ¥30（说明 CPS 单经济跑通）',
  '出现一家头部母婴品牌愿意付定金做内容包定制（说明 B 端通道打开）',
];

// ---------- 红线区 ----------

interface RedLineRow {
  title: string;
  what: string;
  basis: string;
}

const redLines: RedLineRow[] = [
  {
    title: '儿童端绝对零广告',
    what: '玩具本体语音 / 灯效 / 内容包内不出现任何商业推广；不做"看广告解锁故事"、不做品牌口播植入。',
    basis: '《未成年人网络保护条例》（2024.1.1 生效）第 47 条：不得通过网络以弹窗等形式向未成年人推送广告；《广告法》第 40 条针对未成年人传播媒介的广告限制。',
  },
  {
    title: '不卖儿童画像 / 行为数据',
    what: '儿童语音、聊天文本、行为轨迹、声纹严禁对外输出；不做面向广告主的儿童画像产品；聚合洞察必须脱敏到行业级、不可回溯到家庭。',
    basis: '《个人信息保护法》第 31 条：处理不满 14 周岁未成年人个人信息须经监护人同意，且作为敏感个人信息严格管理；《儿童个人信息网络保护规定》（2019）。',
  },
  {
    title: '家长 App 也不踩"诱导未成年人消费"',
    what: '商城 / CPS 入口仅在家长账号下展示；不在孩子可视范围内弹付费窗；不做"孩子点了就扣"、不做盲盒式抽奖、不做诱导内购。',
    basis: '《未成年人保护法》第 74 条网络产品和服务提供者不得提供诱导其沉迷的内容 / 服务；App Store 和各国安卓商店审核细则同步禁止。',
  },
  {
    title: '不碰"教育 / 培训"口径',
    what: '所有广告 / CPS / 内容包文案不得出现"课程""提分""教辅""一对一辅导""学习机"；只能写"故事 / 陪伴 / 启蒙 / 兴趣"。',
    basis: '"双减"政策 + 校外培训监管：踩词会被按校外培训对待，需办学许可证，否则下架 + 罚款。',
  },
  {
    title: '声音克隆 / 父母音必须授权链路',
    what: '父母音录入需家长账号本人录制 + 二次确认；不接受第三方上传；不能用于跨用户合成；克隆样本可一键删除。',
    basis: '《个人信息保护法》对生物识别信息的"单独同意"要求；声纹被认定为敏感个人信息。',
  },
  {
    title: 'IP 联名必须有授权书',
    what: '熊出没 / 喜羊羊 / 奥特曼 / 小猪佩奇等任何 IP 联名外衣 / 内容包，必须先有书面授权 + 报备；不上未授权擦边 SKU。',
    basis: '《著作权法》《商标法》及主流 IP 方平台监测机制；侵权一次足以失去整个家长信任池。',
  },
];

// ---------- 决策矩阵 ----------

interface MatrixRow {
  dim: string;
  v1: string;
  v2: string;
  pickHint: 'v1' | 'v2' | 'tie';
}

const matrix: MatrixRow[] = [
  { dim: '现金流回正速度', v1: '快 · 硬件首月即收', v2: '慢 · 装机后 6–12 个月才回', pickHint: 'v1' },
  { dim: '装机量增长上限', v1: '中 · ¥149 价格段', v2: '高 · ¥99 + 免费 AI', pickHint: 'v2' },
  { dim: '单户 LTV', v1: '¥80–180（订阅 + 软商品）', v2: '¥120–260（CPS + 内容定制）', pickHint: 'v2' },
  { dim: '运营复杂度', v1: '低 · SKU 清晰', v2: '高 · 商城 / 品牌 BD / 内容审核', pickHint: 'v1' },
  { dim: '品牌信任风险', v1: '低 · 卖玩具收订阅', v2: '中 · 必须把红线讲清楚', pickHint: 'v1' },
  { dim: '监管暴露面', v1: '低', v2: '中 · 看广告 / 数据合规执行', pickHint: 'v1' },
  { dim: '与母婴生态杠杆', v1: '弱', v2: '强 · 接入整条母婴交易链', pickHint: 'v2' },
];

// =============================================================
// Card 1 · 25 · 商业模式 总览（intro + 红线 + 决策矩阵）
// =============================================================

export function BusinessModelSection() {
  return (
    <Card id="business" delay={0.7}>
      <SectionLabel>25 · 商业模式 / 定价 SKU</SectionLabel>
      <SectionTitle>
        <Coins className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
        硬件薄毛利保现金流，软商品 + 云续费补 LTV；预留一条流量化的 Plan B
      </SectionTitle>

      <div className="rounded-2xl p-5 mb-7" style={{ backgroundColor: ACCENT_LIGHT }}>
        <div className="text-sm leading-relaxed" style={{ color: ACCENT }}>
          默认走<b>模式 1.0 · 硬件 + 订阅 + 软商品</b>（见 25.1）：现金流回正最快，SKU 清晰，监管暴露面低。
          同时把<b>模式 2.0 · 流量化备选</b>放在桌面上（见 25.2）——
          母婴粉单粉估值 ¥80–120、母婴 CPA ¥150–300，我们的标签比纯母婴号还垂，理论上 LTV 更高。
          但 2.0 的兑现路径只能在<b>家长 App 侧</b>，玩具本体和儿童端有 6 条红线必须先认下来。
        </div>
      </div>

      {/* 红线区 */}
      <Block
        icon={<ShieldX className="w-4 h-4" />}
        kicker="红线区 · 1.0 / 2.0 都不能踩"
        title="儿童硬件 + AI 这条赛道，6 条红线先认下来再谈商业模式"
      >
        <div
          className="rounded-2xl p-4 mb-5 flex items-start gap-3"
          style={{ backgroundColor: '#FEF2F2', border: '1px solid #FECACA' }}
        >
          <AlertOctagon className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#BE123C' }} />
          <div className="text-[13px] leading-relaxed" style={{ color: '#7F1D1D' }}>
            <b>核心原则：</b>"妈妈粉值钱"成立的前提是<b>她信任我们</b>。
            一旦在儿童端跑广告 / 卖儿童数据 / 诱导内购，
            母婴生态会用 12315 / 黑猫 / 小红书避雷帖 / 抖音家长群 把品牌即时打废，
            前面所有渠道、IP、县代理积累一夜清零。这是<b>商业判断</b>，不只是合规。
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {redLines.map((r, i) => (
            <div
              key={r.title}
              className="rounded-2xl border-2 p-4 bg-white"
              style={{ borderColor: '#FECACA' }}
            >
              <div className="flex items-start gap-2 mb-2">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: '#FEF2F2', color: '#BE123C' }}
                >
                  <Ban className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider mb-0.5" style={{ color: '#BE123C' }}>
                    红线 {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="text-sm font-bold text-neutral-900 leading-snug">{r.title}</div>
                </div>
              </div>
              <div className="text-[12px] text-neutral-700 leading-relaxed mb-2">{r.what}</div>
              <div
                className="text-[11px] leading-relaxed rounded-lg p-2"
                style={{ backgroundColor: '#FAFAFA', color: '#525252' }}
              >
                <ScrollText className="inline-block w-3 h-3 mr-1 -mt-0.5" />
                <b>法规依据：</b>
                {r.basis}
              </div>
            </div>
          ))}
        </div>
      </Block>

      {/* 决策矩阵 */}
      <Block
        icon={<Eye className="w-4 h-4" />}
        kicker="决策矩阵 · 1.0 / 2.0 同维度对照"
        title="不是非此即彼；现阶段 1.0 主跑，2.0 在 M6 之后看信号决定要不要叠"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-separate border-spacing-0 text-left">
            <thead>
              <tr className="text-[11px] uppercase tracking-wider text-neutral-500">
                <th className="py-2 pr-4 font-semibold">维度</th>
                <th className="py-2 pr-4 font-semibold">模式 1.0 · 硬件 + 订阅</th>
                <th className="py-2 pr-4 font-semibold">模式 2.0 · 流量化</th>
                <th className="py-2 font-semibold whitespace-nowrap">现阶段更优</th>
              </tr>
            </thead>
            <tbody>
              {matrix.map((row) => (
                <tr key={row.dim} className="border-t border-neutral-100">
                  <td className="py-3 pr-4 text-sm font-semibold text-neutral-900 align-top whitespace-nowrap">
                    {row.dim}
                  </td>
                  <td
                    className="py-3 pr-4 text-[12px] leading-relaxed align-top"
                    style={{
                      color: row.pickHint === 'v1' ? ACCENT : '#525252',
                      fontWeight: row.pickHint === 'v1' ? 600 : 400,
                    }}
                  >
                    {row.v1}
                  </td>
                  <td
                    className="py-3 pr-4 text-[12px] leading-relaxed align-top"
                    style={{
                      color: row.pickHint === 'v2' ? ACCENT : '#525252',
                      fontWeight: row.pickHint === 'v2' ? 600 : 400,
                    }}
                  >
                    {row.v2}
                  </td>
                  <td className="py-3 text-[12px] font-bold align-top whitespace-nowrap">
                    {row.pickHint === 'v1' ? (
                      <span style={{ color: ACCENT }}>1.0</span>
                    ) : row.pickHint === 'v2' ? (
                      <span style={{ color: '#047857' }}>2.0</span>
                    ) : (
                      <span className="text-neutral-400">持平</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-2 gap-3 mt-5">
          <div className="rounded-2xl border-2 p-4" style={{ borderColor: ACCENT, backgroundColor: '#FAFBFF' }}>
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="w-4 h-4" style={{ color: ACCENT }} />
              <div className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>
                现阶段结论 · M0–M6
              </div>
            </div>
            <div className="text-[13px] text-neutral-800 leading-relaxed">
              全量跑 1.0；2.0 只埋数据点（家长 App 装机率、月均启动、商城点击率），
              不动 SKU、不开商城。这一阶段把硬件单台经济、订阅续费率、退货率三条线打稳。
            </div>
          </div>
          <div className="rounded-2xl border-2 p-4" style={{ borderColor: '#10B981', backgroundColor: '#F0FDF4' }}>
            <div className="flex items-center gap-2 mb-2">
              <Repeat className="w-4 h-4" style={{ color: '#047857' }} />
              <div className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#047857' }}>
                M6 之后 · 看信号决定
              </div>
            </div>
            <div className="text-[13px] text-neutral-800 leading-relaxed">
              切换扳机里任意 2 条同时满足，在单一县代理片区做 2.0 灰度；
              CPS 单户家长年贡献 &gt; ¥30 且不打破任何红线后，再考虑全国铺。
            </div>
          </div>
        </div>
      </Block>
    </Card>
  );
}

// =============================================================
// Card 2 · 25.1 · 模式 1.0 · 硬件 + 订阅 + 软商品
// =============================================================

export function BusinessModel1Section() {
  return (
    <Card id="business-1" delay={0.71}>
      <SectionLabel>25.1 · 模式 1.0 · 硬件 + 订阅 + 软商品</SectionLabel>
      <SectionTitle>
        <Layers className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
        4 个 SKU + 6 条渠道：硬件薄毛利获客，订阅 / 软商品 / 内容包补 LTV
      </SectionTitle>

      <div className="grid md:grid-cols-2 gap-3">
        {skus.map((sku) => {
          const Icon = sku.Icon;
          return (
            <div
              key={sku.code}
              className={`rounded-2xl p-4 ${
                sku.emphasis ? 'border-2 bg-white' : 'border border-neutral-200 bg-white'
              }`}
              style={sku.emphasis ? { borderColor: ACCENT } : undefined}
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                  {sku.code}
                </div>
              </div>
              <div className="text-base font-bold text-neutral-900 mb-1">{sku.name}</div>
              <div className="text-sm font-bold mb-2 tabular-nums" style={{ color: ACCENT }}>
                {sku.price}
              </div>
              <div className="text-[12px] text-neutral-700 leading-relaxed mb-2">{sku.hint}</div>
              <div className="text-[12px] text-neutral-500 leading-relaxed">{sku.detail}</div>
            </div>
          );
        })}
      </div>

      <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-500 mt-7 mb-3">
        渠道矩阵 · 6 条腿
      </div>
      <div className="grid md:grid-cols-3 gap-3">
        {channels.map((ch) => (
          <div key={ch.name} className="rounded-xl border border-neutral-200 bg-neutral-50/60 p-3">
            <div className="flex items-baseline justify-between gap-2 mb-1">
              <div className="text-sm font-bold text-neutral-900">{ch.name}</div>
              <div className="text-[10px] font-semibold tracking-wider uppercase" style={{ color: ACCENT }}>
                {ch.tag}
              </div>
            </div>
            <div className="text-[12px] text-neutral-600 leading-relaxed">{ch.detail}</div>
          </div>
        ))}
      </div>

      <div
        className="rounded-2xl p-4 mt-5 flex items-start gap-3"
        style={{ backgroundColor: '#FEF3C7' }}
      >
        <Wallet className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#B45309' }} />
        <div className="text-[12px] leading-relaxed" style={{ color: '#92400E' }}>
          <b>单位经济硬约束：</b>主机售价里必须先扣掉首年云成本 ¥30–45；
          ¥39/年不能承诺无限畅聊，必须有公平使用额度；重度用户占比 &gt; 10% 时 ¥39/年会被击穿，
          必须强制升级到 ¥19.9/月（详见 26 成本估算的订阅底价测算）。
        </div>
      </div>
    </Card>
  );
}

// =============================================================
// Card 3 · 25.2 · 模式 2.0 · 流量化备选
// =============================================================

export function BusinessModel2Section() {
  return (
    <Card id="business-2" delay={0.72}>
      <SectionLabel>25.2 · 模式 2.0 · 流量化备选</SectionLabel>
      <SectionTitle>
        <ArrowRightLeft className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
        把硬件 + AI 做到几乎免费，靠家长 App 的 CPS / 内容定制 / 聚合洞察补回来
      </SectionTitle>

      <div className="rounded-2xl p-4 mb-6" style={{ backgroundColor: ACCENT_LIGHT }}>
        <div className="text-[13px] leading-relaxed" style={{ color: ACCENT }}>
          这一节是 <b>Plan B</b>，不替换 1.0：在切换扳机被触发前不动 SKU、不开商城；
          但价值锚点和落地路径必须先想清楚，不然信号到了反应不过来。
          所有内容只在<b>家长 App 侧</b>兑现，儿童端的 6 条红线（见 25 红线区）任何一条都不能踩。
        </div>
      </div>

      {/* 价值锚点 */}
      <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-500 mb-3">
        价值锚点 · 妈妈粉为什么贵
      </div>
      <div className="grid md:grid-cols-3 gap-3 mb-7">
        {anchors.map((a) => (
          <div key={a.label} className="rounded-2xl border border-neutral-200 p-4 bg-white">
            <div className="text-[11px] font-semibold text-neutral-500 mb-1 leading-snug">{a.label}</div>
            <div className="text-base font-bold mb-1 tabular-nums" style={{ color: ACCENT }}>{a.value}</div>
            <div className="text-[11px] text-neutral-500 leading-relaxed mb-1">{a.source}</div>
            <div className="text-[12px] text-neutral-700 leading-relaxed">{a.hint}</div>
          </div>
        ))}
      </div>

      {/* 2.0 SKU 重构 */}
      <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-500 mb-3">
        SKU 重构 · 6 条新变现腿
      </div>
      <div className="grid md:grid-cols-3 gap-3 mb-7">
        {planBSkus.map((row) => {
          const Icon = row.Icon;
          return (
            <div key={row.layer} className="rounded-2xl border border-neutral-200 p-4 bg-white">
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                  {row.layer}
                </div>
              </div>
              <div className="text-sm font-bold text-neutral-900 mb-2">{row.what}</div>
              <div className="text-[12px] text-neutral-600 leading-relaxed">{row.how}</div>
            </div>
          );
        })}
      </div>

      {/* 切换扳机 */}
      <div className="rounded-2xl bg-neutral-900 p-5">
        <div className="flex items-center gap-2 mb-3">
          <Gauge className="w-4 h-4 text-blue-300" />
          <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-blue-300">
            切换扳机 · 任意 2 条同时满足，启动 2.0 灰度
          </div>
        </div>
        <ul className="space-y-2">
          {triggers.map((t, i) => (
            <li key={i} className="flex gap-2 text-[13px] text-neutral-200 leading-relaxed">
              <span className="shrink-0 text-blue-300">·</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <div className="text-[12px] text-neutral-400 leading-relaxed mt-4">
          灰度方式：先在 1 个县代理片区做 A/B；硬件价、订阅墙、家长 App 商城三个开关独立测；
          真实账单回填后再决定是否全国切换。
        </div>
      </div>
    </Card>
  );
}

function Block({
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
