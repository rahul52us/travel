'use client';
import { extendTheme, ThemeConfig, StyleFunctionProps } from "@chakra-ui/react";

const colors = {
  brand: {
    50: "#f5f7ff",
    100: "#e6e9ff",
    200: "#c5c9ff",
    300: "#a4a9ff",
    400: "#8389ff",
    500: "#6269ff",
    600: "#4a51cc",
    700: "#333999",
    800: "#1b2166",
    900: "#040933",
  },
  darkBrand: {
    50: "#1b1f2d",
    100: "#2f3342",
    200: "#4a5066",
    300: "#5e6882",
    400: "#78829c",
    500: "#92a1b3",
    600: "#b1b8ca",
    700: "#c4ccd9",
    800: "#d7e1e8",
    900: "#eaf3f9",
  }
};

const fonts = {
  heading: "Montserrat, sans-serif",
  body: "Lato, sans-serif",
};

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: "bold",
    },
    sizes: {
      xl: {
        h: "56px",
        fontSize: "lg",
        px: "32px",
      },
    },
    variants: {
      solid: {
        bg: "brand.500",
        color: "white",
        _hover: {
          bg: "brand.600",
        },
      },
    },
  },
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: props.colorMode === "light" ? "brand.50" : "darkBrand.900",
      color: props.colorMode === "light" ? "brand.900" : "darkBrand.50",
    },
  }),
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors,
  fonts,
  breakpoints,
  components,
  styles,
  config,
});

export default theme;
