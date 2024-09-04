import styles from "styles/button.module.css";

function Button({ className, name, onClick }) {
  return (
    <>
      <button
        className={className ? styles[`${className}`] : ""}
        onClick={onClick}
      >
        {name}
      </button>
    </>
  );
}

export default Button;
