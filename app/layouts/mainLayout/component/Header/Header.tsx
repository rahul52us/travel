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
} from "@chakra-ui/react";
import React from "react";
import NavItemsLayout from "./component/NavItemsLayout";
import HeroNavButton from "./component/HeroNavButton";
import { HamburgerIcon } from "@chakra-ui/icons";
import AnimatedBox from "../../../../component/common/motion/Animatedbox/AnimatedBox";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      {/* Top Bar */}
      <AnimatedBox  />
      {/* Header for Mobile */}
      <Flex
        alignItems="center"
        justify="space-between"
        px={4}
        py={1}
        bg="white"
        display={{ base: "flex", md: "none" }}
      >
        <Image src="/images/logo.png" alt="Logo" h="50px" />
        <IconButton
          icon={<HamburgerIcon />}
          onClick={onOpen}
          aria-label="Open menu"
          variant="ghost"
        />
      </Flex>
      {/* Drawer for Mobile Navigation */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            {/* Centered Logo */}
            <Center mt={8} mb={6}>
              <Image src="/images/logo.png" alt="Logo" h="60px" />
            </Center>
            {/* Navigation Items */}
            <Box px={4}>
              <NavItemsLayout />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* Header for Desktop */}
      <Flex
        alignItems="center"
        justify="space-around"
        px={8}
        py={4}
        display={{ base: "none", md: "flex" }}
        mt={10}
      >
        <Image src="/images/logo.png" alt="Logo" h="90px" />
        <NavItemsLayout />
        <HeroNavButton />
      </Flex>
    </Box>
  );
};

export default Header;
