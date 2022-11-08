import "./productStyle.scss"
import Navbar from "../../components/atoms/navbar/Navbar";
import Sidebar from "../../components/atoms/sidebar/Sidebar";

const ProductComponent = () => {
  return (
    <div className="product">
      <Sidebar />
      <div className="productContainer">
        <Navbar />
        product component
      </div>
    </div>
  );
};

export default ProductComponent;