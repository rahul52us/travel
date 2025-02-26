"use client";
import { Box } from "@chakra-ui/react";
import ContactUs from "../../component/ContactUs/ContactUs";
import TravelBentoGrid from "../../travelComponent/common/TravelBentoGrid/TravelBentoGrid";
import LocationCarousel from "../../component/common/LocationCarousel/LocationCarousel";
import SightseeingList from "../../travelComponent/common/SightseeingCard/SightseeingList";
import TransfersEurailSection from "../../travelComponent/TransfersEurailSection/TransfersEurailSection";
import HeroSection from "../../travelComponent/TravelHeroSection/TravelHeroSection";
import TestimonialSection from "../../component/TestimonialSection/TestimonialSection";
import ExploreEuropeCarousel from "../../travelComponent/ExploreSection/ExploreSection";
import FeaturedDestination from "../../travelComponent/FeaturedDestination/FeaturedDestination";
import TourPackageSection from "../../travelComponent/TourPackageSection/TourPackageSection";
import WhyChoose from "./component/WhyChoose/WhyChoose";
import BudgetWrapper from "./component/BudgetWrapper/BudgetWrapper";
import FAQ from "../../component/FAQ/FAQ";
import FloatingSocialIcons from "../../travelComponent/common/FloatingIcons/FloatingIcons";

export default function Home() {
  return (
    <Box>
      <HeroSection />

      <TourPackageSection />

      <TravelBentoGrid />
      <LocationCarousel />
      <BudgetWrapper />

      <ExploreEuropeCarousel />

      <SightseeingList />
      <TestimonialSection />
      <WhyChoose />
      <FeaturedDestination />
      <TransfersEurailSection />
      <FAQ/>
      <Box>
        <ContactUs />
      </Box>
      <FloatingSocialIcons/>
    </Box>
  );
}
