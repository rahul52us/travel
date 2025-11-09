import {
  SimpleGrid,
  Button,
  Box,
  Grid,
  GridItem,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import CustomInput from "../../../component/config/component/customInput/CustomInput";
import { leadStatusOptions, generateInitialValues } from "./utils/constant";

const Form = ({ initialData, onSubmit, isOpen, onClose }: any) => {
  const [formData, setFormData] = useState<any>(generateInitialValues({}));

  useEffect(() => {
    setFormData(generateInitialValues(initialData || {}));
  }, [initialData]);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    contact: Yup.string()
      .matches(/^(?:\+?[0-9]{1,3})?[-.\s]?[0-9]{10}$/, "Contact number is not valid")
      .required("Contact is required"),
    duration: Yup.number()
      .required("Duration is required")
      .positive("Duration must be a positive number")
      .typeError("Duration must be a valid number"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    departure: Yup.string().required("Departure location is required"),
    destination: Yup.string().required("Destination is required"),
    departureDate: Yup.date().required("Departure date is required"),
    budget: Yup.number()
      .required("Budget is required")
      .positive("Budget must be a positive number")
      .typeError("Budget must be a valid number"),
    noOfGuests: Yup.number()
      .required("No of Guests is required")
      .positive("No of Guests must be positive")
      .integer("No of Guests must be an integer")
      .typeError("No of Guests must be a valid number"),
    leadStatus: Yup.string().required("Lead status is required"),
    source: Yup.string(),
  });

  return (
    isOpen && (
      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        enableReinitialize={true}
        onSubmit={async (values: any) => {
          let submitData = {
            ...values,
            userType: "lead",
            leadStatus: values.leadStatus,
          };

          // ✅ Ensure no profileDetails is sent
          delete submitData.profileDetails;

          onSubmit(submitData);
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          errors,
          touched,
        }: any) => {
          return (
            <FormikForm onSubmit={handleSubmit}>
              <Box display="flex" justifyContent="space-between" mb={4}>
                <Text fontSize="lg" fontWeight="semibold">
                  {initialData?._id ? "Edit Lead" : "Add Lead"}
                </Text>
                <Button colorScheme="red" size="sm" onClick={onClose}>
                  Close
                </Button>
              </Box>

              <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                gap={6}
                mb={6}
              >
                <GridItem colSpan={2}>
                  <Text fontSize="lg" fontWeight="semibold" mb={4}>
                    Basic Details
                  </Text>

                  <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap={5}
                    p={4}
                    borderWidth={1}
                    borderRadius="md"
                    bg="white"
                  >
                    <CustomInput
                      label="Lead Status"
                      name="leadStatus"
                      type="select"
                      options={leadStatusOptions}
                      value={leadStatusOptions.find(opt => opt.value === values.leadStatus) || null}
                      onChange={(opt: any) => setFieldValue("leadStatus", opt?.value)}
                      error={errors.leadStatus && touched.leadStatus}
                      showError={errors.leadStatus && touched.leadStatus}
                    />

                    <CustomInput
                      label="Name"
                      name="name"
                      placeholder="Enter Name"
                      value={values.name}
                      onChange={handleChange}
                      error={errors.name && touched.name}
                      showError={errors.name && touched.name}
                    />

                    <CustomInput
                      label="Contact"
                      name="contact"
                      placeholder="Enter Contact Number"
                      value={values.contact}
                      onChange={handleChange}
                      error={errors.contact && touched.contact}
                      showError={errors.contact && touched.contact}
                    />

                    <CustomInput
                      label="Duration (Days)"
                      name="duration"
                      type="number"
                      placeholder="Enter Duration"
                      value={values.duration}
                      onChange={handleChange}
                      error={errors.duration && touched.duration}
                      showError={errors.duration && touched.duration}
                    />

                    <CustomInput
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Enter Email"
                      value={values.email}
                      onChange={handleChange}
                      error={errors.email && touched.email}
                      showError={errors.email && touched.email}
                    />

                    <CustomInput
                      label="Source"
                      name="source"
                      placeholder="Enter Lead Source"
                      value={values.source}
                      onChange={handleChange}
                      error={errors.source && touched.source}
                      showError={errors.source && touched.source}
                    />
                  </Grid>
                </GridItem>

                {/* Travel Details */}
                <GridItem colSpan={2}>
                  <Text fontSize="lg" fontWeight="bold" mb={4} color="teal.600">
                    Travel Details
                  </Text>

                  <SimpleGrid
                    columns={{ base: 1, md: 2 }}
                    spacing={4}
                    p={4}
                    borderWidth={1}
                    borderRadius="md"
                    bg="white"
                  >
                    <CustomInput
                      label="Departure"
                      name="departure"
                      placeholder="Enter Departure Location"
                      value={values.departure}
                      onChange={handleChange}
                      error={errors.departure && touched.departure}
                      showError={errors.departure && touched.departure}
                    />

                    <CustomInput
                      label="Destination"
                      name="destination"
                      placeholder="Enter Destination"
                      value={values.destination}
                      onChange={handleChange}
                      error={errors.destination && touched.destination}
                      showError={errors.destination && touched.destination}
                    />

                    <CustomInput
                      label="Departure Date"
                      name="departureDate"
                      type="date"
                      placeholder="Select Departure Date"
                      value={values.departureDate}
                      onChange={handleChange}
                      error={errors.departureDate && touched.departureDate}
                      showError={errors.departureDate && touched.departureDate}
                    />

                    <CustomInput
                      label="Budget (₹)"
                      name="budget"
                      type="number"
                      placeholder="Enter Budget"
                      value={values.budget}
                      onChange={handleChange}
                      error={errors.budget && touched.budget}
                      showError={errors.budget && touched.budget}
                    />

                    <CustomInput
                      label="No of Guests"
                      name="noOfGuests"
                      type="number"
                      placeholder="Enter No of Guests"
                      value={values.noOfGuests}
                      onChange={handleChange}
                      error={errors.noOfGuests && touched.noOfGuests}
                      showError={errors.noOfGuests && touched.noOfGuests}
                    />
                  </SimpleGrid>
                </GridItem>
              </Grid>

              <Flex justifyContent="flex-end" mt={4} gap={4}>
                <Button colorScheme="red" size="lg" onClick={onClose}>
                  Close
                </Button>
                <Button type="submit" colorScheme="teal" isLoading={isSubmitting} size="lg">
                  {initialData?._id ? "Update" : "Add"} Lead
                </Button>
              </Flex>
            </FormikForm>
          );
        }}
      </Formik>
    )
  );
};

export default Form;
