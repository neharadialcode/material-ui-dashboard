import React from "react";
import CardSlider from "./CardSlider";
import BTCchart from "./BTCchart";
import { Box } from "@mui/material";
import LatestActivity from "./LatestActivity";
import CryptoNews from "./CryptoNews";

const ScrollableContent = () => {
  return (
    <>
      <Box
        sx={{
          zIndex: { sm: 1 },
          position: { sm: "relative" },
        }}
      >
        <CardSlider />
        <BTCchart />
        <Box sx={{ display: "flex" }}>
          <LatestActivity />
          <CryptoNews />
        </Box>
      </Box>
    </>
  );
};

export default ScrollableContent;
