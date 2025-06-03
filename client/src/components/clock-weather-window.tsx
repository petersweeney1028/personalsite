import { useState, useEffect } from 'react';

interface ClockWeatherWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ClockWeatherWindow({ isOpen, onClose }: ClockWeatherWindowProps) {
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
    <div className="desktop-window" style={{ 
      position: 'absolute', 
      top: 20, 
      right: 20, 
      width: 280, 
      height: 200,
      zIndex: 100 
    }}>
      <div className="window-titlebar">
        <span>🕒 Clock & Weather</span>
        <button 
          className="w-6 h-6 bg-red-600 text-white border border-red-800 text-xs"
          onClick={onClose}
        >
          ×
        </button>
      </div>
      <div className="window-content text-center">
        <div className="mb-4">
          <div className="text-2xl font-bold text-brown-800" style={{ color: '#8B4513' }}>
            {timeStr}
          </div>
          <div className="text-sm text-gray-600">
            {dateStr}
          </div>
        </div>
        
        <div className="border-t-2 border-brown-400 pt-3" style={{ borderColor: '#CD853F' }}>
          <div className="text-lg font-semibold" style={{ color: '#D2691E' }}>
            {weather.temperature}
          </div>
          <div className="text-sm text-gray-700">
            {weather.condition}
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {weather.location}
          </div>
        </div>
      </div>
    </div>
  );
}