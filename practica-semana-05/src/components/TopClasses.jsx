// PASO 3: Recibe un array por props (o usa data interna para simplificar).
import styles from '../styles/TopClasses.module.css';

const clases = [
  { id: 1, nombre: 'Spinning',       inscritos: 42, cupo: 50 },
  { id: 2, nombre: 'Yoga',           inscritos: 28, cupo: 30 },
  { id: 3, nombre: 'CrossFit',       inscritos: 35, cupo: 40 },
  { id: 4, nombre: 'Zumba',          inscritos: 22, cupo: 35 },
  { id: 5, nombre: 'Funcional',      inscritos: 18, cupo: 25 },
];

function TopClasses() {
  return (
    <section className={styles.panel}>
      <h2 className={styles.titulo}>Top Clases</h2>
      <p className={styles.subtitulo}>Ocupación actual</p>

      <ul className={styles.lista}>
        {clases.map((c) => {
          const porcentaje = Math.round((c.inscritos / c.cupo) * 100);
          // PASO 4: valor dinámico → color según ocupación.
          const color = porcentaje >= 90 ? '#ef4444'
                       : porcentaje >= 70 ? '#f59e0b'
                       : '#10b981';
          return (
            <li key={c.id} className={styles.item}>
              <div className={styles.fila}>
                <span className={styles.nombre}>{c.nombre}</span>
                <span className={styles.cifra}>{c.inscritos}/{c.cupo}</span>
              </div>
              <div className={styles.progressBg}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${porcentaje}%`, backgroundColor: color }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default TopClasses;