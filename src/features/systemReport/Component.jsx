import "./systemReportStyle.scss"
import Navbar from "../../components/atoms/navbar/Navbar";
import Sidebar from "../../components/atoms/sidebar/Sidebar";

const SystemReportComponent = () => {
  return (
    <div className="systemReport">
      <Sidebar />
      <div className="systemReportContainer">
        <Navbar />
        System Report component
      </div>
    </div>
  );
};

export default SystemReportComponent;