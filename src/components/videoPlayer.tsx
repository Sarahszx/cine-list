import {Film} from '@/types';
import React, { useState } from 'react';


interface Youtbuevideo {
  id: number; 
  name: string;
  sinopse: string;
  url: "https://www.youtube.com/watch?v="
}

const Youtbuevideo: React.FC<{ film: Film }> = ({ film }) => {
  const [showVideo, setShowVideo] = useState(false);

  const getEmbedUrl = (youtubeUrl: string) => {
    const videoId = youtubeUrl.split('v=') || youtubeUrl.split('/').pop();
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const handleOpenVideo = () => {
    setShowVideo(true);
  };

  return (
    <div>
     

      <button onClick={handleOpenVideo}>
        Assistir Vídeo
      </button>

      {showVideo && (
        <iframe
          width="560"
          height="315"
          src={getEmbedUrl(film.url)}
          title={film.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Youtbuevideo;
