import Home from "../pages";
import AgeVerify from "../pages/AgeVerify";
import Blank from "../pages/Blank";
import DetailProduct from "../pages/DetailProduct";
import MyFavourite from "../pages/MyFavourite";
import Category from "../pages/Category";
import ShoppingCart from "../pages/ShoppingCart";
import AProduct from "../pages/admin/AProduct";
import ACategory from "../pages/admin/ACategory";
import AUser from "../pages/admin/AUser";

export const listRouter = [
  { path: "/", element: <Home /> },
  { path: "/verify-age", element: <AgeVerify /> },
  { path: "/about:blank", element: <Blank /> },
  { path: "/product/:id", element: <DetailProduct /> },
  { path: "/category/:id", element: <Category /> },
  { path: "/shopping-cart", element: <ShoppingCart /> },
  { path: "/my-favourite", element: <MyFavourite /> },
  { path: "/admin/category", element: <ACategory /> },
  { path: "/admin/product", element: <AProduct /> },
  { path: "/admin/user", element: <AUser /> },
  { path: "*", element: <Home /> },
];
