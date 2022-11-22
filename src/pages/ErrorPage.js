import { Container, Typography } from "@mui/material";
import React from "react";

const ErrorPage = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "1rem",
      }}
    >
      <Typography variant="h4">Page Not Found</Typography>
    </Container>
  );
};

export default ErrorPage;
