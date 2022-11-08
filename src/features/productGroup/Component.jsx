import "./productGroupStyle.scss"
import Navbar from "../../components/atoms/navbar/Navbar";
import Sidebar from "../../components/atoms/sidebar/Sidebar";

const ProductGroupComponent = () => {
  return (
    <div className="productGroup">
      <Sidebar />
      <div className="productGroupContainer">
        <Navbar />
        Product Group Component
      </div>
    </div>
  );
};

export default ProductGroupComponent;