import Slider from "react-slick";
import React, { useRef } from "react";
import { Box, Button, Typography } from "@mui/material";

const CardSlider = () => {
  const sliderRef = useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box>
          <Button onClick={goToPrevSlide}>left</Button>
          <Button onClick={goToNextSlide}>right</Button>
        </Box>
        <Box>
          <Slider {...settings} ref={sliderRef}>
            <Box>
              <Typography variant="h1">1</Typography>
            </Box>
            <Box>
              <Typography variant="h1">1</Typography>
            </Box>
            <Box>
              <Typography variant="h1">1</Typography>
            </Box>
            <Box>
              <Typography variant="h1">1</Typography>
            </Box>
            <Box>
              <Typography variant="h1">1</Typography>
            </Box>
          </Slider>
        </Box>
      </Box>
    </>
  );
};

export default CardSlider;
function SampleNextArrow(props) {
  const { onClick } = props;
  return <div onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return <div onClick={onClick} />;
}
