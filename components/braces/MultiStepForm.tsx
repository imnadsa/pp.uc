'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MultiStepForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    situation: '',
    symptoms: '',
    hadTreatment: '',
    desiredResult: '',
    name: '',
    phone: '',
    consent: false,
  });

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  // Форматирование телефона
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
    setFormData({ ...formData, phone: formatted });
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      alert('Необходимо согласие на обработку персональных данных');
      return;
    }

    const digits = formData.phone.replace(/\D/g, '');
    if (digits.length !== 11) {
      alert('Введите корректный номер телефона');
      return;
    }

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          source: 'Многошаговая форма - Брекеты',
          situation: formData.situation,
          symptoms: formData.symptoms,
          hadTreatment: formData.hadTreatment,
          desiredResult: formData.desiredResult,
        }),
      });

      router.push('/thank-you1');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Произошла ошибка. Попробуйте еще раз.');
    }
  };

  return (
    <div className="bg-gray-900 rounded-3xl p-8 lg:p-12 max-w-5xl mx-auto">
      {/* Заголовок + Прогресс */}
      <div className="mb-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
            Расскажите о вашей ситуации в челюсти, получите четкий, понятный план лечения без размазанных сумм
          </p>
        </div>

        {/* Прогресс-бар */}
        <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* ШАГ 1: Ситуация с зубами */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-white font-heading">
              Расскажите, какая ситуация у вас с зубами сейчас
            </h3>
            <textarea
              value={formData.situation}
              onChange={(e) => setFormData({ ...formData, situation: e.target.value })}
              placeholder="Проходили ли лечение в других клиниках, что не понравилось, какие проблемы с зубами и что хотелось бы исправить"
              className="w-full h-32 px-6 py-4 rounded-2xl bg-white text-gray-900 placeholder-gray-400 text-base resize-none focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
        )}

        {/* ШАГ 2: Симптомы */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-white font-heading">
              Какие симптомы вы замечаете у себя?
            </h3>
            <textarea
              value={formData.symptoms}
              onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
              placeholder="Искривление зубов, щелчки, боль, и т.д."
              className="w-full h-32 px-6 py-4 rounded-2xl bg-white text-gray-900 placeholder-gray-400 text-base resize-none focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
        )}

        {/* ШАГ 3: Было ли лечение */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-white font-heading">
              Вы уже проходили лечение с брекетами или элайнерами?
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, hadTreatment: 'Да' })}
                className={`px-8 py-6 rounded-2xl text-lg font-medium transition-all ${
                  formData.hadTreatment === 'Да'
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    formData.hadTreatment === 'Да' ? 'border-white' : 'border-gray-500'
                  }`}>
                    {formData.hadTreatment === 'Да' && (
                      <div className="w-3 h-3 bg-white rounded-full" />
                    )}
                  </div>
                  Да
                </div>
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, hadTreatment: 'Нет' })}
                className={`px-8 py-6 rounded-2xl text-lg font-medium transition-all ${
                  formData.hadTreatment === 'Нет'
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    formData.hadTreatment === 'Нет' ? 'border-white' : 'border-gray-500'
                  }`}>
                    {formData.hadTreatment === 'Нет' && (
                      <div className="w-3 h-3 bg-white rounded-full" />
                    )}
                  </div>
                  Нет
                </div>
              </button>
            </div>
          </div>
        )}

        {/* ШАГ 4: Желаемый результат */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-white font-heading">
              Какой результат лечения вы хотите получить?
            </h3>
            <textarea
              value={formData.desiredResult}
              onChange={(e) => setFormData({ ...formData, desiredResult: e.target.value })}
              placeholder="Расскажите самые важные аспекты лечения для вас"
              className="w-full h-32 px-6 py-4 rounded-2xl bg-white text-gray-900 placeholder-gray-400 text-base resize-none focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
        )}

        {/* ШАГ 5: Контакты */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2 font-medium">Ваше имя</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Екатерина"
                className="w-full px-6 py-4 rounded-2xl bg-white text-gray-900 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">Ваш номер телефона</label>
              <div className="relative">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <span className="text-2xl">🇷🇺</span>
                </div>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="+7 (000) 000-00-00"
                  className="w-full pl-20 pr-6 py-4 rounded-2xl bg-white text-gray-900 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>

            <label className="flex items-start gap-3 text-sm text-gray-400 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-1 w-5 h-5 rounded border-2 border-gray-500 bg-transparent checked:bg-primary checked:border-primary cursor-pointer"
                required
              />
              <span>
                Я согласен с{' '}
                <a
                  href="https://xn--d1ajebkedbcem2k7b.xn--p1ai/polzovatelskoe_soglashenie/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  политикой конфиденциальности
                </a>
              </span>
            </label>
          </div>
        )}

        {/* Кнопки навигации */}
        <div className="flex items-center justify-between mt-12">
          <div className="text-sm text-gray-500">
            Шаг {currentStep} / {totalSteps}
          </div>

          <div className="flex gap-4">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="px-6 py-3 rounded-xl border-2 border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white transition-all flex items-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>
            )}

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-8 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold transition-all flex items-center gap-2"
              >
                Далее
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            ) : (
              <button
                type="submit"
                className="px-8 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold transition-all"
              >
                Получить планы
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
