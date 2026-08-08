'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowRight,
  Check,
  Eye,
  FileCode2,
  Github,
  Hand,
  PackageCheck,
  ShieldCheck,
} from 'lucide-react';
import { MotionConfig, motion } from 'motion/react';

type Locale = 'cn' | 'en';

const copy = {
  cn: {
    eyebrow: 'macOS 原生代码交接工具',
    title: '把刚刚好的代码上下文，拖给任何 AI。',
    intro: 'DiffPuck 安静地停在桌面边缘。选择 Git 修改，拖出原文件或结构化 Pack；也可以把代码 Agent 找到的关键证据交给另一个模型复核。',
    primary: '在 GitHub 查看',
    secondary: '看看怎样工作',
    stateTitle: '平时安静，需要时醒来',
    stateBody: '菜单栏图标用清晰的 Normal / Active 状态告诉你 DiffPuck 是否正在工作，不占据额外桌面空间。',
    workflowTitle: 'Pick → Pack → Pass',
    workflowIntro: '不必上传整个仓库，也不必逐个寻找文件。',
    steps: [
      ['Pick', '跨目录选择真正相关的本地修改。'],
      ['Pack', '用 Diff、源码与路径组织可独立理解的上下文。'],
      ['Pass', '把普通文件或 Markdown Pack 拖给任意 AI。'],
    ],
    twoPaths: '一块 Puck，两条最短路径',
    reviewTitle: 'Review Changes',
    reviewBody: '像 Finder 一样选择散落在不同目录里的修改，再一次拖出原文件或 Review Pack。',
    handoffTitle: 'Agent Handoff',
    handoffBody: '让代码 Agent 只提交根因假设与证据引用，DiffPuck 回到仓库校验、裁剪并冻结交接内容。',
    productTitle: '三种状态，始终在手边',
    productBody: '收起时只保留一枚 Puck；悬停快速预览；固定后完成搜索、多选和 Pack 生成。',
    trustTitle: '代码事实留在本地，最后一步由你完成',
    trust: [
      ['只读 Git', '只读取状态、内容和 Diff，不提供 Stage、Commit、Reset 或 Discard。'],
      ['本地生成', '不读取聊天记录，不调用网页 AI API，也不会自动上传代码。'],
      ['敏感内容保护', '敏感文件需要明确确认；Review Pack 与 Handoff Pack 默认排除或遮蔽。'],
    ],
    finalTitle: '把下一次代码交接，变成一次拖动。',
    finalBody: 'Pick changes. Drag anywhere.',
  },
  en: {
    eyebrow: 'Native code handoff for macOS',
    title: 'Hand the right code context to any AI.',
    intro: 'DiffPuck rests quietly at the edge of your desktop. Pick Git changes, drag original files or a structured Pack, and hand an agent’s evidence to another model for review.',
    primary: 'View on GitHub',
    secondary: 'See how it works',
    stateTitle: 'Quiet by default. Awake when needed.',
    stateBody: 'Clear Normal and Active menu bar states show when DiffPuck is working without taking over your desktop.',
    workflowTitle: 'Pick → Pack → Pass',
    workflowIntro: 'No whole-repo upload. No hunting for files one by one.',
    steps: [
      ['Pick', 'Select the local changes that actually matter, across folders.'],
      ['Pack', 'Combine diffs, source, and paths into independently readable context.'],
      ['Pass', 'Drag standard files or a Markdown Pack to any AI.'],
    ],
    twoPaths: 'One Puck. Two short paths.',
    reviewTitle: 'Review Changes',
    reviewBody: 'Select changes across folders with Finder-like semantics, then drag original files or a Review Pack in one move.',
    handoffTitle: 'Agent Handoff',
    handoffBody: 'Let a coding agent submit only its root-cause hypothesis and evidence references. DiffPuck verifies, trims, and freezes the handoff from the repository.',
    productTitle: 'Three states, always within reach',
    productBody: 'A compact Puck when idle, a quick preview on hover, and a pinned view for search, selection, and Pack generation.',
    trustTitle: 'Repository facts stay local. You make the final move.',
    trust: [
      ['Read-only Git', 'Reads status, content, and diffs—without Stage, Commit, Reset, or Discard.'],
      ['Generated locally', 'Never reads chat history, calls a web AI API, or uploads code automatically.'],
      ['Sensitive by design', 'Sensitive files require confirmation; generated Packs exclude or redact them by default.'],
    ],
    finalTitle: 'Turn your next code handoff into one drag.',
    finalBody: 'Pick changes. Drag anywhere.',
  },
} as const;

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

