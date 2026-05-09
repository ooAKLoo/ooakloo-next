import {
  AlertTriangle,
  Building2,
  CalendarClock,
  Check,
  FileCheck2,
  Radio,
  ShieldAlert,
  Smartphone,
  X,
} from 'lucide-react';
import { ACCENT, ACCENT_LIGHT, Card, SectionLabel, SectionTitle } from '../../_shared';

const entityFacts = [
  {
    label: '公司主体',
    value: '有限责任公司即可',
    detail: '不需要外资 / 特种行业牌照；个体户不能上拼多多旗舰店和应用商店开发者。',
  },
  {
    label: '经营范围关键词',
    value: '玩具 · 电子 · 软件 · 信息服务',
    detail: '建议含：玩具及婴幼儿用品销售、电子产品销售、软件开发、技术服务、互联网信息服务。',
  },
  {
    label: '教育资质',
    value: '不需要',
    detail: '我们卖的是玩具 + SaaS 陪伴，不做课程 / 教学 / 培训。文案别踩"课程""教辅""提分"这种词。',
  },
  {
    label: '注册资本',
    value: '认缴 50–100 万即可',
    detail: '部分电商平台和招标会看注册资本，太低会被判低质店铺；不需要实缴。',
  },
];

const appPrereq = [
  {
    title: '软件著作权（软著）',
    when: '代码可演示就能申请，不用等完工',
    detail:
      '提交材料：源代码前 30 页 + 后 30 页 + 软件说明书。普通版 30–40 工作日，加急 3–7 工作日下证。华为 / 小米 / OPPO / vivo / 应用宝上架必须挂软著号，建议 M2 EVT 阶段就把 App 软著申请掉，量产时不会卡。',
    Icon: FileCheck2,
  },
  {
    title: '移动应用备案 / ICP',
    when: '上架前 20 天内提交，1–3 周下证',
    detail:
      '工信部要求所有国内分发的 App 完成移动应用备案；公司主页 / 用户协议页要做 ICP 备案。备案需要软著号、隐私政策 URL、负责人手持身份证视频。',
    Icon: Smartphone,
  },
  {
    title: 'iOS / 海外应用商店',
    when: '注册周期 7–14 天',
    detail:
      'Apple Developer 公司账号 $299/年，需要邓白氏 D-U-N-S 编号；Google Play 公司账号 $25 一次性。海外不需要软著，但需要隐私政策 + 数据安全说明。',
    Icon: Smartphone,
  },
  {
    title: '隐私 / 儿童合规',
    when: 'App 上架前必须做完',
    detail:
      '《个人信息保护法》+《儿童个人信息网络保护规定》：14 岁以下需父母明示同意，必须有家长账号绑定流程；隐私政策、用户协议、SDK 清单缺一不可，监管抽查必看。',
    Icon: ShieldAlert,
  },
];

const hardwarePrereq = [
  {
    title: 'CCC 强制认证',
    cost: '¥2–4 万自办 · 8–12 周',
    detail: '电动 / 电子玩具落入 CCC 范围，国内正规渠道绕不过去。详细的渠道映射和省钱口径见下面"CCC 专题"。',
  },
  {
    title: 'SRRC 型号核准',
    cost: '¥1–2 万 · 6–10 周',
    detail: '含 WiFi / BLE 的整机必须做。用乐鑫官方模组可以走"模组核准 + 整机声明"路线，省一道送检。',
  },
  {
    title: '电池 UN38.3 / MSDS',
    cost: '¥0.5–1.5 万 · 4–6 周',
    detail: '海运、空运、跨境电商都要查。让电池厂直接出，公司不要自己跑。',
  },
  {
    title: '玩具安全标准',
    cost: '随 CCC 一起做',
    detail: 'GB 6675（基础安全）+ GB 19865（电玩具）；做毛绒还要看 GB/T 23158（毛绒玩具技术要求）。',
  },
  {
    title: '商标注册',
    cost: '¥1–3k / 类 · 6–9 个月',
    detail: '品牌名 + 中文名都要注，至少第 28 类（玩具）+ 第 9 类（电子 / 软件）+ 第 41 类（教育娱乐）。下证慢，最早动。被抢注会直接卡住电商旗舰店开店。',
  },
  {
    title: '电商类目资质',
    cost: '随营业执照 + CCC 提交',
    detail: '拼多多 / 抖音玩具类目要 CCC 报告 + 营业执照；进驻旗舰店还要商标受理通知书或注册证。',
  },
];

