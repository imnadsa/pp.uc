import Button from './ui/Button';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-between bg-gradient-to-br from-[#eef7fd] to-white px-4 py-6">
      
      {/* CONTENT */}
      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto text-center">
        
        {/* 🔴 УДАРНЫЙ ТЕКСТ */}
        <h1 className="text-3xl font-black leading-tight text-gray-900 mb-4">
          Брекеты от{' '}
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#3AC3F3] to-[#287FB8] text-white rounded-xl">
            99 000 ₽
          </span>
          <br />
          под контролем ведущих ортодонтов России
        </h1>

        {/* ⬇️ РАСШИФРОВКА */}
        <p className="text-base text-gray-900 leading-relaxed mb-2">
          Ваше лечение ведёт молодой врач,  
          а <span className="font-semibold">каждое решение утверждают ортодонты ТОП-5 России</span>.
        </p>

        {/* ⬇️ ДОЖИМ */}
        <p className="text-sm text-gray-700 mb-4">
          Вы платите меньше — без риска для результата и качества лечения.
        </p>

        {/* 🎁 БОНУСЫ (HERO-версия) */}
        <div className="text-sm text-gray-900 mb-6">
          <p className="font-medium mb-2">Сразу после заявки:</p>
          <ul className="space-y-1">
            <li>🎁 Бесплатная диагностика</li>
            <li>🎁 Чистка — в подарок</li>
            <li>🎁 Чек-лист лечения</li>
          </ul>
        </div>

        {/* 🔘 CTA */}
        <Button href="#appointment">
          Получить бесплатную диагностику
        </Button>

        {/* CTA SUBTEXT */}
        <p className="mt-2 text-xs text-gray-500">
          Бесплатно · без обязательств · точный план лечения
        </p>
      </div>
    </section>
  );
}
