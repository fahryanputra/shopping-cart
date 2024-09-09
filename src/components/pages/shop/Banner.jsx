import styles from "styles/shop/banner.module.css";
import banner from "assets/banner.jpg";

function Banner({ imgUrl }) {
  return (
    <>
      <div className={styles["banner-container"]}>
        <img src={banner} alt="bannerImage" />
      </div>
    </>
  );
}

export default Banner;