type SeqStatus = 'now' | 'soon' | 'later';

const sequence: Array<{
  phase: string;
  span: string;
  status: SeqStatus;
  must: string[];
}> = [
  {
    phase: 'M0–M1',
    span: '0–2 个月',
    status: 'now',
    must: [
      '公司注册 / 经营范围补齐玩具 + 软件 + 信息服务',
      '商标第 28 / 9 / 41 类提交（最久 9 个月才下证，必须现在动）',
      '隐私政策 / 用户协议初版起草',
    ],
  },
  {
    phase: 'M2–M3',
    span: '2–4 个月',
    status: 'soon',
    must: [
      'App 软著申请（代码可演示就申请，加急 1 周内拿号）',
      'iOS / Android 公司开发者账号注册',
      'ICP 网站备案 + App 移动应用备案准备材料',
    ],
  },
  {
    phase: 'M4–M5',
    span: '4–6 个月',
    status: 'later',
    must: [
      'CCC + SRRC + 电池认证送检（DVT 样机锁定后送）',
      'App 上架华为 / 小米 / OPPO / vivo / 应用宝 + iOS TestFlight',
      'IP 联名授权书签订（无授权不上架）',
    ],
  },
  {
    phase: 'M6–M7',
    span: '6–8 个月',
    status: 'later',
    must: [
      '拼多多 / 抖音 / 视频号小店开通玩具类目',
      'CCC 证书拿到后包装 + 说明书印刷定版',
      '客服话术 + 售后流程过法务，准备 12315 / 平台投诉应对',
    ],
  },
];

const STATUS_TOKENS: Record<SeqStatus, { dot: string; bg: string; text: string; border: string; label: string }> = {
  now: { dot: '#DC2626', bg: '#FEF2F2', text: '#991B1B', border: '#FECACA', label: '现在就做' },
  soon: { dot: '#F59E0B', bg: '#FFFBEB', text: '#92400E', border: '#FDE68A', label: '近期开始' },
  later: { dot: '#10B981', bg: '#ECFDF5', text: '#065F46', border: '#A7F3D0', label: '量产前完成' },
};

