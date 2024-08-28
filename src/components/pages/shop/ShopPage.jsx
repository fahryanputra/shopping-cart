import Header from "components/Header";
import Navigation from "components/Navigation";
import Content from "components/pages/shop/Content";
import SearchBar from "components/pages/shop/SearchBar";
import { useState } from "react";
import styles from "styles/shop/shopPage.module.css";

function ShopPage() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <div className={styles["shop-header"]}>
        <Header title={"Ciplun's Shop"} />
        <SearchBar id={"search"} setSearchValue={setSearchValue} />
      </div>
      <Navigation />
      <Content searchValue={searchValue} />
    </>
  );
}

export default ShopPage;
