import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 520,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1440,
    },
    unit: "px",
  },
  palette: {
    common: {
      white: "#fff",
      black: "#333",
    },
    primary: {
      main: "#1B9CE4",
    },
    secondary: {
      main: "#64EBB6",
    },
    success: {
      main: "#55C42E",
      dark: "#00c16e",
    },
    warning: {
      main: "#ffdd00",
    },
    error: {
      main: "#f85a40",
    },
    divider: "#ff00001a",
  },
  shadows: [
    "none",
    "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    // Add additional shadow values here to match the required length
    "0px 0px 0px 0px rgba(0,0,0,0.0)",
    "0px 1px 3px 0px rgba(0,0,0,0.12),0px 1px 2px 0px rgba(0,0,0,0.24)",
    "0px 2px 6px 0px rgba(0,0,0,0.16),0px 2px 6px 0px rgba(0,0,0,0.23)",
    "0px 3px 9px -1px rgba(0,0,0,0.12),0px 3px 9px 0px rgba(0,0,0,0.24)",
    "0px 3px 12px 0px rgba(0,0,0,0.12),0px 3px 16px 0px rgba(0,0,0,0.24)",
    "0px 6px 24px 0px rgba(0,0,0,0.12),0px 6px 30px 0px rgba(0,0,0,0.24)",
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
  ],
  direction: "rtl",
});

theme.typography = {
  fontFamily: "Ubuntu",
  pxToRem: (value) => `${value / 16}rem`,
  fontWeightMedium: "",
  fontWeightRegular: "",
  fontWeightBold: "",
  fontWeightLight: "",
  h1: {
    fontSize: "30px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "29px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "27px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "26px",
    },
  },
  h2: {
    fontSize: "28px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "27px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "26px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "24px",
    },
  },
  h3: {
    fontSize: "26px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "25px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "23px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "22px",
    },
  },
  h4: {
    fontSize: "24px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "23px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "22px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "21px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  },
  h5: {
    fontSize: "22px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "21px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "19px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
  },
  h6: {
    fontSize: "20px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "19px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "17px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
    },
  },
  subtitle1: {
    fontSize: "18px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "17px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  subtitle2: {
    fontSize: "16px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
  button: {
    fontSize: "20px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "19px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "17px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
    },
  },
  body1: {
    fontSize: "20px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "19px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "17px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
    },
  },
  body2: {
    fontSize: "20px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "19px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "17px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
    },
  },
  caption: {
    fontSize: "20px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "19px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "17px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
    },
  },
  overline: {
    fontSize: "10px",
  },
  fontSize: 16,
  htmlFontSize: 16,
};

export default theme;
