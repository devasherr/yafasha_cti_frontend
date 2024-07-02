import "./fileupload.scss";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const FileUpload = ({ updateData }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadFile = () => {
    if (!file) {
      alert("Please select a file.");
      return;
    }

    setLoading(true);

    updateData({
      classifier: {
        Phishing: 0,
        Supply_Chain_Attack: 0,
        Ransomware: 0,
        DDoS: 0,
        Data_Breach: 0,
        Zero_day_Exploit: 0,
      },
      ner: {
        "B-ORGANIZATION": 0,
      },
      sentiment: {
        related: 0,
        unrelated: 0,
      },
    });

    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });

    const formData = new FormData();
    formData.append("the_file", file);
    axios
      .post("http://localhost:5000/upload", formData)
      .then((response) => {
        updateData(response.data);
        setResolved(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was a problem with your axios operation:", error);
        setResolved(true);
        setLoading(false);
      });
  };

  return (
    <div className="upload-container">
      <div className="upload-infos">
        <h1 className="upload-title">CTI TOOL</h1>
        <p>
          This tool helps to differentiate between attacks and to prevent future
          harms that could be done by different Threat actors. this tool helps
          in a proactive defense against sophisticated cyber attacks.
        </p>
        <div className="upload-lists">
          <p>Functionally</p>
          <ul>
            <li>
              <Link to="/sentiment" className="upload-redirect">
                <span style={{ color: "rgba(0, 255, 85, 0.5)" }}>P</span>erform
                sentiment
              </Link>
            </li>
            <li>
              <Link to="/classifier" className="upload-redirect">
                <span style={{ color: "rgba(0, 255, 85, 0.5)" }}>C</span>
                lassifier
              </Link>
            </li>
            <li>
              <Link to="/ner" className="upload-redirect">
                <span style={{ color: "rgba(0, 255, 85, 0.5)" }}>N</span>er
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="upload-perform">
        <p>Provide a CSV file for automated process</p>
        <input type="file" onChange={handleFileChange} />
        <button onClick={uploadFile}>AUTOMATE</button>
      </div>
      {!resolved ? (
        loading ? (
          <div className="loader-class">
            <div className="loader"></div>
            <p className="loader-warn">this might take a while</p>
          </div>
        ) : (
          <div className="upload-result-info">Provide a FILE to analyze</div>
        )
      ) : (
        <h3 className="upload-result-info">Results of analyzed FILE</h3>
      )}
    </div>
  );
};

export default FileUpload;
