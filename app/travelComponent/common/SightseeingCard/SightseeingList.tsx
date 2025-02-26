import {
  Box,
  Text,
  useBreakpointValue
} from "@chakra-ui/react";
import CustomCarousel from "../../../component/common/CustomCarousal/CustomCarousal";
import CustomSubHeading from "../CustomSubHeading/CustomSubHeading";
import SightseeingCard from "./element/SightseeingCard";
import { sightseeingData } from "../../../(main)/sightseeing/component/utils/sightseeingData";

const data = [
  {
    name: "Eiffel Tower",
    type: "Monument",
    description:
      "Visit the iconic Eiffel Tower and enjoy breathtaking views of Paris.",
    price: 2500,
    hours: 2,
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
  },
  {
    name: "Grand Canyon",
    type: "Nature",
    description:
      "Explore the majestic Grand Canyon with guided tours and more.",
    price: 4000,
    hours: 5,
    location: "Arizona, USA",
    image: "https://example.com/grand-canyon.jpg",
  },
  {
    name: "Grand Canyon",
    type: "Nature",
    description:
      "Explore the majestic Grand Canyon with guided tours and more.",
    price: 4000,
    hours: 5,
    location: "Arizona, USA",
    image: "https://example.com/grand-canyon.jpg",
  },
  {
    name: "Grand Canyon",
    type: "Nature",
    description:
      "Explore the majestic Grand Canyon with guided tours and more.",
    price: 4000,
    hours: 5,
    location: "Arizona, USA",
    image: "https://example.com/grand-canyon.jpg",
  },
];

const SightseeingList = () => {
  const noOfSlides = useBreakpointValue({ base: 1, md: 2, lg: 4 });
  const showArrows = useBreakpointValue({base:false,lg:true})

  return (
    <Box my={"4rem"} maxW={{base:"95%",lg:"90%"}} mx={"auto"}>
      <CustomSubHeading highlightText="Sightseeing Adventures">
        Unmissable Views
      </CustomSubHeading>
      <Text textAlign={'center'} fontSize={{base:"sm",lg:"md"}} maxW={{base:"95%",lg:'80%'}} color={'gray.500'} mx={'auto'}>

      From iconic landmarks to hidden treasures, discover the world’s most breathtaking sights that will leave you inspired and in awe. Let your curiosity guide you to unforgettable experiences.
      </Text>
      <Box mt={{base:4,lg:6}}>
        <CustomCarousel autoplay={true} slidesToShow={noOfSlides} showArrows={showArrows}>
          {sightseeingData.map((place, index) => (
            <SightseeingCard key={index} place={place} />
          ))}
        </CustomCarousel>
      </Box>
    </Box>
  );
};

export default SightseeingList;
