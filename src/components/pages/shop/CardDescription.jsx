import Button from "components/Button";
import { useState } from "react";

function CardDescription({ product }) {
  const isStorageEmpty = localStorage.length < 1;
  const isProductInStorage = localStorage.getItem(product.id);

  const [toggleCartButton, setToggleCartButton] = useState(
    isStorageEmpty ? true : !isProductInStorage
  );

  function addToStorage(product) {
    localStorage.setItem(product.id, JSON.stringify(product));
  }

  function removeFromStorage(product) {
    localStorage.removeItem(product.id);
  }

  function onClick() {
    setToggleCartButton(!toggleCartButton);

    if (toggleCartButton) {
      addToStorage(product);
    } else {
      removeFromStorage(product);
    }
  }

  return (
    <>
      <div>
        <p>{product.title}</p>
        <p>{`$${product.price}`}</p>
      </div>
      <div>
        <Button
          name={toggleCartButton ? "Add to Cart" : "Remove from Cart"}
          onClick={() => {
            onClick();
          }}
        />
      </div>
    </>
  );
}

export default CardDescription;
