import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);
  const [loadingText, setLoadingText] = useState('INITIALIZING...');

  useEffect(() => {
    // Load Tenor script for GIF
    const script = document.createElement('script');
    script.src = 'https://tenor.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    const messages = [
      'INITIALIZING...',
      'LOADING ASSETS...',
      'CALIBRATING MONITORS...',
      'CONNECTING TO MAINFRAME...',
      'WARMING UP PROCESSORS...',
      'ALMOST READY...'
    ];

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5;
        
        // Update loading text based on progress
        const messageIndex = Math.floor((newProgress / 100) * messages.length);
        if (messageIndex < messages.length) {
          setLoadingText(messages[messageIndex]);
        }

        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setShowWelcome(true);
            setTimeout(() => {
              onComplete();
            }, 3000); // Show welcome for 3 seconds
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 150);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  if (showWelcome) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: '#403D39' }}>
        <div className="text-center">
          <div className="relative">
            <div 
              style={{ 
                width: '400px', 
                height: '302px',
                margin: '0 auto',
                border: '3px solid #C1DDB9',
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: '#062726',
                backgroundImage: 'url(https://media.tenor.com/1b2PGgSN-UQAAAAC/80s-commercials-80s-mtv.gif)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Fallback content if GIF doesn't load */}
              <div 
                className="w-full h-full flex items-center justify-center"
                style={{ 
                  background: 'linear-gradient(45deg, #FFC684, #F2B5D4)',
                  color: '#403D39'
                }}
              >
                <div className="text-center font-pixel">
                  <div className="text-xl mb-2">🌙</div>
                  <div className="text-sm">RETRO VIBES</div>
                </div>
              </div>
            </div>
            <div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ 
                background: 'linear-gradient(45deg, rgba(255, 198, 132, 0.8), rgba(242, 181, 212, 0.8))',
                borderRadius: '8px',
                border: '3px solid #C1DDB9'
              }}
            >
              <h1 
                className="font-pixel text-2xl font-bold text-center px-4 py-2 rounded"
                style={{ 
                  color: '#403D39',
                  textShadow: '2px 2px 4px rgba(255, 255, 255, 0.8)',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #403D39'
                }}
              >
                WELCOME TO MY CRIB
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center font-pixel"
      style={{ backgroundColor: '#062726' }}
    >
      <div className="text-center">
        <div className="mb-8">
          <h1 
            className="text-4xl font-bold mb-4"
            style={{ color: '#F2B5D4' }}
          >
            PETER'S DESKTOP
          </h1>
          <div 
            className="text-sm mb-2"
            style={{ color: '#C1DDB9' }}
          >
            {loadingText}
          </div>
        </div>

        {/* Retro Progress Bar */}
        <div className="w-80 mx-auto">
          <div 
            className="border-2 p-1 mb-4"
            style={{ 
              borderColor: '#C1DDB9',
              backgroundColor: '#403D39'
            }}
          >
            <div className="relative h-6">
              <div 
                className="h-full transition-all duration-200 ease-out"
                style={{ 
                  width: `${progress}%`,
                  background: 'linear-gradient(45deg, #FFC684, #F2B5D4)',
                  imageRendering: 'pixelated'
                }}
              />
              {/* Pixelated effect overlay */}
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 2px,
                    rgba(255, 255, 255, 0.1) 2px,
                    rgba(255, 255, 255, 0.1) 4px
                  ),
                  repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 2px,
                    rgba(255, 255, 255, 0.1) 2px,
                    rgba(255, 255, 255, 0.1) 4px
                  )`
                }}
              />
            </div>
          </div>
          <div 
            className="text-xs"
            style={{ color: '#F2B5D4' }}
          >
            {Math.floor(progress)}% COMPLETE
          </div>
        </div>

        {/* Retro scan lines effect */}
        <div 
          className="fixed inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(193, 221, 185, 0.1) 2px,
              rgba(193, 221, 185, 0.1) 4px
            )`
          }}
        />
      </div>
    </div>
  );
}