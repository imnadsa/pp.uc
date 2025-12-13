import React from 'react';
import Image from 'next/image';

export default function Appointment() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-custom">
        
        {/* Карточка */}
        <div className="relative bg-[#464646] rounded-[2.5rem] p-8 lg:p-16 overflow-hidden shadow-2xl">
          
          {/* --- ФОНОВАЯ СЕТКА (Декор) --- */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
          </div>

          {/* --- 3D ЭЛЕМЕНТЫ (Хаотично) --- */}
          
          {/* 1. Брелок слева сверху (размытый) */}
          <div className="absolute top-[-20px] left-[-20px] lg:top-10 lg:left-10 w-24 h-24 lg:w-32 lg:h-32 rotate-[-15deg] blur-[2px] opacity-80 z-10 pointer-events-none">
            <Image 
              src="/logo-keychain.png" 
              alt="Decoration" 
              fill 
              className="object-contain"
            />
          </div>

          {/* 2. Брелок справа посередине (четкий) */}
          <div className="absolute top-[40%] right-[-20px] lg:right-[40%] w-20 h-20 lg:w-28 lg:h-28 rotate-[45deg] z-10 pointer-events-none hidden lg:block">
             <Image 
              src="/logo-keychain.png" 
              alt="Decoration" 
              fill 
              className="object-contain"
            />
          </div>

           {/* 3. Брелок маленький где-то внизу */}
           <div className="absolute bottom-10 left-[40%] w-16 h-16 rotate-[120deg] blur-[1px] opacity-60 z-10 pointer-events-none hidden lg:block">
             <Image 
              src="/logo-keychain.png" 
              alt="Decoration" 
              fill 
              className="object-contain"
            />
          </div>

          {/* 4. ПОДАРОК (Торчит снизу по центру/справа) */}
          <div className="absolute -bottom-12 lg:-bottom-16 left-1/2 lg:left-[45%] -translate-x-1/2 w-48 h-48 lg:w-72 lg:h-72 z-20 pointer-events-none">
             <Image 
              src="/present.png" 
              alt="Gift" 
              fill 
              className="object-contain drop-shadow-2xl"
            />
          </div>


          {/* --- КОНТЕНТ --- */}
          <div className="relative z-30 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            
            {/* ЛЕВАЯ ЧАСТЬ (Текст) */}
            <div>
              <h2 className="text-3xl lg:text-5xl font-black text-white font-heading leading-tight mb-6">
                Запишитесь на бесплатную консультацию
              </h2>
              
              <p className="text-lg lg:text-xl text-gray-200 mb-10 font-medium">
                Получите план лечения за <span className="text-[#84cc16] font-bold">0 ₽</span> от экспертов имплантологов
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-white/90">
                <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-[#84cc16] rounded-full flex items-center justify-center text-[#464646]">
                       <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <span className="font-bold text-lg">+7 (495) 281-32-19</span>
                </div>
                <span className="hidden sm:inline text-gray-500">|</span>
                <span className="text-sm text-gray-400">Ежедневно с 9:00 до 21:00</span>
              </div>
            </div>

            {/* ПРАВАЯ ЧАСТЬ (Форма) */}
            <div className="bg-white/5 backdrop-blur-sm p-6 lg:p-10 rounded-3xl border border-white/10">
              <form className="space-y-6">
                
                {/* Инпут телефона */}
                <div>
                  <input 
                    type="tel" 
                    placeholder="+7 (999) 999-99-99" 
                    className="w-full bg-[#3a3a3a] border border-gray-600 text-white rounded-xl px-5 py-4 outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] transition-all placeholder:text-gray-500 text-lg"
                  />
                </div>

                {/* Чекбоксы */}
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-center">
                      <input type="checkbox" className="peer sr-only" defaultChecked />
                      <div className="w-5 h-5 border-2 border-gray-500 rounded bg-transparent peer-checked:bg-[#84cc16] peer-checked:border-[#84cc16] transition-all"></div>
                      <svg className="absolute w-3 h-3 text-[#464646] left-1 top-1 opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-xs text-gray-400 leading-tight group-hover:text-gray-300 transition-colors">
                      Я согласен на <a href="#" className="underline decoration-gray-500 hover:text-white">Обработку персональных данных</a>
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-center">
                      <input type="checkbox" className="peer sr-only" defaultChecked />
                      <div className="w-5 h-5 border-2 border-gray-500 rounded bg-transparent peer-checked:bg-[#84cc16] peer-checked:border-[#84cc16] transition-all"></div>
                      <svg className="absolute w-3 h-3 text-[#464646] left-1 top-1 opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-xs text-gray-400 leading-tight group-hover:text-gray-300 transition-colors">
                      Я ознакомлен с <a href="#" className="underline decoration-gray-500 hover:text-white">Условиями сбора данных</a>
                    </span>
                  </label>
                </div>

                {/* Кнопка "Свечение" */}
                <button className="w-full py-4 rounded-xl bg-gradient-to-r from-[#84cc16] to-[#65a30d] text-[#1a3f05] font-black text-lg shadow-[0_0_25px_rgba(132,204,22,0.4)] hover:shadow-[0_0_35px_rgba(132,204,22,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 relative overflow-hidden group">
                  <span className="relative z-10">Записаться на бесплатную консультацию</span>
                  {/* Блик на кнопке */}
                  <div className="absolute top-0 -left-full w-1/2 h-full bg-white/30 -skew-x-[20deg] group-hover:animate-shine"></div>
                </button>

              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
