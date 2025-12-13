'use client';

import React, { useRef } from 'react';
import Image from 'next/image';

// Данные врачей (6 штук)
const doctorsData = [
  {
    id: 1,
    name: "Косороткина Екатерина Сергеевна",
    specialty: "Стоматолог-терапевт, пародонтолог, хирург, ведущий специалист",
    tagline: "Ортодонт-перфекционист",
    experience: "16 лет",
    image: "/doctor1.png", // Убедись, что картинка лежит в public
  },
  {
    id: 2,
    name: "Иванова Мария Петровна",
    specialty: "Стоматолог-ортодонт, гнатолог",
    tagline: "Ортодонт-перфекционист",
    experience: "12 лет",
    image: "/doctor1.png",
  },
  {
    id: 3,
    name: "Смирнов Алексей Владимирович",
    specialty: "Челюстно-лицевой хирург, имплантолог",
    tagline: "Хирург с золотыми руками",
    experience: "20 лет",
    image: "/doctor1.png",
  },
  {
    id: 4,
    name: "Петров Дмитрий Сергеевич",
    specialty: "Стоматолог-ортопед",
    tagline: "Эстетика в каждой детали",
    experience: "8 лет",
    image: "/doctor1.png",
  },
  {
    id: 5,
    name: "Соколова Анна Игоревна",
    specialty: "Детский стоматолог",
    tagline: "Зубная фея для ваших детей",
    experience: "10 лет",
    image: "/doctor1.png",
  },
  {
    id: 6,
    name: "Волков Сергей Андреевич",
    specialty: "Стоматолог-хирург",
    tagline: "Удаление без боли",
    experience: "14 лет",
    image: "/doctor1.png",
  },
];

export default function Doctors() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Функция скролла
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      // Ширина карточки + отступ
      const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 300;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container-custom">
        
        {/* Заголовок и навигация */}
        <div className="flex justify-between items-end mb-10 lg:mb-14">
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 font-heading uppercase">
            Наши врачи
          </h2>
          
          {/* Кнопки навигации */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border-2 border-[#3AC3F3] flex items-center justify-center text-[#3AC3F3] hover:bg-[#3AC3F3] hover:text-white transition-all active:scale-95"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12H5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-[#3AC3F3] flex items-center justify-center text-white shadow-lg hover:bg-[#287FB8] transition-all active:scale-95"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>

        {/* Карусель */}
        {/* 
            snap-x mandatory: заставляет скролл "прилипать" к карточкам
            scrollbar-hide: прячет полосу прокрутки (нужен плагин или css)
        */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 -mx-5 px-5 lg:mx-0 lg:px-0 scrollbar-hide"
        >
          {doctorsData.map((doc) => (
            <div 
              key={doc.id} 
              className="flex-none w-full sm:w-[400px] lg:w-[420px] snap-center"
            >
              {/* Карточка врача */}
              <div className="relative bg-[#effaff] rounded-[2.5rem] border-2 border-[#3AC3F3] h-[550px] lg:h-[600px] overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                
                {/* Текстовая часть */}
                <div className="relative z-20 p-8 flex flex-col h-full pointer-events-none">
                  
                  {/* Имя */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 font-heading leading-tight mb-4">
                    {doc.name}
                  </h3>

                  {/* Специальность */}
                  <p className="text-gray-500 text-lg mb-6 leading-relaxed max-w-[80%]">
                    {doc.specialty}
                  </p>
                  
                  {/* Плашка Стаж */}
                  <div className="mb-6">
                    <span className="inline-block border border-[#3AC3F3] text-[#287FB8] px-5 py-2 rounded-xl font-bold text-sm bg-white">
                      Стаж: {doc.experience}
                    </span>
                  </div>

                  {/* Жирная подпись (Таглайн) */}
                  {doc.tagline && (
                    <div className="mt-auto mb-[60%] lg:mb-[70%]">
                      {/* Этот отступ mb нужен, чтобы текст не наезжал на лицо на мобилке, если фото высокое */}
                      <p className="text-[#3AC3F3] font-bold text-lg font-heading rotate-[-2deg] origin-left">
                        {doc.tagline}
                      </p>
                    </div>
                  )}

                </div>

                {/* Фото врача */}
                <div className="absolute bottom-0 right-0 w-[90%] h-[85%] z-10 flex items-end justify-end pointer-events-none">
                  <div className="relative w-full h-full">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      className="object-contain object-bottom"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>

                {/* Градиент снизу, чтобы текст читался, если наедет на фото (опционально) */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-[#effaff] via-transparent to-transparent z-10 pointer-events-none"></div> */}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
