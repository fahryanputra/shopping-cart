import Button from "components/Button";
import SearchBar from "components/SearchBar";

function Navigation({ shopUrl, cartUrl, setSearchValue }) {
  function onClick(url) {
    return console.log(url);
  }

  return (
    <>
      <div>
        <SearchBar id={"search"} setSearchValue={setSearchValue} />
      </div>
      <div>
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
      </div>
    </>
  );
}

export default Navigation;
