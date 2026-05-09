import { Target } from 'lucide-react';
import { ACCENT, ACCENT_LIGHT, Card, SectionLabel, SectionTitle } from '../../_shared';

interface MvpScope {
  bucket: 'do' | 'v2' | 'never';
  title: string;
  items: string[];
}

const MVP_SCOPE: MvpScope[] = [
  {
    bucket: 'do',
    title: 'MVP 必做(M0–M3)',
    items: [
      '火山 ASR + 豆包 1.5-pro + 火山 TTS 全链路',
      'ESP32-S3 + 单麦 + I2S 喇叭原型',
      'WSS 长连接 + 端侧唤醒 + AEC',
      '3 套分龄系统提示词(3-4 / 5-6 / 7-8)',
      '本地 30 个故事 / 儿歌 / 哄睡音频',
      '家长小程序:成长摘要 + 内容内购',
      '4 层儿童安全过滤',
    ],
  },
  {
    bucket: 'v2',
    title: 'V2 增量(M6–M12)',
    items: [
      '父母声音 5 分钟克隆',
      '主动召唤 / 情绪识别',
      '声纹识别(区分孩子 vs 父母 vs 老人)',
      '方言音色(粤 / 川 / 闽 / 潮汕)',
      'IP 联名内容包(喜羊羊 / 熊出没)',
      '县代理后台 + 本地化运营工具',
      'OTA 灰度 + A/B 测试框架',
    ],
  },
  {
    bucket: 'never',
    title: '永远不做',
    items: [
      '自训 LLM / ASR / TTS(直接用商用 API)',
      '4G/5G 内置 SIM(参见 12 联网策略)',
      'NFC 卡牌(参见 13 串联,刻意放弃)',
      '屏幕 / 摄像头(无屏是产品定位)',
      '面向 0-3 岁单独 SKU(启蒙窗口太窄,复用 3-4 即可)',
      '面向青春期 / 成人聊天(人格锁不允许)',
    ],
  },
];

const PRD_KPIS = [
  { metric: '说完到出声', value: '≤ 1.2 s', sub: 'P50;P95 ≤ 2.0 s' },
  { metric: '儿童 ASR 准确率', value: '≥ 92%', sub: '5-8 岁普通话;方言场景另算' },
  { metric: '误唤醒率', value: '< 1 次/小时', sub: '日常家庭噪音环境' },
  { metric: '离线可用率', value: '≥ 70%', sub: '断网仍能讲故事 / 唱儿歌' },
  { metric: '安全过滤召回', value: '≥ 99.5%', sub: '4 层串联,事后抽样验证' },
  { metric: '续航', value: '≥ 6 h 连续对话', sub: '典型场景;待机 ≥ 7 天' },
  { metric: '设备成本(电子 BOM)', value: '≤ 25 元', sub: '不含外壳 / 包装 / 物流' },
  { metric: 'API 成本', value: '≤ 0.6 元/天/活跃设备', sub: '按 30 分钟对话计;可压缩' },
];

export const MvpScopeSection = () => (
  <Card id="mvp-scope" delay={0.66}>
    <SectionLabel>24 · MVP 取舍 + PRD 硬指标</SectionLabel>
    <SectionTitle>
      <Target className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
      现在做 / 以后做 / 永远不做——再加 8 项可验收的硬指标
    </SectionTitle>

    {/* MVP 取舍 */}
    <div className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: ACCENT }}>
      MVP 取舍 · 现在做 / 以后做 / 永远不做
    </div>
    <div className="grid md:grid-cols-3 gap-3 mb-7">
      {MVP_SCOPE.map((s) => {
        const isDo = s.bucket === 'do';
        const isNever = s.bucket === 'never';
        return (
          <div
            key={s.bucket}
            className={`rounded-2xl p-5 ${
              isDo ? 'border-2' : 'border border-neutral-200 bg-white'
            } ${isNever ? 'opacity-80' : ''}`}
            style={isDo ? { backgroundColor: ACCENT_LIGHT, borderColor: ACCENT } : undefined}
          >
            <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
              <div
                className="text-sm font-bold leading-tight"
                style={{ color: isDo ? ACCENT : isNever ? '#BE123C' : '#171717' }}
              >
                {s.title}
              </div>
              {isDo && (
                <span
                  className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold text-white"
                  style={{ backgroundColor: ACCENT }}
                >
                  现在做
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
            <ul className="space-y-1.5">
              {s.items.map((it) => (
                <li
                  key={it}
                  className="flex gap-2 text-[12px] leading-relaxed"
                  style={{ color: isDo ? ACCENT : '#525252' }}
                >
                  <span className="opacity-60 shrink-0">{isNever ? '✕' : '·'}</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>

    {/* PRD 硬指标 */}
    <div className="rounded-2xl p-5" style={{ backgroundColor: '#1F2937' }}>
      <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-blue-300 mb-3">
        技术 PRD 硬指标 · 写进 MVP 验收标准
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
        {PRD_KPIS.map((m) => (
          <div key={m.metric} className="rounded-xl bg-white/5 border border-white/10 p-3">
            <div className="text-[10px] font-bold uppercase tracking-wider text-blue-300 mb-1">{m.metric}</div>
            <div className="text-base font-bold text-white leading-tight mb-1">{m.value}</div>
            <div className="text-[11px] text-neutral-400 leading-relaxed">{m.sub}</div>
          </div>
        ))}
      </div>
    </div>
  </Card>
);
