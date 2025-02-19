"use client";

import {
    Box,
    Button,
    Container,
    Flex,
    Grid,
    Heading,
    Image,
    Text,
    VStack
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import PageHero from "../../../component/common/CommonHeroSection/CommonHeroSection";
import ServicesSection from "./ServicesSection/ServicesSection";
import SetsApart from "./SetsApart/SetsApart";


export default function AboutUsPage() {

//   const coreValues = [
//     { icon: FiHeart, title: "Passion", color: "red.400" },
//     { icon: FiGlobe, title: "Sustainability", color: "green.400" },
//     { icon: FiUsers, title: "Community", color: "blue.400" },
//     { icon: FiStar, title: "Excellence", color: "yellow.400" },
//   ];

  return (
    <Box>
      {/* Hero Section */}
      <PageHero
        title="About Us"
        lineColor="cyan.300"
        subtitle={  
            <>  
              Crafting unforgettable journeys across diverse landscapes, rich cultures, and 
              <Text as="span" color="cyan.200" fontWeight="semibold" mx={1.5}>  
                24/7 storied histories 
              </Text>  
              
            </>  
          }
        bgImage="url('https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      />


  

      {/* Mission Section */}
      <Box  py={{base:4,lg:16}} my={8}>
        <Container maxW={{base:"95%",lg:"80%"}} mx={'auto'}>
        <Heading size={{base:"lg",lg:"xl"}} color="teal.600" textAlign={'center'} display={{base:"block",lg:"none"}}>
                Our Mission
              </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={{lg:8}}>

            <Box w={{lg:'95%'}} mt={2}>
              <Image
                src="/images/travel/about-1.jpg"
                alt="Our Mission"
                objectFit={'cover'}
                borderRadius="xl"
              />
            </Box>
            <VStack align="start" spacing={6}>
              
              <Heading size={{base:"lg",lg:"xl"}} color="teal.600" display={{base:"none",lg:"block"}}>
                Our Mission
              </Heading>
              <Text fontSize={{lg:"lg"}} mt={4} color="gray.600">
                At Cosmic Travel, our mission is to provide unparalleled travel experiences that inspire, educate, and enchant our clients. We are dedicated to showcasing the beauty, diversity, and cultural heritage of Europe while ensuring the highest standards of service, authenticity, and sustainability.
              </Text>
              <Button
                colorScheme="teal"
                size={{base:"md",lg:"lg"}}
                rightIcon={<FiArrowRight />}
                variant="outline"
              >
                Learn More
              </Button>
            </VStack>
          </Grid>
        </Container>
      </Box>

      {/* What Sets Us Apart Section */}

      <SetsApart/>
     

      {/* Services Section */}
    <ServicesSection/>

      {/* CTA Section */}
      <Box py={{base:6,lg:16}} position="relative" overflow="hidden">
        <Container maxW="1200px">
          <Flex
            bg="teal.600"
            borderRadius="3xl"
            p={{base:4,lg:8}}
            position="relative"
            overflow="hidden"
            align="center"
            direction={{ base: "column", md: "row" }}
          >
            <Box flex={1} color="white" zIndex={1} p={{base:2,lg:8}}>
              <Heading size={{base:"md",lg:"xl"}} mb={4}>
                Ready for Your European Odyssey?
              </Heading>
              <Text fontSize={{lg:"xl"}} mb={8}>
                Let us guide you through Europe&apos;s timeless wonders and create unforgettable memories
              </Text>
              <Button
                colorScheme="white"
                variant="outline"
                size={{base:"md",lg:"lg"}}
                rightIcon={<FiArrowRight />}
                _hover={{ bg: "white", color: "teal.600" }}
              >
                Contact Us Today
              </Button>
            </Box>
            <Box flex={1} position="relative" h="400px">
              <Image
                src="/images/travel/cta-image.jpg"
                alt="Adventure Awaits"
                w="100%"
                h="100%"
                objectFit="cover"
                borderRadius="2xl"
              />
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}