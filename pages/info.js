import React from "react";
import Trail2 from "components/effects/Trail2";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import MiniMenu from "components/menu/MiniMenu";
import Navigation from "components/nav/Navigation";
import PageFooter from "components/PageFooter";
import HeadComponent from "components/HeadComponent";
import AnimatedMenuItem from "components/menu/AnimatedMenuItem";
import AnimatedDownload from "components/menu/AnimatedDownload";
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export default function Info() {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `JLResume.pdf`;
    link.href = "./JLResume.pdf";
    link.click();
  };

  return (
    <>
      <Trail2>
      <Box sx={{ backgroundColor: '#ff9999' }}>
        <HeadComponent title="info - shae overlieden" />
        {columns ? <MiniMenu color="#000" changedColor="#FFF"/> : <Navigation />}
        <Box
          container
          sx={{
            maxWidth: columns ? "75vw" : "90vw",
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: columns ? "50px" : "0px",
          }}
        >
          <Typography fontFamily="ApfelGrotezk" fontSize={columns ? 60 : 40}>
            artist-for-hire turned psychology student 🌻 
          </Typography>
          <Typography
            sx={{ paddingTop: "50px" }}
            fontFamily="ApfelGrotezk"
            fontSize={columns ? 60 : 40}
          >
            charcoal / watercolor / photography
          </Typography>
          <Typography
            sx={{ paddingTop: "50px" }}
            fontFamily="ApfelGrotezk"
            fontSize={columns ? 60 : 40}
          >
            email for business inquiries
          </Typography>
        </Box>
        <Box
          container
          sx={{
            maxWidth: columns ? "75vw" : "90vw",
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: "50px",
            paddingBottom: "50px",
          }}
        >
          <AnimatedMenuItem
            id="email-page-link"
            color="#000"
            useMui="false"
            sx={{ fontSize: columns ? 60 : 40 }}
            fontFamily="ApfelGrotezk"
            href="mailto:shaeschornagel@gmail.com"
            text="email link"
          />
        </Box>
        <PageFooter color="#000" changedColor="#FFF" />
      </Box>
      </Trail2>
    </>
  );
}
