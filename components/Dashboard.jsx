import { Box } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ScrollableContent from "./ScrollableContent";
import { useState } from "react";

const Dashboard = () => {
  const [sideBarOpen, setSidebarOpen] = useState(false);

  return (
    <Box sx={{ p: 0, display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar sideBarOpen={sideBarOpen} />
      <Box sx={{ bgcolor: "color.lightBlue", width: "100%" }}>
        <Header setSidebarOpen={setSidebarOpen} />
        <ScrollableContent />
      </Box>
    </Box>
  );
};

export default Dashboard;
