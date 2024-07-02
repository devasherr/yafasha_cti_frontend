import React, { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import "./preprocess.scss";

const cleanText = (text) => {
  if (typeof text === "string") {
    // Remove hyperlinks
    text = text.replace(/http\S+/g, "");
    // Remove non-alphanumeric characters
    text = text.replace(/\W+/g, " ");
  } else {
    text = ""; // If the entry is not a string, return an empty string
  }
  return text;
};

const PreProcess = () => {
  const [inputText, setInputText] = useState("");
  const [cleanedText, setCleanedText] = useState("");
  const [copied, setCopied] = useState(false);

  const handlePreProcess = () => {
    const result = cleanText(inputText);
    setCleanedText(result);
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(cleanedText)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  return (
    <div className="preprocess-container">
      <div className="preprocess-title">Preprocess Analysis</div>
      <div className="preprocess-form">
        <textarea
          type="text"
          placeholder="enter here"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <div className="preprocess-result">
          <button className="copy-button" onClick={handleCopy}>
            copy
            {copied ? (
              <CheckIcon className="icon" />
            ) : (
              <ContentCopyIcon className="icon" />
            )}
          </button>
          {cleanedText}
        </div>
        <div className="buttons">
          <button onClick={handlePreProcess}>PreProcess</button>
        </div>
      </div>
    </div>
  );
};

export default PreProcess;
