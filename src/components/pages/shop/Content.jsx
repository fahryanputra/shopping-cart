import Banner from "components/pages/shop/Banner";
import Products from "components/pages/shop/Products";
import styles from "styles/content.module.css";

function Content({ searchValue }) {
  return (
    <>
      <div className={styles.container}>
        <Banner imgUrl={"#"} />
        <Products searchValue={searchValue} />
      </div>
    </>
  );
}

export default Content;
