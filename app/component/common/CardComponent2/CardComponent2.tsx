import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const CardComponent2 = ({ image, title, description, borderRadius }) => {
    return (
      <Box
        p={6}
        border={"2px solid"}
        borderColor={"#065F68"}
        rounded={"10px"}
        borderTopLeftRadius={borderRadius?.topLeft}
        borderBottomRightRadius={borderRadius?.bottomRight}
      >
        <Image src={image} boxSize={"80px"} objectFit={"contain"} />
        <Text fontWeight={500} fontSize={"22px"} color={"#2C2B2B"} my={2}>
          {title}
        </Text>
        <Text color={"#434343"} fontSize={"17px"}>
          {description.split("67%").map((text, index, array) => (
            <React.Fragment key={index}>
              {text}
              {index < array.length - 1 && (
                <Text as={"span"} color={"red.300"}>
                  67%
                </Text>
              )}
            </React.Fragment>
          ))}
        </Text>
      </Box>
    );
  };

export default CardComponent2;
