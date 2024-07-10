import { useState } from "react";
import "./App.css";
import Header from "components/Header";

function App() {
  return (
    <>
      <Header
        logoUrl={"#"}
        title={"Shopping Cart"}
        shopUrl={"Shop Url"}
        cartUrl={"Cart url"}
      />
    </>
  );
}

export default App;
