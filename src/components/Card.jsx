import CardDescription from "components/CardDescription";

function Card({ imgUrl, itemName, itemPrice }) {
  return (
    <>
      <div>
        <div>
          <img src={imgUrl} alt="cardImage" />
        </div>
        <div>
          <CardDescription itemName={itemName} itemPrice={itemPrice} />
        </div>
      </div>
    </>
  );
}

export default Card;
