import Button from './ui/Button';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#eef7fd] to-white min-h-screen flex items-center py-8 px-4 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-[10%] right-[5%] w-[300px] h-[300px] bg-gradient-radial from-[#3AC3F3]/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] bg-gradient-radial from-[#287FB8]/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-3xl relative z-10">
        <div className="text-center">
          
          {/* Надзаголовок (для кого) */}
          <p className="text-sm sm:text-base text-gray-600 mb-4 font-medium">
            Для тех, кто хочет выровнять зубы по лучшей цене — без риска и с гарантией результата
          </p>

          {/* H1 - Главный заголовок с ценой */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6 text-gray-900 font-heading">
            Брекеты от{' '}
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#3AC3F3] to-[#287FB8] text-white rounded-2xl shadow-lg">
              99 000 ₽
            </span>
            <br className="hidden sm:block" />
            <span className="block mt-3">под контролем ведущих ортодонтов России</span>
          </h1>

          {/* Подзаголовок (выгода) */}
          <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto">
            Платите меньше — получаете лечение от молодых врачей, контролируемых экспертами{' '}
            <span className="font-bold text-[#287FB8]">ТОП-5 в РФ</span>.{' '}
            Качество как в премиум-клиниках, цена — в разы доступнее.
          </p>

          {/* Блок концентрированных выгод (3 колонки) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
            <BenefitCard 
              icon="✓"
              text="Экономия до 50% от рыночной цены"
            />
            <BenefitCard 
              icon="✓"
              text="Контроль ТОП-5 ортодонтов на каждом этапе"
            />
            <BenefitCard 
              icon="✓"
              text="Рассрочка 0% на 24 месяца"
            />
          </div>

          {/* Дополнительная выгода (почему дешевле) */}
          <div className="bg-white/60 backdrop-blur-sm border border-[#3AC3F3]/30 rounded-2xl p-5 mb-8 max-w-2xl mx-auto">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <span className="font-bold text-[#287FB8]">Почему у нас дешевле:</span>{' '}
              мы экономим на администраторах и координаторах — это клиника «врач-пациент». 
              Вы платите только за лечение, без переплат за офисную инфраструктуру.
            </p>
          </div>

          {/* CTA кнопка */}
          <div className="mb-6">
            <Button href="#appointment">
              Получить консультацию бесплатно
            </Button>
            <p className="text-xs sm:text-sm text-gray-500 mt-3">
              Бесплатно · без обязательств · точный план лечения
            </p>
          </div>

          {/* Срочность / дефицит */}
          <div className="bg-gradient-to-r from-[#FFE5E5] to-[#FFF5E5] border-2 border-[#FF6B6B]/30 rounded-2xl p-4 mb-8 max-w-xl mx-auto">
            <p className="text-sm sm:text-base font-bold text-gray-900">
              ⚡ Только <span className="text-[#FF6B6B]">10 мест в месяц</span> по специальной цене
            </p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Места распределяются строго по порядку заявок
            </p>
          </div>

          {/* Блок доверия внизу */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <TrustBadge text="46 лет суммарного стажа" />
            <TrustBadge text="ТОП-5 ортодонтов России" highlight />
            <TrustBadge text="Кандидаты медицинских наук" />
          </div>

        </div>
      </div>
    </section>
  );
}

// --- Карточка выгоды (3 колонки) ---
interface BenefitCardProps {
  icon: string;
  text: string;
}

function BenefitCard({ icon, text }: BenefitCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm border border-[#3AC3F3]/20 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-2xl text-[#3AC3F3] mb-2">{icon}</div>
      <p className="text-sm text-gray-700 font-medium leading-tight">{text}</p>
    </div>
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
