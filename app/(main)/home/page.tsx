"use client";
// src/app/game/page.tsx
import { Box } from "@chakra-ui/react";
// import HeroSection from "../../component/common/HeroSection/HeroSection";
import ContactUs from "../../component/ContactUs/ContactUs";
import TravelBentoGrid from "../../travelComponent/common/TravelBentoGrid/TravelBentoGrid";

import LocationCarousel from "../../component/common/LocationCarousel/LocationCarousel";
import SightseeingList from "../../travelComponent/common/SightseeingCard/SightseeingList";
import TransfersEurailSection from "../../travelComponent/TransfersEurailSection/TransfersEurailSection";
import HeroSection from "../../travelComponent/TravelHeroSection/TravelHeroSection";
// import WhyChooseUs from "../../travelComponent/WhyChooseUs/WhyChooseUs";
// import Banner from "./component/Banner";
import TestimonialSection from "../../component/TestimonialSection/TestimonialSection";
import ExploreEuropeCarousel from "../../travelComponent/ExploreSection/ExploreSection";
import FeaturedDestination from "../../travelComponent/FeaturedDestination/FeaturedDestination";
import TourPackageSection from "../../travelComponent/TourPackageSection/TourPackageSection";
import WhyChoose from "./component/WhyChoose/WhyChoose";

// Data for the first Banner
// const cardData1 = [
//   {
//     imageSrc: "/images/aboutImage.png",
//     title: "Card Title 1",
//     description: "This is the first card description.",
//   },
//   {
//     imageSrc: "/images/homeImage1.png",
//     title: "Card Title 2",
//     description: "This is the second card description.",
//   },
//   {
//     imageSrc: "/images/cardImage1.png",
//     title: "Card Title 3",
//     description: "This is the third card description.",
//   },
//   {
//     imageSrc: "/images/homeImage2.png",
//     title: "Card Title 4",
//     description: "This is the fourth card description.",
//   },
//   {
//     imageSrc: "/images/homeImage2.png",
//     title: "Card Title 4",
//     description: "This is the fourth card description.",
//   },
// ];

// // Data for the second Banner
// const cardData2 = [
//   {
//     imageSrc: "/images/homeImage3.png",
//     title: "Card Title 5",
//     description: "This is the fifth card description.",
//   },
//   {
//     imageSrc: "/images/homeImage4.png",
//     title: "Card Title 6",
//     description: "This is the sixth card description.",
//   },
//   {
//     imageSrc: "/images/cardImage2.png",
//     title: "Card Title 7",
//     description: "This is the seventh card description.",
//   },
//   {
//     imageSrc: "/images/homeImage5.png",
//     title: "Card Title 8",
//     description: "This is the eighth card description.",
//   },
// ];




export default function Home() {
  return (
    <Box>
      <HeroSection/>
      {/* <Banner data={cardData1} heading="Explore Our First Set of Cards" /> */}
      {/* <Banner data={cardData2} heading="Explore Our Second Set of Cards" /> */}
      {/* <HeroSection /> */}


      {/* <TravelpackagesCard /> */}

      <TourPackageSection/>
      
      <TravelBentoGrid />
      <LocationCarousel />
      {/* <WhyChooseUs /> */}
      {/* <BudgetWrapper /> */}

    <ExploreEuropeCarousel/>

      <SightseeingList/>
      <TestimonialSection/>
      <WhyChoose />
      <FeaturedDestination/>
      {/* <StatsSection /> */}
     <TransfersEurailSection/>
      <Box>
        <ContactUs />
      </Box>




    </Box>
  );
}
