import { createTheme } from "@mui/material";
import { darkPalette, lightPalette } from "./palette";
import { typography } from "./typography";

export const lightTheme = createTheme({ palette: lightPalette, typography });
export const darkTheme = createTheme({ palette: darkPalette, typography });

export const Themes = [lightTheme, darkTheme];
