import { useEffect, useState } from 'react';
import styles from './Spaceship.module.css';

export default function Spaceship() {
  const [position, setPosition] = useState({ x: -100, y: 50 });
  const [rotation, setRotation] = useState(0);
  const [velocity, setVelocity] = useState({ x: 2, y: 1 });

  useEffect(() => {
    const animate = () => {
      setPosition((prev) => {
        let newX = prev.x + velocity.x;
        let newY = prev.y + velocity.y;

        if (newX > window.innerWidth + 100) {
          newX = -100;
          newY = Math.random() * (window.innerHeight - 100);
        }
        if (newX < -100) {
          newX = window.innerWidth + 100;
        }
        if (newY > window.innerHeight) {
          newY = 0;
        }
        if (newY < 0) {
          newY = window.innerHeight;
        }

        return { x: newX, y: newY };
      });

      setRotation((prev) => {
        const angle = Math.atan2(velocity.y, velocity.x) * (180 / Math.PI);
        return angle;
      });
    };

    const intervalId = setInterval(animate, 16);
    return () => clearInterval(intervalId);
  }, [velocity]);

  useEffect(() => {
    const changeDirection = () => {
      setVelocity({
        x: (Math.random() - 0.5) * 4 + 2,
        y: (Math.random() - 0.5) * 3,
      });
    };

    const intervalId = setInterval(changeDirection, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={styles.spaceship}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 30 L10 15 L15 30 L10 45 Z"
          fill="white"
          stroke="cyan"
          strokeWidth="2"
        />
        <path
          d="M15 30 L5 28 L5 32 Z"
          fill="orange"
          opacity="0.8"
        />
        <circle cx="20" cy="25" r="2" fill="cyan" opacity="0.6" />
        <circle cx="20" cy="35" r="2" fill="cyan" opacity="0.6" />
      </svg>
    </div>
  );
}
