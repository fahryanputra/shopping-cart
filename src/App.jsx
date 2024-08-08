import { useState } from "react";
import "./App.css";
import Header from "components/Header";
import Content from "components/Content";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Header
        logoUrl={"#"}
        title={"Shopping Cart"}
        shopUrl={"Shop Url"}
        cartUrl={"Cart url"}
        setSearchValue={setSearchValue}
      />
      <Content searchValue={searchValue} />
    </>
  );
}

export default App;
