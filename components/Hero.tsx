import Button from './ui/Button';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#eef7fd] to-white min-h-screen flex items-center py-8 px-4 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-[10%] right-[5%] w-[300px] h-[300px] bg-gradient-radial from-[#3AC3F3]/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] bg-gradient-radial from-[#287FB8]/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center">
          
          {/* H1 - Главный заголовок */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 sm:mb-6 text-gray-900 font-heading">
            Брекеты от{' '}
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#3AC3F3] to-[#287FB8] text-white rounded-lg shadow-lg transform -rotate-1">
              99 000 ₽
            </span>
            <br className="hidden sm:block" />
            <span className="block mt-2">под контролем ведущих</span>
            <br className="hidden sm:block" />
            <span className="block mt-2">ортодонтов России</span>
          </h1>

          {/* H2 - Подзаголовок */}
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-4 sm:mb-6 leading-relaxed max-w-3xl mx-auto font-medium">
            Ваше лечение ведёт молодой врач, а ключевые решения утверждают ортодонты{' '}
            <span className="font-bold text-[#287FB8]">ТОП-5 России</span>
          </h2>

          {/* Вторичная строка */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Вы платите меньше — без риска для результата и качества лечения
          </p>

          {/* CTA кнопка */}
          <div className="mb-6 sm:mb-8">
            <Button href="#appointment">
              Получить бесплатную диагностику
            </Button>
            <p className="text-xs sm:text-sm text-gray-500 mt-3">
              Бесплатно · без обязательств · точный план лечения
            </p>
          </div>

          {/* Блок доверия */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8">
            <TrustBadge text="46 лет суммарного клинического стажа" />
            <TrustBadge text="ТОП-5 ортодонтов России" highlight />
            <TrustBadge text="Кандидаты медицинских наук" />
          </div>

        </div>
      </div>
    </section>
  );
}

// --- Бейдж доверия ---
interface TrustBadgeProps {
  text: string;
  highlight?: boolean;
}

function TrustBadge({ text, highlight }: TrustBadgeProps) {
  return (
    <div className={`inline-flex items-center px-3 py-2 sm:px-4 sm:py-2.5 rounded-full transition-all ${
      highlight 
        ? 'bg-gradient-to-r from-[#3AC3F3] to-[#287FB8] text-white font-bold shadow-md' 
        : 'bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200 shadow-sm'
    }`}>
      <span className="text-xs sm:text-sm font-medium leading-tight">
        {text}
      </span>
    </div>
  );
}
