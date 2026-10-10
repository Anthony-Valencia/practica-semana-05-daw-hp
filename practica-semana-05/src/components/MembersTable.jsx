// PASO 3 + PASO 4: Tabla estilizada con CSS Modules.
import styles from '../styles/MembersTable.module.css';

const miembros = [
  { id: 1, nombre: 'Ana Torres',     plan: 'Premium',  estado: 'Activo',    ingreso: '2026-01-12' },
  { id: 2, nombre: 'Luis Ramírez',   plan: 'Básico',   estado: 'Activo',    ingreso: '2026-02-03' },
  { id: 3, nombre: 'Carla Mendoza',  plan: 'Premium',  estado: 'Inactivo',  ingreso: '2025-11-20' },
  { id: 4, nombre: 'Diego Salazar',  plan: 'VIP',      estado: 'Activo',    ingreso: '2025-09-08' },
  { id: 5, nombre: 'María Fernández',plan: 'Básico',   estado: 'Activo',    ingreso: '2026-03-15' },
];

function MembersTable() {
  return (
    <section className={styles.panel}>
      <div className={styles.encabezado}>
        <div>
          <h2 className={styles.titulo}>Miembros Recientes</h2>
          <p className={styles.subtitulo}>Últimos registros del gimnasio</p>
        </div>
        <button className={styles.boton}>Ver todos</button>
      </div>

      <div className={styles.tablaWrapper}>
        <table className={styles.tabla}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Plan</th>
              <th>Estado</th>
              <th>Ingreso</th>
            </tr>
          </thead>
          <tbody>
            {miembros.map((m) => (
              <tr key={m.id}>
                <td className={styles.nombre}>{m.nombre}</td>
                <td>{m.plan}</td>
                <td>
                  {/* PASO 4: estilos inline dinámicos según estado */}
                  <span
                    className={styles.badge}
                    style={{
                      backgroundColor: m.estado === 'Activo' ? '#d1fae5' : '#fee2e2',
                      color: m.estado === 'Activo' ? '#065f46' : '#991b1b',
                    }}
                  >
                    {m.estado}
                  </span>
                </td>
                <td className={styles.fecha}>{m.ingreso}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default MembersTable;