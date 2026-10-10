// PASO 3: Dashboard es el componente PADRE que recibe children.
// PASO 4: Usa CSS Modules (scope aislado).
import styles from '../styles/Dashboard.module.css';

/**
 * Dashboard - Contenedor que organiza las tarjetas de métricas.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Las MetricCards a renderizar
 */
function Dashboard({ children }) {
  return (
    <section className={styles.dashboard}>
      <h2 className={styles.titulo}>Métricas Principales</h2>
      <div className={styles.grid}>{children}</div>
    </section>
  );
}

export default Dashboard;