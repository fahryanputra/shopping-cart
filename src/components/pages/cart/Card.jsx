import { useEffect, useState } from "react";
import QuantityInput from "./QuantityInput";

function Card({ productId, onCalculateTotal }) {
  const product = getProductFromStorage(productId);
  const [productQuantity, setProductQuantity] = useState(
    product.quantity ? product.quantity : 1
  );
  const [totalPrice, setTotalPrice] = useState(productQuantity * product.price);

  useEffect(() => {
    const totalPrice = productQuantity * product.price;

    setTotalPrice(totalPrice);
    product.quantity = productQuantity;
    product.total = totalPrice;
    storeProductToStorage(productId, product);
    onCalculateTotal();
  }, [productQuantity]);

  function getProductFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  function storeProductToStorage(key, object) {
    return localStorage.setItem(key, JSON.stringify(object));
  }

  return (
    <>
      <img src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p>{`$${product.price.toFixed(2)}`}</p>
      <div>
        <p>Quantity</p>
        <QuantityInput
          product={product}
          productQuantity={productQuantity}
          setProductQuantity={setProductQuantity}
        />
      </div>
      <div>
        <p>{`$${totalPrice.toFixed(2)}`}</p>
      </div>
    </>
  );
}

export default Card;
