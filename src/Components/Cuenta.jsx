import { useState, useEffect } from "react";

export const Cuenta = () => {
  const targetDate = new Date("2023-12-16 12:00:00").getTime(); // Define la fecha objetivo en milisegundos desde el 1 de enero de 1970.
  const currentDate = new Date().getTime(); // Obtiene la fecha actual en milisegundos.

  const timeRemaining = targetDate - currentDate;

  const calculateTime = () => {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setTime(calculateTime());
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [time]);

  return (
    <div className="cuenta">
      <h2>Faltan</h2>
      <div className="container">
        <div>
          <span>{time.days}</span>
          <span>Días</span>
        </div>
        <div>
          <span>{time.hours}</span> <span>Horas</span>
        </div>
        <div>
          <span>{time.minutes}</span> <span>Mins</span>
        </div>
        <div>
          <span>{time.seconds}</span> <span>Segs</span>
        </div>
      </div>
    </div>
  );
};
