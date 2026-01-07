'use client';

import React, { useEffect, useState } from 'react';
import Button from './ui/Button';

export default function FinalCTA() {
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 15 * 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  return (
    <section className="bg-[#0f172a] text-white py-20 lg:py-32">
      <div className="container-custom">

        <div className="max-w-4xl mx-auto text-center">

          {/* Заголовок */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-tight mb-6">
            Зафиксируйте цену на лечение<br />до повышения стоимости
          </h2>

          {/* Цена */}
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Идеальная улыбка за <span className="text-[#38bdf8]">3.800₽/месяц</span>
          </p>

          {/* Таймер */}
          <div className="inline-block bg-white/10 rounded-2xl px-6 py-4 mb-8">
            <p className="text-sm uppercase tracking-wide text-gray-300 mb-1">
              Специальная цена действует ещё
            </p>
            <p className="text-3xl font-mono font-bold">
              {minutes}:{seconds}
            </p>
          </div>

          {/* Дефицит */}
          <div className="text-lg text-gray-300 space-y-2 mb-10">
            <p>🔒 Только 10 мест в месяц под наставнический контроль</p>
            <p>📅 В новом месяце стоимость может измениться</p>
            <p>📌 Места распределяются строго по порядку заявок</p>
          </div>

          {/* CTA */}
          {/* CTA */}
          <Button
            openAppointment
            className="px-10 py-4 text-lg sm:text-xl"
          >
            Зафиксировать цену <br />3.800₽/месяц
          </Button>


          <p className="text-sm text-gray-400 mt-4">
            Бесплатно · без обязательств · вы просто фиксируете условия
          </p>

        </div>
      </div>
    </section>
  );
}
