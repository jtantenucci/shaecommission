import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

export default function PageVideo({ src, alt }) {
  return (
    <>
      <CardMedia src={src} frameBorder="0px" allowfullscreen controls component="video" height="100%" width="100%" />
    </>
  );
}
