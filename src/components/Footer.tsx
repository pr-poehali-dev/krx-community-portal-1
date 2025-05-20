
import { Link } from "react-router-dom";
import { Github, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(var(--krx-darker-blue))] border-t border-[hsl(var(--krx-blue)/0.2)] pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">О проекте</h3>
            <p className="text-gray-400 text-sm mb-4">
              KRX Community — это платформа для 3D-моделлеров, где можно делиться работами, 
              находить вдохновение и развиваться вместе с сообществом.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Ресурсы</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/learn" className="text-gray-400 hover:text-white transition-colors">Учебные материалы</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-white transition-colors">Магазин 3D-моделей</Link></li>
              <li><Link to="/jobs" className="text-gray-400 hover:text-white transition-colors">Вакансии</Link></li>
              <li><Link to="/challenges" className="text-gray-400 hover:text-white transition-colors">Конкурсы</Link></li>
              <li><Link to="/software" className="text-gray-400 hover:text-white transition-colors">Программное обеспечение</Link></li>
            </ul>
          </div>

          {/* Column 3: Community */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Сообщество</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Блог</Link></li>
              <li><Link to="/forum" className="text-gray-400 hover:text-white transition-colors">Форум</Link></li>
              <li><Link to="/discord" className="text-gray-400 hover:text-white transition-colors">Discord</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white transition-colors">Мероприятия</Link></li>
              <li><Link to="/stories" className="text-gray-400 hover:text-white transition-colors">Истории успеха</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:contact@krxcommunity.ru" className="hover:text-white transition-colors">
                  contact@krxcommunity.ru
                </a>
              </div>
              <div>
                <button className="krx-button-primary w-full">Обратная связь</button>
              </div>
              <div>
                <button className="krx-button-outline w-full">Стать партнером</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[hsl(var(--krx-blue)/0.2)] pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} KRX Community. Все права защищены.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/terms" className="text-gray-500 hover:text-white transition-colors">Условия использования</Link>
            <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors">Политика конфиденциальности</Link>
            <Link to="/cookies" className="text-gray-500 hover:text-white transition-colors">Настройки cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
