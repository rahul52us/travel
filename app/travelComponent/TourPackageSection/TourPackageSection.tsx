import { Box } from "@chakra-ui/react";
import TravelpackagesCard from "../../component/common/TravelPackageCard/TravelPackageList";
import CustomSubHeading from "../common/CustomSubHeading/CustomSubHeading";

const TourPackageSection = () => {
  return (
    <Box my={"6rem"} py={4}>
      <CustomSubHeading highlightText="Starts Here ">
        Your Escape{" "}
      </CustomSubHeading>
      <TravelpackagesCard />
    </Box>
  );
};

export default TourPackageSection;
