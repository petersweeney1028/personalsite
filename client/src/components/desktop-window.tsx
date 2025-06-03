import { useState, useRef, useEffect } from 'react';

interface DesktopWindowProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  initialPosition?: { x: number; y: number };
  width?: number;
  height?: number;
  zIndex?: number;
  onFocus?: () => void;
}

export function DesktopWindow({ 
  title, 
  children, 
  isOpen, 
  onClose, 
  initialPosition = { x: 100, y: 100 },
  width = 400,
  height = 300,
  zIndex = 100,
  onFocus
}: DesktopWindowProps) {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState({ width, height });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState('');
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (onFocus) onFocus();
    if (windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setIsDragging(true);
    }
  };

  const handleWindowClick = () => {
    if (onFocus) onFocus();
  };

  const handleResizeMouseDown = (e: React.MouseEvent, direction: string) => {
    e.stopPropagation();
    setIsResizing(true);
    setResizeDirection(direction);
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: size.width,
      height: size.height
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        });
      }
      
      if (isResizing) {
        const deltaX = e.clientX - resizeStart.x;
        const deltaY = e.clientY - resizeStart.y;
        
        let newWidth = size.width;
        let newHeight = size.height;
        let newX = position.x;
        let newY = position.y;

        if (resizeDirection.includes('right')) {
          newWidth = Math.max(300, resizeStart.width + deltaX);
        }
        if (resizeDirection.includes('left')) {
          newWidth = Math.max(300, resizeStart.width - deltaX);
          newX = position.x + (size.width - newWidth);
        }
        if (resizeDirection.includes('bottom')) {
          newHeight = Math.max(200, resizeStart.height + deltaY);
        }
        if (resizeDirection.includes('top')) {
          newHeight = Math.max(200, resizeStart.height - deltaY);
          newY = position.y + (size.height - newHeight);
        }

        setSize({ width: newWidth, height: newHeight });
        if (resizeDirection.includes('left') || resizeDirection.includes('top')) {
          setPosition({ x: newX, y: newY });
        }
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
      setResizeDirection('');
    };

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, dragOffset, resizeStart, resizeDirection, size, position]);

  if (!isOpen) return null;

  return (
    <div
      ref={windowRef}
      className="desktop-window"
      style={{
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        zIndex: zIndex
      }}
      onClick={handleWindowClick}
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
      
      {/* Resize handles */}
      <div 
        className="absolute top-0 left-0 w-2 h-2 cursor-nw-resize"
        onMouseDown={(e) => handleResizeMouseDown(e, 'top-left')}
      />
      <div 
        className="absolute top-0 right-0 w-2 h-2 cursor-ne-resize"
        onMouseDown={(e) => handleResizeMouseDown(e, 'top-right')}
      />
      <div 
        className="absolute bottom-0 left-0 w-2 h-2 cursor-sw-resize"
        onMouseDown={(e) => handleResizeMouseDown(e, 'bottom-left')}
      />
      <div 
        className="absolute bottom-0 right-0 w-2 h-2 cursor-se-resize"
        onMouseDown={(e) => handleResizeMouseDown(e, 'bottom-right')}
      />
      <div 
        className="absolute top-0 left-2 right-2 h-1 cursor-n-resize"
        onMouseDown={(e) => handleResizeMouseDown(e, 'top')}
      />
      <div 
        className="absolute bottom-0 left-2 right-2 h-1 cursor-s-resize"
        onMouseDown={(e) => handleResizeMouseDown(e, 'bottom')}
      />
      <div 
        className="absolute left-0 top-2 bottom-2 w-1 cursor-w-resize"
        onMouseDown={(e) => handleResizeMouseDown(e, 'left')}
      />
      <div 
        className="absolute right-0 top-2 bottom-2 w-1 cursor-e-resize"
        onMouseDown={(e) => handleResizeMouseDown(e, 'right')}
      />
    </div>
  );
}