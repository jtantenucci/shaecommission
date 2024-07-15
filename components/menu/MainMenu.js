import React from "react";
import { useTheme } from "@mui/material/styles";
import PageAnchorBox from "components/PageAnchorBox";
import AnimatedMenuItem from "./AnimatedMenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";

export default function MainMenu() {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <PageAnchorBox>
        <Box
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            justifyContent: "space-evenly",
            width: "90vw",
            display: "flex",
            paddingBottom: "100px",
          }}
          id="main-menu"
        >
          <AnimatedMenuItem
            id="home-page-link"
            href="/"
            text="home"
            changedColor="#000"
            color="#FF9999"
            variant={columns ? "h2" : "h2"}
            height="10px"
          />
          <AnimatedMenuItem
            id="info-page-link"
            href="/info"
            text="info"
            changedColor="#000"
            color="#FF9999"
            variant={columns ? "h2" : "h2"}
            height="10px"
          />
          <AnimatedMenuItem
            id="charcoal-page-link"
            href="/charcoal"
            text="charcoal"
            changedColor="#000"
            color="#FF9999"
            variant={columns ? "h2" : "h2"}
            height="10px"
          />
          <AnimatedMenuItem
            id="photos-page-link"
            href="/photos"
            text="photos"
            changedColor="#000"
            color="#FF9999"
            variant={columns ? "h2" : "h2"}
            height="10px"
          />
          <AnimatedMenuItem
            id="paint-page-link"
            href="/paint"
            text="paint"
            changedColor="#000"
            color="#FF9999"
            variant={columns ? "h2" : "h2"}
            height="10px"
          />
        </Box>
      </PageAnchorBox>
    </>
  );
}
