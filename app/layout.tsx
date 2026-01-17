import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  // Основной заголовок
  title: "Брекеты за 3.990₽/месяц под контролем ТОП-5 ортодонтов России в СПб",
  
  // Описание для поисковиков
  description: "Установка брекетов за 3.990₽/месяц ₽ в Санкт-Петербурге. Лечение под контролем ведущих ортодонтов России с 46-летним стажем. Бесплатная диагностика и план лечения. 3 клиники в СПб и Гатчине.",
  
  // Ключевые слова
  keywords: [
    "брекеты спб",
    "брекеты санкт-петербург",
    "установка брекетов",
    "брекеты цена",
    "ортодонт спб",
    "исправление прикуса",
    "металлические брекеты",
    "керамические брекеты",
    "самолигирующие брекеты",
    "брекеты взрослым",
    "брекеты детям",
    "выравнивание зубов",
    "ортодонтия спб",
    "брекет-системы",
    "лечение прикуса",
    "брекеты недорого",
    "брекеты рассрочка",
    "лучший ортодонт спб",
    "клиника ортодонтии",
    "сапфировые брекеты",
    "лингвальные брекеты",
    "элайнеры спб",
    "консультация ортодонта",
    "братья тихоновы",
    "топ ортодонтов россии",
  ],
  
  // Авторство
  authors: [{ name: "Клиника Ортодонтии Братьев Тихоновых" }],
  
  // Для поисковых роботов
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  
  // Open Graph (для соцсетей: VK, Facebook)
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Клиника Ортодонтии Полный Порядок",
    title: "Брекеты за 3.990₽/месяц под контролем ТОП-5 ортодонтов России",
    description: "Установка брекетов в СПб под контролем ведущих ортодонтов России. Бесплатная диагностика. 46 лет опыта. 3 клиники.",
  },
  
  // Дополнительные мета-теги
  other: {
    "geo.region": "RU-SPE",
    "geo.placename": "Санкт-Петербург",
    "geo.position": "59.9311;30.3609",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
        
        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106305816', 'ym');
            
            ym(106305816, 'init', {
              ssr:true,
              webvisor:true,
              clickmap:true,
              ecommerce:"dataLayer",
              accurateTrackBounce:true,
              trackLinks:true
            });
          `}
        </Script>
        
        <noscript>
          <div>
            <img 
              src="https://mc.yandex.ru/watch/106305816" 
              style={{position: 'absolute', left: '-9999px'}} 
              alt="" 
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
