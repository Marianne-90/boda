import foto2 from "../img/foto2.jpg";
import foto3 from "../img/foto3.jpg";

const IMG_LIST = [
  {
    name: "foto en el lago",
    img: foto2,
  },
  {
    name: "foto besito frente",
    img: foto3,
  },
];

export const GallImg = () => {
  return (
    <div className="gallimg">
      <div className="imgContainer">
        {IMG_LIST.map((element) => (
          <div key={element.name}>
            <img src={element.img} alt={element.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
