
import { useState } from 'react';
import { Heart, Eye, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Author {
  id: string;
  name: string;
  avatar: string;
}

interface ArtworkCardProps {
  id: string;
  title: string;
  author: Author;
  thumbnail: string;
  likes: number;
  views: number;
  comments: number;
  tags: string[];
}

const ArtworkCard = ({ id, title, author, thumbnail, likes, views, comments, tags }: ArtworkCardProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  
  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    
    setLiked(!liked);
  };
  
  return (
    <div className="group relative overflow-hidden bg-[hsl(var(--krx-darker-blue)/0.7)] border border-[hsl(var(--krx-blue)/0.2)] transition-all hover:border-[hsl(var(--krx-blue)/0.6)]">
      {/* Превью изображения */}
      <Link to={`/artwork/${id}`} className="block relative pb-[75%] overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Оверлей при наведении */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-medium text-lg truncate">{title}</h3>
          </div>
        </div>
      </Link>
      
      {/* Информация о работе */}
      <div className="p-3 flex justify-between items-center">
        {/* Автор */}
        <Link to={`/profile/${author.id}`} className="flex items-center space-x-2 group/author">
          <img 
            src={author.avatar}
            alt={author.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-gray-300 text-sm font-medium group-hover/author:text-white transition-colors truncate">
            {author.name}
          </span>
        </Link>
        
        {/* Статистика */}
        <div className="flex items-center space-x-3">
          <button 
            onClick={handleLike}
            className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors"
            aria-label={liked ? "Убрать лайк" : "Поставить лайк"}
          >
            <Heart className={`h-4 w-4 ${liked ? 'text-red-500 fill-red-500' : ''}`} />
            <span className="text-xs">{likeCount}</span>
          </button>
          
          <div className="flex items-center space-x-1 text-gray-400" title="Просмотры">
            <Eye className="h-4 w-4" />
            <span className="text-xs">{views}</span>
          </div>
          
          <div className="flex items-center space-x-1 text-gray-400" title="Комментарии">
            <MessageCircle className="h-4 w-4" />
            <span className="text-xs">{comments}</span>
          </div>
        </div>
      </div>
      
      {/* Теги */}
      {tags.length > 0 && (
        <div className="px-3 pb-3 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Link 
              key={tag} 
              to={`/tags/${tag}`}
              className="text-xs px-2 py-1 bg-[hsl(var(--krx-blue)/0.2)] text-gray-300 hover:bg-[hsl(var(--krx-blue)/0.3)] hover:text-white transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArtworkCard;
