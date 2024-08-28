import styles from "styles/shop/searchBar.module.css";

function SearchBar({ id, setSearchValue }) {
  return (
    <>
      <div className={styles.container}>
        <input
          id={id}
          className={styles.search}
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </>
  );
}

export default SearchBar;
