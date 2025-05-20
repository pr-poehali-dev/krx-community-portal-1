
import { ArrowRight } from "lucide-react";

const HeroBanner = () => {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--krx-darker-blue)/0.8)] to-[hsl(var(--krx-teal)/0.6)]"
          style={{ 
            backgroundImage: `url('https://cdn.poehali.dev/files/df64ac9b-d475-4a13-a26a-c556c0aa4b8f.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[hsl(var(--background))]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 krx-gradient-text">
          KRX Community
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          Создавайте, делитесь и развивайтесь вместе с сообществом 3D-моделлеров. Публикуйте свои работы, изучайте гайды и находите новые возможности.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button className="krx-button-primary">
            Присоединиться
          </button>
          <button className="krx-button-outline">
            Узнать больше <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
        
        <div className="flex justify-center space-x-8 text-white text-center mt-12">
          <div>
            <div className="text-3xl font-bold krx-gradient-text">10K+</div>
            <div className="text-sm text-white/70">Художников</div>
          </div>
          <div>
            <div className="text-3xl font-bold krx-gradient-text">50K+</div>
            <div className="text-sm text-white/70">Проектов</div>
          </div>
          <div>
            <div className="text-3xl font-bold krx-gradient-text">2K+</div>
            <div className="text-sm text-white/70">Вакансий</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
