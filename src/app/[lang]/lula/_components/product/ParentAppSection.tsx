import { Smartphone } from 'lucide-react';
import { LulaZoomImage } from '@/components/LulaZoomImage';
import { ACCENT, ACCENT_LIGHT, Card, SectionLabel, SectionTitle } from '../../_shared';

interface Boundary {
  title: string;
  desc: string;
}

const BOUNDARIES: Boundary[] = [
  {
    title: '成长报告 · 温情正向',
    desc: '今天孩子问了什么有趣的问题、学了什么 —— 不强调"管控"，避免监控感。',
  },
  {
    title: '软商品商城',
    desc: 'IP 联名外衣 / 换装皮肤 / 内容包 / 高级方言包，App 内购一次买断。',
  },
  {
    title: '父母音录制 · 声音克隆',
    desc: '5 分钟引导式录音生成专属音色，留守儿童也能每天听到爸妈讲故事。',
  },
  {
    title: '远程留言 · 微信叫醒玩具',
    desc: '家长在 App 录一段话推到玩具；微信小程序可触发玩具主动开口召唤。',
  },
  {
    title: '使用时长 · 防沉迷',
    desc: '按月龄推荐每日时长，超时玩具自动进入"休息状态"，家长可一键解除。',
  },
  {
    title: '县代理入口',
    desc: '本地微信群、附近用户活动、上门服务预约 —— 把线上 App 拉回线下网络。',
  },
];

const SCREENS = [
  {
    src: '/lula/software/screens/parent-app-01.png',
    caption: '入口流：欢迎页 · 智能伙伴主页 · 哄睡故事机 · 配对设备',
  },
  {
    src: '/lula/software/screens/parent-app-02.png',
    caption: '成长流：每日数据 · 周报 · 性格雷达 · 互动详情',
  },
];

export const ParentAppSection = () => (
  <Card id="parent-app" delay={0.55}>
    <SectionLabel>17 · 家长后台 · 软件边界</SectionLabel>
    <SectionTitle>
      <Smartphone className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
      家长 App 的边界 —— 温情陪伴，而不是监控仪表盘
    </SectionTitle>

    <p className="text-sm text-neutral-600 leading-relaxed mb-6">
      家长 App 不是"看孩子在玩什么"的监视器，而是
      <b className="text-neutral-900">连接父母与玩具的中转站</b>
      ——录声音、推留言、买内容、看成长，全部围绕"亲子参与感"设计。
    </p>

    <div className="grid md:grid-cols-2 gap-4 mb-8">
      {SCREENS.map((s) => (
        <div
          key={s.src}
          className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3"
        >
          <div className="rounded-xl overflow-hidden bg-white">
            <LulaZoomImage
              src={s.src}
              alt={s.caption}
              className="w-full h-auto"
            />
          </div>
          <div className="text-[12px] text-neutral-600 leading-relaxed mt-3 px-1">
            {s.caption}
          </div>
        </div>
      ))}
    </div>

    <div
      className="rounded-2xl border border-blue-100 p-5"
      style={{ backgroundColor: ACCENT_LIGHT }}
    >
      <div className="text-[11px] font-bold uppercase tracking-[0.22em] mb-4" style={{ color: ACCENT }}>
        软件边界 · 六件事
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {BOUNDARIES.map((b) => (
          <div
            key={b.title}
            className="rounded-xl bg-white border border-blue-100 p-4"
          >
            <div className="text-sm font-bold text-neutral-900 mb-1.5 leading-snug">
              {b.title}
            </div>
            <div className="text-[12px] text-neutral-600 leading-relaxed">
              {b.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  </Card>
);
