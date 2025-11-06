import { action, makeObservable, observable } from "mobx";
import _ from "lodash";

class ThemeStore {
  openThemeDrawer = {
    open: false,
  };

  backthemeConfig = {
    fonts: {
      size: {
        xs: "0.8rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "1.8rem",
        xl: "2rem",
        "2xl": "2.5rem",
        "3xl": "3rem",
        "4xl": "3.5rem",
      },
    },
    colors: {
      brand: {
        50: "#ebf8ff",
        100: "#097899",
        200: "#f5f5f5",
        300: "#63b3ed",
        400: "#4299e1", // Vibrant Blue
        500: "#3182ce",
        600: "#2b6cb0",
        700: "#2c5282",
        800: "#2a4365",
        900: "#1a365d",
      },
      light: {
        primary: {
          50: "#FFEBEE",
          100: "#FFCDD2",
          200: "#EF9A9A",
          300: "#E57373",
          400: "#EF5350",
          500: "#F44336",
          600: "#E53935",
          700: "#D32F2F",
          800: "#C62828",
          900: "#B71C1C",
        },
        secondary: "#ffffff",
      },
      dark: {
        primary: {
          50: "#FFEBEE",
          100: "#FFCDD2",
          200: "#EF9A9A",
          300: "#E57373",
          400: "#EF5350",
          500: "#F44336",
          600: "#E53935",
          700: "#D32F2F",
          800: "#C62828",
          900: "#B71C1C",
        },
        secondary: "#000000",
      },
      custom: {
        light: {
          primary: "#1C86EE",
          secondary: "#ffffff",
        },
        dark: {
          primary: "#1A202C",
          secondary: "#000000",
        },
      },
    },
    config: {
      initialColorMode: "light",
      useSystemColorMode: false,
    },
  };

  themeConfig = { ...this.backthemeConfig };

  constructor() {
    makeObservable(this, {
      themeConfig: observable,
      openThemeDrawer: observable,
      setOpenThemeDrawer: action,
      setThemeConfig: action,
      resetTheme: action,
    });

    if (typeof window !== "undefined") {
      // Ensure this only runs on the client-side
      const storedThemeConfig = localStorage.getItem(
        process.env.NEXT_PUBLIC_THEME_STORE || "theme_config"
      );
      if (storedThemeConfig) {
        try {
          this.themeConfig = JSON.parse(storedThemeConfig);
        } catch ({}) {
          this.resetTheme();
        }
      }
    }
  }

  setThemeConfig = (key: string, value: any) => {
    _.set(this.themeConfig, key, value);
    if (typeof window !== "undefined") {
      localStorage.setItem(
        process.env.NEXT_PUBLIC_THEME_STORE || "theme_config",
        JSON.stringify(this.themeConfig)
      );
    }
  };

  setOpenThemeDrawer = () => {
    this.openThemeDrawer.open = !this.openThemeDrawer.open;
  };

  resetTheme = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(
        process.env.NEXT_PUBLIC_THEME_STORE || "theme_config"
      );
    }
    this.themeConfig = { ...this.backthemeConfig };
  };
}

export const themeStore = new ThemeStore();
