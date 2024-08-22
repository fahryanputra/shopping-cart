import { useEffect, useState } from "react";
import QuantityInput from "./QuantityInput";
import Button from "components/Button";
import {
  addQuantityAndTotalPrice,
  getFromStorage,
  removeFromStorage,
} from "utilities/storageUtilities";
import styles from "styles/cart/card.module.css";

function Card({ productId, onCalculateTotal, onRemove }) {
  const product = getFromStorage(productId);
  const [productQuantity, setProductQuantity] = useState(
    product.quantity ? product.quantity : 1
  );
  const [totalPrice, setTotalPrice] = useState(productQuantity * product.price);

  useEffect(() => {
    const totalPrice = productQuantity * product.price;

    setTotalPrice(totalPrice);
    addQuantityAndTotalPrice(productId, product, productQuantity, totalPrice);
    onCalculateTotal();
  }, [productQuantity]);

  function handleRemove() {
    removeFromStorage(productId);
    onRemove();
  }

  return (
    <>
      <div className={styles["card-container"]}>
        <img src={product.image} alt={product.title} />
        <div className={styles.description}>
          <p>{product.title}</p>
          <div className={styles["price-container"]}>
            <p>{`$${totalPrice.toFixed(2)}`}</p>
            <div className={styles.quantity}>
              <QuantityInput
                productQuantity={productQuantity}
                setProductQuantity={setProductQuantity}
                onRemove={handleRemove}
              />
            </div>
          </div>
          <div className={styles["remove-container"]}>
            <Button name={"remove"} onClick={handleRemove} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
