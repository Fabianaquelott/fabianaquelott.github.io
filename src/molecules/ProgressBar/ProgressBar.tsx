import React, { useState, useEffect } from 'react';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  name: string;
  level: number;
  category: string;
  delay?: number;
}

export default function ProgressBar({ name, level, category, delay = 0 }: ProgressBarProps) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={styles.container} style={{ animationDelay: `${delay}ms` }}>
      <div className={styles.header}>
        <span className={styles.name}>{name}</span>
        <span className={styles.category}>{category}</span>
      </div>
      <div className={styles.barContainer}>
        <div className={styles.barFill} style={{ width: animated ? `${level}%` : '0%' }}>
          {animated && <span className={styles.percentage}>{level}%</span>}
        </div>
      </div>
    </div>
  );
}
