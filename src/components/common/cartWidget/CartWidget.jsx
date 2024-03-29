import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={0} color="secondary" showZero>
        <ShoppingCartIcon fontSize="large" />
      </Badge>
    </div>
  );
};

export default CartWidget;
