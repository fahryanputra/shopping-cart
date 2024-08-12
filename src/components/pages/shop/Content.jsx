import Banner from "components/pages/shop/Banner";
import Products from "components/pages/shop/Products";

function Content({ searchValue }) {
  return (
    <>
      <div>
        <Banner imgUrl={"#"} />
      </div>
      <div>
        <Products searchValue={searchValue} />
      </div>
    </>
  );
}

export default Content;
