"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import CircleBadge from "../../../../component/common/CircleBadge/CircleBadge";
import CustomSubHeading from "../../../../travelComponent/common/CustomSubHeading/CustomSubHeading";

const badgeData = [
  {
    price: "50,000",
    label: "Standard",
    icon: "★",
    gradientStart: "green.50",
    gradientEnd: "green.100",
    borderColor: "green.300",
    textColor: "green.700",
    iconColor: "green.700",
    bgColor: "green.200",
  },
  {
    price: "60,000",
    label: "Superior",
    icon: "★",
    gradientStart: "blue.50",
    gradientEnd: "blue.100",
    borderColor: "blue.300",
    textColor: "blue.700",
    iconColor: "blue.700",
    bgColor: "blue.200",
  },
  {
    price: "70,000",
    label: "Premium",
    icon: "★",
    gradientStart: "red.50",
    gradientEnd: "red.100",
    borderColor: "red.300",
    textColor: "red.700",
    iconColor: "red.700",
    bgColor: "red.200",
  },
  {
    price: "75,000",
    label: "Luxury",
    icon: "★",
    gradientStart: "purple.50",
    gradientEnd: "purple.100",
    borderColor: "purple.300",
    textColor: "purple.700",
    iconColor: "purple.700",
    bgColor: "purple.200",
  },
  {
    price: "100,000",
    label: " Group",
    icon: "★",
    gradientStart: "orange.50",
    gradientEnd: "orange.100",
    borderColor: "orange.300",
    textColor: "orange.700",
    iconColor: "orange.700",
    bgColor: "orange.200",
  },
];
const BudgetWrapper = () => {
  return (
    <Box
    // bg={'linear-gradient(135deg, #097899 0%, #2aa6c6 100%)'} 
    //  bgGradient={'linear(to-r, teal.50,blue.100)'}
     bgGradient="linear(to-r, #d9f4f8ff, #D7F1F3, #B3E2E8, #89D1DB)"
    >

    <Box
      padding={{ base: "12px", md: "48px" }}
      py={{base:"24px",md:"48px"}}
      // bgGradient="linear(to-tr, teal.50, white)"
      // boxShadow="2xl"
      // borderRadius="3xl"
      maxWidth="90%"
      mx="auto"
      textAlign="center"
      // border="1px solid"
      borderColor="gray.200"
      overflow="hidden"
    >
      {/* Heading Section */}
      <Box marginBottom="32px">
      <CustomSubHeading highlightText='Every Budget '>Holiday For  </CustomSubHeading>

        <Box
          height="3px"
          width="80px"
          bgGradient="linear(to-r, teal.500, teal.300)"
          margin="auto"
          marginBottom="16px"
          borderRadius="lg"
        />
        <Text fontSize="lg" color="gray.600" maxWidth="600px" margin="auto">
          {`Discover the best travel options tailored for your budget. Whether
          you're planning a luxury escape or a cost-effective adventure, we’ve
          got you covered!`}
        </Text>
      </Box>

      {/* Badge Display Section */}
      <Flex
        flexWrap="wrap"
        justifyContent={{ base: "center", md: "center" }}
        gap={{base:6,lg:16}}
        padding={{lg:"16px"}}
        // bg="white"
        borderRadius="xl"
      >
        {badgeData.map((badge, index) => (
          <CircleBadge
            key={index}
            price={badge.price}
            label={badge.label}
            icon={badge.icon}
            gradientStart={badge.gradientStart}
            gradientEnd={badge.gradientEnd}
            borderColor={badge.borderColor}
            textColor={badge.textColor}
            iconColor={badge.iconColor}
            bgColor={badge.bgColor}
          />
        ))}
      </Flex>
    </Box>
    </Box>
  );
};

export default BudgetWrapper;
