import { Avatar, Box, Container, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { Toaster } from "react-hot-toast";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
const StyledLink = styled(Link)(() => ({
  textDecoration: "underline",
  color: "#2196f3",
  fontSize: 14,
  "&:hover": {
    textDecoration: "underline",
  },
}));

const RegistrationPage = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <RegisterForm />
        <StyledLink to="/login">I already have an account</StyledLink>
      </Box>
      <Toaster />
    </Container>
  );
};

export default RegistrationPage;
