import Button from "components/Button";
import SearchBar from "components/SearchBar";

function Header({ logoUrl, title, shopUrl, cartUrl }) {
  function onClick(url) {
    return console.log(url);
  }

  return (
    <>
      <header>
        <img src={logoUrl} alt="logo" />
        <p>{title}</p>
        <SearchBar id={"search"} />
        <Button
          name={"Shop"}
          onClick={() => {
            onClick(shopUrl);
          }}
        />
        <Button
          name={"Cart"}
          onClick={() => {
            onClick(cartUrl);
          }}
        />
      </header>
    </>
  );
}

export default Header;
