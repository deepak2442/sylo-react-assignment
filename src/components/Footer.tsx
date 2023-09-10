import React from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const FooterContainer = styled(Grid)`
  .footer {
    background-color: #fff;
    bottom: 0;
    box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.1);
    height: 10vh;
    width: 100%;
    z-index: 2;
  }

  .footer-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 25%; /* Each item occupies 25% of the footer */
  }
`;

function Footer() {
  return (
    <FooterContainer
      container
      px={2}
      justifyContent="center"
      alignItems="center"
      spacing={0}
    >
      <Grid item xs={3} className="footer-item">
        <HomeIcon />
        <div>Sylo</div>
      </Grid>
      <Grid item xs={3} className="footer-item">
        <SearchIcon />
        <div>Search</div>
      </Grid>
      <Grid item xs={3} className="footer-item">
        <FormatListBulletedIcon />
        <div>Orders</div>
      </Grid>
      <Grid item xs={3} className="footer-item">
        <AccountCircleIcon />
        <div>Profile</div>
      </Grid>
    </FooterContainer>
  );
}

export default Footer;
