import { Box } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ScrollableContent from "./ScrollableContent";

const Dashboard = () => {
  return (
    <Box sx={{ p: 0, display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar />
      <Box sx={{ bgcolor: "primary.main", width: "100%" }}>
        <Header />
        <ScrollableContent />
      </Box>
    </Box>
  );
};

export default Dashboard;
