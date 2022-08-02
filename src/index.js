import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));
const theme = createTheme();

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </ThemeProvider>
);
// createRoot
// createApp
// createElement
// render
