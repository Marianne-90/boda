import { Evento } from "./Evento";

const EVENTOS = [
  {
    title: "Misa",
    direction: "Parroquia de la Santísima Trinidad Tepango - Dirección: C. 6 Sur 2, 74365 calle Veracruz, Atlixo Pue.",
    enlace: "https://www.google.com/maps/dir/19.1057847,-98.3417014/iglesia+de+las+santisima+trinidad+de+tepango+atlixco/@18.9833603,-98.5186449,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x85cfb306e87402a7:0x39439634df87bad4!2m2!1d-98.4435444!2d18.8606938?entry=ttu",
    horario: "12:00 pm",
  },
  {
    title: "Festejo",
    direction: "Restaurante Palmira Atlixco - Dirección:  Puebla-Matamoros, Ricardo Flores Magón, 74240 Atlixco, Pue.",
    enlace: "https://www.google.com/maps/dir/19.1057847,-98.3417014/palmira+atlixco/@19.0036109,-98.5059709,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x85cfb38abdcd3f4b:0x7b131639d4027b40!2m2!1d-98.4185485!2d18.901225?entry=ttu",
    horario: "2:00 pm",
  },
];

export const Eventos = () => {
  return (
    <div className="eventos">
      {EVENTOS.map((element, index) => (
        <Evento key={index} {...element} index={index} />
      ))}
      <p className="nota">
        (Argentina restar 3 horas el evento comienza a las 9 am)
      </p>
      <a
        className="transmision"
        href="https://discord.gg/sh3kcZaV"
        target="blank"
      >
        Ver Transmisión
      </a>
    </div>
  );
};
