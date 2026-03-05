import React from 'react';
import WindowTitleBar from '../../molecules/WindowTitleBar/WindowTitleBar';
import { useDraggable } from '../../hooks/useDraggable';
import { useWindowState } from '../../hooks/useWindowState';
import styles from './Window.module.css';

interface WindowProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  defaultPosition?: { x: number; y: number };
  onClose?: () => void;
  zIndex?: number;
  onFocus?: () => void;
  isMinimized?: boolean;
  onMinimize?: () => void;
}

export default function Window({
  title,
  icon,
  children,
  defaultPosition = { x: 100, y: 100 },
  onClose,
  zIndex = 10,
  onFocus,
  isMinimized = false,
  onMinimize,
}: WindowProps) {
  const { isMaximized, handleMaximize } = useWindowState();
  const { position, handleMouseDown } = useDraggable({ defaultPosition, isMaximized });

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
        onMouseDown={(e) => handleMouseDown(e, onFocus)}
        onMinimize={onMinimize || (() => {})}
        onMaximize={() => handleMaximize(onFocus)}
        onClose={onClose || (() => {})}
      />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
