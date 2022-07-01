import { PaletteOptions } from "@mui/material";

// declare  module (override MUi types)
declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }
  interface PaletteColor {
    "900"?: string;
    "800"?: string;
    "700"?: string;
    "600"?: string;
    "500"?: string;
    "400"?: string;
    "300"?: string;
    "200"?: string;
    "100"?: string;
    "50"?: string;
    "0"?: string;
  }
  interface SimplePaletteColorOptions {
    "900"?: string;
    "800"?: string;
    "700"?: string;
    "600"?: string;
    "500"?: string;
    "400"?: string;
    "300"?: string;
    "200"?: string;
    "100"?: string;
    "50"?: string;
    "0"?: string;
  }
}

// define const darkPalette:PaletteOptions
export const lightPalette: PaletteOptions = {
  mode: "light",
  neutral: {
    "900": "#000000",
    "800": "#262626",
    "700": "#434343",
    "600": "#555555",
    "500": "#7B7B7B",
    "400": "#9D9D9D",
    "300": "#C4C4C4",
    "200": "#D9D9D9",
    "100": "#E9E9E9",
    "50": "#F5F5F5",
    "0": "#FFFFFF",
  },
  text: {
    primary: "#000000",
    secondary: "#262626",
  },
};
export const darkPalette: PaletteOptions = {
  mode: "dark",
  neutral: {
    "0": "#000000",
    "50": "#262626",
    "100": "#434343",
    "200": "#555555",
    "300": "#7B7B7B",
    "400": "#9D9D9D",
    "500": "#C4C4C4",
    "600": "#D9D9D9",
    "700": "#E9E9E9",
    "800": "#F5F5F5",
    "900": "#FFFFFF",
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#F5F5F5",
  },
};
