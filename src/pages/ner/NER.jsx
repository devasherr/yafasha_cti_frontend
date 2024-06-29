import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ner.scss";

const NER = () => {
  const [nerResult, setNerResult] = useState([]);
  const [value, setValue] = useState({
    text: "",
  });

  const [resolved, setResolved] = useState(false);
  const [loading, setLoading] = useState(false);
  const getNerAnalysis = () => {
    setLoading(true);
    setResolved(true);
    //todo capitalize the text

    axios
      .post("http://localhost:5000/ner", {
        text: value.text,
      })
      .then((res) => {
        setNerResult(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const classToLabel = {
    "B-THREAT-ACTOR": "THR-A",
    "I-THREAT-ACTOR": "THR-A",
    "B-TECHNOLOGY": "TECH",
    "I-TECHNOLOGY": "TECH",
    "B-THREAT": "THR",
    "I-THREAT": "THR",
    "B-ORGANIZATION": "ORG",
    "I-ORGANIZATION": "ORG",
    "B-SECURITY-TEAM": "SEC-T",
    "I-SECURITY-TEAM": "SEC-T",
    "B-VULNERABILITY": "VUL",
    "I-VULNERABILITY": "VUL",
    "B-LOCATION": "LOC",
    "I-LOCATION": "LOC",
    "B-PERSON": "PER",
    "I-PERSON": "PER",
    "B-PRODUCT": "PROD",
    "I-PRODUCT": "PROD",
    "B-DATE": "DATE",
    "I-DATE": "DATE",
  };

  return (
    <>
      <div className="ner-container">
        <div className="ner-title">NER</div>
        <div className="ner-body">
          <div className="ner-sidebar">
            <ul>
              <li>
                LOCATION <div className="rep LOC"></div>
              </li>
              <li>
                THREAT-ACTOR <div className="rep THR-A"></div>
              </li>
              <li>
                TECHNOLOGY <div className="rep TECH"></div>
              </li>
              <li>
                THREAT <div className="rep THR"></div>
              </li>
              <li>
                ORGANIZATION <div className="rep ORG"></div>
              </li>
              <li>
                SECURITY-TEAM <div className="rep SEC-T"></div>
              </li>
              <li>
                VULNERABILITY <div className="rep VUL"></div>
              </li>
              <li>
                PERSON <div className="rep PER"></div>
              </li>
              <li>
                PRODUCT <div className="rep PROD"></div>
              </li>
              <li>
                DATE <div className="rep DATE"></div>
              </li>
            </ul>
          </div>
          <div className="ner-form">
            <textarea
              type="text"
              placeholder="enter here"
              value={value.text}
              onChange={(e) => setValue({ text: e.target.value })}
            ></textarea>

            <button onClick={getNerAnalysis}>process</button>
            {!resolved ? (
              <></>
            ) : loading ? (
              <div className="loader"></div>
            ) : (
              <p>
                {nerResult.map((item, index) => {
                  const key = Object.keys(item)[0];
                  const className = item[key];
                  return (
                    <span
                      key={index}
                      className={`ner-item ${classToLabel[className]}`}
                      data-text={classToLabel[className]}
                    >
                      {key}
                    </span>
                  );
                })}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NER;
