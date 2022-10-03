import { createTheme } from "@mui/material";
import React from "react";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: {
      neutral1: React.CSSProperties["color"];
      neutral2: React.CSSProperties["color"];
      neutral3: React.CSSProperties["color"];
      neutral4: React.CSSProperties["color"];
      neutral5: React.CSSProperties["color"];
      neutral6: React.CSSProperties["color"];
    };
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: {
      neutral1: React.CSSProperties["color"];
      neutral2: React.CSSProperties["color"];
      neutral3: React.CSSProperties["color"];
      neutral4: React.CSSProperties["color"];
      neutral5: React.CSSProperties["color"];
      neutral6: React.CSSProperties["color"];
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#8456EC",
      dark: "#240D57",
      contrastText: "#fff",
      light: "#E87BF8",
    },
    secondary: {
      main: "#CCB6FF",
      contrastText: "#EDE5FF",
      light: "#F6F2FF",
    },
    success: {
      main: "#00805E",
    },
    error: {
      main: "#E61445",
    },
    warning: {
      main: "#FFD7E0",
    },
    info: {
      main: "#D3FFE2",
    },
    neutral: {
      neutral1: "#4F4F4F",
      neutral2: "#828282",
      neutral3: "#BDBDBD",
      neutral4: "#E0E0E0",
      neutral5: "#F2F2F2",
      neutral6: "#BDBDBD",
    },
    action: {
      disabledBackground: "#C4C4C4",
      disabled: "#fff",
    },
  },
  typography: {
    fontFamily: "Helvetica",
    fontSize: 12,
    h5: {
      fontSize: 24,
    },
    h6: {
      fontSize: 18,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 400,
    },
    body2: {
      fontSize: 12,
      fontWeight: 400,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          input: {
            filter: "none",
            "&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus":
              {
                "-webkit-box-shadow": "0 0 0px 1000px #F1F3F6 inset;",
              },
          },
        },
      },
      defaultProps: {
        size: "small",
        hiddenLabel: true,
        fullWidth: true,
        variant: "outlined",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fieldset: {
            border: "none",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&&": {
            borderRadius: 4,
          },
          backgroundColor: "#F1F3F6",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "#F1F3F6",
          "&:hover, &:focus, &:focus-within": {
            borderColor: "#31AD34",
          },
          fontSize: 14,
        },
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        size: "small",
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: "capitalize",
          fontSize: 16,
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: "pointer",
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          marginRight: 0,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          ".MuiButtonBase-root": {
            textTransform: "capitalize",
            color: "#323232",
            fontSize: 15,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "&:not(.MuiPaper-elevation0)": {
            boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.25)",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: 14,
        },
      },
    },
  },
});

theme.typography.h1 = {
  fontSize: 35,
  fontWeight: 700,
  color: theme.palette.primary.dark,
  lineHeight: "36px",
  [theme.breakpoints.up("md")]: {
    fontSize: 64,
    lineHeight: "64px",
  },
};

theme.typography.h2 = {
  fontWeight: 700,
  fontSize: 28,
  lineHeight: "32px",
  color: theme.palette.primary.dark,
  [theme.breakpoints.up("md")]: {
    fontSize: 48,
    lineHeight: "55px",
  },
};

theme.typography.h6 = {
  fontWeight: 700,
  fontSize: 16,
  lineHeight: "18px",
  color: theme.palette.primary.dark,
  [theme.breakpoints.up("md")]: {
    fontSize: 18,
    lineHeight: "21px",
  },
};

theme.typography.subtitle1 = {
  fontSize: 16,
  lineHeight: "18px",
  fontWeight: 300,
  [theme.breakpoints.up("md")]: {
    fontSize: 24,
    lineHeight: "28px",
  },
};

export default theme;
