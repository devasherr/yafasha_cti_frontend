import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Widget = ({ data, type }) => {
  const wordMap = {
    Phishing_and_Social_Engineering: "Phishing",
    Supply_Chain_Attack: "Supply Chain Attack",
    Ransomware: "Ransomware",
    DDoS: "DDoS",
    Data_Breach: "Data Breach",
    Zero_day_Exploit: "Zero Day",
  };

  console.log(data);
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{wordMap[type]}</span>
        <span className="counter">
          {data ? (data.classifier[type] ? data.classifier[type] : 0) : 0}
        </span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
        </div>
        <div className="percentage negative">
          <KeyboardArrowUpIcon />
        </div>
        {}
      </div>
    </div>
  );
};

export default Widget;
