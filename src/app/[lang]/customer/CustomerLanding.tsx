'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState, type ComponentType } from 'react';
import {
  Check,
  CloudOff,
  Globe,
  Laptop,
  Menu,
  Minus,
  Monitor,
  MonitorPlay,
  RefreshCw,
  Share2,
  ShieldCheck,
  Smartphone,
  Tablet,
  Tv,
  Users,
  WifiOff,
  X,
  Zap,
} from 'lucide-react';

type Locale = 'cn' | 'en';
type IconComponent = ComponentType<{ className?: string; strokeWidth?: number }>;
type PlatformIconKey = 'windows' | 'apple' | 'ios' | 'android' | 'web';
type CompareValue = boolean | 'half';

const navLinks = [
  { label: '这是什么', href: '#what' },
  { label: '使用场景', href: '#scenes' },
  { label: '怎么用', href: '#how' },
  { label: '对比', href: '#compare' },
];

const heroPoints = [
  { icon: CloudOff, label: '不用上传云端' },
  { icon: WifiOff, label: '不依赖网络' },
  { icon: Smartphone, label: '多设备无线访问' },
];

const devices: { icon: IconComponent; label: string }[] = [
  { icon: Smartphone, label: 'iPhone' },
  { icon: Tablet, label: 'iPad' },
  { icon: Laptop, label: 'Mac' },
  { icon: Monitor, label: 'Windows' },
  { icon: Tv, label: '电视 / 投影' },
  { icon: Users, label: '朋友的设备' },
];

const deviceTags = ['本地存储', '自带 Wi-Fi', '无需公网', '无线访问', '照片 / 视频 / 文件 / 音乐 / 电子书'];

const scenes = [
  {
    no: '场景一',
    title: '手机空间不够',
    desc: '照片、视频太多，不想一直买 iCloud，也不想为了存储换更大容量的手机。一键把内容备份进 Rova 若行，随时释放手机空间。',
    img: '/scene-phone.png',
    alt: '手机连接 Rova 若行备份照片',
  },
  {
    no: '场景二',
    title: '出门拍摄 / 旅行',
    desc: '不带电脑，也能把相机、无人机、手机的素材就地备份到身边。没网也能预览、筛选，绕开微信压缩与上传等待。',
    img: '/scene-outdoor.png',
    alt: '户外拍摄时用 Rova 若行备份素材',
  },
  {
    no: '场景三',
    title: '多人近场共享',
    desc: '没网也能让朋友、家人、顾客一起访问同一批照片、视频、音乐或资料。一人随身携带，众人无线接入。',
    img: '/scene-share.png',
    alt: '多人近场共享同一批内容',
  },
];

const advantages = [
  {
    icon: ShieldCheck,
    title: '本地私有',
    desc: '资料放在自己身边，不默认上传到别人的服务器。',
  },
  {
    icon: RefreshCw,
    title: '多端访问',
    desc: '手机、平板、电脑都能连接，跨设备查看同一份资料。',
  },
  {
    icon: Zap,
    title: '近场高速',
    desc: '大文件在附近设备间直接流转，少等云盘上传和下载。',
  },
  {
    icon: Share2,
    title: '近场共享',
    desc: '旅行、聚会、店内空间里，指定内容可以给附近的人访问。',
  },
  {
    icon: MonitorPlay,
    title: '现代浏览',
    desc: '照片、视频、文件用更自然的界面打开，而不是只面对文件夹。',
  },
];

const platforms: { icon: PlatformIconKey; label: string }[] = [
  { icon: 'windows', label: 'Windows' },
  { icon: 'apple', label: 'macOS' },
  { icon: 'ios', label: 'iOS' },
  { icon: 'android', label: 'Android' },
  { icon: 'web', label: 'Web' },
];

const steps = [
  {
    n: '1',
    title: '开机带走',
    desc: '自带电池和 Wi-Fi，放进包里即可。不用插线、不用配置、不用折腾。',
  },
  {
    n: '2',
    title: '连接设备',
    desc: '手机、iPad、电脑搜索并连接 Rova 若行的近场网络，无需公网、无需登录云账号。',
  },
  {
    n: '3',
    title: '访问与备份',
    desc: '像看本地相册一样浏览照片视频，一键把设备里的内容备份进来，没网也能用。',
  },
  {
    n: '4',
    title: '智能整理',
    desc: 'AI 会逐步帮你自动分类、搜索和理解资料，让这个私人资料库越用越懂你。',
  },
];

