function CardDescription({ productName, productPrice }) {
  return (
    <>
      <div>
        <p>{productName}</p>
        <p>{`$${productPrice}`}</p>
      </div>
    </>
  );
}

export default CardDescription;
