import { Box } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ScrollableContent from "./ScrollableContent";
import { useState } from "react";

const Dashboard = () => {
  const [sideBarOpen, setSidebarOpen] = useState(false);

  return (
    <Box
      onClick={() => setSidebarOpen(!sideBarOpen)}
      sx={{ p: 0, display: "flex", height: "100vh", overflow: "hidden" }}
    >
      <Sidebar sideBarOpen={sideBarOpen} setSidebarOpen={setSidebarOpen} />
      <Box
        sx={{
          bgcolor: "color.lightBlue",
          width: "100%",
          position: { sm: "relative" },
          zIndex: { sm: 1 },
        }}
      >
        <Header setSidebarOpen={setSidebarOpen} sideBarOpen={sideBarOpen} />
        <ScrollableContent />
      </Box>
    </Box>
  );
};

export default Dashboard;
