import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Grid } from "@mui/material";
import { Star } from "@mui/icons-material";
import StopCircleOutlinedIcon from "@mui/icons-material/StopCircleOutlined";
import * as React from "react";

const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 2.5,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4.7
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2.5
      }
    }
  ]
};

const VenueContainer = styled.div`
  margin-top: 2rem;
  padding-bottom: 2rem;
  .building-img-slider {
    border-radius: 8px 8px 0 0;
    .slider-img {
      border-radius: 8px;
      height: 120px;
      @media (min-width: 900px) {
        height: 220px;
        width: 80%;
      }
    }
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
      line-height: 8px;
      color: #ffffff;
    }
  }
`;

function Venues() {
  return (
    <VenueContainer>
      <Box fontWeight="700" textAlign="center">
        * Most Popular Venues *
      </Box>
      <Slider {...settings} className="building-img-slider">
        {Array(10)
          .fill({
            image:
              "https://b.zmtcdn.com/data/pictures/3/19839663/5f1aad250f16090da6d2388833ead9c6.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            name: "The Dome Cafe",
            address: "HSR Layout",
            distance: "4.2km",
            packages: "8",
            rating: "4.5"
          })
          .map((venue, index: number) => (
            <Grid pt={2}>
              <img
                src={venue.image}
                className="slider-img"
                alt={"offer"}
                height={"120px"}
                width={"130px"}
              />
              <Grid item fontWeight="600">
                {venue.name}
              </Grid>
              <Grid item fontSize="10px">
                {venue.name} · {venue.distance}
              </Grid>
              <Grid item fontSize="10px">
                {venue.packages} packages available
              </Grid>
              <Grid alignItems="center" container item gap={1}>
                <Grid item className="rating">
                  <Star className="icon" />
                  <span className="number">{venue.rating}</span>
                </Grid>
                <Grid item fontSize="10px">
                  {" "}
                  · ₹₹ ·{" "}
                </Grid>{" "}
                <Grid item>
                  <StopCircleOutlinedIcon
                    style={{ color: "green", fontSize: "12px" }}
                  />{" "}
                  <StopCircleOutlinedIcon
                    style={{ color: "red", fontSize: "12px" }}
                  />
                </Grid>
              </Grid>
            </Grid>
          ))}
      </Slider>
    </VenueContainer>
  );
}

export default Venues;
