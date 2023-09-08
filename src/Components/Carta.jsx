import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

export const Carta = () => {
  const [state, setState] = useState(false);

  const onEnterViewport = () => {
    setState(true);
  };

  return (
    <ScrollTrigger onEnter={onEnterViewport}>
      <div className="carta">
        <h1 className={` ${state && "opacity"}`}>
          El comienzo de la aventura más grande de nuestras vidas
        </h1>
        <p className={` ${state && "opacity"}`}>
          Hoy, con el corazón lleno de emoción y gratitud, les invitamos a ser
          testigos de un momento que marcará el comienzo de la aventura más
          grande de nuestras vidas: nuestro matrimonio. Esta aventura es más que
          un compromiso; es un viaje que emprendemos juntos, en el que cada día
          prometemos amarnos, apoyarnos y crecer juntos. Nuestro amor ha crecido
          y florecido gracias a cada uno de ustedes. En este día especial, no
          solo celebramos nuestro amor, sino también la familia y los amigos que
          han estado a nuestro lado en este hermoso camino. Esperamos que se
          unan a nosotros en esta celebración de amor y compromiso mientras
          unimos nuestras vidas en el sagrado vínculo del matrimonio. La
          aventura comienza, y no podríamos estar más emocionados de compartirla
          con todos ustedes. Esperamos que se unan a nosotros en este viaje de
          amor, risas, alegrías y desafíos.
        </p>
      </div>
    </ScrollTrigger>
  );
};
