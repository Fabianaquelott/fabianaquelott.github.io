import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import Button from '../../atoms/Button/Button';
import { Input, Textarea } from '../../atoms/Input/Input';
import styles from './ContactContent.module.css';

export default function ContactContent() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Entre em Contato</h2>

      <div className={styles.grid}>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Informações de Contato</h3>
          <a href="mailto:seu-email@exemplo.com" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button variant="default" className={styles.linkButton}>
              <Mail size={16} />
              <span>seu-email@exemplo.com</span>
            </Button>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Button variant="default" className={styles.linkButton}>
              <Linkedin size={16} />
              <span>LinkedIn Profile</span>
            </Button>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Button variant="default" className={styles.linkButton}>
              <Github size={16} />
              <span>GitHub Profile</span>
            </Button>
          </a>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Envie uma Mensagem</h3>
          <form onSubmit={handleSubmit} className={styles.form}>
            <Input
              type="text"
              placeholder="Nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <Textarea
              placeholder="Mensagem"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
            <Button type="submit" variant="form">
              <Send size={16} />
              Enviar
            </Button>
          </form>
          {submitted && (
            <div className={styles.successMessage}>✓ Mensagem enviada com sucesso!</div>
          )}
        </div>
      </div>
    </div>
  );
}
