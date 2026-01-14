"use client";
import { Suspense } from "react";
import { Box, VStack, Text, Icon } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Guest";

  return (
    <Box
      minH="100vh"
      bg="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={5}
    >
      <Box
        maxW="500px"
        w="full"
        bg="white"
        borderRadius="2xl"
        boxShadow="2xl"
        overflow="hidden"
      >
        <Box bg="green.500" color="white" py={6} px={6} textAlign="center">
          <Icon as={FaCheckCircle} boxSize={16} mb={3} />
          <Text fontSize="2xl" fontWeight="bold" p={0}>
            Booking Confirmed! 🎉
          </Text>
        </Box>

        <Box px={6} py={8} textAlign="center">
          <VStack spacing={4}>
            <Text fontSize="lg" fontWeight="semibold">
              Thank you!
            </Text>
            <Text color="gray.600">
              We've received your booking request!
            </Text>
            <Text color="gray.500" fontSize="sm" mt={2}>
              We'll get back to you within 24 hours with more details about your travel experience.
            </Text>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  );
}