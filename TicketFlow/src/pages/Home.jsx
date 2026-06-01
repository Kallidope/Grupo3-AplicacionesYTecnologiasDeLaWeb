import HomeCard from "../components/HomeCard";
import StatCard from "../components/StatCard";
import "../styles/Home.scss";

function Home() {
  return (
    <main className="home-page">
      <section className="home-layout" aria-label="Pantalla de inicio TicketFlow">

        <section className="login-panel" aria-labelledby="titulo-home">
          <header className="home-header">
            <h1 id="titulo-home">
              Ticket<span>Flow</span>
            </h1>

            <p>Ingresa</p>
          </header>

          <nav className="access-list" aria-label="Accesos principales">
            <HomeCard
              icono="👤"
              titulo="USUARIO"
              descripcion="Reporta fallas y solicitudes de mantenimiento."
            />

            <HomeCard
              icono="🛡️"
              titulo="ADMIN"
              descripcion="Gestiona tickets y supervisa el mantenimiento."
            />
          </nav>

          <footer className="help-link">
            <button type="button" aria-label="Ir a ayuda">
              ⓘ Ayuda
            </button>
          </footer>
        </section>

        <section className="summary-panel" aria-labelledby="titulo-resumen">
          <div className="summary-content">
            <header className="summary-header">
              <div className="summary-icon" aria-hidden="true">
                ▥
              </div>

              <div>
                <h2 id="titulo-resumen">Resumen general</h2>
                <p>Los datos se actualizan semanalmente.</p>
              </div>
            </header>

            <section className="stats-list" aria-label="Resumen semanal de tickets">
              <StatCard
                titulo="Total de tickets"
                numero="10"
                icono="▱"
                tipo="total"
              />

              <StatCard
                titulo="Pendientes"
                numero="6"
                icono="◷"
                tipo="pendiente"
              />

              <StatCard
                titulo="Críticos"
                numero="2"
                icono="⚠"
                tipo="critico"
              />

              <StatCard
                titulo="Resueltos"
                numero="3"
                icono="✓"
                tipo="resuelto"
              />
            </section>
          </div>
        </section>

      </section>
    </main>
  );
}

export default Home;