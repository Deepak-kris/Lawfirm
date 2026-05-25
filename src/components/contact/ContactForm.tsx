'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { practiceAreas } from '@/data/practiceAreas';

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  practiceArea: z.string().optional(),
  subject: z.string().min(5, 'Please provide a brief subject (at least 5 characters)'),
  message: z.string().min(20, 'Please describe your matter in at least 20 characters'),
  website: z.string().max(0, 'Bot detected'),
});

type FormData = z.infer<typeof schema>;

type Status = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-10 text-center">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-serif text-navy mb-2">Message Sent</h3>
        <p className="text-gray-600 text-sm">Thank you for reaching out. One of our attorneys will contact you within one business day.</p>
      </div>
    );
  }

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 border rounded text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition ${
      hasError ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
    }`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {status === 'error' && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded" role="alert">
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      {/* Honeypot — hidden from real users */}
      <input type="text" {...register('website')} tabIndex={-1} aria-hidden="true" className="hidden" autoComplete="off" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div className="sm:col-span-2">
          <label htmlFor="name" className="block text-sm font-semibold text-navy mb-1.5">
            Full Name <span aria-hidden className="text-red-500">*</span>
          </label>
          <input id="name" type="text" placeholder="Jane Smith" {...register('name')} className={inputClass(!!errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
          {errors.name && <p id="name-error" className="mt-1 text-red-500 text-xs">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1.5">
            Email Address <span aria-hidden className="text-red-500">*</span>
          </label>
          <input id="email" type="email" placeholder="jane@example.com" {...register('email')} className={inputClass(!!errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
          {errors.email && <p id="email-error" className="mt-1 text-red-500 text-xs">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1.5">Phone (optional)</label>
          <input id="phone" type="tel" placeholder="+1 (555) 000-0000" {...register('phone')} className={inputClass(false)} />
        </div>

        {/* Practice Area */}
        <div className="sm:col-span-2">
          <label htmlFor="practiceArea" className="block text-sm font-semibold text-navy mb-1.5">Practice Area (optional)</label>
          <select id="practiceArea" {...register('practiceArea')} className={inputClass(false)}>
            <option value="">Select a practice area...</option>
            {practiceAreas.map((a) => (
              <option key={a.id} value={a.title}>{a.title}</option>
            ))}
          </select>
        </div>

        {/* Subject */}
        <div className="sm:col-span-2">
          <label htmlFor="subject" className="block text-sm font-semibold text-navy mb-1.5">
            Subject <span aria-hidden className="text-red-500">*</span>
          </label>
          <input id="subject" type="text" placeholder="Brief description of your legal matter" {...register('subject')} className={inputClass(!!errors.subject)} aria-describedby={errors.subject ? 'subject-error' : undefined} />
          {errors.subject && <p id="subject-error" className="mt-1 text-red-500 text-xs">{errors.subject.message}</p>}
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-semibold text-navy mb-1.5">
            Message <span aria-hidden className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={6}
            placeholder="Please describe your situation in as much detail as you're comfortable sharing..."
            {...register('message')}
            className={inputClass(!!errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && <p id="message-error" className="mt-1 text-red-500 text-xs">{errors.message.message}</p>}
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-4 mb-6">
        All communications are protected by attorney-client privilege. Your information is never shared.
      </p>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-gold text-navy font-semibold py-4 rounded hover:bg-gold-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
      >
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
