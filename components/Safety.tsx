import React from 'react';

export default function Safety() {
  return (
    <section className="bg-[#eef7fd] py-16 lg:py-28">
      <div className="container-custom">

        {/* ЗАГОЛОВОК */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 font-heading leading-tight mb-6">
            Почему лечение под полным контролем <br />— это безопасно
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl leading-relaxed">
            Мы выстроили систему, в которой ошибки исключены
          </p>
        </div>

        {/* КАРТОЧКИ БЕЗОПАСНОСТИ */}
        <div className="max-w-5xl mx-auto space-y-6 lg:space-y-10">

          <SafetyCard
            icon="🧩"
            title="Единая клиническая система «Полный Порядок»"
            text="Все врачи работают по единым стандартам и утверждённым протоколам лечения"
          />

          <SafetyCard
            icon="👨‍⚕️"
            title="Экспертное согласование каждого случая"
            text="Ключевые решения утверждаются ведущим ортодонтом, а не принимаются в одиночку"
          />

          <SafetyCard
            icon="💾"
            title="Цифровая карта пациента"
            text="Диагностика, план лечения и все этапы фиксируются и сохраняются"
          />

          <SafetyCard
            icon="🛡️"
            title="Гарантия на результат"
            text="При соблюдении рекомендаций мы гарантируем предсказуемый результат лечения"
          />

          <SafetyCard
            icon="📞"
            title="Прямая связь с наставником"
            text="Вы можете лично задать вопрос ведущему ортодонту при любых сомнениях"
          />

        </div>
      </div>
    </section>
  );
}

/* =========================
   КАРТОЧКА БЕЗОПАСНОСТИ
========================= */

interface SafetyCardProps {
  icon: string;
  title: string;
  text: string;
}

function SafetyCard({ icon, title, text }: SafetyCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 flex gap-5 lg:gap-8 shadow-sm hover:shadow-md transition-shadow duration-300">
      
      {/* ИКОНА */}
      <div className="text-3xl lg:text-4xl flex-shrink-0">
        {icon}
      </div>

      {/* ТЕКСТ */}
      <div>
        <h3 className="font-black text-gray-900 text-xl sm:text-2xl lg:text-3xl mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}
