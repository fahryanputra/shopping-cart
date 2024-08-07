import CardDescription from "components/CardDescription";

function Card({ imgUrl, productId, productName, productPrice }) {
  return (
    <>
      <div>
        <div>
          <img src={imgUrl} alt="cardImage" />
        </div>
        <div>
          <CardDescription
            productId={productId}
            productName={productName}
            productPrice={productPrice}
          />
        </div>
      </div>
    </>
  );
}

export default Card;
