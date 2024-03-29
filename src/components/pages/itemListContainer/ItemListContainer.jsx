import ProductCard from "../../common/productCard/ProductCard";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  return (
    <div>
      <h1>Bienvenidos a Nails By BREIK</h1>

      <div className="navbarCard">
        <ProductCard
          titulo={"titulo 1"}
          descripcion={"descripcion 1"}
          precio={200}
        />
        <ProductCard
          titulo={"titulo 2"}
          descripcion={"descripcion 2"}
          precio={300}
        />
        <ProductCard
          titulo={"titulo 3"}
          descripcion={"descripcion 2"}
          precio={400}
        />
      </div>
    </div>
  );
};

export default ItemListContainer;
