/* eslint-disable react/no-unescaped-entities */
import { Baby, BookOpen, Users } from 'lucide-react';
import { ACCENT, ACCENT_LIGHT, Card, SectionLabel, SectionTitle } from '../../_shared';

interface AgePersona {
  age: string;
  tag: string;
  persona: string;
  speech: string;
  learning: string;
  boundary: string;
  example: string;
}

const AGE_PERSONAS: AgePersona[] = [
  {
    age: '3–4 岁',
    tag: '启蒙期',
    persona: '哥哥/姐姐型陪伴 · 重情绪轻知识',
    speech: '语速慢、句子短(≤ 8 字)、重复率高、每轮 ≤ 2 句',
    learning: '感知 + 模仿:儿歌 / 拟声词 / 颜色形状 / 简单问答',
    boundary: '不主动教抽象概念;以情绪互动和安抚为主;允许孩子打断',
    example: '孩子:"小布我害怕。" → 小布:"小布在呢,抱抱你。我们一起数小星星好不好?一颗⋯两颗⋯"',
  },
  {
    age: '5–6 岁',
    tag: '学前期',
    persona: '会讲故事的玩伴 · 苏格拉底式引导',
    speech: '语速中、句子完整、每轮 ≤ 4 句、鼓励复述',
    learning: '拼音 / 数感 / 古诗 / 英文启蒙 / 自然认知 / 故事接龙',
    boundary: '问答式而非灌输式;失败时换问法不直接给答案;鼓励"为什么"',
    example: '孩子:"为什么天是蓝的?" → 小布:"你猜是不是天空里住着一只蓝精灵?" → 等孩子假设 → 再补充科学解释',
  },
  {
    age: '7–8 岁',
    tag: '学龄初期',
    persona: '能聊知识的小老师 · 思辨与创造',
    speech: '语速正常、能讨论 5–8 句的复杂话题、引入对比',
    learning: '学科常识 / 阅读理解 / 思辨 / 创造性表达 / 故事创作',
    boundary: '允许"我不知道";拒绝代写作业;鼓励多角度思考',
    example: '孩子:"小布帮我写作文。" → 小布:"作文得你自己写才算数哦。不过我可以陪你想:你今天最难忘的事是什么?"',
  },
];

interface PedagogyLoop {
  num: string;
  name: string;
  detail: string;
}

const PEDAGOGY_LOOPS: PedagogyLoop[] = [
  {
    num: '01',
    name: '情绪优先 · 知识其次',
    detail: '孩子哭着说"妈妈不喜欢我" → 不解释道理,先共情:"小布听到了,很难过对不对?" → 3 轮共情后再引导。',
  },
  {
    num: '02',
    name: '苏格拉底式反问',
    detail: '孩子问"为什么天是蓝的" → 玩具反问"你猜呢?" → 孩子假设 → 玩具肯定合理部分再补充——而不是 1 秒读完百科。',
  },
  {
    num: '03',
    name: '复述与巩固',
    detail: '讲完一个故事 → 30 秒后问"还记得小猴子最后做了什么吗?"——把被动听变成主动记。',
  },
  {
    num: '04',
    name: '失败友好',
    detail: '孩子答错拼音 → "差一点点哦,我们再试一次,是 b 还是 p?"——绝不说"错了"或"不对"。',
  },
  {
    num: '05',
    name: '主动召唤 · 但不打扰',
    detail: '安静 5 分钟 + 麦克风检测到孩子在房间 → 主动说"小布想听你讲今天最好玩的事"——只在白噪音 / 独处时触发,不打断游戏 / 学习 / 用餐。',
  },
  {
    num: '06',
    name: '父母在场强化',
    detail: '检测到父母语音参与 → 切换"协作模式",把答案一半留给父母——让玩具成为亲子催化剂,而不是替代。',
  },
];

export const DialogueSection = () => (
  <Card id="dialogue" delay={0.5}>
    <SectionLabel>14 · 对话能力 · 分龄人格 + 教育法</SectionLabel>
    <SectionTitle>
      <Users className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
      家长付费的本质——是这两件事,不是 LLM 参数量
    </SectionTitle>

    <p className="text-sm text-neutral-600 leading-relaxed mb-7">
      <b className="text-neutral-900">"3-8 岁"是营销口径,不是产品口径。</b>
      3 岁和 8 岁孩子的语言能力差 5 个发育阶段,一个 prompt 满足不了——必须根据家长在 App 设置的实际月龄,
      切换<b className="text-neutral-900">人格、语速、句长、教学方式</b>;再叠上把蒙台梭利 / 苏格拉底 / 儿童心理学
      拆成 6 条<b className="text-neutral-900">可执行的 prompt 规则</b>,塞进 system message。
    </p>

    {/* 分龄人格 */}
    <div className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: ACCENT }}>
      <Users className="inline-block w-3.5 h-3.5 mr-1.5 -mt-0.5" />
      分龄人格 · 3-8 岁切三档,每档独立 prompt
    </div>
    <div className="space-y-3 mb-7">
      {AGE_PERSONAS.map((p) => (
        <div key={p.age} className="rounded-2xl border-2 border-neutral-200 p-5 bg-white">
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: ACCENT_LIGHT }}
            >
              <Baby className="w-6 h-6" style={{ color: ACCENT }} />
            </div>
            <div>
              <div className="text-lg font-bold text-neutral-900 leading-tight">
                {p.age} <span className="text-sm font-normal text-neutral-500">· {p.tag}</span>
              </div>
              <div className="text-[12px] font-medium" style={{ color: ACCENT }}>{p.persona}</div>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-3 mb-3">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">语言风格</div>
              <div className="text-[12px] text-neutral-700 leading-relaxed">{p.speech}</div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">学习内容</div>
              <div className="text-[12px] text-neutral-700 leading-relaxed">{p.learning}</div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">边界规则</div>
              <div className="text-[12px] text-neutral-700 leading-relaxed">{p.boundary}</div>
            </div>
          </div>
          <div className="rounded-xl p-3 bg-neutral-50 border border-neutral-100">
            <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1">示例对话</div>
            <div className="text-[12px] text-neutral-700 leading-relaxed italic">{p.example}</div>
          </div>
        </div>
      ))}
    </div>

    {/* 教育法循环 */}
    <div className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: ACCENT }}>
      <BookOpen className="inline-block w-3.5 h-3.5 mr-1.5 -mt-0.5" />
      教育法循环 · 6 个写进 prompt 的硬规则
    </div>
    <div className="grid md:grid-cols-2 gap-3">
      {PEDAGOGY_LOOPS.map((p) => (
        <div key={p.num} className="rounded-2xl border border-neutral-200 p-4 bg-white">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-[11px] font-bold tabular-nums" style={{ color: ACCENT }}>{p.num}</span>
            <div className="text-sm font-bold text-neutral-900 leading-snug">{p.name}</div>
          </div>
          <div className="text-[12px] text-neutral-600 leading-relaxed">{p.detail}</div>
        </div>
      ))}
    </div>
  </Card>
);
