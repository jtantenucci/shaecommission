import * as React from 'react';
import { useTheme } from "@mui/material/styles";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';

export default function ScrollTop( props ) {
  const theme = useTheme();
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });
  
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#top-menu-anchor" 
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 70, right: 50 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}