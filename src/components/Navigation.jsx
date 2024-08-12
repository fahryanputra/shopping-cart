import SearchBar from "components/pages/shop/SearchBar";
import { Link, useLocation } from "react-router-dom";

function Navigation({ setSearchValue }) {
  const location = useLocation().pathname;

  return (
    <>
      <div>
        {location === "/" && (
          <SearchBar id={"search"} setSearchValue={setSearchValue} />
        )}
      </div>
      <div>
        <Link to="/">Shop</Link>
        <Link to="cart">Cart</Link>
      </div>
    </>
  );
}

export default Navigation;
