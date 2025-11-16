import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { formatTitle } from "../../config/utils/function";
import stores from "../../store/stores";

const FeaturedDestination = observer(() => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0); // 🔥 triggers animation

  const {
    destinationStore: { getDestinations },
    locationStore: { location },
  } = stores;

  useEffect(() => {
    getDestinations({ page: 1 });
  }, [getDestinations]);

  useEffect(() => {
    if (!location?.data?.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % location.data.length);
      setFadeKey((prev) => prev + 1); // 🔥 triggers re-animation
    }, 5000);

    return () => clearInterval(interval);
  }, [location?.data]);

  const loc: any =
    location?.data?.length > 0 ? toJS(location.data[currentIndex]) : null;

  return (
    <Box position="relative" borderRadius="lg" overflow="hidden" h="400px">
      {/* Background Image with Fade + Zoom Animation */}
      <Box
        key={fadeKey} // 🔥 this forces animation on each change
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgImage={loc?.image?.url ? `url(${loc.image.url})` : ""}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        animation="fadeZoom 1.3s ease-out"
        zIndex={0}
      />

      {/* Dark Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.65) 100%)"
        zIndex={1}
      />

      {/* Text + Button Content */}
      <Flex
        key={fadeKey + '-text'} // 🔥 animate text separately
        position="relative"
        zIndex={2}
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        color="white"
        flexDirection="column"
        alignItems="center"
        px={4}
        w={{ base: "90%", md: "80%", lg: "800px" }}
        animation="slideFadeUp 0.9s ease-out"
      >
        <Heading as="h2" size={{ base: "xl", lg: "2xl" }} mb="4">
          {formatTitle(loc?.name)}
        </Heading>

        <Text fontSize={{ lg: "lg" }} mb="6">
          {loc?.description}
        </Text>

        <Button
          colorScheme="white"
          variant="outline"
          size={{ base: "md", lg: "lg" }}
          rightIcon={<FiArrowRight />}
          _hover={{ bg: "blackAlpha.500", color: "teal.200" }}
          onClick={() => router.push(`/destinations/${loc?.name}`)}
        >
          Explore More
        </Button>
      </Flex>

      {/* 🔥 CSS Keyframes */}
      <style>
        {`
          @keyframes fadeZoom {
            0% { opacity: 0; transform: scale(1.05); }
            100% { opacity: 1; transform: scale(1); }
          }

          @keyframes slideFadeUp {
            0% { opacity: 0; transform: translate(-50%, -45%); }
            100% { opacity: 1; transform: translate(-50%, -50%); }
          }
        `}
      </style>
    </Box>
  );
});

export default FeaturedDestination;
