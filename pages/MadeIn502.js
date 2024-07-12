import Trail2 from "components/effects/Trail2";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import PageHeader from "components/PageHeader";
import PageText from "components/PageText";
import PageFooter from "components/PageFooter";
import ImageBlock from "components/image/ImageBlock";
import MiniMenu from "components/menu/MiniMenu";
import Navigation from "components/nav/Navigation";
import MintGalleryHead from "public/MintGalleryHead.jpg";
import Mint502Marks from "public/Mint502Marks.jpg";
import MintTypeCard from "public/MintTypeCard.jpg";
import MintColorsSpread from "public/MintColorsSpread.jpg";
import MintAlternates from "public/MintAlternates.jpg";
import MintHeader from "public/MintHeader.jpg";
import HeadComponent from "components/HeadComponent";
import AnimatedMenuItem from "components/menu/AnimatedMenuItem";
import MintGif from "public/MintGif.gif";

export default function MadeIn502() {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));
  const mintBlur =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNsf7v+PwAHSgMkhHmd7QAAAABJRU5ErkJggg==";

  return (
    <>
      <Trail2>
      <HeadComponent title="mint 502 - Jake Lamothe" />
      {columns ? null : <Navigation />}
      <Box sx={{ marginLeft: "auto", marginRight: "auto", maxWidth: "90vw" }}>
        {columns ? <MiniMenu color="#000" /> : null}
        <PageHeader title="mint 502" />
        <ImageBlock
          path={MintGalleryHead}
          placeholder="blur"
          priority
          blurDataURL={mintBlur}
          title="Mint Gallery Head"
        />
        <PageText
          paddingBottom={columns ? "50px" : "25px"}
          text="Mint 502 is Louisville, Kentucky's premier sneaker boutique.  
                 With a grand opening in late 2021 and little to no pre-existing brand materials, 
                 I was tasked with creating the brand's identity system."
        />
        <Box sx={{ marginLeft: "auto", marginRight: "auto", paddingTop: columns ? "0px" : "1px", maxWidth: columns ? "50vw" : "100vw", paddingBottom: "50px" }}>
          <AnimatedMenuItem
            id="mint-page-ig-link"
            color="rgba(0, 0, 0, 0.3)"
            changedColor="#87edaf"
            useMui="false"
            variant={columns ? 'h4' : 'h6' }
            paddingBottom={50}
            href="https://www.instagram.com/mint.502/"
            text="Client → Mint 502"
          />
        </Box>
        <ImageBlock
          marginLeft={0}
          maxWidth="70vw"
          path={Mint502Marks}
          placeholder="blur"
          blurDataURL={mintBlur}
          title="Mint 502 Marks"
        />
        <ImageBlock
          marginRight={0}
          maxWidth="70vw"
          path={MintTypeCard}
          placeholder="blur"
          blurDataURL={mintBlur}
          title="Mint Type Card"
        />
        <ImageBlock
          marginLeft={0}
          maxWidth="70vw"
          path={MintColorsSpread}
          placeholder="blur"
          blurDataURL={mintBlur}
          title="Mint Colors Spread"
        />
        <ImageBlock maxWidth="35vw" path={MintGif} title="mintGif" />
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
            text="Alternate Marks"
          />
          <PageText
            paddingTop={columns ? "50px" : "5px"}
            text="I worked closely with the Mint team to provide a flexible system that could work in today's evolving media space. 
            Typography and the application of our marks create distinctive sub-labels whilst staying true to the parent channel's style."
          />
        </Box>
      </Box>
      <ImageBlock
        path={MintAlternates}
        placeholder="blur"
        blurDataURL={mintBlur}
        title="Mint Alternates"
      />
      <ImageBlock
        path={MintHeader}
        placeholder="blur"
        blurDataURL={mintBlur}
        paddingTop="0px"
        paddingBottom="0px"
        maxWidth="66vw"
        title="Mint Header"
      />
      <PageFooter color="#000" />
      </Trail2>
    </>
  );
}
