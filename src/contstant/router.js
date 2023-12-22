import Home from "../pages";
import AgeVerify from "../pages/AgeVerify";
import Blank from "../pages/Blank";

export const listRouter = [
  { path: "/", element: <Home /> },
  { path: "/verify-age", element: <AgeVerify /> },
  { path: "/about:blank", element: <Blank /> },
  { path: "*", element: <Home /> },
];
