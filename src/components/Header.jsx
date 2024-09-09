import styles from "styles/header.module.css";

function Header({ title }) {
  return (
    <>
      <header>
        <div className={styles["title-container"]}>
          <div className={styles.icon}>
            <img
              width="96"
              height="96"
              src="https://img.icons8.com/color/96/shop.png"
              alt="shop"
            />{" "}
          </div>
          <p className="poppins-regular">{title}</p>
        </div>
      </header>
    </>
  );
}

export default Header;
