import "./orderStyle.scss"
import Navbar from "../../components/atoms/navbar/Navbar";
import Sidebar from "../../components/atoms/sidebar/Sidebar";

const OrderComponent = () => {
  return (
    <div className="order">
      <Sidebar />
      <div className="orderContainer">
        <Navbar />
        Order components
      </div>
    </div>
  );
};

export default OrderComponent;
