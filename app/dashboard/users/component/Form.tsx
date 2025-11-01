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
import {
  insertUniqueFile,
  removeDataByIndex,
} from "../../../config/utils/utils";
import ShowFileUploadFile from "../../../component/common/ShowFileUploadFile/ShowFileUploadFile";

const Form = ({
  initialData,
  onSubmit,
  isOpen,
  onClose,
  thumbnail,
  setThumbnail,
  existingLeads = [], // Array of existing leads to calculate the next lead number
}: any) => {
  // Function to generate reference ID
  const generateReferenceId = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = today.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const year = today.getFullYear();
    
    // Filter leads created today
    const todayString = `${day}${month}${year}`;
    const todayLeads = existingLeads.filter((lead: any) => 
      lead.referenceId?.startsWith(todayString)
    );
    
    // Get the next lead number for today
    const leadNumber = todayLeads.length + 1;
    
    return `${todayString}L${leadNumber}`;
  };

  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    phoneNumber: "",
    referenceId: "",
    numberOfGuests: "",
    departureDate: undefined,
    duration: "",
    departure: "",
    destination: "",
    budget: "",
    budgetType: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      // Generate reference ID for new bookings
      setFormData((prev: any) => ({
        ...prev,
        referenceId: generateReferenceId(),
      }));
    }
  }, [initialData, existingLeads]);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(
        /^(?:\+?[0-9]{1,3})?[-.\s]?[0-9]{10}$/,
        "Phone number is not valid"
      )
      .required("Phone number is required"),
    referenceId: Yup.string().required("Reference ID is required"),
    numberOfGuests: Yup.number()
      .required("Number of guests is required")
      .positive("Must be a positive number")
      .integer("Must be a whole number")
      .typeError("Must be a valid number"),
    departureDate: Yup.date().required("Departure date is required"),
    duration: Yup.string().required("Duration is required"),
    departure: Yup.string().required("Departure location is required"),
    destination: Yup.string().required("Destination is required"),
    budget: Yup.number()
      .required("Budget is required")
      .positive("Budget must be a positive number")
      .typeError("Budget must be a valid number"),
    budgetType: Yup.string().required("Budget type is required"),
  });

  return (
    isOpen && (
      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={async (values: any) => {
          onSubmit(values);
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
                  {initialData?.referenceId ? "Edit Booking" : "Add Leads"}
                </Text>
                <Button colorScheme="red" size="sm" onClick={onClose}>
                  Close
                </Button>
              </Box>

              <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                gap={6}
                mb={6}
                alignItems="center"
              >
                {/* Section 1: Personal Info */}
                <GridItem colSpan={2}>
                  <Text fontSize="lg" fontWeight="semibold" mb={4}>
                    Contact Information
                  </Text>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
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
                      label="Email"
                      name="email"
                      type="text"
                      placeholder="Enter Email"
                      value={values.email}
                      onChange={handleChange}
                      error={errors.email && touched.email}
                      showError={errors.email && touched.email}
                    />
                    <CustomInput
                      label="Contact"
                      name="phoneNumber"
                      type="text"
                      placeholder="Enter Phone Number"
                      value={values.phoneNumber}
                      onChange={handleChange}
                      error={errors.phoneNumber && touched.phoneNumber}
                      showError={errors.phoneNumber && touched.phoneNumber}
                    />
                    <CustomInput
                      label="Reference ID"
                      name="referenceId"
                      placeholder="Auto-generated Reference ID"
                      value={values.referenceId}
                      onChange={handleChange}
                      error={errors.referenceId && touched.referenceId}
                      showError={errors.referenceId && touched.referenceId}
                      disabled={true}
                    />
                  </SimpleGrid>
                </GridItem>

                {/* Section 2: Travel Details */}
                <GridItem colSpan={2}>
                  <Text fontSize="lg" fontWeight="semibold" mb={4}>
                    Travel Details
                  </Text>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    <CustomInput
                      label="Number of Guests"
                      name="numberOfGuests"
                      type="number"
                      placeholder="Enter Number of Guests"
                      value={values.numberOfGuests}
                      onChange={handleChange}
                      error={errors.numberOfGuests && touched.numberOfGuests}
                      showError={errors.numberOfGuests && touched.numberOfGuests}
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
                      label="Duration"
                      name="duration"
                      placeholder="Enter Duration (e.g., 5 days)"
                      value={values.duration}
                      onChange={handleChange}
                      error={errors.duration && touched.duration}
                      showError={errors.duration && touched.duration}
                    />
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
                  </SimpleGrid>
                </GridItem>

                {/* Section 3: Budget Information */}
                <GridItem colSpan={2}>
                  <Text fontSize="lg" fontWeight="semibold" mb={4}>
                    Budget Information
                  </Text>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    <CustomInput
                      label="Budget"
                      name="budget"
                      type="number"
                      placeholder="Enter Budget Amount"
                      value={values.budget}
                      onChange={handleChange}
                      error={errors.budget && touched.budget}
                      showError={errors.budget && touched.budget}
                    />
                    <CustomInput
                      label="Budget Type"
                      name="budgetType"
                      type="select"
                      options={[
                        { label: "Luxury (without flights)", value: "luxury_without_flights" },
                        { label: "Luxury (with flights)", value: "luxury_with_flights" },
                        { label: "Per Person Onward", value: "per_person_onward" },
                        { label: "Total Package", value: "total_package" },
                      ]}
                      value={values.budgetType}
                      onChange={(e: any) => setFieldValue("budgetType", e)}
                      error={errors.budgetType && touched.budgetType}
                      showError={errors.budgetType && touched.budgetType}
                    />
                  </SimpleGrid>
                </GridItem>
              </Grid>

              <Flex justifyContent="flex-end" mt={4}>
                <Flex gap={4}>
                  <Button
                    colorScheme="red"
                    size="md"
                    onClick={onClose}
                    _hover={{ bg: "red.500" }}
                    width="auto"
                  >
                    Close
                  </Button>
                  <Button
                    type="submit"
                    colorScheme="teal"
                    isLoading={isSubmitting}
                    loadingText="Submitting"
                    size="md"
                    _hover={{ bg: "teal.500" }}
                    width="auto"
                  >
                    {initialData?.referenceId ? "Update" : "Add"} Booking
                  </Button>
                </Flex>
              </Flex>
            </FormikForm>
          );
        }}
      </Formik>
    )
  );
};

export default Form;