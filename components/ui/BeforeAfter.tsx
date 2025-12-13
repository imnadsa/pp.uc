'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfter({ beforeImage, afterImage }: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percent);
  }, []);

  const onMouseDown = () => setIsDragging(true);
  const onTouchStart = () => setIsDragging(true);

  useEffect(() => {
    const onMouseUp = () => setIsDragging(false);
    const onTouchEnd = () => setIsDragging(false);
    
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    
    const onTouchMove = (e: TouchEvent) => {
      if (isDragging) handleMove(e.touches[0].clientX);
    };

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', onTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [isDragging, handleMove]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden select-none cursor-ew-resize group rounded-t-[2rem]" // Скругление только сверху, как у карточки
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {/* 1. ФОТО "ПОСЛЕ" (Нижний слой, правая часть) */}
      <Image 
        src={afterImage} 
        alt="После" 
        fill 
        className="object-cover pointer-events-none"
      />
      
      {/* 2. ФОТО "ДО" (Верхний слой, левая часть, обрезается) */}
      <div 
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="relative w-full h-full">
           {/* Чтобы картинка не сжималась, растягиваем её контейнер на 100vw или широкую фиксированную ширину */}
           <div className="absolute inset-0 w-[200vw] lg:w-[1000px] h-full pointer-events-none"> 
             <Image 
              src={beforeImage} 
              alt="До" 
              fill 
              className="object-cover object-left"
            />
           </div>
        </div>
      </div>

      {/* 3. ГОЛУБАЯ ЛИНИЯ (Разделитель) */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-[#3BC3F3] z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      ></div>

      {/* 4. КРУГЛАЯ КНОПКА СО СТРЕЛКАМИ */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-[#3BC3F3] rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.2)] z-30 pointer-events-none transform -translate-x-1/2"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Стрелочки < > */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="translate-x-[-2px]"/>
          <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="translate-x-[2px] hidden"/> {/* Вторая стрелка если нужна */}
          
          {/* Или вариант именно как на скрине (две скобки < >) */}
          <path d="M14 16L10 12L14 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="translate(-3, 0)"/>
          <path d="M10 16L14 12L10 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="translate(3, 0)"/>
        </svg>
      </div>

      {/* 5. ПЛАШКИ "До" и "После" */}
      <div className="absolute bottom-4 left-4 z-20 pointer-events-none transition-opacity duration-300" style={{ opacity: sliderPosition < 10 ? 0 : 1 }}>
        <span className="bg-white px-4 py-1.5 rounded-lg text-[#3BC3F3] text-sm font-bold shadow-sm">
          До
        </span>
      </div>

      <div className="absolute bottom-4 right-4 z-20 pointer-events-none transition-opacity duration-300" style={{ opacity: sliderPosition > 90 ? 0 : 1 }}>
        <span className="bg-white px-4 py-1.5 rounded-lg text-[#3BC3F3] text-sm font-bold shadow-sm">
          После
        </span>
      </div>

    </div>
  );
}
