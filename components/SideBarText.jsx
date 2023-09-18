import { Typography } from "@mui/material";
import React from "react";

const SideBarText = ({ heading }) => {
  return (
    <Typography
      variant="h4"
      sx={{ color: "color.white", padding: "20px", marginTop: "20px" }}
    >
      {heading}
    </Typography>
  );
};

export default SideBarText;
