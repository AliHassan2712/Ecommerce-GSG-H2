//pages
import { Home } from "../pages/Home";
import { Login } from "../features/pages/Login";
import { Cart } from "../pages/Cart";
import { Checkout } from "../features/pages/Checkout";
import { ProductDetails } from "../pages/ProductDetails";
//routes
import { PATH } from "../constant/PATH";

export const routes = [
  { path: PATH.Home, element: <Home /> },
  { path: PATH.Login, element: <Login /> }, 
  { path: PATH.Cart, element: <Cart /> }, 
  { path: PATH.Checkout, element: <Checkout/> }, 
  { path: `${PATH.PDP}/:id`, element: <ProductDetails/> }, 

];
