
import { useState, useEffect } from 'react';
import ArtworkCard from './ArtworkCard';
import { Button } from '@/components/ui/button';

// Демо-данные для 3D-работ
const DEMO_ARTWORKS = [
  {
    id: '1',
    title: 'Футуристический город',
    author: {
      id: 'user1',
      name: 'Алексей Петров',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    thumbnail: 'https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    likes: 245,
    views: 1280,
    comments: 18,
    tags: ['город', 'футуризм', 'архитектура'],
  },
  {
    id: '2',
    title: 'Персонаж для игры',
    author: {
      id: 'user2',
      name: 'Екатерина Смирнова',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    thumbnail: 'https://images.unsplash.com/photo-1594670297948-59a0048cce82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    likes: 352,
    views: 2150,
    comments: 32,
    tags: ['персонаж', 'игры', 'концепт'],
  },
  {
    id: '3',
    title: 'Средневековый замок',
    author: {
      id: 'user3',
      name: 'Дмитрий Иванов',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    thumbnail: 'https://images.unsplash.com/photo-1533757801534-9ad3a7c03a5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    likes: 178,
    views: 950,
    comments: 14,
    tags: ['замок', 'средневековье', 'архитектура'],
  },
  {
    id: '4',
    title: 'Научно-фантастический корабль',
    author: {
      id: 'user4',
      name: 'Анна Козлова',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    thumbnail: 'https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    likes: 295,
    views: 1850,
    comments: 28,
    tags: ['sci-fi', 'транспорт', 'космос'],
  },
  {
    id: '5',
    title: 'Фэнтезийный персонаж',
    author: {
      id: 'user5',
      name: 'Сергей Новиков',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    thumbnail: 'https://images.unsplash.com/photo-1582845512747-e42001c95638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    likes: 415,
    views: 3100,
    comments: 47,
    tags: ['фэнтези', 'персонаж', 'концепт'],
  },
  {
    id: '6',
    title: 'Реалистичный интерьер',
    author: {
      id: 'user6',
      name: 'Ольга Соколова',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    thumbnail: 'https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    likes: 267,
    views: 1540,
    comments: 21,
    tags: ['интерьер', 'архитектура', 'визуализация'],
  },
];

const ArtworkGrid = () => {
  const [artworks, setArtworks] = useState(DEMO_ARTWORKS);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  
  // Имитация загрузки дополнительного контента
  const loadMore = () => {
    setIsLoading(true);
    
    // Имитируем задержку сетевого запроса
    setTimeout(() => {
      // Дублируем существующие работы с новыми ID для демонстрации
      const newArtworks = DEMO_ARTWORKS.map(artwork => ({
        ...artwork,
        id: `${artwork.id}-${page}`,
        likes: Math.floor(artwork.likes * (0.8 + Math.random() * 0.5)),
        views: Math.floor(artwork.views * (0.8 + Math.random() * 0.5)),
        comments: Math.floor(artwork.comments * (0.8 + Math.random() * 0.5)),
      }));
      
      setArtworks([...artworks, ...newArtworks]);
      setPage(page + 1);
      setIsLoading(false);
    }, 800);
  };
  
  // Детектор прокрутки до конца страницы для бесконечной загрузки
  useEffect(() => {
    const handleScroll = () => {
      // Проверяем, находимся ли мы рядом с нижней частью страницы
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 500 &&
        !isLoading
      ) {
        loadMore();
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [artworks, isLoading]);
  
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="krx-grid">
        {artworks.map((artwork) => (
          <ArtworkCard key={artwork.id} {...artwork} />
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        <Button 
          onClick={loadMore} 
          className="krx-button-outline"
          disabled={isLoading}
        >
          {isLoading ? 'Загрузка...' : 'Показать ещё'}
        </Button>
      </div>
    </section>
  );
};

export default ArtworkGrid;
