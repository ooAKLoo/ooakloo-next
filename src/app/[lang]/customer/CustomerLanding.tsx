'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState, type ComponentType, type FormEvent } from 'react';
import {
  ArrowDown, ArrowRight, ArrowUpRight, Check, CloudOff, Globe, Laptop,
  Menu, Minus, Monitor, MonitorPlay, RefreshCw, Share2, ShieldCheck,
  Smartphone, Tablet, Tv, Users, WifiOff, X, Zap,
} from 'lucide-react';
import { customerCopy, type CustomerCopy } from './_copy';
import styles from './CustomerLanding.module.css';

type Locale = 'cn' | 'en';
type IconComponent = ComponentType<{ className?: string; strokeWidth?: number; 'aria-hidden'?: boolean }>;
type PlatformIconKey = 'windows' | 'apple' | 'ios' | 'android' | 'web';
type CompareValue = boolean | 'half';

const betaSignupApiUrl = process.env.NEXT_PUBLIC_BETA_SIGNUP_API_URL ?? 'https://waitlist.wojeeo.com/v1/beta-signups';
const heroPointIcons: IconComponent[] = [CloudOff, WifiOff, Smartphone];
const deviceIcons: IconComponent[] = [Smartphone, Tablet, Laptop, Monitor, Tv, Users];
const advantageIcons: IconComponent[] = [ShieldCheck, RefreshCw, Zap, Share2, MonitorPlay];
const platformIcons: PlatformIconKey[] = ['windows', 'apple', 'ios', 'android', 'web'];
const socialUrls = [
  'https://www.xiaohongshu.com/user/profile/5e4125ff00000000010064fd',
  'https://space.bilibili.com/22541325/video',
  'https://www.youtube.com/channel/UCRCjs622BRMHknf4Cg0czTw',
  'https://github.com/ooAKLoo',
];

export default function CustomerLanding() {
  const params = useParams<{ lang?: string }>();
  const locale: Locale = params.lang === 'cn' ? 'cn' : 'en';
  const copy = customerCopy[locale];

  return (
    <div className={styles.page} lang={locale === 'cn' ? 'zh-CN' : 'en'}>
      <a className={styles.skipLink} href="#customer-content">{copy.design.skipLink}</a>
      <SiteNav locale={locale} copy={copy} />
      <div id="customer-content">
        <Hero copy={copy} />
        <WhatIsIt copy={copy} />
        <Scenes copy={copy} />
        <Features copy={copy} />
        <HowToUse copy={copy} />
        <Compare copy={copy} />
        <CtaFooter locale={locale} copy={copy} />
      </div>
    </div>
  );
}

function Brand({ copy }: { copy: CustomerCopy }) {
  return <span className={styles.brand}><span className={styles.brandMark} aria-hidden="true">r<span /></span><span>{copy.brand.name}</span></span>;
}

function SiteNav({ locale, copy }: { locale: Locale; copy: CustomerCopy }) {
  const [open, setOpen] = useState(false);
  const switchPath = `/${locale === 'en' ? 'cn' : 'en'}/customer`;
  const switchLanguage = () => { window.location.href = `${switchPath}${window.location.hash}`; };

  return (
    <header className={styles.navHeader}>
      <nav className={`${styles.container} ${styles.nav}`} aria-label={copy.nav.menu}>
        <a href="#" aria-label={copy.brand.fullName}><Brand copy={copy} /></a>
        <div className={styles.desktopLinks}>
          {copy.nav.links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </div>
        <div className={styles.navActions}>
          <a href={switchPath} className={styles.language} aria-label={copy.nav.languageAria} onClick={(event) => { event.preventDefault(); switchLanguage(); }}>{copy.nav.languageShort}</a>
          <a href="#cta" className={`${styles.button} ${styles.navCta}`}>{copy.nav.cta}<ArrowUpRight aria-hidden="true" /></a>
          <button type="button" className={styles.menuButton} aria-label={copy.nav.menu} aria-expanded={open} aria-controls="customer-menu" onClick={() => setOpen(!open)} onKeyDown={(event) => { if (event.key === 'Escape') setOpen(false); }}>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </nav>
      {open && <div id="customer-menu" className={styles.mobileMenu} onKeyDown={(event) => { if (event.key === 'Escape') setOpen(false); }}>
        {copy.nav.links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight aria-hidden="true" /></a>)}
        <a href="#cta" onClick={() => setOpen(false)}>{copy.nav.cta}<ArrowUpRight aria-hidden="true" /></a>
      </div>}
    </header>
  );
}

