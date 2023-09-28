import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
const LatestActivityTable = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("2018/10/02 10:57:46", "Deposit Japanese Yen", "+10,000 JPY"),
    createData("2018/10/10 10:57:46", "Bought Bitcoin", "+ 0.00018147 BTC"),
    createData("2018/10/10 10:57:46", "Service fee", "- 500 JPY"),
  ];
  return (
    <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
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
            <TableCell sx={{ padding: "12px 20px" }}>Date</TableCell>
            <TableCell sx={{ padding: "12px 20px" }} align="left">
              Detail
            </TableCell>
            <TableCell sx={{ padding: "12px 20px" }} align="right">
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
              <TableCell
                sx={{ padding: "12px 20px" }}
                component="th"
                scope="row"
              >
                {row.name}
              </TableCell>
              <TableCell sx={{ padding: "12px 20px" }} align="left">
                {row.calories}
              </TableCell>
              <TableCell sx={{ padding: "12px 20px" }} align="right">
                {row.fat}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LatestActivityTable;
