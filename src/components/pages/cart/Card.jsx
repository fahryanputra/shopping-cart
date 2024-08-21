import { useEffect, useState } from "react";
import QuantityInput from "./QuantityInput";
import Button from "components/Button";
import {
  addQuantityAndTotalPrice,
  getFromStorage,
  removeFromStorage,
} from "utilities/storageUtilities";

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
      <img src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p>{`$${product.price.toFixed(2)}`}</p>
      <div>
        <p>Quantity</p>
        <QuantityInput
          productQuantity={productQuantity}
          setProductQuantity={setProductQuantity}
          onRemove={handleRemove}
        />
        <Button name={"remove"} onClick={handleRemove} />
      </div>
      <div>
        <p>{`$${totalPrice.toFixed(2)}`}</p>
      </div>
    </>
  );
}

export default Card;
