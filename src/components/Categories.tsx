
import { useState } from 'react';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Все работы' },
    { id: 'characters', name: 'Персонажи' },
    { id: 'environments', name: 'Окружение' },
    { id: 'props', name: 'Пропсы' },
    { id: 'vehicles', name: 'Транспорт' },
    { id: 'architecture', name: 'Архитектура' },
    { id: 'animation', name: 'Анимация' },
    { id: 'vfx', name: 'VFX' },
    { id: 'games', name: 'Игры' },
  ];
  
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">Категории</h2>
        <div className="flex items-center">
          <span className="text-sm text-gray-400 mr-2">Сортировать:</span>
          <select className="bg-[hsl(var(--krx-darker-blue)/0.6)] text-white text-sm border-none px-2 py-1 focus:outline-none focus:ring-1 focus:ring-[hsl(var(--krx-blue))]">
            <option>Новые</option>
            <option>Популярные</option>
            <option>По рейтингу</option>
          </select>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`krx-category-button ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;
