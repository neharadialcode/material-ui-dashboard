import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";

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
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
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
                Detail
              </TableCell>
              <TableCell sx={{ padding: "12px" }} align="right">
                Price
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell sx={{ padding: "12px" }} component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell sx={{ padding: "12px" }} align="right">
                  {row.calories}
                </TableCell>
                <TableCell sx={{ padding: "12px" }} align="right">
                  {row.fat}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BTCchart;
