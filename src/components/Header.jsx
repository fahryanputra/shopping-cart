import Navigation from "components/Navigation";

function Header({ setSearchValue }) {
  return (
    <>
      <header>
        <div>
          <img src="#" alt="logo" />
          <p>Shopping Cart</p>
        </div>
        <div>
          <Navigation setSearchValue={setSearchValue} />
        </div>
      </header>
    </>
  );
}

export default Header;
