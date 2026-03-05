import { useState, useEffect } from 'react';
import { User, FolderOpen, Mail, Wrench } from 'lucide-react';
import Window from '../../organisms/Window/Window';
import Taskbar from '../../organisms/Taskbar/Taskbar';
import StartMenu from '../../organisms/StartMenu/StartMenu';
import DesktopIcon from '../../molecules/DesktopIcon/DesktopIcon';
import WelcomePopup from '../../organisms/WelcomePopup/WelcomePopup';
import AboutContent from '../../templates/AboutContent/AboutContent';
import ProjectsContent from '../../templates/ProjectsContent/ProjectsContent';
import SkillsContent from '../../templates/SkillsContent/SkillsContent';
import ContactContent from '../../templates/ContactContent/ContactContent';
import styles from './Desktop.module.css';

interface WindowState {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  isOpen: boolean;
  zIndex: number;
}

export default function Desktop() {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [maxZIndex, setMaxZIndex] = useState(10);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const hideWelcome = localStorage.getItem('hideWelcomePopup');
    if (!hideWelcome) {
      setShowWelcome(true);
    }
  }, []);

  const windowConfigs = {
    about: {
      id: 'about',
      title: 'About Me',
      icon: <User size={16} />,
      content: <AboutContent />,
    },
    projects: {
      id: 'projects',
      title: 'My Projects',
      icon: <FolderOpen size={16} />,
      content: <ProjectsContent />,
    },
    skills: {
      id: 'skills',
      title: 'Skills',
      icon: <Wrench size={16} />,
      content: <SkillsContent />,
    },
    contact: {
      id: 'contact',
      title: 'Contact',
      icon: <Mail size={16} />,
      content: <ContactContent />,
    },
  };

  const openWindow = (windowId: string) => {
    const existingWindow = windows.find((w) => w.id === windowId);
    if (existingWindow) {
      setActiveWindow(windowId);
      const newZIndex = maxZIndex + 1;
      setMaxZIndex(newZIndex);
      setWindows(
        windows.map((w) =>
          w.id === windowId ? { ...w, isOpen: true, zIndex: newZIndex } : w
        )
      );
    } else {
      const config = windowConfigs[windowId as keyof typeof windowConfigs];
      const newZIndex = maxZIndex + 1;
      setMaxZIndex(newZIndex);
      setWindows([
        ...windows,
        {
          ...config,
          isOpen: true,
          zIndex: newZIndex,
        },
      ]);
      setActiveWindow(windowId);
    }
    setIsStartMenuOpen(false);
  };

  const closeWindow = (windowId: string) => {
    setWindows(windows.filter((w) => w.id !== windowId));
    if (activeWindow === windowId) {
      setActiveWindow(null);
    }
  };

  const focusWindow = (windowId: string) => {
    const newZIndex = maxZIndex + 1;
    setMaxZIndex(newZIndex);
    setWindows(
      windows.map((w) => (w.id === windowId ? { ...w, zIndex: newZIndex } : w))
    );
    setActiveWindow(windowId);
  };

  return (
    <div className={styles.desktop}>
      {showWelcome && <WelcomePopup onClose={() => setShowWelcome(false)} />}

      <div className={styles.iconGrid}>
        <DesktopIcon icon={<User size={48} />} label="About Me" onDoubleClick={() => openWindow('about')} />
        <DesktopIcon
          icon={<FolderOpen size={48} />}
          label="Projects"
          onDoubleClick={() => openWindow('projects')}
        />
        <DesktopIcon icon={<Wrench size={48} />} label="Skills" onDoubleClick={() => openWindow('skills')} />
        <DesktopIcon icon={<Mail size={48} />} label="Contact" onDoubleClick={() => openWindow('contact')} />
      </div>

      {windows
        .filter((w) => w.isOpen)
        .map((window) => (
          <Window
            key={window.id}
            title={window.title}
            icon={window.icon}
            onClose={() => closeWindow(window.id)}
            zIndex={window.zIndex}
            onFocus={() => focusWindow(window.id)}
            defaultPosition={{
              x: 100 + windows.indexOf(window) * 30,
              y: 100 + windows.indexOf(window) * 30,
            }}
          >
            {window.content}
          </Window>
        ))}

      <StartMenu isOpen={isStartMenuOpen} onItemClick={(item) => openWindow(item)} />

      <Taskbar
        onStartClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
        windows={windows.filter((w) => w.isOpen)}
        activeWindow={activeWindow}
        onWindowClick={(id) => focusWindow(id)}
      />
    </div>
  );
}
