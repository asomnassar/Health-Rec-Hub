import { createTheme, Theme as MuiTheme } from "@mui/material";

interface Theme {
  breakpoints: MuiTheme["breakpoints"];
  palette: MuiTheme["palette"];
  shadows: MuiTheme["shadows"];
  direction: MuiTheme["direction"];
  typography: MuiTheme["typography"];
}

const Theme = (): Theme => {
  const baseTheme = createTheme({
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
      },
      divider: "#ff00001a",
    },
    shadows: {
      0: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
      1: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;",
      4: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
      8: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
      16: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",

      17: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;",
      18: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
    },
    direction: "rtl",
  });

  baseTheme.typography = {
    fontFamily: "Ubuntu",
    pxToRem: (value) => `${value / 16}rem`,
    h1: {
      fontSize: "30px",
      [baseTheme.breakpoints.down("lg")]: {
        fontSize: "29px",
      },
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "28px",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "27px",
      },
      [baseTheme.breakpoints.down("xs")]: {
        fontSize: "26px",
      },
    },
    h2: {
      fontSize: "28px",
      [baseTheme.breakpoints.down("lg")]: {
        fontSize: "27px",
      },
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "26px",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "25px",
      },
      [baseTheme.breakpoints.down("xs")]: {
        fontSize: "24px",
      },
    },
    h3: {
      fontSize: "26px",
      [baseTheme.breakpoints.down("lg")]: {
        fontSize: "25px",
      },
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "24px",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "23px",
      },
      [baseTheme.breakpoints.down("xs")]: {
        fontSize: "22px",
      },
    },
    h4: {
      fontSize: "24px",
      [baseTheme.breakpoints.down("lg")]: {
        fontSize: "23px",
      },
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "22px",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "21px",
      },
      [baseTheme.breakpoints.down("xs")]: {
        fontSize: "20px",
      },
    },
    h5: {
      fontSize: "22px",
      [baseTheme.breakpoints.down("lg")]: {
        fontSize: "21px",
      },
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "20px",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "19px",
      },
      [baseTheme.breakpoints.down("xs")]: {
        fontSize: "18px",
      },
    },
    h6: {
      fontSize: "20px",
      [baseTheme.breakpoints.down("lg")]: {
        fontSize: "19px",
      },
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "18px",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "17px",
      },
      [baseTheme.breakpoints.down("xs")]: {
        fontSize: "16px",
      },
    },
    subtitle1: {
      fontSize: "18px",
      [baseTheme.breakpoints.down("lg")]: {
        fontSize: "17px",
      },
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "16px",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "15px",
      },
      [baseTheme.breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },
    subtitle2: {
      fontSize: "16px",
      [baseTheme.breakpoints.down("lg")]: {
        fontSize: "15px",
      },
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "14px",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "13px",
      },
      [baseTheme.breakpoints.down("xs")]: {
        fontSize: "12px",
      },
    },
    button: {
      fontSize: "20px",
      [baseTheme.breakpoints.down("lg")]: {
        fontSize: "19px",
      },
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "18px",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "17px",
      },
      [baseTheme.breakpoints.down("xs")]: {
        fontSize: "16px",
      },
    },
  };
  return baseTheme;
};

export default Theme;
