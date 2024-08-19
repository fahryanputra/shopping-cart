import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "routes/routes";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
