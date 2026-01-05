import { en } from './en';
import { cn } from './cn';
import type { Locale } from '@/lib/i18n';

export const messages = { en, cn };

export function getMessages(locale: Locale) {
  return messages[locale] || messages.en;
}

export type Messages = typeof en;
