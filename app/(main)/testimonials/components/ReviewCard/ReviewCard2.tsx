import { Avatar, Box, Heading, HStack, ScaleFade, Text, VStack } from "@chakra-ui/react";

const testimonials = [
  {
    id: 1,
    text: "The cultural immersion experience was absolutely transformative. We connected with local communities in ways I never imagined possible.",
    name: "Michael Chen",
    role: "Adventure Traveler",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    text: "The guided tours were incredible! Our guide was knowledgeable and made the experience truly unforgettable.",
    name: "Sophia Patel",
    role: "Travel Enthusiast",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    text: "The guided tours were incredible! Our guide was knowledgeable and made the experience truly unforgettable.",
    name: "Sophia Patel",
    role: "Travel Enthusiast",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    text: "The guided tours were incredible! Our guide was knowledgeable and made the experience truly unforgettable.",
    name: "Sophia Patel",
    role: "Travel Enthusiast",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    text: "The guided tours were incredible! Our guide was knowledgeable and made the experience truly unforgettable.",
    name: "Sophia Patel",
    role: "Travel Enthusiast",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    text: "The guided tours were incredible! Our guide was knowledgeable and made the experience truly unforgettable.",
    name: "Sophia Patel",
    role: "Travel Enthusiast",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    text: "The guided tours were incredible! Our guide was knowledgeable and made the experience truly unforgettable.",
    name: "Sophia Patel",
    role: "Travel Enthusiast",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    text: "I loved the food and cultural experiences. It felt like living as a local rather than just visiting.",
    name: "Daniel Rivera",
    role: "Culinary Explorer",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg"
  }
];

const RevireCard2 = () => {
  return (
      <Box>
        <Heading fontSize="3xl" mb={8}>
          Memorable Experiences
        </Heading>
        <VStack spacing={8}>
          {testimonials.map((testimonial, index) => (
            <ScaleFade key={testimonial.id} in={true} delay={index * 0.1}>
              <Box
                p={6}
                borderLeft="4px solid"
                borderColor="teal.500"
                bg={"white"}
                borderRadius="md"
                boxShadow="md"
              >
                <Text fontSize="md" mb={4} noOfLines={4}>
                &apos;{testimonial.text}&apos;
                </Text>
                <HStack>
                  <Avatar size="md" src={testimonial.avatar} />
                  <Box>
                    <Text fontWeight="bold">{testimonial.name}</Text>
                    <Text fontSize="sm" color="gray.500">{testimonial.role}</Text>
                  </Box>
                </HStack>
              </Box>
            </ScaleFade>
          ))}
        </VStack>
      </Box>
  );
};

export default RevireCard2;
