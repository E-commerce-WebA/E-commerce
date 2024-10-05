import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Brands from "./pages/Brands.tsx";
import CategoriesSection from "./pages/HomePage/CategoriesSection.tsx";
import NewArrivalsSection from "./pages/HomePage/NewArrivalsSection.tsx";
import FeaturedSection from "./pages/HomePage/FeaturedSection.tsx";

const App = () => {
  return (
    <div>
      <Header />
      <NewArrivalsSection />
      <CategoriesSection />
      <FeaturedSection />
      <Brands />
      <Footer />
    </div>
  );
};

export default App;
