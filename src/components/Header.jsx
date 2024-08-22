import SearchBar from "components/pages/shop/SearchBar";
import { useLocation } from "react-router-dom";
import Navigation from "components/Navigation";
import styles from "styles/header.module.css";

function Header({ title, setSearchValue }) {
  const location = useLocation().pathname;

  return (
    <>
      <header>
        <div className={styles["title-container"]}>
          <div className={styles.icon}>
            <img src="#" alt="logo" />
          </div>
          <p>{title}</p>
          <div className={styles["search-container"]}>
            {location === "/" && (
              <SearchBar id={"search"} setSearchValue={setSearchValue} />
            )}
          </div>
        </div>
        <div className={styles.navbar}>
          <Navigation setSearchValue={setSearchValue} />
        </div>
      </header>
    </>
  );
}

export default Header;
