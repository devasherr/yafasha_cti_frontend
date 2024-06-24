import React, { useEffect, useState } from "react";
import axios from "axios";

const Classifier = () => {
  const [classifierResult, setClassifierResult] = useState([]);
  const [value, setValue] = useState({
    text: "",
  });

  const getClassifierAnalysis = () => {
    axios
      .post("http://localhost:5000/classifier", {
        text: value.text,
      })
      .then((res) => {
        setClassifierResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="enter here"
          value={value.text}
          onChange={(e) => setValue({ text: e.target.value })}
        ></input>

        <button onClick={getClassifierAnalysis}>process</button>
        <p>{classifierResult}</p>
      </div>
    </>
  );
};

export default Classifier;
