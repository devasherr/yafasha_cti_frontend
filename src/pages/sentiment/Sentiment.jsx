import React, { useEffect, useState } from "react";
import axios from "axios";
import "./sentiment.scss";

const Sentiment = () => {
  const [sentimentResult, setSentimentResult] = useState([]);
  const [value, setValue] = useState({
    text: "",
  });
  const [loading, setLoading] = useState(false);

  const getSentimentAnalysis = () => {
    setLoading(true);
    axios
      .post("http://localhost:5000/sentiment", {
        text: value.text,
      })
      .then((res) => {
        setSentimentResult(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="sentiment-container">
        <div className="sentiment-title">Sentiment analysis</div>
        <div className="sentiment-form">
          <textarea
            type="text"
            placeholder="enter here"
            value={value.text}
            onChange={(e) => setValue({ text: e.target.value })}
          ></textarea>

          <button onClick={getSentimentAnalysis}>process</button>
        </div>

        {loading ? (
          <div className="loader"></div>
        ) : (
          <p className={sentimentResult}>{sentimentResult}</p>
        )}
      </div>
    </>
  );
};

export default Sentiment;
