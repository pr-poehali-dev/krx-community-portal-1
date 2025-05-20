
import { useState } from "react";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Все" },
    { id: "new", name: "Новые" },
    { id: "popular", name: "Популярные" },
    { id: "trending", name: "В тренде" },
    { id: "characters", name: "Персонажи" },
    { id: "environments", name: "Окружение" },
    { id: "props", name: "Предметы" },
    { id: "concepts", name: "Концепты" },
    { id: "animations", name: "Анимация" },
    { id: "game-assets", name: "Игровые ассеты" },
  ];

  return (
    <div className="w-full py-4 bg-[hsl(var(--krx-darker-blue)/0.3)] border-y border-[hsl(var(--krx-blue)/0.2)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`krx-category-button ${
                activeCategory === category.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
