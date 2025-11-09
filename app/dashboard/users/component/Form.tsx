import {
  SimpleGrid,
  Button,
  Box,
  Grid,
  GridItem,
  Text,
  Flex,
  VStack,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FieldArray, Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import CustomInput from "../../../component/config/component/customInput/CustomInput";
import {
  removeDataByIndex,
} from "../../../config/utils/utils";
import ShowFileUploadFile from "../../../component/common/ShowFileUploadFile/ShowFileUploadFile";
import { DeleteIcon } from "@chakra-ui/icons";
import { titles } from "./utils/constant";
import { generateIntialValues } from "./utils/function";
import { FiPlus, FiTrash2 } from "react-icons/fi";

const Form = ({ initialData, onSubmit, isOpen, onClose, isEdit }: any) => {
  const [formData, setFormData] = useState<any>(initialData);

  useEffect(() => {
    if (initialData) {
      setFormData(generateIntialValues(initialData));
    }
  }, [initialData]);

  const validationSchema = Yup.object({
    title: Yup.mixed().required("Title is required"),
    pic: Yup.mixed(),
    name: Yup.string().required("Name is required"),
    username: Yup.string().required("Username is required"),
    address: Yup.string(),
    languages: Yup.array(),
    bio: Yup.string().required("Bio is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
    phoneNumber: Yup.string()
      .matches(
        /^(?:\+?[0-9]{1,3})?[-.\s]?[0-9]{10}$/,
        "Phone number is not valid"
      )
      .required("Phone number is required"),
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
          console.log(errors)
          return (
            <FormikForm onSubmit={handleSubmit}>
              <Box display="flex" justifyContent="space-between" mb={4}>
                <Text fontSize="lg" fontWeight="semibold">
                  {initialData?.username ? "Edit Therapist" : "Add Therapist"}
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
                    Personal Information
                  </Text>
                  <SimpleGrid columns={{ base: 1, md: 1 }} spacing={4}>
                    <Box width="100%">
                      {values?.pic?.file?.length === 0 ? (
                        <CustomInput
                          type="file-drag"
                          name="pic"
                          value={values.pic}
                          isMulti={true}
                          accept="image/*"
                          onChange={(e: any) => {
                            setFieldValue("pic", {
                              ...values.pic,
                              file: e.target.files[0],
                              isAdd: 1,
                            });
                          }}
                          error={errors.pic}
                        />
                      ) : (
                        <Box mt={-5} width="100%">
                          <ShowFileUploadFile
                            files={values.pic?.file}
                            removeFile={() => {
                              setFieldValue("pic", {
                                ...values.image,
                                file: removeDataByIndex(values.pic, 0),
                                isDeleted: 1,
                              });
                            }}
                            edit={isEdit}
                          />
                        </Box>
                      )}
                    </Box>
                    <Grid
                      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
                      gap={5}
                      p={4}
                      borderWidth={1}
                      borderRadius="md"
                      boxShadow="sm"
                      bg="white"
                      mt={3}
                    >
                      <CustomInput
                        label="Title"
                        name="title"
                        type="select"
                        options={titles}
                        value={values.title}
                        onChange={(e: any) => setFieldValue("title", e)}
                        error={errors.title && touched.title}
                        showError={errors.title && touched.title}
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
                        label="Username"
                        name="username"
                        placeholder="Enter Username"
                        value={values.username}
                        onChange={handleChange}
                        error={errors.username && touched.username}
                        showError={errors.username && touched.username}
                      />
                      <CustomInput
                        label="Phone Number"
                        name="phoneNumber"
                        type="text"
                        placeholder="Enter Phone Number"
                        value={values.phoneNumber}
                        onChange={handleChange}
                        error={errors.phoneNumber && touched.phoneNumber}
                        showError={errors.phoneNumber && touched.phoneNumber}
                      />
                      <CustomInput
                        label="Code"
                        name="code"
                        placeholder="Enter Code"
                        value={values.code}
                        onChange={handleChange}
                        error={errors.code && touched.code}
                        showError={errors.code && touched.code}
                      />
                      <CustomInput
                      label="Languages"
                      name="languages"
                      placeholder="Add Language"
                      value={values.languages}
                      onChange={(newTags: any) =>
                        setFieldValue("languages", newTags)
                      }
                      type="tags"
                      error={errors.languages && touched.languages}
                      showError={errors.languages && touched.languages}
                    />
                    </Grid>
                    <Box
                      borderWidth={1}
                      borderRadius="md"
                      boxShadow="sm"
                      bg="white"
                      mt={3}
                      p={3}
                    >
                      <CustomInput
                        label="Bio"
                        name="bio"
                        type="textarea"
                        placeholder="Enter Bio"
                        value={values.bio}
                        onChange={handleChange}
                        error={errors.bio && touched.bio}
                        showError={errors.bio && touched.bio}
                        style={{ width: "100%" }}
                      />
                    </Box>
                    <Box
                      borderWidth={1}
                      borderRadius="md"
                      boxShadow="sm"
                      bg="white"
                      mt={3}
                      p={3}
                    >
                      <CustomInput
                        label="Address"
                        name="address"
                        type="textarea"
                        placeholder="Enter Address"
                        value={values.address}
                        onChange={handleChange}
                        error={errors.address && touched.address}
                        showError={errors.address && touched.address}
                        style={{ width: "100%" }}
                      />
                    </Box>
                  </SimpleGrid>
                </GridItem>
                {!isEdit && <GridItem colSpan={2}>
                  <Box
                    p={4}
                    borderWidth={1}
                    borderRadius="md"
                    boxShadow="sm"
                    bg="white"
                    mt={3}
                  >
                    <Text
                      fontSize="lg"
                      fontWeight="bold"
                      mb={4}
                      color="teal.600"
                    >
                      Authentication
                    </Text>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                      {!isEdit && (
                        <>
                          <CustomInput
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="Enter Password"
                            value={values.password}
                            onChange={handleChange}
                            error={errors.password && touched.password}
                            showError={errors.password && touched.password}
                          />
                          <CustomInput
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            value={values.confirmPassword}
                            onChange={handleChange}
                            error={
                              errors.confirmPassword && touched.confirmPassword
                            }
                            showError={
                              errors.confirmPassword && touched.confirmPassword
                            }
                          />
                        </>
                      )}{" "}
                    </SimpleGrid>
                  </Box>
                </GridItem>}
              </Grid>

              <Flex justifyContent="flex-end" mt={4}>
                <Flex gap={4}>
                  <Button
                    colorScheme="red"
                    size="lg"
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
                    size="lg"
                    _hover={{ bg: "teal.500" }}
                    width="auto"
                  >
                    {initialData?.username ? "Update" : "Add"} User
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
