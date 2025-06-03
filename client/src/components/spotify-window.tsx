import { useState, useEffect } from 'react';
import { DesktopWindow } from './desktop-window';

interface SpotifyWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Track {
  id: string;
  name: string;
  artists: Array<{ name: string }>;
  album: {
    name: string;
    images: Array<{ url: string }>;
  };
  preview_url: string | null;
  external_urls: {
    spotify: string;
  };
}

export function SpotifyWindow({ isOpen, onClose }: SpotifyWindowProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    // Auto-start when window opens
    if (isOpen && !isAuthorized) {
      // For now, show the embedded player since we need user authorization for liked songs
      setIsAuthorized(true);
    }
  }, [isOpen]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const authorizeSpotify = () => {
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID || 'your_client_id';
    const redirectUri = encodeURIComponent(window.location.origin + '/callback');
    const scopes = encodeURIComponent('user-library-read user-read-playback-state');
    
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=code`;
    window.open(authUrl, '_blank', 'width=500,height=600');
  };

  if (!isOpen) return null;

  return (
    <DesktopWindow
      title="🎵 Spotify - Your Music"
      isOpen={isOpen}
      onClose={onClose}
      initialPosition={{ x: 100, y: 100 }}
      width={400}
      height={300}
    >
      <div className="p-4">
        <div className="mb-4">
          <div className="text-sm font-bold mb-2 font-serif" style={{ color: '#8B4513' }}>
            Now Playing:
          </div>
          <div className="text-xs text-gray-600">
            {isPlaying ? 'Playing your Spotify music' : 'Ready to play'}
          </div>
        </div>
        
        <div className="bg-black rounded border-2 border-gray-400 h-48 mb-3">
          <iframe 
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd?utm_source=generator&theme=0" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            allowTransparency={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Player"
            className="rounded"
          />
        </div>
        
        <div className="flex justify-center gap-3 mb-3">
          <button 
            className="retro-button text-xs px-3 py-1"
            onClick={togglePlayPause}
          >
            {isPlaying ? '⏸️ Pause' : '▶️ Play'}
          </button>
          <button 
            className="retro-button text-xs px-3 py-1"
            onClick={() => window.open('https://open.spotify.com', '_blank')}
          >
            Open Spotify
          </button>
        </div>
        
        <div className="text-xs text-center text-gray-600 font-serif">
          Playing curated music collection
        </div>
      </div>
    </DesktopWindow>
  );
}