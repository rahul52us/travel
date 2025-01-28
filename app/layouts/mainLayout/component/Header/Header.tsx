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
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState, useCallback } from "react";
import NavItemsLayout from "./component/NavItemsLayout";
import HeroNavButton from "./component/HeroNavButton";
import { HamburgerIcon } from "@chakra-ui/icons";
import AnimatedBox from "../../../../component/common/motion/Animatedbox/AnimatedBox";

const throttle = <T extends (...args: unknown[]) => void>(func: T, delay: number): T => {
  let lastCall = 0;
  return ((...args: Parameters<T>) => {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  }) as T;
};

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = useCallback(() => {
    throttle(() => {
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;

      setScrolling(scrollPercentage > 40);
    }, 100)();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      <AnimatedBox />

      {isMobile ? (
        <Flex
          alignItems="center"
          justify="space-between"
          px={4}
          py={1}
          bg={scrolling ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.5)"}
          color="white"
          position="fixed"
          top="3rem"
          left={0}
          right={0}
          zIndex={100}
          transition="background-color 0.3s ease"
        >
          <Image src="/images/logo.png" alt="Logo" h={scrolling ? "40px" : "50px"} />
          <IconButton
            icon={<HamburgerIcon />}
            onClick={onOpen}
            aria-label="Open menu"
            variant="ghost"
          />
        </Flex>
      ) : (
        // Desktop Header
        <Flex
          alignItems="center"
          justify="space-between"
          px={8}
          py={scrolling ? 2 : 4}
          bg={scrolling ? "rgba(0, 0, 0, 0.9)" : "transparent"}
          color="white"
          position="fixed"
          top={scrolling ? 0 : "1rem"}
          left={0}
          right={0}
          zIndex={100}
        >
          <Image src="/images/logo.png" alt="Logo" h={scrolling ? "60px" : "90px"} />
          <NavItemsLayout />
          <HeroNavButton />
        </Flex>
      )}

      {/* Mobile Drawer Navigation */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Center mt={8} mb={6}>
              <Image src="/images/logo.png" alt="Logo" h="60px" />
            </Center>
            <Box px={4}>
              <NavItemsLayout />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
