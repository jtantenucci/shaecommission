import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export default function PageAnchorBox({ children }) {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {columns ? <Toolbar /> : null}
      <Box id="top-menu-anchor" sx={{ marginLeft: "auto", marginRight: "auto", maxWidth: "90vw" }}> 
       {children}
      </Box>
    </>
  );
}
