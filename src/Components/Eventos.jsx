import { Evento } from "./Evento";



const EVENTOS = [
  {
    title: "Misa",
    direction: "Dirección: C. 6 Sur 2, 74365 Veracruz, Pue.",
    enlace: "",
    horario: "12:00pm",
  },
  {
    title: "Festejo",
    direction: "Dirección: C. 6 Sur 2, 74365 Veracruz, Pue.",
    enlace: "",
    horario: "2:00 pm",
  },
];

export const Eventos = () => {
  return <div className="Eventos">
    {
        EVENTOS.map((element, index )=> <Evento key={index} {...element}/>)
    }
  </div>;
};
