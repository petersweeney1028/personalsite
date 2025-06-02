import { useState, useEffect } from 'react';

export function FloatingTimeWidget() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeStr = time.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });
  
  const dateStr = time.toLocaleDateString('en-US', { 
    weekday: 'short', 
    month: 'short',
    day: 'numeric'
  }).toUpperCase();

  return (
    <div className="fixed top-4 right-4 z-50 bg-black border-2 border-cyan-400 p-3 rounded-lg animate-float">
      <div className="font-pixel text-xs text-cyan-400">
        <div>{timeStr}</div>
        <div className="text-pink-400">{dateStr}</div>
      </div>
    </div>
  );
}
