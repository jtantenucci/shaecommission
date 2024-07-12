import React from "react";
import { useTheme } from "@mui/material/styles";
import FooterMenu from "components/menu/FooterMenu";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'

export default function PageFooter({ color, changedColor }) {
    const theme = useTheme();
    const columns = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <>
            <Box container sx={{ marginLeft: "auto", marginRight: "auto", maxWidth: "90vw", display: "flex", flexDirection: "row", paddingTop: columns ? "100px" : "25px", paddingBottom: columns ? "50px" : "10px", justifyContent: "space-between" }}>
                <FooterMenu color={color} changedColor={changedColor} />
                <Typography color={color} sx={{ justifySelf: "end" }} variant={columns ? "h4" : "h5"}>
                    jake lamothe 2022©
                </Typography>
            </Box>
        </>
    );
}
