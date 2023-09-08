import { MaxYMarianne } from "./Components/MaxYMarianne";
import { GallImg } from "./Components/GallImg";
import { ApartaElDia } from "./Components/ApartaElDia";
import { Eventos } from "./Components/Eventos";
import { Cuenta } from "./Components/Cuenta";
import { Carta } from "./Components/Carta";

function App() {
  return (
    <div className="mainContainer">
      <MaxYMarianne />
      <GallImg />
      <ApartaElDia />
      <Eventos />
      <Cuenta />
      <Carta/>
    </div>
  );
}

export default App;
