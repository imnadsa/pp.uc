import Button from './ui/Button';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#eef7fd] to-white px-4 pt-6 pb-6">
      <div className="mx-auto max-w-6xl h-full flex flex-col justify-center">
        
        {/* CONTENT */}
        <div className="mx-auto max-w-xl text-center md:max-w-2xl lg:max-w-3xl">
          
          {/* 🔴 H1 */}
          <h1
            className="
              font-extrabold text-gray-900 leading-tight
              text-[34px]
              sm:text-[38px]
              md:text-[44px]
              lg:text-[52px]
              mb-6
            "
          >
            Исправим прикус навсегда за{' '}
            <span
              className="
                inline-block
                bg-[#5DB6E8]
                text-white
                px-4 py-2
                rounded-2xl
                font-black
                text-[36px]
                sm:text-[40px]
                md:text-[46px]
                lg:text-[54px]
                align-middle
              "
            >
              95 000 ₽
            </span>
            <br />
            под контролем ведущих ортодонтов России
          </h1>

          {/* ⬇️ Подзаголовок */}
          <p
            className="
              font-medium text-gray-900 leading-snug
              text-[18px]
              sm:text-[19px]
              md:text-[20px]
              lg:text-[22px]
              mb-4
            "
          >
            Ваше лечение на брекетах ведёт молодой врач,  
            а <span className="font-bold">каждое решение утверждают ортодонты ТОП-5 России</span>.
          </p>

          {/* ⬇️ Дожим */}
          <p
            className="
              text-gray-700
              text-[16px]
              sm:text-[17px]
              md:text-[18px]
              mb-6
            "
          >
            Вы платите меньше — без риска для результата и качества лечения.
          </p>

          {/* 🎁 Бонусы */}
          <div
            className="
              text-gray-900
              text-[16px]
              sm:text-[17px]
              md:text-[18px]
              space-y-1
              mb-8
            "
          >
            <p className="font-semibold">Сразу после заявки:</p>
            <p>🎁 Бесплатная диагностика</p>
            <p>🎁 Профессиональная Гигиевна — в подарок</p>
            <p>🎁 Чек-лист лечения</p>
          </div>

          {/* 🔘 CTA */}
          <div className="flex flex-col items-center">
            <Button
              openAppointment
              className="
                w-full
                sm:w-auto
                px-8
                py-4
                text-[18px]
                md:text-[19px]
                lg:text-[20px]
              "
            >
              Получить бесплатную диагностику
            </Button>
          
            <p className="text-[13px] sm:text-[14px] text-gray-500 mt-3">
              Бесплатно · без обязательств · точный план лечения
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

