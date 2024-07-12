import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import ImageListItem from "@mui/material/ImageListItem";
import Link from "next/link";

export default function MainHoverImage({ ...props }) {
  const [hover, setHover] = useState(false);
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 100,
    (x - window.innerWidth / 2) / 100,
    0.85,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const [properties, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: {
      tension: 120,
      friction: 14,
      clamp: true,
    },
  }));
  const AnimatedImageListItem = animated(ImageListItem);
  const theme = useTheme();

  const MouseEnter = () => {
    setHover(true);
  };

  const MouseLeave = () => {
    set({ xys: [0, 0, 1] });
    setHover(false);
  };

  return (
    <>
      <AnimatedImageListItem
        cols={1}
        sx={{
          display: "block",
          "&:hover": {
            cursor: "pointer",
          },
        }}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseEnter={MouseEnter}
        onMouseLeave={MouseLeave}
        style={{
          transform: properties.xys.to(trans),
        }}
      >
        <Link passHref href={props.path}>
          <a id={props.id}>
            <Image
              src={props.img}
              alt={props.title}
              height="443"
              width="635"
              sizes="50vw"
              quality="80"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
              layout="responsive"
            />
          </a>
        </Link>
      </AnimatedImageListItem>
    </>
  );
}
