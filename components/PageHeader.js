import React from "react";
import { useTheme } from "@mui/material/styles";
import styled from 'styled-components';
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from '@mui/material/Typography';


const Head = styled.div`
    display: "flex";
    padding: 20px;
    align-items: "center";
    flex-direction: "row";
    justify-content: "space-evenly";
`

export default function PageHeader({ title, color }) {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));

  return (      
    <Head sx={{padding: '0px'}}>
        <Typography sx={{padding: '0px'}} color={ color ? color : "#000" } variant={columns ? 'h1' : 'h2'}>
            {title}
        </Typography>
    </Head>
  );
}
