"use client";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsHeadsetVr } from "react-icons/bs";
import {
  FaCertificate,
  FaChevronRight,
  FaEnvelope,
  FaGlobe,
  FaPhone,
  FaUser,
} from "react-icons/fa";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;
const DelayedModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Form submitted');
  //   closeModal();
  // };

  const accentGradient = "linear-gradient(135deg, #319795 0%, #3182CE 100%)";
  const floatAnimation = `${float} 6s ease-in-out infinite`;

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      motionPreset="slideInBottom"
      size={"5xl"}
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        borderRadius="3xl"
        overflow="hidden"
        boxShadow="2xl"
        // border="1px solid"
        // borderColor="whiteAlpha.300"
      >
        <ModalBody p={0}>
          <Flex>
            {/* Left Side - Interactive Feature Showcase */}
            <Box
              w="40%"
              bgImage="url('https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80')"
              bgSize="cover"
              bgPosition="center"
              position="relative"
              color="white"
              cursor="pointer"
              _hover={{ "& .feature-item": { transform: "translateX(10px)" } }}
            >
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgGradient="linear(45deg, rgba(49, 130, 206, 0.6) 0%, rgba(49, 151, 149, 0.6) 100%)"
                p={8}
              >
                <MotionBox
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  mt={24}
                >
                  <AnimatedFeatureItem
                    icon={BsHeadsetVr}
                    title="Tailor-Made Adventures"
                    delay={0.3}
                  />
                  <AnimatedFeatureItem
                    icon={FaCertificate}
                    title="96% Visa Assurance"
                    delay={0.6}
                  />
                  <AnimatedFeatureItem
                    icon={BsHeadsetVr}
                    title="Global Support Network"
                    delay={0.9}
                  />
                </MotionBox>

                {/* Floating Elements */}
                <MotionBox
                  position="absolute"
                  top="10%"
                  right="-30px"
                  w="60px"
                  h="60px"
                  borderRadius="full"
                  bg="whiteAlpha.400"
                  animation={floatAnimation}
                />
              </Box>
            </Box>

            {/* Right Side - Modern Form */}
            <Box
              w="60%"
              p={10}
              bgGradient="linear(to-br, white, gray.50)"
              position="relative"
            >
              <Box position="relative" zIndex={1}>
                <Flex justify={'space-between'} align={'center'}>

                <Heading
                  fontSize="3xl"
                  mb={6}
                  pt={4}
                  bgGradient={accentGradient}
                  bgClip="text"
                  fontWeight="bold"
                >
                  Craft Your Adventure
                </Heading>
                <Box>
                <Image
                src="/images/logo3.png" 
                alt="logo"
                objectFit={'cover'}
                h={{base:"70px",lg:"80px"}}
                w={'100%'}
                mx={{ base: "auto", md: 0 }}
                />
                </Box>

                  </Flex>
                <Stack spacing={6}>
                  <AnimatedInput
                    icon={FaUser}
                    label="Full Name"
                    placeholder="Alexandra Smith"
                  />

                  <FormControl>
                    <Text mb={2} fontWeight="500" color="gray.600">
                      Mobile Number
                    </Text>
                    <Flex gap={3}>
                      <Select
                        w="30%"
                        defaultValue="+91"
                        borderRadius="lg"
                        focusBorderColor="teal.400"
                        iconColor="teal.400"
                        variant="filled"
                      >
                        <option value="+91">🇮🇳 +91</option> 
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                      </Select>
                      <InputGroup>
                        <InputLeftAddon bg="gray.100" borderColor="gray.200">
                          <FaPhone />
                        </InputLeftAddon>

                        <Input
                          type="tel"
                          placeholder="98765 43210"
                          variant="filled"
                          focusBorderColor="teal.400"
                          _focus={{ bg: "white" }}
                        />
                      </InputGroup>
                    </Flex>
                  </FormControl>

                  <AnimatedInput
                    icon={FaEnvelope}
                    label="Email Address"
                    placeholder="alex@example.com"
                    type="email"
                  />

                  <FormControl>
                    <Text mb={2} fontWeight="500" color="gray.600">
                      Dream Destination
                    </Text>
                    <InputGroup>
                      {/* <InputLeftAddon 
                        children={<FaGlobe />} 
                        bg="gray.100" 
                        borderColor="gray.200"
                      /> */}
                      <InputLeftAddon bg="gray.100" borderColor="gray.200">
                        <FaGlobe />
                      </InputLeftAddon>
                      <Select
                        placeholder="Select region"
                        variant="filled"
                        focusBorderColor="teal.400"
                        _focus={{ bg: "white" }}
                      >
                        <option>European Escapades</option>
                        <option>Asian Odyssey</option>
                        <option>American Expedition</option>
                        <option>African Safari</option>
                      </Select>
                    </InputGroup>
                  </FormControl>

                  <MotionButton
                    bgGradient={accentGradient}
                    color="white"
                    size="lg"
                    mt={4}
                    w="full"
                    borderRadius="xl"
                    _hover={{
                      bgGradient: "linear(135deg, #3182CE 0%, #319795 100%)",
                      transform: "translateY(-2px)",
                    }}
                    _active={{ transform: "scale(0.98)" }}
                    rightIcon={<FaChevronRight />}
                    // transition="all 0.3s cubic-bezier(.25,.8,.25,1)"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Begin Exploration
                  </MotionButton>
                </Stack>
              </Box>

              {/* Decorative Background Elements */}
              <Box
                position="absolute"
                top={-10}
                right={-20}
                w="120px"
                h="120px"
                borderRadius="full"
                bg="teal.100"
                opacity="0.1"
              />
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DelayedModal;

const AnimatedFeatureItem = ({ icon, title, delay }) => (
  <MotionBox
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="feature-item"
    mb={8}
    p={4}
    borderRadius="xl"
    bg="whiteAlpha.200"
    _hover={{ bg: "whiteAlpha.300" }}
    // transition="all 0.3s ease"
    cursor="pointer"
  >
    <Flex align="center" gap={4}>
      <Icon as={icon} boxSize={8} color="whiteAlpha.900" />
      <Text fontSize="lg" fontWeight="500" letterSpacing="wide">
        {title}
      </Text>
    </Flex>
  </MotionBox>
);

const AnimatedInput = ({ icon, label, ...props }) => (
  <Box>
    <FormControl>
      <Text mb={2} fontWeight="500" color="gray.600">
        {label}
      </Text>
      <InputGroup>
        <InputLeftAddon bg="gray.100" borderColor="gray.200">
          <Icon as={icon} />
        </InputLeftAddon>
        <Input
          variant="filled"
          focusBorderColor="teal.400"
          _focus={{ bg: "white" }}
          {...props}
        />
      </InputGroup>
    </FormControl>
  </Box>
);
