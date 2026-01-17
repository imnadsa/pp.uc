import Link from 'next/link';

export default function ThankYou1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-primary-dark flex items-center justify-center px-4">
      <div className="text-center relative z-10">
        
        {/* Иконка успеха */}
        <div className="mb-8 inline-flex items-center justify-center w-24 h-24 lg:w-32 lg:h-32 bg-white rounded-full shadow-2xl animate-bounce">
          <svg 
            className="w-12 h-12 lg:w-16 lg:h-16 text-primary" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            strokeWidth="3"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        {/* Заголовок */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 font-heading leading-tight">
          Ваша заявка принята!
        </h1>

        {/* Основной текст */}
        <div className="max-w-3xl mx-auto mb-12 space-y-4">
          <p className="text-xl sm:text-2xl lg:text-3xl text-white/95 leading-relaxed">
            Мы анализируем вашу ситуацию и готовим индивидуальный план лечения
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/85 leading-relaxed">
            Мы свяжемся с вами в течение 10 минут с готовым предложением.
          </p>
        </div>

        {/* Дополнительная информация */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 lg:p-8 max-w-2xl mx-auto mb-12">
          <div className="flex items-start gap-4 text-left">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-2">Что дальше?</h3>
              <ul className="text-white/90 space-y-2 text-sm lg:text-base">
                <li>✓ Врач изучит вашу ситуацию</li>
                <li>✓ Составит персональный план лечения</li>
                <li>✓ Рассчитает точную стоимость</li>
                <li>✓ Позвонит с готовым предложением</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Кнопка возврата */}
        <Link 
          href="/"
          className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 lg:px-10 lg:py-5 rounded-full font-bold text-base lg:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Вернуться на главную
        </Link>

        {/* Декоративные элементы */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-xl"></div>
      </div>
    </div>
  );
}
