'use client';

import { useParams } from 'next/navigation';
import { motion, MotionConfig, type Variants } from 'motion/react';
import {
  HardDrive,
  Cpu,
  Smartphone,
  Cloud,
  Shield,
  Sparkles,
  Users,
  CheckCircle2,
  Circle,
  Loader,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

const ACCENT = '#2563EB';
const ACCENT_LIGHT = '#EFF6FF';

const REVEAL_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: REVEAL_EASE },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: REVEAL_EASE },
  },
};

const cardHover = {
  whileHover: { y: -3 },
  whileTap: { scale: 0.985 },
  transition: { type: 'spring' as const, stiffness: 400, damping: 28 },
};

type Locale = 'en' | 'cn';

interface PitchContent {
  badge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDesc: string;
  meta: { team: [string, string]; stage: [string, string] };
  problem: { label: string; title: string; body: React.ReactNode };
  solution: { label: string; title: string; body: React.ReactNode };
  positioning: {
    label: string;
    title: string;
    vsLabel: string;
    cards: { target: string; body: string }[];
  };
  users: { label: string; title: string; items: React.ReactNode[] };
  tech: {
    label: string;
    title: string;
    hwHeading: string;
    hwBody: string;
    swHeading: string;
    swBody: string;
    longTermLabel: string;
    longTermBody: string;
  };
  team: { label: string; title: string; members: { name: string; role: string; body: string }[] };
  stage: { label: string; title: string; body: React.ReactNode };
  roadmap: {
    label: string;
    statusLabels: { completed: string; 'in-progress': string; next: string };
    stagePrefix: string;
    items: { title: string; body: string; status: 'completed' | 'in-progress' | 'next' }[];
    cta: string;
  };
  vision: { label: string; sentence: React.ReactNode };
  footer: string;
}