function Hero({ copy }: { copy: CustomerCopy }) {
  return (
    <section className={`${styles.container} ${styles.hero}`} aria-labelledby="hero-title">
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}><span className={styles.statusDot} />{copy.hero.eyebrow}</p>
        <h1 id="hero-title" className={styles.heroTitle}>{copy.hero.title.map((line, index) => <span key={line} className={index === 1 ? styles.mutedTitle : undefined}>{line}</span>)}</h1>
        <p className={styles.heroDescription}>{copy.hero.description}</p>
        <div className={styles.heroActions}>
          <a href="#cta" className={styles.button}>{copy.hero.primaryCta}<ArrowUpRight aria-hidden="true" /></a>
          <a href="#scenes" className={styles.textLink}>{copy.hero.secondaryCta}<ArrowDown aria-hidden="true" /></a>
        </div>
        <div className={styles.heroNote}><span className={styles.noteLine} /><span>{copy.design.heroNote}</span></div>
      </div>
      <div className={styles.heroVisual}>
        <span className={styles.visualIndex}>ROVA / 001</span>
        <div className={styles.orbitOne} aria-hidden="true" /><div className={styles.orbitTwo} aria-hidden="true" />
        <span className={styles.orbitDot} aria-hidden="true" />
        <span className={`${styles.mediaTag} ${styles.photoTag}`}>{copy.design.media[0]}</span>
        <span className={`${styles.mediaTag} ${styles.videoTag}`}>{copy.design.media[1]}</span>
        <span className={`${styles.mediaTag} ${styles.fileTag}`}>{copy.design.media[2]}</span>
        <div className={styles.productFloat}><Image src="/rova/device-reference-hero.webp" alt={copy.hero.deviceAlt} width={1094} height={1228} priority sizes="(min-width: 1000px) 500px, (min-width: 700px) 45vw, 80vw" className={styles.heroDevice} /></div>
        <div className={styles.visualCaption}><span><span className={styles.statusDot} />{copy.design.visualCaption}</span><span>01 — ∞</span></div>
      </div>
      <div className={styles.heroFacts}>
        <span className={styles.factsLabel}>{copy.design.factsLabel}</span>
        {copy.hero.points.map((point, index) => { const Icon = heroPointIcons[index]; return <span key={point}><Icon aria-hidden={true} strokeWidth={1.5} />{point}</span>; })}
      </div>
    </section>
  );
}

