import Footer from "./Footer.jsx"
function App() {

  //desde que abre el componente hasta el return, es js
  //luego del return si quiero usar js, tengo que usar llaves {}
  // dentro del return, es jsx

let nombre = "Sofía"


  return <div>
    <h1>Este es el App</h1>
    <h2>Hola {nombre}</h2>
    <Footer />
    </div>
}

export default App;
