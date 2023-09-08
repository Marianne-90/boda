import { useState } from "react";

export const ImgElement = ({ name, img }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={img} alt={name} />
      <div className={`hover ${hovered? "opacity":""}`}>
        <p className="texto">{name}</p>
      </div>
    </div>
  );
};
