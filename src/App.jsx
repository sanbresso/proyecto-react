// Importacion por defecto: no es necesario que lleve el mismo nombre la importacion, pero se utiliza el mismo por buena práctica
// import Navbar from "./components/Navbar.jsx";

// Importacion nombrada (para importar varias coas exportadas de un mismo archivo, se usa poco): Debe utilizarse exactamente el mismo nombre de lo que quiero importar y entre llaves {}, ya que puede haber varias cosas importadas separadas por coma ','
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import { Navbar } from "./components/Navbar.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

// ctrl + barra espaciadora me permite ver el autoayuda de nuevo
