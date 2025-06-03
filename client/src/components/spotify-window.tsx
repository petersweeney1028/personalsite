import { useState, useEffect, useRef } from 'react';
import { DesktopWindow } from './desktop-window';

interface SpotifyWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Track {
  title: string;
  artist: string;
  duration: string;
  url: string;
}

export function SpotifyWindow({ isOpen, onClose }: SpotifyWindowProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Sample tracks with free music
  const tracks: Track[] = [
    {
      title: "Chill Vibes",
      artist: "Lo-Fi Beats",
      duration: "3:24",
      url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
    },
    {
      title: "Retro Groove",
      artist: "Synthwave",
      duration: "4:12",
      url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
    },
    {
      title: "Sunset Dreams",
      artist: "Ambient",
      duration: "5:03",
      url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
    }
  ];

  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    if (isOpen && audioRef.current) {
      // Auto-play when window opens
      audioRef.current.play().catch(() => {
        // Auto-play might be blocked, that's okay
        setIsPlaying(false);
      });
    }
  }, [isOpen]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', nextTrack);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', nextTrack);
    };
  }, [currentTrackIndex]);

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    setIsPlaying(true);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <DesktopWindow
      title="🎵 Music Player"
      isOpen={isOpen}
      onClose={onClose}
      initialPosition={{ x: 100, y: 100 }}
      width={380}
      height={280}
    >
      <div className="p-4 bg-gradient-to-b from-orange-100 to-orange-50">
        <audio
          ref={audioRef}
          src={currentTrack.url}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        
        <div className="mb-4 text-center">
          <div className="text-lg font-bold font-serif mb-1" style={{ color: '#8B4513' }}>
            {currentTrack.title}
          </div>
          <div className="text-sm text-gray-600 font-serif">
            {currentTrack.artist}
          </div>
        </div>

        <div className="mb-4">
          <div className="w-full bg-gray-300 rounded-full h-2 mb-2">
            <div 
              className="bg-orange-500 h-2 rounded-full transition-all duration-200"
              style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500 font-mono">
            <span>{formatTime(currentTime)}</span>
            <span>{currentTrack.duration}</span>
          </div>
        </div>
        
        <div className="flex justify-center items-center gap-4 mb-4">
          <button 
            onClick={prevTrack}
            className="retro-button text-sm px-3 py-2"
          >
            ⏮️
          </button>
          <button 
            onClick={togglePlayPause}
            className="retro-button text-lg px-4 py-2"
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          <button 
            onClick={nextTrack}
            className="retro-button text-sm px-3 py-2"
          >
            ⏭️
          </button>
        </div>

        <div className="text-center">
          <div className="text-xs text-gray-600 font-serif mb-2">
            Track {currentTrackIndex + 1} of {tracks.length}
          </div>
          <button 
            className="retro-button text-xs px-3 py-1"
            onClick={() => window.open('https://open.spotify.com', '_blank')}
          >
            Open Spotify
          </button>
        </div>
      </div>
    </DesktopWindow>
  );
}