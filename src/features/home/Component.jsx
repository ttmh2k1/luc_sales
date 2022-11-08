import React from "react";
import "./homeStyle.scss";
import Sidebar from "../../components/atoms/sidebar/Sidebar";
import Navbar from "../../components/atoms/navbar/Navbar";
import Widget from "../../components/atoms/widget/Widget";
import Featured from "../../components/atoms/featured/Featured";
import Chart from "../../components/atoms/chart/Chart";
import Table from "../../components/atoms/table/Table";

const HomeComponent = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="revenue" />
          <Widget type="customer" />
          <Widget type="product" />
          <Widget type="order" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="listContainer">
          <div className="listTitle">Lastest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
