import CardDescription from "components/pages/shop/CardDescription";

function Card({ imgUrl, product }) {
  return (
    <>
      <div>
        <div>
          <img src={imgUrl} alt="cardImage" />
        </div>
        <div>
          <CardDescription product={product} />
        </div>
      </div>
    </>
  );
}

export default Card;
