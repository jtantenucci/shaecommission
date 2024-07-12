import Trail2 from "components/effects/Trail2";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import PageHeader from "components/PageHeader";
import PageFooter from "components/PageFooter";
import PageText from "components/PageText";
import PageSubtext from "components/PageSubtext";
import ImageBlock from "components/image/ImageBlock";
import MiniMenu from "components/menu/MiniMenu";
import Navigation from "components/nav/Navigation";
import RayusSign from "public/RayusSign.jpg";
import RayusPoster from "public/RayusPoster.jpg";
import RayusPoster2 from "public/RayusPoster2.jpg";
import RayusInstagram from "public/RayusInstagram.jpg";
import RayusSocialTileGif from "public/RayusSocialTile.gif";
import HeadComponent from "components/HeadComponent";
import PageVideo from "components/PageVideo";


export default function RayusRadiology() {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));
  const rayusBlur =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8FCH9HwAGDwJmXMSEXAAAAABJRU5ErkJggg==";

  return (
    <>
      <Trail2>
      <HeadComponent title="rayus - Jake Lamothe" />
      {columns ? <MiniMenu color="#000" /> : <Navigation /> }
      <Box container sx={{ marginLeft: "auto", marginRight: "auto", maxWidth: "90vw" }}>
        <PageHeader title="rayus" />
        <ImageBlock
          priority={true}
          path={RayusSign}
          placeholder="blur"
          blurDataURL={rayusBlur}
          title="Rayus Sign"
        />
        <PageText
          text="RAYUS Radiology is a national provider of radiology and diagnostic medicine. 
                Formerly known as CDI, Center for Diagnostic Imaging, we created a new name, logo, 
                and brand identity for RAYUS and launched in 2021. I was assigned to produce social content and launch materials."
        />
        <PageSubtext
          paddingTop="0px"
          paddingBottom={0}
          maxWidth="50vw"
          text="Agency → LUDWIG+"
        />
        <PageSubtext
          paddingTop="0px"
          paddingBottom={50}
          maxWidth="50vw"
          text="Creative Director → Robin Todd"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            maxWidth: "100vw",
            justifyContent: "space-between",
          }}
        >
          <ImageBlock
            maxWidth="40vw"
            path={RayusPoster}
            placeholder="blur"
            blurDataURL={rayusBlur}
            title="Rayus Poster"
          />
          <ImageBlock
            maxWidth="40vw"
            path={RayusPoster2}
            placeholder="blur"
            blurDataURL={rayusBlur}
            title="Rayus Poster 2"
          />
        </Box>
        <ImageBlock
          maxWidth="35vw"
          path={RayusSocialTileGif}
          title="Rayus Social Tile Gif"
        />
        <ImageBlock
          path={RayusInstagram}
          placeholder="blur"
          blurDataURL={rayusBlur}
          title="Rayus IG"
        />
        <Box sx={{ margin: "auto", maxWidth: columns ? "75vw" : "100vw" }}>
          <PageVideo src="/video-rayus.mp4" alt="rayus-video"/>
        </Box>
      </Box>
      <PageFooter color="#000" />
      </Trail2>
    </>
  );
}
