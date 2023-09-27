import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Triangle } from "./Icons";
import Image from "next/image";
import CryptoNewsCard from "./CryptoNewsCard";

const CryptoNews = () => {
  return (
    <Box sx={{ padding: "32px 32px 32px 0", width: "100%" }}>
      <Box
        sx={{
          backgroundColor: "color.white",
          minWidth: "310px",
          borderRadius: "10px ",
          border: "1px solid ",
          borderColor: "#DFE5F9",
          overflow: "hidden",
        }}
      >
        {/*========================== TITLE ============================*/}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 20px 0 20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "baseline",
            }}
          >
            <Triangle color="url(#paint0_linear_0_776)" />
            <Typography
              sx={{
                paddingLeft: "10px",
                fontWeight: "700",
              }}
            >
              Crypto Newsfeed
            </Typography>
          </Box>
          <Button
            sx={{
              border: "1px solid",
              borderColor: "#EEEFF1",
              color: "color.black",
              textTransform: "none",
            }}
          >
            Subscribe
          </Button>
        </Box>
        <Box
          sx={{
            padding: "20px",
          }}
        >
          <CryptoNewsCard image="/assets/img/card_small_img.png" />
          <CryptoNewsCard image="/assets/img/card_small_img2.png" />
        </Box>
      </Box>
    </Box>
  );
};

export default CryptoNews;
