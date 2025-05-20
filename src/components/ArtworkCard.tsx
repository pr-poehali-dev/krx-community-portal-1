
import { useState } from 'react';
import { Heart, Eye, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ArtworkCardProps {
  id: string;
  title: string;
  author: string;
  authorAvatar: string;
  image: string;
  likes: number;
  views: number;
  comments: number;
  tags: string[];
}

const ArtworkCard = ({ 
  id, 
  title, 
  author, 
  authorAvatar, 
  image, 
  likes, 
  views, 
  comments,
  tags 
}: ArtworkCardProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (liked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="bg-[hsl(var(--krx-darker-blue)/0.6)] overflow-hidden group hover:shadow-lg transition-shadow">
      <Link to={`/artwork/${id}`} className="block">
        <div className="relative overflow-hidden">
          {/* Artwork Image */}
          <img 
            src={image} 
            alt={title} 
            className="w-full aspect-[3/2] object-cover object-center group-hover:scale-105 transition-transform duration-300" 
          />
          
          {/* Overlay with stats on hover */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="flex space-x-4 text-white">
              <button 
                onClick={handleLike}
                className="flex items-center space-x-1"
              >
                <Heart className={`h-5 w-5 ${liked ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                <span>{likeCount}</span>
              </button>
              <div className="flex items-center space-x-1">
                <Eye className="h-5 w-5" />
                <span>{views}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageSquare className="h-5 w-5" />
                <span>{comments}</span>
              </div>
            </div>
          </div>
          
          {/* Tags */}
          <div className="absolute top-2 left-2 flex flex-wrap gap-1">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs py-0.5 px-1.5 bg-[hsl(var(--krx-blue)/0.8)] text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Title and Author */}
        <div className="p-3">
          <h3 className="font-medium text-white truncate">{title}</h3>
          <div className="flex items-center mt-2 space-x-2">
            <img 
              src={authorAvatar} 
              alt={author} 
              className="w-6 h-6 rounded-full object-cover" 
            />
            <span className="text-sm text-gray-300">{author}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArtworkCard;
