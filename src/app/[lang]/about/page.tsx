'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, RefreshCw, MessageCircle, Target, Palette } from 'lucide-react';
import { type Locale } from '@/lib/i18n';
import { getMessages } from '@/messages';

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Dong",
    role: "客户端开发工程师",
    roleEn: "Client Developer",
    image: "/assets/teams/dong.webp",
    hoverImage: "/assets/teams/dong2.webp",
    background: "曾在华为担任华为云后端开发工程师，负责对象存储（OBS）相关 SDK 开发；在字节跳动从事 TikTok 支付业务研发，在大疆从事 DJI 客户端产品研发。拥有丰富的独立 APP 开发经验，并在人机交互（HCI）方向有研究经历，作为作者参与了 CHI 2025（A* 级国际顶会）的论文。",
    backgroundEn: "Worked at Huawei as a backend engineer on OBS SDK; at ByteDance on TikTok payment; at DJI on client products. Rich indie app experience with HCI research, co-author of CHI 2025 paper.",
    social: {
      linkedin: "https://dl.acm.org/profile/99661564134",
      twitter: "https://ieeexplore.ieee.org/abstract/document/9611712",
      github: "https://github.com/ooAKLoo"
    },
  },
  {
    id: 2,
    name: "Lei",
    role: "嵌入式工程师",
    roleEn: "Embedded Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop",
    background: "曾任Insta360影石的嵌入式研发工程师，专注于低功耗控制与MCU融合算法，在硬件与软件结合方面有深厚经验。参与过公司影像及无人机项目研发，对嵌入式影像处理与跨终端设备的系统优化有深入理解。",
    backgroundEn: "Former embedded engineer at Insta360, focusing on low-power control and MCU algorithms. Deep experience in hardware-software integration, imaging and drone projects.",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    id: 3,
    name: "Jubin",
    role: "硬件工程师",
    roleEn: "Hardware Engineer",
    image: "/assets/teams/jubin.webp",
    hoverImage: "/assets/teams/jubin2.webp",
    background: "曾在大疆担任硬件工程师，主要负责无人机、遥控器射频天线设计，同时擅长PCB电路板设计。",
    backgroundEn: "Former hardware engineer at DJI, specializing in drone and controller RF antenna design, and PCB circuit design.",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    id: 4,
    name: "Cookie",
    role: "设计师",
    roleEn: "Designer",
    image: "/assets/teams/cookie.webp",
    hoverImage: "/assets/teams/cookie2.webp",
    background: "日本留学归来，专注于平面设计和工业设计，之前服务于韶音，负责产品外观以及平面设计工作，将日式美学融入产品设计。",
    backgroundEn: "Returned from Japan, focusing on graphic and industrial design. Former designer at Shokz, integrating Japanese aesthetics into product design.",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    id: 5,
    name: "Lucy",
    role: "结构设计师",
    roleEn: "Structural Designer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop",
    background: "德国留学归来，曾从事大疆影像及飞行无人机的外观结构设计工作，在产品结构设计和工程实现方面有着深厚的国际化视野。",
    backgroundEn: "Returned from Germany, worked on DJI imaging and drone structural design with international perspective.",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    id: 6,
    name: "George",
    role: "资深开发工程师",
    roleEn: "Senior Developer",
    image: "/assets/teams/George.webp",
    hoverImage: "/assets/teams/George2.webp",
    background: "8年互联网从业经历，曾在字节跳动工作。曾在腾讯王者荣耀团队担任客户端游戏开发，有过独立游戏创业和开发经验。",
    backgroundEn: "8 years in tech, formerly at ByteDance. Former game developer at Tencent Honor of Kings with indie game experience.",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    id: 7,
    name: "Ying",
    role: "HCI研究员 & UI/UX设计师",
    roleEn: "HCI Researcher & UI/UX Designer",
    image: "/assets/teams/ying.webp",
    hoverImage: "/assets/teams/ying2.webp",
    background: "墨尔本大学人机交互博士在读，研究领域涵盖HCI、社交计算和LLM。在CHI、MobileHCI、INTERACT等顶会发表多篇论文，专注于在线社区用户体验、隐私保护和界面设计创新。",
    backgroundEn: "PhD candidate in HCI at University of Melbourne. Published at CHI, MobileHCI, INTERACT. Focus on UX, privacy, and interface design.",
    social: {
      linkedin: "https://maying0120.github.io/",
      twitter: "https://maying0120.github.io/",
      github: "https://maying0120.github.io/"
    },
  },
  {
    id: 8,
    name: "Simon",
    role: "AI研究员",
    roleEn: "AI Researcher",
    image: "/assets/teams/simon.webp",
    hoverImage: "/assets/teams/simon2.webp",
    background: "曾就职于字节跳动AILab，目前在复旦大学人工智能创新与孵化研究院攻读博士学位。在AI顶会发表多篇论文，是OpenCoder的共同第一作者。目前在阶跃星辰（StepFun）实习。",
    backgroundEn: "Former ByteDance AI Lab, PhD at Fudan AI Institute. Co-first author of OpenCoder, interning at StepFun.",
    social: {
      linkedin: "https://simingh124.github.io/",
      twitter: "https://simingh124.github.io/",
      github: "https://simingh124.github.io/"
    },
  }
];

