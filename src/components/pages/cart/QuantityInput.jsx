import Button from "components/Button";
import styles from "styles/cart/quantity.module.css";

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
      <div className={styles.container}>
        {productQuantity > 0 ? (
          <Button className={"counter"} name={"-"} onClick={handleSubtract} />
        ) : (
          <Button name={"x"} onClick={onRemove} />
        )}
        <input
          className={styles.quantity}
          type="number"
          value={productQuantity}
          min={0}
          step={1}
          onChange={handleChange}
        />
        <Button className={"counter"} name={"+"} onClick={handleAdd} />
      </div>
    </>
  );
}

export default QuantityInput;
