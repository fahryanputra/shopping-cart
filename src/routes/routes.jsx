import ShopPage from "components/pages/shop/ShopPage.jsx";
import CartPage from "components/pages/cart/CartPage.jsx";
import ErrorPage from "components/pages/error/ErrorPage.jsx";

const routes = [
  {
    path: "/",
    element: <ShopPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "cart",
    element: <CartPage />,
  },
];

export default routes;
