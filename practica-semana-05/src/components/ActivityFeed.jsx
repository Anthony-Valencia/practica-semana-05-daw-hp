// PASO 3: Lista con keys y children dinámicos.
import styles from '../styles/ActivityFeed.module.css';

const actividades = [
  { id: 1, icono: '🏋️', texto: 'Nuevo miembro registrado',   tiempo: 'hace 3 min' },
  { id: 2, icono: '💳', texto: 'Pago recibido — Plan Premium', tiempo: 'hace 12 min' },
  { id: 3, icono: '📅', texto: 'Clase de Spinning completa',  tiempo: 'hace 25 min' },
  { id: 4, icono: '⚠️', texto: 'Mantenimiento de máquina',    tiempo: 'hace 1 h'   },
  { id: 5, icono: '🎉', texto: 'Meta mensual alcanzada',      tiempo: 'hace 2 h'   },
];

function ActivityFeed() {
  return (
    <section className={styles.panel}>
      <h2 className={styles.titulo}>Actividad Reciente</h2>
      <ul className={styles.lista}>
        {actividades.map((a) => (
          <li key={a.id} className={styles.item}>
            <span className={styles.icono}>{a.icono}</span>
            <div className={styles.texto}>
              <p className={styles.accion}>{a.texto}</p>
              <span className={styles.tiempo}>{a.tiempo}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ActivityFeed;