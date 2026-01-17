'use client';

import Image from 'next/image';

export default function Section4() {
  return (
    <section className="py-16 lg:py-24 bg-black">
      <div className="container-custom">
        <div className="bg-gray-100 rounded-3xl p-8 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Текст слева */}
            <div className="space-y-8">
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                Хотите избавится от проблем с зубами?
              </h2>
              
              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
                При этом получить четкий понятный план лечения без скрытых платежей и размазанных сумм?
              </p>

              <p className="text-lg sm:text-xl text-gray-600">
                Заполните форму ниже
              </p>
            </div>

            {/* Картинка справа */}
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src="/clinic-interior.jpg"
                alt="Интерьер клиники"
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
