import { useEffect } from 'react';

export function Sparkles() {
  useEffect(() => {
    const createRandomSparkle = () => {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = Math.random() * 100 + '%';
      sparkle.style.top = Math.random() * 100 + '%';
      sparkle.style.animationDelay = Math.random() * 2 + 's';
      document.body.appendChild(sparkle);
      
      setTimeout(() => {
        if (sparkle.parentNode) {
          sparkle.parentNode.removeChild(sparkle);
        }
      }, 4000);
    };
    
    // Create initial sparkles
    const initialSparkles = [
      { top: '10%', left: '15%', delay: '0s' },
      { top: '20%', left: '85%', delay: '0.5s' },
      { top: '60%', left: '10%', delay: '1s' },
      { top: '80%', left: '90%', delay: '1.5s' }
    ];
    
    initialSparkles.forEach(({ top, left, delay }) => {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.top = top;
      sparkle.style.left = left;
      sparkle.style.animationDelay = delay;
      document.body.appendChild(sparkle);
    });
    
    // Create sparkles periodically
    const interval = setInterval(createRandomSparkle, 3000);
    
    return () => {
      clearInterval(interval);
      // Clean up sparkles
      const sparkles = document.querySelectorAll('.sparkle');
      sparkles.forEach(sparkle => {
        if (sparkle.parentNode) {
          sparkle.parentNode.removeChild(sparkle);
        }
      });
    };
  }, []);

  return null;
}
