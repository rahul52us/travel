import {
  Box,
  Grid,
  GridItem,
  Image,
  Input,
  Select,
  Text,
  Textarea,
  FormControl,
  FormLabel,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState, useCallback } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import CustomButton from "../common/CustomButton/CustomButton";
import { keyframes } from "@emotion/react";
import { observer } from "mobx-react-lite";
import stores from "../../store/stores";

// Fade-in animation for elements
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ContactUs = observer(() => {
  const {locationStore : {location}, auth : {openNotification}, contactStore : {createContact}} = stores
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const headingSize = useBreakpointValue({ base: "2xl", md: "3xl", lg: "4xl" });
  const formPadding = useBreakpointValue({ base: 5, md: 7, lg: 8 });
  const buttonWidth = useBreakpointValue({ base: "100%", md: "240px" });

  const handleChange = (e) => {
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
        location : formData.location
      });
      openNotification({
        title: "Submitted Successfully",
        message: data?.message,
        type: "success",
      });
      setFormData({
        name: "",
        location:"",
        email: "",
        phone: "",
        description: ""
      })
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

  return (
    <Box
      bgGradient="linear(to-br, #86C6F4, #B9E0FF 50%, #F0F9FF)"
      py={{ base: 8, md: 12, lg: 16 }}
      px={{ base: 4, md: 6, lg: 8 }}
      position="relative"
      overflow="hidden"
      minH="100vh"
    >
      {/* Enhanced Background Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bgGradient="radial(circle at top left, rgba(255, 255, 255, 0.3), transparent 70%)"
        zIndex={0}
        opacity={0.8}
      />

      <Box maxW={{ base: "95%", md: "90%", lg: "1400px" }} mx="auto" my={{ base: 6, lg: 10 }} position="relative" zIndex={1}>
        {/* Header */}
        <Box
          textAlign={{ base: "center", lg: "left" }}
          mb={{ base: 8, lg: 12 }}
          animation={`${fadeIn} 0.8s ease-out`}
        >
          <Text
            textTransform="uppercase"
            color="#DF837C"
            fontSize={{ base: "sm", md: "md" }}
            fontWeight={700}
            letterSpacing="wider"
            mb={2}
          >
            Contact Us
          </Text>
          <Text
            fontSize={headingSize}
            fontWeight={700}
            lineHeight="tight"
            color="#1A3C52"
            textShadow="0 3px 6px rgba(0, 0, 0, 0.1)"
          >
            Ready to explore the world?{" "}
            <Text as="span" fontWeight={800} color="#DF837C" bgGradient="linear(to-r, #DF837C, #F4A261)" bgClip="text">
              Let’s plan your adventure.
            </Text>
          </Text>
        </Box>

        {/* Two-Column Grid */}
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={{ base: 6, md: 10, lg: 14 }}
          alignItems="stretch"
        >
          {/* Left Column: Image */}
          <GridItem animation={`${fadeIn} 1s ease-out`}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              h="100%"
              position="relative"
              overflow="hidden"
              borderRadius="2xl"
            >
              <Image
                src="/images/contact/contactUs.jpg"
                alt="Plan your next trip with CosmicTravels"
                borderRadius="2xl"
                boxShadow="0 12px 24px rgba(0, 0, 0, 0.2)"
                objectFit="cover"
                maxH={{ base: "320px", md: "450px", lg: "550px" }}
                w="100%"
                transition="transform 0.4s ease, box-shadow 0.4s ease"
                _hover={{ transform: "scale(1.03)", boxShadow: "0 16px 32px rgba(0, 0, 0, 0.25)" }}
              />
            </Box>
          </GridItem>

          {/* Right Column: Form */}
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
              _hover={{ boxShadow: "0 14px 40px rgba(0, 0, 0, 0.15)", transform: "translateY(-2px)" }}
            >
              <Text
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                fontWeight={700}
                color="#1A3C52"
                mb={6}
                textAlign={{ base: "center", md: "left" }}
                bgGradient="linear(to-r, #1A3C52, #294A62)"
                bgClip="text"
              >
                Start Your Journey
              </Text>

              {/* Nested Two-Column Grid for Form Inputs */}
              <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                gap={{ base: 5, md: 7 }}
                mb={8}
              >
                <GridItem>
                  <FormControl isRequired>
                    <FormLabel fontSize="sm" color="#1A3C52" fontWeight={600} letterSpacing="wide">
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
                      _focus={{ borderColor: "#DF837C", boxShadow: "0 0 0 2px rgba(223, 131, 124, 0.3)" }}
                      size="md"
                      borderRadius="lg"
                      transition="all 0.2s ease"
                    />
                  </FormControl>
                </GridItem>

                <GridItem>
                  <FormControl isRequired>
                    <FormLabel fontSize="sm" color="#1A3C52" fontWeight={600} letterSpacing="wide">
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
                      _focus={{ borderColor: "#DF837C", boxShadow: "0 0 0 2px rgba(223, 131, 124, 0.3)" }}
                      size="md"
                      borderRadius="lg"
                      transition="all 0.2s ease"
                    />
                  </FormControl>
                </GridItem>

                <GridItem colSpan={{ base: 1, md: 2 }}>
                  <FormControl isRequired>
                    <FormLabel fontSize="sm" color="#1A3C52" fontWeight={600} letterSpacing="wide">
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
                      _focus={{ borderColor: "#DF837C", boxShadow: "0 0 0 2px rgba(223, 131, 124, 0.3)" }}
                      size="md"
                      borderRadius="lg"
                      transition="all 0.2s ease"
                    />
                  </FormControl>
                </GridItem>

                <GridItem colSpan={{ base: 1, md: 2 }}>
                  <FormControl isRequired>
                    <FormLabel fontSize="sm" color="#1A3C52" fontWeight={600} letterSpacing="wide">
                      Preferred Destination
                    </FormLabel>
                    <Select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Select your location"
                      variant="outline"
                      bg="white"
                      border="1px solid #D1DCE5"
                      _hover={{ borderColor: "#86C6F4", bg: "gray.50" }}
                      _focus={{ borderColor: "#DF837C", boxShadow: "0 0 0 2px rgba(223, 131, 124, 0.3)" }}
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
                    <FormLabel fontSize="sm" color="#1A3C52" fontWeight={600} letterSpacing="wide">
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
                      _focus={{ borderColor: "#DF837C", boxShadow: "0 0 0 2px rgba(223, 131, 124, 0.3)" }}
                      size="md"
                      borderRadius="lg"
                      rows={3}
                      transition="all 0.2s ease"
                    />
                  </FormControl>
                </GridItem>
              </Grid>

              {/* Button */}
              <Box textAlign={{ base: "center", md: "right" }}>
                <CustomButton
                  size="lg"
                  width={buttonWidth}
                  icon={LuArrowUpRight}
                  onClick={handleSubmit}
                  isLoading={isSubmitting}
                  isDisabled={isSubmitting}
                  bgGradient="linear(to-r, #DF837C, #F4A261)"
                  _hover={{ bgGradient: "linear(to-r, #C76B5C, #E08F3E)" }}
                  color="white"
                  fontWeight={700}
                  borderRadius="lg"
                  px={8}
                  py={6}
                  mt={4}
                  boxShadow="0 6px 14px rgba(223, 131, 124, 0.4)"
                  _active={{ boxShadow: "0 4px 10px rgba(223, 131, 124, 0.3)", transform: "translateY(1px)" }}
                  transition="all 0.3s ease"
                  _loading={{ opacity: 0.8 }}
                >
                  Plan My Trip
                </CustomButton>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
});

export default ContactUs;