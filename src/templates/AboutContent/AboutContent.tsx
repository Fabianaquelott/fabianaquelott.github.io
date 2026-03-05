import styles from './AboutContent.module.css';

export default function AboutContent() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.avatar}>
          <img src="https://avatars.githubusercontent.com/u/56900077?v=40" alt="Fabiana" />
        </div>
        <div>
          <h2 className={styles.title}>Full Stack Developer</h2>
          <p className={styles.text}>
            Hello, there! <br/> Sou desenvolvedora full stack com experiência na criação de aplicações web e mobile escaláveis, modernas e responsivas, com foco em performance, arquitetura e qualidade de código.
          </p>
          <p className={styles.text}>
            Atuo no desenvolvimento de produtos digitais desde o frontend até a infraestrutura, utilizando tecnologias como React, Next.js, TypeScript, Java (Spring Boot e Micronaut) e AWS. Tenho experiência em ambientes de produção, arquitetura de APIs, serverless, monitoramento e otimização de aplicações.
            <br/>
            Ao longo da minha carreira, participei da construção de plataformas utilizadas em energia, mineração e fintech, contribuindo tanto com desenvolvimento quanto com decisões técnicas de arquitetura e escalabilidade.
            <br/>
            Gosto de transformar ideias em produtos digitais eficientes, priorizando boa experiência do usuário, código sustentável e soluções que realmente resolvem problemas de negócio.
          </p>
          <div className={styles.infoBox}>
            <p className={styles.infoText}>
              <strong>Status:</strong> Disponível para projetos freelancer<br />
              <strong>Localização:</strong> Brasil<br />
              <strong>Experiência:</strong> 5+ anos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
