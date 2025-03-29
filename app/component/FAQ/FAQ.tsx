import { Box, Flex, Image } from "@chakra-ui/react";
import CustomSubHeading from "../../travelComponent/common/CustomSubHeading/CustomSubHeading";
import FAQAccordion from "./FAQAccordion/FAQAccordion";
import "./FAQAccordion/scroll.css";
import { observer } from "mobx-react-lite";

const FAQ = observer(() => {
  return (
    <Box
      mt={{ md: 10 }}
      pt={{ base: "3rem", md: "4rem" }}
      pb={{ base: "4rem", md: "6rem" }}
      // bg={"#E1F0EE"}
      bgGradient={"linear(to-r, teal.50 ,blue.100)"}
      position={"relative"}
    >
      <CustomSubHeading highlightText=" Need to Know ">
      Everything You{" "}
      </CustomSubHeading>
      <Flex justify="center" mt={{base:6,md:12}} maxH="26rem">
        <Box
          zIndex={2}
          w={{ base:"90%",md: "80%",lg:"70%" }}
          className="customScrollBar"
          overflow={"auto"}
          pr={{base:2,md:4}}
        >
          <FAQAccordion />
        </Box>
      </Flex>
      <Image
        src="/images/faqImage.png"
        alt="faqImage"
        w={{base:"180px",md:"340px"}}
        h={{base:"160px",md:"320px"}}
        mixBlendMode={"multiply"}
        objectFit={"cover"}
        position={"absolute"}
        bottom={"0"}
        left={6}
        zIndex={1}
      />
    </Box>
  );
});

export default FAQ;
