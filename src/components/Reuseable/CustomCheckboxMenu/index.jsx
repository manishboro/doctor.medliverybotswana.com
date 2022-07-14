import * as React from "react";
import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";

import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import MenuIcon from "@mui/icons-material/Menu";

export default function CustomMenu({ CustomIcon, items, position, menuStyles = {} }) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => setOpen((prevOpen) => !prevOpen);

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) return;
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) anchorRef.current.focus();
    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <IconButton
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        sx={{ ...menuStyles }}
      >
        {CustomIcon ? <CustomIcon sx={{ fontSize: "3rem" }} /> : <MenuIcon sx={{ fontSize: "3rem" }} />}
      </IconButton>

      <Popper open={open} anchorEl={anchorRef.current} role={undefined} placement={position ?? "bottom-end"} transition>
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} style={{ transformOrigin: "right top" }}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                  sx={{ width: "max-content", boxShadow: 5, borderRadius: ".5rem" }}
                >
                  {items.map((item) => (
                    <MenuItem
                      key={nanoid()}
                      sx={{ padding: 0 }}
                      onClick={(e) => {
                        item.fn && item.fn();
                        handleClose(e);
                      }}
                    >
                      {item.pathname ? (
                        <NavLink
                          to={item.pathname}
                          style={{
                            minWidth: "13rem",
                            width: "100%",
                            display: "block",
                            textDecoration: "none",
                            color: "black",
                            textAlign: "left",
                            fontSize: "1.4rem",
                            padding: "1rem",
                          }}
                        >
                          {item.itemName}
                        </NavLink>
                      ) : (
                        <Box
                          sx={{
                            minWidth: "13rem",
                            width: "100%",
                            display: "block",
                            textDecoration: "none",
                            color: "black",
                            padding: "1rem",
                            fontSize: "1.4rem",
                            textAlign: "left",
                          }}
                        >
                          {item.itemName}
                        </Box>
                      )}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
