import { useState } from "react";
import Card from "./Card";
import Button from "components/Button";

function Cart() {
  const [totalBill, setTotalBill] = useState(calculateTotalBill());
  const isStorageEmpty = localStorage.length < 1;

  function getProductFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  function calculateTotalBill() {
    let totalBill = 0;

    Object.keys(localStorage).map(
      (element) => (totalBill += getProductFromStorage(element).total)
    );

    return totalBill;
  }

  function handleCalculateTotal() {
    setTotalBill(calculateTotalBill());
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
