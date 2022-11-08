import "./userStyle.scss";
import Navbar from "../../components/atoms/navbar/Navbar";
import Sidebar from "../../components/atoms/sidebar/Sidebar";
import Datatable from "../../components/atoms/datatable/Datatable";
import ContentBox from "../../components/atoms/ContentBox";

const UserComponent = () => {
  return (
    <div className="user">
      <Sidebar />
      <div className="userContainer">
        <Navbar />
        <div className="body">
          <ContentBox.Title title="User list" />
          <Datatable />
        </div>
      </div>
    </div>
  );
};

export default UserComponent;
