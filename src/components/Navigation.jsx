import SearchBar from "components/pages/shop/SearchBar";
import { Link, useLocation } from "react-router-dom";
import styles from "styles/navigation.module.css";

function Navigation({ setSearchValue }) {
  const location = useLocation().pathname;

  return (
    <>
      <div className={styles["search-container"]}>
        {location === "/" && (
          <SearchBar id={"search"} setSearchValue={setSearchValue} />
        )}
      </div>
      <div className={styles["link-container"]}>
        <Link to="/">Shop</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </>
  );
}

export default Navigation;
