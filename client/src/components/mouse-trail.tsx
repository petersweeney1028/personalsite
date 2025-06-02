import { useEffect } from 'react';

export function MouseTrail() {
  useEffect(() => {
    const trails: HTMLElement[] = [];
    const maxTrails = 20;
    
    const handleMouseMove = (e: MouseEvent) => {
      // Create new trail element
      const trail = document.createElement('div');
      trail.className = 'trail';
      trail.style.left = e.clientX + 'px';
      trail.style.top = e.clientY + 'px';
      document.body.appendChild(trail);
      
      trails.push(trail);
      
      // Remove old trails
      if (trails.length > maxTrails) {
        const oldTrail = trails.shift();
        if (oldTrail?.parentNode) {
          oldTrail.parentNode.removeChild(oldTrail);
        }
      }
      
      // Fade out trail
      setTimeout(() => {
        trail.style.opacity = '0';
        trail.style.transform = 'scale(2)';
      }, 50);
      
      setTimeout(() => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      }, 300);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      // Clean up any remaining trails
      trails.forEach(trail => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      });
    };
  }, []);

  return null;
}
