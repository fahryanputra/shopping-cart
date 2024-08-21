import Navigation from "components/Navigation";
import styles from "styles/header.module.css";

function Header({ title, setSearchValue }) {
  return (
    <>
      <header>
        <div className={styles["title-container"]}>
          <div className={styles.icon}>
            <img src="#" alt="logo" />
          </div>
          <p>{title}</p>
        </div>
        <div className={styles.navbar}>
          <Navigation setSearchValue={setSearchValue} />
        </div>
      </header>
    </>
  );
}

export default Header;
