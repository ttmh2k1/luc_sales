import "./warehouseStyle.scss"
import Navbar from "../../components/atoms/navbar/Navbar";
import Sidebar from "../../components/atoms/sidebar/Sidebar";

const WarehouseComponent = () => {
  return (
    <div className="warehouse">
      <Sidebar />
      <div className="warehouseContainer">
        <Navbar />
        Warehouse Component
      </div>
    </div>
  );
};

export default WarehouseComponent;