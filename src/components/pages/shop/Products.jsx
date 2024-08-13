import Card from "components/pages/shop/Card";
import useFakeStoreAPI from "hooks/useFakeStoreAPI";
import { useState } from "react";

function Products({ searchValue }) {
  function displayProductCard(product) {
    return <Card key={product.id} imgUrl={product.image} product={product} />;
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
