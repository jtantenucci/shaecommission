import React from "react";
import ImageList from "@mui/material/ImageList";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Trail2 from "components/effects/Trail2";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MainHoverImage from "components/image/MainHoverImage";
import MainMenu from "components/menu/MainMenu";
import Navigation from "components/nav/Navigation";
import PageFooter from 'components/PageFooter';
import { MainArray } from 'components/MainArray';


export default function Work() {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
    <Trail2>
    { columns ? <MainMenu /> : <Navigation /> }
      <Box container sx={{ marginLeft: "auto", marginRight: "auto", width: "90vw", display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
        <Typography variant="h4" sx={{ justifySelf: "start" }}>
          selected work
        </Typography>
        <Typography variant="h4" sx={{ justifySelf: "start" }}>
          2021→2022
        </Typography>
      </Box>
      <ImageList sx={{ marginLeft: "auto", marginRight: "auto", width: "90vw", overflow: "hidden", backgroundClip: "border-box" }} cols={columns ? 2 : 1} gap={25}>
        {MainArray.map((item) => (
          <MainHoverImage id={item.select} key={item.title} img={item.img} title={item.title} path={item.path}/>
        ))}
      </ImageList>
      <PageFooter color="#000"/>
    </Trail2>
    </>
  );
}
