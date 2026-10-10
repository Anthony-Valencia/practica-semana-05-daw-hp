// PASO 2: Componente Header. Recibe props simples.
import styles from '../styles/Header.module.css';

/**
 * @param {Object} props
 * @param {string} props.titulo
 * @param {string} props.subtitulo
 */
function Header({ titulo, subtitulo }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.titulo}>{titulo}</h1>
      <p className={styles.subtitulo}>{subtitulo}</p>
    </header>
  );
}

export default Header;