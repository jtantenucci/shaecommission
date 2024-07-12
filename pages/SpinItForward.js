import Trail2 from "components/effects/Trail2";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import PageHeader from "components/PageHeader";
import PageText from "components/PageText";
import PageSubtext from "components/PageSubtext";
import PageFooter from "components/PageFooter";
import ImageBlock from "components/image/ImageBlock";
import MiniMenu from "components/menu/MiniMenu";
import Navigation from "components/nav/Navigation";
import SpinIndex from "public/SpinIndex.jpg";
import SpinStory from "public/SpinStory.jpg";
import SpinCampaign from "public/SpinCampaign.jpg";
import SpinInstagram from "public/SpinInstagram.jpg";
import SpinLogo from "public/SpinLogo.gif";
import HeadComponent from "components/HeadComponent";
import PageVideo from "components/PageVideo";


export default function SpinItForward() {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));
  const spinBlur =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8y8DwHwAEvQHu+0/9rgAAAABJRU5ErkJggg==";

  return (
    <>
      <Trail2>
      <HeadComponent title="spin - Jake Lamothe" />
      {columns ? <MiniMenu color="#000" /> : <Navigation />}
      <Box
        container
        sx={{ marginLeft: "auto", marginRight: "auto", maxWidth: "90vw" }}
      >
        <PageHeader title="spin" />
        <ImageBlock
          priority={true}
          path={SpinIndex}
          placeholder="blur"
          blurDataURL={spinBlur}
          title="Spin Index"
        />
        <PageText
          text="SPIN, an e-scooter company backed by Ford Motor, came to us to help create a campaign around their Giving Tuesday initiative. 
              For each trip taken on a SPIN e-scooter that week, they donated a new pair of socks to a community shelter."
        />
        <PageSubtext
          paddingTop="0px"
          paddingBottom={0}
          maxWidth="50vw"
          text="Agency → LUDWIG+"
        />
        <PageSubtext
          paddingTop="0px"
          paddingBottom={0}
          maxWidth="50vw"
          text="Writer → Lucene Gilbert"
        />
        <PageSubtext
          paddingTop="0px"
          paddingBottom={50}
          maxWidth="50vw"
          text="Art Direction → Jake LaMothe"
        />
        <ImageBlock
          path={SpinStory}
          placeholder="blur"
          blurDataURL={spinBlur}
          title="Spin Stories"
        />
        <ImageBlock
          marginRight={0}
          maxWidth="70vw"
          path={SpinCampaign}
          placeholder="blur"
          blurDataURL={spinBlur}
          title="Spin Campaign"
        />
        <ImageBlock
          path={SpinInstagram}
          placeholder="blur"
          blurDataURL={spinBlur}
          title="Spin Instagram"
        />
        <Box sx={{ margin: "auto", maxWidth: columns ? "75vw" : "100vw" }}>
          <PageVideo src="/spin-video1.mp4" alt="spin-video"/>
        </Box>
        <ImageBlock maxWidth="30vw" path={SpinLogo} title="Spin Logo Gif" />
        <PageFooter color="#000" changedColor={"#ed0000"} />
      </Box>
      </Trail2>
    </>
  );
}
