import styles from "styles/header.module.css";

function Header({ title }) {
  return (
    <>
      <header>
        <div className={styles["title-container"]}>
          <div className={styles.icon}>
            <img src="#" alt="logo" />
          </div>
          <p>{title}</p>
        </div>
      </header>
    </>
  );
}

export default Header;
