/* eslint-disable react/no-unescaped-entities */
import { Cpu } from 'lucide-react';
import { ACCENT, Card, SectionLabel, SectionTitle } from '../../_shared';

const DEVICE_ITEMS = [
  'ESP-SR 端侧唤醒("小布小布",误唤醒 < 1 次/小时)',
  'AFE 降噪 + AEC 回声消除(边播边录不啸叫)',
  'Opus 16k 编码 + 40ms 帧切片上行',
  '本地 30 个故事 / 儿歌 / FAQ(8MB Flash 或 SD 卡)',
  'LED 状态:蓝呼吸=听 / 紫=想 / 绿=说 / 黄=离线',
];

const DEVICE_KPIS = [
  { metric: '待机功耗', value: '< 50 mW', sub: 'IDLE 只跑唤醒模型' },
  { metric: '续航', value: '≥ 6 h', sub: '连续对话 / 待机 ≥ 7 天' },
  { metric: '设备 BOM', value: '≤ 25 元', sub: '电子件;不含外壳 / 包装 / 物流' },
  { metric: '离线可用率', value: '≥ 70%', sub: '断网仍能讲故事 / 唱儿歌' },
];

export const DeviceLayerSection = () => (
  <Card id="device-layer" delay={0.6}>
    <SectionLabel>21 · 端侧 · ESP32-S3 主控</SectionLabel>
    <SectionTitle>
      <Cpu className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: '#047857' }} />
      声音采集 / 端侧唤醒 / 离线兜底——硬件能省钱也能背锅
    </SectionTitle>

    <p className="text-sm text-neutral-600 leading-relaxed mb-6">
      端侧不是"越多越好"。我们只做三件事:<b className="text-neutral-900">把声音采干净送上去</b>、
      <b className="text-neutral-900">在断网时还能讲故事</b>、<b className="text-neutral-900">让 LED 变成孩子能看懂的反馈</b>。
      其他任何能放云端的事——一律放云端,这样 BOM 才能压到 25 元以内。
    </p>

    {/* L1 详细 */}
    <div className="rounded-2xl p-5 border mb-7" style={{ backgroundColor: '#ECFDF5', borderColor: '#04785733' }}>
      <div className="flex items-baseline gap-2 mb-3 flex-wrap">
        <div className="text-[10px] font-bold tracking-wider" style={{ color: '#047857', opacity: 0.6 }}>L1</div>
        <div className="text-base font-bold leading-snug" style={{ color: '#047857' }}>设备端 · ESP32-S3 主控</div>
        <div className="text-[12px]" style={{ color: '#047857', opacity: 0.7 }}>— 声音采集 / 唤醒 / 离线兜底</div>
      </div>
      <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
        {DEVICE_ITEMS.map((it) => (
          <li key={it} className="flex gap-2 text-[13px] leading-relaxed" style={{ color: '#047857' }}>
            <span className="opacity-50 shrink-0">·</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* 端侧 KPI */}
    <div className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: ACCENT }}>
      端侧硬指标
    </div>
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
      {DEVICE_KPIS.map((m) => (
        <div key={m.metric} className="rounded-xl border border-neutral-200 bg-white p-4">
          <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1">{m.metric}</div>
          <div className="text-base font-bold text-neutral-900 leading-tight mb-1">{m.value}</div>
          <div className="text-[11px] text-neutral-500 leading-relaxed">{m.sub}</div>
        </div>
      ))}
    </div>
  </Card>
);
