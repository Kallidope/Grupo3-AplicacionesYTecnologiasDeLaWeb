function StatCard({ titulo, numero, icono, tipo }) {
  return (
    <article className={`stat-card ${tipo}`} aria-label={`${titulo}: ${numero}`}>
      <div className="stat-text">
        <h3>{titulo}</h3>
        <strong>{numero}</strong>
      </div>

      <div className="stat-icon" aria-hidden="true">
        {icono}
      </div>
    </article>
  );
}

export default StatCard;