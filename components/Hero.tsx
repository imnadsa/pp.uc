import Button from './ui/Button';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#eef7fd] to-white min-h-screen flex items-center py-6 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-[10%] right-[5%] w-[300px] h-[300px] bg-gradient-radial from-[#3AC3F3]/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-2xl relative z-10">
        <div className="text-center">
          
          {/* H1 - ГЛАВНЫЙ ЗАГОЛОВОК с фоновым шейпом */}
          <div className="relative mb-8">
            {/* Шейп/фон за текстом (можно менять цвет) */}
            <div className="absolute inset-0 bg-white/40 rounded-3xl blur-xl"></div>
            
            <h1 className="relative text-4xl sm:text-5xl font-black leading-tight font-heading text-gray-900">
              Брекеты от{' '}
              <span className="inline-block px-5 py-3 bg-gradient-to-r from-[#3AC3F3] to-[#287FB8] text-white rounded-2xl">
                99 000 ₽
              </span>
              <br />
              под контролем ведущих<br />ортодонтов России
            </h1>
          </div>

          {/* ОСНОВНОЙ ТЕКСТ - серый, меньше размером */}
          <div className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 space-y-4">
            <p>
              Ваше лечение ведёт молодой врач, но каждый этап и каждое решение проверяет и утверждает ортодонт{' '}
              <span className="font-bold text-gray-800">ТОП-5 России Андрей Викторович Тихонов</span>.
            </p>
            
            <p className="font-semibold text-gray-700">Вы получаете:</p>
            <ul className="text-left max-w-xl mx-auto space-y-2 text-gray-600">
              <li>• цену ниже, чем в 95% клиник</li>
              <li>• внимание и аккуратность молодого специалиста</li>
              <li>• экспертный контроль, как в топ-клинике</li>
            </ul>
            
            <p className="font-medium text-gray-700">
              Без экспериментов. Без риска для результата.{' '}
              <span className="font-bold text-[#287FB8]">С Гарантией результата</span>, иначе — вернём деньги.
            </p>
          </div>

          {/* МЯГКИЙ ДОЖИМ - бонусы */}
          <div className="text-sm sm:text-base text-gray-600 mb-6">
            <p className="mb-3">Сразу после оставления заявки вы получите:</p>
            <div className="space-y-2 text-left max-w-xl mx-auto">
              <p>🎁 Бесплатная первичная консультация (вместо 2 500 ₽)</p>
              <p>🎁 Чистка перед установкой — в подарок</p>
              <p>🎁 Персональный чек-лист лечения на брекетах / элайнерах</p>
            </div>
          </div>

          {/* CTA */}
          <Button href="#appointment">
            Оставить заявку
          </Button>

        </div>
      </div>
    </section>
  );
}
