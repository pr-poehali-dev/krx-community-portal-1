
import { useState, useEffect } from "react";
import ArtworkCard from "./ArtworkCard";

// Имитация данных проектов
const generateMockArtworks = (count: number) => {
  const artworks = [];
  const tags = ["3D модель", "Персонаж", "Окружение", "Концепт", "Анимация", "Игра", "Предмет"];
  
  const mockImages = [
    "https://images.unsplash.com/photo-1599010369632-ef0925904bc5?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1592155931584-901ac15763e3?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599309329365-0a9ed380b65d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1618172193763-c511deb635ca?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611117775350-5249d0d39bf5?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?q=80&w=800&auto=format&fit=crop",
  ];
  
  const artists = ["Алексей К.", "Мария В.", "Дмитрий М.", "Анна С.", "Павел Д.", "Юлия А."];
  const titles = [
    "Космический корабль 'Аврора'",
    "Фэнтезийный персонаж",
    "Научно-фантастический интерьер",
    "Средневековый замок",
    "Футуристический город",
    "Мифическое существо",
    "Стимпанк механизм",
    "Боевой робот",
    "Подводный мир",
    "Постапокалиптический пейзаж"
  ];

  for (let i = 0; i < count; i++) {
    artworks.push({
      id: i + 1,
      title: titles[Math.floor(Math.random() * titles.length)],
      artist: artists[Math.floor(Math.random() * artists.length)],
      imageUrl: mockImages[i % mockImages.length],
      likes: Math.floor(Math.random() * 500),
      views: Math.floor(Math.random() * 2000) + 500,
      comments: Math.floor(Math.random() * 50),
      tags: [tags[Math.floor(Math.random() * tags.length)]],
    });
  }

  return artworks;
};

const ArtworkGrid = () => {
  const [artworks, setArtworks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  
  // Имитация загрузки первичных данных
  useEffect(() => {
    setArtworks(generateMockArtworks(12));
  }, []);

  // Имитация бесконечной прокрутки
  const loadMore = () => {
    setLoading(true);
    // Имитация задержки загрузки
    setTimeout(() => {
      setArtworks([...artworks, ...generateMockArtworks(6)]);
      setPage(page + 1);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="krx-grid">
        {artworks.map((artwork) => (
          <ArtworkCard key={`${artwork.id}-${artwork.title}`} {...artwork} />
        ))}
      </div>
      
      {/* Кнопка "Загрузить еще" */}
      <div className="mt-12 text-center">
        <button
          onClick={loadMore}
          disabled={loading}
          className="krx-button-primary px-8 py-2"
        >
          {loading ? "Загрузка..." : "Показать больше работ"}
        </button>
      </div>
    </div>
  );
};

export default ArtworkGrid;
