import React from 'react';
import { Minus, Square, X } from 'lucide-react';
import Button from '../../atoms/Button/Button';
import styles from './WindowTitleBar.module.css';

interface WindowTitleBarProps {
  title: string;
  icon?: React.ReactNode;
  onMouseDown: (e: React.MouseEvent) => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
}

export default function WindowTitleBar({
  title,
  icon,
  onMouseDown,
  onMinimize,
  onMaximize,
  onClose,
}: WindowTitleBarProps) {
  return (
    <div className={styles.titleBar} onMouseDown={onMouseDown}>
      <div className={styles.titleContent}>
        {icon && <span className={styles.titleIcon}>{icon}</span>}
        {title}
      </div>
      <div className={styles.buttonGroup}>
        <Button variant="window" onClick={(e) => { e.stopPropagation(); onMinimize(); }}>
          <Minus size={10} />
        </Button>
        <Button variant="window" onClick={(e) => { e.stopPropagation(); onMaximize(); }}>
          <Square size={8} />
        </Button>
        <Button variant="window" onClick={(e) => { e.stopPropagation(); onClose(); }}>
          <X size={10} />
        </Button>
      </div>
    </div>
  );
}
