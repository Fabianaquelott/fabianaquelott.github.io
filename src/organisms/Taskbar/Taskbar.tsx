import React, { useState, useEffect } from 'react';
import Button from '../../atoms/Button/Button';
import styles from './Taskbar.module.css';

interface TaskbarProps {
  onStartClick: () => void;
  windows: Array<{ id: string; title: string; icon?: React.ReactNode }>;
  activeWindow: string | null;
  onWindowClick: (id: string) => void;
}

export default function Taskbar({ onStartClick, windows, activeWindow, onWindowClick }: TaskbarProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.taskbar}>
      <Button variant="start" onClick={onStartClick}>
        <div className={styles.startIcon}></div>
        <span>Start</span>
      </Button>

      <div className={styles.windowList}>
        {windows.map((window) => (
          <Button
            key={window.id}
            variant={activeWindow === window.id ? 'taskbarActive' : 'taskbar'}
            onClick={() => onWindowClick(window.id)}
          >
            {window.icon}
            {window.title}
          </Button>
        ))}
      </div>

      <div className={styles.clock}>
        <span className={styles.clockText}>
          {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
}
