import ProductList from "pages/ProductList";
import ProductDetails from "pages/ProductDetails";
import Cart from "pages/Cart";
import Checkout from "pages/Checkout";
import Completed from "pages/Completed";
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
element: <CategorieswithSidebar />},
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