import { useEffect, useState } from "react";
import Card from "./Card";
import Button from "components/Button";
import { totalPriceFromStorage } from "utilities/storageUtilities";

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
      <div>
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
      <div>
        <p>Total Bill</p>
        <p>{`$${totalBill.toFixed(2)}`}</p>
      </div>
      <Button name={"Checkout"} />
    </>
  );
}

export default Cart;
