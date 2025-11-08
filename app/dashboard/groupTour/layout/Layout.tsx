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
    groupTourStore: { groupTour },
  } = stores;

  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.300");

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Box>
      {groupTour.loading ? (
        <Flex justify="center" align="center" minH="60vh">
          <Spinner size="xl" color="blue.500" thickness="4px" />
        </Flex>
      ) : groupTour.data?.length > 0 ? (
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 4, md: 6 }}>
          {groupTour.data.map((dest) => (
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
              {/* Image */}
              <Image
                src={dest.image?.url}
                alt={dest.image?.name}
                borderRadius="lg"
                h={{ base: "150px", md: "200px" }}
                w="full"
                objectFit="cover"
              />

              {/* Core Info */}
              <Flex justify="space-between" align="center">
                <Heading
                  cursor="pointer"
                  as="h2"
                  textTransform={"capitalize"}
                  size="md"
                  color="blue.600"
                  noOfLines={1}
                  onClick={() =>
                    setFormModal({ open: true, type: "edit", data: dest })
                  }
                >
                  {dest?.name}
                </Heading>

                {/* Delete Button */}
                <IconButton
                  icon={<DeleteIcon />}
                  colorScheme="red"
                  aria-label="Delete groupTour"
                  size="sm"
                  variant="ghost"
                  onClick={() =>
                    setFormModal({ open: true, type: "delete", data: dest })
                  }
                />
              </Flex>

              <Text fontSize="sm" color={textColor} noOfLines={1} textTransform={"capitalize"}>
                {dest.location?.name}
              </Text>

              <Flex justify="space-between" align="center">
                <Text fontSize="lg" fontWeight="bold" color="green.500">
                ₹{dest.price?.toLocaleString()}
                </Text>
                <Text fontSize="sm" color="yellow.500">
                  ★ {dest.rating}
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
                        <strong>Days:</strong> {dest.days}
                      </Text>
                      <Text>
                        <strong>Perks:</strong> {dest.perks.join(", ")}
                      </Text>
                      <Text>
                        <strong>Highlights:</strong> {dest.highlights.join(", ")}
                      </Text>
                      <Text>
                        <strong>Itinerary:</strong>{" "}
                        {dest.itinerary.map((item) => `${item.place} (${item.nights}n)`).join(", ")}
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
          No groupTour found. Check back later!
        </Text>
      )}

      {/* Pagination */}
      {groupTour.totalPages && groupTour.totalPages > 1 && (
        <Flex justify="center" mt={12}>
          <Pagination
            currentPage={currentPage}
            totalPages={groupTour.totalPages}
            onPageChange={handlePageChange}
          />
        </Flex>
      )}
    </Box>
  );
});

export default Layout;
