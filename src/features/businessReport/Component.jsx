import "./businessReportStyle.scss"
import Navbar from "../../components/atoms/navbar/Navbar";
import Sidebar from "../../components/atoms/sidebar/Sidebar";

const BusinessReportComponent = () => {
  return (
    <div className="businessReport">
      <Sidebar />
      <div className="businessReportContainer">
        <Navbar />
        Business Report component
      </div>
    </div>
  );
};

export default BusinessReportComponent;