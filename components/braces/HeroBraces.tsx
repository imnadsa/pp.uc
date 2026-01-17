'use client';

export default function HeroBraces() {
  const scrollToForm = () => {
    const formElement = document.getElementById('multistep-form');
    if (formElement) {
      const targetPosition = formElement.offsetTop - 100; // Отступ сверху
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 6000; // 1.5 секунды (медленнее)
      let start: number | null = null;

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      // Easing функция для плавности
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
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Заголовок */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Рассчитайте стоимость выравнивания зубов конкретно в вашем случае в Санкт-Петербурге
          </h1>

          {/* Основной текст блоками */}
          <div className="space-y-6 text-lg sm:text-xl lg:text-2xl text-gray-700 mb-10">
            <p className="leading-relaxed">
              Избавьтесь от <strong>брексизма, скрежета, стираемости зубов</strong>, постоянно выпадающих пломб, щелей, скученности, болей в челюсти и других искривлений
            </p>

            <p className="leading-relaxed font-medium text-gray-900">
              Здоровый прикус и ровные зубы без боли и дискомфорта за <strong>12-18 месяцев</strong> с гарантией, что они не разъедутся обратно
            </p>
          </div>

          {/* Кнопка CTA */}
          <div className="flex justify-center">
            <button
              onClick={scrollToForm}
              className="inline-block px-12 py-5 bg-primary text-white text-xl sm:text-2xl font-bold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Рассчитать стоимость
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
