import { useState, useRef, useEffect } from 'react';

interface DesktopWindowProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  initialPosition?: { x: number; y: number };
  width?: number;
  height?: number;
}

export function DesktopWindow({ 
  title, 
  children, 
  isOpen, 
  onClose, 
  initialPosition = { x: 100, y: 100 },
  width = 400,
  height = 300
}: DesktopWindowProps) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setIsDragging(true);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  if (!isOpen) return null;

  return (
    <div
      ref={windowRef}
      className="desktop-window"
      style={{
        left: position.x,
        top: position.y,
        width,
        height,
        zIndex: 100
      }}
    >
      <div className="window-titlebar" onMouseDown={handleMouseDown}>
        <span>{title}</span>
        <div className="flex gap-1">
          <button 
            className="w-4 h-4 bg-gray-300 border border-gray-600 text-xs leading-none"
            onClick={onClose}
          >
            ×
          </button>
        </div>
      </div>
      <div className="window-content">
        {children}
      </div>
    </div>
  );
}