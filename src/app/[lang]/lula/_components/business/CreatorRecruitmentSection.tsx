'use client';

import { useState } from 'react';
import { Copy, MessageCircle, Sparkles } from 'lucide-react';
import { ACCENT, ACCENT_LIGHT, Card, SectionLabel, SectionTitle } from '../../_shared';

type PlatformType = 'xiaohongshu' | 'douyin';

const PLATFORM_COPY: Record<
  PlatformType,
  {
    label: string;
    title: string;
    subtitle: string;
    body: string;
    dm: string;
    interviewOpen: string;
  }
> = {
  xiaohongshu: {
    label: '小红书',
    title: '招募妈妈体验官｜一起把一个无屏 AI 毛绒玩具带给更多家庭',
    subtitle: '适合发小红书笔记、群公告、私信邀约，语气更真实、更像妈妈之间聊天。',
    body: `我们在做一个给孩子用的无屏 AI 毛绒玩具。

它不是平板，也不是手机，而是一个孩子可以抱着、可以说话、可以听故事的小朋友。孩子喊它，它会回应；睡前可以讲故事；爸妈忙的时候，可以陪孩子聊几句；断网的时候，也能当普通故事机用。

现在我们想找一批真正懂孩子、懂妈妈焦虑的人，一起做第一批内容和带货。

如果你平时会刷小红书、会分享育儿日常、会写孩子吃饭/睡觉/早教/少看屏幕这些真实场景，或者你本身就是妈妈、带过孩子、懂家长在买儿童产品时最担心什么，我们希望和你聊聊。

这份工作不是让你硬背产品参数，也不是让你夸张吆喝。

我们更希望你用真实妈妈的视角讲清楚：
孩子为什么需要一个不伤眼的陪伴玩具；
爸妈为什么不想再把手机塞给孩子；
老人带娃时为什么需要一个简单好用的故事机；
一个会说话的毛绒玩具，具体能帮家庭解决什么小问题。

薪资范围：6k-8k/月。

工作内容会围绕小红书图文/短视频、产品试用反馈、评论区答疑、妈妈群种草和内容复盘展开。我们会提供样机、基础话术和产品素材，但更看重你自己的真实表达。

如果你对儿童产品、母婴内容、AI 玩具、早教启蒙感兴趣，也愿意和我们一起把一个新产品从 0 做出来，可以把你的简单介绍、过往内容账号或一段自我介绍发给我们。

不用包装得很职业。
我们更想看到的是：你是不是真的懂孩子，能不能把妈妈心里的话讲出来。`,
    dm: `你好，我们在做一款给孩子用的无屏 AI 毛绒玩具，想招募一批妈妈体验官/内容带货伙伴，薪资 6k-8k/月。

看你的小红书内容很真实，比较像我们想找的方向：不是硬卖货，而是能从妈妈视角讲孩子陪伴、少看屏幕、哄睡、启蒙这些场景。

如果你感兴趣，我们可以约 15-20 分钟简单聊一下。`,
    interviewOpen: `我们先简单介绍一下项目。

我们做的是一个儿童 AI 毛绒玩具，核心卖点是无屏、能聊天、能讲故事、能做一些陪伴和启蒙场景。我们现在找的不是传统主播，而是能站在妈妈视角，把产品讲成真实育儿场景的人。

今天主要想听三件事：你平时怎么表达育儿内容、你怎么看孩子少看屏幕这件事、以及你能不能把这个产品讲得像一个妈妈真的会推荐给另一个妈妈。`,
  },
  douyin: {
    label: '抖音',
    title: '招募抖音带货妈妈｜儿童 AI 毛绒玩具，6k-8k/月',
    subtitle: '适合发抖音招聘视频口播、直播间招募、达人私信邀约，语气更短、更直接。',
    body: `我们正在招募抖音方向的妈妈带货伙伴。

产品是一款给孩子用的无屏 AI 毛绒玩具。

你可以把它理解成：一个孩子能抱着玩的 AI 小伙伴。它能聊天、能讲故事、能哄睡，也能在爸妈忙的时候陪孩子说几句话。重点是没有屏幕，不用让孩子一直盯着手机和平板。

我们现在需要会表达、敢出镜、懂孩子场景的人，把这个产品讲给更多家长听。

薪资：6k-8k/月。

你需要做的不是照着参数念稿，而是把产品演出来、讲明白：
孩子喊它，它怎么回应；
睡前它怎么讲故事；
孩子不想吃饭、不想睡觉、总想玩手机时，家长为什么会需要它；
为什么无屏陪伴比直接给孩子手机更容易让家长接受。

如果你做过抖音短视频、直播带货、母婴内容、玩具内容，或者你本身就是妈妈，平时很懂孩子和家长的沟通方式，都可以来聊。

我们会提供产品样机、基础脚本、直播卖点和素材，你需要负责把它讲得自然、真实、有转化。

这个岗位更适合三类人：
第一，镜头前表达自然，不怕说话；
第二，懂妈妈买儿童产品时最在意什么；
第三，愿意反复试脚本、试直播话术、看数据复盘。

如果你感兴趣，可以发一段 30 秒自我介绍，或者发你之前做过的短视频/直播片段。

我们想找的不是喊得最大声的人，而是能让家长听完觉得“这个东西我家孩子可能真的用得上”的人。`,
    dm: `你好，我们这边在做一款儿童无屏 AI 毛绒玩具，正在招募抖音方向的妈妈带货伙伴，薪资 6k-8k/月。

主要做短视频口播、直播讲解和产品演示。不是硬背参数，更需要能把孩子陪伴、哄睡、少看屏幕这些场景讲得自然。

如果你方便，可以发我一个过往视频/直播片段，或者我们约个 15 分钟简单聊一下。`,
    interviewOpen: `我先把项目讲清楚。

我们做的是儿童 AI 毛绒玩具，卖点很简单：无屏、能聊天、能讲故事、孩子能抱着玩。抖音上不适合讲太多技术词，核心是把场景演出来，让家长 3 秒内知道它解决什么问题。

今天我们主要看你三点：镜头表达是否自然、能不能把卖点讲成孩子场景、面对家长质疑时能不能解释清楚。`,
  },
};

