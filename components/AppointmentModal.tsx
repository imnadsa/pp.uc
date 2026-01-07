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

  // Функция форматирования телефона
  const formatPhone = (value: string) => {
    // Убираем все, кроме цифр
    const digits = value.replace(/\D/g, '');
    
    // Ограничиваем до 11 цифр
    const limited = digits.slice(0, 11);
    
    // Форматируем по шаблону +7 (XXX) XXX-XX-XX
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

    // Проверяем, что телефон заполнен полностью (11 цифр)
    const digits = form.phone.replace(/\D/g, '');
    if (digits.length !== 11) {
      alert('Введите корректный номер телефона');
      return;
    }

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          age: form.age,
          phone: form.phone,
          source: 'Header CTA', // 👈 Источник заявки
        }),
      });

      // Закрываем модалку после успешной отправки
      onClose();
      
      // Можно позже перенаправить на страницу благодарности:
      // window.location.href = '/thank-you';
      
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('Произошла ошибка. Попробуйте еще раз.');
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4" onClick={onClose}>
      <div 
        className="bg-[#2db2e8] rounded-2xl w-full max-w-md p-6 relative text-white"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-3xl hover:opacity-70 transition"
        >
          ×
        </button>

        <h3 className="text-2xl font-black text-center mb-6">
          Запишитесь на консультацию
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
            min="1"
            max="120"
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

          {/* Consent */}
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
                rel="noopener noreferrer"
                className="underline hover:opacity-80"
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
