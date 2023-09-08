import circulo from "../img/circulo.png";
import linea from "../img/linea.png";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

export const MaxYMarianne = () => {
  const [state, setState] = useState(false);

  const onEnterViewport = () => {
    setState(true);
  };

  return (
    <ScrollTrigger onEnter={onEnterViewport}>
      <div className="maxymarianne">
        <div className={`content ${state && "opacity"}`}>
          <div className="text">
            <p className="boda">La boda de</p>
            <p className="name">Marianne</p>
            <img src={linea} alt="liena" />
            <p className="name">Maximiliano</p>
            <p className="date">16 de diciembre, 2023</p>
          </div>
          <div className="circulo">
            <img src={circulo} alt="circulo" />
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};
