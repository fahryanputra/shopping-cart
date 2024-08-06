import { useState } from "react";
import "./App.css";
import Header from "components/Header";
import Content from "components/Content";

function App() {
  return (
    <>
      <Header
        logoUrl={"#"}
        title={"Shopping Cart"}
        shopUrl={"Shop Url"}
        cartUrl={"Cart url"}
      />
      <Content />
    </>
  );
}

export default App;
