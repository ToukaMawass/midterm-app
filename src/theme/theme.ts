import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2563eb", // same as Tailwind blue-600
    },
    secondary: {
      main: "#9333ea", // purple-600
    },
    error: {
      main: "#dc2626",
    },
    success: {
      main: "#16a34a",
    },
  },

  typography: {
    fontFamily: "Inter, sans-serif",
  },
});