import Banner from "components/Banner";
import Products from "components/Products";

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
