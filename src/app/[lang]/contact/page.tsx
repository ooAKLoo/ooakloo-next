'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Paperclip, X } from 'lucide-react';
import { Orbit } from '@ooakloowj/orbit';
import { type Locale } from '@/lib/i18n';
import { getMessages } from '@/messages';

Orbit.configure({
  appId: 'com.dongju.ooakloo',
  autoTrack: false,
});

const MAX_ATTACHMENT_SIZE = 15 * 1024 * 1024;
const ACCEPTED_ATTACHMENT_TYPES = [
  '.pdf',
  '.doc',
  '.docx',
  '.ppt',
  '.pptx',
  '.key',
  '.pages',
  '.png',
  '.jpg',
  '.jpeg',
  '.webp',
  '.zip',
].join(',');

function formatFileSize(bytes: number): string {
  if (bytes < 1024 * 1024) {
    return `${Math.max(1, Math.round(bytes / 1024))}KB`;
  }

  return `${(bytes / 1024 / 1024).toFixed(1)}MB`;
}

export default function ContactPage() {
  const [locale, setLocale] = useState<Locale>('en');
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  });
  const [attachment, setAttachment] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathLang = window.location.pathname.split('/')[1] as Locale;
      if (pathLang === 'en' || pathLang === 'cn') {
        setLocale(pathLang);
      }
    }
  }, []);

  const messages = getMessages(locale);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAttachmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    if (file.size > MAX_ATTACHMENT_SIZE) {
      alert(messages.attachmentTooLarge);
      e.target.value = '';
      return;
    }

    setAttachment(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.contact.trim() || !formData.message.trim()) {
      alert(locale === 'cn' ? '请填写所有必填字段' : 'Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const sent = await Orbit.sendFeedback({
        content: `[Join Us]\nName: ${formData.name}\nMessage: ${formData.message}`,
        contact: formData.contact,
        attachments: attachment ? [attachment] : undefined,
      });

      if (!sent) {
        throw new Error('Failed to send feedback');
      }

      setFormData({ name: '', contact: '', message: '' });
      setAttachment(null);
      alert(messages.messageSentAlert);
    } catch {
      alert(locale === 'cn' ? '发送失败，请稍后重试' : 'Failed to send. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-20 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-left">
            <h1 className="text-4xl lg:text-5xl font-light text-black mb-4">
              {messages.readyToJoinTeam}
            </h1>
            <p className="text-gray-500 text-xl max-w-2xl">
              {messages.lookingForTalented}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-left">
            <h2 className="text-2xl font-light text-black mb-8">
              {messages.getToKnowYou}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  {messages.nameRequired}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-black focus:outline-none transition-colors bg-transparent"
                  placeholder={messages.yourName}
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  {messages.contactRequired}
                </label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-black focus:outline-none transition-colors bg-transparent"
                  placeholder={messages.contactPlaceholder}
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  {messages.selfIntroduction}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-black focus:outline-none transition-colors bg-transparent resize-none"
                  placeholder={messages.selfIntroductionPlaceholder}
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-3">
                  {messages.attachmentOptional}
                </label>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <label
                    htmlFor="contact-attachment"
                    className="inline-flex w-fit cursor-pointer items-center gap-2 border border-gray-300 px-4 py-2 text-sm text-black transition-colors hover:border-black"
                  >
                    <Paperclip className="h-4 w-4" />
                    <span>{attachment ? messages.changeAttachment : messages.addAttachment}</span>
                  </label>
                  <input
                    id="contact-attachment"
                    type="file"
                    accept={ACCEPTED_ATTACHMENT_TYPES}
                    onChange={handleAttachmentChange}
                    className="sr-only"
                  />
                  <p className="text-sm text-gray-500">{messages.attachmentHint}</p>
                </div>

                {attachment && (
                  <div className="mt-3 flex max-w-xl items-center justify-between gap-3 border border-gray-200 px-3 py-2 text-sm text-gray-700">
                    <div className="flex min-w-0 items-center gap-2">
                      <Paperclip className="h-4 w-4 flex-shrink-0 text-gray-400" />
                      <span className="truncate">{attachment.name}</span>
                      <span className="flex-shrink-0 text-gray-400">{formatFileSize(attachment.size)}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setAttachment(null)}
                      className="flex h-7 w-7 flex-shrink-0 items-center justify-center text-gray-400 transition-colors hover:text-black"
                      aria-label={messages.removeAttachment}
                      title={messages.removeAttachment}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>

              <div className="pt-6 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-3 px-8 py-3 bg-black text-white hover:bg-gray-900 transition-colors group disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? '...' : messages.sendMessage}</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
