'use client';

import { useState, useEffect, useRef } from 'react';
import { type Locale } from '@/lib/i18n';
import { getMessages } from '@/messages';

export default function ContactPage() {
  const [locale, setLocale] = useState<Locale>('en');
  const [activeTab, setActiveTab] = useState<'project' | 'join'>('project');
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathLang = window.location.pathname.split('/')[1] as Locale;
      if (pathLang === 'en' || pathLang === 'cn') {
        setLocale(pathLang);
      }

      // Check if navigated from CTA with specific tab
      const urlParams = new URLSearchParams(window.location.search);
      const tab = urlParams.get('tab');
      if (tab === 'join') {
        setActiveTab('join');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.contact.trim() || !formData.message.trim()) {
      alert(locale === 'cn' ? '请填写所有必填字段' : 'Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // Using Formspree for form submission
      // Replace YOUR_FORM_ID with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: `[${activeTab === 'project' ? 'Project' : 'Join Us'}] New Contact Form Submission`,
          type: activeTab,
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', contact: '', message: '' });
        alert(messages.messageSentAlert);
      } else {
        throw new Error('Failed to submit');
      }
    } catch {
      alert(locale === 'cn' ? '发送失败，请稍后重试' : 'Failed to send. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Arrow Icon
  const ArrowIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Tab Switcher */}
      <div className="container mx-auto px-6 pt-20 pb-10">
        <div className="max-w-6xl mx-auto">
          {/* Tab Switcher */}
          <div className="flex border-b border-gray-200 mb-12">
            <button
              onClick={() => setActiveTab('project')}
              className={`px-8 py-4 text-lg font-light transition-all duration-300 ${
                activeTab === 'project'
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {messages.projectCollaboration}
            </button>
            <button
              onClick={() => setActiveTab('join')}
              className={`px-8 py-4 text-lg font-light transition-all duration-300 ${
                activeTab === 'join'
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {messages.joinUs}
            </button>
          </div>

          {/* Dynamic Content Based on Tab */}
          <div className="text-left">
            {activeTab === 'project' ? (
              <div>
                <h1 className="text-4xl lg:text-5xl font-light text-black mb-8">
                  {messages.needProfessionalExpertise}
                </h1>
                <p className="text-gray-500 text-xl max-w-2xl">
                  {messages.letsDiscussProject}
                </p>
              </div>
            ) : (
              <div>
                <h1 className="text-4xl lg:text-5xl font-light text-black mb-4">
                  {messages.readyToJoinTeam}
                </h1>
                <p className="text-gray-500 text-xl max-w-2xl">
                  {messages.lookingForTalented}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-left">
            <h2 className="text-2xl font-light text-black mb-8">
              {activeTab === 'project'
                ? messages.tellUsYourProject
                : messages.getToKnowYou}
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
                  {activeTab === 'project'
                    ? messages.projectDescription
                    : messages.selfIntroduction}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-black focus:outline-none transition-colors bg-transparent resize-none"
                  placeholder={
                    activeTab === 'project'
                      ? messages.projectDescriptionPlaceholder
                      : messages.selfIntroductionPlaceholder
                  }
                />
              </div>

              <div className="pt-6 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-3 px-8 py-3 bg-black text-white hover:bg-gray-900 transition-colors group disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? '...' : messages.sendMessage}</span>
                  <ArrowIcon />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
