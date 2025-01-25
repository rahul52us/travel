'use client'
import { useState, useEffect } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Input, FormLabel, FormControl, Flex, Box, Heading, Image } from '@chakra-ui/react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent
        borderRadius="lg"
        boxShadow="xl"
        maxW="container.lg"
        background="white"
        transition="transform 0.3s ease-out"
      >
        <ModalHeader textAlign="center" fontWeight="bold" fontSize="xl" color="teal.600">
          Create Your Account
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex direction={{ base: 'column', md: 'row' }} justify="center" align="center" height="100%" mb={10}>
            {/* Left Side - Logo with Full Height */}
            <Box
              flex={{ base: 1, md: 1 }}
              bg="lightblue"
              height="65vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderTopLeftRadius="lg"
              borderBottomLeftRadius="lg"
              borderRadius={10}
            >
              <Image src="/images/logo.png" alt="Logo" boxSize={{ base: '120px', md: '150px' }} />
            </Box>

            {/* Right Side - Registration Form */}
            <Box
              flex={{ base: 1, md: 2 }}
              p={8}
              bg="gray.50"
              borderRadius="lg"
              boxShadow="lg"
              width="100%"
              maxW="lg"
              mx={{ base: 0, md: 4 }}
              height="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box width="100%" maxW="lg">
                <Heading size="lg" mb={5} textAlign="center" color="teal.500">
                  Sign Up
                </Heading>
                <form onSubmit={handleSubmit}>
                  {/* Name Input */}
                  <FormControl mb={4} isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      size="lg"
                      borderRadius="lg"
                      focusBorderColor="teal.500"
                    />
                  </FormControl>

                  {/* Email Input */}
                  <FormControl mb={4} isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      size="lg"
                      borderRadius="lg"
                      focusBorderColor="teal.500"
                    />
                  </FormControl>

                  {/* Password Input */}
                  <FormControl mb={4} isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      size="lg"
                      borderRadius="lg"
                      focusBorderColor="teal.500"
                    />
                  </FormControl>

                  {/* Submit Button */}
                  <Button
                    colorScheme="teal"
                    type="submit"
                    width="full"
                    size="lg"
                    mt={4}
                    borderRadius="lg"
                    _hover={{ bg: 'teal.600' }}
                  >
                    Register
                  </Button>
                </form>
              </Box>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DelayedModal;
