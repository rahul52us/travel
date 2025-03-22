import { Text } from "@chakra-ui/react";
import type { ResponsiveValue } from "@chakra-ui/react"; // Import ResponsiveValue
import type { Property } from "csstype"; // Import Property type from csstype

interface Props {
  children: React.ReactNode;
  textAlign?: ResponsiveValue<Property.TextAlign>; // Use TextAlign from csstype
  fontSize?: ResponsiveValue<string>; // Font size remains the same
  color?: string;
}

const CustomSmallTitle = ({
  children,
  textAlign = { base: "center", lg: "center" }, // Default props
  fontSize = { base: "14px", md: "16px" },
  // color = "#DF837C",
  ...props
}: Props) => {
  return (
    <Text
      textTransform="uppercase"
      // color={color}
      textAlign={textAlign}
      fontSize={fontSize}
      {...props} // Spread to allow additional props
    >
      {children}
    </Text>
  );
};

export default CustomSmallTitle;
