'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    age: '',
    phone: '',
    consent: false,
  });

  if (!isOpen) return null;

  // Функция форматирования телефона
  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '');
    const limited = digits.slice(0, 11);
    
    if (limited.length === 0) return '';
    
    let formatted = '+7';
    if (limited.length > 1) {
      formatted += ' (' + limited.slice(1, 4);
    }
    if (limited.length >= 4) {
      formatted += ') ' + limited.slice(4, 7);
    }
    if (limited.length >= 7) {
      formatted += '-' + limited.slice(7, 9);
    }
    if (limited.length >= 9) {
      formatted += '-' + limited.slice(9, 11);
    }
    
    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setForm({ ...form, phone: formatted });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.consent) {
      alert('Необходимо согласие на обработку персональных данных');
      return;
    }

    const digits = form.phone.replace(/\D/g, '');
    if (digits.length !== 11) {
      alert('Введите корректный номер телефона');
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
    router.push('/thank-you');
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="bg-[#2db2e8] rounded-2xl w-full max-w-md p-6 relative text-white">

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
            placeholder="+7 (___) ___-__-__"
            className="w-full rounded-lg px-4 py-3 text-gray-900"
            required
            value={form.phone}
            onChange={handlePhoneChange}
          />

          <label className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(e) => setForm({ ...form, consent: e.target.checked })}
              className="mt-1"
              required
            />
            <span>
              Я согласен на{' '}
              
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
