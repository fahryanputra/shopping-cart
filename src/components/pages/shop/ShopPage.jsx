import Header from "components/Header";
import Navigation from "components/Navigation";
import Content from "components/pages/shop/Content";
import SearchBar from "components/pages/shop/SearchBar";
import { useState } from "react";
import headerStyles from "styles/shopHeader.module.css";

function ShopPage() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <div className={headerStyles["sticky-element"]}>
        <header className={headerStyles["shop-header"]}>
          <Header title={"Ciplun's Shop"} />
          <SearchBar id={"search"} setSearchValue={setSearchValue} />
        </header>
        <Navigation />
      </div>
      <Content searchValue={searchValue} />
    </>
  );
}

export default ShopPage;
