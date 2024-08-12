import Button from "components/Button";
import { addToCart, removeFromCart } from "utilities/shoppingCart";
import { useState } from "react";

function CardDescription({ product }) {
  const [toggleCartButton, setToggleCartButton] = useState(true);

  function onClick() {
    setToggleCartButton(!toggleCartButton);

    if (toggleCartButton) {
      addToCart(product);
      return console.log(`Add product ${product.id} to cart`);
    } else {
      removeFromCart(product);
      return console.log(`Remove product ${product.id} from cart`);
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
