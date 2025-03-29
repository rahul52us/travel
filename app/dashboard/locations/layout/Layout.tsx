"use client";

import { observer } from "mobx-react-lite";
import { useState } from "react";
import stores from "../../../store/stores";
import {
  Box,
  Flex,
  Text,
  VStack,
  SimpleGrid,
  Spinner,
  IconButton,
  Tooltip,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import Pagination from "../../../component/config/component/pagination/Pagination";
import DeleteData from "../DeleteData";

const Layout = observer(({ setFormModal, currentPage, setCurrentPage }: any) => {
  const {
    locationStore: { getLocations, location },
  } = stores;

  const [deleteData, setDeleteData] = useState({ data: null, open: false });

  const handlePageChange = (page: number) => setCurrentPage(page);


  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.300");

  return (
    <Box>
      {/* Loading State */}
      {location.loading ? (
        <Flex justify="center" align="center" minH="60vh">
          <Spinner size="xl" color="blue.500" thickness="4px" />
        </Flex>
      ) : location.data?.length > 0 ? (
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
          {location.data.map((loc) => (
            <VStack
              key={loc._id}
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
              <Box w="100%" h="200px" overflow="hidden" borderRadius="md">
                <Image
                  src={loc.image?.url}
                  alt={loc.image?.name}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
              </Box>

              {/* Name */}
              <Text fontWeight="bold" fontSize="lg" color="blue.600">
                {loc.name}
              </Text>

              {/* Description with Tooltip */}
              <Tooltip label={loc.description} hasArrow>
                <Text fontSize="sm" color={textColor} noOfLines={2}>
                  {loc.description}
                </Text>
              </Tooltip>

              {/* Actions */}
              <Flex justify="space-between">
                <IconButton
                  icon={<EditIcon />}
                  colorScheme="blue"
                  aria-label="Edit Location"
                  size="sm"
                  onClick={() => setFormModal({ open: true, type: "edit", data: loc })}
                />
                <IconButton
                  icon={<DeleteIcon />}
                  colorScheme="red"
                  aria-label="Delete Location"
                  size="sm"
                  onClick={() => setDeleteData({ open: true, data: loc })}
                />
              </Flex>
            </VStack>
          ))}
        </SimpleGrid>
      ) : (
        <Text textAlign="center" fontSize="lg" color={textColor} py={20}>
          No locations found. Check back later!
        </Text>
      )}

      {/* Pagination */}
      {location.totalPages > 1 && (
        <Flex justify="center" mt={8}>
          <Pagination
            currentPage={currentPage}
            totalPages={location.totalPages}
            onPageChange={handlePageChange}
          />
        </Flex>
      )}

      {/* Delete Confirmation Modal */}
      <DeleteData
        getData={() => getLocations({ page: currentPage })}
        isOpen={deleteData.open}
        data={deleteData.data}
        onClose={() => setDeleteData({ data: null, open: false })}
      />
    </Box>
  );
});

export default Layout;
