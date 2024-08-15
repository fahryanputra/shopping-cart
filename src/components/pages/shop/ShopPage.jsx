import Header from "components/Header";
import Content from "components/pages/shop/Content";
import { useState } from "react";

function ShopPage() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Header title={"Ciplun's Shop"} setSearchValue={setSearchValue} />
      <Content searchValue={searchValue} />
    </>
  );
}

export default ShopPage;
