import React from "react";
import { Grid, Box } from "@mui/material";
import styled from "styled-components";
import { Star } from "@mui/icons-material";
import StopCircleOutlinedIcon from "@mui/icons-material/StopCircleOutlined";

const BudgetVenuesContainer = styled.div`
  margin-top: 2rem;
  padding-bottom: 2rem;

  .img-container {
    position: relative;
  }

  .img {
    margin-top: -30px;
    margin-bottom: -20px;
    border-radius: 10px;
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: green;
    border-radius: 10px;
    padding: 2px 5px;

    .icon {
      color: #ffffff;
      width: 12px;
      height: 12px;
    }

    .number {
      font-size: 10px;
      line-height: 12px;
      color: #ffffff;
    }
  }

  .sylo-container {
    position: absolute;
    bottom: -20px;
    left: 0;
    right: 0;
    text-align: center;
  }

  .sylo-select {
    background: linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 1) 30%,
      rgba(131, 58, 180, 1) 100%
    );
    color: white;
    padding: 3px 5px;
    border-radius: 10px;
    width: fit-content;
    cursor: pointer;
    margin: 0 auto;
  }

  .card-container {
    background: rgb(174, 161, 184);
    background: linear-gradient(
      90deg,
      rgba(174, 161, 184, 1) 0%,
      rgba(245, 245, 245, 1) 48%,
      rgba(166, 146, 179, 1) 100%
    );
    border-radius: 10px;
    margin-bottom: 1rem;
  }

  @media (min-width: 900px) {
    .card-container {
      width: calc(30% - 1rem); /* 3 cards in a row */
    }
  }
`;

function BudgetVenues() {
  return (
    <BudgetVenuesContainer>
      <Box fontWeight="700" pb={4}>
        * Venues on a budget *
      </Box>
      <Grid container xs={12} gap={6}>
        {Array(3)
          .fill({
            image:
              "https://b.zmtcdn.com/data/pictures/3/19839663/5f1aad250f16090da6d2388833ead9c6.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            name: "The Dome Cafe",
            address: "HSR Layout",
            distance: "4.2km",
            packages: "9",
            rating: "4.5"
          })
          .map((venue, index) => (
            <Grid container item pt={2} className="card-container" key={index}>
              <div className="img-container">
                <img
                  src={venue.image}
                  alt={"offer"}
                  height={"120px"}
                  width={"130px"}
                  className={"img"}
                />
                <div className="sylo-container">
                  <div className="sylo-select">Sylo select</div>
                </div>
              </div>
              <Grid container item xs pl={2}>
                <Grid container fontWeight="600">
                  {venue.name}
                </Grid>
                <Grid alignItems="center" container gap={1}>
                  <Grid item className="rating">
                    <Star className="icon" />
                    <span className="number">{venue.rating}</span>
                  </Grid>
                  <Grid item fontSize="10px">
                    {" "}
                    · ₹₹ ·{" "}
                  </Grid>
                  <Grid item>
                    <StopCircleOutlinedIcon
                      style={{ color: "green", fontSize: "12px" }}
                    />{" "}
                    <StopCircleOutlinedIcon
                      style={{ color: "red", fontSize: "12px" }}
                    />
                  </Grid>
                </Grid>
                <Grid container fontSize="10px">
                  {venue.name} · {venue.distance}
                </Grid>
                <Grid item fontSize="10px">
                  {venue.packages} packages available
                </Grid>
              </Grid>
            </Grid>
          ))}
      </Grid>
    </BudgetVenuesContainer>
  );
}

export default BudgetVenues;
