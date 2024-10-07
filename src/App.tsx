import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Brands from "./pages/HomePage/Brands.tsx";
import CategoriesSection from "./pages/HomePage/CategoriesSection.tsx";
import NewArrivalsSection from "./pages/HomePage/NewArrivalsSection.tsx";
import FeaturedSection from "./pages/HomePage/FeaturedSection.tsx";
import HeroSection from "./pages/HomePage/HeroSection.tsx";
import WhyChooseUsSection from "./pages/HomePage/WhyChooseUsSection.tsx";
import SummerCollection from "./pages/HomePage/SummerCollection.tsx";
import PopularThisWeekSection from "./pages/HomePage/PopularThisWeeksSection.tsx";
import SubHeader from "./components/Header/SubHeader.tsx";

const App = () => {
  return (
    <div>
      <Header />
      <SubHeader/>
      <HeroSection />
      <CategoriesSection />
      <NewArrivalsSection />
      <FeaturedSection />
      <SummerCollection/>
      <PopularThisWeekSection/>
      <WhyChooseUsSection />
      <Brands />
      <Footer />
    </div>
  );
};

export default App;
