import { Box } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 32px",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Box>hello world</Box>
      <Box>secondary content</Box>
    </Box>
  );
};

export default Header;
