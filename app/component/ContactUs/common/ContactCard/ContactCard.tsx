import { Box, Flex, Image, Text } from "@chakra-ui/react";

const ContactCard = ({ bg, icon, title, content, onClick }) => {
    return (
      <Box
        py={{base:3,lg:5}}
        pl={4}
        h={'fit-content'}
        bg={bg}
        border={"1px solid #DBDBDB"}
        rounded={"16px"}
        cursor={onClick ? "pointer" : "default"}
        onClick={onClick}
        shadow={'#0000001F 0px 2px 11px'}
        _hover={{transform: 'scale(1.04)'}}
        transition={'0.3s'}
      >
        <Flex gap={2} align="center">
          <Image src={icon} boxSize={{base:10,lg:14}} alt={`${title} icon`} />
          <Box>
            <Text fontSize={"lg"} fontWeight={700} color={"#434343"}>
              {title}
            </Text>
            <Text color={"#434343"} fontSize={"sm"} pr={2}>
              {content}
            </Text>
          </Box>
        </Flex>
      </Box>
    );
  };
  export default ContactCard