import Card from "components/Card";
import useFakeStoreAPI from "hooks/useFakeStoreAPI";

function Products({ searchValue }) {
  function displayProductCard(product) {
    return (
      <Card
        key={product.id}
        imgUrl={product.image}
        productId={product.id}
        productName={product.title}
        productPrice={product.price}
      />
    );
  }

  const { products, error, loading } = useFakeStoreAPI();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      {searchValue === ""
        ? products.map((product) => displayProductCard(product))
        : products
            .filter((product) =>
              product.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((product) => displayProductCard(product))}
    </>
  );
}

export default Products;
