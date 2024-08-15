import Navigation from "components/Navigation";

function Header({ title, setSearchValue }) {
  return (
    <>
      <header>
        <div>
          <img src="#" alt="logo" />
          <p>{title}</p>
        </div>
        <div>
          <Navigation setSearchValue={setSearchValue} />
        </div>
      </header>
    </>
  );
}

export default Header;
