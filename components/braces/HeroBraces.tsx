'use client';
export default function HeroBraces() {
  const scrollToForm = () => {
    const formElement = document.getElementById('multistep-form');
    if (formElement) {
      const targetPosition = formElement.offsetTop - 100;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000;
      let start: number | null = null;
      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      const ease = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };
      requestAnimationFrame(animation);
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white overflow-hidden py-12">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto text-center px-4">
          {/* Заголовок */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Перестаньте стесняться своей улыбки и проблем с прикусом
          </h1>
          
          {/* Подзаголовок */}
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            Индивидуальное ортодонтическое лечение для взрослых и подростков в Санкт-Петербурге — с понятным планом и прогнозируемым результатом
          </p>

          {/* Блок "Мы помогаем" */}
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Мы помогаем, если у вас:
            </h2>
            <div className="text-base sm:text-lg text-gray-700 leading-relaxed">
              скрежет и сжимание зубов, скученность или щели, стираются зубы и выпадают пломбы, боли или дискомфорт в челюсти
            </div>
          </div>

          {/* Результат */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-900 font-semibold mb-8 leading-relaxed">
            Вы получаете ровные зубы и стабильный прикус без боли и лишнего дискомфорта — с фиксацией результата после лечения
          </p>

          {/* Кнопка CTA */}
          <div className="flex justify-center">
            <button
              onClick={scrollToForm}
              className="inline-block px-10 py-4 bg-primary text-white text-lg sm:text-xl md:text-2xl font-bold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Получить план лечения и стоимость
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
