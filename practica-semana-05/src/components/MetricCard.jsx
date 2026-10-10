// PASO 3: MetricCard recibe datos por props Y contenido anidado por children.
// PASO 4: CSS Modules para estructura + estilos inline para valores dinámicos.
import styles from '../styles/MetricCard.module.css';

/**
 * @param {Object} props
 * @param {string} props.titulo
 * @param {string} props.valor
 * @param {'up' | 'down'} props.tendencia
 * @param {string} props.cambio
 * @param {React.ReactNode} props.children
 */
function MetricCard({ titulo, valor, tendencia, cambio, children }) {
  // PASO 4: Estilos inline solo para valores dinámicos (color según tendencia).
  const colorTendencia = tendencia === 'up' ? '#10b981' : '#ef4444';
  const flecha = tendencia === 'up' ? '▲' : '▼';

  return (
    <article className={styles.card}>
      <h3 className={styles.titulo}>{titulo}</h3>
      <p className={styles.valor}>{valor}</p>
      <p style={{ color: colorTendencia, fontWeight: 'bold', marginTop: '0.25rem' }}>
        {flecha} {cambio}
      </p>

      {/* children: contenido anidado desde App.jsx */}
      {children && <div className={styles.extra}>{children}</div>}
    </article>
  );
}

export default MetricCard;