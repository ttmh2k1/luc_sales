import "./customerGroupStyle.scss"
import Navbar from "../../components/atoms/navbar/Navbar";
import Sidebar from "../../components/atoms/sidebar/Sidebar";

const CustomerGroupComponent = () => {
  return (
    <div className="customerGroup">
      <Sidebar />
      <div className="customerGroupContainer">
        <Navbar />
        customer Group component
      </div>
    </div>
  );
};

export default CustomerGroupComponent;