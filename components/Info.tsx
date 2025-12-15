import React from 'react';
import Image from 'next/image'; // <-- 1. ДОБАВЬ ЭТОТ ИМПОРТ

export default function Info() {
  return (
    <section className="bg-[#eef7fd] py-12 lg:py-24">
      <div className="container-custom">
        
        {/* Заголовок */}
        <div className="flex flex-col items-center text-center mb-8 lg:mb-16">
          <div className="inline-block px-4 py-1.5 lg:px-6 lg:py-2 rounded-full bg-[#287FB8]/10 text-[#287FB8] text-sm lg:text-base font-semibold mb-4 lg:mb-6">
            У нас нет практикантов и стажёров
          </div>
          <h2 className="text-2xl lg:text-5xl font-black text-gray-900 font-heading leading-tight max-w-4xl">
            Врачи со средним опытом &gt;10 лет, а результаты говорят сами за себя:
          </h2>
        </div>

        {/* ОСНОВНАЯ СЕТКА */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 lg:gap-6">
          
          {/* 
             ГРУППА 1: Большое фото команды (team1.png)
          */}
          <div className="contents lg:block lg:col-span-5">
            <div className="col-span-2 order-6 lg:order-none relative rounded-3xl overflow-hidden group h-[200px] lg:h-full mt-2 lg:mt-0">
              {/* 2. ЗАМЕНИЛИ ЗАГЛУШКУ НА IMAGE */}
              <Image
                src="/team1.png"
                alt="Команда врачей"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#287FB8]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* ГРУППА 2: Центральные карточки */}
          <div className="contents lg:flex lg:flex-col lg:col-span-4 lg:gap-4">
            
            <div className="order-1 lg:order-none col-span-1 lg:w-full">
              <InfoCard 
                value="6 000" 
                prefix=">" 
                label="пациентов" 
                fullLabel="пациентов прошли лечение"
              />
            </div>

            <div className="order-3 lg:order-none col-span-1 lg:w-full">
              <InfoCard 
                value="98%" 
                label="успех" 
                fullLabel="завершили лечение в срок"
              />
            </div>

            <div className="order-4 lg:order-none col-span-1 lg:w-full">
              <InfoCard 
                value="14-26" 
                suffix="мес"
                prefix=""
                label="срок" 
                fullLabel="средний срок лечения"
              />
            </div>
          </div>

          {/* ГРУППА 3: Правая колонка */}
          <div className="contents lg:flex lg:flex-col lg:col-span-3 lg:gap-4">
            
            {/* Портрет главврача (team2.png) */}
            <div className="order-2 lg:order-none col-span-1 lg:w-full relative rounded-3xl overflow-hidden min-h-[140px] lg:flex-grow">
              {/* 3. ЗАМЕНИЛИ ЗАГЛУШКУ НА IMAGE */}
              <Image
                src="/team2.png"
                alt="Врачи клиники"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Карточка 4: 100% */}
            <div className="order-5 lg:order-none col-span-2 lg:w-full">
              <InfoCard 
                value="100%" 
                label="получили гарантию на результат" 
                fullLabel="получили гарантию на результат"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ... остальной код InfoCard остается без изменений ...

// Компонент карточки
interface InfoCardProps {
  value: string;
  label: string;
  fullLabel: string;
  prefix?: string;
  suffix?: string;
}

function InfoCard({ value, label, fullLabel, prefix, suffix }: InfoCardProps) {
  return (
    <div className="bg-white p-4 lg:p-7 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 relative flex flex-col justify-center h-full min-h-[120px] lg:min-h-[140px]">
      <div className="absolute top-3 right-3 lg:top-4 lg:right-4 w-2 h-2 lg:w-3 lg:h-3 bg-[#287FB8] rounded-full"></div>
      <div className="text-[#287FB8] font-black font-heading leading-none mb-1 lg:mb-2 whitespace-nowrap">
        {prefix && <span className="text-sm lg:text-xl text-gray-500 font-medium mr-1 lg:mr-2 align-middle">{prefix}</span>}
        <span className="text-3xl lg:text-5xl">{value}</span>
        {suffix && <span className="text-sm lg:text-2xl ml-1 align-baseline">{suffix}</span>}
      </div>
      <p className="text-gray-600 font-medium text-xs lg:text-lg leading-tight lg:hidden">
        {label}
      </p>
      <p className="text-gray-600 font-medium text-xs lg:text-lg leading-tight hidden lg:block">
        {fullLabel}
      </p>
    </div>
  );
}
