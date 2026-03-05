import React, { useState, useEffect } from 'react';
import WindowTitleBar from '../../molecules/WindowTitleBar/WindowTitleBar';
import styles from './Window.module.css';

interface WindowProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  defaultPosition?: { x: number; y: number };
  onClose?: () => void;
  zIndex?: number;
  onFocus?: () => void;
}

export default function Window({
  title,
  icon,
  children,
  defaultPosition = { x: 100, y: 100 },
  onClose,
  zIndex = 10,
  onFocus,
}: WindowProps) {
  const getCenteredPosition = () => {
    const isMobile = window.innerWidth < 640;
    if (isMobile) {
      return {
        x: 4,
        y: 50,
      };
    }
    return defaultPosition;
  };

  const [position, setPosition] = useState(getCenteredPosition());
  const [isDragging, setIsDragging] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

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

  const handleMouseDown = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button')) return;

    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    onFocus?.();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && !isMaximized) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
    onFocus?.();
  };

  if (isMinimized) return null;

  const windowStyle = isMaximized
    ? { zIndex }
    : {
        left: position.x,
        top: position.y,
        zIndex,
      };

  return (
    <div
      className={isMaximized ? styles.windowMaximized : styles.window}
      style={windowStyle}
      onClick={onFocus}
    >
      <WindowTitleBar
        title={title}
        icon={icon}
        onMouseDown={handleMouseDown}
        onMinimize={() => setIsMinimized(true)}
        onMaximize={handleMaximize}
        onClose={onClose || (() => {})}
      />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
