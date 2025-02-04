// TravelPackageList.tsx

import { Box } from "@chakra-ui/react";
import CustomCarousel from "../CustomCarousal/CustomCarousal";
import TravelPackageCard from "./element/TravelPackageCard";

const travelPackages = [
  {
    id: 1,
    location: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
    price: 105000,
    days: 7,
    rating: 4.8,
    perks: [
      "5-star hotels",
      "Daily breakfast",
      "Guided tours",
      "Airport transfer",
    ],
    highlights: ["Sunset cruise", "Volcano tour", "Wine tasting"],
    discount: 15,
    itinerary: [
      { place: "Santorini Town", nights: 3 },
      { place: "Oia Village", nights: 4 },
    ],
  },
  {
    id: 2,
    location: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
    price: 184000,
    days: 10,
    rating: 4.9,
    perks: [
      "Ryokan stay",
      "Kaiseki dinner",
      "Tea ceremony",
      "Bullet train pass",
    ],
    highlights: ["Cherry blossoms", "Bamboo forest", "Golden Pavilion"],
    discount: 10,
    itinerary: [
      { place: "Kyoto Town", nights: 3 },
      { place: "Arashiyama", nights: 4 },
    ],
  },
  {
    id: 3,
    location: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
    price: 184000,
    days: 10,
    rating: 4.9,
    perks: [
      "Ryokan stay",
      "Kaiseki dinner",
      "Tea ceremony",
      "Bullet train pass",
    ],
    highlights: ["Cherry blossoms", "Bamboo forest", "Golden Pavilion"],
    discount: 10,
    itinerary: [
      { place: "Kyoto Town", nights: 3 },
      { place: "Arashiyama", nights: 4 },
    ],
  },
  {
    id: 4,
    location: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
    price: 184000,
    days: 10,
    rating: 4.9,
    perks: [
      "Ryokan stay",
      "Kaiseki dinner",
      "Tea ceremony",
      "Bullet train pass",
    ],
    highlights: ["Cherry blossoms", "Bamboo forest", "Golden Pavilion"],
    discount: 10,
    itinerary: [
      { place: "Kyoto Town", nights: 3 },
      { place: "Arashiyama", nights: 4 },
    ],
  },
];

const TravelPackageList = () => {
  return (
    <Box maxW={{lg:"95%",xl:"90%"}} mx="auto">
      <CustomCarousel autoplay={true}>

      {travelPackages.map((pkg) => (
        <TravelPackageCard key={pkg.id} pkg={pkg} />
      ))}
      </CustomCarousel>
    </Box>
  );
};

export default TravelPackageList;
