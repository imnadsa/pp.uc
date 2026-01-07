import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3BC3F3] via-[#2db2e8] to-[#1f7fb2] flex items-center justify-center px-4">
      <div className="text-center">
        
        {/* Иконка успеха */}
        <div className="mb-8 inline-flex items-center justify-center w-24 h-24 lg:w-32 lg:h-32 bg-white rounded-full shadow-2xl animate-bounce">
          <svg 
            className="w-12 h-12 lg:w-16 lg:h-16 text-[#3BC3F3]" 
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
          Спасибо!
        </h1>

        {/* Основной текст */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-white/95 mb-12 leading-relaxed max-w-2xl mx-auto">
          Наш менеджер позвонит в течение 5-10 минут
        </p>

        {/* Кнопка возврата */}
        <Link 
          href="/"
          className="inline-flex items-center gap-3 bg-white text-[#3BC3F3] px-8 py-4 lg:px-10 lg:py-5 rounded-full font-bold text-base lg:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
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
