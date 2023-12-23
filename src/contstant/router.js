import Home from "../pages";
import AgeVerify from "../pages/AgeVerify";
import Blank from "../pages/Blank";
import DetailProduct from "../pages/DetailProduct";
import Product from "../pages/Product";

export const listRouter = [
  { path: "/", element: <Home /> },
  { path: "/verify-age", element: <AgeVerify /> },
  { path: "/about:blank", element: <Blank /> },
  { path: "/product/:id", element: <DetailProduct /> },
  { path: "/product", element: <Product /> },
  { path: "*", element: <Home /> },
];
