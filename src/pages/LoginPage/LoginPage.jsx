import { Avatar, Box, Container, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Toaster } from "react-hot-toast";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"; // Импортируем иконку

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "underline",
  color: theme.palette.primary.main,
  fontSize: 14,
  marginTop: theme.spacing(2),
  "&:hover": {
    textDecoration: "underline",
    color: theme.palette.primary.dark,
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

const LoginPage = () => {
  return (
    <StyledContainer component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <LoginForm />
        <StyledLink to="/register">I haven&apos;t had an account</StyledLink>
      </Box>
      <Toaster />
    </StyledContainer>
  );
};

export default LoginPage;
