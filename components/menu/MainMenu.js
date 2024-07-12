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
            id="work-page-link"
            href="/"
            text="work"
            color="#000"
            variant={columns ? "h1" : "h2"}
            height="10px"
          />
          <AnimatedMenuItem
            id="info-page-link"
            href="/info"
            text="info"
            color="#000"
            variant={columns ? "h1" : "h2"}
            height="10px"
          />
          <AnimatedMenuItem
            id="lab-page-link"
            href="/lab"
            text="lab"
            color="#000"
            variant={columns ? "h1" : "h2"}
            height="10px"
          />
        </Box>
      </PageAnchorBox>
    </>
  );
}
