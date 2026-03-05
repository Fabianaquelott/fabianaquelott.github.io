import React from 'react';
import { ExternalLink } from 'lucide-react';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  status: string;
  delay?: number;
}

export default function ProjectCard({ title, description, tech, status, delay = 0 }: ProjectCardProps) {
  const statusClass = status === 'Concluído' ? styles.statusComplete : styles.statusInProgress;

  return (
    <div className={styles.card} style={{ animationDelay: `${delay}ms` }}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <ExternalLink size={14} className={styles.icon} />
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.techList}>
        {tech.map((item, i) => (
          <span key={i} className={styles.techTag}>
            {item}
          </span>
        ))}
      </div>
      <div className={statusClass}>{status}</div>
    </div>
  );
}
