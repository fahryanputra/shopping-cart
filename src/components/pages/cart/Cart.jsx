import { useState } from "react";
import Card from "./Card";
import Button from "components/Button";
import { totalPriceFromStorage } from "utilities/storageUtilities";
import styles from "styles/cart/cart.module.css";

function Cart() {
  const [totalBill, setTotalBill] = useState(totalPriceFromStorage());
  const [, forceRender] = useState(undefined);
  const isStorageEmpty = localStorage.length < 1;

  function handleCalculateTotal() {
    setTotalBill(totalPriceFromStorage());
  }

  function handleRemove() {
    handleCalculateTotal();
    forceRender((prev) => !prev);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles["card-container"]}>
          {!isStorageEmpty &&
            Object.keys(localStorage).map((element) => (
              <Card
                key={element}
                productId={element}
                onCalculateTotal={handleCalculateTotal}
                onRemove={handleRemove}
              />
            ))}
        </div>
        <div className={styles["checkout-container"]}>
          <p>Total Price</p>
          <div className={styles.checkout}>
            <p>{`$${totalBill.toFixed(2)}`}</p>
            <Button name={"Checkout"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
