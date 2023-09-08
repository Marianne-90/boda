import { useState } from "react";
import linea from "../img/linea.png"
import ScrollTrigger from "react-scroll-trigger";


export const ApartaElDia = () => {
const [state, setState] = useState(false);

const onEnterViewport = () => {
  setState(true)
};



  return (
    <ScrollTrigger onEnter={onEnterViewport}  >
    <div className="apartaeldia">
      <h2 className={` ${ state && "slide-right"}`}>Aparta el día</h2>
      <p className={` ${ state && "slide-left"}`}>
        Estamos ansiosos por compartir este día tan especial contigo y crear
        recuerdos que atesoraremos para siempre. Tu presencia hará que este día
        sea aún más significativo y especial para nosotros. ¡Esperamos verte
        allí para celebrar juntos el inicio de nuestra nueva vida como esposos!
      </p>
      <img src={linea} alt="liena" />
    </div>
    </ScrollTrigger>
  );
};
