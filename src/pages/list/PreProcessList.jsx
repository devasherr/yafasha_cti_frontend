import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import PreProcess from "../preprocess/Preprocess";

const PreProcessList = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <PreProcess />
      </div>
    </div>
  );
};

export default PreProcessList;
