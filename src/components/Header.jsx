import Navigation from "components/Navigation";

function Header({ logoUrl, title, shopUrl, cartUrl }) {
  return (
    <>
      <header>
        <div>
          <img src={logoUrl} alt="logo" />
          <p>{title}</p>
        </div>
        <div>
          <Navigation shopUrl={shopUrl} cartUrl={cartUrl} />
        </div>
      </header>
    </>
  );
}

export default Header;
