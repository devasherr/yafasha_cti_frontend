import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import FileUpload from "../file_upload/FileUpload";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [sharedData, setSharedData] = useState("");

  const updateSharedData = (newData) => {
    setSharedData(newData);
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <FileUpload updateData={updateSharedData} />
        <div className="widgets">
          <Widget data={sharedData} type="Phishing_and_Social_Engineering" />
          <Widget data={sharedData} type="Supply_Chain_Attack" />
          <Widget data={sharedData} type="Ransomware" />
          <Widget data={sharedData} type="DDoS" />
          <Widget data={sharedData} type="Data_Breach" />
          <Widget data={sharedData} type="Zero_day_Exploit" />
        </div>
        <div className="charts">
          <Featured data={sharedData} />
          <Chart title="Cyber Entities" aspect={2 / 1} data={sharedData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
