import { useState, useEffect } from 'react';
import { DesktopWindow } from './desktop-window';

interface ClockWeatherWindowProps {
  isOpen: boolean;
  onClose: () => void;
  zIndex?: number;
  onFocus?: () => void;
}

export function ClockWeatherWindow({ isOpen, onClose, zIndex, onFocus }: ClockWeatherWindowProps) {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState({
    temperature: '--',
    condition: 'Loading...',
    location: 'Getting location...'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Get user's location and weather
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // In a real app, you'd call a weather API here
          // For now, using sample data
          setWeather({
            temperature: '72°F',
            condition: 'Partly Cloudy',
            location: 'Current Location'
          });
        },
        () => {
          setWeather({
            temperature: '72°F',
            condition: 'Pleasant',
            location: 'Location unavailable'
          });
        }
      );
    }

    return () => clearInterval(timer);
  }, []);

  if (!isOpen) return null;

  const timeStr = time.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    second: '2-digit',
    hour12: true 
  });
  
  const dateStr = time.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <DesktopWindow
      title="🕒 Clock & Weather"
      isOpen={isOpen}
      onClose={onClose}
      initialPosition={{ x: window.innerWidth - 300, y: 20 }}
      width={280}
      height={160}
      zIndex={zIndex}
      onFocus={onFocus}
    >
      <div className="text-center p-2">
        <div className="mb-2">
          <div className="text-xl font-bold" style={{ color: '#F2B5D4' }}>
            {timeStr}
          </div>
          <div className="text-xs leading-tight" style={{ color: '#F2B5D4' }}>
            {dateStr}
          </div>
        </div>
        
        <div className="border-t pt-2" style={{ borderColor: '#C1DDB9' }}>
          <div className="text-base font-semibold" style={{ color: '#F2B5D4' }}>
            {weather.temperature}
          </div>
          <div className="text-xs leading-tight" style={{ color: '#F2B5D4' }}>
            {weather.condition}
          </div>
          <div className="text-xs" style={{ color: '#F2B5D4' }}>
            {weather.location}
          </div>
        </div>
      </div>
    </DesktopWindow>
  );
}