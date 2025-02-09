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
import { headerLargeHeight, headerSmallHeight } from "./utils/constant";
// import AnimatedBox from "../../../../component/common/motion/Animatedbox/AnimatedBox";

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
      // const documentHeight = document.documentElement.scrollHeight;
      // const windowHeight = window.innerHeight;
      // const scrollY = window.scrollY;
      // const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrolling(true);
    }, 100)();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      {/* <AnimatedBox /> */}

      {isMobile ? (
        <Flex
          alignItems="center"
          justify="space-between"
          px={4}
          py={1}
          color="white"
          bgColor={'white'}
          position="fixed"
          // top="3rem"
          left={0}
          right={0}
          top={0}
          zIndex={100}
          height={headerSmallHeight}
        >
          <Image src="/images/logo3.png" alt="Logo" h={'40px'} />
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
          py={2}
          bg={'white'}
          color="white"
          position="fixed"
          top={0}
          left={0}
          right={0}
          zIndex={100}
          height={headerLargeHeight}
        >
          <Image src="/images/logo3.png" alt="Logo" h={'60px'} />
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
