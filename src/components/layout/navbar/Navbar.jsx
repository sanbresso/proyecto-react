import CartWidget from "../../common/cartWidget/CartWidget";

const Navbar = () => {
  return (
    <div>
      <img
        src="https://res.cloudinary.com/dwj4jcs0g/image/upload/c_crop,w_600,h_338,ar_16:9/v1711664542/logo-nailsbybreik_lxjr8h.png"
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
