import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import AnimatedMenuItem from "../menu/AnimatedMenuItem";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useSpring, animated } from "react-spring";
import Trail from "../effects/Trail";

const Fade = React.forwardRef(function Fade(props, ref) {
  const theme = useTheme();
  const { in: open, children, onEnter, onExited, ...other } = props;
  const [styles, set] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onEnter: () => {
      set(onEnter())
    },
  }));

  return (
    <animated.div ref={ref} style={styles} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function SpringMenu({ lab }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const preventDefault = (event) => event.preventDefault();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="mobile-menu">
      <IconButton onClick={handleOpen} aria-label="menu">
        <MenuIcon sx={{ color: lab ? "#fff" : "#000" }} />
      </IconButton>
      <Dialog fullScreen
        PaperProps={{
          sx: { overflowX: "hidden", overflowY: "hidden", background: lab ? "#000" : "#fff" },
          elevation: 0
        }}
        open={open}
        disableScrollLock={true}
        onClose={handleClose}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            paddingTop: "5px",
            paddingBottom: "5px",
            marginLeft: '3px',
            marginTop: '2px',
            background: lab ? "#000" : "#fff"
          }}
        >
          <IconButton edge="start" color={ lab ? "secondary" : "primary" } onClick={handleClose} aria-label="close" size="small">
            <CloseIcon />
          </IconButton>
        </Box>
        <Fade in={open}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              height: "100vh",
              paddingBottom: "50px",
            }}
          >
            <Trail open={open}>
              <AnimatedMenuItem
                id="mobile-work-link"
                color={ lab ? "#fff" : "#000" }
                changedColor={ lab ? "#fff" : "#000" }
                variant="h2"
                height="7px"
                href="/"
                text="work"
              />
              <AnimatedMenuItem
                id="mobile-info-link"
                color={ lab ? "#fff" : "#000" }
                changedColor={ lab ? "#fff" : "#000" }
                variant="h2"
                height="7px"
                href="/info"
                text="info"
              />
              <AnimatedMenuItem
                id="mobile-lab-link"
                color={ lab ? "#fff" : "#000" }
                changedColor={ lab ? "#fff" : "#000" }
                variant="h2"
                height="7px"
                href="/lab"
                text="lab"
              />
            </Trail>
          </Box>
        </Fade>
      </Dialog>
    </div>
  );
}
