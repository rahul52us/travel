"use client";
import {
  Button,
  Flex,
  VStack,
  SimpleGrid,
  Box,
  Heading,
} from "@chakra-ui/react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import CustomInput from "../../../component/config/component/customInput/CustomInput";
import { removeDataByIndex } from "../../../config/utils/utils";
import ShowFileUploadFile from "../../../component/common/ShowFileUploadFile/ShowFileUploadFile";
import validations from "./utils/validation";
import stores from "../../../store/stores";

const FormComponent = ({
  loading,
  initialValues,
  onSubmit,
  close,
  isEdit,
}: any) => {
  const [showError, setShowError] = useState(false);
  const {
    destinationStore: { getDestinations, destination },
  } = stores;

  useEffect(() => {
    getDestinations({ page: 1 });
  }, [getDestinations]);


  return (
    <Box
      p={{ base: 4, md: 4 }}
      w="full"
      maxW="container.xl"
      mx="auto"
      bg="white"
      borderRadius="xl"
      boxShadow="xl"
      border="1px"
      borderColor="gray.100"
    >

      <Formik
        initialValues={initialValues}
        validationSchema={validations}
        enableReinitialize={true}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          onSubmit({ ...values }, actions);
        }}
      >
        {({ handleChange, values, errors, setFieldValue }: any) => {
          return(
          <Form>
            <VStack spacing={6} align="stretch">
              {/* Cover Image Section */}
              <Box
                p={4}
                borderWidth={1}
                borderRadius="lg"
                borderColor="gray.200"
                bg="gray.50"
                transition="all 0.2s"
                _hover={{ borderColor: "gray.300" }}
              >
                <Heading size="sm" mb={3} color="gray.700">
                  Cover Image
                </Heading>
                {values?.coverImage?.file?.length === 0 ? (
                  <CustomInput
                    type="file-drag"
                    name="coverImage"
                    value={values.coverImage}
                    isMulti={true}
                    accept="image/*"
                    onChange={(e: any) => {
                      setFieldValue("coverImage", {
                        ...values.coverImage,
                        file: e.target.files[0],
                        isAdd: 1,
                      });
                    }}
                    showError={showError}
                  />
                ) : (
                  <ShowFileUploadFile
                    files={values.coverImage?.file}
                    removeFile={() => {
                      setFieldValue("coverImage", {
                        ...values.coverImage,
                        file: removeDataByIndex(values.coverImage, 0),
                        isDeleted: 1,
                      });
                    }}
                    edit={isEdit}
                  />
                )}
              </Box>

              {/* Additional Images Section */}
              <Box
                p={4}
                borderWidth={1}
                borderRadius="lg"
                borderColor="gray.200"
                bg="gray.50"
                transition="all 0.2s"
                _hover={{ borderColor: "gray.300" }}
              >
                <Heading size="sm" mb={3} color="gray.700">
                  Additional Images
                </Heading>
                <CustomInput
                  type="file-drag"
                  name="images"
                  isMulti={true}
                  accept="image/*"
                  onChange={(e: any) => {
                    const files = Array.from(e.target.files).map((file) => ({
                      file,
                      isAdd: 1,
                    }));
                    setFieldValue("images", [...(values.images || []), ...files]);
                  }}
                  showError={showError}
                />

{values.images?.length > 0 && (
  <VStack spacing={4} mt={4} align="stretch">
    {values.images.map((file: any, index: number) => {
      const isUploaded = Boolean(file?.url); // Checks if it's an existing image
      return (
        <Flex
        key={index}
        >
          {/* Image Display */}
          <Box flex="1" key={index}>
            <ShowFileUploadFile files={file?.file} edit={isEdit} removeFile={() => {
                const updatedImages = isUploaded
                  ? values.images.map((img, i) =>
                      i === index ? { ...img, isDeleted: true } : img
                    )
                  : values.images.filter((_, i) => i !== index);

                setFieldValue("images", updatedImages);
            }}/>
          </Box>
        </Flex>
      );
    })}
  </VStack>
)}

              </Box>

              {/* Form Fields */}
              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                spacing={6}
                p={4}
                borderRadius="lg"
                borderWidth={1}
                borderColor="gray.200"
                bg="white"
              >

                 <CustomInput
                  name="name"
                  placeholder="SightSeeing Name"
                  label="Name"
                  onChange={handleChange}
                  value={values.name}
                  error={errors.name}
                  showError={showError}
                  required={true}
                />
                <CustomInput
  name="destination"
  placeholder="Select the Destination"
  label="Destination"
  type="select"
  onChange={(e: any) => {setFieldValue('destinationName',e?._id?.split('-')[1]); setFieldValue("destination", e)}}
  value={values.destination}
  error={errors.destination}
  showError={showError}
  required={true}
  options = {
  destination.data
    ? destination.data.reduce(
        (
          all: { _id: string; destination: string }[],
          pkg: any
        ) => {
          pkg.destination.forEach((d: string) => {
            if (!all.some(item => item.destination === d)) {
              all.push({
                _id: `${pkg._id}-${d}`,
                destination: d,
              });
            }
          });
          return all;
        },
        []
      )
    : []
}
  getOptionLabel={(option: any) => option.destination}
  getOptionValue={(option: any) => option._id}
/>

                <CustomInput
                  type="number"
                  name="maxGroupSize"
                  placeholder="Enter maximum group size"
                  label="Max Group Size"
                  onChange={handleChange}
                  value={values.maxGroupSize}
                  error={errors.maxGroupSize}
                  showError={showError}
                  required={true}
                />
                <CustomInput
                  name="duration"
                  placeholder="Enter duration (days)"
                  label="Duration"
                  onChange={handleChange}
                  value={values.duration}
                  error={errors.duration}
                  showError={showError}
                  required={true}
                />
                <CustomInput
                  name="price"
                  placeholder="Enter price ($)"
                  label="Price"
                  onChange={handleChange}
                  value={values.price}
                  error={errors.price}
                  showError={showError}
                  required={true}
                />
              </SimpleGrid>

              <Box>
                <CustomInput
                  name="description"
                  placeholder="Describe the package details..."
                  label="Description"
                  type="textarea"
                  onChange={handleChange}
                  value={values.description}
                  error={errors.description}
                  showError={showError}
                  required={true}
                />
              </Box>

              {/* Action Buttons */}
              <Flex
                justify="flex-end"
                gap={4}
                mt={6}
                pt={4}
                borderTopWidth={1}
                borderColor="gray.200"
              >
                <Button
                  leftIcon={<FaTimes />}
                  onClick={close}
                  variant="outline"
                  colorScheme="gray"
                  size="lg"
                  px={8}
                  borderRadius="md"
                  _hover={{ bg: "gray.100" }}
                  transition="all 0.2s"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  leftIcon={<FaCheck />}
                  colorScheme="teal"
                  size="lg"
                  px={8}
                  borderRadius="md"
                  isLoading={loading}
                  onClick={() => setShowError(true)}
                  bgGradient="linear(to-r, teal.500, teal.600)"
                  _hover={{ bgGradient: "linear(to-r, teal.600, teal.700)" }}
                  transition="all 0.2s"
                >
                  Save
                </Button>
              </Flex>
            </VStack>
          </Form>
        )}}
      </Formik>
    </Box>
  );
};

export default FormComponent;