const compareRows: {
  dim: string;
  cloud: CompareValue;
  nas: CompareValue;
  drive: CompareValue;
  rova: CompareValue;
}[] = [
  { dim: '数据在自己手里', cloud: false, nas: true, drive: true, rova: true },
  { dim: '便携、可随身带走', cloud: true, nas: false, drive: true, rova: true },
  { dim: '手机 / 平板无线访问', cloud: true, nas: 'half', drive: false, rova: true },
  { dim: '没网也能用', cloud: false, nas: 'half', drive: true, rova: true },
  { dim: '一次买断、长期省', cloud: false, nas: true, drive: true, rova: true },
  { dim: '现代浏览交互', cloud: true, nas: false, drive: false, rova: true },
];

const compareCols = ['云盘', 'NAS', '移动硬盘', '随行云'];

export default function CustomerLanding() {
  const params = useParams<{ lang?: string }>();
  const locale: Locale = params.lang === 'en' ? 'en' : 'cn';

  return (
    <main className="min-h-screen bg-[#fbfaf7] text-neutral-950">
      <SiteNav />
      <Hero />
      <WhatIsIt />
      <Scenes />
      <Features />
      <HowToUse />
      <Compare />
      <CtaFooter locale={locale} />
    </main>
  );
}

function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#fbfaf7]/88 shadow-[0_1px_24px_rgba(15,23,42,0.06)] backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-950 text-sm font-bold text-white">
            R
          </span>
          <span className="text-base font-semibold tracking-tight">Rova 若行</span>
          <span className="ml-1 hidden text-sm text-neutral-500 sm:inline">随行云</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-500 transition-colors hover:text-neutral-950"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#cta"
          className="hidden rounded-full bg-neutral-950 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 md:inline-flex"
        >
          申请内测
        </a>

        <button
          type="button"
          className="rounded-md p-1 text-neutral-700 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="菜单"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="bg-[#fbfaf7] px-5 py-4 shadow-[inset_0_1px_0_rgba(15,23,42,0.06)] md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-neutral-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-neutral-950 px-4 py-2 text-center text-sm font-medium text-white"
            >
              申请内测
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs text-neutral-500 shadow-[0_1px_12px_rgba(15,23,42,0.06)]">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Rova 若行 · 随行云
          </span>

          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            随身携带的
            <br />
            私人云
          </h1>

          <p className="max-w-md text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg">
            照片、视频、文件不用上传云端，也不用插线。手机、iPad、电脑连上
            Rova 若行，就能随时访问、备份和播放你的个人资料。
          </p>

          <div className="flex flex-wrap gap-4 pt-1">
            {heroPoints.map((point) => (
              <div key={point.label} className="flex items-center gap-2 text-sm text-neutral-900">
                <point.icon className="h-4 w-4 text-blue-600" />
                {point.label}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#cta"
              className="rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              申请内测
            </a>
            <a
              href="#scenes"
              className="rounded-full bg-white/85 px-6 py-3 text-sm font-medium text-neutral-950 shadow-[0_1px_16px_rgba(15,23,42,0.08)] transition-colors hover:bg-neutral-100"
            >
              查看使用场景
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-blue-100/70 blur-2xl" />
          <Image
            src="/device-hero.png"
            alt="Rova 若行随行云设备"
            width={640}
            height={640}
            priority
            className="mx-auto w-full max-w-md drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

function WhatIsIt() {
  return (
    <section id="what" className="bg-white/45">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-blue-600">01 · 这是什么</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            一个放在你身边、可以带走的私人资料库
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-neutral-600">
            Rova 若行是一台随行云设备，把硬盘、Wi-Fi、电池和智能文件管理做在一个小盒子里。它不像云盘要上传服务器，也不像
            NAS 那么复杂，更像一个随身的个人资料库。
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-3">
          {devices.slice(0, 3).map((device) => (
            <DeviceCard key={device.label} {...device} />
          ))}

          <div className="col-span-2 flex flex-col items-center justify-center gap-3 rounded-2xl bg-neutral-950 px-6 py-8 text-center text-white sm:col-span-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-lg font-bold">
              R
            </span>
            <p className="text-lg font-semibold">Rova 若行 · 随行云</p>
            <div className="flex flex-wrap justify-center gap-2 pt-1">
              {deviceTags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {devices.slice(3).map((device) => (
            <DeviceCard key={device.label} {...device} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DeviceCard({ icon: Icon, label }: { icon: IconComponent; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-white/75 px-4 py-6 text-center shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
      <Icon className="h-6 w-6 text-neutral-950" />
      <span className="text-sm text-neutral-500">{label}</span>
    </div>
  );
}

function PlatformMark({ icon, className }: { icon: PlatformIconKey; className?: string }) {
  if (icon === 'web') {
    return <Globe className={className} strokeWidth={1.75} />;
  }

  if (icon === 'windows') {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M3 4.8 10.8 3.8v7.4H3V4.8Z" />
        <path d="M12.2 3.6 21 2.4v8.8h-8.8V3.6Z" />
        <path d="M3 12.6h7.8V20L3 18.9v-6.3Z" />
        <path d="M12.2 12.6H21v9l-8.8-1.3v-7.7Z" />
      </svg>
    );
  }

  if (icon === 'android') {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M7.6 5.1 6.2 2.7a.55.55 0 0 1 .95-.55l1.45 2.5A8.1 8.1 0 0 1 12 4a8.1 8.1 0 0 1 3.4.65l1.45-2.5a.55.55 0 0 1 .95.55l-1.4 2.4A6.9 6.9 0 0 1 19 10H5a6.9 6.9 0 0 1 2.6-4.9Z" />
        <path d="M5 11.2h14v7.2a2.6 2.6 0 0 1-2.6 2.6H7.6A2.6 2.6 0 0 1 5 18.4v-7.2Z" />
        <path d="M3 11.6a1 1 0 0 1 1 1v5.2a1 1 0 1 1-2 0v-5.2a1 1 0 0 1 1-1Z" />
        <path d="M21 11.6a1 1 0 0 1 1 1v5.2a1 1 0 1 1-2 0v-5.2a1 1 0 0 1 1-1Z" />
        <circle cx="9" cy="7.7" r=".7" fill="#fbfaf7" />
        <circle cx="15" cy="7.7" r=".7" fill="#fbfaf7" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M16.6 12.3c0-2 1.6-3 1.7-3.1-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.7-.7-1.4 0-2.8.9-3.5 2.2-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.1 1.1 0 1.5-.7 2.8-.7s1.7.7 2.8.7c1.2 0 2-1 2.7-2 .8-1.2 1.1-2.3 1.1-2.4-.1 0-2.7-1-2.8-3.8Z" />
      <path d="M14.7 5.9c.6-.7 1-1.7.9-2.6-.9 0-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.5.9.1 1.9-.5 2.5-1.2Z" />
    </svg>
  );
}

function Scenes() {
  return (
    <section id="scenes">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-blue-600">02 · 它解决什么麻烦</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            三个最常见的时刻
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-neutral-600">
            网络靠不住、设备多、内容重。云盘和云相册天然不适配，NAS 不便携，移动硬盘交互又太原始。这些时刻，Rova 若行刚好补上。
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {scenes.map((scene) => (
            <article
              key={scene.title}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white/85 shadow-[0_16px_42px_rgba(15,23,42,0.07)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={scene.img}
                  alt={scene.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2 p-6">
                <span className="text-xs font-medium text-blue-600">{scene.no}</span>
                <h3 className="text-lg font-semibold">{scene.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{scene.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            随行云的核心优势
          </h2>
          <span className="mt-3 h-1 w-12 rounded-full bg-blue-600" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {advantages.map((advantage) => (
            <div key={advantage.title} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                <advantage.icon className="h-7 w-7 text-blue-600" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-base font-semibold">{advantage.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{advantage.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid items-center gap-10 rounded-3xl bg-white/70 p-8 shadow-[0_18px_48px_rgba(15,23,42,0.06)] md:grid-cols-2 md:p-12">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/devices-mockup.png"
              alt="随行云在笔记本、平板和手机上的界面"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </div>

          <div>
            <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              跨平台支持，数据随行
            </h3>
            <p className="mt-4 text-pretty leading-relaxed text-neutral-600">
              无论使用哪种设备，随行云都能适配，让你的文件在手机、平板和电脑之间自然流转。
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-6">
              {platforms.map((platform) => (
                <div key={platform.label} className="flex flex-col items-center gap-2">
                  <PlatformMark icon={platform.icon} className="h-7 w-7 text-neutral-950" />
                  <span className="text-xs text-neutral-500">{platform.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowToUse() {
  return (
    <section id="how" className="bg-white/45">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-blue-600">03 · 怎么用</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            连上就能用，没有学习成本
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.n} className="flex flex-col gap-3 rounded-2xl bg-[#fbfaf7]/85 p-6 shadow-[0_12px_34px_rgba(15,23,42,0.05)]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                {step.n}
              </span>
              <h3 className="text-base font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Compare() {
  return (
    <section id="compare">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-blue-600">04 · 和云盘 / NAS / 硬盘有什么不同</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            第四种选择
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-neutral-600">
            云盘方便，但数据不在自己手里；NAS 私有，但太复杂也不便携；移动硬盘便宜，但手机和平板用起来很麻烦。随行云
            想做的是放在身边、可以带走、手机电脑都能直接用的私人云。
          </p>
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl bg-white/90 shadow-[0_16px_44px_rgba(15,23,42,0.07)]">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-neutral-100">
                <th className="px-4 py-4 text-left font-medium text-neutral-500">能力</th>
                {compareCols.map((col, index) => (
                  <th
                    key={col}
                    className={`px-4 py-4 text-center font-semibold ${
                      index === compareCols.length - 1 ? 'bg-blue-50 text-blue-600' : 'text-neutral-950'
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row) => (
                <tr key={row.dim} className="border-b border-neutral-100 last:border-0">
                  <td className="px-4 py-4 text-left font-medium text-neutral-950">{row.dim}</td>
                  <CompareCell value={row.cloud} />
                  <CompareCell value={row.nas} />
                  <CompareCell value={row.drive} />
                  <CompareCell value={row.rova} highlight />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function CompareCell({ value, highlight }: { value: CompareValue; highlight?: boolean }) {
  return (
    <td className={`px-4 py-4 text-center ${highlight ? 'bg-blue-50' : ''}`}>
      {value === true ? (
        <Check className={`mx-auto h-5 w-5 ${highlight ? 'text-blue-600' : 'text-neutral-950'}`} />
      ) : value === 'half' ? (
        <span className="text-xs text-neutral-500">部分</span>
      ) : (
        <Minus className="mx-auto h-5 w-5 text-neutral-300" />
      )}
    </td>
  );
}

function CtaFooter({ locale }: { locale: Locale }) {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <>
      <section id="cta">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            让个人数据回到你身边
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-neutral-600">
            更私密、更智能、更便携，也更易用。留下邮箱，第一批内测设备发放时我们会第一时间联系你。
          </p>

          {submitted ? (
            <div className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-full bg-blue-50 px-5 py-3 text-sm font-medium text-blue-700">
              <Check className="h-4 w-4" /> 已收到，感谢你的关注！
            </div>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                if (email) setSubmitted(true);
              }}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="你的邮箱"
                className="flex-1 rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
              />
              <button
                type="submit"
                className="rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                申请内测
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="bg-white/45">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div className="max-w-xs">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-950 text-sm font-bold text-white">
                  R
                </span>
                <span className="text-base font-semibold tracking-tight">Rova 若行 · 随行云</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                一个可以随身携带的私人云，让你的照片、视频和文件，始终在身边。
              </p>
            </div>

            <div className="flex flex-col gap-2 text-sm text-neutral-600">
              <span className="font-medium text-neutral-950">联系方式</span>
              <a href="mailto:2797208347@qq.com" className="hover:text-neutral-950">
                2797208347@qq.com
              </a>
              <span>+86 133 2768 1186</span>
              <span>广东省深圳市南山区创智云城</span>
              <a href={`/${locale}/contact`} className="mt-1 w-fit text-blue-600 hover:text-blue-700">
                联系团队
              </a>
            </div>

            <div className="flex flex-col gap-2 text-sm text-neutral-600">
              <span className="font-medium text-neutral-950">关注我们</span>
              {['小红书', 'Bilibili', 'YouTube', 'GitHub'].map((item) => (
                <a key={item} href="#" className="hover:text-neutral-950">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 pt-6 text-xs text-neutral-500">
            © 2026 akl. 版权所有。
          </div>
        </div>
      </footer>
    </>
  );
}
