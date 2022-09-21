import { Container, Link, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Container
      sx={{
        marginTop: "4rem",
        display: "flex",
        flexDirection: "column",
        gap: "2.2rem",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Hi! I'm Dimitar Sabev 👋
      </Typography>
      <Typography sx={{ color: "#6B7280" }}>
        I've been programming every day for the past 2 years.
      </Typography>
      <Typography sx={{ color: "#6B7280" }}>
        I try to learn from everywhere. I write down everything that makes sense
        to me and could potentially benefit me and increase my productivity.
      </Typography>
      <Typography sx={{ color: "#6B7280" }}>
        My view has been - I don't have enough time to figure out a lot of these
        things on my own, so I've decided to abandon my ego and try to learn as
        much from others as possible.
      </Typography>
      <Typography sx={{ color: "#6B7280" }}>
        I like to create new projects and practice my knowledge My projects and
        what I have done so far can be found here:
        <Link href="https://github.com/dimitarsabev00" target="_blank">
          {` My GitHub`}
        </Link>
      </Typography>
    </Container>
  );
};

export default About;