export function CreatorRecruitmentSection() {
  const [active, setActive] = useState<PlatformType>('xiaohongshu');
  const copy = PLATFORM_COPY[active];

  return (
    <Card id="creator-recruitment" delay={0.64}>
      <SectionLabel>28 · 宝妈带货招募 / 面试文案</SectionLabel>
      <SectionTitle>
        <MessageCircle className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
        直接给候选人看的正文，小红书 / 抖音两套口径
      </SectionTitle>

      <div className="flex flex-wrap gap-2 mb-6">
        {(Object.keys(PLATFORM_COPY) as PlatformType[]).map((key) => {
          const item = PLATFORM_COPY[key];
          const isActive = active === key;

          return (
            <button
              key={key}
              type="button"
              onClick={() => setActive(key)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                isActive ? 'text-white' : 'text-neutral-600 hover:text-neutral-900'
              }`}
              style={{
                backgroundColor: isActive ? ACCENT : '#F3F4F6',
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="rounded-2xl p-5 mb-6" style={{ backgroundColor: ACCENT_LIGHT }}>
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4" style={{ color: ACCENT }} />
          <div className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>
            {copy.label} · 发布正文
          </div>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-neutral-900 leading-tight mb-2">{copy.title}</h3>
        <p className="text-[12px] leading-relaxed" style={{ color: ACCENT }}>{copy.subtitle}</p>
      </div>

      <CopyBlock title="平台发布正文" text={copy.body} />

      <div className="grid md:grid-cols-2 gap-4 mt-5">
        <CopyBlock title="私信邀约正文" text={copy.dm} compact />
        <CopyBlock title="面试开场介绍" text={copy.interviewOpen} compact />
      </div>
    </Card>
  );
}

function CopyBlock({ title, text, compact = false }: { title: string; text: string; compact?: boolean }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-500">{title}</div>
        <div className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-2 py-1 text-[11px] font-semibold text-neutral-500">
          <Copy className="w-3.5 h-3.5" />
          可直接复制
        </div>
      </div>
      <div
        className={`whitespace-pre-line rounded-xl bg-neutral-50 border border-neutral-100 p-4 text-neutral-700 leading-relaxed ${
          compact ? 'text-[13px]' : 'text-sm'
        }`}
      >
        {text}
      </div>
    </div>
  );
}
