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
import ValkyrieNasdaq from "public/ValkyrieNasdaq.gif";
import ValkTypeExploration from "public/ValkTypeExploration.jpg";
import ValkyrieArtboard from "public/ValkyrieArtboard.jpg";
import ValkyrieArtboard2 from "public/ValkArtboard2.jpg";
import ValkyrieExploration from "public/ValkyrieExploration.jpg";
import ValkyrieLogo from "public/ValkyrieLogo.jpg";
import ValkyrieLogo2 from "public/ValkyrieLogo2.jpg";
import ValkyrieMock from "public/ValkyrieMock.jpg";
import ValkyriePalette from "public/ValkyriePalette.jpg";
import ValkyriePalette2 from "public/ValkyriePalette2.jpg";
import ValkyrieWire from "public/ValkyrieWire.jpg";
import HeadComponent from "components/HeadComponent";

export default function Valkyrie() {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));
  const valkBlur =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUMZ31HwADLAHkJ286/gAAAABJRU5ErkJggg==";
  return (
    <>
    <Trail2>
      <HeadComponent title="valkyrie - Jake Lamothe" />
      { columns ? <MiniMenu color="#000"/> : <Navigation/> }
      <Box container sx={{ marginLeft: "auto", marginRight: "auto", maxWidth: "90vw" }}>
        <PageHeader title="valkyrie" />
        <ImageBlock
          priority={true}
          path={ValkyrieMock}
          placeholder="blur"
          blurDataURL={valkBlur}
          title="Valkyrie Mock"
        />
        <PageText
          text="Valkyrie Investments is a alternative asset management firm based in Tennessee, 
                focusing on the emerging cryptocurrency sector. I was assigned to refresh Valkyrie's identity, 
                with an emphasis on legibility in digital spaces."
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
          text="Art Direction → Jake LaMothe"
        />
        <ImageBlock
          marginLeft={0}
          maxWidth="80vw"
          path={ValkyrieLogo}
          placeholder="blur"
          blurDataURL={valkBlur}
          title="Valkyrie Logo"
        />
        <ImageBlock
          maxWidth="70vw"
          path={ValkyriePalette}
          placeholder="blur"
          blurDataURL={valkBlur}
          title="Valkyrie Palette"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: columns ? "row" : "column",
            maxWidth: "100vw",
            justifyContent: "space-between",
          }}
        >
          <PageText
            fontFamily="TWKLausanne-700"
            marginRight={columns ? 0 : "auto"}
            paddingBottom={columns ? "50px" : "0px"}
            text="Color Palette"
          />
          <PageText
            paddingTop={columns ? "50px" : "5px"}
            text="As digital centric brand, it was important to be mindful of contrast and color. 
                  Valkyrie's final selected palette provides a high contrast and the ability to catch eyes 
                  even with a quick scroll."
          />
        </Box>
        <ImageBlock
          maxWidth="70vw"
          path={ValkyriePalette2}
          placeholder="blur"
          blurDataURL={valkBlur}
          title="Valkyrie Palette2"
        />
      </Box>
      <ImageBlock
        marginLeft={0}
        maxWidth="70vw"
        path={ValkTypeExploration}
        placeholder="blur"
        blurDataURL={valkBlur}
        title="Valkyrie Type Exploration"
      />
      <ImageBlock
        maxWidth="100vw"
        path={ValkyrieExploration}
        placeholder="blur"
        blurDataURL={valkBlur}
        title="Valkyrie Exploration"
      />
      <ImageBlock
        maxWidth="80vw"
        path={ValkyrieLogo2}
        placeholder="blur"
        blurDataURL={valkBlur}
        title="Valkyrie Logo 2"
      />
      <ImageBlock
        maxWidth="95vw"
        path={ValkyrieWire}
        placeholder="blur"
        blurDataURL={valkBlur}
        title="Valkyrie Wireframe"
      />
      <ImageBlock
        marginRight={0}
        maxWidth="70vw"
        path={ValkyrieArtboard}
        placeholder="blur"
        blurDataURL={valkBlur}
        title="Valkyrie Artboard"
      />
      <ImageBlock
        maxWidth="90vw"
        path={ValkyrieArtboard2}
        placeholder="blur"
        blurDataURL={valkBlur}
        title="Valkyrie Artboard 2"
      />
      <ImageBlock
        marginLeft={80}
        maxWidth="45vw"
        path={ValkyrieNasdaq}
        title="Valkyrie Artboard 2"
      />
      <PageFooter color="#000" />
      </Trail2>
    </>
  );
}
