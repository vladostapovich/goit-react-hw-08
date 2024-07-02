import { Box, Button } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

export const AuthNav = ({ fullWidth = false, styles = {} }) => {
  let location = useLocation();

  const isLoginActive = location.pathname === "/login";
  const isRegisterActive = location.pathname === "/register";

  return (
    <Box sx={styles}>
      <Button
        fullWidth={fullWidth}
        color="primary"
        variant={isLoginActive ? "contained" : "text"}
        size="small"
        component={NavLink}
        to="/login"
      >
        Sign in
      </Button>
      <Button
        fullWidth={fullWidth}
        color="primary"
        variant={isRegisterActive ? "contained" : "text"}
        size="small"
        component={NavLink}
        to="/register"
      >
        Sign up
      </Button>
    </Box>
  );
};
