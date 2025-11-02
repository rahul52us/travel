'use client';
import { Button, Flex, VStack, Card, SimpleGrid, Box } from "@chakra-ui/react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { Form, Formik } from "formik";
import { useState } from "react";
import CustomInput from "../../../component/config/component/customInput/CustomInput";
import ShowFileUploadFile from "../../../component/common/ShowFileUploadFile/ShowFileUploadFile";
import { removeDataByIndex } from "../../../config/utils/utils";
import itineraryValidation from "./utils/validation";

interface ItineraryFormProps {
  initialValues: {
    title: string;
    description: string;
    duration: string;
    destination: string;
    price?: string;
    image?: any;
  };
  onSubmit: any;
  close: () => void;
  isEdit?: boolean;
}

const ItineraryForm: React.FC<ItineraryFormProps> = ({
  initialValues,
  onSubmit,
  close,
  isEdit,
}) => {
  const [showError, setShowError] = useState(false);

  return (
    <Card p={8} borderRadius={10} bg="white" boxShadow="lg">
      <Formik
        initialValues={initialValues}
        validationSchema={itineraryValidation}
        onSubmit={(values, actions) => {
          onSubmit({ ...values, price: values.price ? String(values.price) : "" }, actions);
        }}
      >
        {({
          handleChange,
          values,
          errors,
          isSubmitting,
          setFieldValue,
        }: any) => (
          <Form>
            <VStack spacing={4} align="center">
              {/* Image Upload Section */}
              <Box width="100%">
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
                    error={errors.image}
                  />
                ) : (
                  <Box mt={-5} width="100%">
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
                  </Box>
                )}
              </Box>

              {/* Form Fields */}
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
                <CustomInput
                  name="title"
                  placeholder="Enter Itinerary Title"
                  label="Title"
                  onChange={handleChange}
                  value={values.title}
                  error={errors.title}
                  showError={showError}
                />
                <CustomInput
                  name="destination"
                  placeholder="Enter Destination"
                  label="Destination"
                  onChange={handleChange}
                  value={values.destination}
                  error={errors.destination}
                  showError={showError}
                />
                <CustomInput
                  name="duration"
                  placeholder="Enter Duration (e.g., 5 Days)"
                  label="Duration"
                  onChange={handleChange}
                  value={values.duration}
                  error={errors.duration}
                  showError={showError}
                />
                <CustomInput
                  name="price"
                  placeholder="Enter Price"
                  label="Price"
                  onChange={handleChange}
                  value={values.price}
                  error={errors.price}
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
                  isLoading={isSubmitting}
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

export default ItineraryForm;