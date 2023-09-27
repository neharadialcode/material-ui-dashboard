import { Box, Typography } from "@mui/material";
import React from "react";
import { Triangle } from "./Icons";

const CryptoNews = () => {
  return (
    <Box sx={{ padding: "32px", width: "100%" }}>
      <Box
        sx={{
          backgroundColor: "color.white",
          minWidth: "310px",
          borderRadius: "10px 10px 0 0px",
          border: "1px solid ",
          borderColor: "#DFE5F9",
          overflow: "hidden",
        }}
      >
        {/*========================== TITLE ============================*/}

        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "baseline",
              padding: "16px 20px",
            }}
          >
            <Triangle color="url(#paint0_linear_0_776)" />
            <Typography
              sx={{
                paddingLeft: "10px",
                fontWeight: "700",
              }}
            >
              Latest Activities
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CryptoNews;
