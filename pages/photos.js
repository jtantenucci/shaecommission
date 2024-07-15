import Trail2 from "components/effects/Trail2";
import React from "react";
import ImageList from "@mui/material/ImageList";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import PageHeader from "components/PageHeader";
import ImageBlock from "components/image/ImageBlock";
import useMediaQuery from "@mui/material/useMediaQuery";
import MiniMenu from "components/menu/MiniMenu";
import Navigation from "components/nav/Navigation";
import HeadComponent from "components/HeadComponent";
import PageFooter from "components/PageFooter";
import { PhotoArray } from "components/PhotoArray";

export default function Photos() {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Trail2>
    <Box sx={{ backgroundColor: '#cce2cb' }}>
      <HeadComponent title="photos - shae overlieden" />
      { columns ? <MiniMenu color="#000" changedColor="#c39de0"/> : <Navigation lab={true} /> }
      <Box container sx={{ marginLeft: "auto", marginRight: "auto", width: "90vw", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}
      >
      <PageHeader color="#c39de0" title="photos" />
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
        {PhotoArray.map((item) => (
          <ImageBlock
            paddingTop="2px"
            paddingBottom="2px"
            title={item.title}
            key={item.id}
            path={item.img}
          />
        ))}
      </ImageList>
      <PageFooter color="#000" changedColor="#c39de0"></PageFooter>
    </Box>
    </Trail2>
  );
}
