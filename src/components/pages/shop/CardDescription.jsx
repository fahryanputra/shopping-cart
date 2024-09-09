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
      <div className={`${styles.container} montserrat-regular`}>
        <p className={styles.title}>{product.title}</p>
        <p className={styles.price}>{`$${product.price}`}</p>
      </div>
      <div className={`${styles.container} poppins-regular`}>
        <Button
          className={toggleCartButton ? "cart-add" : "cart-remove"}
          name={toggleCartButton ? <p>Add to Cart</p> : <p>Remove from Cart</p>}
          onClick={() => {
            onClick();
          }}
        />
      </div>
    </>
  );
}

export default CardDescription;
