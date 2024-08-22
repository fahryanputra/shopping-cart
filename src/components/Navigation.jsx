import { Link } from "react-router-dom";
import styles from "styles/navigation.module.css";

function Navigation() {
  return (
    <>
      <div className={styles["link-container"]}>
        <Link to="/">Shop</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </>
  );
}

export default Navigation;
