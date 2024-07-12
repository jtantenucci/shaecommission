import React from "react";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";

export default function PageIframe({ src }) {
  return (
    <Card>
      <CardMedia src={src} component="iframe" height="100%" width="100%" />
    </Card>
  );
}
