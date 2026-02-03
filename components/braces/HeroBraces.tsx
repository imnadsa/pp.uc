'use client';

import React from 'react';

export default function HeroBraces() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white overflow-hidden py-12">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Перестаньте стесняться своей улыбки и проблем с прикусом
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed">
            Индивидуальное ортодонтическое лечение для взрослых и подростков в Санкт-Петербурге — с понятным планом и прогнозируемым результатом
          </p>

          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              Мы помогаем, если у вас:
            </h2>
            <div className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
              Неровные зубы, проблемы с прикусом, скрежет и сжимание зубов, скученность или щели, стираются зубы и выпадают пломбы, боли или дискомфорт в челюсти
            </div>
          </div>

          <p className="text-xl sm:text-2xl md:text-3xl text-gray-900 font-semibold mb-10 leading-relaxed">
            Вы получаете ровные зубы и стабильный прикус без боли и лишнего дискомфорта — с фиксацией результата после лечения
          </p>

          <div className="flex justify-center">
            
              href="tel:+78124216928"
              className="inline-block px-12 py-5 bg-primary text-white text-xl sm:text-2xl md:text-3xl font-bold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Позвонить нам и обсудить все за 2 минуты
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
