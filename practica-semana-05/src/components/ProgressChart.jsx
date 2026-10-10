// PASO 3 + PASO 4: Componente con props internas y CSS Modules.
// Se dibuja un gráfico de barras puro con CSS (sin librerías).
import styles from '../styles/ProgressChart.module.css';

const asistencia = [
  { dia: 'Lun', valor: 120 },
  { dia: 'Mar', valor: 180 },
  { dia: 'Mié', valor: 150 },
  { dia: 'Jue', valor: 210 },
  { dia: 'Vie', valor: 240 },
  { dia: 'Sáb', valor: 300 },
  { dia: 'Dom', valor: 90  },
];

function ProgressChart() {
  // PASO 4: valor máximo para normalizar las alturas (estilo dinámico).
  const max = Math.max(...asistencia.map((a) => a.valor));

  return (
    <section className={styles.panel}>
      <h2 className={styles.titulo}>Asistencia Semanal</h2>
      <p className={styles.subtitulo}>Total de visitas por día</p>

      <div className={styles.chart}>
        {asistencia.map((a) => (
          <div key={a.dia} className={styles.barWrapper}>
            <div
              className={styles.bar}
              style={{ height: `${(a.valor / max) * 100}%` }}
              title={`${a.valor} visitas`}
            />
            <span className={styles.dia}>{a.dia}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProgressChart;