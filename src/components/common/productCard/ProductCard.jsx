const ProductCard = (props) => {
  const { titulo, descripcion, precio } = props;
  return (
    <div>
      <h3>{titulo}</h3>
      <h4>{descripcion}</h4>
      <h4>{precio}</h4>
    </div>
  );
};

export default ProductCard;

// las props siempre llegan como objetos
// props --> clave={valor}
// clave: no tiene xqé tener el mismo nombre a lo que hacer referencia
// valor: es lo importante de las props, y debe contener a lo que hace referencia
