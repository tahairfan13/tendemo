import customTheme from "./theme";
import React from "react";
import OffersList from "./components/OffersList";
import { StyledEngineProvider } from "@mui/joy/styles";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Button from "@mui/joy/Button";
import Search from "./components/Search";
import { Box } from "@mui/joy";

function App() {
  function ModeSwitcher() {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) {
      return null;
    }
    return (
      <Button
        variant="outlined"
        color="neutral"
        onClick={() => setMode(mode === "dark" ? "light" : "dark")}
      >
        {mode === "dark" ? "Turn light" : "Turn dark"}
      </Button>
    );
  }

  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <CssVarsProvider
          defaultMode="dark"
          disableTransitionOnChange
          theme={customTheme}
        >
          <CssBaseline />
          <ModeSwitcher />
          <Box
            sx={{
              bgcolor: "background.appBody",
              minHeight: "100dvh",
              width: "100vw",
              maxWidth: "100%",
              px: 2,
            }}
          >
            <OffersList />
            {/* <Search /> */}
          </Box>
        </CssVarsProvider>
      </StyledEngineProvider>
    </React.StrictMode>
  );
}

export default App;
