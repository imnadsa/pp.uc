'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useModal } from './ModalProvider'; // 👈 Добавьте этот импорт

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { open } = useModal(); // 👈 Добавьте этот хук
  
  const [activeMap, setActiveMap] = useState<string | null>(null);

  const clinics = [
    {
      city: "Санкт-Петербург",
      address: "м. Чкаловская, ул. Петрозаводская, д. 13",
      phones: ['8 (812) 320-10-01', '8 (812) 214-99-00'],
      email: "info@ppclinic.ru",
      mapSrc: "https://yandex.ru/map-widget/v1/?ll=30.295356%2C59.963685&mode=poi&poi%5Bpoint%5D=30.288881%2C59.964874&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D87260402616&z=16.45",
      image: "/petrozavodskaya.png"
    }
  ];

  return (
    <>
      <footer className="bg-[#262626] pt-12 pb-8 text-sm text-gray-300 relative">
        <div className="container-custom">
          
          {/* --- ВЕРХНЯЯ ЧАСТЬ --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 border-b border-gray-800 pb-12">
            
            {/* 1. ЛОГОТИП И РЕЙТИНГ */}
            <div className="lg:col-span-5 flex flex-col items-start">
              
              {/* Текст логотипа */}
              <div className="flex flex-col mb-8">
                <span className="text-3xl lg:text-5xl font-black text-white uppercase leading-none tracking-wide">
                  ПОЛНЫЙ<br/>ПОРЯДОК <sup className="text-lg text-gray-500">®</sup>
                </span>
                <span className="text-base text-gray-400 font-medium mt-3 tracking-widest uppercase">
                  Ортодонтия и стоматология
                </span>
              </div>

              {/* Рейтинг */}
              <div className="flex items-center gap-6">
                 <div className="text-6xl font-black text-[#3BC3F3]">4.9</div>
                 <div className="text-base text-gray-400 leading-snug">
                   Средняя оценка на основе<br/>
                   <span className="text-white font-bold text-lg border-b border-[#3BC3F3]">600+ отзывов</span>
                 </div>
              </div>
            </div>

            {/* 2. CALL TO ACTION (Ортодонтия) */}
            <div className="lg:col-span-7 flex flex-col justify-end">
              <div className="bg-[#333333] rounded-3xl p-8 lg:p-12 border border-gray-800">
                  <h3 className="text-2xl lg:text-3xl font-black text-white font-heading mb-6 uppercase flex items-center gap-4">
                      <span className="w-2 h-10 bg-[#3BC3F3] rounded-full"></span>
                      Создаем улыбки мечты
                  </h3>
                  
                  <p className="text-gray-300 mb-8 text-base lg:text-lg leading-relaxed max-w-2xl">
                      Ортодонтия — это не просто ровные зубы, это гармония лица, правильная функция и уверенность в себе на всю жизнь. 
                      Наши специалисты используют передовые цифровые технологии для достижения идеального результата.
                  </p>
                  
                  {/* Кнопка Оставить заявку */}
                  <div>
                      <button 
                        onClick={open} // 👈 Добавьте этот обработчик
                        className="group relative w-full sm:w-auto py-5 px-10 rounded-2xl bg-[#3BC3F3] text-white font-bold text-lg overflow-hidden shadow-[0_0_25px_rgba(59,195,243,0.3)] hover:shadow-[0_0_40px_rgba(59,195,243,0.5)] transition-all active:scale-[0.98]"
                      >
                          <span className="relative z-10 flex items-center justify-center gap-3">
                              Оставить заявку
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                          </span>
                          <div className="absolute top-0 -left-full w-full h-full bg-white/20 -skew-x-[20deg] group-hover:animate-shine transition-all"></div>
                      </button>
                  </div>
              </div>
            </div>

          </div>

          {/* --- СРЕДНЯЯ ЧАСТЬ: Клиники (С КАРТИНКАМИ) --- */}
          <div className="mb-16">
            <h3 className="text-2xl font-black text-white font-heading mb-8 uppercase pl-4 border-l-4 border-[#3BC3F3]">
              Наши клиники
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {clinics.map((clinic, index) => (
                <div key={index} className="bg-[#333333] rounded-2xl p-6 border border-gray-800 hover:border-[#3BC3F3]/50 transition-colors group h-full flex flex-col">
                  
                  {/* КАРТИНКА-КНОПКА */}
                  <div 
                    onClick={() => setActiveMap(clinic.mapSrc)}
                    className="w-full h-48 rounded-xl mb-5 relative overflow-hidden cursor-pointer border border-gray-700 group-hover:border-[#3BC3F3]/50 transition-all"
                  >
                     <Image 
                       src={clinic.image} 
                       alt={clinic.address} 
                       fill 
                       className="object-cover transition-transform duration-500 group-hover:scale-105"
                     />
                     {/* Оверлей при наведении */}
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  
                  <div className="mb-2 text-xs font-bold text-[#3BC3F3] uppercase tracking-wider">{clinic.city}</div>
                  <div className="text-white font-medium mb-4 h-12 leading-snug text-lg">{clinic.address}</div>
                  
                  <div className="mt-auto space-y-3 pt-5 border-t border-gray-700">
                    {clinic.phones.map(phone => (
                      <a key={phone} href={`tel:${phone.replace(/\D/g, '')}`} className="block text-gray-300 font-bold hover:text-white transition-colors text-lg">
                        {phone}
                      </a>
                    ))}
                    <a href={`mailto:${clinic.email}`} className="block text-sm text-gray-500 hover:text-[#3BC3F3] transition-colors pt-1">
                      {clinic.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- НИЖНЯЯ ЧАСТЬ: Копирайт --- */}
          <div className="border-t border-gray-800 pt-8 flex flex-col lg:flex-row justify-between gap-8 text-xs text-gray-500 leading-relaxed">
            <div className="space-y-3 lg:max-w-md">
              <p className="text-gray-400 font-medium text-sm">© {currentYear} Полный порядок. Ортодонтия и стоматология.</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a href="https://xn--d1ajebkedbcem2k7b.xn--p1ai/about/" target="_blank" className="hover:text-[#3BC3F3] transition-colors underline decoration-gray-700">Общая информация</a>
                <a href="https://xn--d1ajebkedbcem2k7b.xn--p1ai/polzovatelskoe_soglashenie/" target="_blank" className="hover:text-[#3BC3F3] transition-colors underline decoration-gray-700">Политика конфиденциальности</a>
              </div>
            </div>
            <div className="space-y-1 lg:text-right">
              <p>Лицензия № Л041-01148-78/00361590</p>
              <p>ООО "Улыбка в порядке"</p>
              <p>ИНН 7816704653</p>
            </div>
          </div>

        </div>
      </footer>

      {/* --- МОДАЛЬНОЕ ОКНО С КАРТОЙ --- */}
      {activeMap && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={() => setActiveMap(null)}>
          <div className="relative w-full max-w-5xl h-[80vh] bg-[#1F1F1F] rounded-3xl overflow-hidden shadow-2xl border border-gray-700" onClick={e => e.stopPropagation()}>
            
            {/* Кнопка закрытия */}
            <button 
              onClick={() => setActiveMap(null)}
              className="absolute top-4 right-4 z-50 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors shadow-lg"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            {/* Iframe с картой */}
            <iframe 
              src={activeMap} 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              allowFullScreen={true} 
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
