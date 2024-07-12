import React from "react";
import { useTheme } from "@mui/material/styles";
import AnimatedMenuItem from "./AnimatedMenuItem";
import PageAnchorBox from "components/PageAnchorBox";
import Box from "@mui/material/Box";

export default function MiniMenu({ color, changedColor }) {
  const theme = useTheme();

  return (
    <>
      <PageAnchorBox>
        <Box
          sx={{
            display: "flex",
            paddingBottom: "25px",
            marginLeft: "auto",
            marginRight: "0",
            justifyContent: "flex-end",
          }}
          id="mini-menu"
        >
          <AnimatedMenuItem
            id="work-page-minilink"
            href="/"
            text="work"
            variant="h3"
            color={color}
            changedColor={changedColor}
            sx={{
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          />
          <AnimatedMenuItem
            id="info-page-minilink"
            href="/info"
            text="info"
            variant="h3"
            color={color}
            changedColor={changedColor}
            sx={{
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          />
          <AnimatedMenuItem
            id="lab-page-minilink"
            href="/lab"
            text="lab"
            variant="h3"
            color={color}
            changedColor={changedColor}
            sx={{
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          />
        </Box>
      </PageAnchorBox>
    </>
  );
}
