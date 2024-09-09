import Card from "components/pages/shop/Card";
import useFakeStoreAPI from "hooks/useFakeStoreAPI";
import styles from "styles/shop/products.module.css";

function Products({ searchValue }) {
  function displayProductCard(product) {
    return <Card key={product.id} imgUrl={product.image} product={product} />;
  }

  const { products, error, loading } = useFakeStoreAPI();

  if (loading) return <p className="montserrat-regular">Loading...</p>;
  if (error)
    return (
      <p className="montserrat-regular">A network error was encountered</p>
    );

  return (
    <>
      <div className={styles.container}>
        {searchValue === ""
          ? products.map((product) => displayProductCard(product))
          : products
              .filter((product) =>
                product.title.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((product) => displayProductCard(product))}
      </div>
    </>
  );
}

export default Products;
