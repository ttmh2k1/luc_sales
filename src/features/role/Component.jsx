import "./roleStyle.scss";
import Navbar from "../../components/atoms/navbar/Navbar";
import Sidebar from "../../components/atoms/sidebar/Sidebar";
import Datatable from "../../components/atoms/datatable/Datatable";

const RoleComponent = () => {
  return (
    <div className="role">
      <Sidebar />
      <div className="roleContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default RoleComponent;
