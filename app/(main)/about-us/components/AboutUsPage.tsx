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
  VStack,
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import PageHero from "../../../component/common/CommonHeroSection/CommonHeroSection";
import ServicesSection from "./ServicesSection/ServicesSection";
import SetsApart from "./SetsApart/SetsApart";
import { useRouter } from "next/navigation";
import { main } from "../../../config/utils/routes";

export default function AboutUsPage() {
  const router = useRouter();
  return (
    <Box>
      {/* Hero Section */}
      <PageHero
        title="About Us"
        lineColor="brand.100"
        subtitle={
          <>
            Crafting unforgettable journeys across diverse landscapes, rich
            cultures, and
            <Text as="span" color="brand.100" fontWeight="semibold" mx={1.5}>
              24/7 storied histories
            </Text>
          </>
        }
        bgImage="url('https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      />

      {/* Mission Section */}
      <Box py={{ base: 4, lg: 16 }} my={{ base: 4, lg: 8 }}>
        <Container maxW={{ base: "95%", lg: "80%" }} mx={"auto"}>
          <Heading
            size={{ base: "lg", lg: "xl" }}
            color="brand.100"
            textAlign={"center"}
            display={{ base: "block", lg: "none" }}
          >
            Our Mission
          </Heading>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap={{ lg: 8 }}
          >
            <Box w={{ lg: "95%" }} mt={2}>
              <Image
                src="/images/travel/about-1.jpg"
                alt="Our Mission"
                objectFit={"cover"}
                borderRadius="xl"
              />
            </Box>
            <VStack align="start" spacing={6}>
              <Heading
                size={{ base: "lg", lg: "xl" }}
                color="brand.100"
                display={{ base: "none", lg: "block" }}
              >
                Our Mission
              </Heading>
              <Text fontSize={{ lg: "lg" }} mt={4} color="gray.600">
                {`Our mission is to create unforgettable travel experiences with
                Cosmic Travels, aiming beyond mere vacations. Such journeys
                should transform one's travel into an experience intertwined
                with adventure and personal growth, relaxation and discovery,
                where every traveler gleefully gains inspiration. Our goal is to
                design highly personalized itinerates illustrating your
                distinctive interests with culturally enriching interactions,
                unforgettable sights, and memorable experiences. Instead of
                trips, focus on life-changing experiences`}
              </Text>
              <Button
                colorScheme="brand"
                size={{ base: "md", lg: "lg" }}
                rightIcon={<FiArrowRight />}
                variant="outline"
                display="none"
              >
                Learn More
              </Button>
            </VStack>
          </Grid>
        </Container>
      </Box>

      {/* What Sets Us Apart Section */}

      <SetsApart />

      {/* Services Section */}
      <ServicesSection />

      {/* CTA Section */}
      <Box py={{ base: 6, lg: 12 }} position="relative" overflow="hidden">
        <Container maxW={{ lg: "85%" }}>
          <Flex
            bg="teal.600"
            borderRadius="3xl"
            p={{ base: 4, lg: 0 }}
            position="relative"
            overflow="hidden"
            align="center"
            direction={{ base: "column", md: "row" }}
            backgroundImage="url('https://images.unsplash.com/photo-1609601540898-52ca92508901?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            h={{ lg: "20rem" }}
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bg: "black",
              opacity: 0.3, // Adjust for readability
              borderRadius: "3xl",
            }}
          >
            <Box flex={1} color="white" zIndex={1} p={{ base: 2, lg: 8 }}>
              <Heading size={{ base: "md", lg: "xl" }} mb={4} textShadow={"md"}>
                Ready for Your Perfect Escape?
              </Heading>
              <Text
                fontSize={{ lg: "xl" }}
                mb={{ base: 4, lg: 8 }}
                textShadow={"md"}
              >
                Let us guide you to serene destinations and create relaxing
                memories worldwide
              </Text>
              <Button
                colorScheme="white"
                variant="outline"
                size={{ base: "md", lg: "lg" }}
                rightIcon={<FiArrowRight />}
                _hover={{ bg: "blackAlpha.500", color: "brand.100" }}
                onClick={() => router.push(main.contact)}
              >
                Contact Us Today
              </Button>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
