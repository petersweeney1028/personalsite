import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('INITIALIZING...');

  useEffect(() => {
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
            onComplete();
          }, 800); // Brief pause before transitioning
          return 100;
        }
        return newProgress;
      });
    }, 150);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

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