"use client";
import {
  Box,
  Flex,
  Image,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Center,
  Text,
} from "@chakra-ui/react";
import React from "react";
import NavItemsLayout from "./component/NavItemsLayout";
import HeroNavButton from "./component/HeroNavButton";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <Box shadow="sm" position="sticky" top="0" zIndex="1000" bg="white">
      <Box
        h={{ lg: "2rem", xl: "2.5rem" }}
        color="white"
        textAlign="center"
        bg="linear-gradient(to right, #00B5E2, #87CEEB)"
        fontSize={{ base: "xs", lg: "lg" }}
        p={2}
      >
        <Text fontWeight="bold">
          Embark on Your Next Adventure with CosmicTravels!
        </Text>
      </Box>

      {/* Header for Mobile */}
      <Flex
        alignItems="center"
        justify="space-between"
        px={{ base: 2, md: 6 }}
        py={1} // Reduced padding
        bg="white"
        display={{ base: "flex", md: "none" }}
        h="4rem" // Reduced height
      >
        <Image
          src="/images/logo3.png"
          alt="best child psychologist in noida"
          h={{ base: "43px", sm: "48px" }} // Reduced logo size
          cursor="pointer"
          onClick={() => router.push("/")}
          mr="auto"
        />
        <Flex gap={2}>
          <IconButton
            icon={<HamburgerIcon fontSize={"22px"} />} // Reduced icon size
            onClick={onOpen}
            aria-label="Open menu"
            variant="ghost"
            size={"md"} // Adjusted size
          />
        </Flex>
      </Flex>

      {/* Drawer for Mobile Navigation */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            {/* Centered Logo */}
            <Center mt={6} mb={4}>
              <Image
                src="/images/logo3.png"
                alt="Cosmic Travels"
                h="50px" // Reduced logo size in mobile menu
                onClick={() => router.push("/")}
              />
            </Center>
            {/* Navigation Items */}
            <Box px={4}>
              <NavItemsLayout onClose={onClose} />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Header for Desktop */}
      <Flex
        alignItems="center"
        justify="space-between"
        px={{ lg: 5, xl: 8 }}
        py={2.5} // Reduced padding
        display={{ base: "none", md: "flex" }}
        // h="4rem" // Reduced height
      >
        <Image
          src="/images/logo3.png"
          alt="Cosmic Travals"
          h={{ base: "35px", lg: "50px", xl: "60px" }} // Reduced logo size
          cursor={"pointer"}
          onClick={() => router.push("/")}
        />
        <Flex flex={1} justify="center" pr={2}>
          <NavItemsLayout />
        </Flex>
        <HeroNavButton />
      </Flex>
    </Box>
  );
};

export default Header;