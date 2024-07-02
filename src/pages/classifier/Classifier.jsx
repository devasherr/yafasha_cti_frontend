import React, { useEffect, useState } from "react";
import axios from "axios";
import "./classifier.scss";

const resultWordMap = {
  Phishing_and_Social_Engineering: "Phishing",
  Supply_Chain_Attack: "Supply Chain Attack",
  Zero_day_Exploit: "Zero day Exploit",
  Ransomware: "Ransomware",
  DDoS: "DDoS",
  Data_Breach: "Data_Breach",
  OTHER: "OTHER",
};

const Classifier = () => {
  const [classifierResult, setClassifierResult] = useState([]);
  const [value, setValue] = useState({
    text: "",
  });
  const [loading, setLoading] = useState(false);

  const getAttackClassifier = () => {
    if (!value.text) {
      return;
    }

    setLoading(true);
    axios
      .post("http://localhost:5000/classifier", {
        text: value.text,
      })
      .then((res) => {
        setClassifierResult(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="classifier-container">
        <div className="classifier-title">Text Classification</div>
        <div className="classifier-form">
          <textarea
            type="text"
            placeholder="enter here"
            value={value.text}
            onChange={(e) => setValue({ text: e.target.value })}
          ></textarea>

          <button onClick={getAttackClassifier}>process</button>
        </div>

        {loading ? (
          <div className="loader"></div>
        ) : (
          <p>{resultWordMap[classifierResult]}</p>
        )}
      </div>
    </>
  );
};

export default Classifier;
