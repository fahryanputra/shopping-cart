function SearchBar({ id }) {
  return (
    <>
      <label htmlFor={id}>
        <span>search</span>
      </label>
      <input id={id} type="text" placeholder="Search" />
    </>
  );
}

export default SearchBar;
