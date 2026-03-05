import React from 'react';
import styles from './AboutContent.module.css';

export default function AboutContent() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.avatar}>FP</div>
        <div>
          <h2 className={styles.title}>Freelance Developer</h2>
          <p className={styles.text}>
            Olá! Sou um desenvolvedor freelancer especializado em criar soluções web modernas e eficientes.
            Com experiência em desenvolvimento full-stack, transformo ideias em realidade digital.
          </p>
          <p className={styles.text}>
            Apaixonado por tecnologia e design, busco sempre entregar projetos que superem as expectativas
            dos clientes, combinando funcionalidade com estética.
          </p>
          <div className={styles.infoBox}>
            <p className={styles.infoText}>
              <strong>Status:</strong> Disponível para projetos<br />
              <strong>Localização:</strong> Brasil<br />
              <strong>Experiência:</strong> 3+ anos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
