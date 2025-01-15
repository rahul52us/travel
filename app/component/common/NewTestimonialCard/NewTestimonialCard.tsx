import { StarIcon } from "@chakra-ui/icons";
import { Avatar, Box, Card, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";

const NewTestimonialCard = ({
  stars,
  text,
  avatarSrc,
  name,
  time,
  logoSrc,
}) => {
  return (
    <Box>
      <Card
        // maxW={"sm"}
        h={"300px"} // Set a fixed height for the card
        py={10}
        px={6}
        border={"1px solid #045B64"}
        rounded={"16px"}
        bg={"#FFFFFF"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"} // Ensure content is spaced appropriately
      >
        <Box>
          <Flex gap={1}>
            {Array.from({ length: stars }, (_, i) => (
              <Icon key={i} color={"gold"} as={StarIcon} />
            ))}
          </Flex>
          <Text
            noOfLines={4} // Limit the number of lines for text
            fontSize={"18px"}
            mt={6}
            color={"#4D4D4D"}
          >
            {text}
          </Text>
        </Box>
        <Flex justify={"space-between"} align={"end"}>
          <Flex mt={6} gap={3} align={"center"}>
            <Avatar boxSize={"40px"} name={name} src={avatarSrc} />
            <Box>
              <Text fontSize={"18px"} color={"#063231"}>
                {name}
              </Text>
              <Text fontSize={"xs"} color={"#063231"}>
                {time}
              </Text>
            </Box>
          </Flex>
          <Box boxSize={8} mb={2}>
            <Image src={logoSrc} />
          </Box>
        </Flex>
      </Card>
    </Box>
  );
};

export default NewTestimonialCard;
