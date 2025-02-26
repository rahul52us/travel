// TravelPackageList.tsx

import { Box, useBreakpointValue } from "@chakra-ui/react";
import CustomCarousel from "../CustomCarousal/CustomCarousal";
import TravelPackageCard from "./element/TravelPackageCard";
import { travelPackages } from "./utils/constant";


const TravelPackageList = () => {
  const showArrows = useBreakpointValue({base:false,lg:true})
  return (
    <Box maxW={{base:"95%",xl:"90%"}} mx="auto" py={2}>
      <CustomCarousel autoplay={true} showArrows={showArrows}>

      {travelPackages.map((pkg) => (
        <TravelPackageCard key={pkg.id} pkg={pkg} />
      ))}
      </CustomCarousel>
    </Box>
  );
};

export default TravelPackageList;
