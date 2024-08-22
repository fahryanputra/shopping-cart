import Banner from "components/pages/shop/Banner";
import Products from "components/pages/shop/Products";
import styles from "styles/shop/content.module.css";

function Content({ searchValue }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.banner}>
          <Banner imgUrl={"#"} />
        </div>
        <Products searchValue={searchValue} />
      </div>
    </>
  );
}

export default Content;
