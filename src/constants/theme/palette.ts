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
    min?: string;
    max?: string;
    background?: string;
    darker?: string;
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
  }
  interface SimplePaletteColorOptions {
    min?: string;
    max?: string;
    background?: string;
    darker?: string;
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
  }
}

// define const darkPalette:PaletteOptions
export const palette: PaletteOptions = {
  neutral: {
    max: "#000000",
    background: "#292929",
    "900": "#3c3c3c",
    "800": "#606060",
    "700": "#818181",
    "600": "#979797",
    "500": "#C2C2C2",
    "400": "#DEDEDE",
    "300": "#F0F0F0",
    "200": "#F5F5F5",
    "100": "#FAFAFA",
    "50": "#FFFFFF",
  },
};
