import { Avatar, Box, Heading, HStack, ScaleFade, Text, VStack } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import stores from "../../../../store/stores";

const RevireCard2 = observer(() => {
  const {testimonialStore : {testimonials}} = stores
  return (
      <Box>
        <Heading fontSize={{base:"2xl",lg:"3xl"}} mb={{base:4,lg:8}}>
          Memorable Experiences
        </Heading>
        <VStack spacing={{base:4,lg:8}}>
          {testimonials?.data?.map((testimonial, index) => (
            <ScaleFade key={testimonial.id} in={true} delay={index * 0.1}>
              <Box
                p={{base:4,lg:6}}
                borderLeft="4px solid"
                borderColor="teal.500"
                bg={"white"}
                borderRadius="md"
                boxShadow="md"
              >
                <Text fontSize={{base:"sm",lg:"md"}} mb={4} noOfLines={4}>
                &apos;{testimonial.description}&apos;
                </Text>
                <HStack>
                  <Avatar size={{base:"sm",lg:"md"}} src={testimonial?.image?.url} name={testimonial?.name}/>
                  <Box>
                    <Text fontWeight="bold" fontSize={{base:"sm",lg:"md"}}>{testimonial.name}</Text>
                    <Text fontSize={{base:"xs",lg:"sm"}} color="gray.500">{testimonial.profession}</Text>
                  </Box>
                </HStack>
              </Box>
            </ScaleFade>
          ))}
        </VStack>
      </Box>
  );
});

export default RevireCard2;
