
import { useState } from 'react';
import { Heart, Eye, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface ArtworkCardProps {
  id: string;
  title: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  thumbnail: string;
  likes: number;
  views: number;
  comments: number;
  tags: string[];
}

const ArtworkCard = ({ id, title, author, thumbnail, likes, views, comments, tags }: ArtworkCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  
  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };
  
  return (
    <Link to={`/artwork/${id}`} className="group block">
      <Card className="bg-transparent border-0 overflow-hidden transition-all hover:shadow-lg shadow-[hsl(var(--krx-blue)/0.1)] animate-fade-in">
        <div className="relative overflow-hidden aspect-[4/3] bg-[hsl(var(--krx-darker-blue)/0.5)]">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
            loading="lazy"
          />
        </div>
        
        <CardContent className="p-3">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-white group-hover:text-[hsl(var(--krx-blue))] line-clamp-1">
              {title}
            </h3>
            <button
              onClick={handleLike}
              className="text-gray-400 hover:text-red-400 transition-colors"
              aria-label={isLiked ? "Убрать из избранного" : "Добавить в избранное"}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-400 text-red-400' : ''}`} />
            </button>
          </div>
          
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center">
              <img
                src={author.avatar}
                alt={author.name}
                className="w-5 h-5 rounded-full mr-2"
              />
              <span className="text-xs text-gray-300 hover:text-white">
                {author.name}
              </span>
            </div>
            
            <div className="flex items-center space-x-3 text-gray-400 text-xs">
              <div className="flex items-center">
                <Eye className="h-3 w-3 mr-1" />
                <span>{views}</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-3 w-3 mr-1" />
                <span>{comments}</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-3 w-3 mr-1" />
                <span>{likeCount}</span>
              </div>
            </div>
          </div>
          
          {tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-xs bg-[hsl(var(--krx-blue)/0.2)] px-1.5 py-0.5 text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArtworkCard;
