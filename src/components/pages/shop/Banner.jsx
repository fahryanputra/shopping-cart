import styles from "styles/shop/banner.module.css";

function Banner({ imgUrl }) {
  return (
    <>
      <div className={styles["banner-container"]}>
        <img src={imgUrl} alt="bannerImage" />
      </div>
    </>
  );
}

export default Banner;
