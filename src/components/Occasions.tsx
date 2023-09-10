import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Grid } from "@mui/material";
import * as React from "react";

const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 3.5,
  slidesToScroll: 1,
  arrows: false,
  rows: 2,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4.2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3.5
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2.6
      }
    }
  ]
};

const OcasionsContainer = styled.div`
  margin-top: 2rem;
  .building-img-slider {
    border-radius: 8px 8px 0 0;
    .slider-img {
      border-radius: 8px;
      height: 110px;
      @media (min-width: 900px) {
        height: 220px;
        width: 80%;
      }
    }
  }
`;

const occations = [
  "wedding",
  "bride to be",
  "vacation",
  "promotion",
  "graduation",
  "breakup"
];

function Occasions() {
  return (
    <OcasionsContainer>
      <Box fontWeight="600">Dinesh, what's your occation?</Box>
      <Slider {...settings} className="building-img-slider">
        {Array(10)
          .fill(
            "https://www.zilliondesigns.com/blog/wp-content/uploads/Ecommerce-Sales-Banner-8.jpg"
          )
          .map((image: string, index: number) => (
            <Grid pt={2}>
              <img
                src={image}
                className="slider-img"
                alt={"offer"}
                height={"90px"}
              />
              <Grid
                item
                width={{ xs: "110px", md: "80%" }}
                textAlign="center"
                fontWeight="600"
              >
                {occations[Math.floor(Math.random() * occations.length)]}
              </Grid>
            </Grid>
          ))}
      </Slider>
    </OcasionsContainer>
  );
}

export default Occasions;
