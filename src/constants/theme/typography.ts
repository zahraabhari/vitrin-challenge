import {
  TypographyOptions,
  TypographyStyleOptions,
} from "@mui/material/styles/createTypography";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    label: TypographyStyleOptions;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    label?: TypographyStyleOptions;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    label: true;
  }
}

export const typography: TypographyOptions = {
  fontFamily: "Roboto,sans-serif",
  h1: {
    fontWeight: 500,
    fontSize: "2.5rem",
    lineHeight: "4rem",
    letterSpacing: -1.5,
    "@media(max-width:768px)": {
      fontWeight: 500,
      fontSize: "1.87rem",
      lineHeight: "2.81rem",
      letterSpacing: -1.5,
    },
  },
  h2: {
    fontWeight: 500,
    fontSize: "2.25rem",
    lineHeight: "3.6rem",
    letterSpacing: -0.5,
    "@media(max-width:768px)": {
      fontWeight: 500,
      fontSize: "1.75rem",
      lineHeight: "2.62rem",
      letterSpacing: -1.5,
    },
  },
  h3: {
    fontWeight: 400,
    fontSize: "2rem",
    lineHeight: "3.2rem",
    letterSpacing: 0,
    "@media(max-width:768px)": {
      fontWeight: 400,
      fontSize: "1.62rem",
      lineHeight: "2.43rem",
      letterSpacing: 0,
    },
  },
  subtitle1: {
    fontWeight: 400,
    fontSize: "1.125rem",
    lineHeight: "1.8rem",
    letterSpacing: 0.15,
    "@media(max-width:768px)": {
      fontWeight: 400,
      fontSize: "1.25rem",
      lineHeight: "1.87rem",
      letterSpacing: 0.15,
    },
  },
  body1: {
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "1.6rem",
    letterSpacing: 0.5,
    "@media(max-width:768px)": {
      fontWeight: 400,
      fontSize: "1.115rem",
      lineHeight: "1.68rem",
      letterSpacing: 0.5,
    },
  },
};
