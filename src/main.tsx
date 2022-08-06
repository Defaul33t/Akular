import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { createClient, Provider } from "urql";
import GeneralContextProvider from "./context/generalContext";

const client = createClient({
  url: "https://api.spacex.land/graphql/",
});

const theme = createTheme({
  palette: {
    primary: {
      light: "#128ef2",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider value={client}>
      <ThemeProvider theme={theme}>
        <GeneralContextProvider>
          <App />
        </GeneralContextProvider>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
