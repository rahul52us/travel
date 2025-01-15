import {
    Box,
    Button,
    Grid,
    Input,
    Text,
    Textarea,
    VStack
} from "@chakra-ui/react";
import { useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    needs: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const payload = {
      name: formData.name,
      email: formData.email,
      companyName: formData.companyName,
      needs: formData.needs,
    };

    console.log("Payload:", payload);
    // Send payload to the server
    // Example: axios.post('/api/endpoint', payload)
  };
  return (
    <Box maxW={"90%"} mx={"auto"} my={12}>
      <Grid templateColumns={"1fr 1fr"} gap={4}>
        <Box>hello world!</Box>
        <Box w={"90%"}>
          <Text textTransform="uppercase" color="#DF837C">
            Contact us
          </Text>
          <Text fontSize={"2.6rem"} fontWeight={400} lineHeight={"3.4rem"}>
            Support for you or a loved one?
            <Text as="span" fontWeight={600}>
              {" "}
              Let's connect
            </Text>
          </Text>
          <Box p={8} border={"1px solid #065F68"} rounded={"16px"} mt={6}>
            <Text fontSize={"2xl"}>Enter Your Details</Text>
            <VStack spacing={5} align={"stretch"} mt={4}>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant={"filled"}
                placeholder="Name"
                bg={"#CBCBCB1A"}
              />
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                variant={"filled"}
                placeholder="Email"
                bg={"#CBCBCB1A"}
              />
              <Input
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                variant={"filled"}
                placeholder="Company Name"
                bg={"#CBCBCB1A"}
              />
              <Textarea
                name="needs"
                value={formData.needs}
                onChange={handleChange}
                variant={"filled"}
                placeholder="Tell Us About Your Needs"
                h={"5rem"}
                noOfLines={8}
                bg={"#CBCBCB1A"}
              />
              <Button
                bgGradient="linear(to-r, #065F68,#065F68, #2A8A94)"
                mt={2}
                shadow="base"
                w="100%"
                h="50px"
                rounded="8px"
                rightIcon={<LuArrowUpRight fontSize="22px" />}
                fontWeight={500}
                onClick={handleSubmit}
              >
                Take The First Step
              </Button>
            </VStack>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default ContactUs;
