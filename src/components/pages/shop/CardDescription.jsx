import Button from "components/Button";
import { useState } from "react";
import { addToStorage, removeFromStorage } from "utilities/storageUtilities";
import styles from "styles/shop/cardDescription.module.css";

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
      <div className={styles.container}>
        <p className={styles.title}>{product.title}</p>
        <p className={styles.price}>{`$${product.price}`}</p>
      </div>
      <div className={styles.container}>
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
