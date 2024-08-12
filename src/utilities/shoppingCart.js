let shoppingCart = [];

function addToCart(product) {
  shoppingCart.push(product);
  console.log(shoppingCart);
}

function removeFromCart(product) {
  shoppingCart = shoppingCart.filter((element) => element.id !== product.id);
  console.log(shoppingCart);
}

function displayCart() {
  return shoppingCart;
}

export { addToCart, removeFromCart, displayCart };
