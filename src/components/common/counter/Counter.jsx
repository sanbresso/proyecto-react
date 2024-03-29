import { useState } from "react";

export const Counter = () => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("No es posible agregar 0 cantidad");
    }
  };

  return (
    <div>
      <h1>Acá va el contador</h1>
      <button onClick={restar}>restar</button>
      <h2>{contador}</h2>
      <button onClick={() => setContador(contador + 1)}>sumar</button>
    </div>
  );
};

export default Counter;