const CONTENT: Record<Locale, PitchContent> = {
  en: {
    badge: 'InnoX Summer Camp · Project Pitch',
    heroTitle: 'Portable AI Storage Drive',
    heroSubtitle: '随行云盘',
    heroDesc:
      'A portable AI-powered personal storage device that combines the physical form of a traditional hard drive with the intelligence of cloud storage — helping users manage personal data in a more private, portable, and user-friendly way.',
    meta: {
      team: ['Team Size', '2 members'],
      stage: ['Stage', 'Software done · HW iterating'],
    },
    problem: {
      label: '01 · Problem',
      title: "Personal data is exploding, but storage hasn't caught up.",
      body: (
        <>
          <p>
            Today, users are generating more personal data than ever before — photos, videos,
            documents, audio files, and work materials. Yet current storage solutions still have
            clear limitations.
          </p>
          <p>
            <span className="font-medium text-neutral-700">Cloud drives</span> are convenient, but
            raise concerns around privacy, subscription costs, upload speed, and long-term data
            ownership. <span className="font-medium text-neutral-700">NAS products</span> offer
            privacy and local storage, but are often too complex and expensive for ordinary users.{' '}
            <span className="font-medium text-neutral-700">Traditional hard drives</span> are
            portable and private, but not intelligent — users still organize folders, search, and
            remember locations manually.
          </p>
          <p>
            For users who travel, take photos, shoot videos, or work across multiple devices, there
            is a strong need for a storage product that is{' '}
            <span className="font-medium text-neutral-700">
              portable like a hard drive, private like local storage, and intelligent like modern
              cloud services
            </span>
            .
          </p>
        </>
      ),
    },
    solution: {
      label: '02 · Solution',
      title: 'A new kind of personal storage product.',
      body: (
        <>
          <p>
            <span className="font-medium text-neutral-700">
              随行云盘 / Portable AI Storage Drive
            </span>{' '}
            combines the portability of a traditional hard drive, the privacy of local storage, the
            intelligence of AI-powered file management, and the ease of interaction of a modern
            mobile app.
          </p>
          <p>
            Users connect through their phone or computer, back up photos, videos, documents, and
            other files, and use AI features to search, organize, summarize, and interact with their
            personal data — naturally, without managing complicated folder structures.
          </p>
        </>
      ),
    },
    positioning: {
      label: '03 · Product Positioning',
      title: 'Not another complicated device — a consumer-friendly data companion.',
      vsLabel: 'vs.',
      cards: [
        { target: 'NAS', body: 'More portable, easier to use, and better suited for ordinary consumers.' },
        { target: 'Cloud Drives', body: 'Stronger privacy, local data ownership, no full dependence on third-party clouds.' },
        { target: 'Traditional HDD', body: 'Smarter, more interactive, and better integrated with mobile devices and AI.' },
      ],
    },
    users: {
      label: '04 · Target Users',
      title: 'Who this is built for.',
      items: [
        <>Travel &amp; outdoor users who shoot many photos and videos</>,
        <>Content creators needing portable storage and quick backup</>,
        <>Students &amp; young professionals juggling multiple devices</>,
        <>Families wanting to store photos and memories privately</>,
        <>Privacy-minded users who find NAS too difficult</>,
      ],
    },
    tech: {
      label: '05 · Technology Direction',
      title: 'Hardware and software, built together.',
      hwHeading: 'Hardware',
      hwBody:
        'Portable device structure design, PCB and schematic design, storage media integration, wireless connectivity, power management, and embedded system development.',
      swHeading: 'Software',
      swBody:
        'Mobile app, device connection, file browsing, media management, backup experience, AI-powered search, and user-friendly interaction design.',
      longTermLabel: 'Long term:',
      longTermBody:
        'a local-first AI personal data system, where users interact with their files while keeping data private and under their control.',
    },
    team: {
      label: '06 · Team',
      title: 'Mobile + product + embedded + hardware, in one team of two.',
      members: [
        {
          name: 'Dongju Yang',
          role: 'Mobile · Product',
          body: 'Experience at Huawei, TikTok, and DJI in mobile application development, product design, UX, software architecture, and hardware-software interaction.',
        },
        {
          name: 'Li Hao',
          role: 'Embedded · Hardware',
          body: 'Former embedded engineer at DJI, focused on firmware and board-level systems. In this project: embedded system development, hardware-side feasibility, board-level engineering, and device integration.',
        },
      ],
    },
    stage: {
      label: '07 · Current Stage',
      title: 'Software done. Hardware optimizing. Real users paying.',
      body: (
        <>
          <p>
            We have completed the core software development — both mobile application and PC client.
            On the hardware and embedded side, we are conducting low-level performance tuning and
            technical optimization.
          </p>
          <p>
            Rather than building behind closed doors, we&apos;ve been doing{' '}
            <span className="font-medium text-neutral-700">small-scale real-world validation</span> —
            talking with potential users in cafés and other everyday settings. Some of those
            conversations turned into early intention orders.
          </p>
          <p>
            This gives us initial confidence that the problem is real — and that some users are
            willing to pay for a more portable, private, and intelligent personal storage product.
          </p>
        </>
      ),
    },
    roadmap: {
      label: '08 · Development Roadmap',
      statusLabels: { completed: 'Completed', 'in-progress': 'In Progress', next: 'Next' },
      stagePrefix: 'Stage',
      items: [
        { title: 'Core Software Development', body: 'Mobile app and PC client, including device connection, file management, and core user interaction flows.', status: 'completed' },
        { title: 'Embedded System Optimization', body: 'Low-level performance tuning, storage performance optimization, device stability, hardware-software integration.', status: 'in-progress' },
        { title: 'Hardware Prototype Iteration', body: 'Refine hardware structure, PCB and schematic design, storage media integration, power management, product form factor.', status: 'next' },
        { title: 'User Validation & Early Orders', body: 'Continue offline interviews, collect feedback from potential users, validate willingness to pay through intention orders.', status: 'in-progress' },
        { title: 'Prototype & Pilot Testing', body: 'Build a complete working prototype for early users to test, collect usage feedback, prepare for small-batch production.', status: 'next' },
      ],
      cta: 'We are looking for partners and mentors who can help us move from early-stage idea to a clearer prototype with stronger user value and feasibility.',
    },
    vision: {
      label: '09 · Vision',
      sentence: (
        <>
          Personal data storage should become more{' '}
          <span style={{ color: '#93C5FD' }}>private</span>, more{' '}
          <span style={{ color: '#93C5FD' }}>intelligent</span>, more{' '}
          <span style={{ color: '#93C5FD' }}>portable</span>, and easier to use.
        </>
      ),
    },
    footer: 'Portable AI Storage Drive · 随行云盘 · Pitch document for InnoX Summer Camp',
  },

  cn: {
    badge: 'InnoX 暑期营 · 项目宣讲',
    heroTitle: '随行云盘',
    heroSubtitle: 'Portable AI Storage Drive',
    heroDesc:
      '一款便携式 AI 个人存储设备,把传统硬盘的物理形态与云存储的智能化结合起来,以更私密、更便携、更易用的方式帮助用户管理个人数据。',
    meta: {
      team: ['团队规模', '2 人'],
      stage: ['进度', '软件完成 · 硬件迭代中'],
    },
    problem: {
      label: '01 · 问题',
      title: '个人数据爆炸式增长,存储方案却没跟上。',
      body: (
        <>
          <p>
            如今,用户产生的个人数据前所未有地多——照片、视频、文档、音频、工作资料。然而现有存储方案仍有明显局限。
          </p>
          <p>
            <span className="font-medium text-neutral-700">云盘</span>便利,但带来隐私、订阅成本、上传速度、长期数据所有权方面的顾虑。
            <span className="font-medium text-neutral-700">NAS 产品</span>提供本地存储和隐私,但对普通用户来说太复杂、太贵。
            <span className="font-medium text-neutral-700">传统硬盘</span>便携且私密,但不够智能——用户仍需手动整理文件夹、搜索、记忆位置。
          </p>
          <p>
            对那些经常旅行、拍照、录视频或在多设备间工作的用户来说,他们迫切需要一款
            <span className="font-medium text-neutral-700">
              像硬盘一样便携、像本地存储一样私密、像现代云服务一样智能
            </span>
            的产品。
          </p>
        </>
      ),
    },
    solution: {
      label: '02 · 解决方案',
      title: '一种全新的个人存储产品。',
      body: (
        <>
          <p>
            <span className="font-medium text-neutral-700">
              随行云盘 / Portable AI Storage Drive
            </span>{' '}
            把传统硬盘的便携性、本地存储的私密性、AI 文件管理的智能化,与现代移动 App 的交互体验融为一体。
          </p>
          <p>
            用户通过手机或电脑连接设备,备份照片、视频、文档,并用 AI 功能搜索、整理、总结、对话——自然交互,不再纠结复杂的文件夹结构。
          </p>
        </>
      ),
    },
    positioning: {
      label: '03 · 产品定位',
      title: '不是又一台复杂设备——而是一个面向消费者的数据伴侣。',
      vsLabel: '对比',
      cards: [
        { target: 'NAS', body: '更便携、更易用,更适合普通消费者。' },
        { target: '云盘', body: '更强的隐私、本地数据所有权,不完全依赖第三方云服务。' },
        { target: '传统硬盘', body: '更智能、更具交互性,与移动设备和 AI 深度集成。' },
      ],
    },
    users: {
      label: '04 · 目标用户',
      title: '我们为谁打造。',
      items: [
        <>经常旅行、户外活动,拍大量照片和视频的用户</>,
        <>需要便携存储、快速备份的内容创作者</>,
        <>在多设备间切换工作的学生与年轻职场人</>,
        <>希望私密保存照片与回忆的家庭</>,
        <>重视隐私但又觉得 NAS 太难用的用户</>,
      ],
    },
    tech: {
      label: '05 · 技术方向',
      title: '硬件与软件,共同打造。',
      hwHeading: '硬件',
      hwBody:
        '便携设备结构设计、PCB 与原理图设计、存储介质集成、无线连接、电源管理、嵌入式系统开发。',
      swHeading: '软件',
      swBody:
        '移动 App、设备连接、文件浏览、媒体管理、备份体验、AI 搜索、易用的交互设计。',
      longTermLabel: '长期愿景:',
      longTermBody:
        '一个本地优先的 AI 个人数据系统,用户既能与自己的文件交互,又能让数据保持私密、自己掌控。',
    },
    team: {
      label: '06 · 团队',
      title: '移动 + 产品 + 嵌入式 + 硬件,二人组合。',
      members: [
        {
          name: '杨东举',
          role: '移动端 · 产品',
          body: '曾就职于华为、字节跳动、大疆。具备移动应用开发、产品设计、用户体验、软件架构、软硬件交互场景的经验。',
        },
        {
          name: '李浩',
          role: '嵌入式 · 硬件',
          body: '曾任大疆嵌入式工程师,专注于固件与板级系统开发。本项目中负责嵌入式系统开发、硬件可行性、板级工程、设备集成。',
        },
      ],
    },
    stage: {
      label: '07 · 当前阶段',
      title: '软件完成,硬件优化中,真实用户已在付费。',
      body: (
        <>
          <p>
            我们已完成核心软件开发——包括移动端和 PC 端。在硬件与嵌入式侧,正在进行底层性能调优与技术优化。
          </p>
          <p>
            我们没有闭门造车,而是在咖啡馆等日常场景做
            <span className="font-medium text-neutral-700">小规模的真实用户验证</span>。其中一部分访谈直接转化为早期意向订单。
          </p>
          <p>
            这给了我们初步的信心:问题真实存在——而且确实有用户愿意为更便携、更私密、更智能的个人存储产品付费。
          </p>
        </>
      ),
    },
    roadmap: {
      label: '08 · 发展路线图',
      statusLabels: { completed: '已完成', 'in-progress': '进行中', next: '下一步' },
      stagePrefix: '阶段',
      items: [
        { title: '核心软件开发', body: '移动端 App 与 PC 客户端,包括设备连接、文件管理、核心交互流程。', status: 'completed' },
        { title: '嵌入式系统优化', body: '底层性能调优、存储性能优化、设备稳定性、软硬件集成。', status: 'in-progress' },
        { title: '硬件原型迭代', body: '细化硬件结构、PCB 与原理图设计、存储介质集成、电源管理、产品形态。', status: 'next' },
        { title: '用户验证与早期订单', body: '继续线下访谈、收集潜在用户反馈、通过意向订单验证付费意愿。', status: 'in-progress' },
        { title: '原型与试点测试', body: '构建完整可工作的原型供早期用户测试,收集使用反馈,准备小批量生产。', status: 'next' },
      ],
      cta: '我们正在寻找能帮助我们从早期想法走向更清晰原型——让产品更具用户价值与可行性的伙伴和导师。',
    },
    vision: {
      label: '09 · 愿景',
      sentence: (
        <>
          个人数据存储应当变得更
          <span style={{ color: '#93C5FD' }}>私密</span>、更
          <span style={{ color: '#93C5FD' }}>智能</span>、更
          <span style={{ color: '#93C5FD' }}>便携</span>,也更易用。
        </>
      ),
    },
    footer: 'Portable AI Storage Drive · 随行云盘 · InnoX 暑期营宣讲文档',
  },
};

