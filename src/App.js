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
import Product from "./pages/product/index"
import CustomerGroup from "./pages/customerGroup/index"
import Customer from "./pages/customer/index"
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
            </Route>
            <Route path="product">
              <Route index element={<Product />} />
            </Route>
            <Route path="customerGroup">
              <Route index element={<CustomerGroup />} />
            </Route>
            <Route path="customer">
              <Route index element={<Customer />} />
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