import React from 'react';
import ProgressBar from '../../molecules/ProgressBar/ProgressBar';
import styles from './SkillsContent.module.css';

interface Skill {
  name: string;
  level: number;
  category: string;
}

export default function SkillsContent() {
  const skills: Skill[] = [
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
    { name: 'PostgreSQL', level: 75, category: 'Database' },
    { name: 'Git', level: 85, category: 'Tools' },
    { name: 'REST APIs', level: 88, category: 'Backend' },
    { name: 'Responsive Design', level: 92, category: 'Frontend' },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Habilidades Técnicas</h2>
      <div className={styles.skillsList}>
        {skills.map((skill, index) => (
          <ProgressBar key={index} {...skill} delay={index * 50} />
        ))}
      </div>
      <div className={styles.tipBox}>
        <p className={styles.tipText}>
          💡 <strong>Dica:</strong> Estou sempre aprendendo novas tecnologias e aprimorando minhas habilidades!
        </p>
      </div>
    </div>
  );
}
