import Header from "components/Header";
import Cart from "./Cart";
import Navigation from "components/Navigation";

function CartPage() {
  return (
    <>
      <Header title={"Cart"} />
      <Navigation />
      <Cart />
    </>
  );
}

export default CartPage;
