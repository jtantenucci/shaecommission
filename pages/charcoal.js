import Trail2 from "components/effects/Trail2";
import React from "react";
import ImageList from "@mui/material/ImageList";
import { CharcoalArray } from "components/CharcoalArray.js";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import PageHeader from "components/PageHeader";
import ImageBlock from "components/image/ImageBlock";
import useMediaQuery from "@mui/material/useMediaQuery";
import MiniMenu from "components/menu/MiniMenu";
import Navigation from "components/nav/Navigation";
import HeadComponent from "components/HeadComponent";
import PageFooter from "components/PageFooter";

export default function Charcoal() {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Trail2>
    <Box sx={{ backgroundColor: 'primary.main' }}>
      <HeadComponent title="charcoal - shae schornagel" />
      { columns ? <MiniMenu color="#fff" changedColor="#db3832"/> : <Navigation color="#000" changedColor="#db3832"/> }
      <Box sx={{ marginLeft: "auto", marginRight: "auto", width: "90vw", display: "flex", flexDirection: "column", justifyContent: "flex-start", paddingLeft: "0px"}}
      >
      <PageHeader color="#fff" title="charcoal" />
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
        {CharcoalArray.map((item) => (
          <ImageBlock
            paddingTop="2px"
            paddingBottom="2px"
            title={item.title}
            key={item.id}
            path={item.img}
          />
        ))}
      </ImageList>
      <PageFooter color="#fff" changedColor="#db3832"></PageFooter>
    </Box>
    </Trail2>
  );
}
