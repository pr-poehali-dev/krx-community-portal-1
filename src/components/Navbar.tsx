import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import AuthModal from "./auth/AuthModal";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [authModal, setAuthModal] = useState<{
    isOpen: boolean;
    mode: "login" | "register";
  }>({
    isOpen: false,
    mode: "login",
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const navigation = [
    { name: "Работы сообщества", href: "/", current: true },
    { name: "Учиться", href: "/learn", current: false, color: "krx-learn" },
    { name: "Магазин", href: "/shop", current: false, color: "krx-shop" },
    { name: "Вакансии", href: "/jobs", current: false, color: "krx-jobs" },
  ];

  return (
    <nav className="bg-[hsl(var(--krx-darker-blue)/0.8)] backdrop-blur-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  KRX Community
                </span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`krx-button ${
                      item.current
                        ? "bg-[hsl(var(--krx-blue)/0.6)] text-white"
                        : "text-gray-300 hover:bg-[hsl(var(--" +
                          (item.color || "krx-blue") +
                          ")/0.3)] hover:text-white"
                    }`}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Search and Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={toggleSearch}
                className="p-2 text-gray-300 hover:text-white transition-colors"
                aria-label="Поиск"
              >
                <Search className="h-5 w-5" />
              </button>
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 w-72">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Поиск по сайту..."
                      className="w-full p-2 pr-10 bg-[hsl(var(--krx-darker-blue))] border border-[hsl(var(--krx-blue)/0.3)] text-white rounded-none focus:outline-none focus:border-[hsl(var(--krx-blue))]"
                    />
                    <button className="absolute right-0 top-0 h-full px-3 flex items-center justify-center text-gray-300">
                      <Search className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
            <ThemeToggle />
            <button
              onClick={() => setAuthModal({ isOpen: true, mode: "login" })}
              className="krx-button-outline"
            >
              Войти
            </button>
            <button
              onClick={() => setAuthModal({ isOpen: true, mode: "register" })}
              className="krx-button-primary"
            >
              Регистрация
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={toggleSearch}
              className="p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Поиск"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-300 hover:text-white transition-colors"
              aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      {isSearchOpen && (
        <div className="md:hidden px-2 pb-3 pt-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Поиск по сайту..."
              className="w-full p-2 pr-10 bg-[hsl(var(--krx-darker-blue))] border border-[hsl(var(--krx-blue)/0.3)] text-white rounded-none focus:outline-none focus:border-[hsl(var(--krx-blue))]"
            />
            <button className="absolute right-0 top-0 h-full px-3 flex items-center justify-center text-gray-300">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-2 pb-3 pt-2 space-y-1 bg-[hsl(var(--krx-darker-blue)/0.95)]">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block px-3 py-2 ${
                item.current
                  ? "bg-[hsl(var(--krx-blue)/0.6)] text-white"
                  : "text-gray-300 hover:bg-[hsl(var(--" +
                    (item.color || "krx-blue") +
                    ")/0.3)] hover:text-white"
              }`}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 flex space-x-2">
            <button className="w-1/2 krx-button-outline">Войти</button>
            <button className="w-1/2 krx-button-primary">Регистрация</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