export default function DiffPuckLanding({ lang }: { lang: Locale }) {
  const t = copy[lang];

  return (
    <MotionConfig reducedMotion="user">
      <div className="overflow-hidden bg-[#fbfaf8] text-[#1f1c37]">
        <section className="relative border-b border-[#27204a]/8 px-5 pb-20 pt-16 sm:px-8 lg:pb-28 lg:pt-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <motion.div {...reveal} className="relative z-10">
              <div className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-[#6256db]">
                <span className="h-2 w-2 rounded-full bg-[#ff7253]" />
                {t.eyebrow}
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#211d3f] sm:text-6xl lg:text-7xl">
                {t.title}
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-[#68647a] sm:text-lg">
                {t.intro}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://github.com/ooAKLoo/DiffPuck"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#211d3f] px-6 text-sm font-semibold text-white outline-none transition-colors hover:bg-[#332d59] focus-visible:ring-2 focus-visible:ring-[#6256db] focus-visible:ring-offset-2"
                >
                  <Github className="h-4 w-4" />
                  {t.primary}
                </a>
                <a
                  href="#workflow"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#27204a]/15 px-6 text-sm font-semibold text-[#211d3f] outline-none transition-colors hover:bg-white focus-visible:ring-2 focus-visible:ring-[#6256db] focus-visible:ring-offset-2"
                >
                  {t.secondary}
                  <ArrowDown className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-2xl"
            >
              <div className="absolute inset-x-[12%] bottom-[4%] h-[35%] rounded-full bg-[#6256db]/10 blur-3xl" />
              <Image
                src="/assets/software/diffpuck/app-icon.png"
                alt="DiffPuck app icon"
                width={512}
                height={512}
                priority
                className="relative mx-auto w-[82%] max-w-[520px]"
              />
              <div className="relative -mt-4 overflow-hidden rounded-2xl border border-white/70 bg-white shadow-[0_24px_70px_rgba(34,29,63,0.13)] sm:-mt-10">
                <Image
                  src="/assets/software/diffpuck/menu-bar-states.png"
                  alt="DiffPuck Normal and Active menu bar states"
                  width={1088}
                  height={608}
                  className="h-auto w-full"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
          <motion.div {...reveal} className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="overflow-hidden rounded-2xl border border-[#27204a]/10 bg-[#edf3fa]">
              <Image
                src="/assets/software/diffpuck/finder-context.png"
                alt="DiffPuck in Finder and Dock"
                width={1088}
                height={608}
                className="h-auto w-full"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#6256db]">Normal / Active</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">{t.stateTitle}</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#6d697b] sm:text-lg">{t.stateBody}</p>
            </div>
          </motion.div>
        </section>

        <section id="workflow" className="scroll-mt-20 border-y border-[#27204a]/8 px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <motion.div {...reveal} className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">{t.workflowTitle}</h2>
              <p className="mt-5 text-lg text-[#6d697b]">{t.workflowIntro}</p>
            </motion.div>
            <div className="mt-14 grid gap-0 border-y border-[#27204a]/10 md:grid-cols-3">
              {t.steps.map(([title, body], index) => {
                const icons = [Check, PackageCheck, Hand];
                const Icon = icons[index];
                return (
                  <motion.div
                    key={title}
                    {...reveal}
                    transition={{ ...reveal.transition, delay: index * 0.08 }}
                    className="border-b border-[#27204a]/10 py-8 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6256db]/9 text-[#5547d9]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-7 text-xs font-semibold tracking-[0.16em] text-[#9995a6]">0{index + 1}</div>
                    <h3 className="mt-2 text-2xl font-semibold">{title}</h3>
                    <p className="mt-3 max-w-sm leading-7 text-[#6d697b]">{body}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <motion.h2 {...reveal} className="max-w-3xl text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {t.twoPaths}
            </motion.h2>
            <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
              <motion.article {...reveal}>
                <div className="flex items-center gap-3 text-sm font-semibold text-[#6256db]">
                  <Eye className="h-5 w-5" /> 01
                </div>
                <h3 className="mt-5 text-2xl font-semibold">{t.reviewTitle}</h3>
                <p className="mt-4 max-w-xl leading-7 text-[#6d697b]">{t.reviewBody}</p>
                <div className="mt-8 flex min-h-[360px] items-center justify-center overflow-hidden rounded-2xl bg-[#f5f3f8] px-8 pt-8">
                  <Image
                    src="/assets/software/diffpuck/shelf-pinned-changes.png"
                    alt="DiffPuck pinned changes view"
                    width={880}
                    height={1440}
                    className="w-[72%] max-w-[330px] translate-y-12 drop-shadow-[0_24px_40px_rgba(33,29,63,0.18)]"
                  />
                </div>
              </motion.article>

              <motion.article {...reveal} transition={{ ...reveal.transition, delay: 0.08 }}>
                <div className="flex items-center gap-3 text-sm font-semibold text-[#2aa99a]">
                  <FileCode2 className="h-5 w-5" /> 02
                </div>
                <h3 className="mt-5 text-2xl font-semibold">{t.handoffTitle}</h3>
                <p className="mt-4 max-w-xl leading-7 text-[#6d697b]">{t.handoffBody}</p>
                <div className="mt-8 flex min-h-[360px] items-center justify-center overflow-hidden rounded-2xl bg-[#f1f7f6] px-8 py-10">
                  <div className="relative flex w-full max-w-md items-center justify-between gap-4">
                    <div className="rounded-xl border border-[#27204a]/10 bg-white px-4 py-3 text-sm font-medium text-[#211d3f]">Agent evidence</div>
                    <ArrowRight className="h-5 w-5 shrink-0 text-[#aaa5b3]" />
                    <div className="relative rounded-2xl bg-[#211d3f] px-5 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(33,29,63,0.18)]">
                      Smart Handoff Pack
                      <span className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-[#ff7253] ring-4 ring-[#f1f7f6]" />
                    </div>
                  </div>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        <section className="border-y border-[#27204a]/8 px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <motion.div {...reveal}>
              <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">{t.productTitle}</h2>
              <p className="mt-6 text-base leading-8 text-[#6d697b] sm:text-lg">{t.productBody}</p>
            </motion.div>
            <motion.div {...reveal} className="grid grid-cols-2 items-end gap-4 sm:grid-cols-3">
              <div className="col-span-2 flex min-h-36 items-center justify-center rounded-2xl bg-[#252142] p-8 sm:col-span-3">
                <Image src="/assets/software/diffpuck/shelf-collapsed.png" alt="Collapsed Puck" width={352} height={96} className="h-auto w-full max-w-[352px]" />
              </div>
              <div className="flex min-h-72 items-end justify-center overflow-hidden rounded-2xl bg-[#e9e7f1] px-5 pt-8">
                <Image src="/assets/software/diffpuck/shelf-hover-preview.png" alt="Changes Preview" width={784} height={840} className="w-full max-w-[290px] drop-shadow-[0_16px_32px_rgba(33,29,63,0.2)]" />
              </div>
              <div className="flex min-h-72 items-end justify-center overflow-hidden rounded-2xl bg-[#e9e7f1] px-5 pt-8">
                <Image src="/assets/software/diffpuck/shelf-pinned-changes.png" alt="Pinned Changes" width={880} height={1440} className="w-[76%] max-w-[225px] translate-y-24 drop-shadow-[0_16px_32px_rgba(33,29,63,0.2)]" />
              </div>
              <div className="col-span-2 hidden min-h-72 items-center justify-center rounded-2xl bg-[#ddd9eb] p-8 sm:flex sm:col-span-1">
                <Image src="/assets/software/diffpuck/app-icon.png" alt="DiffPuck icon" width={512} height={512} className="h-auto w-full max-w-[250px]" />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#211d3f] px-5 py-20 text-white sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <motion.div {...reveal}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#7ee0cd]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h2 className="mt-7 max-w-4xl text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">{t.trustTitle}</h2>
            </motion.div>
            <div className="mt-14 grid border-y border-white/12 md:grid-cols-3">
              {t.trust.map(([title, body], index) => (
                <motion.div
                  key={title}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: index * 0.08 }}
                  className="border-b border-white/12 py-8 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-24 text-center sm:px-8 lg:py-32">
          <motion.div {...reveal} className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-6xl">{t.finalTitle}</h2>
            <p className="mt-6 text-lg text-[#6d697b]">{t.finalBody}</p>
            <a
              href="https://github.com/ooAKLoo/DiffPuck"
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#6256db] px-7 text-sm font-semibold text-white outline-none transition-colors hover:bg-[#5145c8] focus-visible:ring-2 focus-visible:ring-[#6256db] focus-visible:ring-offset-2"
            >
              <Github className="h-4 w-4" />
              {t.primary}
            </a>
            <div className="mt-6">
              <Link href={`/${lang}`} className="text-sm text-[#777285] underline-offset-4 hover:text-[#211d3f] hover:underline">
                ooAKLoo
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </MotionConfig>
  );
}
