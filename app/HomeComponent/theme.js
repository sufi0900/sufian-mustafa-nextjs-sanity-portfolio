"use client";
import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
export const theme = createTheme({
  palette: {
    primary: blue,
    background: "",
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: "20px",
          color: "white",
          textTransform: "initial",
          transition: "0.1s",
          background: "transparent",

          "&:hover": {
            background: "rgb(255, 0, 204)",
            borderRadius: "7px ",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          color: "red",
          transition: "0.1s",
          cursor: `url(https://res.cloudinary.com/dtvtphhsc/image/upload/v1692819139/Images/CursorPointer_ryq6sc.png) 4 4, auto`,
          "&:hover": {
            background: "rgba(62, 62, 253, 0.815)",
            borderRadius: "13px ",
          },
        },
        indicator: {
          display: "none",
        },
      },
    },
    global: {
      body: {
        cursor: `url(https://res.cloudinary.com/dtvtphhsc/image/upload/v1692819139/Images/CursorPointer_ryq6sc.png) 4 4, auto`,
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          // background:
          //   "linear-gradient(\n    90deg,\n    rgba(78, 78, 246, 0.647) 0%,\n    rgba(247, 90, 216, 0.696) 100%\n  )",
          // color: "white",
          // borderRadius: "16px",
          // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          // backdropFilter: "blur(5px)",
          // WebkitBackdropFilter: "blur(5px)",
          // border: "2px solid white",
          // alignItems: "center",
          width: "93.5%",
          right: "3.2%",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          marginTop: "-10px",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          background: "white",
          backgroundColor: "white",
          zIndex: "1000",
          cursor: `url(https://res.cloudinary.com/dtvtphhsc/image/upload/v1692819139/Images/CursorPointer_ryq6sc.png) 4 4, auto`,
          "&:hover": {
            background: "none",
            backgroundColor: "white",
          },
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          background: "transparent",

          "&:hover": {
            background: "rgb(255, 0, 204)",
            borderRadius: "20px",
          },
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          cursor: `url(https://res.cloudinary.com/dtvtphhsc/image/upload/v1692819139/Images/CursorPointer_ryq6sc.png) 4 4, auto`,
          "&:hover": {
            backgroundColor: "rgb(255, 2, 204)",
            borderRadius: "17px",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          cursor: `url(https://res.cloudinary.com/dtvtphhsc/image/upload/v1692819139/Images/CursorPointer_ryq6sc.png) 12 12, auto`,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {},
        secondary: {
          color: "#0062ff",
          fontSize: "20px",
          fontFamily: '"Rubik", sans-serif',
        },
        primary: {
          fontSize: "20px",
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          color: "secondary",
        },
      },
    },
  },
});
export default theme;
