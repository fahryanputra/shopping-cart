import Button from "components/Button";
import SearchBar from "components/SearchBar";

function Navigation({ shopUrl, cartUrl }) {
  function onClick(url) {
    return console.log(url);
  }

  return (
    <>
      <div>
        <SearchBar id={"search"} />
        <Button
          name={"Search"}
          onClick={() => {
            onClick("do search");
          }}
        />
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
