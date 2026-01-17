'use client';

import Image from 'next/image';

export default function Section3() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-custom">
        <div className="bg-gray-900 rounded-3xl p-8 lg:p-12">
          {/* Заголовок */}
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Вот простой тест — <span className="text-gray-400">есть ли у вас эти симптомы?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">
              Если ответ хотя-бы на один вопрос Да — проблема не в пломбах
            </p>
          </div>

          {/* Сетка с карточками и картинкой */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Карточки симптомов слева */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Карточка 01 */}
              <div className="bg-gray-800 rounded-2xl p-6">
                <div className="text-orange-400 text-sm font-bold mb-4">01</div>
                <h3 className="text-xl font-bold text-white mb-3">Щелчки</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Хрусты, в челюсти при открывании рта, во сне, при приеме пищи
                </p>
              </div>

              {/* Карточка 02 */}
              <div className="bg-gray-800 rounded-2xl p-6">
                <div className="text-orange-400 text-sm font-bold mb-4">02</div>
                <h3 className="text-xl font-bold text-white mb-3">Боли</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  В челюсти во время еды или разговора
                </p>
              </div>

              {/* Карточка 03 */}
              <div className="bg-gray-800 rounded-2xl p-6">
                <div className="text-orange-400 text-sm font-bold mb-4">03</div>
                <h3 className="text-xl font-bold text-white mb-3">Не можете открыть рот до конца</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Ощущение что что-то мешает, или появляется боль
                </p>
              </div>

              {/* Карточка 04 */}
              <div className="bg-gray-800 rounded-2xl p-6">
                <div className="text-orange-400 text-sm font-bold mb-4">04</div>
                <h3 className="text-xl font-bold text-white mb-3">Искривления</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Отдельных зубов или полностью всей челюсти, бруксизм, скученность зубов
                </p>
              </div>
            </div>

            {/* Картинка справа */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/photo3.png"
                alt="Девушка с красными очками чистит зубы"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
