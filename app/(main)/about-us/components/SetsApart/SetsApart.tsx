import { Box, Center, Container, Grid, GridItem, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import CustomSubHeading from '../../../../travelComponent/common/CustomSubHeading/CustomSubHeading';


const MotionBox = motion(Box);

const features = [
    {
      icon: "/icons/aboutUs/destination.png",
      title: "Personalized Itineraries",
      description: "Tailored experiences that match your unique interests and preferences",
    },
    {
      icon:"/icons/aboutUs/expertise.png",
      title: "Local Expertise",
      description: "Insider access to hidden gems and authentic experiences",
    },
    {
      icon: "/icons/aboutUs/customer-service.png",
      title: "Unmatched Service",
      description: "Dedicated support from start to finish for a seamless journey",
    },
  ]

const SetsApart = () => {
  return (
    <Box py={{base:4,lg:12}}>
    <Container maxW={{base:"95%",lg:"80%"}}>
      <VStack spacing={{base:2,lg:4}} textAlign="center" mb={12}>
        <CustomSubHeading highlightText='Us Apart?'>
        What Sets
        </CustomSubHeading>
        <Text color="gray.600" maxW={{lg:"800px"}} fontSize={{lg:'lg'}}>
          Our passion for Europe and unwavering commitment to excellence sets us apart. With extensive knowledge, expertise, and local connections, we curate bespoke itineraries that reflect each traveler&apos;s unique interests.
        </Text>
      </VStack>

      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={{base:4,lg:8}}>
        {features.map((feature, i) => (
          <MotionBox
            key={i}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <GridItem
              bg="brand.200"
              borderRadius="xl"
              p={8}
              boxShadow="md"
              borderWidth={1}
              textAlign="center"
            >
                <Center>
              <Image src={feature.icon} alt={feature.title} w={12} h={12} color="teal.500" mb={4} objectFit={'cover'} />
                </Center>
              <Heading size="md" mb={3} color="brand.100">
                {feature.title}
              </Heading>
              <Text color="gray.600">{feature.description}</Text>
            </GridItem>
          </MotionBox>
        ))}
      </Grid>
    </Container>
  </Box>
  )
}

export default SetsApart
