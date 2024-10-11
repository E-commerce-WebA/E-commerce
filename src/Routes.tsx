import ProductList from "./pages/ProductList/ProductList";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import CategoriesWithSidebarPage from "./pages/CategoriesWithSlidebar/CategoriesWithSlidebar";
// import Completed from "./pages/Completed";
const ProjectRoutes = () => {
let element = useRoutes([
{ path: "dhiwise-dashboard", element: <Home /> },
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
},
]);
return element;
};

export default ProjectRoutes;