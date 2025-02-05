import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { FaCheckDouble, FaCogs, FaCommentDots, FaFileUpload } from "react-icons/fa";
import CustomSubHeading from "../../../common/CustomSubHeading/CustomSubHeading";

const processSteps = [
  {
    step: 1,
    title: "Consultation",
    content: "Discuss your travel plans with our visa experts.",
    icon: FaCommentDots,
    color:"#38A169"
  },
  {
    step: 2,
    title: "Documentation",
    content: "Submit documents through our secure platform.",
    icon: FaFileUpload,
    color:"#3182ce"

  },
  {
    step: 3,
    title: "Processing",
    content: "We handle embassy communications.",
    icon: FaCogs,
    color:"#805AD5"

  },
  {
    step: 4,
    title: "Approval",
    content: "Receive visa and start your journey!",
    icon: FaCheckDouble,
    color:"#E53E3E"

  },
];

const ProcessStep = ({ step, title, content, icon: Icon,color}) => {
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Flex direction="column" align="center" flex={1} position="relative">

      {/* Step circle */}
      <Box
        position="relative"
        w="50px"
        h="50px"
        border={'2px solid'}
        borderColor={color}
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb={4}
        zIndex={2}
      >
        <Icon size={24} color={color} />
        <Text position="absolute" bottom="-24px" fontSize="sm" fontWeight="semibold" color={textColor}>
          Step {step}
        </Text>
      </Box>

      {/* Content */}
      <Box pt={6} px={4} textAlign="center">
        <Heading fontSize="xl" mb={2} color={useColorModeValue("gray.800", "white")}>
          {title}
        </Heading>
        <Text fontSize="md" color={textColor}>
          {content}
        </Text>
      </Box>
    </Flex>
  );
};

const ProcessTimeline = () => {
  const containerBg = useColorModeValue("gray.50", "gray.800");

  return (
    <Box py={12} px={[4, 8]} bg={containerBg} borderRadius="2xl" my={20}>
        <CustomSubHeading highlightText="Works?">
        How It 
        </CustomSubHeading>
      <Flex 
        justify="space-between" 
        position="relative"
        maxW="1200px" 
        mx="auto"
        flexWrap="wrap"
        gap={8}
        mt={12}
      >
        {processSteps.map((step) => (
          <ProcessStep
            key={step.step}
            {...step}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default ProcessTimeline;
