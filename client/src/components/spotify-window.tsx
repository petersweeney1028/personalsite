import { useState } from 'react';
import { DesktopWindow } from './desktop-window';

interface SpotifyWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SpotifyWindow({ isOpen, onClose }: SpotifyWindowProps) {
  const [embedError, setEmbedError] = useState(false);
  
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
            Your Spotify Playlist
          </div>
          <div className="text-xs text-gray-600 font-serif">
            {embedError ? 'Playlist may be private - use the button below to open in Spotify' : 'Press play in the player below to start listening'}
          </div>
        </div>
        
        <div className="bg-white rounded-xl border-2 border-gray-400 p-2 shadow-lg" style={{ height: '380px' }}>
          {!embedError ? (
            <iframe
              style={{ borderRadius: '12px', width: '100%', height: '100%', border: 'none' }}
              src="https://open.spotify.com/embed/playlist/505yqRro56pe4jNE9Scrgj?utm_source=generator&theme=0"
              frameBorder="0"
              allowTransparency={true}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Playlist"
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center p-4">
              <div className="text-6xl mb-4">🎵</div>
              <div className="font-serif text-lg mb-2" style={{ color: '#8B4513' }}>
                Playlist Unavailable
              </div>
              <div className="text-sm text-gray-600 mb-4">
                This playlist may be private or require authentication. Click below to open it directly in Spotify.
              </div>
              <button 
                className="retro-button text-sm px-4 py-2"
                onClick={() => window.open('https://open.spotify.com/playlist/505yqRro56pe4jNE9Scrgj', '_blank')}
              >
                Open Playlist in Spotify
              </button>
            </div>
          )}
        </div>
        
        <div className="mt-3 text-center">
          <button 
            className="retro-button text-xs px-3 py-1"
            onClick={() => window.open('https://open.spotify.com/playlist/505yqRro56pe4jNE9Scrgj', '_blank')}
          >
            Open in Spotify App
          </button>
          <div className="mt-2 text-xs text-gray-500 font-serif">
            Note: If the embed shows an error, the playlist may need to be made public in your Spotify settings
          </div>
        </div>
      </div>
    </DesktopWindow>
  );
}