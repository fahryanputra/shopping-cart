import Button from "components/Button";
import { useState } from "react";

function CardDescription({ productId, productName, productPrice }) {
  const [toggleCartButton, setToggleCartButton] = useState(true);

  function onClick() {
    setToggleCartButton(!toggleCartButton);

    if (toggleCartButton) {
      return console.log(`Add product ${productId} to cart`);
    } else {
      return console.log(`Remove product ${productId} from cart`);
    }
  }

  return (
    <>
      <div>
        <p>{productName}</p>
        <p>{`$${productPrice}`}</p>
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
