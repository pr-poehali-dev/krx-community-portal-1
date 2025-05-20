
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import Categories from '../components/Categories';
import ArtworkGrid from '../components/ArtworkGrid';
import Footer from '../components/Footer';

const Index = () => {
  // Устанавливаем темную тему по умолчанию при загрузке страницы
  useEffect(() => {
    // Проверяем, сохранена ли тема в localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // Если тема не сохранена или установлена dark, применяем темную тему
    if (!savedTheme || savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="krx-gradient-bg min-h-screen">
      <Navbar />
      <main className="pt-16"> {/* Отступ для фиксированного navbar */}
        <HeroBanner />
        <Categories />
        <ArtworkGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
