import { createTheme, responsiveFontSizes, adaptV4Theme } from "@mui/material";

// breakpoints
const fhd = 1920;
const hd = 1600;
const laptop = 1366;
const xl = 1023;
const lg = 991;
const md = 767;
const sm = 575;
const defaultSize = 0;

const theme = createTheme({
  palette: {
    color: {
      black: "#1F263E",
      white: "#fff",
      lightBlue: "#F3F6FE",
      red: "#EE2E6B",
      green: "#01C0AA",
      blue: "#1348FC",
      lightWhite: "rgba(255, 255, 255, 0.182)",
      skyBlue: "rgba(80, 184, 228, 1)",
    },
  },
  breakpoints: {
    values: {
      xl,
      lg,
      md,
      sm,
      hd,
      fhd,
      laptop,
      defaultSize,
    },
  },
});

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
