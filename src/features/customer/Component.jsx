import "./customerStyle.scss"
import Navbar from "../../components/atoms/navbar/Navbar";
import Sidebar from "../../components/atoms/sidebar/Sidebar";

const CustomerComponent = () => {
  return (
    <div className="customer">
      <Sidebar />
      <div className="customerContainer">
        <Navbar />
        customer component
      </div>
    </div>
  );
};

export default CustomerComponent;