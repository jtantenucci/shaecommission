import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import {Link as MuiLink} from '@mui/material';
import Typography from "@mui/material/Typography";

export default function AnimatedMenuItem({
  id,
  changedWidth,
  height,
  color,
  href,
  text,
  variant,
  sx,
  changedColor,
  useMui
}) {
  AnimatedMenuItem.defaultProps = {
    changedWidth: "100%",
    changedColor: "#000",
    height: "3px",
    useMui: false,
  };

  const [properties, set] = useSpring(() => ({
    config: config.default,
    color: color,
    width: "0%",
  }));

  const MouseEnter = () => {
    set({ color: changedColor, width: changedWidth });
  };

  const MouseLeave = () => {
    set({ color: color, width: "0%" });
  };

  const AnimatedLink = animated(Typography);
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {useMui ? 
        <div style={{ position: "relative", display: "inline-block" }}>
        <MuiLink href={href}>
        <AnimatedLink
          sx={sx}
          id={id}
          variant={variant}
          typography={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
          style={{
            color: properties.color,
          }}
          onMouseEnter={MouseEnter}
          onMouseLeave={MouseLeave}
        >
          {text}
        </AnimatedLink>
      </MuiLink>
      <animated.div
          onMouseEnter={MouseEnter}
          onMouseLeave={MouseLeave}
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            justifyContent: "center",
            width: properties.width,
            height: height,
            background: properties.color,
          }}
        />
      </div>
      :
      <div style={{ position: "relative", display: "inline-block" }}>
      <Link passHref href={href}>
        <AnimatedLink
          id={id}
          sx={sx}
          variant={variant}
          typography={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
          style={{
            color: properties.color,
          }}
          onMouseEnter={MouseEnter}
          onMouseLeave={MouseLeave}
        >
          {text}
        </AnimatedLink>
      </Link>
      <animated.div
          onMouseEnter={MouseEnter}
          onMouseLeave={MouseLeave}
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            justifySelf: "center",
            width: properties.width,
            height: height,
            background: properties.color,
          }}
        />
      </div>}
    </>
  );
}
