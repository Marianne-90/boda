import circulo from "../img/circulo.png";
import linea from "../img/linea.png"
export const MaxYMarianne = () => {
  return (
    <div className="maxymarianne">
      <div className="content">
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
  );
};
