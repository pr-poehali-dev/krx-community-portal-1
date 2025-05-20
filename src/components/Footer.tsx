
import { Link } from "react-router-dom";
import { Github, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--krx-darker-blue)/0.9)] backdrop-blur-md border-t border-[hsl(var(--krx-blue)/0.2)]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                KRX Community
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Платформа для 3D-моделистов, художников и дизайнеров, где каждый может делиться своими работами, находить вдохновение и развиваться вместе с сообществом.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Github">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-medium mb-2">Навигация</h3>
            <Link to="/" className="text-gray-400 hover:text-white transition-colors">Работы сообщества</Link>
            <Link to="/learn" className="text-gray-400 hover:text-white transition-colors">Учиться</Link>
            <Link to="/shop" className="text-gray-400 hover:text-white transition-colors">Магазин</Link>
            <Link to="/jobs" className="text-gray-400 hover:text-white transition-colors">Вакансии</Link>
          </div>

          {/* Ресурсы */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-medium mb-2">Ресурсы</h3>
            <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Блог</Link>
            <Link to="/tutorials" className="text-gray-400 hover:text-white transition-colors">Туториалы</Link>
            <Link to="/challenges" className="text-gray-400 hover:text-white transition-colors">Челленджи</Link>
            <Link to="/competitions" className="text-gray-400 hover:text-white transition-colors">Конкурсы</Link>
          </div>

          {/* Подписка */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-medium mb-2">Оставайтесь на связи</h3>
            <p className="text-gray-400 text-sm">Подпишитесь на нашу рассылку, чтобы получать новости и обновления.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="bg-[hsl(var(--krx-darker-blue))] border border-[hsl(var(--krx-blue)/0.3)] text-white px-4 py-2 w-full focus:outline-none focus:border-[hsl(var(--krx-blue))]" 
              />
              <button className="krx-button-primary px-4 py-2 whitespace-nowrap">
                Подписаться
              </button>
            </div>
          </div>
        </div>

        {/* Нижний блок */}
        <div className="mt-12 pt-6 border-t border-[hsl(var(--krx-blue)/0.2)] flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} KRX Community. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
              Условия использования
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Политика конфиденциальности
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
              Политика cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
