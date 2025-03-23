'use client';
import {  Button, Flex, VStack, Card, SimpleGrid, Box } from "@chakra-ui/react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { Form, Formik } from "formik";
import { useState } from "react";
import CustomInput from "../../../component/config/component/customInput/CustomInput";
import locationValidation from "../utils/validation";

interface LocationFormProps {
  initialValues: { name: string; description: string; };
  onSubmit: any;
  close: () => void;
  isEdit?:boolean
}

const FormControl: React.FC<LocationFormProps> = ({ initialValues, onSubmit, close, isEdit }) => {
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
        {({ handleChange, values, errors, isSubmitting, setFieldValue } : any) => (
          <Form>
            <VStack spacing={4} align="center">
              {/* Form Fields */}
              <SimpleGrid columns={{ base: 1, md: 1 }} spacing={6} w="full">
                <CustomInput
                  name="name"
                  placeholder="Enter the Name"
                  label="Name"
                  onChange={handleChange}
                  value={values.name}
                  error={errors.name}
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
                <Button leftIcon={<FaTimes />} mr={3} onClick={close} variant="outline" colorScheme="red">
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

export default FormControl;