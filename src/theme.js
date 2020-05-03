/*
 *     This program is part of Portfolio.
 *
 *     Portfolio is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     Portfolio is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with Portfolio.  If not, see <https://www.gnu.org/licenses/>.
 */

/*
 *     This program is part of Portfolio.
 *
 *     Portfolio is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     Portfolio is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with Portfolio.  If not, see <https://www.gnu.org/licenses/>.
 */
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
