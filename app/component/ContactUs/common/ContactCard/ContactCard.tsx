import { Box, Flex, Image, Text } from "@chakra-ui/react";

const ContactCard = ({ bg, icon, title, content, onClick }) => {
    return (
      <Box
        py={7}
        pl={6}
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
          <Image src={icon} boxSize={14} alt={`${title} icon`} />
          <Box>
            <Text fontSize={"lg"} fontWeight={700} color={"#434343"}>
              {title}
            </Text>
            <Text color={"#434343"} fontSize={"sm"}>
              {content}
            </Text>
          </Box>
        </Flex>
      </Box>
    );
  };
  export default ContactCard