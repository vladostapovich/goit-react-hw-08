import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { styled } from "@mui/system";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
    transform: "scale(1.05)",
  },
  "&:active": {
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
    transform: "scale(1)",
  },
}));

const HomePage = () => {
  const text = "Welcome to our Contact Management Website!";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <Box
      sx={{
        margin: "20px",
        bgcolor: "#3f50b5",
        color: "#fff",
        py: { xs: 4, sm: 6 },
        textAlign: "center",
        backgroundImage: "linear-gradient(to bottom, #3f50b5, #757de8)",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: 2,
          }}
        >
          <Box sx={{ flexShrink: 0, mb: { xs: 2, sm: 0 } }}></Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              component="h1"
              variant="h4"
              sx={{ fontWeight: 700, mb: 2 }}
            >
              {displayText.split("").map((char, index) => (
                <span key={index} style={{ color: "#90caf9" }}>
                  {char}
                </span>
              ))}
            </Typography>

            <StyledButton
              component={Link}
              to="/contacts"
              size="large"
              variant="contained"
              sx={{ mt: 2 }}
            >
              Get Started
            </StyledButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
