export const Evento = ({ title, direction, enlace, horario }) => {
  return (
    <div className="eventoContainer">
      <p className="title">{title}</p>
      <p className="direction">{direction}</p>
      <div className="buttons">
        <span>{horario}</span>
        <span>
          <a href={enlace} target="blank">mapa </a>
        </span>
      </div>
    </div>
  );
};