export function PrereqSection() {
  return (
    <Card id="prereq" delay={0.69}>
      <SectionLabel>23B · 前置准备 / 资质与上线时序</SectionLabel>
      <SectionTitle>
        <Building2 className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
        不踩教育资质，但软著、CCC、商标必须按节奏先动
      </SectionTitle>

      <div className="rounded-2xl p-5 mb-6" style={{ backgroundColor: ACCENT_LIGHT }}>
        <div className="text-sm leading-relaxed" style={{ color: ACCENT }}>
          这一节回答：要不要专门牌照、什么时候申请软著保证安卓能上线、硬件销售前还要做什么。
          不追求穷举所有合规项，只挑会卡住"上架 / 量产 / 开店"的几个硬节点。
        </div>
      </div>

      <PrereqBlock
        icon={<Building2 className="w-4 h-4" />}
        kicker="01 · 公司主体 / 经营范围"
        title="普通有限公司就够，关键是经营范围别漏 + 不要碰教育资质"
      >
        <div className="grid md:grid-cols-2 gap-3">
          {entityFacts.map((row) => (
            <div key={row.label} className="rounded-2xl border border-neutral-200 p-4">
              <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                {row.label}
              </div>
              <div className="text-base font-bold text-neutral-900 mb-2">{row.value}</div>
              <div className="text-[12px] text-neutral-600 leading-relaxed">{row.detail}</div>
            </div>
          ))}
        </div>
        <div className="rounded-2xl p-4 mt-4 flex items-start gap-3" style={{ backgroundColor: '#FEF2F2' }}>
          <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#BE123C' }} />
          <div className="text-[12px] leading-relaxed" style={{ color: '#7F1D1D' }}>
            <b>警戒线：</b>只要文案出现"课程""教辅""学习机""提分""一对一辅导"，就会被监管按
            <b>校外培训 / 教学服务</b>对待，那才需要办学许可证。我们一律按"陪伴玩具 + AI 故事机"口径写。
          </div>
        </div>
      </PrereqBlock>

      <PrereqBlock
        icon={<Smartphone className="w-4 h-4" />}
        kicker="02 · App 上架前置（家长端 Android / iOS）"
        title="软著早申请、ICP 早备案，量产时 App 不会卡"
      >
        <div className="grid md:grid-cols-2 gap-3">
          {appPrereq.map(({ title, when, detail, Icon }) => (
            <div key={title} className="rounded-2xl border border-neutral-200 p-4">
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="text-sm font-bold text-neutral-900">{title}</div>
              </div>
              <div className="text-[12px] font-semibold mb-2" style={{ color: ACCENT }}>{when}</div>
              <div className="text-[12px] text-neutral-600 leading-relaxed">{detail}</div>
            </div>
          ))}
        </div>
      </PrereqBlock>

      <PrereqBlock
        icon={<Radio className="w-4 h-4" />}
        kicker="03 · 硬件销售前置"
        title="CCC + SRRC + 商标是三条最长的关键路径"
      >
        <div className="grid md:grid-cols-3 gap-3 mb-5">
          {hardwarePrereq.map((row) => (
            <div key={row.title} className="rounded-2xl border border-neutral-200 p-4">
              <div className="text-sm font-bold text-neutral-900 mb-1">{row.title}</div>
              <div className="text-[12px] font-semibold mb-2" style={{ color: ACCENT }}>{row.cost}</div>
              <div className="text-[12px] text-neutral-600 leading-relaxed">{row.detail}</div>
            </div>
          ))}
        </div>

        {/* CCC 专题 · 必要性 / 渠道 / 钱 / 时序 */}
        <div className="rounded-2xl border-2 p-5" style={{ borderColor: ACCENT, backgroundColor: '#FAFBFF' }}>
          <div className="flex items-center gap-2 mb-4">
            <span
              className="inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
              style={{ backgroundColor: ACCENT, color: 'white' }}
            >
              CCC 专题
            </span>
            <div className="text-sm font-bold text-neutral-900">这笔钱到底绕不绕得过去</div>
          </div>

          {/* 一句话定调 */}
          <div className="text-[13px] text-neutral-700 leading-relaxed mb-5">
            <b>结论：</b>电玩具就在 CCC 强制目录里，
            <b style={{ color: ACCENT }}>只要走国内正规电商 + 线下渠道，绕不过去</b>。
            但 ¥5–10 万是代理报价、走 CQC 自办常见 ¥2–4 万；时序也能拖到 DVT 之后再送检，前期可以用众筹 / 内测 / 海外销售先跑现金流。
          </div>

          {/* 三栏对照 */}
          <div className="grid md:grid-cols-3 gap-3 mb-5">
            <CCCColumn
              kind="must"
              title="哪些渠道必须用 CCC"
              items={[
                '拼多多 / 抖音 / 视频号 / 快手玩具类目入驻',
                '天猫 / 京东 / 唯品会 旗舰店',
                '县城母婴店 / 大型商超 / 学校门口文具店进场',
                '12315 投诉 / 市场监管局抽查无证可处 3 倍货值罚款',
              ]}
            />
            <CCCColumn
              kind="ok"
              title="哪些情况不需要"
              items={[
                '海外销售（FCC 美 / CE 欧 / PSE 日 走目标国认证）',
                '50–500 台内测 / 朋友圈赠送 / 工程样机',
                '小规模众筹（标"工程样机 / 众筹回报"，灰色）',
                'ODM 借证贴牌（用工厂证销售，但锁死方案）',
              ]}
            />
            <CCCColumn
              kind="hint"
              title="钱能压到多少"
              items={[
                '走代理机构：¥5–10 万（包打包 + 加急）',
                '直接对接 CQC / 国家玩具检测中心：¥2–4 万',
                '第二款 SKU 走系列认证（同方案差异测试）：¥0.5–1 万',
                '不通过返工 buffer：留 ¥0.5–1 万',
              ]}
            />
          </div>

          {/* 时序节奏 */}
          <div className="rounded-xl bg-white border border-neutral-200 p-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-500 mb-3">
              时序 · 可以拖到哪
            </div>
            <div className="space-y-2 text-[12px] text-neutral-700 leading-relaxed">
              <div className="flex gap-3">
                <span className="font-bold w-16 shrink-0" style={{ color: ACCENT }}>M0–M3</span>
                <span>不办 CCC 也能跑：内测 100–500 台 + 海外众筹 / 跨境出口；现金流和用户口碑先跑通。</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold w-16 shrink-0" style={{ color: ACCENT }}>M4–M5</span>
                <span>DVT 样机锁定后送检（结构 / PCB / 电池供应商必须冻住，不然每改一次重测一次）。</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold w-16 shrink-0" style={{ color: ACCENT }}>M6–M7</span>
                <span>拿到证后才开拼多多 / 抖音玩具类目旗舰店；CCC 证号要印在彩盒和说明书上，定版才能开印。</span>
              </div>
            </div>
          </div>

          {/* 警示 */}
          <div
            className="rounded-xl p-3 mt-4 flex items-start gap-2"
            style={{ backgroundColor: '#FEF3C7' }}
          >
            <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#B45309' }} />
            <div className="text-[12px] leading-relaxed" style={{ color: '#92400E' }}>
              <b>真正烧钱的不是 CCC，是不通过返工。</b>
              送检前结构 / PCB / 电池 / 喇叭 / 充电方式必须全部冻住——硬件每改一次都要重测，
              一次返工就把"自办省下的钱"全吐回去了。
            </div>
          </div>
        </div>
      </PrereqBlock>

      <PrereqBlock
        icon={<CalendarClock className="w-4 h-4" />}
        kicker="04 · 上线时序 · 什么时候动"
        title="按 M0→M7 倒推，不能等量产了再补资质"
      >
        <div className="space-y-3">
          {sequence.map((row) => {
            const tokens = STATUS_TOKENS[row.status];
            return (
              <div key={row.phase} className="rounded-2xl border border-neutral-200 p-4">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <div
                    className="w-16 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                  >
                    {row.phase}
                  </div>
                  <div className="text-[12px] text-neutral-500">{row.span}</div>
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-semibold border"
                    style={{ backgroundColor: tokens.bg, color: tokens.text, borderColor: tokens.border }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tokens.dot }} />
                    {tokens.label}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {row.must.map((item, i) => (
                    <li key={i} className="text-[13px] text-neutral-700 leading-relaxed flex gap-2">
                      <span className="shrink-0" style={{ color: ACCENT }}>·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </PrereqBlock>
    </Card>
  );
}

function CCCColumn({
  kind,
  title,
  items,
}: {
  kind: 'must' | 'ok' | 'hint';
  title: string;
  items: string[];
}) {
  const tokens = {
    must: { dot: '#DC2626', bg: '#FEF2F2', text: '#991B1B', border: '#FECACA', Icon: X },
    ok: { dot: '#10B981', bg: '#ECFDF5', text: '#065F46', border: '#A7F3D0', Icon: Check },
    hint: { dot: ACCENT, bg: ACCENT_LIGHT, text: ACCENT, border: '#BFDBFE', Icon: Check },
  }[kind];
  const { Icon } = tokens;
  return (
    <div className="rounded-xl bg-white border p-4" style={{ borderColor: tokens.border }}>
      <div className="text-[11px] font-bold uppercase tracking-wider mb-3" style={{ color: tokens.text }}>
        {title}
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 text-[12px] text-neutral-700 leading-relaxed">
            <span
              className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
              style={{ backgroundColor: tokens.bg }}
            >
              <Icon className="w-3 h-3" style={{ color: tokens.dot }} />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PrereqBlock({
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
