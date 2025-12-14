import Button from './ui/Button';
import Image from 'next/image'; // <-- ВОЗВРАЩАЕМ ИМПОРТ

export default function Hero() {
  return (
    <section className="bg-[#eef7fd] py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gradient-radial from-[#3AC3F3]/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Левая часть */}
          <div className="order-2 lg:order-1">
            <h1 className="text-[40px] md:text-[48px] lg:text-[52px] xl:text-[58px] font-black leading-[1.15] mb-8 text-gray-900 font-heading tracking-[0.02em]">
              Выравниваем{' '}
              <span className="inline-block px-2 pb-1 border-2 border-dashed border-[#287FB8]/40 text-[#287FB8] rounded-lg transform -rotate-1 mx-1">
                любой прикус
              </span>
              <br />
              и создаём{' '}
              <span className="inline-block px-2 pb-1 border-2 border-dashed border-[#287FB8]/40 text-[#287FB8] rounded-lg transform rotate-1 mx-1 mt-2 lg:mt-0">
                идеальную улыбку
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Под руководством{' '}
              <span className="font-bold text-[#287FB8]">
                лучшего ортодонта Санкт-Петербурга — Андрея Тихонова
              </span>
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed max-w-md">
              Запишитесь на бесплатную консультацию и получите план лечения уже на первом приеме.
            </p>
            <Button href="#appointment">
              Бесплатная консультация
            </Button>
          </div>

          {/* Правая часть */}
          <div className="order-1 lg:order-2">
            <DoctorCard />
          </div>
        </div>
      </div>
    </section>
  );
}

// --- КАРТОЧКА ВРАЧА С ФОТОГРАФИЕЙ ---
function DoctorCard() {
  return (
    // Белая карточка с тенью
    <div className="relative bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.1)] max-w-md mx-auto lg:ml-auto lg:mr-0 overflow-hidden">
      
      {/* 1. Блок с текстом (сверху) */}
      <div className="p-8 lg:p-10 relative z-10">
        
        {/* Имя */}
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 font-heading leading-tight mb-8">
          Тихонов Андрей<br />Викторович
        </h3>
        
        {/* Бейджи */}
        <div className="flex flex-wrap gap-3">
          <InfoBadge text="24 года стаж" />
          <InfoBadge text="Кандидат Медицинских Наук" />
          <InfoBadge text="Топ-5 ортодонтов в России" highlight />
        </div>
      </div>

      {/* 2. Блок с фотографией (снизу) */}
      <div className="relative h-80 lg:h-96">
        {/* 
           Чтобы фото было видно, но не мешало, можно сделать его полупрозрачным 
           или добавить градиент поверх, чтобы текст всегда читался.
           Я добавлю градиент, который переходит от белого фона карточки к фото.
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-200 to-gray-50"></div>

        <Image
          src="/atikhonov.jpg"
          alt="Фото - Тихонов Андрей Викторович"
          fill
          className="object-cover object-top" // object-top фокусируется на верхней части фото
          sizes="(max-width: 1024px) 50vw, 33vw"
        />
        {/* Градиент от белого фона карточки к фото, чтобы был плавный переход */}
        <div className="absolute -top-10 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      </div>

    </div>
  );
}

// --- Бейдж ---
interface InfoBadgeProps {
  text: string;
  highlight?: boolean;
}

function InfoBadge({ text, highlight }: InfoBadgeProps) {
  return (
    <div className={`inline-flex items-center px-4 py-2 rounded-full border-2 transition-all ${
      highlight 
        ? 'border-[#3AC3F3] bg-[#3AC3F3] text-white font-bold' 
        : 'border-[#3AC3F3] bg-transparent text-gray-700'
    }`}>
      <span className="text-sm font-medium leading-tight">
        {text}
      </span>
    </div>
  );
}
