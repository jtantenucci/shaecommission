import React from "react";
import { useTheme } from "@mui/material/styles";
import styled from 'styled-components';
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
  return (      
    <Head>
        <Typography color={ color ? color : "#000" } variant='h1'>
            {title}
        </Typography>
    </Head>
  );
}
