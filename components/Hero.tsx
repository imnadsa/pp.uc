export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#e8ecff] via-[#f0f2ff] to-[#e3e7ff] py-16 lg:py-24 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-[-20%] right-[-15%] w-[600px] h-[600px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Main Heading */}
            <h1 className="text-[42px] md:text-[52px] lg:text-[56px] xl:text-[62px] font-black leading-[1.1] mb-8 text-gray-900 font-heading tracking-[0.02em]">
              Выравниваем прикус и&nbsp;создаём идеальную улыбку
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed font-medium">
              С заботой о комфорте. Научный подход без компромиссов.
            </p>

            <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed">
              Запишитесь на бесплатную консультацию с ортодонтом уже сегодня!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="#appointment" 
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-dark text-white rounded-full font-bold text-base transition-all duration-300 shadow-[0_8px_24px_rgba(45,43,143,0.3)] hover:bg-[#1f1d6b] hover:shadow-[0_12px_32px_rgba(45,43,143,0.4)] hover:-translate-y-0.5"
              >
                Записаться на приём
              </a>
              <a 
                href="#pricing" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-dark border-2 border-primary-dark rounded-full font-bold text-base transition-all duration-300 hover:bg-primary-dark hover:text-white"
              >
                Узнать стоимость
              </a>
            </div>

            {/* Optional: Trust indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-300">
              <TrustItem number="24" label="года опыта" />
              <TrustItem number="5000+" label="пациентов" />
              <TrustItem number="100%" label="гарантия" />
              <TrustItem number="0%" label="рассрочка" />
            </div>
          </div>

          {/* Right Side - Doctor Card */}
          <div className="order-1 lg:order-2">
            <DoctorCard />
          </div>
        </div>
      </div>
    </section>
  );
}

// Doctor Card Component
function DoctorCard() {
  return (
    <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-[0_16px_48px_rgba(0,0,0,0.1)] max-w-[480px] mx-auto">
      {/* Doctor Photo */}
      <div className="relative mb-6">
        <div className="w-full aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
            [Фото - Тихонов Андрей Викторович]
          </div>
        </div>
        
        {/* Rating Badge */}
        <div className="absolute -top-3 -right-3 bg-white px-4 py-3 rounded-xl shadow-lg">
          <div className="text-center">
            <div className="text-2xl font-black text-gray-900">4.9</div>
            <div className="text-yellow-400 text-sm">★★★★★</div>
          </div>
        </div>
      </div>

      {/* Doctor Info */}
      <div className="text-center mb-6">
        <div className="text-sm text-primary font-semibold mb-2 uppercase tracking-wide">Ортодонт</div>
        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 font-heading mb-1">
          Тихонов Андрей<br/>Викторович
        </h3>
      </div>

      {/* Achievements Grid */}
      <div className="space-y-3">
        <Achievement text="24 года стаж" />
        <Achievement text="Основатель сети клиник «Полный Порядок»" />
        <Achievement text="Основатель ПО «OrthoPlaner»" />
        <Achievement text="Основатель и ведущий спикер «Школы Ортодонтии»" />
        <Achievement text="Спикер международного уровня" />
        <Achievement text="Кандидат медицинских наук" />
        <Achievement text="ТОП-5 ортодонтов России" highlight />
      </div>
    </div>
  );
}

// Achievement Badge Component
interface AchievementProps {
  text: string;
  highlight?: boolean;
}

function Achievement({ text, highlight }: AchievementProps) {
  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
      highlight 
        ? 'bg-primary text-white font-bold' 
        : 'bg-primary/5 hover:bg-primary/10'
    }`}>
      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
        highlight ? 'bg-white' : 'bg-primary'
      }`}></div>
      <span className={`text-sm leading-tight ${
        highlight ? 'text-white' : 'text-gray-800 font-medium'
      }`}>
        {text}
      </span>
    </div>
  );
}

// Trust Item Component
interface TrustItemProps {
  number: string;
  label: string;
}

function TrustItem({ number, label }: TrustItemProps) {
  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-black text-primary-dark mb-1 font-heading">
        {number}
      </div>
      <div className="text-xs md:text-sm text-gray-600 font-medium">
        {label}
      </div>
    </div>
  );
}
