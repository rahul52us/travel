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
import { RiCustomerServiceFill } from "react-icons/ri";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

// const float = keyframes`
//   0% { transform: translateY(0px); }
//   50% { transform: translateY(-10px); }
//   100% { transform: translateY(0px); }
// `;
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

  return (
    <Modal isOpen={isOpen} onClose={closeModal} motionPreset="slideInBottom" size={{ base: "xs", md: "4xl" }} isCentered>
    <ModalOverlay />
    <ModalContent borderRadius="3xl" overflow="hidden" boxShadow="2xl">
      <ModalBody p={0}>
        <Flex direction={{ base: "column", md: "row" }}>
          {/* Left Section - Hidden on Mobile */}
          <Box
            w="70%"
            display={{ base: "none", md: "block" }} 
            bgImage="url('https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80')"
            bgSize="cover"
            bgPosition="center"
            position="relative"
            color="white"
          >
            <Box position="absolute" top={0} left={0} right={0} bottom={0} bgGradient="linear(45deg, rgba(49, 130, 206, 0.8) 0%, rgba(49, 151, 149, 0.7) 100%)" p={8}>
              <MotionBox initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} mt={28}>
                <AnimatedFeatureItem icon={BsHeadsetVr} title="Tailor-Made Adventures" delay={0.3} />
                <AnimatedFeatureItem icon={FaCertificate} title="96% Visa Assurance" delay={0.6} />
                <AnimatedFeatureItem icon={RiCustomerServiceFill} title="Global Support Network" delay={0.9} />
              </MotionBox>
            </Box>
          </Box>
  
          {/* Right Side - Form */}
          <Box w="100%" p={{ base: 5, md: 10 }} bgGradient="linear(to-br, white, gray.50)">
            <Box position="relative">
              <Flex justify="space-between" align="center" direction={{ base: "column", sm: "row" }} mb={4}>
                <Heading fontSize={{ base: "xl", md: "3xl" }} textAlign="center" mb={{ base: 4, sm: 0 }} bgGradient={accentGradient} bgClip="text" fontWeight="bold">
                  Craft Your Adventure
                </Heading>
                <Image src="/images/logo3.png" alt="logo" objectFit="cover" h={{ base: "50px", md: "80px" }} w="auto" />
              </Flex>
  
              <Stack spacing={4}>
                <AnimatedInput icon={FaUser} label="Full Name" placeholder="Alexandra Smith" />
  
                <FormControl>
                  <Text mb={2} fontWeight="500" color="gray.600">Mobile Number</Text>
                  <Flex gap={3} direction={{ base: "column", sm: "row" }}>
                    <Select display={{base:"none",md:"block"}} w={{ base: "100%", sm: "30%" }} defaultValue="+91" borderRadius="lg" focusBorderColor="teal.400" variant="filled">
                      <option value="+91">🇮🇳 +91</option> 
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                    </Select>
                    <InputGroup>
                      <InputLeftAddon bg="gray.100" borderColor="gray.200"><FaPhone /></InputLeftAddon>
                      <Input type="tel" placeholder="98765 43210" variant="filled" focusBorderColor="teal.400" _focus={{ bg: "white" }} />
                    </InputGroup>
                  </Flex>
                </FormControl>
  
                <AnimatedInput icon={FaEnvelope} label="Email Address" placeholder="alex@example.com" type="email" />
  
                <FormControl>
                  <Text mb={2} fontWeight="500" color="gray.600">Dream Destination</Text>
                  <InputGroup>
                    <InputLeftAddon bg="gray.100" borderColor="gray.200"><FaGlobe /></InputLeftAddon>
                    <Select placeholder="Select region" variant="filled" focusBorderColor="teal.400" _focus={{ bg: "white" }}>
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
                  _hover={{ bgGradient: "linear(135deg, #3182CE 0%, #319795 100%)", transform: "translateY(-2px)" }}
                  _active={{ transform: "scale(0.98)" }}
                  rightIcon={<FaChevronRight />}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Begin Exploration
                </MotionButton>
              </Stack>
            </Box>
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
    bg="whiteAlpha.400"
    _hover={{ bg: "whiteAlpha.300" }}
    // transition="all 0.3s ease"
    cursor="pointer"
  >
    <Flex align="center" gap={4}>
      <Icon as={icon} boxSize={8} color="whiteAlpha.900" />
      <Text fontSize="lg" fontWeight="500" letterSpacing="wide" textShadow={"md"}>
        {title}
      </Text>
    </Flex>
  </MotionBox>
);

const AnimatedInput = ({ icon, label, ...props }) => (
  <Box w="100%">
    <FormControl>
      <Text mb={2} fontWeight="500" color="gray.600">
        {label}
      </Text>
      <InputGroup>
        <InputLeftAddon bg="gray.100" borderColor="gray.200">
          <Icon as={icon} />
        </InputLeftAddon>
        <Input
          w="100%"
          variant="filled"
          focusBorderColor="teal.400"
          _focus={{ bg: "white" }}
          {...props}
        />
      </InputGroup>
    </FormControl>
  </Box>
);

