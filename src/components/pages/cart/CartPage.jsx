import Header from "components/Header";
import Cart from "./Cart";
import Navigation from "components/Navigation";
import headerStyles from "styles/shopHeader.module.css";

function CartPage() {
  return (
    <>
      <div className={headerStyles["sticky-element"]}>
        <header className={headerStyles["shop-header"]}>
          <Header title={"Cart"} />
        </header>
        <Navigation />
      </div>
      <Cart />
    </>
  );
}

export default CartPage;
