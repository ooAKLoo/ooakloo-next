'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';

interface ProductCardProps {
  name: string;
  slogan: string;
  imageUrl: string;
  date: string;
  productId: string;
  lang: Locale;
  comingSoon?: boolean;
  href?: string;
  imageMode?: 'contain' | 'cover';
}

export default function ProductCard({
  name,
  slogan,
  imageUrl,
  date,
  productId,
  lang,
  comingSoon = false,
  href,
  imageMode = 'contain',
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isLinked = Boolean(href) || !comingSoon;
  const cardHref = href ?? `/${lang}/products/${productId}`;
  const wrapperClass = `group block ${comingSoon && !isLinked ? 'cursor-default' : ''}`;
  const imageClassName = imageMode === 'cover' ? 'object-cover' : 'object-contain p-8';
  const mediaBgClassName = imageMode === 'cover' ? 'bg-black' : 'bg-[#f8f8f8]';

  const content = (
    <div className="relative">
      {/* Image container */}
      <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${mediaBgClassName}`}>
        <div className={`absolute inset-0 transition-transform duration-500 ${isHovered && isLinked ? 'scale-105' : 'scale-100'}`}>
          <Image
            src={imageUrl}
            alt={name}
            fill
            className={imageClassName}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>

        {/* Coming Soon Badge */}
        {comingSoon && (
          <div className="absolute top-3 right-3">
            <div className="px-3 py-1.5 bg-gray-900 rounded-full">
              <span className="text-xs font-medium text-white tracking-wide">
                {lang === 'cn' ? '即将发布' : 'Coming Soon'}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">{name}</h3>
          <span className="text-xs text-gray-400">{date}</span>
        </div>
        <p className="mt-1 text-sm line-clamp-1 text-gray-500">{slogan}</p>
      </div>

      {/* Bottom line animation */}
      {isLinked && (
        <div className={`mt-3 h-px bg-gray-900 transition-transform duration-500 origin-left ${isHovered ? 'scale-x-100' : 'scale-x-0'}`} />
      )}
    </div>
  );

  if (isLinked) {
    return (
      <Link
        href={cardHref}
        className={wrapperClass}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      className={wrapperClass}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {content}
    </div>
  );
}
