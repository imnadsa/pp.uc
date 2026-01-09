import React from 'react';

export default function Benefits() {
  return (
    <section className="bg-white py-16 lg:py-28">
      <div className="container-custom">

        {/* ЗАГОЛОВОК */}
        <div className="max-w-4xl mx-auto text-center mb-14 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 font-heading leading-tight mb-6">
            Почему нам можно доверить своё лечение
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl leading-relaxed">
            Всё, что снижает риски и делает результат предсказуемым
          </p>
        </div>

        {/* КАРТОЧКИ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 max-w-6xl mx-auto">

          <BenefitCard
            title="Доступная стоимость"
            text="Мы экономим на процессах и администрировании, а не на качестве лечения и материалах"
            icon="💰"
          />

          <BenefitCard
            title="Экспертный контроль"
            text="Каждый клинический случай находится под постоянным контролем наставника-ортодонта"
            icon="👨‍⚕️"
          />

          <BenefitCard
            title="Индивидуальный план лечения"
            text="План лечения составляется персонально под ваш прикус, анатомию и задачи"
            icon="📋"
          />

          <BenefitCard
            title="Поддержка на всех этапах"
            text="Мы сопровождаем вас от первой консультации до снятия брекетов и завершения лечения"
            icon="🤝"
          />

          <BenefitCard
            title="Можно начать сразу"
            text="Без ожиданий, очередей и скрытых платежей — вы начинаете лечение тогда, когда готовы"
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
    <div className="bg-[#eef7fd] rounded-3xl p-7 sm:p-8 lg:p-10 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      
      {/* Иконка */}
      <div className="text-3xl lg:text-4xl mb-6">
        {icon}
      </div>

      {/* Заголовок */}
      <h3 className="font-black text-gray-900 text-xl sm:text-2xl lg:text-3xl mb-4 leading-tight">
        {title}
      </h3>

      {/* Текст */}
      <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
        {text}
      </p>
    </div>
  );
}

