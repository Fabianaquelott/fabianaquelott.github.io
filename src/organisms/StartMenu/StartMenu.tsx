import React from 'react';
import { User, FolderOpen, Mail, Settings, Power } from 'lucide-react';
import Button from '../../atoms/Button/Button';
import styles from './StartMenu.module.css';

interface StartMenuProps {
  isOpen: boolean;
  onItemClick: (item: string) => void;
}

export default function StartMenu({ isOpen, onItemClick }: StartMenuProps) {
  if (!isOpen) return null;

  const menuItems = [
    { id: 'about', icon: <User size={16} />, label: 'About Me' },
    { id: 'projects', icon: <FolderOpen size={16} />, label: 'Projects' },
    { id: 'contact', icon: <Mail size={16} />, label: 'Contact' },
    { id: 'skills', icon: <Settings size={16} />, label: 'Skills' },
  ];

  return (
    <div className={styles.menu}>
      <div className={styles.sidebar}>
        Fabiana <span className={styles.sidebarTitle}>96</span>
      </div>
      <div className={styles.items}>
        {menuItems.map((item) => (
          <Button key={item.id} variant="menu" onClick={() => onItemClick(item.id)}>
            {item.icon}
            <span>{item.label}</span>
          </Button>
        ))}
        <div className={styles.divider}></div>
        <Button variant="menu">
          <Power size={16} />
          <span>Shut Down...</span>
        </Button>
      </div>
    </div>
  );
}
