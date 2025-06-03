import { DesktopWindow } from './desktop-window';

interface SpotifyWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SpotifyWindow({ isOpen, onClose }: SpotifyWindowProps) {
  if (!isOpen) return null;

  return (
    <DesktopWindow
      title="🎵 Spotify Player"
      isOpen={isOpen}
      onClose={onClose}
      initialPosition={{ x: 100, y: 100 }}
      width={400}
      height={500}
    >
      <div className="p-4 bg-gradient-to-b from-orange-100 to-orange-50 h-full">
        <div className="mb-3">
          <div className="text-sm font-bold font-serif mb-1" style={{ color: '#8B4513' }}>
            Now Playing: Your Playlist
          </div>
          <div className="text-xs text-gray-600 font-serif">
            Press play in the player below to start listening
          </div>
        </div>
        
        <div className="bg-white rounded-xl border-2 border-gray-400 p-2 shadow-lg" style={{ height: '380px' }}>
          <iframe
            style={{ borderRadius: '12px', width: '100%', height: '100%', border: 'none' }}
            src="https://open.spotify.com/embed/playlist/505yqRro56pe4jNE9Scrgj?utm_source=generator"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Playlist"
          />
        </div>
        
        <div className="mt-3 text-center">
          <button 
            className="retro-button text-xs px-3 py-1"
            onClick={() => window.open('https://open.spotify.com/playlist/505yqRro56pe4jNE9Scrgj', '_blank')}
          >
            Open in Spotify App
          </button>
        </div>
      </div>
    </DesktopWindow>
  );
}