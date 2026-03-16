import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface VideoHeroBackgroundProps {
  videoUrl?: string;
  vimeoId?: string;
  posterImage?: string;
  children?: React.ReactNode;
}

export default function VideoHeroBackground({
  videoUrl,
  vimeoId = '1161231299',
  posterImage,
  children
}: VideoHeroBackgroundProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked, that's ok
      });
    }
  }, []);

  const togglePlay = () => {
    if (videoUrl && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else if (vimeoId && iframeRef.current) {
      const iframe = iframeRef.current;
      const message = isPlaying ? '{"method":"pause"}' : '{"method":"play"}';
      iframe.contentWindow?.postMessage(message, '*');
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoUrl && videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    } else if (vimeoId && iframeRef.current) {
      const iframe = iframeRef.current;
      const volume = isMuted ? 1 : 0;
      iframe.contentWindow?.postMessage(`{"method":"setVolume","value":${volume}}`, '*');
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {videoUrl ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            poster={posterImage}
            onLoadedData={() => setIsVideoLoaded(true)}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : vimeoId ? (
          <iframe
            ref={iframeRef}
            src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=${isMuted ? 1 : 0}`}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100vw',
              height: '56.25vw',
              minHeight: '100vh',
              minWidth: '177.77vh',
              transform: 'translate(-50%, -50%)',
            }}
            className="w-full h-full object-cover border-0"
            allow="autoplay; fullscreen"
            onLoad={() => setIsVideoLoaded(true)}
          ></iframe>
        ) : (
          <img
            src={posterImage || "https://i.vimeocdn.com/video/2116522126-c1af68ec6fd856b8cd6eed98aa5bb3515ca7d7dcb6a6dd2d083e9b8855387fc7-d_1280?region=us"}
            alt="Background"
            className="w-full h-full object-cover"
          />
        )}

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/50"></div>
        <div className="absolute inset-0 film-grain"></div>
      </div>

      {/* Video Controls */}
      {(videoUrl || vimeoId) && isVideoLoaded && (
        <div className="absolute bottom-24 left-6 z-20 flex gap-3">
          <button
            onClick={togglePlay}
            className="bg-black/50 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300 group"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white" />
            )}
          </button>

          <button
            onClick={toggleMute}
            className="bg-black/50 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300 group"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-white" />
            ) : (
              <Volume2 className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
