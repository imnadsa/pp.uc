import React from 'react';

export default function Benefits() {
  return (
    <section className="bg-white py-12 lg:py-24">
      <div className="container-custom">

        {/* ЗАГОЛОВОК */}
        <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-16">
          <h2 className="text-2xl lg:text-5xl font-black text-gray-900 font-heading leading-tight mb-4">
            Почему вам можно доверить своё лечение
          </h2>
          <p className="text-gray-600 text-base lg:text-lg">
            Всё, что снижает риски и делает результат предсказуемым
          </p>
        </div>

        {/* КАРТОЧКИ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto">

          <BenefitCard
            title="Доступная стоимость"
            text="Мы экономим на процессах и администрировании, а не на качестве лечения"
            icon="💰"
          />

          <BenefitCard
            title="Экспертный контроль"
            text="За каждым клиническим случаем следит наставник-ортодонт"
            icon="👨‍⚕️"
          />

          <BenefitCard
            title="Индивидуальный план лечения"
            text="План составляется под ваш прикус, анатомию и задачи — без шаблонов"
            icon="📋"
          />

          <BenefitCard
            title="Поддержка на всех этапах"
            text="Мы сопровождаем вас от первой консультации до снятия брекетов"
            icon="🤝"
          />

          <BenefitCard
            title="Можно начать сразу"
            text="Без очередей, ожиданий и скрытых переплат"
            icon="⚡"
          />

        </div>
      </div>
    </section>
  );
}

/* =========================
   КАРТОЧКА ВЫГОДЫ
========================= */

interface BenefitCardProps {
  title: string;
  text: string;
  icon: string;
}

function BenefitCard({ title, text, icon }: BenefitCardProps) {
  return (
    <div className="bg-[#eef7fd] rounded-3xl p-5 lg:p-7 hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      
      {/* Иконка */}
      <div className="text-2xl mb-4">
        {icon}
      </div>

      {/* Заголовок */}
      <h3 className="font-bold text-gray-900 text-lg lg:text-xl mb-2">
        {title}
      </h3>

      {/* Текст */}
      <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
        {text}
      </p>
    </div>
  );
}
