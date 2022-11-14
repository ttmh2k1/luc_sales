// eslint-disable-next-line
import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/index"
import LoginSystem from "./pages/login/system/loginSystem"
import ForgotPassword from "./pages/login/forgotPw/forgotPassword"
import User from "./pages/user/index"
import ViewUser from "./pages/user/view/viewUser"
import Role from "./pages/role/index"
import LogSystem from "./pages/logSystem/index"
import Order from "./pages/order/index"
import ProductGroup from "./pages/productGroup/index"
import ViewProductGroup from "./pages/productGroup/view/viewProductGroup"
import UpdateProductGroup from "./pages/productGroup/update/updateProductGroup"
import Product from "./pages/product/index"
import ViewProduct from "./pages/product/view/viewProduct"
import UpdateProduct from "./pages/product/update/updateProduct"
import CustomerGroup from "./pages/customerGroup/index"
import ViewCustomerGroup from "./pages/customerGroup/view/viewCustomerGroup"
import UpdateCustomerGroup from "./pages/customerGroup/update/updateCustomerGroup"
import Customer from "./pages/customer/index"
import ViewCustomer from "./pages/customer/view/viewCustomer"
import UpdateCustomer from "./pages/customer/update/updateCustomer"
import Warehouse from "./pages/warehouse/index"
import BusinessReport from "./pages/businessReport/index"
import SystemReport from "./pages/systemReport/index"
import ChangePassword from "./pages/changePassword"


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<LoginSystem />} />
            <Route path="user">
              <Route index element={<User />} />
              <Route path=":userId" element={<ViewUser />} />
            </Route>
            <Route path="role">
              <Route index element={<Role />} />
            </Route>
            <Route path="logs">
              <Route index element={<LogSystem />} />
            </Route>
            <Route path="order">
              <Route index element={<Order />} />
            </Route>
            <Route path="productGroup">
              <Route index element={<ProductGroup />} />
              <Route path="view">
                <Route path=":productGroupId" element={<ViewProductGroup />} />
              </Route>
              <Route path="update">
                <Route path=":productGroupId" element={<UpdateProductGroup />} />
              </Route>
            </Route>
            <Route path="product">
              <Route index element={<Product />} />
              <Route path="view">
                <Route path=":productId" element={<ViewProduct />} />
              </Route>
              <Route path="update">
                <Route path=":productId" element={<UpdateProduct />} />
              </Route>
            </Route>
            <Route path="customerGroup">
              <Route index element={<CustomerGroup />} />
              <Route path="view">
                <Route path=":customerGroupId" element={<ViewCustomerGroup />} />
              </Route>
              <Route path="update">
                <Route path=":customerGroupId" element={<UpdateCustomerGroup />} />
              </Route>
            </Route>
            <Route path="customer">
              <Route index element={<Customer />} />
              <Route path="view">
                <Route path=":customerId" element={<ViewCustomer />} />
              </Route>
              <Route path="update">
                <Route path=":customerId" element={<UpdateCustomer />} />
              </Route>
            </Route>
            <Route path="warehouse">
              <Route index element={<Warehouse />} />
            </Route>
            <Route path="businessReport">
              <Route index element={<BusinessReport />} />
            </Route>
            <Route path="systemReport">
              <Route index element={<SystemReport />} />
            </Route>
            <Route path="forgotPassword" exact element={<ForgotPassword />} />
            <Route path="changePassword" exact element={<ChangePassword />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;