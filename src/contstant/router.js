import Home from "../pages";
import AgeVerify from "../pages/AgeVerify";
import Blank from "../pages/Blank";
import DetailProduct from "../pages/DetailProduct";
import MyFavourite from "../pages/MyFavourite";
import Product from "../pages/Product";
import ShoppingCart from "../pages/ShoppingCart";

export const listRouter = [
  { path: "/", element: <Home /> },
  { path: "/verify-age", element: <AgeVerify /> },
  { path: "/about:blank", element: <Blank /> },
  { path: "/product/:id", element: <DetailProduct /> },
  { path: "/product", element: <Product /> },
  { path: "/shopping-cart", element: <ShoppingCart /> },
  { path: "/my-favourite", element: <MyFavourite /> },
  { path: "*", element: <Home /> },
];
