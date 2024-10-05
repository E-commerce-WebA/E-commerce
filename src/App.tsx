import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Brands from "./pages/Brands.tsx";
import CategoriesSection from "./pages/HomePage/CategoriesSection.tsx";

const App = () => {
  return (
    <div>
      <Header />
      <CategoriesSection />
      <Brands />
      <Footer />
    </div>
  );
};

export default App;
