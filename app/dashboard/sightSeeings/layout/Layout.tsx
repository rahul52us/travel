"use client";

import { observer } from "mobx-react-lite";
import React from "react";
import stores from "../../../store/stores";
import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  VStack,
  SimpleGrid,
  Spinner,
  Button,
  IconButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  useColorModeValue,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons"; // Import delete icon
import Pagination from "../../../component/config/component/pagination/Pagination";

const Layout = observer(({ setFormModal, currentPage, setCurrentPage }: any) => {
  const {
    sightSeeingStore: { sightSeeing },
  } = stores;

  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.300");

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Box>
      {sightSeeing.loading ? (
        <Flex justify="center" align="center" minH="60vh">
          <Spinner size="xl" color="blue.500" thickness="4px" />
        </Flex>
      ) : sightSeeing.data?.length > 0 ? (
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 4, md: 6 }}>
          {sightSeeing.data.map((dest) => (
            <VStack
              key={dest._id}
              bg={cardBg}
              borderRadius="xl"
              shadow="base"
              p={4}
              spacing={3}
              align="stretch"
              transition="all 0.3s"
              _hover={{ shadow: "lg", transform: "translateY(-4px)" }}
            >
              {/* Cover Image */}
              <Image
                src={dest.coverImage?.url}
                alt={dest.coverImage?.name}
                borderRadius="lg"
                h={{ base: "150px", md: "200px" }}
                w="full"
                objectFit="cover"
              />

              {/* Additional Images */}
              {dest.images?.length > 0 && (
                <Flex overflowX="auto" gap={2} mt={2} py={2}>
                  {dest.images.map((img) => (
                    <Image
                      key={img._id}
                      src={img.url}
                      alt={img.name}
                      borderRadius="md"
                      h="75px"
                      w="75px"
                      objectFit="cover"
                    />
                  ))}
                </Flex>
              )}

              {/* Core Info */}
              <Flex justify="space-between" align="center">
                <Heading
                  cursor="pointer"
                  as="h2"
                  size="md"
                  color="blue.600"
                  noOfLines={1}
                  onClick={() =>
                    setFormModal({ open: true, type: "edit", data: dest })
                  }
                >
                  {dest?.name || dest?.title}
                </Heading>

                {/* Delete Button */}
                <IconButton
                  icon={<DeleteIcon />}
                  colorScheme="red"
                  aria-label="Delete sightSeeing"
                  size="sm"
                  variant="ghost"
                  onClick={() =>
                    setFormModal({ open: true, type: "delete", data: dest })
                  }
                />
              </Flex>

              <Text fontSize="md" color={textColor} noOfLines={1}>
                {dest.destinationName}
              </Text>

              <Flex justify="space-between" align="center">
                <Text fontSize="lg" fontWeight="bold" color="green.500">
                  ₹{dest.price.toLocaleString()}
                </Text>
                <Text fontSize="sm" color="yellow.500">
                  ★ {dest.rating || "N/A"}
                </Text>
              </Flex>

              {/* Details Button */}
              <Accordion allowToggle>
                <AccordionItem border="none">
                  <AccordionButton
                    as={Button}
                    colorScheme="blue"
                    size="sm"
                    variant="outline"
                    justifyContent="center"
                    _hover={{ bg: "blue.50" }}
                  >
                    View Details
                  </AccordionButton>
                  <AccordionPanel mt={3} p={0}>
                    <VStack align="start" spacing={2} fontSize="sm" color={textColor}>
                      <Text>
                        <strong>Duration:</strong> {dest.duration}
                      </Text>
                      <Text>
                        <strong>Max Group Size:</strong> {dest.maxGroupSize}
                      </Text>
                      <Text>
                        <strong>Description:</strong> {dest.description}
                      </Text>
                      <Text fontSize="xs" color="gray.500">
                        Added: {new Date(dest.createdAt).toLocaleDateString()}
                      </Text>
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </VStack>
          ))}
        </SimpleGrid>
      ) : (
        <Text textAlign="center" fontSize="lg" color={textColor} py={20}>
          No sightSeeing found. Check back later!
        </Text>
      )}

      {/* Pagination */}
      {sightSeeing.totalPages && sightSeeing.totalPages > 1 && (
        <Flex justify="center" mt={12}>
          <Pagination
            currentPage={currentPage}
            totalPages={sightSeeing.totalPages}
            onPageChange={handlePageChange}
          />
        </Flex>
      )}
    </Box>
  );
});

export default Layout;
