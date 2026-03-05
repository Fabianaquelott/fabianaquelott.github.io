import { useState, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

interface UseDraggableProps {
  defaultPosition: Position;
  isMaximized: boolean;
}

export function useDraggable({ defaultPosition, isMaximized }: UseDraggableProps) {
  const getCenteredPosition = () => {
    const isMobile = window.innerWidth < 640;
    if (isMobile) {
      return { x: 4, y: 50 };
    }
    return defaultPosition;
  };

  const [position, setPosition] = useState<Position>(getCenteredPosition());
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 640;
      if (isMobile && !isMaximized) {
        setPosition({ x: 4, y: 50 });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMaximized]);

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && !isMaximized) {
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;

      const maxX = window.innerWidth - 100;
      const maxY = window.innerHeight - 100;

      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY)),
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.body.style.cursor = 'grabbing';
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.body.style.cursor = '';
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  const handleMouseDown = (e: React.MouseEvent, onFocus?: () => void) => {
    const target = e.target as HTMLElement;
    if (target.closest('button')) return;

    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    onFocus?.();
  };

  return {
    position,
    isDragging,
    handleMouseDown,
  };
}
