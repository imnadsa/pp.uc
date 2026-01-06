import React from 'react';
import Button from './ui/Button';

export default function Bonuses() {
  return (
    <section className="bg-white py-16 lg:py-28">
      <div className="container-custom">

        {/* ЗАГОЛОВОК */}
        <div className="max-w-4xl mx-auto text-center mb-14 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 font-heading leading-tight mb-6">
            Бонусы при записи через сайт
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl leading-relaxed">
            Вы получаете их сразу после оставления заявки
          </p>
        </div>

        {/* КАРТОЧКИ БОНУСОВ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 max-w-6xl mx-auto mb-14 lg:mb-20">

          <BonusCard
            icon="🎁"
            title="Бесплатная первичная диагностика"
            text="Вместо 2 500 ₽"
          />

          <BonusCard
            icon="🦷"
            title="Чистка перед установкой"
            text="В подарок"
          />

          <BonusCard
            icon="📋"
            title="Персональный чек-лист лечения"
            text="Для брекетов и элайнеров"
          />

        </div>

        {/* CTA */}
        <div className="flex flex-col items-center text-center">
          <Button
            openAppointment
            className="px-10 py-4 text-lg sm:text-xl"
          >
            Получить бесплатную диагностику
          </Button>
          <p className="text-sm sm:text-base text-gray-500 mt-4">
            Бесплатно · без обязательств · точный план лечения
          </p>
        </div>


      </div>
    </section>
  );
}

/* =========================
   КАРТОЧКА БОНУСА
========================= */

interface BonusCardProps {
  icon: string;
  title: string;
  text: string;
}

function BonusCard({ icon, title, text }: BonusCardProps) {
  return (
    <div className="bg-[#eef7fd] rounded-3xl p-7 sm:p-8 lg:p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
      
      {/* ИКОНКА */}
      <div className="text-4xl lg:text-5xl mb-6">
        {icon}
      </div>

      {/* ЗАГОЛОВОК */}
      <h3 className="font-black text-gray-900 text-xl sm:text-2xl lg:text-3xl mb-3 leading-tight">
        {title}
      </h3>

      {/* ТЕКСТ */}
      <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
        {text}
      </p>
    </div>
  );
}

