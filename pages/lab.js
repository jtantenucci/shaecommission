import Trail2 from "components/effects/Trail2";
import React from "react";
import ImageList from "@mui/material/ImageList";
import { LabArray } from "components/LabArray";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import PageHeader from "components/PageHeader";
import ImageBlock from "components/image/ImageBlock";
import useMediaQuery from "@mui/material/useMediaQuery";
import MiniMenu from "components/menu/MiniMenu";
import Navigation from "components/nav/Navigation";
import HeadComponent from "components/HeadComponent";
import PageFooter from "components/PageFooter";

export default function Lab() {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Trail2>
    <Box sx={{ backgroundColor: 'primary.main' }}>
      <HeadComponent title="lab - Jake Lamothe" />
      { columns ? <MiniMenu color="#fff" changedColor="#fff"/> : <Navigation lab={true} /> }
      <Box container sx={{ marginLeft: "auto", marginRight: "auto", width: "90vw", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}
      >
      <PageHeader color="#fff" title="lab" />
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
        {LabArray.map((item) => (
          <ImageBlock
            paddingTop="2px"
            paddingBottom="2px"
            title={item.title}
            key={item.id}
            path={item.img}
          />
        ))}
      </ImageList>
      <PageFooter color="#fff" changedColor="#fff"></PageFooter>
    </Box>
    </Trail2>
  );
}
