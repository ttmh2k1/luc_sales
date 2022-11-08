import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 123456,
      product: "Walet for man",
      img: "https://cf.shopee.vn/file/46c32ba68386e4b63d15c48abaab7eb6",
      customer: "Tan Kiet",
      date: "1 August",
      amount: 678,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 246824,
      product: "Walet for woman",
      img: "https://cf.shopee.vn/file/4ca08f89b2fb62ccc06ae5705e1ab4fd",
      customer: "My Huyen",
      date: "18 August",
      amount: 600,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 135791,
      product: "Balo for man",
      img: "https://product.hstatic.net/1000397717/product/anh_chup_man_hinh_2022-03-03_luc_11.23.01_d3c9c9d513004e4b8616664601365b1c_master.png",
      customer: "Phong Duy",
      date: "30 August",
      amount: 1000,
      method: "Cash on Delivery",
      status: "Approved",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
