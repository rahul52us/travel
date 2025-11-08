"use client";
import { Button, Flex, VStack, SimpleGrid, Box, IconButton, Heading, Divider } from "@chakra-ui/react";
import { FaCheck, FaPlus, FaTimes, FaTrash } from "react-icons/fa";
import { FieldArray, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import CustomInput from "../../../component/config/component/customInput/CustomInput";
import { removeDataByIndex } from "../../../config/utils/utils";
import ShowFileUploadFile from "../../../component/common/ShowFileUploadFile/ShowFileUploadFile";
import validations from "./utils/validation";
import stores from "../../../store/stores";

const FormComponent = ({ loading, initialValues, onSubmit, close, isEdit }: any) => {
  const [showError, setShowError] = useState(false);
  const {locationStore : {getLocations, location}} = stores
  useEffect(() => {
    getLocations({page : 1})
  }, [getLocations])

  return (
    <Box
      p={8}
      w="full"
      overflowY="auto"
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      maxW="container.xl"
      mx="auto"
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
        {({
          handleChange,
          values,
          errors,
          setFieldValue,
        }: any) => {
          return(
          <Form>
            <VStack spacing={8} align="stretch" w="full">
              {/* Image Upload Section */}
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
    Image
  </Heading>
  {values?.image?.file?.length === 0 ? (
    <CustomInput
      type="file-drag"
      name="image"
      value={values.image}
      isMulti={true}
      accept="image/*"
      onChange={(e: any) => {
        setFieldValue("image", {
          ...values.image,
          file: e.target.files[0],
          isAdd: 1,
        });
      }}
      showError={showError}
    />
  ) : (
    <ShowFileUploadFile
      files={values.image?.file}
      removeFile={() => {
        setFieldValue("image", {
          ...values.image,
          file: removeDataByIndex(values.image, 0),
          isDeleted: 1,
        });
      }}
      edit={isEdit}
    />
  )}
</Box>

              {/* Form Fields */}
              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                spacing={6}
                w="full"
                bg="white"
                p={4}
                borderRadius="md"
                borderWidth={1}
                borderColor="gray.200"
              >
                <CustomInput
                  name="name"
                  placeholder="Enter the Name"
                  label="Name"
                  // type="text"
                  onChange={handleChange}
                  value={values.name}
                  error={errors.name}
                  showError={showError}
                  required={true}
                />
                <CustomInput
                  name="location"
                  placeholder="Enter the Location"
                  label="Location"
                  type="select"
                  onChange={(e : any) => setFieldValue('location', e)}
                  value={values.location}
                  error={errors.location}
                  showError={showError}
                  required={true}
                  options={location.data}
                  getOptionLabel={(options : any) => options.name}
                  getOptionValue={(options : any) => options._id}
                />
                <CustomInput
                  name="destination"
                  placeholder="Enter the Destination"
                  label="Destination"
                  type="tags"
                  onChange={(dt : any) => setFieldValue('destination', dt)}
                  value={values.destination}
                  error={errors.destination}
                  showError={showError}
                  required={true}
                />
                <CustomInput
                  name="price"
                  placeholder="Enter the Price"
                  label="Price"
                  onChange={handleChange}
                  value={values.price}
                  error={errors.price}
                  showError={showError}
                  required={true}
                />
                <CustomInput
                  name="days"
                  placeholder="Enter the Days"
                  label="Days"
                  onChange={handleChange}
                  value={values.days}
                  error={errors.days}
                  showError={showError}
                  required={true}
                />
                <CustomInput
                  name="rating"
                  placeholder="Enter the Rating"
                  label="Rating"
                  type="number"
                  onChange={handleChange}
                  value={values.rating}
                  error={errors.rating}
                  showError={showError}
                  required={true}
                />
                <CustomInput
                  type="tags"
                  name="perks"
                  placeholder="Add highlight (press Enter)"
                  label="Highlights"
                  onChange={(dt) => setFieldValue('perks',dt)}
                  value={values.perks}
                  error={errors.perks}
                  showError={showError}
                  required={true}
                />
                {/* <CustomInput
                  type="tags"
                  name="highlights"
                  placeholder="Add Highlights (press Enter)"
                  label="Highlights"
                  onChange={(dt) => setFieldValue('highlights',dt)}
                  value={values.highlights}
                  error={errors.highlights}
                  showError={showError}
                  required={true}
                /> */}
              </SimpleGrid>

              {/* Itinerary Section */}
              <Box w="full">
                <Flex justify="space-between" align="center" mb={4}>
                  <Heading size="md" color="gray.700">
                    Itinerary
                  </Heading>
                </Flex>
                <Divider mb={4} />
                <FieldArray name="itinerary">
                  {({ push, remove }) => (
                    <VStack spacing={4} w="full" align="stretch">
                      {values.itinerary.map((item: any, index: number) => (
                        <Flex
                          key={index}
                          w="full"
                          align="center"
                          gap={4}
                          p={3}
                          bg="gray.50"
                          borderRadius="md"
                          borderWidth={1}
                          borderColor="gray.200"
                        >
                          <CustomInput
                            name={`itinerary.${index}.place`}
                            placeholder="Enter Place"
                            label="Place"
                            onChange={handleChange}
                            value={item.place}
                            error={errors.itinerary?.[index]?.place}
                            showError={showError}
                            required={true}
                          />
                          <CustomInput
                            name={`itinerary.${index}.nights`}
                            placeholder="Nights"
                            label="Nights"
                            type="number"
                            onChange={handleChange}
                            value={item.nights}
                            error={errors.itinerary?.[index]?.nights}
                            showError={showError}
                            required={true}
                          />
                          <IconButton
                            icon={<FaTrash />}
                            aria-label="Remove itinerary item"
                            colorScheme="red"
                            variant="ghost"
                            size="sm"
                            onClick={() => remove(index)}
                            _hover={{ bg: "red.50" }}
                          />
                        </Flex>
                      ))}
                      <Button
                        leftIcon={<FaPlus />}
                        onClick={() => push({ place: "", nights: "" })}
                        colorScheme="teal"
                        variant="outline"
                        size="sm"
                        w="fit-content"
                      >
                        Add Itinerary Item
                      </Button>
                    </VStack>
                  )}
                </FieldArray>
                <Divider mt={4} mb={2} />
                <CustomInput
                  name="description"
                  type="textarea"
                  placeholder="Description"
                  label="Description"
                  onChange={handleChange}
                  value={values.description}
                  error={errors.description}
                  showError={showError}
                  required={true}
                />
              </Box>

              {/* Action Buttons */}
              <Flex
                justifyContent="flex-end"
                w="full"
                mt={8}
                gap={4}
                borderTopWidth={1}
                borderColor="gray.200"
                pt={6}
              >
                <Button
                  leftIcon={<FaTimes />}
                  onClick={close}
                  variant="outline"
                  colorScheme="gray"
                  size="md"
                  px={6}
                  _hover={{ bg: "gray.50" }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  leftIcon={<FaCheck />}
                  colorScheme="teal"
                  size="md"
                  px={6}
                  isLoading={loading}
                  onClick={() => setShowError(true)}
                  bg="teal.500"
                  _hover={{ bg: "teal.600" }}
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