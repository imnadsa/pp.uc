import React from 'react';
import Image from 'next/image';

export default function Appointment() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-custom">
        
        {/* Карточка */}
        <div className="relative bg-[#A5DBF5] rounded-[2.5rem] p-8 lg:p-16 overflow-hidden shadow-2xl">
          
          {/* --- ФОНОВАЯ СЕТКА (Декор) --- */}
          <div className="absolute inset-0 opacity-40 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}>
          </div>

          {/* --- 3D ЭЛЕМЕНТЫ (Декор) --- */}
          
          {/* 1. Брелок СЛЕВА СВЕРХУ (как на скрине) */}
          <div className="absolute top-[-20px] left-[-10px] lg:top-0 lg:left-0 w-24 h-24 lg:w-32 lg:h-32 rotate-[-15deg] blur-[1px] z-10 pointer-events-none">
            <Image 
              src="/logo-keychain.png" 
              alt="Decoration" 
              fill 
              className="object-contain"
            />
          </div>

          {/* 2. Брелок ПО ЦЕНТРУ (между текстом и формой) */}
          <div className="absolute top-[60%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-20 h-20 lg:w-28 lg:h-28 rotate-[15deg] z-10 pointer-events-none hidden lg:block opacity-90">
             <Image 
              src="/logo-keychain.png" 
              alt="Decoration" 
              fill 
              className="object-contain"
            />
          </div>

           {/* 3. Брелок НАД ФОРМОЙ (справа сверху) */}
           <div className="absolute top-[-30px] right-[10%] lg:right-[20%] w-20 h-20 lg:w-24 lg:h-24 rotate-[120deg] blur-[2px] opacity-80 z-10 pointer-events-none">
             <Image 
              src="/logo-keychain.png" 
              alt="Decoration" 
              fill 
              className="object-contain"
            />
          </div>

          {/* 4. ПОДАРОК (Торчит ТОЛЬКО ШАПОЧКА) */}
          {/* -bottom-32 и -bottom-40 утапливают его глубоко вниз */}
          <div className="absolute -bottom-24 lg:-bottom-48 left-1/2 lg:left-[45%] -translate-x-1/2 w-56 h-56 lg:w-80 lg:h-80 z-20 pointer-events-none">
             <Image 
              src="/present.png" 
              alt="Gift" 
              fill 
              className="object-contain drop-shadow-2xl"
            />
          </div>


          {/* --- КОНТЕНТ --- */}
          <div className="relative z-30 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start lg:items-center">
            
            {/* ЛЕВАЯ ЧАСТЬ (Офферы) */}
            <div>
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900 font-heading leading-tight mb-8">
                Запишитесь на <br className="hidden lg:block"/>
                бесплатную консультацию
              </h2>
              
              <div className="space-y-4 mb-10">
                {/* Оффер 1 */}
                <div className="flex items-start gap-4 bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-white/40 shadow-sm hover:scale-[1.02] transition-transform duration-300">
                   <div className="w-10 h-10 rounded-full bg-[#2274a4] flex items-center justify-center shrink-0 text-white mt-1">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                   </div>
                   <div>
                     <p className="text-gray-900 font-bold text-lg lg:text-xl leading-tight">
                       Бесплатная <span className="text-[#2274a4]">первичная консультация</span> + КЛКТ
                     </p>
                     <p className="text-sm text-gray-600 mt-1">Полная диагностика в подарок</p>
                   </div>
                </div>

                {/* Оффер 2 */}
                <div className="flex items-start gap-4 bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-white/40 shadow-sm hover:scale-[1.02] transition-transform duration-300">
                   <div className="w-10 h-10 rounded-full bg-[#2274a4] flex items-center justify-center shrink-0 text-white mt-1">
                      <span className="font-black text-sm">%</span>
                   </div>
                   <div>
                     <p className="text-gray-900 font-bold text-lg lg:text-xl leading-tight">
                       Рассрочка <span className="text-[#2274a4]">0%</span> на <span className="uppercase text-[#2274a4]">все время</span> лечения
                     </p>
                     <p className="text-sm text-gray-600 mt-1">Фиксируем цену в договоре</p>
                   </div>
                </div>
              </div>

            </div>

            {/* ПРАВАЯ ЧАСТЬ (Форма) */}
            <div className="bg-white/40 backdrop-blur-md p-6 lg:p-10 rounded-3xl border border-white/50 shadow-sm">
              <form className="space-y-6">
                
                {/* Инпут телефона */}
                <div>
                  <input 
                    type="tel" 
                    placeholder="+7 (999) 999-99-99" 
                    className="w-full bg-white border border-gray-200 text-gray-900 rounded-xl px-5 py-4 outline-none focus:border-[#2274a4] focus:ring-2 focus:ring-[#2274a4]/30 transition-all placeholder:text-gray-400 text-lg shadow-sm"
                  />
                </div>

                {/* Чекбоксы (Кликабельные, не заполнены по умолчанию) */}
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer group select-none">
                    <div className="relative flex items-center mt-0.5">
                      {/* Убрал defaultChecked */}
                      <input type="checkbox" className="peer sr-only" />
                      {/* Рамка чекбокса: при чеке становится синей (#2274a4) */}
                      <div className="w-5 h-5 border-2 border-[#2274a4] rounded bg-white peer-checked:bg-[#2274a4] transition-all"></div>
                      {/* Галочка */}
                      <svg className="absolute w-3 h-3 text-white left-1 top-1 opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-xs text-gray-600 leading-tight group-hover:text-[#2274a4] transition-colors">
                      Я согласен на <a href="#" className="underline decoration-gray-400 hover:text-[#2274a4]">Обработку персональных данных</a>
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer group select-none">
                    <div className="relative flex items-center mt-0.5">
                      {/* Убрал defaultChecked */}
                      <input type="checkbox" className="peer sr-only" />
                      <div className="w-5 h-5 border-2 border-[#2274a4] rounded bg-white peer-checked:bg-[#2274a4] transition-all"></div>
                      <svg className="absolute w-3 h-3 text-white left-1 top-1 opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-xs text-gray-600 leading-tight group-hover:text-[#2274a4] transition-colors">
                      Я ознакомлен с <a href="#" className="underline decoration-gray-400 hover:text-[#2274a4]">Условиями сбора данных</a>
                    </span>
                  </label>
                </div>

                {/* Кнопка (Синяя #2274a4) */}
                <button className="w-full py-4 rounded-xl bg-[#2274a4] hover:bg-[#1b5c82] text-white font-bold text-lg shadow-[0_4px_20px_rgba(34,116,164,0.3)] hover:shadow-[0_6px_25px_rgba(34,116,164,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 relative overflow-hidden group">
                  <span className="relative z-10">Записаться на консультацию</span>
                  {/* Блик на кнопке */}
                  <div className="absolute top-0 -left-full w-1/2 h-full bg-white/20 -skew-x-[20deg] group-hover:animate-shine"></div>
                </button>

              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
