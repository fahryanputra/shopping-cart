import styles from "styles/shop/searchBar.module.css";

function SearchBar({ id, setSearchValue }) {
  return (
    <>
      <input
        id={id}
        className={styles.search}
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </>
  );
}

export default SearchBar;
