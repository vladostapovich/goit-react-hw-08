import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";

import { Box, Button, Divider, Drawer } from "@mui/material";
import Navigation from "../Navigation/Navigation";

const Burger = ({ isLoggedIn }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleClick = (e) => {
    if (e.currentTarget !== e.target) setOpen(false);
  };

  return (
    <Box sx={{ display: { sm: "", md: "none" }, ml: "auto" }}>
      <Button
        variant="text"
        color="primary"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{ minWidth: "30px", p: "4px" }}
      >
        <MenuIcon />
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            minWidth: "60dvw",
            p: 2,
            backgroundColor: "background.paper",
            flexGrow: 1,
          }}
          onClick={handleClick}
        >
          <Navigation
            styles={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              my: 1,
            }}
          />
          <Divider />
          {isLoggedIn ? (
            <UserMenu
              fullWidth={true}
              styles={{ mt: 1, flexDirection: "column" }}
            />
          ) : (
            <AuthNav
              fullWidth={true}
              styles={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                mt: 1,
              }}
            />
          )}
        </Box>
      </Drawer>
    </Box>
  );
};

export default Burger;
