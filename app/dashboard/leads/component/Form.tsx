'use client'
import {
  SimpleGrid,
  Button,
  Grid,
  GridItem,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import CustomInput from "../../../component/config/component/customInput/CustomInput";

const LeadForm = ({ initialData, onSubmit, isOpen, onClose, isEdit }: any) => {
  const [formData, setFormData] = useState<any>(initialData);

  useEffect(() => {
  if (initialData) {
    setFormData({
      ...initialData,
      // 👇 Convert backend ISO date into YYYY-MM-DD for date input
      departureDate: initialData?.departureDate
        ? new Date(initialData.departureDate).toISOString().split("T")[0]
        : "",
    });
  } else {
    // 👇 Reset empty form
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      numberOfGuests: "",
      departureDate: "",
      duration: "",
      departure: "",
      destination: "",
      budget: "",
      budgetType: "",
    });
  }
}, [initialData]);


  // ✅ Validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(
        /^(?:\+?[0-9]{1,3})?[-.\s]?[0-9]{10}$/,
        "Phone number is not valid"
      )
      .required("Phone number is required"),
    numberOfGuests: Yup.number()
      .typeError("Number of guests must be a number")
      .min(1, "At least 1 guest required")
      .required("Number of guests is required"),
    departureDate: Yup.date().required("Departure date is required"),
    duration: Yup.string().required("Duration is required"),
    departure: Yup.string().required("Departure is required"),
    destination: Yup.string().required("Destination is required"),
    budget: Yup.number()
      .typeError("Budget must be a number")
      .min(0, "Budget must be positive")
      .required("Budget is required"),
    budgetType: Yup.mixed()
  });

  return (
    isOpen && (
      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        enableReinitialize={true}
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
          return(
          <FormikForm onSubmit={handleSubmit}>
            {/* Lead Information */}
            <Grid
              templateColumns={{ base: "1fr", md: "1fr 1fr" }}
              gap={6}
              mb={6}
              alignItems="center"
            >
              <GridItem colSpan={2}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                  <CustomInput
                    label="Full Name"
                    name="name"
                    placeholder="Enter full name"
                    value={values.name}
                    onChange={handleChange}
                    error={errors.name && touched.name}
                    showError={errors.name && touched.name}
                  />

                  <CustomInput
                    label="Email"
                    name="email"
                    placeholder="Enter email address"
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email && touched.email}
                    showError={errors.email && touched.email}
                  />

                  <CustomInput
                    label="Phone Number"
                    name="phoneNumber"
                    placeholder="Enter phone number"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    error={errors.phoneNumber && touched.phoneNumber}
                    showError={errors.phoneNumber && touched.phoneNumber}
                  />

                  <CustomInput
                    label="Number of Guests"
                    name="numberOfGuests"
                    type="number"
                    placeholder="Enter number of guests"
                    value={values.numberOfGuests}
                    onChange={handleChange}
                    error={errors.numberOfGuests && touched.numberOfGuests}
                    showError={errors.numberOfGuests && touched.numberOfGuests}
                  />

                  <CustomInput
                    label="Departure Date"
                    name="departureDate"
                    type="date"
                    value={values.departureDate}
                    onChange={handleChange}
                    error={errors.departureDate && touched.departureDate}
                    showError={errors.departureDate && touched.departureDate}
                  />

                  <CustomInput
                    label="Duration"
                    name="duration"
                    placeholder="e.g., 5 Days / 4 Nights"
                    value={values.duration}
                    onChange={handleChange}
                    error={errors.duration && touched.duration}
                    showError={errors.duration && touched.duration}
                  />

                  <CustomInput
                    label="Departure City"
                    name="departure"
                    placeholder="Enter departure location"
                    value={values.departure}
                    onChange={handleChange}
                    error={errors.departure && touched.departure}
                    showError={errors.departure && touched.departure}
                  />

                  <CustomInput
                    label="Destination"
                    name="destination"
                    placeholder="Enter destination"
                    value={values.destination}
                    onChange={handleChange}
                    error={errors.destination && touched.destination}
                    showError={errors.destination && touched.destination}
                  />

                  <CustomInput
                    label="Budget"
                    name="budget"
                    type="number"
                    placeholder="Enter estimated budget"
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
                      { label: "Per Person", value: "per_person" },
                      { label: "Total", value: "total" },
                    ]}
                    value={values.budgetType}
                    onChange={(e: any) => setFieldValue("budgetType", e)}
                    error={errors.budgetType && touched.budgetType}
                  />
                </SimpleGrid>
              </GridItem>
            </Grid>

            {/* Buttons */}
            <Flex justifyContent="flex-end" mt={4}>
              <Flex gap={4}>
                <Button
                  colorScheme="red"
                  size="lg"
                  onClick={onClose}
                  _hover={{ bg: "red.500" }}
                >
                  Close
                </Button>
                <Button
                  type="submit"
                  colorScheme="teal"
                  isLoading={isSubmitting}
                  loadingText="Submitting"
                  size="lg"
                  _hover={{ bg: "teal.500" }}
                >
                  {isEdit ? "Update Lead" : "Add Lead"}
                </Button>
              </Flex>
            </Flex>
          </FormikForm>
        )}}
      </Formik>
    )
  );
};

export default LeadForm;
