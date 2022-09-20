import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        marginTop: "2rem",
      }}
    >
      <Typography variant="h5">Terms & Conditions</Typography>
      <Typography>Welcome to Blog Post App!</Typography>
      <Typography>
        These terms and conditions outline the rules and regulations for the use
        of Blog Post App
      </Typography>
      <Typography>
        By accessing this website we assume you accept these terms and
        conditions. Do not continue to use Blog Post App if you do not agree to
        take all of the terms and conditions stated on this page.
      </Typography>
      <Typography>
        The following terminology applies to these Terms and Conditions, Privacy
        Statement and Disclaimer Notice and all Agreements: "Client", "You" and
        "Your" refers to you, the person log on this website and compliant to
        the Company’s terms and conditions. "The Company", "Ourselves", "We",
        "Our" and "Us", refers to our Company. "Party", "Parties", or "Us",
        refers to both the Client and ourselves. All terms refer to the offer,
        acceptance and consideration of payment necessary to undertake the
        process of our assistance to the Client in the most appropriate manner
        for the express purpose of meeting the Client’s needs in respect of
        provision of the Company’s stated services, in accordance with and
        subject to, prevailing law of Netherlands. Any use of the above
        terminology or other words in the singular, plural, capitalization
        and/or he/she or they, are taken as interchangeable and therefore as
        referring to same.
      </Typography>
      <Typography variant="h5">Cookies</Typography>
      <Typography>
        We employ the use of cookies. By accessing Blog Post App, you agreed to
        use cookies in agreement with the Blog Post App's Privacy Policy.
      </Typography>
      <Typography>
        Most interactive websites use cookies to let us retrieve the user’s
        details for each visit. Cookies are used by our website to enable the
        functionality of certain areas to make it easier for people visiting our
        website. Some of our affiliate/advertising partners may also use
        cookies.
      </Typography>
    </Container>
  );
};

export default TermsAndConditions;
