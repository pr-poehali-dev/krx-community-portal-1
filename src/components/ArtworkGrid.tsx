
import { useState, useEffect } from 'react';
import ArtworkCard from './ArtworkCard';

// Фейковые данные для демонстрации
const generateArtworks = (count: number) => {
  const tags = ['Персонаж', 'Окружение', 'Концепт', 'Анимация', 'VFX', 'Игровая модель', 'Новое', 'Популярное'];
  
  return Array.from({ length: count }, (_, i) => ({
    id: `artwork-${i}`,
    title: `3D Модель ${i + 1}`,
    author: `Художник ${i + 1}`,
    authorAvatar: `https://randomuser.me/api/portraits/${i % 2 ? 'men' : 'women'}/${(i % 70) + 1}.jpg`,
    image: `https://picsum.photos/seed/${i + 1}/800/600`,
    likes: Math.floor(Math.random() * 500),
    views: Math.floor(Math.random() * 2000) + 500,
    comments: Math.floor(Math.random() * 50),
    tags: [
      tags[Math.floor(Math.random() * tags.length)],
      tags[Math.floor(Math.random() * tags.length)]
    ].filter((item, i, ar) => ar.indexOf(item) === i), // Удаляем дубликаты
  }));
};

const ArtworkGrid = () => {
  const [artworks, setArtworks] = useState(generateArtworks(12));
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Загрузка дополнительных работ при прокрутке
  const loadMoreArtworks = () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    
    // Имитация загрузки данных с сервера
    setTimeout(() => {
      const newArtworks = generateArtworks(8);
      setArtworks(prev => [...prev, ...newArtworks]);
      setLoading(false);
      
      // Ограничение количества добавляемых элементов для демо
      if (artworks.length > 50) {
        setHasMore(false);
      }
    }, 800);
  };

  // Обработчик прокрутки для бесконечной загрузки
  useEffect(() => {
    const handleScroll = () => {
      // Проверяем, достигли ли мы дна страницы
      if (
        window.innerHeight + document.documentElement.scrollTop >= 
        document.documentElement.offsetHeight - 500 &&
        !loading &&
        hasMore
      ) {
        loadMoreArtworks();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore, artworks.length]);

  return (
    <section className="py-12 container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-8 krx-gradient-text">Работы сообщества</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {artworks.map((artwork) => (
          <ArtworkCard key={artwork.id} {...artwork} />
        ))}
      </div>
      
      {loading && (
        <div className="flex justify-center mt-8">
          <div className="w-10 h-10 border-4 border-[hsl(var(--krx-blue)/0.3)] border-t-[hsl(var(--krx-blue))] rounded-full animate-spin"></div>
        </div>
      )}
      
      {!hasMore && (
        <p className="text-center mt-8 text-gray-400">Вы просмотрели все доступные работы</p>
      )}
    </section>
  );
};

export default ArtworkGrid;
