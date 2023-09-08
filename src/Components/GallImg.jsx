
import foto2 from "../img/foto2.jpg";
import foto3 from "../img/foto3.jpg";
import foto5 from "../img/foto5.jpg";
import foto6 from "../img/foto6.jpg";
import foto7 from "../img/foto7.jpg";
import { ImgElement } from "./ImgElement";


const IMG_LIST = [
  {
    name: "La vida contigo es una Poesía",
    img: foto2,
  },
  {
    name: "Nuestro primer para Siempre",
    img: foto3,
  },
  {
    name: "Concierto de Nightwish",
    img: foto5,
  },
  {
    name: "Todos los días son una Aventura",
    img: foto6,
  },
  {
    name: "Soñando Despiertos",
    img: foto7,
  },
];

export const GallImg = () => {
  return (
    <div className="gallimg">
      <div className="imgContainer"> 
        {IMG_LIST.map((element, index) => (
          <ImgElement key={element.name} {...element} index = {index}/>
        ))}
      </div>
    </div>
  );
};
