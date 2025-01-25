'use client'

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Image,
  Heading,
  Text,
  useToast
} from '@chakra-ui/react';
import { useState } from 'react';
import Link from 'next/link';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const toast = useToast();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      toast({
        title: "Login Successful",
        description: `Welcome, ${formData.email}!`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    };

    return (
      <>
        <Image
          src="/images/logo.png"
          alt="Logo"
          mx="auto"
          mb={6}
          boxSize="100%"
          objectFit="cover"
        />
        <Heading mb={4} size="lg" color="teal.600">
          Login to Your Account
        </Heading>
        <Text mb={8} color="gray.500">
          Enter your credentials to access your account.
        </Text>
        <form onSubmit={handleSubmit}>
          <FormControl id="email" mb={4}>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              focusBorderColor="teal.500"
              required
            />
          </FormControl>
          <FormControl id="password" mb={6}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              focusBorderColor="teal.500"
              required
            />
          </FormControl>
          <Button
            type="submit"
            colorScheme="teal"
            size="lg"
            w="full"
            isDisabled={!formData.email || !formData.password}
          >
            Login
          </Button>
        </form>
        <Text mt={4} textAlign="center">
          <Link href="/forgot-password" style={{ color: 'teal', textDecoration: 'underline' }}>
            Forgot Password?
          </Link>
        </Text>
        <Text mt={2} textAlign="center">
          Don’t have an account?{' '}
          <Link href="/register" style={{ color: 'teal', textDecoration: 'underline' }}>
            Register
          </Link>
        </Text>
      </>
    );
};

export default Login;
