
import { Button } from '@/components/ui/button';

const HeroBanner = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[hsl(var(--krx-blue))] to-[hsl(var(--krx-teal))] overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://cdn.poehali.dev/files/df64ac9b-d475-4a13-a26a-c556c0aa4b8f.jpg')] bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 py-16 sm:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
            <span className="krx-gradient-text">KRX Community</span> — площадка для творчества 3D-моделистов
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-100 mb-8">
            Публикуйте свои работы, делитесь знаниями, находите вакансии и общайтесь 
            с единомышленниками в сфере 3D-моделирования и компьютерной графики
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="krx-button-primary text-base py-3 px-6">
              Присоединиться к сообществу
            </Button>
            <Button className="krx-button-outline text-base py-3 px-6">
              Исследовать работы
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[hsl(var(--background))] to-transparent"></div>
    </section>
  );
};

export default HeroBanner;
