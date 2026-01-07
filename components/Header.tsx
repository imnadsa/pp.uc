'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useModal } from './ModalProvider'; // 👈 Добавляем импорт

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const { open } = useModal(); // 👈 Получаем функцию открытия модального окна

  // Фиктивные данные клиник
  const clinics = [
    { title: "Клиника у м. Международная", address: "ул. Турку, д. 11, корпус 2" },
    { title: "Клиника в Гатчине", address: "ул. Коли Подрядчикова д. 22" },
    { title: "Клиника на Петрозаводской", address: "ул. Петрозаводская, д. 13" },
  ];

  // Обработка скролла
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container-custom">
        
        <div className="flex justify-between h-20 lg:h-28">
          
          {/* ЛОГОТИП (СЛЕВА) */}
          <Link href="/" className="flex items-start gap-4 shrink-0 group relative z-10">
            <div className="w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] text-[#3BC3F3] transition-transform duration-300 group-hover:translate-y-1">
              <LogoIcon />
            </div>
            
            <div className="flex flex-col mt-5 lg:mt-8">
              <span className="text-sm lg:text-xl font-black text-gray-900 uppercase tracking-wide leading-none">
                ПОЛНЫЙ ПОРЯДОК <sup className="text-[8px] lg:text-xs text-gray-500">®</sup>
              </span>
              <span className="text-[10px] lg:text-sm text-gray-500 font-medium mt-0.5 lg:mt-1">
                Учебный ортодонтический центр
              </span>
            </div>
          </Link>

          {/* ЦЕНТРАЛЬНАЯ ЧАСТЬ И КНОПКИ (ДЕСКТОП) */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12 self-center">
            
            {/* Выбор клиники */}
            <div className="relative group">
              <button 
                onClick={() => setIsLocationOpen(!isLocationOpen)}
                className="flex items-center gap-2 text-left hover:opacity-80 transition"
              >
                <div className="w-8 h-8 rounded-full bg-[#eef7fd] flex items-center justify-center text-[#3BC3F3]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <div className="text-[#3BC3F3] font-bold text-sm border-b border-dashed border-[#3BC3F3] inline-block leading-tight">
                    3 клиники
                  </div>
                  <div className="text-gray-500 text-xs mt-0.5">
                    в Санкт-Петербурге и Гатчине
                  </div>
                </div>
              </button>

              {/* Дропдаун */}
              {isLocationOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-72 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 p-2 z-50 animate-fade-in-up">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-gray-100 transform rotate-45"></div>
                  <div className="relative bg-white rounded-lg overflow-hidden">
                    {clinics.map((clinic, idx) => (
                      <div key={idx} className="p-3 hover:bg-[#eef7fd] cursor-pointer transition-colors border-b last:border-0 border-gray-50">
                        <div className="text-sm font-bold text-gray-800 mb-1">{clinic.title}</div>
                        <div className="text-xs text-gray-500">{clinic.address}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Телефон (текстом) */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#3BC3F3] flex items-center justify-center text-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <a href="tel:+78122149900" className="text-xl font-bold text-gray-900 hover:text-[#3BC3F3] transition">
                +7 812 214 99 00
              </a>
            </div>

            {/* Кнопка записи (Десктоп) */}
            <button 
              onClick={open} // 👈 Открываем модальное окно
              className="bg-[#3BC3F3] hover:bg-[#287FB8] text-white px-6 py-3 rounded-full font-bold text-sm transition-all shadow-lg shadow-[#3BC3F3]/30"
            >
              Записаться на приём
            </button>
          </div>

          {/* МОБИЛЬНАЯ ВЕРСИЯ (ПРАВАЯ ЧАСТЬ) */}
          <div className="flex lg:hidden items-center gap-2 self-center">
             
             {/* Кнопка телефона (Круглая, синяя, как на скрине) */}
             <a href="tel:+78122149900" className="w-10 h-10 bg-[#3BC3F3] rounded-full flex items-center justify-center text-white shadow-md active:scale-95 transition-transform">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
             </a>

             {/* Кнопка Записаться (Компактная) */}
             <button 
               onClick={open} // 👈 Открываем модальное окно
               className="bg-[#3BC3F3] text-white px-4 py-2.5 rounded-full font-bold text-xs shadow-md active:scale-95 transition-transform"
             >
              Записаться
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}

// Логотип
function LogoIcon() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
      <path d="M108 0H12V103.369C12 104.596 12.3634 105.795 13.0444 106.815C14.1958 108.54 16.1326 109.576 18.2065 109.576H19.1077C21.0388 109.576 22.9028 108.868 24.3469 107.586L50.2682 84.5736C53.0501 82.104 56.6409 80.74 60.3609 80.74C64.0809 80.74 67.6717 82.104 70.4536 84.5736L96.6819 107.858C97.9282 108.965 99.5426 109.576 101.209 109.576C103.221 109.576 105.136 108.683 106.425 107.138C107.443 105.918 108 104.38 108 102.792V0Z" fill="#3BC3F3"/>
    </svg>
  );
}
