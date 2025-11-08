"use client";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Icon,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Select,
  Text,
  Textarea,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { BsHeadsetVr } from "react-icons/bs";
import { RiCustomerServiceFill } from "react-icons/ri";
import CustomButton from "../../CustomButton/CustomButton";
import { LuArrowUpRight } from "react-icons/lu";
import { keyframes } from "@emotion/react";
import stores from "../../../../store/stores";
import { FaCertificate } from "react-icons/fa";
import { CloseIcon } from "@chakra-ui/icons";

const MotionBox = motion(Box);

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const DelayedModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    locationStore: { location },
    auth: { openNotification },
    contactStore: { createContact },
  } = stores;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formPadding = useBreakpointValue({ base: 5, md: 7, lg: 8 });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = useCallback(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return (
      formData.name.trim() &&
      emailRegex.test(formData.email) &&
      phoneRegex.test(formData.phone) &&
      formData.location
    );
  }, [formData]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Check if the form is valid
    if (!validateForm()) {
      openNotification({
        title: "Error",
        message: "Please fill in all required fields and agree to the terms.",
        type: "error",
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const data = await createContact({
        phone: formData.phone,
        email: formData.email,
        description: formData.description,
        name: formData.name,
        location: formData.location,
      });
      openNotification({
        title: "Submitted Successfully",
        message: data?.message,
        type: "success",
      });
      setFormData({
        name: "",
        location: "",
        email: "",
        phone: "",
        description: "",
      });
    } catch (err: any) {
      openNotification({
        title: "Create Failed",
        message: err?.message,
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      motionPreset="slideInBottom"
      size={{ base: "90%", xl: "5xl" }}
      isCentered
    >
      <ModalOverlay />
      <ModalContent borderRadius="3xl" overflow="hidden" boxShadow="2xl" margin={'10px'}>
        <ModalBody p={0}>
          <Flex direction={{ base: "column", md: "row" }}>
            {/* Left Section - Hidden on Mobile */}
            <Box
              w={{ base: "90%", md: "50%" }}
              display={{ base: "none", md: "block" }}
              bgImage="url('https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80')"
              bgSize="cover"
              bgPosition="center"
              position="relative"
              color="white"
            >
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgGradient="linear(45deg, rgba(7, 161, 196, 0.8) 0%, rgba(49, 151, 149, 0.7) 100%)"
                p={8}
              >
                <MotionBox
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  mt={28}
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
                    icon={RiCustomerServiceFill}
                    title="Global Support Network"
                    delay={0.9}
                  />
                </MotionBox>
              </Box>
            </Box>

            {/* Right Side - Form */}
            <GridItem animation={`${fadeIn} 1.2s ease-out`}>
              <Box
                bg="white"
                p={formPadding}
                borderRadius="3xl"
                boxShadow="0 10px 30px rgba(0, 0, 0, 0.12)"
                border="1px solid rgba(226, 232, 240, 0.6)"
                h="100%"
                bgGradient="linear(to-b, white, #F9FAFB)"
                transition="box-shadow 0.3s ease, transform 0.3s ease"
                _hover={{
                  boxShadow: "0 14px 40px rgba(0, 0, 0, 0.15)",
                  transform: "translateY(-2px)",
                }}
              >
                <Text
                  fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                  fontWeight={700}
                  color="brand.100"
                  mb={6}
                  textAlign={{ base: "center", md: "left" }}
                  bgGradient="linear(to-r, #1A3C52, #294A62)"
                  bgClip="text"
                >
                  Begin Your Adventure Today
                </Text>
                <IconButton
                  icon={<CloseIcon />}
                  aria-label="Close Modal"
                  onClick={closeModal}
                  variant="ghost"
                  size="sm"
                  position="absolute"
                  top={3}
                  right={3}
                  zIndex={10}
                  colorScheme="gray"
                  bg="gray.100"
                />

                {/* Nested Two-Column Grid for Form Inputs */}
                <Grid
                  templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                  gap={{ base: 5, md: 7 }}
                  mb={8}
                  width={"100%"}
                >
                  <GridItem>
                    <FormControl isRequired>
                      <FormLabel
                        fontSize="sm"
                        color="#1A3C52"
                        fontWeight={600}
                        letterSpacing="wide"
                      >
                        Full Name
                      </FormLabel>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        variant="outline"
                        bg="white"
                        border="1px solid #D1DCE5"
                        _hover={{ borderColor: "#86C6F4", bg: "gray.50" }}
                        _focus={{
                          borderColor: "brand.100",
                          boxShadow: "0 0 0 2px rgba(223, 131, 124, 0.3)",
                        }}
                        size="md"
                        borderRadius="lg"
                        transition="all 0.2s ease"
                      />
                    </FormControl>
                  </GridItem>

                  <GridItem>
                    <FormControl isRequired>
                      <FormLabel
                        fontSize="sm"
                        color="#1A3C52"
                        fontWeight={600}
                        letterSpacing="wide"
                      >
                        Email
                      </FormLabel>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        variant="outline"
                        bg="white"
                        border="1px solid #D1DCE5"
                        _hover={{ borderColor: "#86C6F4", bg: "gray.50" }}
                        _focus={{
                          borderColor: "brand.100",
                          boxShadow: "0 0 0 2px rgba(223, 131, 124, 0.3)",
                        }}
                        size="md"
                        borderRadius="lg"
                        transition="all 0.2s ease"
                      />
                    </FormControl>
                  </GridItem>

                  <GridItem colSpan={{ base: 1, md: 2 }}>
                    <FormControl isRequired>
                      <FormLabel
                        fontSize="sm"
                        color="#1A3C52"
                        fontWeight={600}
                        letterSpacing="wide"
                      >
                        Phone Number
                      </FormLabel>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g., +1234567890"
                        variant="outline"
                        bg="white"
                        border="1px solid #D1DCE5"
                        _hover={{ borderColor: "#86C6F4", bg: "gray.50" }}
                        _focus={{
                          borderColor: "brand.100",
                          boxShadow: "0 0 0 2px rgba(223, 131, 124, 0.3)",
                        }}
                        size="md"
                        borderRadius="lg"
                        transition="all 0.2s ease"
                      />
                    </FormControl>
                  </GridItem>

                  <GridItem colSpan={{ base: 1, md: 2 }}>
                    <FormControl isRequired>
                      <FormLabel
                        fontSize="sm"
                        color="#1A3C52"
                        fontWeight={600}
                        letterSpacing="wide"
                      >
                        Preferred Location
                      </FormLabel>
                      <Select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Select your location"
                        variant="outline"
                        bg="white"
                        border="1px solid #D1DCE5"
                        _hover={{ borderColor: "brand.100", bg: "gray.50" }}
                        _focus={{
                          borderColor: "brand.100",
                          boxShadow: "0 0 0 2px rgba(223, 131, 124, 0.3)",
                        }}
                        size="md"
                        borderRadius="lg"
                        iconColor="#DF837C"
                        transition="all 0.2s ease"
                      >
                        {location?.data?.map((dest) => (
                          <option key={dest?.name} value={dest?.name}>
                            {dest?.name}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                  </GridItem>

                  <GridItem colSpan={{ base: 1, md: 2 }}>
                    <FormControl>
                      <FormLabel
                        fontSize="sm"
                        color="#1A3C52"
                        fontWeight={600}
                        letterSpacing="wide"
                      >
                        Additional Details (Optional)
                      </FormLabel>
                      <Textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Travel dates, special requests, or other details"
                        variant="outline"
                        bg="white"
                        border="1px solid #D1DCE5"
                        _hover={{ borderColor: "#86C6F4", bg: "gray.50" }}
                        _focus={{
                          borderColor: "brand.100",
                          boxShadow: "0 0 0 2px rgba(223, 131, 124, 0.3)",
                        }}
                        size="md"
                        borderRadius="lg"
                        rows={3}
                        transition="all 0.2s ease"
                      />
                    </FormControl>
                  </GridItem>
                </Grid>

                {/* Button */}
                <Box>
                  <CustomButton
                    size="lg"
                    width={"100%"}
                    icon={LuArrowUpRight}
                    onClick={handleSubmit}
                    isLoading={isSubmitting}
                    isDisabled={isSubmitting}
                    color="white"
                    fontWeight={700}
                    borderRadius="lg"
                    px={8}
                    py={6}
                    mt={4}
                    boxShadow="0 6px 14px rgba(223, 131, 124, 0.4)"
                    _active={{
                      boxShadow: "0 4px 10px rgba(223, 131, 124, 0.3)",
                      transform: "translateY(1px)",
                    }}
                    transition="all 0.3s ease"
                    _loading={{ opacity: 0.8 }}
                  >
                    Plan My Trip
                  </CustomButton>
                </Box>
              </Box>
            </GridItem>
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
      <Text
        fontSize="lg"
        fontWeight="500"
        letterSpacing="wide"
        textShadow={"md"}
      >
        {title}
      </Text>
    </Flex>
  </MotionBox>
);
