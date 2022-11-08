import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { yellow } from "@mui/material/colors";
import { FaBox, FaChartPie, FaReceipt, FaUser } from "react-icons/fa";
import "./widget.scss";

const Widget = ({ type }) => {
  let data;

  //Temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "revenue":
      data = {
        title: "REVENUE",
        isMoney: true,
        link: "More details",
        icon: (
          <FaChartPie
            className="icon"
            style={{ backgroundColor: "darkslateblue", color: "white" }}
          />
        ),
      };
      break;
    case "customer":
      data = {
        title: "NEW CUSTOMERS",
        isMoney: false,
        link: "View all customers",
        icon: (
          <FaUser
            className="icon"
            style={{ backgroundColor: "darkred", color: "white" }}
          />
        ),
      };
      break;
    case "product":
      data = {
        title: "NEW PRODUCTS",
        isMoney: false,
        link: "View all products",
        icon: (
          <FaBox
            className="icon"
            style={{ backgroundColor: "darkcyan", color: "white" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "NEW ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <FaReceipt
            className="icon"
            style={{ backgroundColor: "darksalmon", color: "white" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {amount}
          {data.isMoney && "VND"}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
