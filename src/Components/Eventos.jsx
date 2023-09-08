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
  return <div className="eventos">
    {
        EVENTOS.map((element, index )=> <Evento key={index} {...element}/>)
    }
  </div>;
};
