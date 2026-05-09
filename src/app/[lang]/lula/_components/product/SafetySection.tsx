import { ShieldCheck } from 'lucide-react';
import { ACCENT, Card, SectionLabel, SectionTitle } from '../../_shared';

interface SafetyLayer {
  num: string;
  layer: string;
  desc: string;
  rules: string[];
}

const SAFETY_LAYERS: SafetyLayer[] = [
  {
    num: 'L1',
    layer: '输入侧 · ASR 文字过滤',
    desc: '孩子说出的话进入 LLM 前先过一遍',
    rules: [
      '敏感词黑名单:暴力 / 性 / 自伤 / 恐怖 / 政治',
      '诱导提问识别:检测引导玩具说脏话 / 教坏话',
      '陌生人身份确认:第三方代说话不予回应',
    ],
  },
  {
    num: 'L2',
    layer: '模型侧 · System Prompt 锁',
    desc: 'LLM 调用时强制注入儿童安全人格',
    rules: [
      '系统提示词不可覆盖:儿童玩具人格永远生效',
      '话题白名单:成人 / 政治 / 宗教 / 时政 / 灵异 → 转移',
      '不确定时回答:"这个问题可以问爸爸妈妈哦"',
    ],
  },
  {
    num: 'L3',
    layer: '输出侧 · TTS 前二次过滤',
    desc: 'LLM 输出在合成语音前再过一遍',
    rules: [
      '专有名词 / URL / 长串数字 / 邮箱 → 删除或改写',
      '激烈语气 / 命令式 / 否定词高频 → 重写为温和版',
      '长度分龄限制:3-4 岁 ≤ 30 字 / 5-6 岁 ≤ 60 字 / 7-8 岁 ≤ 120 字',
    ],
  },
  {
    num: 'L4',
    layer: '审计层 · 异步 + 家长可控',
    desc: '事后可追溯、家长有最终控制权',
    rules: [
      '对话日志加密存储 90 天(合规要求)',
      '抽样人工 review + 异常告警(每日 1‰)',
      '家长 App 可申请删除孩子数据 / 关闭录音上传',
    ],
  },
];

export const SafetySection = () => (
  <Card id="safety" delay={0.52}>
    <SectionLabel>17 · 安全与家长可控</SectionLabel>
    <SectionTitle>
      <ShieldCheck className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
      四层防护,缺一不可——这是过审 + 续费的底线
    </SectionTitle>

    <p className="text-sm text-neutral-600 leading-relaxed mb-6">
      行业血淋淋的教训:FoloToy 早期被曝光过教孩子说脏话,国内某品牌因输出色情内容被工信部点名。
      <b className="text-neutral-900">儿童 AI 玩具不能信任单一防护</b>——必须输入 / 模型 / 输出 / 审计四层串联,
      并且<b className="text-neutral-900">家长在 App 拥有最终的删除权 / 关闭权</b>。
    </p>

    <div className="grid md:grid-cols-2 gap-3">
      {SAFETY_LAYERS.map((s) => (
        <div key={s.num} className="rounded-2xl border-2 p-5 bg-white" style={{ borderColor: '#FECACA' }}>
          <div className="flex items-baseline gap-2 mb-2">
            <span
              className="inline-flex items-center rounded px-2 py-0.5 text-[11px] font-mono font-bold"
              style={{ backgroundColor: '#FFE4E6', color: '#BE123C' }}
            >
              {s.num}
            </span>
            <div className="text-sm font-bold text-neutral-900 leading-snug">{s.layer}</div>
          </div>
          <div className="text-[12px] text-neutral-500 mb-3 leading-relaxed">{s.desc}</div>
          <ul className="space-y-1">
            {s.rules.map((r) => (
              <li key={r} className="flex gap-2 text-[12px] text-neutral-700 leading-relaxed">
                <span className="text-neutral-400 shrink-0">·</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Card>
);