function WhatIsIt({ copy }: { copy: CustomerCopy }) {
  return (
    <section id="what" className={`${styles.section} ${styles.whatSection}`} aria-labelledby="what-title">
      <div className={`${styles.container} ${styles.whatGrid}`}>
        <div className={styles.sectionCopy}>
          <p className={styles.eyebrow}>{copy.what.eyebrow}</p><h2 id="what-title">{copy.what.title}</h2><p>{copy.what.description}</p>
          <div className={styles.whatTags}>{copy.what.tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div>
        </div>
        <div className={styles.network}>
          <div className={styles.deviceRow}>{deviceIcons.slice(0, 3).map((Icon, index) => <span key={index}><Icon strokeWidth={1.4} aria-hidden={true} />{copy.what.devices[index]}</span>)}</div>
          <div className={styles.networkLines} aria-hidden="true"><i /><i /><i /></div>
          <div className={styles.networkCore}><Brand copy={copy} /><span><span className={styles.statusDot} />{copy.brand.product}</span><p>{copy.what.tags[4]}</p></div>
          <div className={`${styles.networkLines} ${styles.networkLinesBottom}`} aria-hidden="true"><i /><i /><i /></div>
          <div className={styles.deviceRow}>{deviceIcons.slice(3).map((Icon, index) => <span key={index}><Icon strokeWidth={1.4} aria-hidden={true} />{copy.what.devices[index + 3]}</span>)}</div>
        </div>
      </div>
    </section>
  );
}

function Scenes({ copy }: { copy: CustomerCopy }) {
  return (
    <section id="scenes" className={`${styles.container} ${styles.section}`} aria-labelledby="scenes-title">
      <div className={styles.sectionHead}><div><p className={styles.eyebrow}>{copy.scenes.eyebrow}</p><h2 id="scenes-title">{copy.scenes.title}</h2></div><p>{copy.scenes.description}</p></div>
      <div className={styles.sceneGrid}>{copy.scenes.items.map((scene, index) => <article key={scene.title} className={styles.sceneCard}>
        <div className={styles.sceneImage}><Image src={scene.img} alt={scene.alt} fill sizes="(min-width: 700px) 33vw, 100vw" /><span className={styles.sceneNumber}>0{index + 1}</span><span className={styles.sceneArrow} aria-hidden="true"><ArrowUpRight /></span></div>
        <p className={styles.sceneLabel}>{scene.no}</p><h3>{scene.title}</h3><p className={styles.sceneDescription}>{scene.desc}</p>
      </article>)}</div>
    </section>
  );
}

function Features({ copy }: { copy: CustomerCopy }) {
  return (
    <section id="features" className={`${styles.section} ${styles.darkSection}`} aria-labelledby="features-title">
      <div className={styles.container}>
        <div className={styles.sectionHead}><div><p className={styles.eyebrow}>{copy.design.featuresEyebrow}</p><h2 id="features-title">{copy.features.title}</h2></div><span className={styles.featureSymbol} aria-hidden="true">✳</span></div>
        <div className={styles.advantages}>{copy.features.advantages.map((advantage, index) => { const Icon = advantageIcons[index]; return <div key={advantage.title}><Icon strokeWidth={1.4} aria-hidden={true} /><h3>{advantage.title}</h3><p>{advantage.desc}</p></div>; })}</div>
        <div className={styles.platformGrid}>
          <div className={styles.platformImage}><Image src="/rova/devices-mockup.webp" alt={copy.features.mockupAlt} fill sizes="(min-width: 700px) 50vw, 100vw" /></div>
          <div><p className={styles.eyebrow}>{copy.design.platformEyebrow}</p><h3>{copy.features.platformTitle}</h3><p className={styles.platformDescription}>{copy.features.platformDesc}</p>
            <div className={styles.platforms}>{platformIcons.map((icon, index) => <span key={icon}><PlatformMark icon={icon} />{copy.features.platforms[index]}</span>)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformMark({ icon }: { icon: PlatformIconKey }) {
  if (icon === 'web') return <Globe strokeWidth={1.5} aria-hidden="true" />;
  if (icon === 'windows') return <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M3 4.8 10.8 3.8v7.4H3V4.8ZM12.2 3.6 21 2.4v8.8h-8.8V3.6ZM3 12.6h7.8V20L3 18.9v-6.3ZM12.2 12.6H21v9l-8.8-1.3v-7.7Z" /></svg>;
  if (icon === 'android') return <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="m7.6 5.1-1.4-2.4a.55.55 0 0 1 .95-.55l1.45 2.5A8.1 8.1 0 0 1 12 4a8.1 8.1 0 0 1 3.4.65l1.45-2.5a.55.55 0 0 1 .95.55l-1.4 2.4A6.9 6.9 0 0 1 19 10H5a6.9 6.9 0 0 1 2.6-4.9ZM5 11.2h14v7.2a2.6 2.6 0 0 1-2.6 2.6H7.6A2.6 2.6 0 0 1 5 18.4v-7.2ZM3 11.6a1 1 0 0 1 1 1v5.2a1 1 0 1 1-2 0v-5.2a1 1 0 0 1 1-1ZM21 11.6a1 1 0 0 1 1 1v5.2a1 1 0 1 1-2 0v-5.2a1 1 0 0 1 1-1Z" /><circle cx="9" cy="7.7" r=".7" fill="#181a18" /><circle cx="15" cy="7.7" r=".7" fill="#181a18" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M16.6 12.3c0-2 1.6-3 1.7-3.1-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.7-.7-1.4 0-2.8.9-3.5 2.2-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.1 1.1 0 1.5-.7 2.8-.7s1.7.7 2.8.7c1.2 0 2-1 2.7-2 .8-1.2 1.1-2.3 1.1-2.4-.1 0-2.7-1-2.8-3.8ZM14.7 5.9c.6-.7 1-1.7.9-2.6-.9 0-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.5.9.1 1.9-.5 2.5-1.2Z" /></svg>;
}

function HowToUse({ copy }: { copy: CustomerCopy }) {
  return <section id="how" className={`${styles.container} ${styles.section}`} aria-labelledby="how-title">
    <div className={styles.sectionHead}><div><p className={styles.eyebrow}>{copy.how.eyebrow}</p><h2 id="how-title">{copy.how.title}</h2></div><span className={styles.stepHint}>{copy.design.stepHint}<ArrowRight aria-hidden="true" /></span></div>
    <div className={styles.steps}>{copy.how.steps.map((step) => <article key={step.n}><span className={styles.stepNumber}>0{step.n}<span /></span><h3>{step.title}</h3><p>{step.desc}</p></article>)}</div>
  </section>;
}

function Compare({ copy }: { copy: CustomerCopy }) {
  return <section id="compare" className={`${styles.section} ${styles.compareSection}`} aria-labelledby="compare-title">
    <div className={styles.container}>
      <div className={styles.sectionHead}><div><p className={styles.eyebrow}>{copy.compare.eyebrow}</p><h2 id="compare-title">{copy.compare.title}</h2></div><p>{copy.compare.description}</p></div>
      <div className={styles.tableScroll} role="region" aria-label={copy.compare.title} tabIndex={0}>
        <table className={styles.compareTable}><caption className={styles.srOnly}>{copy.compare.title}</caption><thead><tr><th scope="col">{copy.compare.ability}</th>{copy.compare.columns.map((column, index) => <th key={column} scope="col" className={index === 3 ? styles.highlightCell : undefined}>{column}{index === 3 && <span className={styles.statusDot} />}</th>)}</tr></thead>
          <tbody>{copy.compare.rows.map((row) => <tr key={row.dim}><th scope="row">{row.dim}</th><CompareCell value={row.cloud} copy={copy} /><CompareCell value={row.nas} copy={copy} /><CompareCell value={row.drive} copy={copy} /><CompareCell value={row.rova} copy={copy} highlight /></tr>)}</tbody>
        </table>
      </div>
    </div>
  </section>;
}

function CompareCell({ value, copy, highlight }: { value: CompareValue; copy: CustomerCopy; highlight?: boolean }) {
  return <td className={highlight ? styles.highlightCell : undefined}>{value === true ? <><Check aria-hidden="true" /><span className={styles.srOnly}>{copy.design.supported}</span></> : value === 'half' ? <span className={styles.partial}>{copy.compare.partial}</span> : <><Minus aria-hidden="true" /><span className={styles.srOnly}>{copy.design.unsupported}</span></>}</td>;
}

function CtaFooter({ locale, copy }: { locale: Locale; copy: CustomerCopy }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [submitError, setSubmitError] = useState<string | null>(null);

  const submitBetaApplication = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true); setSubmitError(null);
    try {
      const response = await fetch(betaSignupApiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: email.trim(), locale, pageUrl: window.location.href, referrer: document.referrer, website }) });
      if (!response.ok) throw new Error(`Beta signup failed: ${response.status}`);
      setSubmitted(true);
    } catch (error) { console.error(error); setSubmitError(copy.cta.submitError); }
    finally { setSubmitting(false); }
  };

  return <>
    <section id="cta" className={`${styles.container} ${styles.cta}`} aria-labelledby="cta-title">
      <div className={styles.ctaPanel}>
        <p className={styles.eyebrow}><span className={styles.statusDot} />{copy.design.ctaEyebrow}</p><h2 id="cta-title">{copy.cta.title}</h2><p className={styles.ctaDescription}>{copy.cta.description}</p>
        {submitted ? <div className={styles.success} role="status"><Check aria-hidden="true" />{copy.cta.submitted}</div> : <form onSubmit={submitBetaApplication} aria-busy={submitting} className={styles.signup}>
          <label className={styles.honeypot} aria-hidden="true">Website<input type="text" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} /></label>
          <label className={styles.srOnly} htmlFor="beta-email">{copy.cta.emailPlaceholder}</label>
          <input id="beta-email" name="email" type="email" required autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder={copy.cta.emailPlaceholder} aria-describedby={submitError ? 'beta-error' : undefined} />
          <button type="submit" className={styles.button} disabled={submitting}>{submitting ? copy.cta.submitting : copy.cta.submit}<ArrowUpRight aria-hidden="true" /></button>
        </form>}
        {submitError && <p id="beta-error" className={styles.error} role="alert">{submitError}</p>}
        <span className={styles.ctaArt} aria-hidden="true">↗</span>
      </div>
    </section>
    <footer className={`${styles.container} ${styles.footer}`}>
      <div className={styles.footerTop}><div className={styles.footerBrand}><Brand copy={copy} /><p>{copy.footer.description}</p></div><div><h3>{copy.footer.contactTitle}</h3><a href="mailto:hello@wojeeo.com">hello@wojeeo.com</a><p>{copy.footer.address}</p><a href={`/${locale}/contact`}>{copy.footer.contactTeam}<ArrowUpRight aria-hidden="true" /></a></div><div className={styles.socials}><h3>{copy.footer.followUs}</h3>{copy.footer.social.map((item, index) => <a key={item} href={socialUrls[index]} target="_blank" rel="noopener noreferrer">{item}<ArrowUpRight aria-hidden="true" /></a>)}</div></div>
      <div className={styles.footerBottom}><span>{copy.footer.copyright}</span><span>{copy.design.footerNote}</span><a href={`/${locale}/ovita/privacy`}>{copy.design.privacy}</a></div>
    </footer>
  </>;
}
