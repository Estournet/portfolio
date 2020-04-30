import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  typography: {
    fontFamily: ["Google Sans", "Roboto"].join(',')
  },
  palette: {
    primary: {
      main: "#d9307f"
    },
    secondary: {
      main: "#ad2e89"
    }
  }
});

export const lightTheme = {
  typography: {
    fontFamily: ["Google Sans", "Roboto"].join(',')
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
}

export const darkTheme = {
  typography: {
    fontFamily: ["Google Sans", "Roboto"].join(',')
  },
  palette: {
    primary: {
      main: "#d9307f"
    },
    secondary: {
      main: "#ad2e89"
    },
    type: "dark"
  }
}
