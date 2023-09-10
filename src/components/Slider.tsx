import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as React from "react";

const SliderContainer = styled.div`
  /* border-radius: 8px; */
  .building-img-slider {
    border-radius: 8px 8px 0 0;
    .slider-img {
      border-radius: 8px;
      padding: 5px;
      height: 150px;
      @media (min-width: 900px) {
        height: 300px;
      }
    }
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
`;

function OfferSlider() {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: any) => <ul>{dots}</ul>,
    customPaging: (_: any) => <div className="ft-slick__dots--custom"></div>,
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
          slidesToShow: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  };

  if (window.innerWidth >= 900) {
    settings.slidesToShow = 5;
  }
  if (window.innerWidth >= 1200) {
    settings.slidesToShow = 6;
  }
  return (
    <SliderContainer>
      <Slider {...settings} className="building-img-slider">
        {Array(5)
          .fill(
            "https://www.zilliondesigns.com/blog/wp-content/uploads/Ecommerce-Sales-Banner-8.jpg"
          )
          .map((image, index) => (
            <img
              src={image}
              className="slider-img"
              alt={"offer"}
              height={"150px"}
              key={index}
            />
          ))}
      </Slider>
    </SliderContainer>
  );
}

export default OfferSlider;
