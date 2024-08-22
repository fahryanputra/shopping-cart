import CardDescription from "components/pages/shop/CardDescription";
import styles from "styles/shop/productCard.module.css";

function Card({ imgUrl, product }) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles["image-container"]}>
          <img src={imgUrl} alt="cardImage" />
        </div>
        <div className={styles["desc-container"]}>
          <CardDescription product={product} />
        </div>
      </div>
    </>
  );
}

export default Card;
