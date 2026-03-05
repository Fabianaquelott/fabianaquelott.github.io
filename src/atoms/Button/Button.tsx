import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'start' | 'taskbar' | 'taskbarActive' | 'window' | 'form' | 'menu';
  children: React.ReactNode;
}

export default function Button({ variant = 'default', children, className, ...props }: ButtonProps) {
  const getClassName = () => {
    switch (variant) {
      case 'start':
        return styles.startButton;
      case 'taskbar':
        return styles.taskbarButton;
      case 'taskbarActive':
        return styles.taskbarButtonActive;
      case 'window':
        return styles.windowButton;
      case 'form':
        return styles.formButton;
      case 'menu':
        return styles.menuButton;
      default:
        return styles.button;
    }
  };

  return (
    <button className={`${getClassName()} ${className || ''}`} {...props}>
      {children}
    </button>
  );
}
