import customTheme from "./theme";
import React from "react";
import OffersList from "./components/OffersList";
import { StyledEngineProvider } from "@mui/joy/styles";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
function App() {
  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <CssVarsProvider
          defaultMode="dark"
          disableTransitionOnChange
          theme={customTheme}
        >
          <CssBaseline />
          <OffersList />
        </CssVarsProvider>
      </StyledEngineProvider>
    </React.StrictMode>
  );
}

export default App;
