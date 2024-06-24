import React, { useEffect, useState } from "react";
import axios from "axios";

const Sentiment = () => {
  const [sentimentResult, setSentimentResult] = useState([]);
  const [value, setValue] = useState({
    text: "",
  });

  const getSentimentAnalysis = () => {
    axios
      .post("http://localhost:5000/sentiment", {
        text: value.text,
      })
      .then((res) => {
        setSentimentResult(res.data);
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

        <button onClick={getSentimentAnalysis}>process</button>
        <p>{sentimentResult}</p>
      </div>
    </>
  );
};

export default Sentiment;
