'use client';

import { useState } from 'react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [form, setForm] = useState({
    name: '',
    age: '',
    phone: '',
    consent: false,
  });

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.consent) {
      alert('Необходимо согласие на обработку персональных данных');
      return;
    }

    await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        age: form.age,
        phone: form.phone,
        source: 'Popup CTA',
      }),
    });

    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="bg-[#2db2e8] rounded-2xl w-full max-w-md p-6 relative text-white">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-xl"
        >
          ×
        </button>

        <h3 className="text-2xl font-black text-center mb-6">
          Запишитесь на приём специалиста
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Ваше имя"
            className="w-full rounded-lg px-4 py-3 text-gray-900"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="number"
            placeholder="Возраст"
            className="w-full rounded-lg px-4 py-3 text-gray-900"
            required
            value={form.age}
            onChange={(e) => setForm({ ...form, age: e.target.value })}
          />

          <input
            type="tel"
            placeholder="Телефон"
            className="w-full rounded-lg px-4 py-3 text-gray-900"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          {/* Consent */}
          <label className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(e) => setForm({ ...form, consent: e.target.checked })}
              className="mt-1"
            />
            <span>
              Я согласен на{' '}
              <a
                href="https://xn--d1ajebkedbcem2k7b.xn--p1ai/polzovatelskoe_soglashenie/"
                target="_blank"
                className="underline"
              >
                обработку персональных данных
              </a>
            </span>
          </label>

          <button
            type="submit"
            className="w-full bg-[#1f7fb2] hover:bg-[#176c99] transition rounded-lg py-3 font-semibold"
          >
            Записаться на консультацию
          </button>
        </form>
      </div>
    </div>
  );
}
