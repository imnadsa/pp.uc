import Button from './ui/Button';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#eef7fd] to-white min-h-screen flex items-center py-6 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-[10%] right-[5%] w-[300px] h-[300px] bg-gradient-radial from-[#3AC3F3]/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-2xl relative z-10">
        <div className="text-center">
          
          {/* H1 - уменьшен на 25% */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-white/40 rounded-3xl blur-xl"></div>
            
            <h1 className="relative text-3xl sm:text-4xl font-black leading-tight font-heading text-gray-900">
              Брекеты от{' '}
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#3AC3F3] to-[#287FB8] text-white rounded-2xl">
                99 000 ₽
              </span>
              <br />
              под контролем ведущих<br />ортодонтов России
            </h1>
          </div>

          {/* ОСНОВНОЙ ТЕКСТ - с цветным шейпом сзади */}
          <div className="relative">
            {/* Цветной шейп за текстом */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E7F9FF] to-[#D4F1FF] rounded-3xl blur-2xl opacity-60"></div>
            
            {/* Текст - полностью черный */}
            <div className="relative text-xl sm:text-2xl text-gray-900 leading-relaxed space-y-5 py-6">
              <p>
                Ваше лечение ведёт молодой врач, но каждый этап и каждое решение проверяет и утверждает ортодонт{' '}
                <span className="font-bold text-black">ТОП-5 России Андрей Викторович Тихонов</span>.
              </p>
              
              <p className="font-semibold text-black">Вы получаете:</p>
              <ul className="text-left max-w-xl mx-auto space-y-3">
                <li>• цену ниже, чем в 95% клиник</li>
                <li>• внимание и аккуратность молодого специалиста</li>
                <li>• экспертный контроль, как в топ-клинике</li>
              </ul>
              
              <p className="font-medium">
                Без экспериментов. Без риска для результата.{' '}
                <span className="font-bold text-[#287FB8]">С Гарантией результата</span>, иначе — вернём деньги.
              </p>

              <p className="pt-4">Сразу после оставления заявки вы получите:</p>
              <div className="space-y-3 text-left max-w-xl mx-auto">
                <p>🎁 Бесплатная первичная консультация (вместо 2 500 ₽)</p>
                <p>🎁 Чистка перед установкой — в подарок</p>
                <p>🎁 Персональный чек-лист лечения на брекетах / элайнерах</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Button href="#appointment">
              Оставить заявку
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
