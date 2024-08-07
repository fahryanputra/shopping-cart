import Button from "components/Button";

function CardDescription({ productId, productName, productPrice }) {
  function onClick() {
    return console.log(`buy product id: ${productId}`);
  }

  return (
    <>
      <div>
        <p>{productName}</p>
        <p>{`$${productPrice}`}</p>
        <Button
          name={"buy"}
          onClick={() => {
            onClick();
          }}
        />
      </div>
    </>
  );
}

export default CardDescription;
