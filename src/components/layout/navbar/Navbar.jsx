import CartWidget from "../../common/cartWidget/CartWidget";

const Navbar = () => {
  return (
    <div>
      <img
        src="https://res.cloudinary.com/dwj4jcs0g/image/upload/v1712504501/Black_White_Modern_Handwritten_Square_Studio_Logo_ak3wmo.png"
        alt=""
      />
      <ul>
        <li>
          <a href="">Quiero agendar mi turno</a>
        </li>
        <li>
          <a href="">Cuidado de cutículas</a>
        </li>
        <li>
          <a href="">Accesorios</a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
