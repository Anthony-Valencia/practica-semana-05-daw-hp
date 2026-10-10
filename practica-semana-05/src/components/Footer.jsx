// PASO 2: Componente Footer.
import styles from '../styles/Footer.module.css';

/**
 * @param {Object} props
 * @param {number} props.anio
 */
function Footer({ anio }) {
  return (
    <footer className={styles.footer}>
      <p>© {anio} FitTrack — Práctica Semana 05 (IS093A)</p>
    </footer>
  );
}

export default Footer;