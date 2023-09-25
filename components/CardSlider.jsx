import { Box, Button, Card, Typography } from "@mui/material";
import { useRef } from "react";
import Slider from "react-slick";
import { sliderData } from "./Helper";
import { LeftArrow, RightArrow, Triangle, WindowIcon } from "./Icons";

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
      <Box sx={{ width: "100%", paddingTop: "30px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            padding: "0 32px 20px 32px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <Triangle color="black" />
            <Typography sx={{ fontSize: "text.sm", padding: "0 10px" }}>
              Welcome
            </Typography>
            <Triangle color="black" />
            <Typography
              sx={{
                fontSize: "text.sm",
                padding: "0 10px",
                color: "color.blue",
                fontWeight: "bold",
              }}
            >
              Dashboard
            </Typography>
            <Triangle color="url(#paint0_linear_0_776)" />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <WindowIcon />

            <Button
              sx={{ padding: "0 10px", minWidth: "auto" }}
              onClick={goToPrevSlide}
            >
              <LeftArrow />
            </Button>
            <Button
              sx={{ padding: 0, minWidth: "auto" }}
              onClick={goToNextSlide}
            >
              <RightArrow />
            </Button>
          </Box>
        </Box>
        <Box sx={{ margin: "0 22px" }}>
          <Slider {...settings} ref={sliderRef}>
            {sliderData.map((obj, index) => (
              <Box key={index}>
                <Card
                  sx={{
                    padding: "20px",
                    boxShadow: "none",
                    borderRadius: "12px",
                    border: "1px solid #DFE5F9",
                    margin: "0 10px",
                    minHeight: "130px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box sx={{ display: "flex", alignItems: "start" }}>
                      <img
                        width="30px"
                        style={{ padding: "10px 0 0 0" }}
                        src={obj.icon}
                        alt="graphImg"
                      />
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
