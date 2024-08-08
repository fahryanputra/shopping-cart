function SearchBar({ id, setSearchValue }) {
  return (
    <>
      <label htmlFor={id}>
        <span>search</span>
      </label>
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
