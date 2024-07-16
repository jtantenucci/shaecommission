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
import PageHeader from "components/PageHeader";

export default function Info() {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Trail2>
        <Box sx={{ backgroundColor: "#ff9999" }}>
          <HeadComponent title="info - shae overlieden" />
          {columns ? (
            <MiniMenu color="#000" changedColor="#cce2cb" />
          ) : (
            <Navigation />
          )}
          <Box
            sx={{
              maxWidth: columns ? "75vw" : "90vw",
              marginLeft: "auto",
              marginRight: "auto",
              paddingTop: columns ? "50px" : "0px",
            }}
          >
            <PageHeader color="#cce2cb" title="info" />
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
              changedColor="#cce2cb"
              useMui="false"
              sx={{ fontSize: columns ? 60 : 40 }}
              fontFamily="ApfelGrotezk"
              href="mailto:shaeschornagel@gmail.com"
              text="email link"
            />
          </Box>
          <PageFooter color="#000" changedColor="#cce2cb" />
        </Box>
      </Trail2>
    </>
  );
}
