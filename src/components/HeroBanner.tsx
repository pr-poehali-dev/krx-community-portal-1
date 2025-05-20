
import { Button } from '@/components/ui/button';

const HeroBanner = () => {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Градиентный фон с узором */}
      <div 
        className="absolute inset-0 krx-gradient-banner"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(10, 78, 100, 0.8) 0%, transparent 50%),
            radial-gradient(circle at 80% 30%, rgba(16, 85, 110, 0.6) 0%, transparent 50%),
            linear-gradient(180deg, rgba(8, 24, 42, 0.9) 0%, rgba(5, 18, 32, 0.95) 100%)
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Декоративные элементы */}
        <div className="absolute w-full h-full">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(78, 190, 200, 0.1)" strokeWidth="0.5"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
          
          {/* Декоративные линии */}
          <div className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-gradient-to-r from-transparent to-[#2aa5a5]"></div>
          <div className="absolute top-0 right-0 w-1/2 h-[2px] bg-gradient-to-l from-transparent to-[#1e7fab]"></div>
        </div>
      </div>

      {/* Содержимое баннера */}
      <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            KRX Community
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-100 mb-6">
          Сообщество 3D-моделистов и художников
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
          Публикуйте свои работы, изучайте новые техники, находите вакансии 
          и вдохновляйтесь творчеством единомышленников в одном месте
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="krx-button-primary text-lg px-6 py-6">
            Начать публиковать работы
          </Button>
          <Button variant="outline" className="krx-button-outline text-lg px-6 py-6">
            Узнать больше о сообществе
          </Button>
        </div>
      </div>

      {/* Декоративный элемент внизу баннера */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-transparent"></div>
    </section>
  );
};

export default HeroBanner;
