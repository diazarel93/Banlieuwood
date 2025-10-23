import { X, Play, Pause, Volume2, VolumeX, Maximize, SkipBack, SkipForward } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface Video {
  title: string;
  vimeoId: string;
  thumbnail: string;
}

interface VideoPlayerProps {
  videos: Video[];
  currentIndex: number;
  onClose: () => void;
  onVideoChange: (index: number) => void;
}

export default function VideoPlayer({ videos, currentIndex, onClose, onVideoChange }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const currentVideo = videos[currentIndex];
  const hasNext = currentIndex < videos.length - 1;
  const hasPrevious = currentIndex > 0;

  const handleNext = () => {
    if (hasNext) {
      onVideoChange(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (hasPrevious) {
      onVideoChange(currentIndex - 1);
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowRight' && hasNext) {
      handleNext();
    } else if (e.key === 'ArrowLeft' && hasPrevious) {
      handlePrevious();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center p-4 animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 text-white hover:text-amber-500 transition-colors bg-black/50 p-2 rounded-full"
      >
        <X className="w-8 h-8" />
      </button>

      <div className="w-full max-w-7xl my-auto" onClick={(e) => e.stopPropagation()}>
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-4">
          <iframe
            ref={iframeRef}
            src={`https://player.vimeo.com/video/${currentVideo.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="bg-gray-900 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">{currentVideo.title}</h3>
              <p className="text-gray-400">Vidéo {currentIndex + 1} sur {videos.length}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handlePrevious}
                disabled={!hasPrevious}
                className="p-3 bg-gray-800 hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition-colors"
              >
                <SkipBack className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                disabled={!hasNext}
                className="p-3 bg-gray-800 hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition-colors"
              >
                <SkipForward className="w-6 h-6" />
              </button>
            </div>
          </div>

          {videos.length > 1 && (
            <div className="border-t border-gray-800 pt-4">
              <h4 className="text-sm font-semibold text-gray-400 mb-3">PLAYLIST</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-h-40 overflow-y-auto">
                {videos.map((video, index) => (
                  <button
                    key={index}
                    onClick={() => onVideoChange(index)}
                    className={`relative aspect-video rounded-lg overflow-hidden group ${
                      index === currentIndex ? 'ring-2 ring-amber-500' : ''
                    }`}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                      {index === currentIndex ? (
                        <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                          <Play className="w-4 h-4 text-black ml-0.5" fill="currentColor" />
                        </div>
                      ) : (
                        <Play className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent">
                      <p className="text-xs text-white truncate">{video.title}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
