import Button from "components/Button";

function QuantityInput({ productQuantity, setProductQuantity }) {
  function handleAdd() {
    setProductQuantity(productQuantity + 1);
  }

  function handleSubtract() {
    if (productQuantity > 0) {
      setProductQuantity(productQuantity - 1);
    }
  }

  function handleChange(event) {
    !event.target.value
      ? setProductQuantity(0)
      : setProductQuantity(event.target.value.replace(/^0/, ""));
  }

  return (
    <>
      <Button name={"-"} onClick={handleSubtract} />
      <input
        type="number"
        value={productQuantity}
        min={0}
        step={1}
        onChange={handleChange}
      />
      <Button name={"+"} onClick={handleAdd} />
    </>
  );
}

export default QuantityInput;
