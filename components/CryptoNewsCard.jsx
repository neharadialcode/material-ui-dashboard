import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const CryptoNewsCard = ({ image }) => {
  return (
    <Box
      sx={{
        marginTop: "15px",
        padding: "10px 20px",
        borderRadius: "12px",
        border: "1px solid ",
        borderColor: "#DFE5F9",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Image
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
        }}
        width={135}
        height={130}
        src={image}
        alt="oval"
      />
      <Typography sx={{ fontSize: "12px" }}>Today 11:36</Typography>
      <Typography sx={{ fontSize: "14px", padding: "10px 0" }}>
        Beyond Bad Trades: Cybersecurity Risks to Cryptocurrency Exchange Users
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "end",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            paddingRight: "10px",
            fontSize: "14px",
            color: "#B3B4B7",
          }}
        >
          Cryptocurrency-mining malware is not the only type of
          cryptocurrency-related threat — cybercriminals have resorted…
        </Typography>
        <Typography sx={{ fontSize: "14px" }}>Security</Typography>
      </Box>
    </Box>
  );
};

export default CryptoNewsCard;
