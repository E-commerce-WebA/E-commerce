import React from "react";
import SubHeader from "../../components/Header/SubHeader";
import HeroSection from "./HeroSection";
import CategoriesSection from "./CategoriesSection";
import NewArrivalsSection from "./NewArrivalsSection";
import FeaturedSection from "./FeaturedSection";
import SummerCollection from "./SummerCollection";
import PopularThisWeekSection from "./PopularThisWeeksSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import Brands from "./Brands";

const HomePage = () => {
  return (
    <div>
      <SubHeader />
      <HeroSection />
      <CategoriesSection />
      <NewArrivalsSection />
      <FeaturedSection />
      <SummerCollection />
      <PopularThisWeekSection />
      <WhyChooseUsSection />
      <Brands />
    </div>
  );
};

export default HomePage;
