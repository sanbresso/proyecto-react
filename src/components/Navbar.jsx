// Exportacion por defecto:se puede exportar una sola cosa en todo el archivo

// const Navbar = ()=>{
//     return <h1>Hola</h1>
// }

// export default Navbar

// Exportacion nombrada: para exportar varias cosas
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <div className="container">
      <h1>Navbar</h1>
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
    </div>
  );
};

// Dentro de return todo lo que quiera hacer de js, lo encierro entre llaves {}
