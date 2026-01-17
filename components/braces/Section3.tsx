'use client';

import Image from 'next/image';

export default function Section3() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-custom">
        <div className="bg-[#1a1d29] rounded-3xl p-8 lg:p-16">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Вот простой тест — <span className="text-gray-500">есть ли у вас эти симптомы?</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300">
              Если ответ хотя-бы на один вопрос Да — проблема не в пломбах
            </p>
          </div>

          {/* Сетка с карточками и картинкой */}
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 items-start">
            {/* Карточки симптомов слева - БОЛЬШЕ */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Карточка 01 */}
              <div className="bg-[#252837] rounded-3xl p-8 hover:bg-[#2d3142] transition-colors">
                <div className="text-orange-400 text-base font-bold mb-6">01</div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">Искривления зубов</h3>
                <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
                  Отдельных зубов или полностью всей челюсти, бруксизм, скученность зубов
                </p>
              </div>

              {/* Карточка 02 */}
              <div className="bg-[#252837] rounded-3xl p-8 hover:bg-[#2d3142] transition-colors">
                <div className="text-orange-400 text-base font-bold mb-6">02</div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">Щелчки</h3>
                <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
                  Хрусты, в челюсти при открывании рта, во сне, при приеме пищи
                </p>
              </div>

              {/* Карточка 03 */}
              <div className="bg-[#252837] rounded-3xl p-8 hover:bg-[#2d3142] transition-colors">
                <div className="text-orange-400 text-base font-bold mb-6">03</div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">Боли</h3>
                <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
                  В челюсти во время еды или разговора
                </p>
              </div>

              {/* Карточка 04 */}
              <div className="bg-[#252837] rounded-3xl p-8 hover:bg-[#2d3142] transition-colors">
                <div className="text-orange-400 text-base font-bold mb-6">04</div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">Не можете открыть рот до конца</h3>
                <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
                  Ощущение что что-то мешает, или появляется боль 
                </p>
              </div>
            </div>

            {/* Картинка справа - МЕНЬШЕ */}
            <div className="relative aspect-[3/4] max-h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/photo3.png"
                alt="Девушка с красными очками и брекетами"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
