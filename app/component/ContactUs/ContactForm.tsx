import {
    Box,
    Grid,
    GridItem,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Select,
    Text,
    Textarea,
    Checkbox,
    VStack,
    useBreakpointValue,
  } from "@chakra-ui/react";
  import { useState, useCallback } from "react";
  import { observer } from "mobx-react-lite";
  import stores from "../../store/stores";
  import CustomSmallTitle from "../common/CustomSmallTitle/CustomSmallTitle";
  import CustomButton from "../common/CustomButton/CustomButton";

  const ContactForm = observer(() => {
    const {
      contactStore: { createContact },
      auth: { openNotification },
    } = stores;

    const [formData, setFormData] = useState({
      inquiryType: "",
      fullName: "",
      email: "",
      contact: "",
      destination: "",
      travelDate: "",
      message: "",
    });

    const [isAgreed, setIsAgreed] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const buttonSize = useBreakpointValue({ base: "md", md: "lg" });
    const buttonWidth = useBreakpointValue({ base: "100%", md: "200px" });

    // Email and phone validation
    const validateForm = useCallback(() => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Basic international phone validation
      const isValidEmail = emailRegex.test(formData.email);
      const isValidPhone = phoneRegex.test(formData.contact);
      const isValidTravelDate = new Date(formData.travelDate) > new Date();

      return (
        formData.inquiryType &&
        formData.fullName.trim() &&
        isValidEmail &&
        isValidPhone &&
        formData.destination.trim() &&
        isValidTravelDate &&
        isAgreed
      );
    }, [formData, isAgreed]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validateForm()) {
        openNotification({
          title: "Error",
          message: "Please fill in all required fields correctly and agree to the terms.",
          type: "error",
        });
        return;
      }

      setIsSubmitting(true);
      try {
        const response = await createContact({
          phone: formData.contact,
          email: formData.email,
          destination: formData.destination,
          travelDate: formData.travelDate,
          description: formData.message,
          inquiryType: formData.inquiryType,
          fullName: formData.fullName.trim(),
        });
        openNotification({
          title: "Submitted Successfully",
          message: response?.message || "Your request has been submitted!",
          type: "success",
        });
        setFormData({
          inquiryType: "",
          fullName: "",
          email: "",
          contact: "",
          destination: "",
          travelDate: "",
          message: "",
        });
        setIsAgreed(false);
      } catch (err) {
        openNotification({
          title: "Submission Failed",
          message: err?.message || "Something went wrong. Please try again.",
          type: "error",
        });
      } finally {
        setIsSubmitting(false);
      }
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
      <Box p={{ base: 4, md: 2 }} bg="#F9FAFB" borderRadius="lg">
        <CustomSmallTitle textAlign="start" color="#294A62">
          Contact Us
        </CustomSmallTitle>

        <Heading as="h2" fontWeight={400} fontSize={{ base: "24px", md: "36px" }} mb={2}>
          Plan Your Next Adventure with <Text as="span" fontWeight={700}>CosmicTravels</Text>
        </Heading>

        <Text color="#434343" fontSize={{ base: "sm", md: "md" }}>
          Let us help you plan the perfect trip. Reach out for bookings, inquiries, or special requests.
        </Text>

        <form onSubmit={handleSubmit}>
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
            <GridItem>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel fontSize="sm">Inquiry Type</FormLabel>
                  <Select
                    name="inquiryType"
                    placeholder="Select an option"
                    onChange={handleChange}
                    value={formData.inquiryType}
                    size="md"
                  >
                    <option value="booking">New Booking Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="custom-trip">Custom Trip Request</option>
                    <option value="cancellation">Cancellation Request</option>
                  </Select>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel fontSize="sm">Full Name</FormLabel>
                  <Input
                    name="fullName"
                    placeholder="Enter your full name"
                    onChange={handleChange}
                    value={formData.fullName}
                    size="md"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel fontSize="sm">Email</FormLabel>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    value={formData.email}
                    size="md"
                  />
                </FormControl>
              </VStack>
            </GridItem>

            <GridItem>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel fontSize="sm">Contact Number</FormLabel>
                  <Input
                    name="contact"
                    type="tel"
                    placeholder="e.g., +1234567890"
                    onChange={handleChange}
                    value={formData.contact}
                    size="md"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel fontSize="sm">Your Next Destination</FormLabel>
                  <Input
                    name="destination"
                    placeholder="Enter your destination"
                    onChange={handleChange}
                    value={formData.destination}
                    size="md"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel fontSize="sm">Preferred Travel Date</FormLabel>
                  <Input
                    name="travelDate"
                    type="date"
                    onChange={handleChange}
                    value={formData.travelDate}
                    min={new Date().toISOString().split("T")[0]} // Prevent past dates
                    size="md"
                  />
                </FormControl>
              </VStack>
            </GridItem>
          </Grid>

          <FormControl mt={4}>
            <FormLabel fontSize="sm">Additional Message</FormLabel>
            <Textarea
              name="message"
              placeholder="Any special requests or questions?"
              onChange={handleChange}
              value={formData.message}
              size="md"
              rows={4}
            />
          </FormControl>

          <FormControl mt={4}>
            <Checkbox
              isChecked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
              size="md"
              colorScheme="blue"
            >
              I agree to the{" "}
              <Text as="span" color="blue.500" cursor="pointer" _hover={{ textDecoration: "underline" }}>
                terms and conditions
              </Text>{" "}
              of CosmicTravels.
            </Checkbox>
          </FormControl>

          <Box mt={6} textAlign={{ base: "center", md: "right" }}>
            <CustomButton
              size={buttonSize}
              w={buttonWidth}
              type="submit"
              isLoading={isSubmitting}
              isDisabled={isSubmitting}
              colorScheme="blue"
            >
              Submit
            </CustomButton>
          </Box>
        </form>
      </Box>
    );
  });

  export default ContactForm;