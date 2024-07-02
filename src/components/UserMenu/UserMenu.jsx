import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import { Avatar, Box, Button, Typography } from "@mui/material";

export const UserMenu = ({ styles, fullWidth = false }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, ...styles }}>
      <Button fullWidth={fullWidth} type="button" onClick={handleLogOut}>
        Logout
      </Button>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography variant="body2" color="text.primary">
          Welcome, {user.email}
        </Typography>
        <Avatar sx={{ bgcolor: "#2196f3", height: "30px", width: "30px" }}>
          {user.name[0]}
        </Avatar>
      </Box>
    </Box>
  );
};
