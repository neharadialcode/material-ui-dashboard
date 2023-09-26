import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import { sliderData } from "./Helper";
import { GraphImgTable, UpArrow } from "./Icons";
import BTCRightTable from "./BTCRightTable";

const BTCchart = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  return (
    <Box sx={{ padding: "32px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TableContainer
          component={Paper}
          sx={{ boxShadow: "none", width: "75%" }}
        >
          <Table size="small" aria-label="a dense table">
            <TableHead
              sx={{
                bgcolor: "#FAFBFF",
                border: "1px solid",
                borderColor: "#DFE5F9",
              }}
            >
              <TableRow
                sx={{
                  bgcolor: "#FAFBFF",
                  border: "1px solid",
                  borderColor: "#DFE5F9",
                }}
              >
                <TableCell sx={{ padding: "12px" }}>Date</TableCell>
                <TableCell sx={{ padding: "12px" }} align="right">
                  <Button
                    sx={{
                      color: "color.white",
                      background:
                        "linear-gradient(75deg, #0043FF 25.69%, #A370F1 105.3%)",
                    }}
                  >
                    BUY
                  </Button>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableHead
              sx={{
                bgcolor: "#FAFBFF",
                border: "1px solid",
                borderColor: "#DFE5F9",
              }}
            >
              <TableRow
                sx={{
                  bgcolor: "#FAFBFF",
                  border: "1px solid",
                  borderColor: "#DFE5F9",
                }}
              >
                <TableCell sx={{ padding: "12px" }} align="right">
                  Price
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableCell sx={{ padding: "12px 20px" }}>
                <GraphImgTable />
              </TableCell>
            </TableBody>
          </Table>
        </TableContainer>
        <BTCRightTable />
      </Box>
    </Box>
  );
};

export default BTCchart;
