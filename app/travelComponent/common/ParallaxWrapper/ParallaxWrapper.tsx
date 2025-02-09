import { Box } from "@chakra-ui/react";
import { Parallax } from "react-parallax";

const ParallaxWrapper = ({ bgImage, height = "400px", strength = 300, children }) => {
  return (
    <Box position="relative" borderRadius="lg" overflow="hidden">
      {/* Parallax Background */}
      <Parallax bgImage={bgImage} strength={strength} style={{ height }}>
        {/* Overlay for better readability */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%)"
        />
        
        {/* Content Container */}
        <Box position="relative" height={height} display="flex" alignItems="center" justifyContent="center">
          {children}
        </Box>
      </Parallax>
    </Box>
  );
};

export default ParallaxWrapper;
