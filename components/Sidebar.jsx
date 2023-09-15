import { Box, Typography } from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "250px",
        bgcolor: "primary.secondary",
        color: "fontColor.abc",
        height: "100vh",
        padding: "16px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: "text.xs",
          color: "color.abc",
        }}
      >
        Sidebar
      </Typography>
    </Box>
  );
};

export default Sidebar;
