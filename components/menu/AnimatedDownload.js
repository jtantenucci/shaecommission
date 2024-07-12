import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from '@mui/material/Link';
import Typography from "@mui/material/Typography";

export default function AnimatedDownload({
  onClick,
  changedWidth,
  height,
  color,
  text,
  variant,
  sx,
  changedColor,
  children
}) {
    AnimatedDownload.defaultProps = {
    changedWidth: "100%",
    changedColor: "#000",
    height: "5px",
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

  const AnimatedLink = animated(Link);
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <div style={{ position: "relative", display: "inline-block" }}>
        <AnimatedLink
          sx={sx}
          variant={variant}
          component="button"
          onClick={onClick}
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
          {children}
        </AnimatedLink>
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
      </div>
    </>
  );
}
