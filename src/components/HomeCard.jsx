function HomeCard({ icono, titulo, descripcion }) {
  return (
    <button
      type="button"
      className="home-card"
      aria-label={`Ingresar como ${titulo}`}
    >
      <div className="home-card-icon" aria-hidden="true">
        {icono}
      </div>

      <div className="home-card-text">
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
      </div>
    </button>
  );
}

export default HomeCard;