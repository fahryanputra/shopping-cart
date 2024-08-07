import Card from "components/Card";
import useFakeStoreAPI from "hooks/useFakeStoreAPI";

function Products() {
  const { products, error, loading } = useFakeStoreAPI();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      {products.map((product) => (
        <Card
          key={product.id}
          imgUrl={product.image}
          productName={product.title}
          productPrice={product.price}
        />
      ))}
    </>
  );
}

export default Products;
