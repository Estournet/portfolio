export const lightTheme = {
  typography: {
    fontFamily: ["Google Sans", "Roboto"].join(",")
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
    fontFamily: ["Google Sans", "Roboto"].join(",")
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
