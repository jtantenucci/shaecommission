import React from "react";
import { useTheme } from "@mui/material/styles";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";


export default function ImageBlock({path, title, maxWidth, height, marginRight, marginLeft, paddingTop, paddingBottom, placeholder, blurDataURL, priority}) {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));
  
  ImageBlock.defaultProps = {
    maxWidth: "100vw",
    height: "auto",
    marginRight: "auto",
    marginLeft: "auto",
    paddingTop: columns ? '100px' : '50px',
    paddingBottom: columns ? '100px' : '50px',
    placeholder: "none",
    blurDataURL: "none",
    priority: false,
  }

  return (
    <Box
      sx={{
        maxWidth: columns ? {maxWidth} : "100vw",
        height: {height},
        marginRight: {marginRight},
        marginLeft: {marginLeft},
        paddingTop: {paddingTop},
        paddingBottom: {paddingBottom}
      }}
    >
      <Image
        src={path}
        alt={title}
        priority={priority}
        quality={75}
        objectFit="contain"
        blurDataURL={blurDataURL}
        placeholder={placeholder}
      />
    </Box>
  );
}
