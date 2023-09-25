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
                  <Button
                    sx={{
                      background:
                        "linear-gradient(75deg, #0043FF 25.69%, #A370F1 105.3%)",
                    }}
                  >
                    {" "}
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
                <TableCell sx={{ padding: "12px" }}>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableCell sx={{ padding: "12px 20px" }}>
                <GraphImgTable />
              </TableCell>
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer
          component={Paper}
          sx={{ boxShadow: "none", width: "25%" }}
        >
          <Table
            sx={{
              minWidth: "auto",
              borderLeft: "1px solid ",
              borderColor: "#DFE5F9",
            }}
            size="small"
            aria-label="a dense table"
          >
            <TableBody>
              {sliderData.map((obj) => (
                <TableRow
                  key={obj.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    "&:hover": {
                      backgroundColor: "#FAFBFF",
                    },
                  }}
                >
                  <TableCell
                    sx={{
                      padding: "12px 20px",
                    }}
                    align="left"
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box sx={{ paddingRight: "10px" }}>
                        <img src={obj.icon} alt={obj.name} />
                      </Box>
                      <Box>{obj.name}</Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ padding: "12px 20px" }} align="right">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Typography sx={{ paddingRight: "10px" }}>
                        ¥{obj.amount}
                      </Typography>
                      <Typography
                        sx={{
                          color: {
                            defaultSize: String(obj.range).includes("-")
                              ? "color.red"
                              : "#01C0AA",
                          },
                        }}
                      >
                        {String(obj.range).includes("-") ? "" : "+"}
                        {obj.range}%
                        <UpArrow
                          rotate={
                            String(obj.range).includes("-") ? "180deg" : "0deg"
                          }
                          color={
                            String(obj.range).includes("-") ? "red" : "#01C0AA"
                          }
                        />
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default BTCchart;
