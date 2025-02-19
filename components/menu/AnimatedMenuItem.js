import React from "react";
import { useSpring, animated, config } from "react-spring";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import {Link as MuiLink} from '@mui/material';
import Typography from "@mui/material/Typography";

export default function AnimatedMenuItem({
  id,
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
    changedColor: "#FF9999",
    height: "3px",
    useMui: false,
  };

  const [properties, set] = useSpring(() => ({
    config: config.default,
    color: color,
    width: "0%",
  }));

  const MouseEnter = () => {
    set({ color: changedColor });
  };

  const MouseLeave = () => {
    set({ color: color });
  };

  const AnimatedLink = animated(Typography);
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {useMui ? 
      <>
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
      </>
      :
      <>
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
      </>}
    </>
  );
}
