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
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
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

  const handleSubmit = () => {
    if (!fullName.trim() || !phoneNumber.trim()) {
      setError("Full Name and Phone Number are required.");
      return;
    }

    setLoading(true);
    setError("");

    const formData = { name: fullName, phone: phoneNumber, email: email || null, comment: comment || null, data };

    createBooking(formData)
      .then(() => {
        const thankYouContent = `
          <html>
          <head>
            <title>Booking Confirmation</title>
            <style>
              body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
              .message { max-width: 500px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
              h2 { color: blue; }
            </style>
          </head>
          <body>
            <div class="message">
              <h2>Thank You for Your Booking Request!</h2>
              <p>Name: ${fullName}</p>
              <p>Phone: ${phoneNumber}</p>
              ${email ? `<p>Email: ${email}</p>` : ""}
              ${comment ? `<p>Comment: ${comment}</p>` : ""}
              <p>We'll contact you soon to finalize your travel details.</p>
            </div>
          </body>
          </html>
        `;

        const newWindow = window.open("", "_blank");
        if (newWindow) {
          newWindow.document.write(thankYouContent);
          newWindow.document.close();
        } else {
          alert("Pop-up blocked! Please allow pop-ups to view the message.");
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
      <ModalOverlay />
      <ModalContent borderRadius="lg" boxShadow="xl" p={4}>
        <ModalHeader textAlign="center" fontSize="xl" fontWeight="bold">
          Book Your Travel Experience
        </ModalHeader>
        <ModalBody>
          <VStack spacing={4} align="stretch">
            <Input
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              borderRadius="md"
              p={3}
              bg="gray.50"
              _focus={{ borderColor: "blue.500", bg: "white" }}
              isInvalid={!fullName.trim() && error.length > 0}
            />
            <Input
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="tel"
              borderRadius="md"
              p={3}
              bg="gray.50"
              _focus={{ borderColor: "blue.500", bg: "white" }}
              isInvalid={!phoneNumber.trim() && error.length > 0}
            />
            <Input
              placeholder="Email (Optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              borderRadius="md"
              p={3}
              bg="gray.50"
              _focus={{ borderColor: "blue.500", bg: "white" }}
            />
            <Textarea
              placeholder="Additional Comments (Optional)"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              borderRadius="md"
              p={3}
              bg="gray.50"
              _focus={{ borderColor: "blue.500", bg: "white" }}
            />
          </VStack>
          {error && <Text color="red.500" mt={2} textAlign="center">{error}</Text>}
        </ModalBody>
        <ModalFooter display="flex" justifyContent="center">
          <Button
            colorScheme="blue"
            size="lg"
            w="full"
            borderRadius="md"
            onClick={handleSubmit}
            isDisabled={loading}
          >
            {loading ? <Spinner size="sm" /> : "Confirm Booking"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});

export default BookingInfoModal;
