'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState, type ComponentType, type FormEvent } from 'react';
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
import { customerCopy, type CustomerCopy } from './_copy';

type Locale = 'cn' | 'en';
type IconComponent = ComponentType<{ className?: string; strokeWidth?: number }>;
type PlatformIconKey = 'windows' | 'apple' | 'ios' | 'android' | 'web';
type CompareValue = boolean | 'half';

const betaSignupApiUrl =
  process.env.NEXT_PUBLIC_BETA_SIGNUP_API_URL ??
  'https://waitlist.wojeeo.com/v1/beta-signups';

const heroPointIcons: IconComponent[] = [CloudOff, WifiOff, Smartphone];
const deviceIcons: IconComponent[] = [Smartphone, Tablet, Laptop, Monitor, Tv, Users];
const advantageIcons: IconComponent[] = [ShieldCheck, RefreshCw, Zap, Share2, MonitorPlay];
const platformIcons: PlatformIconKey[] = ['windows', 'apple', 'ios', 'android', 'web'];

export default function CustomerLanding() {
  const params = useParams<{ lang?: string }>();
  const locale: Locale = params.lang === 'en' ? 'en' : 'cn';
  const copy = customerCopy[locale];

  return (
    <main className="min-h-screen bg-[#fbfaf7] text-neutral-950">
      <SiteNav locale={locale} copy={copy} />
      <Hero copy={copy} />
      <WhatIsIt copy={copy} />
      <Scenes copy={copy} />
      <Features copy={copy} />
      <HowToUse copy={copy} />
      <Compare copy={copy} />
      <CtaFooter locale={locale} copy={copy} />
    </main>
  );
}

