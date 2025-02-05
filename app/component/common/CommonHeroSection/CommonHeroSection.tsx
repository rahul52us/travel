import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const PageHero = ({
  title,
  subtitle,
  bgImage = "url('https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
  lineColor = "red.300"
}) => {
  const floating = `${float} 3s ease-in-out infinite`;

  return (
    <Box
      minHeight={{ base: "60vh", md: "65vh",xl:"70vh" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      // bg={`linear-gradient(135deg, rgba(16, 14, 62, 0.6) 0%, rgba(42, 39, 136, 0.7) 100%), ${bgImage}`}
      bg={`linear-gradient(160deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.8) 100%), ${bgImage}`}
      bgPosition="center"
      bgSize="cover"
      position="relative"
      overflow="hidden"
      px={4}
      py={16}
    >
      {/* Animated background elements */}
      <Box
        position="absolute"
        w="200%"
        h="40px"
        bg={`linear-gradient(90deg, transparent 0%, ${lineColor} 50%, transparent 100%)`}
        top="20%"
        left="-50%"
        opacity="0.1"
        transform="rotate(-5deg)"
        animation={`${floating} 4s ease-in-out infinite`}
      />
      
      <VStack
        spacing={6}
        textAlign="center"
        maxW="1200px"
        color="white"
        px={4}
        zIndex={1}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="extrabold"
            letterSpacing="tighter"
            lineHeight="1.1"
            textShadow="0 4px 12px rgba(0, 0, 0, 0.3)"
          >
            {title}{" "}
            {/* <Text as="span" fontSize="1.2em" ml={2}>
              {emoji}
            </Text> */}
          </Heading>
        </motion.div>

        <Box
          height="4px"
          width="80px"
          bg={lineColor}
          borderRadius="full"
          boxShadow="0 2px 8px rgba(125, 200, 255, 0.3)"
          mb={4}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            maxW="800px"
            lineHeight="1.6"
            fontWeight="medium"
            textShadow="0 2px 4px rgba(0, 0, 0, 0.2)"
            px={{ base: 0, md: 8 }}
            animation={floating}
          >
            {subtitle}
          </Text>
        </motion.div>

        {/* Animated scroll indicator */}
        <Box
          position="absolute"
          bottom="40px"
          left="50%"
          transform="translateX(-50%)"
          fontSize="2xl"
          animation={`${float} 2s ease-in-out infinite`}
          opacity="0.8"
        >
          ↓
        </Box>
      </VStack>

      {/* Decorative gradient overlay */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        height="120px"
        bg="linear-gradient(transparent 0%, rgba(0, 0, 0, 0.3) 100%)"
      />
    </Box>
  );
};

// Usage example


export default PageHero;