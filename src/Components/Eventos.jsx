import { Evento } from "./Evento";

const EVENTOS = [
  {
    title: "Misa",
    direction: "Dirección: C. 6 Sur 2, 74365 Veracruz, Pue.",
    enlace: "",
    horario: "12:00 pm",
  },
  {
    title: "Festejo",
    direction: "Dirección: C. 6 Sur 2, 74365 Veracruz, Pue.",
    enlace: "",
    horario: "2:00 pm",
  },
];

export const Eventos = () => {
  return (
    <div className="eventos">
      {EVENTOS.map((element, index) => (
        <Evento key={index} {...element} />
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
