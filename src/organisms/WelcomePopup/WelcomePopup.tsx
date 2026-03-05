import { Info } from 'lucide-react';
import styles from './WelcomePopup.module.css';

interface WelcomePopupProps {
  onClose: () => void;
}

export default function WelcomePopup({ onClose }: WelcomePopupProps) {
  const handleDontShowAgain = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      localStorage.setItem('hideWelcomePopup', 'true');
    } else {
      localStorage.removeItem('hideWelcomePopup');
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.titleBar}>
          <span>Bem-vindo!</span>
        </div>
        <div className={styles.content}>
          <div className={styles.message}>
            <div className={styles.icon}>
              <Info size={32} color="#000080" />
            </div>
            <div className={styles.text}>
              <p>
                <strong>Bem-vindo ao meu portfólio estilo Windows 98!</strong>
              </p>
              <p style={{ marginTop: '12px' }}>
                Para abrir as janelas, <strong>clique duas vezes</strong> nos ícones da área de trabalho,
                assim como no Windows clássico.
              </p>
              <p style={{ marginTop: '8px' }}>
                Você também pode arrastar as janelas pela barra de título e usar os botões
                para minimizar, maximizar ou fechar.
              </p>
            </div>
          </div>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              id="dontShowAgain"
              onChange={handleDontShowAgain}
            />
            <label htmlFor="dontShowAgain">Não mostrar esta mensagem novamente</label>
          </div>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={onClose}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
