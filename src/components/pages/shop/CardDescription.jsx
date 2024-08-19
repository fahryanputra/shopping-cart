import Button from "components/Button";
import { useState } from "react";
import { addToStorage, removeFromStorage } from "utilities/storageUtilities";

function CardDescription({ product }) {
  const isStorageEmpty = localStorage.length < 1;
  const isProductInStorage = localStorage.getItem(product.id);

  const [toggleCartButton, setToggleCartButton] = useState(
    isStorageEmpty ? true : !isProductInStorage
  );

  function onClick() {
    setToggleCartButton(!toggleCartButton);

    if (toggleCartButton) {
      addToStorage(product.id, product);
    } else {
      removeFromStorage(product.id);
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
