import Trail2 from "components/effects/Trail2";
import React from "react";
import ImageList from "@mui/material/ImageList";
import { PaintArray } from "components/PaintArray.js";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import PageHeader from "components/PageHeader";
import ImageBlock from "components/image/ImageBlock";
import useMediaQuery from "@mui/material/useMediaQuery";
import MiniMenu from "components/menu/MiniMenu";
import Navigation from "components/nav/Navigation";
import HeadComponent from "components/HeadComponent";
import PageFooter from "components/PageFooter";

export default function Paint() {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Trail2>
    <Box sx={{ backgroundColor: '#c39de0' }}>
      <HeadComponent title="paint - shae overlieden" />
      { columns ? <MiniMenu color="#000" changedColor='#fab4e0'/> : <Navigation color="#000" changedColor='#fab4e0' /> }
      <Box container sx={{ marginLeft: "auto", marginRight: "auto", width: "90vw", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}
      >
      <PageHeader color="#fab4e0" title="paint" />
      </Box>
      <ImageList
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "90vw",
          overflow: "hidden",
          backgroundClip: "border-box"
        }}
        variant='masonry'
        cols={columns ? 4 : 2}
        gap={10}
      >
        {PaintArray.map((item) => (
          <ImageBlock
            paddingTop="2px"
            paddingBottom="2px"
            title={item.title}
            key={item.id}
            path={item.img}
          />
        ))}
      </ImageList>
      <PageFooter color="#000" changedColor="#fab4e0"></PageFooter>
    </Box>
    </Trail2>
  );
}
