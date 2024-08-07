import CardDescription from "components/CardDescription";

function Card({ imgUrl, productName, productPrice }) {
  return (
    <>
      <div>
        <div>
          <img src={imgUrl} alt="cardImage" />
        </div>
        <div>
          <CardDescription
            productName={productName}
            productPrice={productPrice}
          />
        </div>
      </div>
    </>
  );
}

export default Card;
