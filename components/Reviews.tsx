import React from 'react';

// Сюда вставь ID своих видео с Rutube
const videos = [
  // Видео 1
  { id: "95a61ac72850acbbc68d7d0f0995fdc5" }, 
  // Видео 2 (пока дублирую, заменишь на свои)
  { id: "95a61ac72850acbbc68d7d0f0995fdc5" },
  // Видео 3
  { id: "95a61ac72850acbbc68d7d0f0995fdc5" },
  // Видео 4
  { id: "95a61ac72850acbbc68d7d0f0995fdc5" },
];

export default function Reviews() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 overflow-hidden">
      <div className="container-custom">
        
        {/* Заголовок */}
        <h2 className="text-3xl lg:text-5xl font-black text-center text-gray-900 font-heading mb-10 lg:mb-16">
          ОТЗЫВЫ О НАС
        </h2>

        {/* 
           Сетка видео:
           lg:grid-cols-4 -> На компе 4 колонки
           flex overflow-x-auto -> На мобилке горизонтальный скролл
           snap-x -> Чтобы видео "прилипали" при скролле
        */}
        <div className="flex lg:grid lg:grid-cols-4 gap-4 lg:gap-6 overflow-x-auto lg:overflow-visible pb-6 lg:pb-0 snap-x snap-mandatory scrollbar-hide -mx-5 px-5 lg:mx-0 lg:px-0">
          
          {videos.map((video, index) => (
            <div 
              key={index}
              // На мобилке фиксируем ширину (80% экрана), чтобы было видно соседние
              className="relative shrink-0 w-[80vw] sm:w-[320px] lg:w-auto snap-center"
            >
              {/* Контейнер 9:16 (Вертикальный формат) */}
              <div className="aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-lg border border-gray-200 relative group">
                
                <iframe 
                  src={`https://rutube.ru/play/embed/${video.id}`}
                  allowFullScreen
                  frameBorder="0" 
                  allow="clipboard-write; autoplay" 
                  className="absolute inset-0 w-full h-full"
                ></iframe>

                {/* Декоративная рамка при наведении (только десктоп) */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#3AC3F3]/50 rounded-3xl transition-colors pointer-events-none"></div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
