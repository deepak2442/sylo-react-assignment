import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Grid } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import * as React from "react";
const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 1.5,
  slidesToScroll: 1,
  arrows: false,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2.5
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.5
      }
    }
  ]
};

const OcasionsContainer = styled.div`
  margin-top: 1rem;
  .building-img-slider {
    border-radius: 8px 8px 0 0;
    .slider-img {
      border-radius: 8px;
      height: 300px;
      @media (min-width: 900px) {
        height: 450px;
        width: 80%;
      }
    }
  }
  .testimonial-highlight {
    -webkit-text-fill-color: transparent;
    background: rgb(131, 58, 180);
    background: linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 1) 30%,
      rgba(131, 58, 180, 1) 100%
    );
    -webkit-background-clip: text;
    font-size: larger;
    font-weight: bolder;
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

const CustomPlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 100 100"
  >
    <circle cx="50" cy="50" r="45" fill="white" />
    <polygon points="35,25 65,50 35,75" fill="red" />
  </svg>
);

function Testimonials() {
  return (
    <OcasionsContainer>
      <Box fontWeight="600" textAlign="center">
        See what our <span className={"testimonial-highlight"}>customers</span>{" "}
        say
      </Box>
      <Slider {...settings} className="building-img-slider">
        {Array(10)
          .fill(
            "https://www.zilliondesigns.com/blog/wp-content/uploads/Ecommerce-Sales-Banner-8.jpg"
          )
          .map((image: string, index: number) => (
            <Grid pt={2} px={2} position="relative">
              <img
                src={image}
                alt={`Thumbnail for YouTube Video ${image}`}
                style={{
                  width: "100%",
                  cursor: "pointer",
                  borderRadius: "10px"
                }}
                className="slider-img"
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  cursor: "pointer",
                  backgroundColor: "#55555580",
                  borderRadius: "10px",
                  padding: "2px"
                }}
              >
                <PlayArrowIcon style={{ color: "white" }} />
              </div>
            </Grid>
          ))}
      </Slider>
    </OcasionsContainer>
  );
}

export default Testimonials;
