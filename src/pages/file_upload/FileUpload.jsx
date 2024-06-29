import React from "react";
import "./fileupload.scss";
import { Link } from "react-router-dom";

const FileUpload = () => {
  const scrollToBottom = () => {
    const defaultScrollHeight = 1000;

    window.scrollTo({
      top: defaultScrollHeight,
      behavior: "smooth",
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
        <input type="file" />
        <button onClick={scrollToBottom}>AUTOMATE</button>
      </div>
      <h3 className="upload-result-info">Results of analyzed FILE</h3>
    </div>
  );
};

export default FileUpload;
