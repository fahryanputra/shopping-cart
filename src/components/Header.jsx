import Navigation from "components/Navigation";

function Header({ logoUrl, title, shopUrl, cartUrl, setSearchValue }) {
  return (
    <>
      <header>
        <div>
          <img src={logoUrl} alt="logo" />
          <p>{title}</p>
        </div>
        <div>
          <Navigation
            shopUrl={shopUrl}
            cartUrl={cartUrl}
            setSearchValue={setSearchValue}
          />
        </div>
      </header>
    </>
  );
}

export default Header;
