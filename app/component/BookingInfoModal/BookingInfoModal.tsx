"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
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

  const router = useRouter();

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
        const thankYouContent = `
<!DOCTYPE html>
<html>
<head>
  <title>Booking Confirmed</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <style>
    * {
      box-sizing: border-box;
      font-family: Inter, Arial, sans-serif;
    }

    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.4);
    }

    .modal {
      width: 100%;
      max-width: 420px;
      background: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 20px 50px rgba(0,0,0,0.25);
      text-align: center;
    }

    .header {
      background: #2f9e6f;
      padding: 32px 20px;
      color: #ffffff;
    }

    .check {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #ffffff;
      color: #2f9e6f;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 12px;
      font-size: 28px;
      font-weight: bold;
    }

    .header h2 {
      margin: 0;
      font-size: 22px;
      font-weight: 700;
    }

    .body {
      padding: 28px 24px 32px;
    }

    .body h3 {
      margin: 0 0 8px;
      font-size: 18px;
      font-weight: 600;
      color: #111827;
    }

    .body p {
      margin: 8px 0;
      font-size: 14px;
      color: #6b7280;
      line-height: 1.5;
    }

    .footer {
      padding: 0 24px 24px;
    }

    .btn {
      width: 100%;
      border: none;
      border-radius: 8px;
      background: #0b7285;
      color: #ffffff;
      padding: 12px 0;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
    }

    .btn:hover {
      background: #095c6a;
    }
  </style>
</head>

<body>
  <div class="modal">
    <div class="header">
      <div class="check">✓</div>
      <h2>Booking Confirmed! 🎉</h2>
    </div>

    <div class="body">
      <h3>Thank you, ${fullName}!</h3>
      <p>We've received your booking request!</p>
      <p>
        We'll get back to you within 24 hours with more details about your travel experience.
      </p>
    </div>

    <div class="footer">
      <button class="btn" onclick="window.close()">Close</button>
    </div>
  </div>
</body>
</html>
`;


        const newWindow = window.open("", "_blank");
        if (newWindow) {
          newWindow.document.write(thankYouContent);
          newWindow.document.close();
        }
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
            Fill in your details and we'll take care of the rest ✈️
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
            color="white"
            bg="brand.100"
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