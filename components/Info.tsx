import React from 'react';
import Image from 'next/image';

export default function Info() {
  return (
    <section className="bg-[#eef7fd] py-12 lg:py-24">
      <div className="container-custom">
        
        {/* ЗАГОЛОВОК */}
        <div className="flex flex-col items-center text-center mb-10 lg:mb-20">
          <div className="inline-block px-4 py-1.5 lg:px-6 lg:py-2 rounded-full bg-[#287FB8]/10 text-[#287FB8] text-sm lg:text-base font-semibold mb-4 lg:mb-6">
            Учебный клинический центр
          </div>

          <h2 className="text-2xl lg:text-5xl font-black text-gray-900 font-heading leading-tight max-w-4xl">
            Вот за счёт чего лечение стоит меньше,<br />
            но остаётся безопасным
          </h2>
        </div>

        {/* СЕТКА */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 lg:gap-6">

          {/* ГРУППА 1 — КОМАНДА */}
          <div className="contents lg:block lg:col-span-5">
            <div className="col-span-2 order-6 lg:order-none relative rounded-3xl overflow-hidden h-[200px] lg:h-full">
              <Image
                src="/team1.png"
                alt="Команда врачей учебного центра"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* ГРУППА 2 — СИСТЕМА */}
          <div className="contents lg:flex lg:flex-col lg:col-span-4 lg:gap-4">

            <InfoCard
              value="1+1"
              label="врач + наставник"
              fullLabel="каждый пациент ведётся врачом и наставником"
            />

            <InfoCard
              value="100%"
              label="контроль случаев"
              fullLabel="каждый клинический случай проходит проверку"
            />

            <InfoCard
              value="Едино"
              label="стандарты"
              fullLabel="единая система диагностики и лечения"
            />
          </div>

          {/* ГРУППА 3 — ГАРАНТИИ */}
          <div className="contents lg:flex lg:flex-col lg:col-span-3 lg:gap-4">

            <div className="relative rounded-3xl overflow-hidden min-h-[140px] lg:flex-grow">
              <Image
                src="/team2.png"
                alt="Наставники ортодонты"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </div>

            <InfoCard
              value="24"
              suffix="мес"
              label="рассрочка"
              fullLabel="прозрачная рассрочка без переплат"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

/* Карточка */
interface InfoCardProps {
  value: string;
  label: string;
  fullLabel: string;
  prefix?: string;
  suffix?: string;
}

function InfoCard({ value, label, fullLabel, prefix, suffix }: InfoCardProps) {
  return (
    <div className="bg-white p-4 lg:p-7 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-center min-h-[120px] lg:min-h-[140px]">
      <div className="text-[#287FB8] font-black font-heading leading-none mb-2">
        {prefix && <span className="text-sm text-gray-500 mr-1">{prefix}</span>}
        <span className="text-3xl lg:text-5xl">{value}</span>
        {suffix && <span className="text-sm lg:text-2xl ml-1">{suffix}</span>}
      </div>
      <p className="text-gray-600 font-medium text-sm lg:text-lg leading-tight">
        {fullLabel}
      </p>
    </div>
  );
}

