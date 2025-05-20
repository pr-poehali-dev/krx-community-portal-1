
import { Heart, Eye, MessageSquare } from "lucide-react";
import { useState } from "react";

interface ArtworkCardProps {
  id: number;
  title: string;
  artist: string;
  imageUrl: string;
  likes: number;
  views: number;
  comments: number;
  tags: string[];
}

const ArtworkCard = ({
  id,
  title,
  artist,
  imageUrl,
  likes,
  views,
  comments,
  tags,
}: ArtworkCardProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="krx-card group bg-card animate-fade-in">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="w-full p-4 text-white">
            <h3 className="text-lg font-semibold truncate">{title}</h3>
            <p className="text-sm text-white/70">by {artist}</p>
          </div>
        </div>
      </div>
      <div className="krx-card-content flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleLike}
            className="flex items-center space-x-1 text-white/70 hover:text-red-400 transition-colors"
          >
            <Heart
              className={`h-4 w-4 ${liked ? "fill-red-400 text-red-400" : ""}`}
            />
            <span>{likeCount}</span>
          </button>
          <div className="flex items-center space-x-1 text-white/70">
            <Eye className="h-4 w-4" />
            <span>{views}</span>
          </div>
          <div className="flex items-center space-x-1 text-white/70">
            <MessageSquare className="h-4 w-4" />
            <span>{comments}</span>
          </div>
        </div>
        <div>
          {tags.length > 0 && (
            <span className="text-xs px-2 py-1 bg-[hsl(var(--krx-blue)/0.2)] text-blue-300">
              {tags[0]}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;
