import "styles/globals.css";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "src/createEmotionCache";
import useMediaQuery from "@mui/material/useMediaQuery";
import ScrollTop from "components/effects/ScrollTop";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import theme from "styles/theme";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const columns = useMediaQuery(theme.breakpoints.up("md"));
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <ScrollTop {...props}>
          <Fab
            sx={{
              background: theme.palette.tertiary.main,
              color: theme.palette.secondary.main,
            }}
            variant="extended"
            size="medium"
            aria-label="scroll back to top"
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
