"use client";
import {
  Button,
  Flex,
  VStack,
  Card,
  SimpleGrid,
  Heading,
  Box,
} from "@chakra-ui/react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { Form, Formik } from "formik";
import { useState } from "react";
import CustomInput from "../../../component/config/component/customInput/CustomInput";
import locationValidation from "../utils/validation";
import ShowFileUploadFile from "../../../component/common/ShowFileUploadFile/ShowFileUploadFile";
import { removeDataByIndex } from "../../../config/utils/utils";

const FormComponent: React.FC<any> = ({
  initialValues,
  onSubmit,
  close,
  isEdit,
  loading,
}) => {
  const [showError, setShowError] = useState(false);

  return (
    <Card p={8} borderRadius={10} bg="white" boxShadow="lg">
      <Formik
        initialValues={initialValues}
        validationSchema={locationValidation}
        onSubmit={(values, actions) => {
          onSubmit({ ...values }, actions);
        }}
      >
        {({ handleChange, values, errors, setFieldValue }: any) => (
          <Form>
            <VStack spacing={4} align="center">
              {/* Form Fields */}
              <SimpleGrid columns={{ base: 1, md: 1 }} spacing={6} w="full">
                {/* Image Upload */}
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

                {/* Name Field */}
                <CustomInput
                  name="name"
                  placeholder="Enter the Name"
                  label="Name"
                  onChange={handleChange}
                  value={values.name}
                  error={errors.name}
                  showError={showError}
                />
                <CustomInput
                  name="tagline"
                  placeholder="Enter the Tagline"
                  label="Tagline"
                  onChange={handleChange}
                  value={values.tagline}
                  error={errors.tagline}
                  showError={showError}
                />

                {/* Country Field */}
                <CustomInput
                  name="country"
                  placeholder="Enter Country"
                  label="Country"
                  onChange={handleChange}
                  value={values.country}
                  error={errors.country}
                  showError={showError}
                />
              </SimpleGrid>

              {/* Description Field */}
              <CustomInput
                name="description"
                placeholder="Description"
                label="Description"
                type="textarea"
                error={errors.description}
                onChange={handleChange}
                value={values.description}
                rows={4}
                showError={showError}
              />

              {/* Action Buttons */}
              <Flex justifyContent="end" w="full" mt={4}>
                <Button
                  leftIcon={<FaTimes />}
                  mr={3}
                  onClick={close}
                  variant="outline"
                  colorScheme="red"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  leftIcon={<FaCheck />}
                  colorScheme="blue"
                  isLoading={loading}
                  onClick={() => setShowError(true)}
                >
                  Save
                </Button>
              </Flex>
            </VStack>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default FormComponent;
