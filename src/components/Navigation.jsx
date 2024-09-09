import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "styles/navigation.module.css";

function Navigation() {
  return (
    <>
      <div className={styles["link-container"]}>
        <Link className="poppins-regular" to="/">
          Shop
        </Link>
        <Link className="poppins-regular" to="/cart">
          Cart
        </Link>
      </div>
    </>
  );
}

export default Navigation;
