import React, { useEffect, useState } from "react";
import axios from "axios";

const NER = () => {
  const [nerResult, setNerResult] = useState([[{ a: "b" }]]);
  const [value, setValue] = useState({
    text: "",
  });

  let flag = false;
  const getNerAnalysis = () => {
    axios
      .post("http://localhost:5000/ner", {
        text: value.text,
      })
      .then((res) => {
        setNerResult(res.data);
        flag = true;
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

        <button onClick={getNerAnalysis}>process</button>
        <p>
          {nerResult[0].map((item, index) => {
            const key = Object.keys(item)[0];
            const returnValue = item[key];
            return (
              <div key={index}>
                {key}: {returnValue}
              </div>
            );
          })}
        </p>
      </div>
    </>
  );
};

export default NER;
