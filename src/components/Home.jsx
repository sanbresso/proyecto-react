import "../styles/Home.css";
// import logo from "../images/logo-nailsbybreik.png";
const Home = () => {
  return (
    <>
      <h1 style={{ color: "peru", fontSize: "1rem" }}>Home</h1>
      <h2>Subtítulo</h2>
      <img
        src="https://res.cloudinary.com/dwj4jcs0g/image/upload/v1711664542/logo-nailsbybreik_lxjr8h.png"
        alt=""
      />{" "}
      {/* <img src={logo} alt="" /> */}
    </>
  );
};

export default Home;

// dentro del return, van doble llaves {{}} (porque es un objeto), en el atributo style={{}} para poder utilizar js dentro de jsx.
// todas las propiedades css que esten compuestas por dos palabras separadas por guion, van a ser utilizadas con camelCase
//los paréntesis dentro del return, están para poder hacer un salto de línea y que retorne algo; si no quiero poner paréntesis, tengo que escribir todo en la misma línea del return.
// el return, retorna un único nodo, si quiero tener varios compnenetes dentro del return puedo envolverlos todos en un <div> (nodo padre) que los envuelva, pero esto me crea otro nodo aparte, para evitar esto, utilizo <> 'fragments' --> una etiqueta vacía.
