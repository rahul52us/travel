import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const MotionBox = motion(Box);

const LazyLoadWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box ref={ref} position="relative" overflow="hidden">
      <AnimatePresence>
        {isVisible && (
          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {children}
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default LazyLoadWrapper;

// Usage Example
// Wrap any component you want to lazy-load
// <LazyLoadWrapper>
//   <YourComponent />
// </LazyLoadWrapper>
