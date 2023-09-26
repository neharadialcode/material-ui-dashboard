import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { GraphImgTable } from "./Icons";
const BTCLeftTable = () => {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: "none", width: "75%" }}>
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
          <TableRow>
            <TableCell sx={{ padding: "12px 20px" }}>
              <GraphImgTable />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BTCLeftTable;
