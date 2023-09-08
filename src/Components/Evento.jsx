export const Evento = ({ title, direction, enlace, horario }) => {
  return (
    <div className="eventoContainer">
      <p className="title">{title}</p>
      <p className="direction">{direction}</p>
      <div className="buttons">
        <div className="buttons">
          <span>{horario}</span>
          <a href={enlace}>
            <span>mapa</span>
          </a>
        </div>
      </div>
    </div>
  );
};
