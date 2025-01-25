import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import CardComponent3 from "../CardComponent3/CardComponent3";
import CustomButton from "../CustomButton/CustomButton";
import CustomCarousel from "../CustomCarousal/CustomCarousal";

const data = [
  {
    bgGradient: "linear(to-br, #FFB8B2 80%, #FFFFFF)",
    borderColor: "#C686819E",
    rotatedText: "DEPRESSION",
    mainText: "“Feeling Low or Just a Rough Patch?”",
    imageSrc: "images/depressionImage2.png",
  },
  {
    bgGradient: "linear(to-br, #86C6F4 80%, #FFFFFF)",
    borderColor: "#819EC6",
    rotatedText: "FOR BIPOLAR DISORDER",
    mainText: "“Feeling Overwhelmed or Nervous?”",
    imageSrc: "images/bipolar.png",
  },
  {
    bgGradient: "linear(to-br, #B2D8FF 80%, #FFFFFF)",
    borderColor: "#819EC6",
    rotatedText: "ANXIETY",
    mainText: "“Feeling Overwhelmed or Nervous?”",
    imageSrc: "images/bipolar.png",
  },
  {
    bgGradient: "linear(to-br, #B2D8FF 80%, #FFFFFF)",
    borderColor: "#819EC6",
    rotatedText: "ANXIETY",
    mainText: "“Feeling Overwhelmed or Nervous?”",
    imageSrc: "images/bipolar.png",
  },
  {
    bgGradient: "linear(to-br, #B2D8FF 80%, #FFFFFF)",
    borderColor: "#819EC6",
    rotatedText: "ANXIETY",
    mainText: "“Feeling Overwhelmed or Nervous?”",
    imageSrc: "images/bipolar.png",
  },
  // {
  //   bgGradient: "linear(to-br, #B2D8FF 80%, #FFFFFF)",
  //   borderColor: "#819EC6",
  //   rotatedText: "ANXIETY",
  //   mainText: "“Feeling Overwhelmed or Nervous?”",
  //   imageSrc: "images/anxietyImage.png",
  // },
];

const KnowYourselfSection = () => {
  const [activeCard, setActiveCard] = useState(0); // Default to the first card
  const buttonSize = useBreakpointValue({ base: "md", md: "xl" });
  const buttonWidth = useBreakpointValue({ base: "170px", md: "200px" });
  const noOfSlides = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  return (
    <Box py={{ base: 2, md: 8 }}>
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1.15fr" }}
        gap={2}
        alignItems="center"
      >
        {/* Left Section */}
        <Box py={6} maxW={{ base: "95%", lg: "90%" }} px={2} ml={{ md: 8 }}>
          <Text
            textTransform="uppercase"
            color="#DF837C"
            textAlign={{ base: "center", lg: "start" }}
            fontSize={{ base: "14px", md: "16px" }}
          >
            Know Yourself Better
          </Text>
          <Heading
            as="h2"
            fontWeight={400}
            fontSize={{ base: "26px", md: "52px" }}
            my={3}
            lineHeight="1.2"
            textAlign={{ base: "center", lg: "start" }}
          >
            Not Sure What you <br /> are{" "}
            <Text as="span" fontWeight={600}>
              struggling with?
            </Text>
          </Heading>
          <Text
            color="#434343"
            fontSize={{ base: "sm", md: "18px" }}
            mt={4}
            lineHeight={{ base: "26px", md: "32px" }}
            textAlign={{ base: "center", lg: "start" }}
          >
            Take a quick, simple assessment to see if your symptoms match common
            mental health conditions. It’s not a diagnosis, but a helpful tool
            to understand what’s going on. Just answer a few easy questions, and
            we’ll guide you from there.
          </Text>
          <Flex justify={{ base: "center", lg: "start" }}>
            <CustomButton
              icon={LuArrowUpRight}
              onClick={() => alert("Button Clicked!")}
              mt={6}
              size={buttonSize}
              width={buttonWidth}
            >
              Take Assessment
            </CustomButton>
          </Flex>
        </Box>

        <Box position="relative" overflow="hidden">
          {/* <Grid
        templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
        gap={2}

        onMouseLeave={() => setActiveCard(0)} // Reset to the first card on mouse leave
      >
        {data.map((item, index) => (
          <CardComponent3
            key={index}
            bgGradient={item.bgGradient}
            borderColor={item.borderColor}
            rotatedText={item.rotatedText}
            mainText={item.mainText}
            imageSrc={item.imageSrc}
            isActive={activeCard === index} // Check if this card is active
            onMouseEnter={() => setActiveCard(index)} // Set active card on hover
          />
        ))}
      </Grid> */}

          <Flex
            gap={2}
            mt={4}
            display={{ base: "none", lg: "flex" }}
            // onMouseLeave={() => setActiveCard(0)} // Reset to the first card on mouse leave
          >
            {data.map((item, index) => (
              <CardComponent3
                key={index}
                bgGradient={item.bgGradient}
                borderColor={item.borderColor}
                rotatedText={item.rotatedText}
                mainText={item.mainText}
                imageSrc={item.imageSrc}
                isActive={activeCard === index} // Check if this card is active
                onMouseEnter={() => setActiveCard(index)} // Set active card on hover
              />
            ))}
          </Flex>
          <Box display={{ base: "block", lg: "none" }}>
            <CustomCarousel slidesToShow={noOfSlides} autoplay={true} showArrows={false}>
              {data.map((item, index) => (
                <CardComponent3
                  key={index}
                  bgGradient={item.bgGradient}
                  borderColor={item.borderColor}
                  rotatedText={item.rotatedText}
                  mainText={item.mainText}
                  imageSrc={item.imageSrc}
                  isActive={activeCard === index} // Check if this card is active
                  onMouseEnter={() => setActiveCard(index)} // Set active card on hover
                />
              ))}
            </CustomCarousel>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default KnowYourselfSection;
