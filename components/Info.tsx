import React from 'react';

export default function Info() {
  return (
    <section className="bg-[#eef7fd] py-16 lg:py-24">
      <div className="container-custom">
        
        {/* Заголовок и плашка сверху */}
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
          <div className="inline-block px-6 py-2 rounded-full bg-[#287FB8]/10 text-[#287FB8] font-semibold mb-6">
            У нас нет практикантов и стажёров
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 font-heading leading-tight max-w-4xl">
            Каждый врач имеет высшую категорию, а результаты говорят сами за себя:
          </h2>
        </div>

        {/* Основная сетка */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* 1. Левая большая фотография (Заглушка) */}
          <div className="lg:col-span-5 min-h-[400px] lg:min-h-[auto] relative rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 font-medium text-lg text-center p-6">
              [Фото команды врачей в кабинете]
            </div>
            {/* Градиент поверх фото для красоты */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#287FB8]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* 2. Центральная колонка с карточками (4 блока) */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-4">
            
            {/* Карточка 1 */}
            <InfoCard 
              value="6 000" 
              prefix="Более" 
              label="пациентов прошли лечение" 
            />

            {/* Карточка 2 */}
            <InfoCard 
              value="98%" 
              label="завершили лечение в срок" 
            />

            {/* Карточка 3 */}
            <InfoCard 
              value="14-26" 
              suffix="мес"
              prefix="От"
              label="средний срок лечения" 
            />

            {/* Карточка 4 */}
            <InfoCard 
              value="100%" 
              label="получили гарантию на результат" 
            />
          </div>

          {/* 3. Правая фотография (Заглушка) - скрываем на мобильном, если нужно, или оставляем */}
          <div className="lg:col-span-3 min-h-[300px] lg:min-h-[auto] relative rounded-3xl overflow-hidden hidden lg:block">
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 font-medium text-lg text-center p-6">
              [Портрет главврача]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Компонент карточки с цифрами
interface InfoCardProps {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

function InfoCard({ value, label, prefix, suffix }: InfoCardProps) {
  return (
    <div className="bg-white p-6 lg:p-7 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 relative flex flex-col justify-center h-full min-h-[140px]">
      {/* Акцентная точка в углу */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-[#287FB8] rounded-full animate-pulse"></div>
      
      <div className="text-[#287FB8] font-black font-heading leading-none mb-2">
        {prefix && <span className="text-xl text-gray-500 font-medium mr-2 align-middle">{prefix}</span>}
        <span className="text-4xl lg:text-5xl">{value}</span>
        {suffix && <span className="text-2xl ml-1 align-baseline">{suffix}</span>}
      </div>
      
      <p className="text-gray-600 font-medium text-base lg:text-lg leading-tight">
        {label}
      </p>
    </div>
  );
}
