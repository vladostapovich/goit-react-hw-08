import { Box, Container, Typography } from "@mui/material";

const NotFoundPage = () => {
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
        <Typography component="h1" variant="h5">
          Page is not found
        </Typography>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
