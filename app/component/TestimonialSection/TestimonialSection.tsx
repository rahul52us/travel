import { Box, Heading, Text } from "@chakra-ui/react";
import StatsSection from "../../travelComponent/StatsSection/StatsSection";
import ReviewsList from "../../(main)/testimonials/components/ReviewCard/ReviewCard";
import { observer } from "mobx-react-lite";

const TestimonialSection = observer(() => {
  return (
    <Box my={12} bgGradient={"linear(to-b, cyan.50 , blue.100)"}>
      <Box
        maxW={{ md: "90%" }}
        py={{ base: "3rem", md: "5rem" }}
        px={{ base: 4, md: 0 }}
        mx={"auto"}
      >
        <Heading
          textAlign={"center"}
          as={"h2"}
          fontWeight={400}
          fontSize={{ base: "24px", md: "48px" }}
          my={{ base: 1, md: 2 }}
          px={1}
        >
          Inspired Travelers Share{" "}
          <Text as={"span"} fontWeight={600}>
            Their Stories
          </Text>
        </Heading>
        <ReviewsList />
        <StatsSection />
      </Box>
    </Box>
  );
});

export default TestimonialSection;
