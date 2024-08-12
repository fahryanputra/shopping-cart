import Header from "components/Header";
import { displayCart } from "utilities/shoppingCart";

function CartPage() {
  return (
    <>
      <Header />
      <h1>Cart</h1>
      {displayCart().map((item) => item.id)}
    </>
  );
}

export default CartPage;
