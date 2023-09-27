import { Box, Typography } from "@mui/material";
import React from "react";
import { Triangle } from "./Icons";

const CryptoNews = () => {
  return (
    <Box sx={{ padding: "32px 32px 32px 0", width: "100%" }}>
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
              Crypto Newsfeed{" "}
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "20px",
            }}
          >
            <Box
              sx={{
                padding: "10px 20px",
                borderRadius: "12px",
                border: "1px solid ",
                borderColor: "#DFE5F9",
              }}
            >
              <Typography>Today 11:36</Typography>
              <Typography>
                Beyond Bad Trades: Cybersecurity Risks to Cryptocurrency
                Exchange Users
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ paddingRight: "10px" }}>
                  Cryptocurrency-mining malware is not the only type of
                  cryptocurrency-related threat — cybercriminals have resorted…
                </Typography>
                <Typography>Security</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CryptoNews;
