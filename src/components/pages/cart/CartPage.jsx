import Header from "components/Header";

function CartPage() {
  return (
    <>
      <Header />
      <h1>Cart</h1>
      {Object.keys(localStorage).map((element) => (
        <p key={element}>{JSON.parse(localStorage.getItem(element)).id}</p>
      ))}
    </>
  );
}

export default CartPage;