// Text wall background texts
const textWallTexts = [
  "think different", "less is more", "予 舍", "极致", "超出预期",
  "总是播种、常常期待、偶尔收获", "zen", "我们的想象、世界现象",
  "人生是思维的映射", "人文关怀", "美学考量", "至繁归于至简",
  "躁动", "热情，就是永远都坚信可以干好一件事的动力", "慢慢来",
  "在路上", "轻履者行远", "事缓则圆", "科技与人文的十字路口",
  "简约不简单", "以有趣的方式将艺术与科技融为一体",
  "创意需要被温柔以待", "做事", "玩物有志", "探索，打破边界",
  "做时间的朋友", "长期主义"
];

// Social Icons Component
const SocialIcons = ({ social }: { social: { linkedin: string; twitter: string; github: string } }) => (
  <div className="flex items-center gap-2">
    <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg bg-gray-50 text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300">
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    </a>
    <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg bg-gray-50 text-gray-400 hover:bg-sky-50 hover:text-sky-500 transition-all duration-300">
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    </a>
    <a href={social.github} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg bg-gray-50 text-gray-400 hover:bg-gray-800 hover:text-white transition-all duration-300">
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    </a>
  </div>
);

// Team Member Card Component
const TeamMemberCard = ({ member, locale }: { member: typeof teamMembers[0]; locale: Locale }) => {
  const [isHovered, setIsHovered] = useState(false);
  const messages = getMessages(locale);

  return (
    <div
      className="relative h-[420px] w-full group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Default state - Portrait card */}
      <div className={`absolute inset-0 rounded-xl overflow-hidden transition-all duration-700 ease-in-out transform ${
        isHovered ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}>
        <div className="relative h-full w-full">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-lg font-medium text-white">{member.name}</h3>
            <p className="text-gray-300 text-sm mt-1">{locale === 'cn' ? member.role : member.roleEn}</p>
          </div>
        </div>
      </div>

      {/* Hover state - Detail card */}
      <div className={`absolute inset-0 bg-white rounded-xl shadow-2xl transition-all duration-700 ease-in-out transform ${
        isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
      }`}>
        <div className="p-5 h-full flex flex-col">
          <div className="mb-4">
            <div className="flex items-center gap-3.5">
              <div className="flex-shrink-0">
                <img
                  src={member.hoverImage || member.image}
                  alt={member.name}
                  className="w-16 h-16 rounded-xl object-cover shadow-sm ring-1 ring-gray-100"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="mb-2">
                  <h3 className="text-base font-semibold text-gray-900 truncate">{member.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5 font-medium">{locale === 'cn' ? member.role : member.roleEn}</p>
                </div>
                <SocialIcons social={member.social} />
              </div>
            </div>
            <div className="mt-4 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          </div>

          <div className="flex-1 mb-4 overflow-hidden">
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
              {messages.teamBackground}
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed line-clamp-6">
              {locale === 'cn' ? member.background : member.backgroundEn}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mesh Gradient Background Component
const MeshGradientBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-50" />

      {/* Animated gradient blobs */}
      <div className="absolute inset-0">
        {/* Blob 1 - Blue/Purple */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-[120px] animate-mesh-1"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.8) 0%, rgba(139,92,246,0.4) 50%, transparent 70%)',
            top: '-10%',
            left: '-5%',
          }}
        />

        {/* Blob 2 - Cyan/Teal */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-25 blur-[100px] animate-mesh-2"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.8) 0%, rgba(20,184,166,0.4) 50%, transparent 70%)',
            top: '20%',
            right: '-10%',
          }}
        />

        {/* Blob 3 - Pink/Rose */}
        <div
          className="absolute w-[550px] h-[550px] rounded-full opacity-20 blur-[110px] animate-mesh-3"
          style={{
            background: 'radial-gradient(circle, rgba(244,114,182,0.8) 0%, rgba(251,113,133,0.4) 50%, transparent 70%)',
            bottom: '-15%',
            left: '20%',
          }}
        />

        {/* Blob 4 - Amber/Orange */}
        <div
          className="absolute w-[450px] h-[450px] rounded-full opacity-20 blur-[90px] animate-mesh-4"
          style={{
            background: 'radial-gradient(circle, rgba(251,191,36,0.7) 0%, rgba(251,146,60,0.3) 50%, transparent 70%)',
            bottom: '10%',
            right: '15%',
          }}
        />

        {/* Blob 5 - Center subtle glow */}
        <div
          className="absolute w-[700px] h-[700px] rounded-full opacity-15 blur-[150px] animate-mesh-5"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,0.6) 0%, rgba(99,102,241,0.3) 50%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      {/* Subtle noise overlay for texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

// Text Wall Background Component
const TextWallBackground = () => {
  const [rows, setRows] = useState<string[][]>([[], [], [], []]);

  useEffect(() => {
    const shuffled = [...textWallTexts].sort(() => Math.random() - 0.5);
    const newRows: string[][] = [[], [], [], []];

    shuffled.forEach((text, index) => {
      newRows[index % 4].push(text);
    });

    newRows.forEach(row => {
      while (row.length < 8) {
        row.push(...textWallTexts.slice(0, 3));
      }
    });

    setRows(newRows);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

      <div className="absolute inset-0 flex flex-col justify-center gap-6">
        {rows.map((rowTexts, rowIndex) => (
          <div key={rowIndex} className="relative h-10 overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white via-white/90 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white via-white/90 to-transparent z-20 pointer-events-none" />

            <div className="flex items-center h-full">
              <div
                className="flex gap-12 whitespace-nowrap animate-flow"
                style={{
                  animationDirection: rowIndex % 2 === 0 ? 'normal' : 'reverse',
                  animationDuration: `${45 + rowIndex * 8}s`,
                  opacity: 0.25 + (rowIndex * 0.08)
                }}
              >
                {[...Array(3)].map((_, groupIndex) => (
                  <div key={groupIndex} className="flex gap-12">
                    {rowTexts.map((text, index) => (
                      <span
                        key={`${groupIndex}-${index}`}
                        className="text-gray-700 text-sm font-normal tracking-wider whitespace-nowrap select-none"
                      >
                        {text}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
};

export default function AboutPage() {
  const [locale, setLocale] = useState<Locale>('en');
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathLang = window.location.pathname.split('/')[1] as Locale;
      if (pathLang === 'en' || pathLang === 'cn') {
        setLocale(pathLang);
      }
    }

    const handleScroll = () => {
      setShowScrollHint(window.scrollY <= 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const messages = getMessages(locale);

  const cultureValues = [
    { icon: RefreshCw, title: messages.cultureValue1Title, desc: messages.cultureValue1Desc },
    { icon: MessageCircle, title: messages.cultureValue2Title, desc: messages.cultureValue2Desc },
    { icon: Target, title: messages.cultureValue3Title, desc: messages.cultureValue3Desc },
    { icon: Palette, title: messages.cultureValue4Title, desc: messages.cultureValue4Desc },
  ];

  const scrollToTeam = () => {
    document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-16 xl:px-20 overflow-hidden">
        <MeshGradientBackground />

        <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-700 max-w-4xl mx-auto leading-loose lg:leading-[1.8] xl:leading-[2] font-light text-center animate-slide-up">
              {messages.heroTitle}
            </h1>
          </div>

          {/* Scroll hint */}
          <div
            className={`fixed bottom-12 lg:bottom-16 left-0 right-0 flex justify-center transition-all duration-500 ${
              showScrollHint ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
          >
            <div
              className="flex flex-col items-center gap-3 text-gray-400 hover:text-gray-600 transition-colors duration-300 cursor-pointer animate-float"
              onClick={scrollToTeam}
            >
              <span className="text-xs lg:text-sm uppercase tracking-widest font-light">{messages.exploreMore}</span>
              <ChevronDown className="w-4 h-4 lg:w-5 lg:h-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 tracking-tight">
              {messages.teamSectionTitle}
            </h2>
            <div className="mt-4 h-px w-20 bg-gray-900 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="px-8 lg:px-20 py-32 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-24 text-center">
            <h2 className="text-2xl lg:text-3xl font-light text-gray-800 tracking-wider">
              {messages.cultureSectionTitle}
            </h2>
            <div className="w-12 h-px bg-gray-300 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
            {cultureValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group cursor-default">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 mt-1">
                      <div className="relative w-10 h-10">
                        <div className="absolute inset-0 bg-gray-50 rounded-full transition-all duration-500 group-hover:bg-gray-100" />
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Icon className="text-gray-400 transition-all duration-500 group-hover:text-gray-700" size={18} strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-normal text-gray-800 mb-2 transition-colors duration-500 group-hover:text-gray-900">
                        {value.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed font-light" style={{ lineHeight: '1.7' }}>
                        {value.desc}
                      </p>
                      <div className="mt-4 h-px bg-gray-100 transition-all duration-500 origin-left transform scale-x-50 group-hover:scale-x-100 group-hover:bg-gray-200" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-8 lg:px-20 py-20 text-gray-900 overflow-hidden">
        <TextWallBackground />

        <div className="relative z-30 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-gray-900">
            {messages.ctaTitle}
          </h2>

          <div className="text-xl lg:text-2xl text-gray-900">
            <span className="text-gray-600">{messages.ctaPrefix}</span>
            {' '}
            <Link
              href={`/${locale}/contact`}
              className="relative inline-block cursor-pointer text-gray-900 font-bold transition-transform duration-300 hover:scale-105"
            >
              <span className="relative z-10">{messages.ctaChat}</span>
              <svg
                className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)]"
                viewBox="0 0 100 50"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
              >
                <ellipse cx="50" cy="25" rx="45" ry="20" className="animate-draw-circle" />
              </svg>
            </Link>
            {' '}
            <span className="text-gray-600">{messages.ctaSuffix}</span>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.9s ease-out 0.2s both;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: float 2.5s ease-in-out infinite;
        }

        @keyframes flow {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% / 3)); }
        }
        .animate-flow {
          animation: flow linear infinite;
        }

        @keyframes draw-circle {
          from { stroke-dashoffset: 300; }
          to { stroke-dashoffset: 0; }
        }
        .animate-draw-circle {
          stroke-dasharray: 300;
          animation: draw-circle 1s ease-out forwards;
          animation-delay: 0.5s;
          stroke-dashoffset: 300;
        }

        /* Mesh Gradient Animations */
        @keyframes mesh-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(10%, 15%) scale(1.1); }
          50% { transform: translate(5%, 25%) scale(0.95); }
          75% { transform: translate(-5%, 10%) scale(1.05); }
        }
        .animate-mesh-1 {
          animation: mesh-1 25s ease-in-out infinite;
        }

        @keyframes mesh-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-15%, 10%) scale(1.05); }
          50% { transform: translate(-10%, -15%) scale(1.1); }
          75% { transform: translate(5%, -5%) scale(0.95); }
        }
        .animate-mesh-2 {
          animation: mesh-2 30s ease-in-out infinite;
        }

        @keyframes mesh-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(15%, -10%) scale(0.95); }
          50% { transform: translate(-5%, -20%) scale(1.1); }
          75% { transform: translate(-15%, 5%) scale(1.05); }
        }
        .animate-mesh-3 {
          animation: mesh-3 28s ease-in-out infinite;
        }

        @keyframes mesh-4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-10%, -15%) scale(1.1); }
          50% { transform: translate(10%, 10%) scale(0.9); }
          75% { transform: translate(15%, -5%) scale(1.05); }
        }
        .animate-mesh-4 {
          animation: mesh-4 32s ease-in-out infinite;
        }

        @keyframes mesh-5 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.15; }
          33% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.1; }
          66% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.2; }
        }
        .animate-mesh-5 {
          animation: mesh-5 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
