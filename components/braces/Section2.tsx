'use client';

import Image from 'next/image';

export default function Section2() {
  return (
    <section className="py-16 lg:py-24 bg-black">
      <div className="container-custom">
        <div className="bg-gray-100 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Картинка слева */}
            <div className="relative aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/team1.png"
                alt="Стоматолог за работой"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Текст справа */}
            <div className="space-y-8">
              {/* Заголовок */}
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Кривые зубы — это не только эстетика
                </h2>
                <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
                  Неправильный прикус разрушает ваши зубы изнутри, и большинство клиник об этом молчат
                </p>
              </div>

              {/* Блоки последствий */}
              <div className="space-y-6">
                {/* Стирается эмаль */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-orange-500 mb-3">
                    Стирается эмаль — чувствительность и кариес
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Когда зубы смыкаются неправильно, они постоянно трутся друг о друга. Эмаль истончается, появляется чувствительность к горячему и холодному. А за ней — кариес, который никакие пломбы не остановят, пока не исправлен прикус.
                  </p>
                </div>

                {/* Выпадают пломбы */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-orange-500 mb-3">
                    Постоянно выпадают пломбы — бесконечные переделки
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Пломба держится год-два и снова выпадает? Это не вина врача. Это неправильная нагрузка из-за прикуса. Вы будете переделывать одни и те же зубы снова и снова, пока не устраните причину.
                  </p>
                </div>

                {/* Боли в челюсти */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-orange-500 mb-3">
                    Боли в челюсти, головные боли, мигрени
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Неправильный прикус перегружает челюстной сустав. Отсюда — щелчки, хруст, боль при жевании, головные боли и даже мигрени. Обезболивающие не помогают, потому что причина в челюсти.
                  </p>
                </div>

                {/* Скрип по ночам */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-orange-500 mb-3">
                    Скрип зубами (бруксизм) — разрушение зубов
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Организм пытается "притереть" зубы друг к другу. Вы скрипите во сне, стираете зубы до пеньков. Капы не решают проблему — они только защищают то, что осталось. А зубы продолжают разрушаться.
                  </p>
                </div>

                {/* Почему молчат */}
                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
                  <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-medium">
                    <strong className="text-orange-600">Почему об этом молчат?</strong><br/>
                    Потому что клиникам выгоднее лечить последствия годами: ставить пломбы, коронки, импланты. А исправление прикуса — это одна процедура, которая убирает все проблемы навсегда.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
