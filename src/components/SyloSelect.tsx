import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid, Typography } from "@mui/material";
import * as React from "react";

const settings = {
  dots: true,
  infinite: false,
  slidesToShow: 2.5,
  slidesToScroll: 1,
  arrows: false,
  rows: 2,
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
        slidesToShow: 3.5
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
  ],
  appendDots: (dots: any) => <ul>{dots}</ul>,
  customPaging: (_: any) => <div className="ft-slick__dots--custom"></div>
};

const SyloSelectContainer = styled(Grid)`
  margin-top: 2rem;
  .building-img-slider {
    border-radius: 8px 8px 0 0;
    .slick-dots > li {
      margin: 0 8px 0 0;
      padding: 0;
      width: 4px;
      height: 4px;
    }
    .slick-dots > li.slick-active {
      margin: 0 8px 0 0;
      padding: 0;
      width: 24px;
    }
    .ft-slick__dots--custom {
      height: 4px;
      width: 4px;
      border: 1px solid #7f00ff;
      border-radius: 50%;
      position: relative;
      background-color: #7f00ff;
    }

    li.slick-active > .ft-slick__dots--custom {
      width: 100%;
      border-radius: 2px;
      background-color: #7f00ff;
    }
  }
  .silo-title {
    -webkit-text-fill-color: transparent;
    width: 20%;
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
    margin: 0 10px;
    padding-inline: 5px;
  }
  .left-arrow {
    position: relative;
    height: 0;
    border-bottom: 5px solid transparent;
    border-image: linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 1) 30%,
      rgba(131, 58, 180, 1) 100%
    );
    border-image-slice: 1;
  }

  .left-arrow::after {
    content: "";
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 15px solid #833ab4;
    position: absolute;
    right: -10px;
    top: -7px;
  }
  .right-arrow {
    position: relative;
    height: 0;
    border-bottom: 5px solid transparent;
    border-image: linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 1) 0%,
      rgba(131, 58, 180, 1) 100%
    );
    border-image-slice: 1;
  }

  .right-arrow::after {
    content: "";
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 15px solid #e42c2c;
    position: absolute;
    left: -10px;
    top: -7px;
  }
  .line {
    position: relative;
    height: 0;
    border-bottom: 5px solid transparent;
    border-image: linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 1) 0%,
      rgba(131, 58, 180, 1) 100%
    );
    border-image-slice: 1;
  }
  .package {
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
  }
  .package-container {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 1px;
    left: 0;
    right: 0;
  }
`;

const selectOptions = [
  "wedding",
  "bride to be",
  "vacation",
  "promotion",
  "graduation",
  "breakup"
];

function SyloSelect() {
  const getRandomGradient = () => {
    const randomLightColor1 = `rgb(${Math.floor(Math.random() * 100) + 155}, ${
      Math.floor(Math.random() * 100) + 155
    }, ${Math.floor(Math.random() * 100) + 155})`;
    const randomLightColor2 = `rgb(${Math.floor(Math.random() * 100) + 155}, ${
      Math.floor(Math.random() * 100) + 155
    }, ${Math.floor(Math.random() * 100) + 155})`;

    return `linear-gradient(to bottom, ${randomLightColor1}, ${randomLightColor2})`;
  };
  const numItems = 12; // Number of grid items

  const gridItems = Array.from({ length: numItems }, (_, index) => {
    const gradientStyle = {
      background: getRandomGradient()
    };

    return (
      <Grid item xs={12} sm={6} md={4} p={1} key={index} position={"relative"}>
        <div
          style={{
            background: gradientStyle.background,
            color: "black",
            textAlign: "center",
            padding: "30px",
            borderRadius: "10px"
          }}
        >
          <Typography variant="h6" fontSize="14px">
            {selectOptions[index % 6]}
          </Typography>
        </div>
        <div className="package-container">
          <div className="package">
            <Typography variant="body2">Get this package</Typography>
          </div>
        </div>
      </Grid>
    );
  });
  return (
    <SyloSelectContainer>
      <Grid container alignItems="center">
        <Grid item className="left-arrow" xs={4} md={5}></Grid>
        <Grid container item xs md>
          <Grid
            item
            xs={12}
            fontWeight="700"
            textAlign="center"
            className="silo-title"
          >
            Sylo Select
          </Grid>
          <Grid fontSize="10px" fontWeight="700" textAlign="center" xs={12}>
            Exclusive Celebration Plans
          </Grid>
        </Grid>
        <Grid item className="right-arrow" xs={4} md={5}></Grid>
      </Grid>
      <Slider {...settings} className="building-img-slider">
        {gridItems}
      </Slider>
      <Grid item className="line" pt={5}></Grid>
    </SyloSelectContainer>
  );
}

export default SyloSelect;
