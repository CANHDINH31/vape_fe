import Home from "../pages";
import AgeVerify from "../pages/AgeVerify";
import Blank from "../pages/Blank";
import DetailProduct from "../pages/DetailProduct";
import MyFavourite from "../pages/MyFavourite";
import Product from "../pages/Product";
import ShoppingCart from "../pages/ShoppingCart";
import AProduct from "../pages/admin/AProduct";
import Category from "../pages/admin/Category";

export const listRouter = [
  { path: "/", element: <Home /> },
  { path: "/verify-age", element: <AgeVerify /> },
  { path: "/about:blank", element: <Blank /> },
  { path: "/product/:id", element: <DetailProduct /> },
  { path: "/product", element: <Product /> },
  { path: "/shopping-cart", element: <ShoppingCart /> },
  { path: "/my-favourite", element: <MyFavourite /> },
  { path: "/admin/category", element: <Category /> },
  { path: "/admin/product", element: <AProduct /> },
  { path: "*", element: <Home /> },
];
