import React from 'react';
import ProjectCard from '../../molecules/ProjectCard/ProjectCard';
import styles from './ProjectsContent.module.css';

export default function ProjectsContent() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo.',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      status: 'Concluído',
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard interativo para visualização de dados e métricas em tempo real.',
      tech: ['Vue.js', 'Chart.js', 'Firebase'],
      status: 'Concluído',
    },
    {
      title: 'Mobile App',
      description: 'Aplicativo mobile para gestão de tarefas e produtividade.',
      tech: ['React Native', 'TypeScript', 'Supabase'],
      status: 'Em andamento',
    },
    {
      title: 'Landing Page',
      description: 'Landing page responsiva com animações e otimização SEO.',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      status: 'Concluído',
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Meus Projetos</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} delay={index * 100} />
        ))}
      </div>
    </div>
  );
}
