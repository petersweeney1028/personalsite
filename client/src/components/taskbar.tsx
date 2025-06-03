import { useState, useEffect } from 'react';

export function Taskbar() {
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

  return (
    <div className="taskbar">
      <button className="start-button">
        Start
      </button>
      <div className="taskbar-time">
        {timeStr}
      </div>
    </div>
  );
}