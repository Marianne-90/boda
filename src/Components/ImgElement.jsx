import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

export const ImgElement = ({ name, img, index }) => {
  const [hovered, setHovered] = useState(false);
  const [state, setState] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

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
    <ScrollTrigger onEnter={onEnterViewport} >
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`circle ${handleAnimation(index)}`}>
        <img src={img} alt={name} />
        <div className={`hover ${hovered ? "opacity" : ""}`}>
          <p className="texto">{name}</p>
        </div>
      </div>
    </ScrollTrigger>
  );
};
