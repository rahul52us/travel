import { Box, Flex, Grid, GridItem, Icon, Text } from "@chakra-ui/react";
import { animate, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaRoute } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

interface AnimatedNumberProps {
  value: number;
  duration?: number; // Optional duration
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 2,
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplayValue(Math.floor(v)), // Update the display value as the animation progresses
    });

    return controls.stop; // Clean up animation when the component unmounts
  }, [value, duration]);

  return <motion.span>{displayValue}</motion.span>;
};

interface Stat {
  value: number;
  label: string;
}

interface StatsGridProps {
  statsData: Stat[];
}

const StatsGrid: React.FC<StatsGridProps> = ({ statsData }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Grid
      ref={ref}
      templateColumns={{ base: "1fr 1fr", md: "repeat(4, 1fr)" }}
      mt={{ base: 8, lg: 14 }}
      gap={{ base: 8, md: 8, lg: 4 }}
    >
      {statsData.map((stat, index) => (
        <GridItem
          key={index}
          colSpan={{
            base: index === statsData.length - 1 ? 2 : 1,
            md: 1,
          }}
          justifySelf={{
            base: index === statsData.length - 1 ? "center" : "unset",
            md: "unset",
          }}
        >
          <Box
            borderRight={
              index < statsData.length - 1 ? "1px solid #DEDEDE" : "none"
            }
            pr={{ lg: 1 }}
          >
            <Flex justifyContent="center">
              <Icon
                boxSize={{ base: 10, md: 14 }}
                color={"blue.400"}
                as={FaRoute}
                bg={"blue.100"}
                p={3}
                rounded={"30%"}
              />
            </Flex>
            <Text
              textAlign="center"
              fontSize={{ base: "2rem", md: "2.4rem", lg: "3rem" }}
              fontWeight={600}
              lineHeight={{ base: "3rem" }}
              mt={4}
            >
              {inView ? <AnimatedNumber value={stat.value} /> : 0}+
            </Text>
            <Text
              color="gray.600"
              textAlign="center"
              fontSize={{ base: "xs", lg: "sm" }}
              mt={1}
            >
              {stat.label}
            </Text>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
};

export default StatsGrid;
