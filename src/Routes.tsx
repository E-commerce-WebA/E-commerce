import ProductList from "./pages/ProductList/ProductList";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import CategoriesWithSidebarPage from "./pages/CategoriesWithSlidebar/CategoriesWithSlidebar";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage/HomePage";
import { useRoutes } from "react-router-dom";
import Completed from "./pages/Completed/Completed";

const ProjectRoutes = () => {
let element = useRoutes([
{ path: "*", element: <NotFound /> },
{
path: "/",
element: <HomePage />

},
{
path: "categorieswithsidebar",
element: <CategoriesWithSidebarPage />},
{
path: "productlist",
element: <ProductList />,
},
{
path: "productdetails",
element: <ProductDetails />
},

{
path: "cart",
element: <Cart />,
},
{
path: "checkout",
element: <Checkout />,
},
{ path: "completed", element: <Completed />,
}

]);
return element;
};

export default ProjectRoutes;