import { Box, Container, AppBar as Header, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import ContactsIcon from "@mui/icons-material/Contacts";
import Burger from "../Burger/Burger";
import Navigation from "../Navigation/Navigation";
import { pink } from "@mui/material/colors";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header
      position="static"
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: 2,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={toolbarStyles}>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Link to="/">
              <ContactsIcon color="primary" sx={{ color: pink[500] }} />
            </Link>
            <Navigation
              styles={{ display: { xs: "none", sm: "flex" }, ml: 1 }}
            />
          </Box>
          {isLoggedIn ? (
            <UserMenu styles={{ display: { xs: "none", md: "flex" } }} />
          ) : (
            <AuthNav
              styles={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            />
          )}
          <Burger isLoggedIn={isLoggedIn} />
        </Toolbar>
      </Container>
    </Header>
  );
};

const toolbarStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: "10px",
  bgcolor: "rgba(255, 255, 255, 0.4)",
  backdropFilter: "blur(24px)",
  maxHeight: 40,
  border: "1px solid",
  borderColor: "divider",
  boxShadow: `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`,
};
export default AppBar;
