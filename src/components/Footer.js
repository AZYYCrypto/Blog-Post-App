import { Container, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <Box
      px={{ xs: 3, sm: 10 }}
      py={{ xs: 5, sm: 5 }}
      marginTop={5}
      position={"fixed"}
      bottom={0}
      width={"100%"}
      bgcolor="#1976D2"
      color="white"
      component="footer"
    >
      <Container>
        <Grid container spacing={0} justifyContent="center">
          <Grid item xs={12} sm={1.3}>
            <Box
              to="/about"
              component={Link}
              sx={{ color: "white", textDecoration: "none" }}
            >
              About
            </Box>
          </Grid>
          <Grid item xs={12} sm={1.3}>
            <Box
              to="/contact"
              component={Link}
              sx={{ color: "white", textDecoration: "none" }}
            >
              Contact
            </Box>
          </Grid>
          <Grid item xs={12} sm={1.3}>
            <Box
              to="/"
              component={Link}
              sx={{ color: "white", textDecoration: "none" }}
            >
              Policy
            </Box>
          </Grid>
          <Grid item xs={12} sm={1.3}>
            <Box
              to="/terms-and-conditions"
              component={Link}
              sx={{ color: "white", textDecoration: "none" }}
            >
              Term & Conditions
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
          Copyright © {new Date().getFullYear()} Dimitar Sabev
        </Box>
      </Container>
    </Box>
  );
}
