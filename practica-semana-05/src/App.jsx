// PASO 2: App.jsx es el ORQUESTADOR. No tiene lógica de negocio.
// PASO 3: Pasa props estructurados y children anidados.

import Header from './components/Header.jsx';
import Dashboard from './components/Dashboard.jsx';
import MetricCard from './components/MetricCard.jsx';
import ProgressChart from './components/ProgressChart.jsx';
import TopClasses from './components/TopClasses.jsx';
import ActivityFeed from './components/ActivityFeed.jsx';
import MembersTable from './components/MembersTable.jsx';
import Footer from './components/Footer.jsx';

// PASO 3: Datos estructurados (simulan respuesta de una API).
const metricas = [
  { id: 1, titulo: 'Miembros Activos', valor: '1,248',  tendencia: 'up',   cambio: '+12%'  },
  { id: 2, titulo: 'Ingresos del Mes', valor: '$18,420', tendencia: 'up',   cambio: '+8.5%' },
  { id: 3, titulo: 'Clases Impartidas', valor: '342',   tendencia: 'down', cambio: '-3.2%' },
  { id: 4, titulo: 'Retención',        valor: '87%',    tendencia: 'up',   cambio: '+2.1%' },
];

function App() {
  return (
    <>
      <Header titulo="FitTrack Dashboard" subtitulo="Panel de control del gimnasio" />

      {/* PASO 4 (fix footer): main con flex:1 empuja el footer al fondo. */}
      <main style={{ flex: 1, padding: '2rem', maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
        {/* PASO 3: Dashboard recibe MetricCards como children. */}
        <Dashboard>
          {metricas.map((m) => (
            <MetricCard
              key={m.id}
              titulo={m.titulo}
              valor={m.valor}
              tendencia={m.tendencia}
              cambio={m.cambio}
            >
              <p>Actualizado hace 5 minutos</p>
            </MetricCard>
          ))}
        </Dashboard>

        {/* Segunda fila: gráfico + top clases */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <ProgressChart />
          <TopClasses />
        </div>

        {/* Tercera fila: feed + tabla */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.5rem' }}>
          <ActivityFeed />
          <MembersTable />
        </div>
      </main>

      <Footer anio={new Date().getFullYear()} />
    </>
  );
}

export default App;