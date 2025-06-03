import { useState, useEffect } from 'react';

interface SpotifyWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SpotifyWindow({ isOpen, onClose }: SpotifyWindowProps) {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Auto-start when window opens
    if (isOpen) {
      setIsPlaying(true);
    }
  }, [isOpen]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (!isOpen) return null;

  return (
    <div className="spotify-player">
      <div className="window-titlebar">
        <span>🎵 Spotify - Liked Songs</span>
        <div className="flex gap-2">
          <button 
            className="retro-button text-xs px-2 py-1"
            onClick={togglePlayPause}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          <button 
            className="w-6 h-6 bg-red-600 text-white border border-red-800 text-xs"
            onClick={onClose}
          >
            ×
          </button>
        </div>
      </div>
      <div className="window-content" style={{ padding: '12px' }}>
        <div className="mb-4">
          <div className="text-sm font-bold mb-2">Now Playing:</div>
          <div className="text-xs text-gray-600">
            {isPlaying ? 'Playing from your Liked Songs' : 'Paused'}
          </div>
        </div>
        <div className="bg-white border-2 inset border-gray-400 h-64">
          <iframe 
            src="https://open.spotify.com/embed/user/312jm37lavwanfdvn5rbam2olzym" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            allowTransparency={true}
            allow="encrypted-media"
            title="Spotify Player"
          />
        </div>
        <div className="mt-3 text-xs text-center text-gray-600">
          Double-click the Spotify icon to {isPlaying ? 'pause' : 'resume'} playback
        </div>
      </div>
    </div>
  );
}