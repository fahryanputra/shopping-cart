import styles from "styles/searchBar.module.css";

function SearchBar({ id, setSearchValue }) {
  return (
    <>
      <input
        id={id}
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </>
  );
}

export default SearchBar;
