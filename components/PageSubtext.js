import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function PageSubtext({ text, marginLeft, marginRight, maxWidth, paddingTop, paddingBottom, component}) {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));
  PageSubtext.defaultProps = {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "50vw",
    paddingTop: "50px",
    paddingBottom: "50px",
    component: "typography"
  }

  return (      
    <Box
      sx={{
        marginLeft: {marginLeft},
        marginRight: {marginRight},
        maxWidth: columns ? {maxWidth} : "100vw",
        paddingTop: {paddingTop},
        paddingBottom: {paddingBottom}
      }}
    >
        <Typography component={component} sx={{ lineHeight: "40px", color: "rgba(0, 0, 0, 0.3)" }} variant={ columns ? 'h4' : 'h6' }>
            {text}
        </Typography>
    </Box>
  );
}
