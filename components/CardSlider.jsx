import Slider from "react-slick";
import React, { useRef } from "react";
import { Box, Button, Card, Typography } from "@mui/material";
import { sliderData } from "./Helper";
import { RightArrow, LeftArrow } from "./Icons";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";

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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 32px",
          }}
        >
          <Box>dfghfjgkhj</Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <GridViewOutlinedIcon
              sx={{
                backgroundColor: "color.white",
                width: "30px",
                height: "30px",
              }}
            />
            <Button onClick={goToPrevSlide}>
              <LeftArrow />
            </Button>
            <Button onClick={goToNextSlide}>
              <RightArrow />
            </Button>
          </Box>
        </Box>
        <Box>
          <Slider {...settings} ref={sliderRef}>
            {sliderData.map((obj, index) => (
              <Box key={index}>
                <Card
                  sx={{
                    padding: "20px",
                    maxWidth: "300px",
                    boxShadow: "none",
                    borderRadius: "12px",
                    border: "1px solid #DFE5F9",
                    margin: "0 32px",
                  }}
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <img src={obj.icon} alt="graphImg" />
                      <Box sx={{ paddingLeft: "10px" }}>
                        <Typography variant="h5">{obj.name}</Typography>
                        <Typography>{obj.name}</Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="h5">{obj.amount}</Typography>
                      <Typography>{obj.range}</Typography>
                    </Box>
                  </Box>
                  <img width="100%" src={obj.graphImg} alt="graphImg" />
                </Card>
              </Box>
            ))}
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