const Reveal = ({
  children,
  className = '',
  id,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}) => (
  <motion.section
    id={id}
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-80px' }}
    variants={{
      hidden: { opacity: 0, y: 24 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: REVEAL_EASE, delay },
      },
    }}
  >
    {children}
  </motion.section>
);

const Section = ({
  id,
  label,
  title,
  children,
}: {
  id?: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) => (
  <Reveal id={id} className="bg-white rounded-3xl p-8 md:p-12">
    <div
      className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3"
      style={{ color: ACCENT }}
    >
      {label}
    </div>
    <h2 className="text-2xl md:text-3xl font-semibold text-neutral-800 mb-6 leading-tight">
      {title}
    </h2>
    <div className="text-[15px] leading-relaxed text-neutral-600 space-y-4">{children}</div>
  </Reveal>
);

const MetaCard = ({ label, value }: { label: string; value: string }) => (
  <motion.div
    variants={fadeUpItem}
    whileHover={{ y: -2 }}
    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
    className="bg-white rounded-2xl px-5 py-4"
  >
    <div className="text-[10px] font-medium uppercase tracking-wider text-neutral-400 mb-1.5">
      {label}
    </div>
    <div className="text-[14px] font-medium text-neutral-700">{value}</div>
  </motion.div>
);

const PositioningCard = ({
  icon: Icon,
  vsLabel,
  target,
  body,
}: {
  icon: LucideIcon;
  vsLabel: string;
  target: string;
  body: string;
}) => (
  <motion.div
    variants={fadeUpItem}
    {...cardHover}
    className="bg-neutral-50 rounded-2xl p-6 flex flex-col gap-3"
  >
    <motion.div
      className="w-10 h-10 rounded-xl flex items-center justify-center"
      style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
      whileHover={{ rotate: -6, scale: 1.08 }}
      transition={{ type: 'spring', stiffness: 500, damping: 18 }}
    >
      <Icon size={18} />
    </motion.div>
    <div className="text-[13px] font-semibold text-neutral-800">
      {vsLabel} {target}
    </div>
    <div className="text-[14px] leading-relaxed text-neutral-600">{body}</div>
  </motion.div>
);

const TeamCard = ({
  name,
  role,
  body,
}: {
  name: string;
  role: string;
  body: string;
}) => (
  <motion.div
    variants={fadeUpItem}
    {...cardHover}
    className="bg-neutral-50 rounded-2xl p-6"
  >
    <div className="flex items-baseline gap-3 mb-3">
      <h3 className="text-[18px] font-semibold text-neutral-800">{name}</h3>
      <span className="text-[12px] text-neutral-400">{role}</span>
    </div>
    <p className="text-[14px] leading-relaxed text-neutral-600">{body}</p>
  </motion.div>
);

type RoadmapStatus = 'completed' | 'in-progress' | 'next';

const RoadmapItem = ({
  stage,
  title,
  status,
  statusLabel,
  body,
}: {
  stage: string;
  title: string;
  status: RoadmapStatus;
  statusLabel: string;
  body: string;
}) => {
  const meta: Record<RoadmapStatus, { Icon: LucideIcon; color: string; bg: string }> = {
    completed: { Icon: CheckCircle2, color: '#059669', bg: '#ECFDF5' },
    'in-progress': { Icon: Loader, color: '#D97706', bg: '#FFFBEB' },
    next: { Icon: Circle, color: '#6B7280', bg: '#F3F4F6' },
  };
  const { Icon, color, bg } = meta[status];

  return (
    <motion.div
      variants={fadeUpItem}
      {...cardHover}
      className="bg-neutral-50 rounded-2xl p-6 flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
          {stage}
        </span>
        <motion.span
          className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold"
          style={{ backgroundColor: bg, color }}
          animate={
            status === 'in-progress'
              ? { scale: [1, 1.04, 1] }
              : undefined
          }
          transition={
            status === 'in-progress'
              ? { duration: 1.6, repeat: Infinity, ease: 'easeInOut' }
              : undefined
          }
        >
          <Icon size={11} className={status === 'in-progress' ? 'animate-spin' : ''} />
          {statusLabel}
        </motion.span>
      </div>
      <h3 className="text-[15px] font-semibold text-neutral-800 leading-snug">{title}</h3>
      <p className="text-[13px] leading-relaxed text-neutral-600">{body}</p>
    </motion.div>
  );
};

export default function InnoxPage() {
  const params = useParams<{ lang: string }>();
  const lang: Locale = params?.lang === 'cn' ? 'cn' : 'en';
  const t = CONTENT[lang];

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#f8f8f8] py-10 md:py-16 px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-6">

          {/* Hero */}
          <motion.section
            initial="hidden"
            animate="show"
            variants={stagger}
            className="bg-white rounded-3xl p-8 md:p-14"
          >
            <motion.div variants={fadeUpItem} className="flex items-center gap-2 mb-8">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold"
                style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
              >
                <Sparkles size={12} />
                {t.badge}
              </span>
            </motion.div>

            <motion.div variants={fadeUpItem} className="flex items-start gap-5 mb-6">
              <motion.div
                className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.15 }}
                whileHover={{ rotate: -8, scale: 1.06 }}
              >
                <HardDrive size={26} />
              </motion.div>
              <div>
                <h1 className="text-3xl md:text-5xl font-semibold text-neutral-800 leading-tight tracking-tight">
                  {t.heroTitle}
                </h1>
                <p className="text-[15px] md:text-[17px] text-neutral-400 mt-2 font-medium">
                  {t.heroSubtitle}
                </p>
              </div>
            </motion.div>

            <motion.p
              variants={fadeUpItem}
              className="text-[16px] md:text-[18px] leading-relaxed text-neutral-600 max-w-3xl"
            >
              {t.heroDesc}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-10"
            >
              <MetaCard label={t.meta.team[0]} value={t.meta.team[1]} />
              <MetaCard label={t.meta.stage[0]} value={t.meta.stage[1]} />
            </motion.div>
          </motion.section>

          {/* Problem */}
          <Section id="problem" label={t.problem.label} title={t.problem.title}>
            {t.problem.body}
          </Section>

          {/* Solution */}
          <Section id="solution" label={t.solution.label} title={t.solution.title}>
            {t.solution.body}
          </Section>

          {/* Positioning */}
          <Reveal className="bg-white rounded-3xl p-8 md:p-12">
            <div
              className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3"
              style={{ color: ACCENT }}
            >
              {t.positioning.label}
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-800 mb-8 leading-tight">
              {t.positioning.title}
            </h2>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="grid md:grid-cols-3 gap-4"
            >
              <PositioningCard
                icon={Cpu}
                vsLabel={t.positioning.vsLabel}
                target={t.positioning.cards[0].target}
                body={t.positioning.cards[0].body}
              />
              <PositioningCard
                icon={Cloud}
                vsLabel={t.positioning.vsLabel}
                target={t.positioning.cards[1].target}
                body={t.positioning.cards[1].body}
              />
              <PositioningCard
                icon={HardDrive}
                vsLabel={t.positioning.vsLabel}
                target={t.positioning.cards[2].target}
                body={t.positioning.cards[2].body}
              />
            </motion.div>
          </Reveal>

          {/* Target Users */}
          <Reveal className="bg-white rounded-3xl p-8 md:p-12">
            <div
              className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3"
              style={{ color: ACCENT }}
            >
              {t.users.label}
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-800 mb-6 leading-tight">
              {t.users.title}
            </h2>
            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              className="space-y-3 text-[15px] leading-relaxed text-neutral-600"
            >
              {t.users.items.map((item, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: REVEAL_EASE } },
                  }}
                  className="flex gap-3"
                >
                  <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full shrink-0 bg-neutral-800" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </Reveal>

          {/* Technology Direction */}
          <Reveal className="bg-white rounded-3xl p-8 md:p-12">
            <div
              className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3"
              style={{ color: ACCENT }}
            >
              {t.tech.label}
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-800 mb-8 leading-tight">
              {t.tech.title}
            </h2>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="grid md:grid-cols-2 gap-4"
            >
              <motion.div
                variants={fadeUpItem}
                {...cardHover}
                className="bg-neutral-50 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                    whileHover={{ rotate: -8, scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 18 }}
                  >
                    <Cpu size={16} />
                  </motion.div>
                  <h3 className="text-[15px] font-semibold text-neutral-800">{t.tech.hwHeading}</h3>
                </div>
                <p className="text-[14px] leading-relaxed text-neutral-600">{t.tech.hwBody}</p>
              </motion.div>
              <motion.div
                variants={fadeUpItem}
                {...cardHover}
                className="bg-neutral-50 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 18 }}
                  >
                    <Smartphone size={16} />
                  </motion.div>
                  <h3 className="text-[15px] font-semibold text-neutral-800">{t.tech.swHeading}</h3>
                </div>
                <p className="text-[14px] leading-relaxed text-neutral-600">{t.tech.swBody}</p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.2, ease: REVEAL_EASE }}
              className="mt-4 rounded-2xl p-5 flex items-start gap-3"
              style={{ backgroundColor: ACCENT_LIGHT }}
            >
              <Shield size={18} style={{ color: ACCENT }} className="shrink-0 mt-0.5" />
              <p className="text-[14px] leading-relaxed" style={{ color: ACCENT }}>
                <span className="font-semibold">{t.tech.longTermLabel}</span> {t.tech.longTermBody}
              </p>
            </motion.div>
          </Reveal>

          {/* Team */}
          <Reveal className="bg-white rounded-3xl p-8 md:p-12">
            <div
              className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3"
              style={{ color: ACCENT }}
            >
              {t.team.label}
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-800 mb-8 leading-tight">
              {t.team.title}
            </h2>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="grid md:grid-cols-2 gap-4"
            >
              {t.team.members.map((m) => (
                <TeamCard key={m.name} name={m.name} role={m.role} body={m.body} />
              ))}
            </motion.div>
          </Reveal>

          {/* Current Stage */}
          <Section id="stage" label={t.stage.label} title={t.stage.title}>
            {t.stage.body}
          </Section>

          {/* Roadmap */}
          <Reveal className="bg-white rounded-3xl p-8 md:p-12">
            <div
              className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-8"
              style={{ color: ACCENT }}
            >
              {t.roadmap.label}
            </div>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="grid md:grid-cols-2 gap-3"
            >
              {t.roadmap.items.map((item, i) => (
                <RoadmapItem
                  key={i}
                  stage={`${t.roadmap.stagePrefix} ${i + 1}`}
                  title={item.title}
                  status={item.status}
                  statusLabel={t.roadmap.statusLabels[item.status]}
                  body={item.body}
                />
              ))}
              <motion.div
                variants={fadeUpItem}
                className="rounded-2xl p-6 flex items-center gap-3"
                style={{ backgroundColor: ACCENT_LIGHT }}
              >
                <motion.span
                  animate={{ rotate: [0, -8, 8, -4, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.6, ease: 'easeInOut' }}
                  className="shrink-0 inline-flex"
                >
                  <Wrench size={18} style={{ color: ACCENT }} />
                </motion.span>
                <p
                  className="text-[13px] leading-relaxed font-medium"
                  style={{ color: ACCENT }}
                >
                  {t.roadmap.cta}
                </p>
              </motion.div>
            </motion.div>
          </Reveal>

          {/* Vision */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: REVEAL_EASE }}
            className="rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
            style={{ backgroundColor: '#1f2937' }}
          >
            <motion.div
              aria-hidden
              className="absolute -inset-1 opacity-30 pointer-events-none"
              style={{
                background:
                  'radial-gradient(60% 50% at 50% 0%, rgba(147,197,253,0.35), transparent 70%)',
              }}
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div
              className="relative inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold mb-6"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#A5B4FC' }}
            >
              <Users size={12} />
              {t.vision.label}
            </div>
            <p className="relative text-2xl md:text-3xl font-semibold text-white leading-snug max-w-3xl mx-auto">
              {t.vision.sentence}
            </p>
          </motion.section>

          {/* Footer */}
          <div className="text-center text-[12px] text-neutral-400 pt-4 pb-8">{t.footer}</div>
        </div>
      </div>
    </MotionConfig>
  );
}
