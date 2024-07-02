import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import BuildIcon from "@mui/icons-material/Build";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import TransformIcon from "@mui/icons-material/Transform";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import WarningIcon from "@mui/icons-material/Warning";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Dashboard</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title"></p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Automate</span>
            </li>
          </Link>
          <Link to="/preprocess" style={{ textDecoration: "none" }}>
            <li>
              <BuildIcon className="icon" />
              <span>Preprocess</span>
            </li>
          </Link>
          <Link to="/sentiment" style={{ textDecoration: "none" }}>
            <li>
              <FindInPageIcon className="icon" />
              <span>Content Detection</span>
            </li>
          </Link>
          <Link to="/classifier" style={{ textDecoration: "none" }}>
            <li>
              <WarningIcon className="icon" />
              <span>Attack Classifier</span>
            </li>
          </Link>
          <Link to="/ner" style={{ textDecoration: "none" }}>
            <li>
              <PersonSearchIcon className="icon" />
              <span>Cyber Entity recognition</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <p>Developed by Yafet Samuel</p>
        <p>yafetsamuel4@gmail.com</p>
      </div>
    </div>
  );
};

export default Sidebar;
