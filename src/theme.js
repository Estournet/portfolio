const fontFamily = [
  "Google Sans", "Roboto",
  "-apple-system",
  "BlinkMacSystemFont",
  "\"Segoe UI\"",
  "\"Helvetica Neue\"",
  "Arial",
  "sans-serif",
  "\"Apple Color Emoji\"",
  "\"Segoe UI Emoji\"",
  "\"Segoe UI Symbol\""
].join(",");

export const lightTheme = {
  typography: {
    fontFamily
  },
  palette: {
    primary: {
      main: "#d9307f"
    },
    secondary: {
      main: "#ad2e89"
    },
    type: "light"
  }
};

export const darkTheme = {
  typography: {
    fontFamily
  },
  palette: {
    primary: {
      main: "#d9307f"
    },
    secondary: {
      main: "#fe6a55"
    },
    type: "dark"
  },
  overrides: {
    MuiDivider: {
      root: {
        background: "linear-gradient(135deg, #5770FF 0, #FF75B3 60%, #FF7C6B 100%)"
      }
    }
  }
};
