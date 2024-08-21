import Button from "components/Button";

function QuantityInput({ productQuantity, setProductQuantity, onRemove }) {
  function handleAdd() {
    return setProductQuantity(+productQuantity + 1);
  }

  function handleSubtract() {
    return productQuantity > 0 && setProductQuantity(+productQuantity - 1);
  }

  function handleChange(event) {
    return !event.target.value
      ? setProductQuantity(0)
      : setProductQuantity(event.target.value.replace(/^0/, ""));
  }

  return (
    <>
      {productQuantity > 0 ? (
        <Button name={"-"} onClick={handleSubtract} />
      ) : (
        <Button name={"x"} onClick={onRemove} />
      )}
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
