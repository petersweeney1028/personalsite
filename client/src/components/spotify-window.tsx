import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { DesktopWindow } from './desktop-window';

interface SpotifyWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Track {
  track: {
    id: string;
    name: string;
    artists: Array<{ name: string }>;
    album: {
      name: string;
      images: Array<{ url: string; height: number; width: number }>;
    };
    duration_ms: number;
    external_urls: {
      spotify: string;
    };
    preview_url: string | null;
  };
}

interface PlaylistData {
  name: string;
  description: string;
  images: Array<{ url: string; height: number; width: number }>;
  tracks: {
    items: Track[];
    total: number;
  };
  external_urls: {
    spotify: string;
  };
}

export function SpotifyWindow({ isOpen, onClose }: SpotifyWindowProps) {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  const { data: playlist, isLoading, error } = useQuery<PlaylistData>({
    queryKey: ['/api/spotify/playlist', '505yqRro56pe4jNE9Scrgj'],
    enabled: isOpen,
  });

  const playPreview = (previewUrl: string, trackId: string) => {
    if (audioElement) {
      audioElement.pause();
    }

    if (currentlyPlaying === trackId) {
      setCurrentlyPlaying(null);
      setAudioElement(null);
      return;
    }

    const audio = new Audio(previewUrl);
    audio.volume = 0.5;
    audio.play();
    setCurrentlyPlaying(trackId);
    setAudioElement(audio);

    audio.onended = () => {
      setCurrentlyPlaying(null);
      setAudioElement(null);
    };
  };

  const formatDuration = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    return () => {
      if (audioElement) {
        audioElement.pause();
      }
    };
  }, [audioElement]);

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
      <div 
        className="p-4 h-full overflow-hidden flex flex-col"
        style={{ backgroundColor: '#403D39' }}
      >
        {isLoading && (
          <div className="flex items-center justify-center h-full">
            <div style={{ color: '#F2B5D4' }}>Loading playlist...</div>
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center h-full text-center p-4">
            <div className="text-4xl mb-4">🎵</div>
            <div className="mb-2" style={{ color: '#F2B5D4' }}>
              Playlist Unavailable
            </div>
            <div className="text-sm mb-4" style={{ color: '#C1DDB9' }}>
              Unable to load playlist data. The playlist may be private or there might be an API issue.
            </div>
            <button 
              className="px-4 py-2 rounded text-sm"
              style={{ 
                background: 'linear-gradient(45deg, #FFC684, #F2B5D4)',
                color: '#403D39',
                border: '2px solid #C1DDB9'
              }}
              onClick={() => window.open('https://open.spotify.com/playlist/505yqRro56pe4jNE9Scrgj', '_blank')}
            >
              Open Playlist in Spotify
            </button>
          </div>
        )}

        {playlist && (
          <>
            {/* Playlist Header */}
            <div className="flex items-center mb-4 pb-4" style={{ borderBottom: '2px solid #C1DDB9' }}>
              {playlist.images?.[0] && (
                <img 
                  src={playlist.images[0].url} 
                  alt={playlist.name}
                  className="w-16 h-16 rounded mr-3"
                  style={{ border: '2px solid #C1DDB9' }}
                />
              )}
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1" style={{ color: '#F2B5D4' }}>
                  {playlist.name}
                </h3>
                <p className="text-sm" style={{ color: '#C1DDB9' }}>
                  {playlist.tracks.total} tracks
                </p>
              </div>
            </div>

            {/* Track List */}
            <div className="flex-1 overflow-y-auto">
              <div className="space-y-2">
                {playlist.tracks.items.slice(0, 10).map((item, index) => (
                  <div 
                    key={item.track.id}
                    className="flex items-center p-2 rounded cursor-pointer hover:opacity-80 transition-opacity"
                    style={{ 
                      backgroundColor: currentlyPlaying === item.track.id ? 'rgba(193, 221, 185, 0.2)' : 'rgba(193, 221, 185, 0.1)',
                      border: '1px solid #C1DDB9'
                    }}
                    onClick={() => {
                      if (item.track.preview_url) {
                        playPreview(item.track.preview_url, item.track.id);
                      } else {
                        window.open(item.track.external_urls.spotify, '_blank');
                      }
                    }}
                  >
                    <div className="w-8 text-center mr-3">
                      {currentlyPlaying === item.track.id ? (
                        <span style={{ color: '#F2B5D4' }}>⏸</span>
                      ) : item.track.preview_url ? (
                        <span style={{ color: '#C1DDB9' }}>▶</span>
                      ) : (
                        <span className="text-xs" style={{ color: '#C1DDB9' }}>{index + 1}</span>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate" style={{ color: '#F2B5D4' }}>
                        {item.track.name}
                      </div>
                      <div className="text-xs truncate" style={{ color: '#C1DDB9' }}>
                        {item.track.artists.map(artist => artist.name).join(', ')}
                      </div>
                    </div>
                    
                    <div className="text-xs ml-2" style={{ color: '#C1DDB9' }}>
                      {formatDuration(item.track.duration_ms)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4 pt-4 text-center" style={{ borderTop: '2px solid #C1DDB9' }}>
              <button 
                className="px-4 py-2 rounded text-sm"
                style={{ 
                  background: 'linear-gradient(45deg, #FFC684, #F2B5D4)',
                  color: '#403D39',
                  border: '2px solid #C1DDB9'
                }}
                onClick={() => window.open(playlist.external_urls.spotify, '_blank')}
              >
                Open Full Playlist in Spotify
              </button>
              <div className="mt-2 text-xs" style={{ color: '#C1DDB9' }}>
                Click tracks with ▶ for 30-second previews
              </div>
            </div>
          </>
        )}
      </div>
    </DesktopWindow>
  );
}