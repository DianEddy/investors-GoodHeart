import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Video as VideoIcon } from 'lucide-react';

interface VideoPlayerCardProps {
  id: string;
  defaultPoster: string;
  videoUrl?: string;
  alt: string;
  aspectClass?: string;
  roundedClass?: string;
  badgeText?: string;
}

export const VideoPlayerCard: React.FC<VideoPlayerCardProps> = ({
  id,
  defaultPoster,
  videoUrl,
  alt,
  aspectClass = 'aspect-4/3',
  roundedClass = 'rounded-[28px]',
  badgeText = 'Video Clip'
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    } else {
      setIsMuted(!isMuted);
    }
  };

  return (
    <div
      id={id}
      className={`relative w-full ${roundedClass} border-2 border-black overflow-hidden bg-black shadow-md group cursor-pointer`}
      onClick={togglePlay}
    >
      {videoUrl ? (
        <video
          ref={videoRef}
          src={videoUrl}
          poster={defaultPoster}
          playsInline
          loop
          muted={isMuted}
          className="w-full h-full object-cover object-center"
          onEnded={() => setIsPlaying(false)}
        />
      ) : (
        <img
          src={defaultPoster}
          alt={alt}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-102"
        />
      )}

      {/* Play / Pause Interactive Overlay */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors flex items-center justify-center">
        {!isPlaying && (
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg border border-black/10 transition-transform group-hover:scale-110">
            <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-black ml-0.5" />
          </div>
        )}
      </div>

      {/* Video Indicator Pill */}
      <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FA383E] animate-pulse"></span>
        <VideoIcon className="w-3 h-3" />
        <span>{badgeText}</span>
      </div>

      {/* Media Controls Bottom Bar */}
      <div className="absolute bottom-3 right-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-xs p-1 rounded-lg">
        <button
          onClick={toggleMute}
          className="p-1 rounded text-white hover:bg-white/20 transition"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};
