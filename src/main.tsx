import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/main.scss";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";

import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Toaster position="top-right" />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);