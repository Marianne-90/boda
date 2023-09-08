import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

export const Evento = ({ title, direction, enlace, horario, index }) => {
  const [state, setState] = useState(false);

  const onEnterViewport = () => {
    setState(true);
  };

  const handleAnimation = (index) => {
    if (index % 2) {
      return state && "slide-top-text";
    }
    return state && "slide-bottom-text";
  };

  return (
    <ScrollTrigger onEnter={onEnterViewport}>
      <div className={`eventoContainer ${handleAnimation(index)}`}>
        <p className="title">{title}</p>
        <p className="direction">{direction}</p>
        <div className="buttons">
          <span>{horario}</span>
          <span>
            <a href={enlace} target="blank">
              mapa{" "}
            </a>
          </span>
        </div>
      </div>
    </ScrollTrigger>
  );
};