function SiteNav({ locale, copy }: { locale: Locale; copy: CustomerCopy }) {
  const [open, setOpen] = useState(false);
  const otherLocale: Locale = locale === 'en' ? 'cn' : 'en';
  const switchPath = `/${otherLocale}/customer`;

  const switchLanguage = () => {
    window.location.href = `${switchPath}${window.location.hash}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#fbfaf7]/88 shadow-[0_1px_24px_rgba(15,23,42,0.06)] backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-950 text-sm font-bold text-white">
            R
          </span>
          <span className="text-base font-semibold tracking-tight">{copy.brand.name}</span>
          <span className="ml-1 hidden text-sm text-neutral-500 sm:inline">{copy.brand.product}</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {copy.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-500 transition-colors hover:text-neutral-950"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={switchPath}
            onClick={(event) => {
              event.preventDefault();
              switchLanguage();
            }}
            aria-label={copy.nav.languageAria}
            className="rounded-full border border-neutral-200 bg-white/70 px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-300 hover:text-neutral-950"
          >
            {copy.nav.languageShort}
          </a>
          <a
            href="#cta"
            className="rounded-full bg-neutral-950 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            {copy.nav.cta}
          </a>
        </div>

        <button
          type="button"
          className="rounded-md p-1 text-neutral-700 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={copy.nav.menu}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="bg-[#fbfaf7] px-5 py-4 shadow-[inset_0_1px_0_rgba(15,23,42,0.06)] md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4">
            {copy.nav.links.map((link) => (
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
              {copy.nav.cta}
            </a>
            <a
              href={switchPath}
              onClick={(event) => {
                event.preventDefault();
                setOpen(false);
                switchLanguage();
              }}
              className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-center text-sm font-medium text-neutral-700"
            >
              {copy.nav.languageAria}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ copy }: { copy: CustomerCopy }) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs text-neutral-500 shadow-[0_1px_12px_rgba(15,23,42,0.06)]">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            {copy.hero.eyebrow}
          </span>

          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {copy.hero.title.map((line, index) => (
              <span key={line}>
                {line}
                {index < copy.hero.title.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <p className="max-w-md text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg">
            {copy.hero.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-1">
            {copy.hero.points.map((point, index) => {
              const Icon = heroPointIcons[index] ?? Smartphone;

              return (
                <div key={point} className="flex items-center gap-2 text-sm text-neutral-900">
                  <Icon className="h-4 w-4 text-blue-600" />
                  {point}
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#cta"
              className="rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              {copy.hero.primaryCta}
            </a>
            <a
              href="#scenes"
              className="rounded-full bg-white/85 px-6 py-3 text-sm font-medium text-neutral-950 shadow-[0_1px_16px_rgba(15,23,42,0.08)] transition-colors hover:bg-neutral-100"
            >
              {copy.hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-blue-100/70 blur-2xl" />
          <Image
            src="/device-hero.png"
            alt={copy.hero.deviceAlt}
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

function WhatIsIt({ copy }: { copy: CustomerCopy }) {
  const devices = deviceIcons.map((icon, index) => ({
    icon,
    label: copy.what.devices[index] ?? '',
  }));

  return (
    <section id="what" className="bg-white/45">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-blue-600">{copy.what.eyebrow}</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {copy.what.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-neutral-600">
            {copy.what.description}
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
            <p className="text-lg font-semibold">{copy.brand.fullName}</p>
            <div className="flex flex-wrap justify-center gap-2 pt-1">
              {copy.what.tags.map((tag) => (
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

function Scenes({ copy }: { copy: CustomerCopy }) {
  return (
    <section id="scenes">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-blue-600">{copy.scenes.eyebrow}</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {copy.scenes.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-neutral-600">
            {copy.scenes.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {copy.scenes.items.map((scene) => (
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

function Features({ copy }: { copy: CustomerCopy }) {
  return (
    <section id="features">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            {copy.features.title}
          </h2>
          <span className="mt-3 h-1 w-12 rounded-full bg-blue-600" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {copy.features.advantages.map((advantage, index) => {
            const Icon = advantageIcons[index] ?? ShieldCheck;

            return (
              <div key={advantage.title} className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                  <Icon className="h-7 w-7 text-blue-600" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-base font-semibold">{advantage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{advantage.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 grid items-center gap-10 rounded-3xl bg-white/70 p-8 shadow-[0_18px_48px_rgba(15,23,42,0.06)] md:grid-cols-2 md:p-12">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/devices-mockup.png"
              alt={copy.features.mockupAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </div>

          <div>
            <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              {copy.features.platformTitle}
            </h3>
            <p className="mt-4 text-pretty leading-relaxed text-neutral-600">
              {copy.features.platformDesc}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-6">
              {platformIcons.map((icon, index) => {
                const label = copy.features.platforms[index] ?? icon;

                return (
                  <div key={icon} className="flex flex-col items-center gap-2">
                    <PlatformMark icon={icon} className="h-7 w-7 text-neutral-950" />
                    <span className="text-xs text-neutral-500">{label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowToUse({ copy }: { copy: CustomerCopy }) {
  return (
    <section id="how" className="bg-white/45">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-blue-600">{copy.how.eyebrow}</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {copy.how.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {copy.how.steps.map((step) => (
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

function Compare({ copy }: { copy: CustomerCopy }) {
  return (
    <section id="compare">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-blue-600">{copy.compare.eyebrow}</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {copy.compare.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-neutral-600">
            {copy.compare.description}
          </p>
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl bg-white/90 shadow-[0_16px_44px_rgba(15,23,42,0.07)]">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-neutral-100">
                <th className="px-4 py-4 text-left font-medium text-neutral-500">{copy.compare.ability}</th>
                {copy.compare.columns.map((col, index) => (
                  <th
                    key={col}
                    className={`px-4 py-4 text-center font-semibold ${
                      index === copy.compare.columns.length - 1 ? 'bg-blue-50 text-blue-600' : 'text-neutral-950'
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {copy.compare.rows.map((row) => (
                <tr key={row.dim} className="border-b border-neutral-100 last:border-0">
                  <td className="px-4 py-4 text-left font-medium text-neutral-950">{row.dim}</td>
                  <CompareCell value={row.cloud} partialLabel={copy.compare.partial} />
                  <CompareCell value={row.nas} partialLabel={copy.compare.partial} />
                  <CompareCell value={row.drive} partialLabel={copy.compare.partial} />
                  <CompareCell value={row.rova} partialLabel={copy.compare.partial} highlight />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function CompareCell({
  value,
  partialLabel,
  highlight,
}: {
  value: CompareValue;
  partialLabel: string;
  highlight?: boolean;
}) {
  return (
    <td className={`px-4 py-4 text-center ${highlight ? 'bg-blue-50' : ''}`}>
      {value === true ? (
        <Check className={`mx-auto h-5 w-5 ${highlight ? 'text-blue-600' : 'text-neutral-950'}`} />
      ) : value === 'half' ? (
        <span className="text-xs text-neutral-500">{partialLabel}</span>
      ) : (
        <Minus className="mx-auto h-5 w-5 text-neutral-300" />
      )}
    </td>
  );
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

    setSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(betaSignupApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          locale,
          pageUrl: window.location.href,
          referrer: document.referrer,
          website,
        }),
      });

      if (!response.ok) throw new Error(`Beta signup failed: ${response.status}`);
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      setSubmitError(copy.cta.submitError);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section id="cta">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {copy.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-neutral-600">
            {copy.cta.description}
          </p>

          {submitted ? (
            <div className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-full bg-blue-50 px-5 py-3 text-sm font-medium text-blue-700">
              <Check className="h-4 w-4" /> {copy.cta.submitted}
            </div>
          ) : (
            <form
              onSubmit={submitBetaApplication}
              aria-busy={submitting}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <label className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0" aria-hidden="true">
                Website
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(event) => setWebsite(event.target.value)}
                />
              </label>
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={copy.cta.emailPlaceholder}
                className="flex-1 rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
              />
              <button
                type="submit"
                disabled={submitting}
                className="rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-60"
              >
                {submitting ? copy.cta.submitting : copy.cta.submit}
              </button>
            </form>
          )}
          {submitError && (
            <p className="mt-3 text-sm text-red-600" role="alert" aria-live="polite">
              {submitError}
            </p>
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
                <span className="text-base font-semibold tracking-tight">{copy.brand.fullName}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {copy.footer.description}
              </p>
            </div>

            <div className="flex flex-col gap-2 text-sm text-neutral-600">
              <span className="font-medium text-neutral-950">{copy.footer.contactTitle}</span>
              <a href="mailto:hello@wojeeo.com" className="hover:text-neutral-950">
                hello@wojeeo.com
              </a>
              <span>{copy.footer.address}</span>
              <a href={`/${locale}/contact`} className="mt-1 w-fit text-blue-600 hover:text-blue-700">
                {copy.footer.contactTeam}
              </a>
            </div>

            <div className="flex flex-col gap-2 text-sm text-neutral-600">
              <span className="font-medium text-neutral-950">{copy.footer.followUs}</span>
              {copy.footer.social.map((item) => (
                <a key={item} href="#" className="hover:text-neutral-950">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 pt-6 text-xs text-neutral-500">
            {copy.footer.copyright}
          </div>
        </div>
      </footer>
    </>
  );
}
