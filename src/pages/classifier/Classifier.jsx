import React, { useEffect, useState } from "react";
import axios from "axios";
import "./classifier.scss";

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
        <div className="classifier-title">Attack Classifier</div>
        <div className="classifier-form">
          <textarea
            type="text"
            placeholder="enter here"
            value={value.text}
            onChange={(e) => setValue({ text: e.target.value })}
          ></textarea>

          <button onClick={getAttackClassifier}>process</button>
        </div>

        {loading ? <div className="loader"></div> : <p>{classifierResult}</p>}
      </div>
    </>
  );
};

export default Classifier;
