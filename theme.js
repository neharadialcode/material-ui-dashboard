import { createTheme, responsiveFontSizes, adaptV4Theme } from "@mui/material";

// breakpoints
const fhd = 1920;
const hd = 1600;
const laptop = 1366;
const xl = 1023;
const lg = 991;
const md = 767;
const sm = 575;

const theme = createTheme({
  palette: {
    text: {
      xs: "200px",
      sm: 13,
      md: 15,
      lg: 18,
    },
    color: {
      black: "#1F263E",
      white: "#fff",
      lightBlue: "#F3F6FE",
      red: "#EE2E6B",
      green: "#01C0AA",
      abc: "#1348FC",
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
    },
  },

  typography: {
    useNextVariants: true,
  },
});

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
