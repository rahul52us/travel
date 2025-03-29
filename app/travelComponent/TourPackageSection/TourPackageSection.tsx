import { Box } from "@chakra-ui/react";
import TravelpackagesCard from "../../component/common/TravelPackageCard/TravelPackageList";
import CustomSubHeading from "../common/CustomSubHeading/CustomSubHeading";
import { observer } from "mobx-react-lite";

const TourPackageSection = observer(() => {
  return (
    <Box my={{base:"30px",lg:"60px"}} py={4}>
      <CustomSubHeading highlightText="Starts Here ">
        Your Escape{" "}
      </CustomSubHeading>
      <TravelpackagesCard />
    </Box>
  );
});

export default TourPackageSection;
