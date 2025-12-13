export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#f5f7ff] to-[#e8ebff] py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-[-40%] right-[-10%] w-[800px] h-[800px] bg-gradient-radial from-[rgba(92,90,244,0.08)] to-transparent rounded-full"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div>
            <h2 className="text-[52px] font-black leading-[1.15] mb-6 text-gray-900 tracking-tight font-heading">
              Восстановите<br />зуб за 3 визита
            </h2>

            {/* Guarantee Badge */}
            <div className="inline-flex items-center gap-3 bg-[#e8f4ff] px-5 py-3 rounded-full mb-9">
              <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                ✓
              </div>
              <span className="text-sm font-semibold text-primary">
                Пожизненная гарантия на имплант
              </span>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-5 mb-9">
              <FeatureItem 
                icon="🦷" 
                text="Бесплатный план лечения"
                iconColor="purple"
              />
              <FeatureItem 
                icon="➕" 
                text="Бесплатная гигиена полости рта по швейцарскому протоколу GBT"
                iconColor="gray"
              />
              <FeatureItem 
                icon="👤" 
                text="Персональный менеджер на связи 7 дней в неделю"
                iconColor="purple"
              />
              <FeatureItem 
                icon="💳" 
                text="Беспроцентная рассрочка, сплит платежи"
                iconColor="gray"
              />
            </div>

            {/* CTA Button */}
            <a href="#consultation" className="btn-primary group">
              Бесплатная консультация
              <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Right Side - Doctor Card */}
          <div className="relative">
            {/* Rating Badge */}
            <div className="absolute top-0 right-5 bg-white px-5 py-4 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.12)] text-center z-10">
              <div>
                <span className="text-3xl font-black text-gray-900">4.9</span>
                <span className="text-sm text-gray-400 ml-1">из 5</span>
              </div>
              <div className="text-yellow-400 text-base my-1 tracking-wider">★★★★★</div>
              <div className="flex items-center justify-center gap-1.5 text-xs text-gray-600 font-semibold mt-1">
                <span className="inline-block bg-[#fc3f1d] text-white px-1.5 py-0.5 rounded text-[11px] font-bold">
                  Я
                </span>
                Карты
              </div>
            </div>

            {/* Doctor Card */}
            <div className="bg-white rounded-[30px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <div className="w-full h-[450px] bg-gradient-to-br from-[#e8ebff] to-[#d5d9ff] rounded-3xl mb-6 flex items-center justify-center text-gray-400">
                [Фото врача - Иоаниди Ираклий Анастасович]
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-extrabold text-gray-900 mb-1 font-heading">
                  Иоаниди Ираклий<br />Анастасович
                </h3>

                <div className="flex gap-5 justify-center mt-5">
                  <StatBadge 
                    icon="⏱"
                    text="Стаж 8 лет"
                  />
                  <StatBadge 
                    icon="👥"
                    number="Более 1000 успешных"
                    label="имплантаций"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Feature Item Component
interface FeatureItemProps {
  icon: string;
  text: string;
  iconColor: 'purple' | 'gray';
}

function FeatureItem({ icon, text, iconColor }: FeatureItemProps) {
  const bgColor = iconColor === 'purple' ? 'text-primary' : 'text-gray-500';
  
  return (
    <div className="flex items-start gap-3">
      <div className={`w-11 h-11 rounded-xl bg-white flex items-center justify-center text-xl flex-shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.08)] ${bgColor}`}>
        {icon}
      </div>
      <div className="text-sm text-gray-700 font-medium leading-relaxed">
        {text}
      </div>
    </div>
  );
}

// Stat Badge Component
interface StatBadgeProps {
  icon: string;
  text?: string;
  number?: string;
  label?: string;
}

function StatBadge({ icon, text, number, label }: StatBadgeProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-9 h-9 bg-primary text-white rounded-xl flex items-center justify-center text-base">
        {icon}
      </div>
      <div className="text-left">
        {text && <span className="text-sm font-bold text-gray-900 block leading-tight">{text}</span>}
        {number && <span className="text-sm font-bold text-gray-900 block leading-tight">{number}</span>}
        {label && <span className="text-xs text-gray-600">{label}</span>}
      </div>
    </div>
  );
}
