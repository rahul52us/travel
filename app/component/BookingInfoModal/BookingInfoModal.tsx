"use client";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button,
  Spinner,
  VStack,
  Text,
  Textarea,
  HStack,
  Icon,
  Box,
  useToast,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { FaUser, FaPhone, FaEnvelope, FaCommentDots } from "react-icons/fa";
import stores from "../../store/stores";

const BookingInfoModal = observer(({ isOpen, onClose, data }: any) => {
  const {
    bookingStore: { createBooking },
  } = stores;

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const handleSubmit = () => {
    if (!fullName.trim() || !phoneNumber.trim()) {
      setError("Full Name and Phone Number are required.");
      return;
    }

    setLoading(true);
    setError("");

    const formData = {
      name: fullName,
      phone: phoneNumber,
      email: email || null,
      comment: comment || null,
      data
    };

    createBooking(formData)
      .then(() => {
        toast({
          title: "Booking Confirmed 🎉",
          description: "We'll contact you soon with more details.",
          status: "success",
          duration: 4000,
          isClosable: true,
          position: "top",
        });
        handleClose();
      })
      .catch((err: any) => {
        setError(err?.message || "Something went wrong. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleClose = () => {
    setFullName("");
    setPhoneNumber("");
    setEmail("");
    setComment("");
    setError("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} isCentered>
      <ModalOverlay bg="blackAlpha.400" backdropFilter="blur(4px)" />
      <ModalContent
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="2xl"
        bg="white"
      >
        <Box
          bg="brand.100"
          color="white"
          py={4}
          px={6}
          textAlign="center"
        >
          <ModalHeader fontSize="2xl" fontWeight="bold" p={0}>
            Book Your Travel Experience
          </ModalHeader>
          <Text fontSize="sm" opacity={0.9}>
            Fill in your details and we’ll take care of the rest ✈️
          </Text>
        </Box>

        <ModalBody px={6} py={6}>
          <VStack spacing={4} align="stretch">
            <HStack>
              <Icon as={FaUser} color="gray.500" />
              <Input
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                borderRadius="md"
                bg="gray.50"
                _focus={{ borderColor: "blue.400", bg: "white" }}
                isInvalid={!fullName.trim() && error.length > 0}
              />
            </HStack>

            <HStack>
              <Icon as={FaPhone} color="gray.500" />
              <Input
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="tel"
                borderRadius="md"
                bg="gray.50"
                _focus={{ borderColor: "blue.400", bg: "white" }}
                isInvalid={!phoneNumber.trim() && error.length > 0}
              />
            </HStack>

            <HStack>
              <Icon as={FaEnvelope} color="gray.500" />
              <Input
                placeholder="Email (Optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                borderRadius="md"
                bg="gray.50"
                _focus={{ borderColor: "blue.400", bg: "white" }}
              />
            </HStack>

            <HStack align="start">
              <Icon as={FaCommentDots} color="gray.500" mt={3} />
              <Textarea
                placeholder="Additional Comments (Optional)"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                borderRadius="md"
                bg="gray.50"
                _focus={{ borderColor: "blue.400", bg: "white" }}
              />
            </HStack>
          </VStack>

          {error && (
            <Text color="red.500" mt={3} textAlign="center" fontSize="sm">
              {error}
            </Text>
          )}
        </ModalBody>

        <ModalFooter px={6} pb={6}>
          <Button
          color={'white'}
          bg={"brand.100"}
          
            // colorScheme="blue"
            size="lg"
            w="full"
            borderRadius="lg"
            onClick={handleSubmit}
            isDisabled={loading}
            _hover={{ bg: "brand.100" }}
          >
            {loading ? <Spinner size="sm" /> : "Send Enquiry"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});

export default BookingInfoModal;