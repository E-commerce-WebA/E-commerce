import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header.tsx";
import BreadcrumbSection from "./BreadcrumbSection";

export default function CartPage() {
  return (
    <>
      <Helmet>
        <title>Shopping Cart Find Your Favorite Products | 4Fasion</title>
        <meta
          name="description"
          content="View your Shopping Cart to review items selected for purchase. Apply coupon codes, update quantities, and proceed to checkout to complete your order."
        />
      </Helmet>
      <div className="w-full bg-white-a708">
        {/*header section */}
        <Header />
        {/* breadcrumb section */}

        <BreadcrumbSection />
        {/* footer section */}
        <Footer className="mt-[100px]" />
      </div>
    </>
  );
}
