'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { type Locale } from '@/lib/i18n';
import { getMessages } from '@/messages';
import { useTypewriter } from '@/hooks/useTypewriter';

interface ProductData {
  cn: ProductLang;
  en: ProductLang;
}

interface ProductLang {
  appName: string;
  downloadLink: string;
  introText: string;
  sections: {
    title: string;
    items: string[];
    mediaSrc: string;
    isReverse: boolean;
  }[];
}

interface ProductDetailClientProps {
  lang: string;
  product: ProductData | null;
}

// Feature Section Component with modern design
const FeatureSection = ({
  section,
  index,
  totalSections
}: {
  section: ProductLang['sections'][0];
  index: number;
  totalSections: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const { title, items, mediaSrc, isReverse } = section;
  const isVideo = mediaSrc && mediaSrc.endsWith('.mp4');
  const featureNumber = String(index + 1).padStart(2, '0');

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-20 lg:py-32"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute ${isReverse ? 'right-0' : 'left-0'} top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-gray-50 to-transparent rounded-full blur-3xl opacity-60`} />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>

          {/* Content Side */}
          <div className={`flex-1 w-full lg:w-1/2 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}>
            {/* Feature Number */}
            <div className="mb-8">
              <span className="text-8xl lg:text-9xl font-extralight text-gray-100 select-none">
                {featureNumber}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 leading-tight tracking-tight mb-8">
              {title}
            </h2>

            {/* Divider */}
            <div className="w-16 h-px bg-gray-300 mb-8" />

            {/* Feature Items */}
            <ul className="space-y-4">
              {items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 text-gray-600"
                  style={{
                    transitionDelay: `${(idx + 1) * 100}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                    transition: 'all 0.6s ease-out'
                  }}
                >
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5" />
                  <span className="text-base lg:text-lg font-light tracking-wide leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Media Side */}
          <div className={`flex-1 w-full lg:w-1/2 transition-all duration-1000 delay-200 ${
            isVisible
              ? 'opacity-100 translate-x-0'
              : `opacity-0 ${isReverse ? '-translate-x-12' : 'translate-x-12'}`
          }`}>
            <div className="relative group">
              {/* Media Container */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-1">
                <div className="relative overflow-hidden rounded-xl">
                  {isVideo ? (
                    <video
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      preload="auto"
                      muted
                      loop
                      playsInline
                      autoPlay
                    >
                      <source src={mediaSrc} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={mediaSrc}
                      alt={title}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  )}
                </div>
              </div>

              {/* Subtle shadow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-gray-200/30 to-transparent rounded-3xl -z-10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Section Progress Indicator */}
      {index < totalSections - 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-gray-300">
            <div className="w-px h-12 bg-gradient-to-b from-gray-200 to-transparent" />
          </div>
        </div>
      )}
    </section>
  );
};

export default function ProductDetailClient({ lang, product }: ProductDetailClientProps) {
  const locale = (lang === 'cn' ? 'cn' : 'en') as Locale;
  const messages = getMessages(locale);
  const data = product ? (locale === 'cn' ? product.cn : product.en) : null;
  const [showScrollHint, setShowScrollHint] = useState(true);

  // Typewriter config based on language
  const typewriterConfig = locale === 'cn'
    ? { speed: 120, deleteSpeed: 50, pause: 5000 }
    : { speed: 60, deleteSpeed: 30, pause: 6000 };

  const [typewriterText, isCursorVisible] = useTypewriter(
    data?.introText || '',
    typewriterConfig.speed,
    typewriterConfig.deleteSpeed,
    typewriterConfig.pause
  );

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollHint(window.scrollY <= 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-gray-400 text-lg font-light">Product not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-white pointer-events-none" />

        <div className="relative w-full max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center min-h-[70vh] justify-center">
            {/* App Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight text-gray-900 tracking-tight mb-12 animate-fade-up">
              {data.appName}
            </h1>

            {/* Intro Text with Typewriter */}
            <div className="max-w-3xl mx-auto">
              <p className="text-lg sm:text-xl lg:text-2xl font-light text-gray-600 leading-relaxed tracking-wide animate-fade-up-delay">
                {typewriterText}
                <span
                  className={`inline-block w-0.5 h-6 ml-1 bg-gray-400 transition-opacity duration-300 ${
                    isCursorVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </p>
            </div>

            {/* Download Button */}
            {data.downloadLink && (
              <div className="mt-16 animate-fade-up-delay-2">
                <a
                  href={data.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white text-sm font-light tracking-widest uppercase rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200"
                >
                  <span>{messages.Download}</span>
                  <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            )}
          </div>

          {/* Scroll Hint */}
          {data.sections && data.sections.length > 0 && (
            <div
              className={`fixed bottom-12 left-0 right-0 flex justify-center transition-all duration-500 z-40 ${
                showScrollHint ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
              }`}
            >
              <button
                onClick={scrollToFeatures}
                className="flex flex-col items-center gap-3 text-gray-400 hover:text-gray-600 transition-colors duration-300 cursor-pointer animate-float"
              >
                <span className="text-xs uppercase tracking-widest font-light">
                  {locale === 'cn' ? '探索更多' : 'Explore'}
                </span>
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Feature Sections */}
      {data.sections && data.sections.length > 0 && (
        <div id="features">
          {data.sections.map((section, index) => (
            <FeatureSection
              key={index}
              section={section}
              index={index}
              totalSections={data.sections.length}
            />
          ))}
        </div>
      )}

      {/* Footer CTA Section */}
      {data.downloadLink && (
        <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
              {locale === 'cn' ? '准备好了吗？' : 'Ready to try?'}
            </h2>
            <p className="text-lg text-gray-500 font-light mb-12">
              {locale === 'cn' ? `开始使用 ${data.appName}` : `Get started with ${data.appName}`}
            </p>
            <a
              href={data.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 border border-gray-200 text-gray-700 text-sm font-light tracking-widest uppercase rounded-full hover:border-gray-400 hover:bg-white transition-all duration-300"
            >
              <span>{messages.Download}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>
      )}

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fade-up 1s ease-out forwards;
        }

        .animate-fade-up-delay {
          animation: fade-up 1s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-fade-up-delay-2 {
          animation: fade-up 1s ease-out 0.6s forwards;
          opacity: 0;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .animate-float {
          animation: float 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
