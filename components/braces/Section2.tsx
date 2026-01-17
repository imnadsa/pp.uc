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
                src="/team2.jpg"
                alt="стоматологи с книгой"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Текст справа */}
            <div className="space-y-8">
              {/* Заголовок */}
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                  В 90% случаев —
                </h2>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                  проблема не в пломбах
                </h2>
                <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-400 font-light">
                  проблема в другом
                </p>
              </div>

              {/* Блоки причин */}
              <div className="space-y-6">
                {/* Вы чувствовали */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-orange-500 mb-2">
                    Вы чувствовали
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Когда вам показывали очередной план лечения в клинике с коронками, имплантами, что-то здесь не так?
                  </p>
                </div>

                {/* Появлялось ощущение */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-orange-500 mb-2">
                    Появлялось ощущение
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Что вам пытаются продать ненужное лечение?
                  </p>
                </div>

                {/* Многие скрывают */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-orange-500 mb-2">
                    Многие скрывают
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Или просто не знают что в таких случаях — проблема в прикусе, а не кариесе, пломбах.
                  </p>
                </div>

                {/* Вас привязывают */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-orange-500 mb-2">
                    Вас привязывают к клинике
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Чтобы вы еще больше ходили лечится к ним, постоянно переделывая зубы.
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
