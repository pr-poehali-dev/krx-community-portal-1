
import { Facebook, Twitter, Instagram, Youtube, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'О нас',
      links: [
        { name: 'О KRX Community', href: '/about' },
        { name: 'Наша команда', href: '/team' },
        { name: 'Партнёры', href: '/partners' },
        { name: 'Контакты', href: '/contact' },
      ],
    },
    {
      title: 'Сообщество',
      links: [
        { name: 'Работы', href: '/' },
        { name: 'Учиться', href: '/learn' },
        { name: 'Магазин', href: '/shop' },
        { name: 'Вакансии', href: '/jobs' },
      ],
    },
    {
      title: 'Ресурсы',
      links: [
        { name: 'Блог', href: '/blog' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Помощь', href: '/help' },
        { name: 'Условия использования', href: '/terms' },
      ],
    },
  ];
  
  return (
    <footer className="bg-[hsl(var(--krx-darker-blue))] border-t border-[hsl(var(--krx-blue)/0.2)]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                KRX Community
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Площадка для творчества 3D-моделистов, художников и дизайнеров.
              Публикуйте свои работы, учитесь и находите единомышленников.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" className="text-gray-400 hover:text-white" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="https://github.com" className="text-gray-400 hover:text-white" aria-label="Github">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          {/* Навигация по футеру */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-white font-medium mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-gray-400 hover:text-white text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-[hsl(var(--krx-blue)/0.1)] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} KRX Community. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm">
              Условия использования
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white text-sm">
              Политика cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
