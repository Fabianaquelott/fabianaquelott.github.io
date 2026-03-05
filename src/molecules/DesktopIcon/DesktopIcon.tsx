import React, { useState } from 'react';
import styles from './DesktopIcon.module.css';

interface DesktopIconProps {
  icon: React.ReactNode;
  label: string;
  onDoubleClick: () => void;
}

export default function DesktopIcon({ icon, label, onDoubleClick }: DesktopIconProps) {
  const [clickCount, setClickCount] = useState(0);
  const [clickTimer, setClickTimer] = useState<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    if (clickTimer) {
      clearTimeout(clickTimer);
      setClickTimer(null);
      setClickCount(0);
      onDoubleClick();
    } else {
      setClickCount(1);
      const timer = setTimeout(() => {
        setClickCount(0);
        setClickTimer(null);
      }, 300);
      setClickTimer(timer);
    }
  };

  return (
    <div className={styles.icon} onClick={handleClick}>
      <div className={styles.iconImage}>{icon}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}
